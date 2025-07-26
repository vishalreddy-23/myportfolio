export default function About() {
  
  return (
    <section
      id="about"
      className="my-20 px-6 py-10 max-w-4xl mx-auto text-center bg-white/10 text-black rounded-xl backdrop-blur-sm shadow-md"
    >
      <h2 className="text-4xl font-bold text-emerald-400 mb-6 drop-shadow">
        About Me
      </h2>

      <p className="text-lg leading-7 drop-shadow text-black-100">
        I'm <span className="font-bold text-white">Vishal Reddy</span>, a B.Tech student in Electronics and Communication Engineering at NIT Warangal (2022–2026), aspiring to become a Software Development Engineer (SDE).
        <br /><br />
        I have a strong foundation in <strong>Data Structures & Algorithms</strong>, <strong>OOPs</strong>, and <strong>DBMS</strong>, along with frontend development skills using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>. I'm passionate about building clean UIs and solving real-world problems through code.
      </p>
      <div className="mt-10">
  <a
    href="/resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-emerald-600 transition"
  >
    📄 Download Resume
  </a>
</div>

    </section>
  );
}
