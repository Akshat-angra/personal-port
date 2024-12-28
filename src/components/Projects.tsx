import {Github, ExternalLink} from "lucide-react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function Projects() {
    const projects = [
        {
            title: "AI Study Assistant - InsightArcAI",
            description:
                "A machine learning-powered study assistant that uses ChatGPT API to curate content, helping students organize and optimize their learning process by providing personalized learning paths and study materials.",
            image:
                "images/insightarcai.png",
            github: "https://github.com/Akshat-angra/InsightArcAi",
            demo: "",
        },
        {
            title: "FitFusionHub",
            description:
                "Your ultimate fitness companion, FitFusionHub is designed to offer personalized fitness plans tailored to your unique goals. Experience a smarter way to stay fit with expertly curated diet, exercise, and wellness recommendations.",
            image: "images/fitfusionhub.png",
            github: "https://github.com/Akshat-angra/FitFusionHub",
            demo: "",
        },
        {
            title: "Shop-Cart",
            description:
                "A user-friendly e-commerce platform designed to provide a seamless shopping experience with intuitive navigation, secure checkout, and dynamic product updates.",
            image: "images/shop-cart.png",
            github: "https://github.com/Akshat-angra/Shop-Cart",
            demo: "",
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto p-6 sm:p-8 border-t-4 border-r-4 border-blue-400 rounded-2xl shadow-2xl">
                <h2 className="section-title fonrob text-2xl font-semibold mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg border-none">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-all duration-300 transform hover:scale-105"
                            />
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 pt-0">
                                <div className="flex gap-4">
                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-4 h-4 mr-2"/> Code
                                        </a>
                                    </Button>
                                    {project.demo ? (
                                        <Button size="sm" asChild>
                                            <a href={project.demo}
                                               target="_blank"
                                               rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2"/>
                                            </a>
                                        </Button>
                                    ) : (
                                        <Button size="sm" variant="secondary" disabled>
                                            Demo (Deployment in Progress)
                                        </Button>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
