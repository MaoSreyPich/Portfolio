function About() {
  return (
    <section>
      <h1>About Me</h1>

      <p>
        I am a third-year Information Technology student with a passion
        for web development, software engineering, and database systems.
        I enjoy building responsive web applications and continuously
        learning new technologies to improve my skills.
      </p>

      <h2>What I'm Doing</h2>

      <div className="services">
        <div className="card">
          <h3>Frontend Development</h3>
          <p>
            Building responsive and user-friendly interfaces using React,
            Vue.js, HTML, CSS, and JavaScript.
          </p>
        </div>

        <div className="card">
          <h3>Backend Development</h3>
          <p>
            Developing secure and scalable web applications using Laravel,
            PHP, Python, and RESTful APIs.
          </p>
        </div>

        <div className="card">
          <h3>Database Management</h3>
          <p>
            Designing and managing databases with MySQL and PostgreSQL
            for efficient data storage and retrieval.
          </p>
        </div>

        <div className="card">
          <h3>AI & Computer Vision</h3>
          <p>
            Exploring machine learning, face recognition, and computer
            vision projects using Python, TensorFlow, and OpenCV.
          </p>
        </div>
        <div className="card">
          <h3>Networking</h3>
          <p>
            Understanding of basic networking concepts such as IP addressing,
            routing, and troubleshooting network issues.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;