const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">About Me</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            I am a dedicated construction professional with extensive experience in project estimation 
            and procurement for government projects. My expertise spans working with DPWH, NIA, and LGU 
            projects, where I excel in cost analysis, material procurement, and project coordination. 
            I am committed to learning new technologies while leveraging my experience to deliver 
            exceptional results and build strong relationships with clients and stakeholders.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-teal-500 text-4xl mb-3">📊</div>
              <h3 className="font-semibold text-xl mb-2">Estimation</h3>
              <p className="text-gray-600">Expert in government project cost estimation and analysis</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-teal-500 text-4xl mb-3">🛒</div>
              <h3 className="font-semibold text-xl mb-2">Procurement</h3>
              <p className="text-gray-600">Skilled in material purchasing and vendor coordination</p>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-teal-500 text-4xl mb-3">🏗️</div>
              <h3 className="font-semibold text-xl mb-2">Project Management</h3>
              <p className="text-gray-600">Experienced in construction project coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
