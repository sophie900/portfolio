import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

const Hero = () => {
  const slogan = "Sophie Rong is a creator, artist, and developer. She loves clean interfaces & thoughtful technology."

  return (
    <>
        <div className="h-screen flex flex-col items-start justify-end pb-30 lg:pb-40">
            <BackgroundGradientAnimation />
            <TextGenerateEffect
                words={slogan}
                className="font-semibold text-zinc-800 dark:text-zinc-300 w-full md:w-[75%]"
            />

            <p className="font-mono text-zinc-400 mt-4 mb-4 text-xs md:text-base">Student @ UCI / Former designer @ UCI Design-a-thon</p>

            <button className="relative z-30 text-zinc-400 dark:text-zinc-300 p-2 border-1 rounded-2xl hover:text-zinc-500 hover:cursor-pointer">Resume</button>
        </div>
    </>
  )
}

export default Hero
