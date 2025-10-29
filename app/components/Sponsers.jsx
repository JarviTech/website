"use client";

export default function Sponsers() {
  return (
    <div className="flex flex-col items-center text-white justify-center pb-10">
        <div className="relative w-[70%] h-[70vh] mt-[-100px] flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-[#0b0f1a] border border-[#00aaff] shadow-[0_0_40px_10px_rgba(0,170,255,0.5)]">
  
  <div
  className="relative flex items-center justify-center "
>
  <img
    src="/chat-placeholder.png"
    alt="Chatbot Placeholder"
    className="w-1/2 opacity-80"
  />
  
</div>

</div>


        {/* Footer */}
        <div className="w-full text-center my-10 text-gray-400">
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
