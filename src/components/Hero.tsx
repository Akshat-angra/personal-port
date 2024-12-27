import {Download, Github, Linkedin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useEffect, useRef} from "react";
import Typed from "typed.js";
import {FloatingElements} from "./ui/floating-elements";

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "a Software Developer",
                "a Problem Solver",
                "a Creative Thinker",
                "an AI Enthusiast",
                "a Great Learner",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-16 relative overflow-hidden"
        >
            <FloatingElements/>
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10"/>
                <div className="absolute inset-0">
                    <div className="grid grid-cols-8 md:grid-cols-12 gap-4 p-4 transform -skew-y-12">
                        {Array.from({length: 48}).map((_, i) => (
                            <div
                                key={i}
                                className="h-16 bg-primary/5 dark:bg-primary/10 rounded-lg transform transition-all duration-500 hover:bg-primary/20 hover:scale-105"
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    animation: "pulse 3s infinite",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient">
                        Hi, I'm Akshat
                    </h1>
                    <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-12">
                        I'm <span ref={el} className="text-primary font-semibold"></span>
                    </div>
                    <p className="text-lg mb-8 text-muted-foreground">
                        Passionate about crafting practical solutions and continuously exploring emerging technologies.
                        Currently focused on enhancing skills in web development and deepening knowledge of data
                        structures.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button>
                            <Download className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform"/>
                            <a href="/project/Resume.docx" className="group" download>
                                Resume
                            </a>
                        </Button>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="lg" asChild>
                                <a
                                    href="https://github.com/Akshat-angra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform"/>
                                    GitHub
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a
                                    href="https://www.linkedin.com/in/akshatangra/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <Linkedin className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform"/>
                                    LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
