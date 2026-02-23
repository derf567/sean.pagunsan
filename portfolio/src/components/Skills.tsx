const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Microsoft Office Suite", "Cost Estimation Software", "Data Encoding", "Project Documentation"]
    },
    {
      title: "Professional Expertise",
      skills: ["Government Project Estimation", "Material Procurement", "Vendor Coordination", "Budget Analysis"]
    },
    {
      title: "Core Competencies",
      skills: ["Attention to Detail", "Time Management", "Problem Solving", "Team Collaboration"]
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "Filipino (Native)"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Skills & Extras</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2 h-8 bg-teal-500 mr-3"></span>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
