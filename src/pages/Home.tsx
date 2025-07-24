import { NavigationCard } from "@/components/NavigationCard";
import { TimeDisplay } from "@/components/TimeDisplay";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header with Name */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 md:mb-16">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-none">
              <span className="block">Piyush</span>
            </h1>
          </div>
          <div className="text-right">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-none">
              <span className="block">Harde</span>
            </h1>
          </div>
        </header>

        {/* Subtitle Information */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Front-End Developer
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Available for Freelance
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            piyushharde100@gmail.com
          </span>
          <TimeDisplay />
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Left Side - Main Description */}
          <div className="space-y-8 lg:space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-4">
                Frontend
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight">
                Developer
              </h2>
            </div>

            <div className="space-y-4">
              <div className="w-20 h-0.5 bg-accent-red"></div>
            </div>
          </div>

          {/* Right Side - Additional Info */}
          <div className="flex flex-col justify-end space-y-6">
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-md">
              Crafting elegant digital experiences through clean code and
              thoughtful design. Specialized in modern JavaScript frameworks
              with a passion for minimalist aesthetics.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-accent-red rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-muted-foreground">
                Currently accepting new projects
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <NavigationCard
            to="/about"
            title="About"
            number="01"
            variant="cream"
          />
          <NavigationCard
            to="/projects"
            title="Projects"
            number="02"
            variant="red"
          />
          <NavigationCard
            to="/contact"
            title="Contact"
            number="03"
            variant="yellow"
          />
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-transparent to-foreground"></div>
      </div>
    </div>
  );
}
