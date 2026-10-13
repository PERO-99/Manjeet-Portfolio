import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science Engineering (AI &amp; ML)</h4>
                <h5>Rungta International Skills University</h5>
              </div>
              <h3>2025–2029</h3>
            </div>
            <p>
              Pursuing B.Tech in CSE with specialization in AI &amp; ML. Class 12: 80% · Class 10: 93%.
              Actively building AI-powered apps and participating in hackathons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finalist &amp; Certified — PromptWars</h4>
                <h5>Google for Developers × Hack2Skill</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Earned certificates across 4 challenge builds: Government Election Platform, Environment Awareness Platform,
              Sports IP Protection Engine, and Smart Stadiums &amp; Tournament Ops for FIFA World Cup 2026™.
              Finalist — Bharat Budget Quest 2026 · Runner-Up — MVP Builders College Event.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI &amp; Full-Stack Developer</h4>
                <h5>Independent Projects &amp; Hackathons</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered platforms (Dost AI — Legal &amp; Gov Platform for India), security monitoring
              prototypes, and carbon emission awareness tools. Active on Devfolio, Hack2Skill, Kaggle, and MLH.
              1st Place — Tata Steel Science Project Competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
