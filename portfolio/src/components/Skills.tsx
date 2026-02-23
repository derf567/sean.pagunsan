const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Microsoft Office Suite", "Cost Estimation Software", "Data Encoding", "Project Documentation"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Professional Expertise",
      skills: ["Government Project Estimation", "Material Procurement", "Vendor Coordination", "Budget Analysis"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Core Competencies",
      skills: ["Attention to Detail", "Time Management", "Problem Solving", "Team Collaboration"],
      gradient: "from-pink-500 to-indigo-500"
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "Filipino (Native)"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wide">
              What I Bring
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Competencies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} rounded-t-2xl`}></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{category.title}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
