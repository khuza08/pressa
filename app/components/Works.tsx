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
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white/80 md:text-4xl text-2xl">OUR WORK</h2>
            <p className="text-xl text-white/50 md:text-xl text-lg">CRAFTED WITH LOVE</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="rounded-lg p-6 border border-white/20 hover:border-white/30 transition-colors backdrop-blur-xl bg-white/5">
                <div className="w-full h-48 mb-4 flex items-center justify-center">
                  {project.icon === 'star' && (
                    <svg className="w-24 h-24 text-blue-400 md:w-24 md:h-24 w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L14.5 8H20L15.5 11.5L17 18H10L8.5 11.5L4 8H9.5L12 2Z" />
                    </svg>
                  )}
                  {project.icon === 'heart' && (
                    <svg className="w-24 h-24 text-blue-400 md:w-24 md:h-24 w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.5 11.5l-1.5 1.34z" />
                    </svg>
                  )}
                  {project.icon === 'music' && (
                    <svg className="w-24 h-24 text-blue-400 md:w-24 md:h-24 w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 md:text-xl text-lg">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.company}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-end">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v6h4V6zm0 0v6h6v-6h-6z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}