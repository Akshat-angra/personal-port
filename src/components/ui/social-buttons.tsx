import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
      <Button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300">
        <Download className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
        <a href="/project/Resume.docx" className="group" download>
          Resume
        </a>
      </Button>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
          asChild
        >
          <a
            href="https://github.com/Akshat-angra"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/akshatangra/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Linkedin className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  );
}
