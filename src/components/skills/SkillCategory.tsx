import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Category {
  name: string;
  skills: string[];
}

interface SkillCategoryProps {
  category: Category;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge 
              key={skill}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}