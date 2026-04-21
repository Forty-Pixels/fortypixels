import React from 'react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className='flex flex-col min-h-screen pt-30'>
       <div className='flex flex-col items-start justify-start px-4 gap-2'>
        <h1 className='text-4xl font-bold'>We Build Digital Products That Drive Growth</h1>
        <h2 className='text-lg text-gray-[#191A23]/70'>Premium web design and development for startups and founders who value clarity, performance, and results.</h2>
       </div>
       <div className='flex flex-col items-center justify-center gap-2 mt-10'>
        <Button className='bg-[#191A23] text-white hover:bg-[#191A23]/90 hover:cursor-pointer px-18 py-6'>Start Your Project</Button>
        <Button className='bg-transparent text-primary border border-primary hover:bg-[#191A23]/10 hover:cursor-pointer px-20 py-5'>View Our Work</Button>
       </div>
    </section>
  )
}

export { Hero }