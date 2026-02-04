import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "This is a description of project one.",
        imageUrl: "/projects/project1.jpg",
        tags: ["React", "TypeScript"],
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a description of project two.",
        imageUrl: "/projects/project2.jpg",
        tags: ["React", "TypeScript"],
        githubUrl: "#",
        demoUrl: "#",
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is a description of project three.",
        imageUrl: "/projects/project3.jpg",
        tags: ["React", "TypeScript"],
        githubUrl: "#",
        demoUrl: "#",
    }
]

export const ProjectSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some projects I've worked on recently. 
                Click on the project titles to view more details 
                and access the source code on GitHub.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                  className="cosmic-button w-fit flex items-center mx-auto gap-2"
                  target="_blank"
                  href="https://github.com/J-Cavagnaro"
                >
                    Check out my GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>);
}