import { SkillCard } from "./SkillCard";
import { SkillCategory } from "./SkillCategory";

export default function Skills() {
  const technicalSkills = [
    { name: "React/Next.js", level: 85, color: "bg-blue-500" },
    { name: "TypeScript", level: 80, color: "bg-blue-400" },
    { name: "Python", level: 75, color: "bg-green-500" },
    { name: "Java", level: 70, color: "bg-orange-500" },
    { name: "Node.js", level: 65, color: "bg-green-400" },
  ];

  const toolsAndTech = [
    { name: "Git & GitHub", level: 90, color: "bg-purple-500" },
    { name: "VS Code", level: 85, color: "bg-blue-600" },
    { name: "Docker", level: 60, color: "bg-blue-500" },
    { name: "AWS", level: 55, color: "bg-orange-400" },
  ];

  const additionalCategories = [
    {
      name: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Redux", "TailwindCSS", "Express.js", "Jest", "React Native"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <SkillCard title="Technical Skills" skills={technicalSkills} />
          <SkillCard title="Tools & Technologies" skills={toolsAndTech} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {additionalCategories.map((category) => (
            <SkillCategory key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}