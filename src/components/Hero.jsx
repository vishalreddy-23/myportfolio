export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-5 mt-20 max-w-6xl mx-auto">

          <div className="text-center mt-24 px-4">
  <p className="text-2xl md:text-3xl font-semibold text-green drop-shadow-md">
    Welcome to My Portfolio
  </p>
  
  <p className="text-lg md:text-xl text-red mt-4 max-w-2xl mx-auto drop-shadow-md">
 I’m Vishal — a curious learner, a passionate creator, and someone who believes in becoming better every single day.
  </p>
</div>
            <img
                src="/image.png"
                alt="jvr"
                className="w-40 h-auto mx-auto mt-5 rounded-full shadow-md"
            />
        </section>
    );
}
