import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TeamMembers from '@/components/sections/TeamMembers'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <TeamMembers />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  )
}

