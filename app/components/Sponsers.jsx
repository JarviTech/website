"use client";

export default function Sponsers() {
  return (
    <div className="flex h-screen text-white justify-center m-[-100px]">
        <div className="relative w-[70%] h-[70%] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-[#0b0f1a] border border-[#00aaff] shadow-[0_0_40px_10px_rgba(0,170,255,0.5)]">
  {/* Chatbot content placeholder */}
  <div
  className="relative z-10 flex items-center justify-center "
>
  <img
    src="/chat-placeholder.png"
    alt="Chatbot Placeholder"
    className="w-1/2 opacity-80"
  />
  
</div>

</div>


        {/* Footer */}
        <div className="absolute bottom-4 w-full text-center text-gray-400">
          <p className="mb-2 text-2xl">Our sponsor & partners</p>
          <div className="flex text-3xl justify-center gap-8 text-white font-medium">
            <span>✊ Rise</span>
            <span>🐾 Clues</span>
            <span>☁️ Cloud</span>
            <span>🧭 Trace</span>
            <span>🎵 Volume</span>
          </div>
        </div>
    </div>
  );
}
