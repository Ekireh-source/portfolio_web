import SkillCard from "./skill-card"

interface SkillsFooterProps {
  items: Array<{
    name: string
    icon: string
  }>
}

export default function SkillsFooter({ items }: SkillsFooterProps) {
  return (
    <>
      {items.map((item, index) => (
        <SkillCard key={index} name={item.name} icon={item.icon} />
      ))}
    </>
  )
}

