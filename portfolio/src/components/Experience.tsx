const Experience = () => {
  const experiences = [
    {
      title: "Estimator",
      company: "KAEL Construction and Supply",
      period: "2022 - 2025",
      description: "Provided comprehensive cost estimation services for government projects including DPWH, NIA, and LGU initiatives. Analyzed project specifications, prepared detailed cost breakdowns, and ensured accurate budget forecasting for successful project bidding."
    },
    {
      title: "Estimator",
      company: "ANDROMEDA Construction Services and Supply",
      period: "2022 - 2025",
      description: "Specialized in government project estimation for DPWH, NIA, and LGU contracts. Conducted thorough material quantity surveys, cost analysis, and prepared competitive bid proposals while maintaining compliance with government regulations."
    },
    {
      title: "Estimator",
      company: "10-02 Ent. Incorporated",
      period: "2022 - 2025",
      description: "Managed estimation processes for various government infrastructure projects. Coordinated with engineers and project managers to develop accurate cost estimates, ensuring project feasibility and competitive pricing for DPWH, NIA, and LGU projects."
    },
    {
      title: "Purchaser/Estimator",
      company: "ROSBILL Construction and Supply",
      period: "2018 - 2025",
      description: "Dual role handling both procurement and estimation for government construction projects. Managed vendor relationships, negotiated material costs, prepared project estimates, and coordinated purchasing activities for DPWH, NIA, and LGU contracts."
    },
    {
      title: "Picker/Checker/Encoder",
      company: "Fast Cargo",
      period: "2020",
      description: "Performed warehouse operations including order picking, inventory checking, and data encoding. Ensured accuracy in order fulfillment and maintained organized inventory records for efficient logistics operations."
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold tracking-wide">
              Career Journey
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 rounded-l-2xl"></div>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-purple-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mt-2 lg:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
