export default function Footer() {
  return (
    <footer 
      className="py-6 relative overflow-hidden"
      data-aos="zoom-in-up"
    >
      <div className="w-full flex flex-col items-center justify-center min-h-[50vh]">
        {/* Full width PRESSA - tight spacing */}
        <div 
          className="flex items-center justify-center w-full px-2"
          data-aos="zoom-out-up"
          data-aos-delay="200"
        >
          {/* P */}
          <svg viewBox="0 0 100 150" className="w-[15vw] h-auto ">
            <defs>
              <linearGradient id="gradP" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '120px', fontWeight: '900', fill: 'url(#gradP)', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
              P
            </text>
          </svg>

          {/* R */}
          <svg viewBox="0 0 100 150" className="w-[15vw] h-auto -mr-[2vw]">
            <defs>
              <linearGradient id="gradR" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '120px', fontWeight: '900', fill: 'url(#gradR)', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
              R
            </text>
          </svg>

          {/* E */}
          <svg viewBox="0 0 100 150" className="w-[15vw] h-auto -mr-[2vw]">
            <defs>
              <linearGradient id="gradE" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '120px', fontWeight: '900', fill: 'url(#gradE)', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
              E
            </text>
          </svg>

          {/* S */}
          <svg viewBox="0 0 100 150" className="w-[15vw] h-auto -mr-[2vw]">
            <defs>
              <linearGradient id="gradS1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '120px', fontWeight: '900', fill: 'url(#gradS1)', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
              S
            </text>
          </svg>

          {/* S */}
          <svg viewBox="0 0 100 150" className="w-[15vw] h-auto -mr-[2vw]">
            <defs>
              <linearGradient id="gradS2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '120px', fontWeight: '900', fill: 'url(#gradS2)', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
              S
            </text>
          </svg>

          {/* A */}
          <svg viewBox="0 0 100 150" className="w-[15vw] h-auto">
            <defs>
              <linearGradient id="gradA" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '120px', fontWeight: '900', fill: 'url(#gradA)', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.05em' }}>
              A
            </text>
          </svg>
        </div>
        
        <p 
          className="text-white/50 text-sm mt-2 py-8"
          data-aos="fade-up"
        >
          2K25 PRESSA | All Rights Reserved | Design by elza
        </p>
      </div>
    </footer>
  );
}