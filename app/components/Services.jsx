"use client";



export default function Services() {

    const features = [
    {
      image: "/service.png",
      icon: "/icon1.svg",
      subtitle: "Anything, Anytime",
      title: "It’s Like Having a Second Brain",
      description:
        "Each tool is crafted to help you relax, recharge, and wake up feeling refreshed. Explore the key benefits that make your sleep better.",
      buttonText: "Read More",
    },
    {
      image: "/service.png",
      icon: "/icon2.svg",
      subtitle: "Fast, Reliable",
      title: "Automate Everyday Tasks",
      description:
        "Streamline your workflows with powerful automation tools built for speed and accuracy.",
      buttonText: "Learn More",
    },
  ]

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-[#0b0f1a] py-32 overflow-hidden">
      {/* Glowing top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]" />
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent blur-[12px]" />

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-semibold text-white mb-4">
          Turn Conversations Into Actions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Each tool is crafted to help you relax, recharge, and wake up feeling refreshed.
          Explore the key benefits that make your sleep better.
        </p>
      </div>
       <div className=" py-20 px-6 flex flex-col items-center overflow-hidden">
      {features.map((f, i) => (
        <div
          key={i}
          className={`relative mt-5 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-2 text-white ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
        

          <div className="relative flex-1 w-[50%] flex flex-col text-start space-y-3">
            <img src={f.icon} alt="" className="w-10 h-10" />
            <h4 className="text-blue-300  text-sm">{f.subtitle}</h4>
            <h2 className="text-3xl font-bold">{f.title}</h2>
            <p className="text-gray-300">{f.description}</p>
            <button className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition">
              {f.buttonText}
            </button>
          </div>

          <div className="relative w-[50%] h-[90vh]  flex-1 flex justify-center">
            <img
              src={f.image}
              alt={f.title}
              className="w-[80%] h-[full] object-contain"
            />
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
