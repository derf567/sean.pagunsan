import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold tracking-wide">
                Construction Professional
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sean Reggie
              </span>
              <br />
              <span className="text-gray-800">E. Pagunsan</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-600 font-light">
              Estimator & Purchaser
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Specialized in government project estimation and procurement with proven expertise 
              in DPWH, NIA, and LGU projects. Delivering precision and excellence in every project.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="#experience" 
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all"
              >
                View Work
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
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
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
