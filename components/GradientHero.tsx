'use client';

export default function GradientHero({
  height = 'h-[500px]',
  showCheckmark = true,
  showSymbols = true,
  animated = false,
}) {
  return (
    <div className={`relative ${height} rounded-2xl overflow-hidden 
      bg-gradient-to-br from-cyan-500/10 to-purple-500/10 
      border border-cyan-500/20 flex items-center justify-center`}>
      
      <svg width="100%" height="100%" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity={1} />
            <stop offset="100%" stopColor="#b366ff" stopOpacity={1} />
          </linearGradient>
        </defs>
        
        <circle cx="200" cy="200" r="150" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.2" />
        
        {showSymbols && (
          <>
            <text x="150" y="180" fontFamily="monospace" fontSize="60" fill="#00f0ff" opacity="0.6">&lt;/&gt;</text>
            <text x="100" y="130" fontFamily="monospace" fontSize="40" fill="#b366ff" opacity="0.4">{}</text>
            <text x="250" y="250" fontFamily="monospace" fontSize="35" fill="#ff3366" opacity="0.5">fn()</text>
          </>
        )}
        
        <circle cx="200" cy="200" r="60" fill="url(#grad1)" opacity="0.2" />
        
        {showCheckmark && (
          <path d="M 180 200 L 200 220 L 240 180" stroke="#00f0ff" strokeWidth="4" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
}