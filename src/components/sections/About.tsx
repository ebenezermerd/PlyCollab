import React from 'react'
import { Code, Users, Zap } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Expert Developers',
      description: 'Our team consists of skilled developers with years of experience in various technologies.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Approach',
      description: 'We work closely with our clients to ensure their vision is brought to life.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge technologies to deliver modern and efficient web applications.',
    },
  ]

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-neon-green">Us</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg glass hover:bg-neon-green/5 transition-colors"
            >
              <div className="text-neon-green mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

