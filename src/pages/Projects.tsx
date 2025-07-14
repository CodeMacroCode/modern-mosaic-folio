import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and TypeScript, featuring advanced filtering, cart management, and payment integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Design Portfolio",
    description: "A minimalist portfolio website for a creative agency, emphasizing clean typography and smooth animations.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Vercel"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Food Delivery Platform",
    description: "A comprehensive food delivery platform with restaurant management, order tracking, and payment processing.",
    tech: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Navigation */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm uppercase tracking-wider">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Selected <em className="italic">Projects</em>
          </h1>
          <div className="w-24 h-0.5 bg-accent-red mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated collection of recent work showcasing my approach to modern web development 
            and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="group relative overflow-hidden rounded-sm bg-muted">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-accent-cream text-accent-cream-foreground rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-red transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-red transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}