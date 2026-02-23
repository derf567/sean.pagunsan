import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              SEAN REGGIE E. PAGUNSAN
            </h1>
            <p className="text-2xl md:text-3xl text-teal-300 mb-6 font-light">
              Estimator & Purchaser
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Experienced construction professional specializing in government project estimation, 
              procurement, and project coordination with expertise in DPWH, NIA, and LGU projects.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#experience" 
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                View Work
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Sean Reggie E. Pagunsan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
