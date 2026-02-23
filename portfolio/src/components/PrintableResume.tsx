import { useState } from 'react'

const PrintableResume = () => {
  const [showPreview, setShowPreview] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Print Button - Fixed position */}
      <button
        onClick={() => setShowPreview(true)}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center gap-2 print:hidden"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Print Resume
      </button>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 print:hidden overflow-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-lg">
              <h3 className="text-xl font-bold">Print Preview</h3>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="p-8 max-h-[80vh] overflow-auto">
              <ResumeContent />
            </div>
          </div>
        </div>
      )}

      {/* Hidden print content */}
      <div className="hidden print:block">
        <ResumeContent />
      </div>
    </>
  )
}

const ResumeContent = () => {
  return (
    <div className="max-w-[210mm] mx-auto bg-white text-black p-8 print:p-0">
      {/* Header */}
      <div className="text-center border-b-4 border-indigo-600 pb-3 mb-3">
        <h1 className="text-2xl font-bold mb-1">SEAN REGGIE E. PAGUNSAN</h1>
        <p className="text-base font-semibold text-indigo-600 mb-2">Estimator & Purchaser</p>
        <div className="flex justify-center gap-3 text-xs flex-wrap">
          <span>📧 seanreggiep@gmail.com</span>
          <span>📱 09912294552</span>
          <span>📍 Brgy. 19-B, Fatima Village, Bajada, Davao City</span>
        </div>
      </div>

      {/* Objective */}
      <div className="mb-3">
        <h2 className="text-sm font-bold border-b-2 border-gray-300 mb-1.5 uppercase">Objective</h2>
        <p className="text-xs text-justify leading-tight">
          Obtain a responsibility and challenging position within your company that allow me to learn new technologies 
          and skills while utilizing my previous experiences to improve beyond my abilities currently, and also to build 
          a strong relationship with the company and the clients/customer, and exceed expectation to excel within the company.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-3">
        <h2 className="text-sm font-bold border-b-2 border-gray-300 mb-1.5 uppercase">Work Experience</h2>
        
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xs">Estimator</h3>
              <p className="text-xs italic">KAEL Construction and Supply</p>
              <p className="text-[10px]">Government Projects: DPWH, NIA, LGU</p>
            </div>
            <span className="text-xs font-semibold">2022 - 2025</span>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xs">Estimator</h3>
              <p className="text-xs italic">ANDROMEDA Construction Services and Supply</p>
              <p className="text-[10px]">Government Projects: DPWH, NIA, LGU</p>
            </div>
            <span className="text-xs font-semibold">2022 - 2025</span>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xs">Estimator</h3>
              <p className="text-xs italic">10-02 Ent. Incorporated</p>
              <p className="text-[10px]">Government Projects: DPWH, NIA, LGU</p>
            </div>
            <span className="text-xs font-semibold">2022 - 2025</span>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xs">Purchaser/Estimator</h3>
              <p className="text-xs italic">ROSBILL Construction and Supply</p>
              <p className="text-[10px]">Government Projects: DPWH, NIA, LGU</p>
            </div>
            <span className="text-xs font-semibold">2018 - 2025</span>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xs">Picker/Checker/Encoder</h3>
              <p className="text-xs italic">Fast Cargo</p>
            </div>
            <span className="text-xs font-semibold">2020</span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-3">
        <h2 className="text-sm font-bold border-b-2 border-gray-300 mb-1.5 uppercase">Education</h2>
        
        <div className="mb-1.5">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xs">College Education</h3>
              <p className="text-xs">System Technology Institute (STI Davao)</p>
            </div>
            <span className="text-xs">College Level</span>
          </div>
        </div>

        <div className="mb-1.5">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xs">High School Diploma</h3>
              <p className="text-xs">Daniel R. Aguinaldo, Matina Aplaya, Davao City</p>
            </div>
            <span className="text-xs">Graduate</span>
          </div>
        </div>

        <div className="mb-1.5">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xs">Elementary Education</h3>
              <p className="text-xs">Don Francisco S. Dizon, Elrio, Davao City</p>
            </div>
            <span className="text-xs">Graduate</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-3">
        <h2 className="text-sm font-bold border-b-2 border-gray-300 mb-1.5 uppercase">Skills</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div>
            <h3 className="font-semibold text-xs mb-0.5">Technical Skills:</h3>
            <ul className="text-[10px] list-disc list-inside leading-tight">
              <li>Microsoft Office Suite</li>
              <li>Cost Estimation Software</li>
              <li>Data Encoding</li>
              <li>Project Documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs mb-0.5">Professional Expertise:</h3>
            <ul className="text-[10px] list-disc list-inside leading-tight">
              <li>Government Project Estimation</li>
              <li>Material Procurement</li>
              <li>Vendor Coordination</li>
              <li>Budget Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-3">
        <h2 className="text-sm font-bold border-b-2 border-gray-300 mb-1.5 uppercase">Languages</h2>
        <p className="text-xs">English (Fluent), Filipino (Native)</p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-300 text-center">
        <p className="text-[10px] italic mb-2">
          I hereby certify that the above information is true and correct.
        </p>
        <div className="mt-3">
          <p className="font-bold text-xs">Sean Reggie E. Pagunsan</p>
          <p className="text-[10px]">Applicant</p>
        </div>
      </div>
    </div>
  )
}

export default PrintableResume
