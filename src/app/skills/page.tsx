import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/FramerWrapper";

const SkillPage = () => {
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
  ];

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
  ];

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
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-center gap-5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <LightbulbIcon className="w-4 h-4" />
          My Skills
        </Badge>
        <div className="flex flex-col items-center gap-3 w-full">
          <Heading >My Technical Experience/Skills.</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg text-center">
              Currently, I am a fresher and have a solid understanding of HTML5,
              CSS3, JS, TS, and React, including responsive design principles. I
              specialize in building web applications and sites using JavaScript,
              Typescript, React, Next.js & Python.
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4 text-center">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 justify-center">
              <SkillsFooter items={programmingLanguages} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4 text-center">
              Framework/Libraries
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 justify-center">
              <SkillsFooter items={frameworks} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4 text-center">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 justify-center">
              <SkillsFooter items={tools} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
