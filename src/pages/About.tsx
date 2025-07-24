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
          <span className="font-mono text-sm uppercase tracking-wider">
            Back to Home
          </span>
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
                Hey there! I'm a frontend developer who’s all about turning
                ideas into clean, interactive, and engaging web experiences.
                I’ve got a strong love for modern JavaScript frameworks and a
                thing for sleek, minimalist UI that doesn’t just work, but it
                feels good to use.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                I like to think of frontend development as the sweet spot where
                logic meets creativity. Whether it's building responsive
                layouts, crafting smooth animations, or bringing UX designs to
                life pixel by pixel, I’m all in.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Beyond the screen, I’m usually geeking out over new tech trends,
                fine-tuning side projects, or just soaking in inspiration from
                everyday design. I’m constantly learning, iterating, and finding
                better ways to build, because the web doesn’t slow down, and
                neither do I.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-accent-cream/50 p-8 rounded-sm">
              <h3 className="text-xl font-display font-medium mb-6">
                Technical Skills
              </h3>
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
              <h3 className="text-xl font-display font-medium mb-4">
                Availability
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-accent-red">
                    Available for Projects
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Nagpur, IN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
