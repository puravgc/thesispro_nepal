import React from 'react'

const Footer = () => {
  return (
   <>
    <footer className='flex justify-around bg-[#31393C] p-2'>
        <div className='flex flex-col gap-2 w-[25%] p-5 text-white'>
            <h2 className='font-semibold text-xl '>Thesispro Nepal</h2>
            <p className='text-sm'>We offer best assignment help around the world ensuring privacy and plagiarism-free work.</p>
            <h4>Kathmandu, Nepal</h4>
        </div>
        <div className='h-auto w-[1px] bg-white'/>
        <div className='w-[35%] block p-1'>
            <h2 className='text-center font-bold text-xl text-white'>Categories</h2>
            <ul className='flex flex-wrap gap-10 p-3 justify-center items-center text-sm text-white font-semibold'>
                <li className='w-28 h-auto  text-center'>Python</li>
                <li className='w-28 h-auto  text-center'>Java</li>
                <li className='w-28 h-auto  text-center'>Thesis</li>
                <li className='w-28 h-auto  text-center'>Javascript</li>
                <li className='w-28 h-auto  text-center'>PHP</li>
                <li className='w-28 h-auto  text-center'>UI/UX</li>
                <li className='w-36 h-auto  text-center'>App Development</li>
                <li className='w-28 h-auto  text-center'>Content Writing</li>
                <li className='w-28 h-auto  text-center'>Design</li>
            </ul>
        </div>
        <div className='h-auto w-[1px] bg-white'/>
        <div className='flex flex-col gap-2 '>
            <h3 className='text-xl text-white font-semibold'>Contact us</h3>
            <ul className='leading-loose text-white text-sm'>
                <li className='flex gap-2'>
                    <span>icon</span>
                    <h5>9706637280</h5>
                </li>
                <li className='flex gap-2'>
                    <span>icon</span>
                    <h5>ThesisproNepal</h5>
                </li>
                <li className='flex gap-2'>
                    <span>icon</span>
                    <h5>thesispro_nepal</h5>
                </li>
                <li className='flex gap-2'>
                    <span>
                        icon
                    </span>
                    <h5>thesispronepal@gmail.com</h5>
                </li>
            </ul>
        </div>
    </footer>
   </>
  )
}

export default Footer
