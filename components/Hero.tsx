import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

const Hero = () => {
  const slogan = "Sophie Rong is a creator, artist, and developer. She loves clean interfaces & thoughtful technology."

  return (
    <>
    <BackgroundGradientAnimation />
    <div className="h-screen">
        <TextGenerateEffect
            words={slogan}
            className="font-semibold text-zinc-800 dark:text-zinc-300 mt-[40vh] w-full md:w-[80%] lg:w-[70%]"
        />

        <p className="font-mono text-zinc-400 mt-4 mb-4 ">Student @ UCI / Former designer @ UCI Design-a-thon</p>

        <button className="relative z-30 text-zinc-400 dark:text-zinc-300 p-2 border-1 rounded-2xl hover:text-zinc-500 hover:cursor-pointer">Resume</button>

        {/* <h1 className="text-5xl font-semibold text-zinc-800 dark:text-zinc-300 mt-[40vh]">Sophie Rong</h1>
        <h2 className="text-lg text-zinc-400">Creator, artist, developer.</h2> */}
    </div>
    </>
  )
}

export default Hero
