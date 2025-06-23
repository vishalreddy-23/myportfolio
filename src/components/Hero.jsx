export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-5 mt-20 max-w-6xl mx-auto">
            {/* Left Side - Text */}
          <div className="text-center mt-24 px-4">
  <p className="text-2xl md:text-3xl font-semibold text-green drop-shadow-md">
    Welcome to Vishal's Portfolio
  </p>
  
  <p className="text-lg md:text-xl text-red mt-4 max-w-2xl mx-auto drop-shadow-md">
    I'm Vishal — a learner, builder, and someone who believes in improving every day.
  </p>
</div>
            {/* Right Side - Online Image */}
            <img
                src="/image.png"
                alt="jvr"
                className="w-32 h-auto mx-auto mt-5 rounded-full shadow-md"

            />
        </section>
    );
}
