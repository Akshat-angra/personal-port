import {Mail, Phone, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent} from "@/components/ui/card";
import {GridBackground} from "@/components/ui/grid-background.tsx";
import {FloatingElements} from "@/components/ui/floating-elements.tsx";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <GridBackground/>
            <FloatingElements/>
            <div className="container mx-auto px-4">
                <h2 className="section-title fonrob relative text-4xl">Get In Touch
                    <img
                        src="/images/highlight.svg"
                        alt="highlight"
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 md:w-80 pl-8"
                    />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-primary mr-4"/>
                                <span>angraakshat@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-primary mr-4"/>
                                <span>+91 8168754874</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 text-primary mr-4"/>
                                <span>Chitkara University, Himachal Pradesh</span>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardContent className="pt-6">
                            <form className="space-y-6">
                                <div>
                                    <Input placeholder="Your Name"/>
                                </div>
                                <div>
                                    <Input type="email" placeholder="Your Email"/>
                                </div>
                                <div>
                                    <Input placeholder="Subject"/>
                                </div>
                                <div>
                                    <Textarea placeholder="Your Message" className="min-h-[120px]"/>
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}