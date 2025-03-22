"use client"
import { LightbulbIcon } from "lucide-react"
import { Badge } from "@/components/badge"
import Heading from "@/components/Heading"
import FramerWrapper from "@/components/FramerWrapper"
import SkillsFooter from "@/components/SkillsFooter"

const SkillsPage = () => {
  const programmingLanguages = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ]

  const frameworks = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Django",
      icon: "https://onleitechnologies.com/wp-content/uploads/2022/01/pngaaa.com-4169343.png",
    },
  ]

  const tools = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
        <FramerWrapper>
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="gap-1.5 py-1.5">
              <LightbulbIcon className="w-4 h-4" />
              My Skills
            </Badge>
          </div>
        </FramerWrapper>

        <div className="flex flex-col items-center gap-10 w-full">
          <FramerWrapper delay={0.1}>
            <Heading>My Technical Experience & Skills</Heading>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              Currently, I am a fresher and have a solid understanding of HTML5, CSS3, JS, TS, and React, including
              responsive design principles. I specialize in building web applications and sites using JavaScript,
              Typescript, React, Next.js & Python.
            </p>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.2} className="w-full">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full blur-sm" />
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-cyan-500">
                Programming Languages
              </h2>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
              <SkillsFooter items={programmingLanguages} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.3} className="w-full">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full blur-sm" />
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-blue-500">
                Frameworks & Libraries
              </h2>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
              <SkillsFooter items={frameworks} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.4} className="w-full">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full blur-sm" />
              <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-purple-500">
                Tools & Technologies
              </h2>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
              <SkillsFooter items={tools} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </section>
  )
}

export default SkillsPage

