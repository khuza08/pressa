export default function Footer() {
  return (
    <footer 
      className="py-6 relative overflow-hidden"
      data-aos="zoom-in-up"
    >
      {/* Load Bebas Neue Font */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>

      <div className="w-full flex flex-col items-center justify-center min-h-[50vh]">
        {/* Full width PRESSA - BEBAS NEUE */}
        <div 
          className="flex items-center justify-center w-full overflow-hidden"
          data-aos="zoom-out-up"
          data-aos-delay="200"
        >
          {/* P */}
          <svg viewBox="0 0 100 150" className="w-[17vw] h-auto -mr-[3.5vw]">
            <defs>
              <linearGradient id="gradP" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '130px', fontWeight: '400', fill: 'url(#gradP)', fontFamily: "'Bebas Neue', sans-serif" }}>
              P
            </text>
          </svg>

          {/* R */}
          <svg viewBox="0 0 100 150" className="w-[17vw] h-auto -mr-[3.5vw]">
            <defs>
              <linearGradient id="gradR" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '130px', fontWeight: '400', fill: 'url(#gradR)', fontFamily: "'Bebas Neue', sans-serif" }}>
              R
            </text>
          </svg>

          {/* E */}
          <svg viewBox="0 0 100 150" className="w-[17vw] h-auto -mr-[3.5vw]">
            <defs>
              <linearGradient id="gradE" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '130px', fontWeight: '400', fill: 'url(#gradE)', fontFamily: "'Bebas Neue', sans-serif" }}>
              E
            </text>
          </svg>

          {/* S */}
          <svg viewBox="0 0 100 150" className="w-[17vw] h-auto -mr-[3.5vw]">
            <defs>
              <linearGradient id="gradS1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '130px', fontWeight: '400', fill: 'url(#gradS1)', fontFamily: "'Bebas Neue', sans-serif" }}>
              S
            </text>
          </svg>

          {/* S */}
          <svg viewBox="0 0 100 150" className="w-[17vw] h-auto -mr-[3.5vw]">
            <defs>
              <linearGradient id="gradS2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '130px', fontWeight: '400', fill: 'url(#gradS2)', fontFamily: "'Bebas Neue', sans-serif" }}>
              S
            </text>
          </svg>

          {/* A */}
          <svg viewBox="0 0 100 150" className="w-[17vw] h-auto">
            <defs>
              <linearGradient id="gradA" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              style={{ fontSize: '130px', fontWeight: '400', fill: 'url(#gradA)', fontFamily: "'Bebas Neue', sans-serif" }}>
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