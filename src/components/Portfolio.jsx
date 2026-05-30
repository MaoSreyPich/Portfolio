const projects = [
  {
    title: "Student Management System",
    category: "Full-Stack Web App",
    description: "CRUD system using Laravel and MySQL",
  },
  {
    title: "Face Recognition System",
    category: "AI / Computer Vision",
    description: "Face detection using Python, OpenCV, TensorFlow",
  },
  {
    title: "Vue Dashboard UI",
    category: "Frontend Development",
    description: "Responsive admin dashboard using Vue.js",
  },
];

function Portfolio() {
  return (
    <section>
      <h1>My Projects</h1>

      <div className="projects">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <small>{project.description}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;