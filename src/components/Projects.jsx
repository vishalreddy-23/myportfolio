export default function Projects() {
    return (
        <section
            id="projects"
            className="my-20 w-full flex flex-col gap-8 max-w-5xl mx-auto px-4"
        >
            <h2 className="text-5xl text-emerald-500 font-bold text-center mb-8">
                My Projects
            </h2>
 
<div className="p-6 bg-emerald-100 rounded-lg shadow hover:shadow-lg transition">
  <h3 className="text-3xl font-semibold text-emerald-700 mb-2">🛒 Food Ordering DBMS</h3>
  <p className="text-gray-700 text-lg">
    A database-driven project that simulates an online food ordering system with user registration, order placement, and admin-side order management using SQL.
  </p>
</div>

<div className="p-6 bg-emerald-100 rounded-lg shadow hover:shadow-lg transition">
  <h3 className="text-3xl font-semibold text-emerald-700 mb-2">💡 Medical Recommendation System</h3>
  <p className="text-gray-700 text-lg">
    A machine learning project that predicts diseases based on symptoms and suggests appropriate precautions using classification algorithms in Python.
  </p>
</div>

 

            <div className="p-6 bg-emerald-100 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-3xl font-semibold text-emerald-700 mb-3">
                    🎮 15 Puzzle Game
                </h3>
                <p className="text-gray-700 text-lg">
                    A tile-based sliding puzzle game built with React. The game consists of
                    15 numbered tiles placed randomly on a 4×4 grid with one empty space.
                    Players need to arrange the tiles in order by moving them one at a time
                    into the empty space. This project demonstrates logic building, state
                    management, and interactive UI design using React components.
                </p>
            </div>
            <div className="project bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
  <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
  <p className="text-gray-700 mb-3">
    A fully responsive personal portfolio built using React, Tailwind CSS, and deployed via Vercel. 
    It showcases my skills, projects, resume, and contact details in a clean, modern UI.
  </p>
  <div className="flex space-x-4">
    <a
      href="https://myportfolio-wheat-one-88.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline font-medium"
    >
      Live Demo
    </a>
    <a
      href="https://github.com/vishalreddy-23/myportfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline font-medium"
    >
      View Code
    </a>
  </div>
</div>

        </section>
    );
}
