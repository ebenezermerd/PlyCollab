import React from 'react'
import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiDocker, SiAew } from 'react-icons/si'

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: <SiReact className="w-12 h-12" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" /> },
    { name: 'Python', icon: <SiPython className="w-12 h-12" /> },
    { name: 'Docker', icon: <SiDocker className="w-12 h-12" /> },
    { name: 'AWS', icon: <SiAew className="w-12 h-12" /> },
  ]

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our <span className="text-neon-green">Skills</span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-neon-green mb-2">{skill.icon}</div>
              <p className="text-text-secondary">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

