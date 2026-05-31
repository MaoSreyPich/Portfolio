const projects = [
  {
    title: "Coffee Management System",
    category: "Full-Stack Web Application",
    description:
      "Built a coffee shop management system using React, Laravel, and MySQL with CRUD operations, authentication, and API integration.",
  },
  {
    title: "Food Management System",
    category: "Full-Stack Web Application",
    description:
      "Developed a food management system using Laravel, MySQL, HTML, and CSS to manage products, orders, and customer information.",
  },
  {
    title: "E-Commerce Skincare Website",
    category: "Frontend Development",
    description:
      "Designed and developed a responsive skincare e-commerce website using Vue.js with a modern and user-friendly interface.",
  },
  {
  title: "Online Skincare Store",
  category: "Backend Development",
  description:
    "Developed an online skincare store using PHP, HTML, and CSS with product management, user authentication, and database integration.",
  },
  {
    title: "Face Recognition System",
    category: "AI & Computer Vision",
    description:
      "Created a face recognition application using Python, OpenCV, TensorFlow, and DeepFace for real-time facial identification.",
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