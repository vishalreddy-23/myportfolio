// src/components/Skills.jsx
export default function Skills() {
  return (
    <section
      id="skills"
      className="my-20 px-6 py-10 max-w-4xl mx-auto text-center bg-black/60 text-white rounded-lg backdrop-blur-md shadow-lg"
    >
      <h2 className="text-4xl font-bold text-emerald-300 mb-6">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
        <div>💻 C++</div>
        <div>📚 DSA</div>
        <div>🧠 OOPs</div>
        <div>🗃️ DBMS</div>
        <div>🌐 HTML, CSS, JavaScript</div>
        <div>⚛️ React.js</div>
        <div>🛠️ VS Code</div>
        <div>📊 Google Colab</div>
      </div>
    </section>
  );
}
