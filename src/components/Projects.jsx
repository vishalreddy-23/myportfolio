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
        <h3 className="text-3xl font-semibold text-emerald-700 mb-2">
          🛒 Online Food Ordering DBMS
        </h3>
        <p className="text-gray-700 text-lg">
          Online Food Ordering DBMS is a database-driven application that
          manages restaurants, menus, orders, and customers efficiently. It
          supports user authentication, coupon-based discounts, multiple payment
          methods, and item ratings. The system is modeled using an ER diagram
          and normalized up to BCNF for data consistency. Complex relationships
          like M:N and 1:N are implemented using foreign keys and junction
          tables. SQL queries are used for inserting, retrieving, and managing
          real-world transactional data. This project demonstrates strong
          command over relational database design and query formulation.
        </p>
      </div>

      <div className="p-6 bg-emerald-100 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-3xl font-semibold text-emerald-700 mb-2">
          💡 Medical Recommendation System
        </h3>
        <p className="text-gray-700 text-lg">
          The Medical Recommendation System is a machine learning-based project
          that predicts potential diseases based on user-input symptoms and
          provides relevant suggestions for precautions, medications, workouts,
          and diet. Developed using Google Colab, the system employs multiple
          classification algorithms such as Support Vector Classifier with a
          linear kernel, Random Forest, Multinomial Naive Bayes, Gradient
          Boosting, and K-Nearest Neighbors to enhance prediction accuracy. It
          is trained on a structured dataset and aims to offer quick and
          supportive health guidance. This project highlights the practical
          application of machine learning in the healthcare domain by enabling
          early detection and personalized recommendations.
        </p>
      </div>

      <div className="p-6 bg-emerald-100 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-3xl font-semibold text-emerald-700 mb-3">
          Budget Manager
        </h3>
        <p className="text-gray-700 text-lg">
          Budget Manager is a responsive web application developed using HTML,
          CSS, and JavaScript that enables users to manage personal finances by
          tracking income and expenses. The project applies Data Structures and
          Algorithms (DSA) concepts like arrays and methods such as map(),
          filter(), and reduce() to calculate real-time balances and
          category-wise totals. An undo feature is implemented using a stack to
          reverse the last transaction. The interface is designed to be clean,
          intuitive, and mobile-friendly. This project demonstrates practical
          DSA use in a real-world budgeting tool while showcasing strong
          front-end development skills.
        </p>
      </div>

      <div className="p-6 bg-emerald-100 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-3xl font-semibold text-emerald-700 mb-3">
          Portfolio Website
        </h3>
        <p>
          A personal portfolio built using React and Tailwind CSS to showcase my
          projects, skills, and resume. Deployed on Vercel.
        </p>
        <div className="text-gray-700 text-lg">
          <a
            href="https://github.com/vishalreddy-23/myportfolio"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code{" "}
          </a>
          <a
            href="https://myportfolio-wheat-one-88.vercel.app"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
