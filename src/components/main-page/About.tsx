'use client'
import ResumeSVG from '@/assets/icons/info/resume.svg'
import BigContainer from '../layout/BigContainer'
import SectionHeader from '../common/SectionHeader'

const Description = () => (
  <div>
    
    <p className="text-lg tracking-tighter text-white/60 md:text-xl">
      Hi I&apos;m Chris, a passionate{' '}
      <span className="text-white">frontend developer</span> based in Poland, with over{' '}
      <span className="text-white">3 years of commercial experience</span>. Specializing
      in <span className="text-white">end-to-end development</span>, I focus on crafting
      seamless user experiences through innovative solutions.
    </p>
    <h4 className="mb-4 mt-8 text-left text-2xl tracking-tighter text-white">
      Technical
    </h4>
    <p className="text-lg tracking-tighter text-white/60 md:text-xl">
      My development roots are in{' '}
      <span className="text-white">React, Next.js, Node.js</span> and Express.js and in
      general anything JavaScript / TypeScript related in React ecosystem.
    </p>
    <p className="mt-4 text-lg tracking-tighter text-white/60 md:text-xl">
      Furthermore, I have experience in creating websites using{' '}
      <span className="text-white">WordPress</span>, harnessing its flexibility and
      extensibility to deliver customized solutions for clients.
    </p>
    <h4 className="mb-4 mt-8 text-left text-2xl tracking-tighter text-white">Personal</h4>
    <p className="text-lg tracking-tighter text-white/60 md:text-xl">
      I&apos;m actively involved in creating SaaS apps, indie hacking, and developing a
      web MMO game. Additionally, I&apos;m passionate about studying design principles to
      enhance user experiences across all my projects.
    </p>
  </div>
)

const ContactButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/16vH538erKi6kTfgIucXa-Kfw4FnMENVe/view?usp=sharing"
      target="_blank"
      referrerPolicy="no-referrer">
      <button className="mt-8 flex flex-row items-center rounded-2xl border border-darkborder bg-dark30/60 px-5 py-4">
        <ResumeSVG className="-mt-1.5" />
        <span className="ml-2 text-20 tracking-tight text-white">Resume</span>
      </button>
    </a>
  )
}

function About() {
  return (
    <BigContainer id="about">
      <div className="mt-20 md:mt-28 flex flex-col items-center justify-center">
        <div className="flex max-w-xl flex-col items-center">
          <SectionHeader title="Get to know me" subtitle={"About me"} />
          <Description />
          <ContactButton />
        </div>
      </div>
    </BigContainer>
  )
}

export default About
