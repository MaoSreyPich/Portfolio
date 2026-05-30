function Resume() {
  return (
    <section className="resume">

      <h1 className="section-title">Resume</h1>

      {/* EDUCATION */}
      <h2 className="sub-title">Education</h2>

      <div className="timeline">

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="timeline-content">
            <h3>Studying Bachelor degree of Computer Science at Royal University of Phnom Penh.</h3>
            <span>2023 — Present</span>
          </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="timeline-content">
            <h3>Finished Baccalaureate II at Hunsen krokor High School.</h3>
            <span>2020 — 2023</span>
          </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="timeline-content">
            <h3>Finished Diploma at anlong tnot Secondary School.</h3>
            <span>2017 — 2020</span>
          </div>
        </div>

      </div>

      {/* EXPERIENCE */}
      <h2 className="sub-title">Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="timeline-content">
            <h3>Frontend Web Development Intern</h3>
            <span>10th June – 10th August, 2025 ( 3 Month )</span>
                <p>
                Developed responsive web interfaces for KINDERGARTEN_BUDDY system,
                 built reusable UI components, integrated APIs, fixed bugs, improved performance, and collaborated using GitHub.
                </p>
            </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="timeline-content">
            <h3>Backend Web Development Intern</h3>
            <span>7th February – 11th April, 2026 ( 10 Weeks )</span>
            <p>
                Developed backend features for the System Coffee project, 
                created CRUD operations and APIs,
                 managed database operations and backend logic, 
                 and tested, debugged, and collaborated using GitHub.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;