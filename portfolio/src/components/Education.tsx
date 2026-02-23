const Education = () => {
  const education = [
    {
      degree: "College Education",
      school: "System Technology Institute (STI Davao)",
      period: "College Level",
      status: "Attended"
    },
    {
      degree: "High School Diploma",
      school: "Daniel R. Aguinaldo",
      period: "Matina Aplaya, Davao City",
      status: "Graduate"
    },
    {
      degree: "Elementary Education",
      school: "Don Francisco S. Dizon",
      period: "Elrio, Davao City",
      status: "Graduate"
    }
  ]

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Education</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="bg-teal-500 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-teal-600 font-semibold">{edu.school}</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{edu.period}</span>
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
