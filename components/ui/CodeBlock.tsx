// components/CodeBlock.jsx
export default function CodeBlock() {
  return (
    <div className="relative bg-gray-900 rounded-2xl p-4 md:p-6 border border-cyan-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,240,255,0.3)] overflow-hidden w-full max-w-lg">
      {/* Barre colorée en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      
      {/* Dots macOS */}
      <div className="flex gap-2 mb-3 mt-1">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      
      {/* Code */}
      <div className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-gray-400">
        <div><span className="text-purple-400">const</span> developer = &#123;</div>
        <div className="pl-4">
          <span className="text-cyan-400">name:</span>{" "}
          <span className="text-pink-400">&quot;Votre Nom&quot;</span>,
        </div>
        <div className="pl-4">
          <span className="text-cyan-400">skills:</span> [
          <span className="text-pink-400">&quot;Flutter&quot;</span>,{" "}
          <span className="text-pink-400">&quot;Next.js&quot;</span>,
        </div>
        <div className="pl-8 sm:pl-12">
          <span className="text-pink-400">&quot;Nest.js&quot;</span>,{" "}
          <span className="text-pink-400">&quot;Firebase&quot;</span>],
        </div>
        <div className="pl-4">
          <span className="text-cyan-400">passion:</span>{" "}
          <span className="text-pink-400">&quot;Coder l&apos;impossible&quot;</span>
        </div>
        <div>&#125;;</div>
      </div>
    </div>
  );
}