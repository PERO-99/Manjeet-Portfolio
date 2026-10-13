import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = false;

                const rawName = child.name || "";
                const cleanName = rawName.toLowerCase().replace(/[^a-z0-9]/g, "");

                // Helper to customize material colors while preserving shaders & morphs
                const colorize = (
                  colorHex: string,
                  roughness = 0.6,
                  metalness = 0.05
                ) => {
                  if (mesh.material) {
                    const applyToMat = (m: any) => {
                      const cloned = m.clone();
                      cloned.color = new THREE.Color(colorHex);
                      cloned.vertexColors = false;
                      cloned.roughness = roughness;
                      cloned.metalness = metalness;
                      cloned.needsUpdate = true;
                      return cloned;
                    };
                    if (Array.isArray(mesh.material)) {
                      mesh.material = mesh.material.map(applyToMat);
                    } else {
                      mesh.material = applyToMat(mesh.material);
                    }
                  }
                };

                // Warm natural skin tone for face, ears, neck, hands
                if (
                  cleanName.includes("plane007") ||
                  cleanName.includes("face") ||
                  cleanName.includes("ear001") ||
                  cleanName.includes("neck") ||
                  cleanName.includes("hand")
                ) {
                  colorize("#e8a87c", 0.45, 0.0);
                }
                // Hair & Eyebrows
                else if (cleanName.includes("hair")) {
                  colorize("#181414", 0.65, 0.1);
                } else if (cleanName.includes("eyebrow")) {
                  colorize("#151212", 0.7, 0.05);
                }
                // Shirt: Stylish vibrant royal blue
                else if (
                  cleanName.includes("bodyshirt") ||
                  cleanName.includes("shirt")
                ) {
                  colorize("#2563eb", 0.65, 0.02);
                }
                // Pants: Sleek dark charcoal / denim
                else if (cleanName.includes("pant")) {
                  colorize("#1e2430", 0.8, 0.05);
                }
                // Shoes: Modern dark sneakers
                else if (cleanName.includes("shoe")) {
                  colorize("#20232a", 0.7, 0.1);
                }
                // Sneaker Sole: Clean crisp white
                else if (cleanName.includes("sole")) {
                  colorize("#f1f5f9", 0.45, 0.05);
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
