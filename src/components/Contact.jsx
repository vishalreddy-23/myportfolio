// src/components/Contact.jsx
export default function Contact() {
    return (
        <section id="contact" className="my-40 text-center max-w-5xl mx-auto p-6">
            <h2 className="text-5xl font-bold text-emerald-500 mb-10">Contact</h2>

            <div className="flex flex-col gap-6 items-center justify-center text-lg text-gray-700">
                <a
                    href="mailto:jvishalreddy5@gmail.com"
                    className="hover:text-emerald-600 transition duration-300"
                >
                    📧 <span className="font-semibold">Email:</span>{" "}
                    <span className="text-emerald-500 font-bold">jvishalreddy5@gmail.com</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/j-vishal-reddy-43720a286/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-600 transition duration-300"
                >
                    🔗 <span className="font-semibold">LinkedIn:</span>{" "}
                    <span className="text-emerald-500 font-bold">J Vishal Reddy</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/j-vishal-reddy-43720a286/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-600 transition duration-300"
                >
                    🔗 <span className="font-semibold">Github:</span>{" "}
                    <span className="text-emerald-500 font-bold">link to be kept </span>
                </a>
            </div>
        </section>
    );
}
