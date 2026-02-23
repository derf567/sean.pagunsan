const Education = () => {
  const education = [
    {
      degree: "College Education",
      school: "System Technology Institute (STI Davao)",
      period: "College Level",
      status: "Attended",
      icon: "🎓"
    },
    {
      degree: "High School Diploma",
      school: "Daniel R. Aguinaldo",
      period: "Matina Aplaya, Davao City",
      status: "Graduate",
      icon: "📚"
    },
    {
      degree: "Elementary Education",
      school: "Don Francisco S. Dizon",
      period: "Elrio, Davao City",
      status: "Graduate",
      icon: "✏️"
    }
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold tracking-wide">
              Academic Background
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
                <div className="p-8">
                  <div className="text-5xl mb-4">{edu.icon}</div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold rounded-full mb-4">
                    {edu.status}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="font-semibold text-gray-700 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
