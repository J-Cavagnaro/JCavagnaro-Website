import { cn } from "@/lib/utils";
import { Briefcase, Code, Database, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Software developer building intelligent systems and turning data into decisions.
                    </h3>

                    <p className="text-muted-foreground">
                        I’m a Software Developer with experience building custom 
                        data-driven applications and automation tools that improve 
                        operational efficiency and decision-making. Currently 
                        working in engineering software development, I specialize 
                        in C#, Python, SQL, and system integration. Alongside my 
                        technical work, I’m pursuing an MBA to strengthen my 
                        project management and business strategy skills, allowing 
                        me to bridge the gap between technology and organizational 
                        goals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            Get In Touch 
                        </a>

                        <a 
                          href="" 
                          className={cn(
                            "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10",
                            "transition-colors duration-300 text-center"
                          )}> 
                            Download CV 
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Application Development </h4>
                                <p className="text-muted-foreground">
                                    Creating scalable business applications using modern frameworks and technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> MS Access/SQL </h4>
                                <p className="text-muted-foreground">
                                    Generating reports and managing data to support business operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Software Development </h4>
                                <p className="text-muted-foreground">
                                    Planning, building, and maintaining software solutions to meet client needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};