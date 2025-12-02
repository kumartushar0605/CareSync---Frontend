import { Star } from 'lucide-react'
import React from 'react'

const VisitorHospitalCom = ({hospitalsRef,hospitals,animateIn,handleHospitalClick,headingData}) => {
  return (
    <>
    <div ref={hospitalsRef} className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden ">
            

              {/* Heading */}
     <div
  className={`text-center mb-10 transition-all duration-1000 ${
    animateIn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-1'
  }`}
>
  <h1 className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-bold
      bg-gradient-to-r
      from-purple-500 via-indigo-400 to-blue-600
      bg-clip-text text-transparent
    "
  >
    {headingData?.text}
  </h1>

  <p className="text-gray-600 text-base sm:text-lg mt-3 sm:mt-4 mb-4">
    {headingData?.subtext}
  </p>
</div>



              {/* Hospital Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {hospitals.map((hospital) => (
                  <div
                    key={hospital._id}
                    className="relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-lg border border-gray-200 hover:border-blue-500 cursor-pointer p-6"
                    onClick={() => handleHospitalClick(hospital)}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-xl"></div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{hospital.hospitalName}</h2>
                    <p className="text-gray-600">{hospital.city}, {hospital.state}</p>
                    <p className="text-gray-600">Pincode: {hospital.pincode}</p>
                    <p className="text-gray-700 mt-3"><span className="font-medium">Contact:</span> {hospital.contactNumber}</p>
                    <p className="mt-3 text-blue-600 font-medium">
                      {hospital.departments.length} Departments Available
                    </p>
                  </div>
                ))}
              </div>
            </div>
    </>
  )
}

export default VisitorHospitalCom