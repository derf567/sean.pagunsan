const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wide">
              Who I Am
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I am a dedicated construction professional with extensive experience in project estimation 
              and procurement for government projects. My expertise spans working with DPWH, NIA, and LGU 
              projects, where I excel in cost analysis, material procurement, and project coordination.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl"></div>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Estimation</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert in government project cost estimation and analysis with proven track record
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl"></div>
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Procurement</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled in material purchasing and vendor coordination for optimal results
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-pink-50 to-indigo-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-t-2xl"></div>
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Project Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced in construction project coordination and execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
