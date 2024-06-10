import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='flex justify-around h-[65vh]'>
        <div className='flex flex-col gap-5 my-16'>
            <h1 className='text-5xl font-bold leading-tight'>Need Help for <br/> <span className='text-sky-500'> Assignments?</span> </h1>
            <h4 className='text-xl font-semibold text-center leading-snug'>Your academic success, <br /> Our priority!</h4>
            <Button variant='destructive'>Order Now</Button>
        </div>
        <div>
            this is where the image will be placed 
            {/* <Image 
                src={}
                alt='image of a boy sitting in chair infront of laptop!'
                height={760}
                width={1024}
            /> */}

        </div>
    </main>
  )
}

export default Hero
