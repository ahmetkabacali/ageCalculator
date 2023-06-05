import React from 'react'

const Content = ({ age }) => {

  return (
    <div className="font-poppins_ExtraBoldItalic lg:text-8xl text-5xl">
      <div><span className='text-[#864CFF]'>{age.calculatedYear || "--"} </span>years</div>
      <div><span className='text-[#864CFF]'>{age.calculatedMonth || "--"} </span>months</div>
      <div><span className='text-[#864CFF]'>{age.calculatedDay || "--"} </span>days</div>
    </div>
  )
}

export default Content