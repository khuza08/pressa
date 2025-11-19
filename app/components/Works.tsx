import { useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Title",
    company: "Company Profile",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.",
    icon: "star"
  },
  {
    id: 2,
    title: "Project Title",
    company: "Company Profile",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.",
    icon: "heart"
  },
  {
    id: 3,
    title: "Project Title",
    company: "Company Profile",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.",
    icon: "music"
  }
];

export default function OurWork() {
  return (
    <section id="services" className="py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start mb-16">
          <div 
            className="md:w-1/3 mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl font-bold text-white/80 md:text-4xl text-2xl">OUR WORK</h2>
            <p className="text-xl text-white/50 md:text-xl text-lg">CRAFTED WITH LOVE</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card3D key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card3D({ project, index }: { project: Project; index: number }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -1 to 1 range
    const centerX = (mouseX / rect.width) * 2 - 1;
    const centerY = (mouseY / rect.height) * 2 - 1;

    // Smooth rotation with reduced intensity for elegance
    const rotateY = centerX * 16;
    const rotateX = -centerY * 16;

    setRotation({ x: rotateX, y: rotateY });
    
    // Smooth glow position
    setGlowPosition({
      x: (mouseX / rect.width) * 200,
      y: (mouseY / rect.height) * 200
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div
      className="perspective-1000"
      style={{ perspective: '1000px' }}
      data-aos="fade-up"
      data-aos-delay={index * 300}
      data-aos-duration="1000"
    >
      <div
        ref={cardRef}
        className="rounded-xl p-6 border border-white/20 bg-white/5 backdrop-blur-xl relative overflow-hidden cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered 
            ? 'transform 0.08s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease-out' 
            : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        
        {/* Inner content lift */}
        <div className="relative z-10" style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}>
          <div className="w-full h-48 mb-4 flex items-center justify-center">
            <div>
              {project.icon === 'star' && (
                <svg 
                  className="w-24 h-24 text-gray-300 md:w-24 md:h-24 w-16 h-16" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              )}
              {project.icon === 'heart' && (
                <svg 
                  className="w-24 h-24 text-gray-300 md:w-24 md:h-24 w-16 h-16" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.5 11.5l-1.5 1.34z" />
                </svg>
              )}
              {project.icon === 'music' && (
                <svg 
                  className="w-24 h-24 text-gray-300 md:w-24 md:h-24 w-16 h-16" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              )}
            </div>
          </div>
          <h3 
            className="text-xl font-semibold mb-2 text-white md:text-xl text-lg transition-all duration-300"
            style={{
              transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
              textShadow: isHovered ? '0 2px 10px rgba(200, 200, 200, 0.1)' : 'none'
            }}
          >
            {project.title}
          </h3>
          <p 
            className="text-white/80 text-sm mb-4 transition-all duration-300"
            style={{
              transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)'
            }}
          >
            {project.company}
          </p>
          <p 
            className="text-white/50 text-sm mb-4 line-clamp-3 transition-all duration-300"
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)'
            }}
          >
            {project.description}
          </p>
          <div 
            className="flex justify-end transition-all duration-300"
            style={{
              transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)'
            }}
          >
            <svg 
              className="w-5 h-5 transition-colors" 
              fill="none"
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isHovered ? 'translateZ(20px) rotateX(-3deg) rotateY(-3deg)' : 'translateZ(0px) rotateX(0deg) rotateY(0deg)',
                filter: isHovered ? 'drop-shadow(0 4px 6px rgba(200, 200, 200, 0.2))' : 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}