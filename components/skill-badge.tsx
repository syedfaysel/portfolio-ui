import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="bg-primary/5">
      {name}
    </Badge>
  )
}
