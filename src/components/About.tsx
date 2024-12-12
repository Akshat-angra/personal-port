import { GraduationCap, Code, Brain, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Computer Science Major with focus on AI and Web Technologies",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Proficient in React, TypeScript, Python, and Java",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Interests",
      description: "Machine Learning, Web Development, and Open Source",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Experience",
      description: "2 Internships and Multiple Personal Projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            I'm a Pre final year Computer Science student passionate about creating innovative
            solutions through technology. When I'm not coding, you'll find me participating
            in hackathons or contributing to open-source projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}