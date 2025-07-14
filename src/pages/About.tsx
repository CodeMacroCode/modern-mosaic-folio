import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Navigation */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm uppercase tracking-wider">Back to Home</span>
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">
                About <em className="italic">Me</em>
              </h1>
              <div className="w-24 h-0.5 bg-accent-red"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                I'm a passionate frontend developer with a keen eye for design and 
                a love for creating beautiful, functional web experiences. Based in 
                Montreal, I specialize in modern JavaScript frameworks and have a 
                particular affinity for clean, minimalist aesthetics.
              </p>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                My approach combines technical expertise with creative vision, 
                ensuring that every project not only functions flawlessly but 
                also tells a compelling visual story. I believe great web 
                development is where art meets code.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you can find me exploring Montreal's design 
                scene, experimenting with new technologies, or working on 
                personal creative projects that push the boundaries of what's 
                possible on the web.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-accent-cream/50 p-8 rounded-sm">
              <h3 className="text-xl font-display font-medium mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Frontend</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Tools</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Figma</li>
                    <li>Git & GitHub</li>
                    <li>Vite</li>
                    <li>Vercel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-border p-8 rounded-sm">
              <h3 className="text-xl font-display font-medium mb-4">Availability</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-accent-red">Available for Projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Montreal, QC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}