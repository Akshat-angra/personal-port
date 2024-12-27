import { Code, Cpu, Sparkles } from "lucide-react";

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-16 animate-float-slow">
        <Code className="w-12 h-12 text-primary/20" />
      </div>
      <div className="absolute bottom-1/4 left-32 animate-float">
        <Cpu className="w-16 h-16 text-purple-500/20" />
      </div>
      <div className="absolute top-1/3 right-24 animate-float">
        <Sparkles className="w-14 h-14 text-blue-500/20" />
      </div>
      <div className="absolute top-1/4 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    </div>
  );
}
