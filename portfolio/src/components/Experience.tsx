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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Work Experience</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8 border-l-4 border-teal-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                <p className="text-teal-600 font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
