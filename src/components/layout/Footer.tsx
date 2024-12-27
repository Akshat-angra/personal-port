import {Github, Linkedin, Mail} from "lucide-react";
import {Button} from "@/components/ui/button";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div
                className="flex justify-center items-center bg-blue-400 cursor-pointer p-3 transition-shadow duration-300 ease-in-out"
                onClick={scrollToTop}
            >
                <button
                    className="flex justify-center items-center rounded-xl transition-colors duration-300 ease-in-out"
                    aria-label="Back to top"
                >
                    <span className="text-xl font-medium text">Back to Top</span>
                </button>
            </div>
            <footer className="relative bg-muted/50 dark:bg-gray-900 border-t">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">About</h3>
                            <p className="text-sm text-muted-foreground">
                                A passionate Computer Science student building the future through code.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Connect</h3>
                            <div className="flex space-x-2">
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-5 h-5"/>
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="https://www.linkedin.com/in/akshatangra/" target="_blank"
                                       rel="noopener noreferrer">
                                        <Linkedin className="w-5 h-5"/>
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="mailto:angraakshat@gmail.com">
                                        <Mail className="w-5 h-5"/>
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Newsletter</h3>
                            <p className="text-sm text-muted-foreground">
                                Subscribe to receive updates about my latest projects and tech articles.
                            </p>
                            <form className="flex flex-wrap gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 rounded-md bg-background border text-sm"
                                />
                                <Button className="px-4 py-2">Subscribe</Button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                        <p className="text-gray-500 mb-4">© {new Date().getFullYear()} All rights reserved.</p>
                        <span
                            className="mt-8 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white p-3 rounded-lg shadow-lg">
    Building InsightArcAI.
  </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
