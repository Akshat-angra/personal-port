import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-medium group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2.5 group-hover:scale-[1.01] transition-transform"
                indicatorClassName={skill.color}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}