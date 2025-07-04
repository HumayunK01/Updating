import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Heart, Users, Zap, Cpu, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen cyber-bg particles relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Warning Banner */}
      <div className="relative z-10 bg-warning text-warning-foreground py-6 px-6 animate-fade-in animate-glow">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <Zap className="h-6 w-6 animate-pulse" />
          <p className="font-bold text-center text-lg">
            Project Archived – Version 2.0 Coming Soon!
          </p>
          <Zap className="h-6 w-6 animate-pulse" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-delay">
          <div className="animate-float mb-8">
            <Globe className="h-16 w-16 mx-auto text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="neon-text">Project</span>{" "}
            <span className="text-foreground">Archived</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-neon-purple mx-auto mb-8 animate-gradient"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entering a new dimension of{" "}
            <span className="text-primary font-semibold">innovation</span> and{" "}
            <span className="text-accent font-semibold">reliability</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:gap-12 animate-fade-in-delay-2">
          {/* Section 1: Project Status */}
          <div className="glass-card rounded-3xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-destructive/20 to-transparent rounded-full blur-xl"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-destructive/20 p-4 rounded-2xl border border-destructive/30 animate-float">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                  System Status
                  <Cpu className="h-6 w-6 text-primary animate-pulse" />
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                  Due to persistent errors and unrecoverable file loss, we've initiated a{" "}
                  <span className="text-destructive font-semibold">controlled shutdown</span> of the current system. 
                  This strategic decision ensures we can rebuild with{" "}
                  <span className="text-primary font-semibold">cutting-edge architecture</span> and 
                  deliver the premium experience you deserve.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: What's Next */}
          <div className="glass-card rounded-3xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden cyber-border">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30 animate-glow">
                <RefreshCw className="h-8 w-8 text-primary animate-spin" style={{animationDuration: '3s'}} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  <span className="neon-text">Version 2.0</span> Genesis
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                  We're architecting a{" "}
                  <span className="text-primary font-semibold">next-generation platform</span> from the ground up. 
                  Built with advanced protocols, enhanced security layers, and{" "}
                  <span className="text-accent font-semibold">quantum-ready infrastructure</span>. 
                  Version 2.0 will feature revolutionary capabilities and unprecedented performance.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Thank You */}
          <div className="glass-card rounded-3xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-accent/20 p-4 rounded-2xl border border-accent/30 animate-float" style={{animationDelay: '1s'}}>
                <Heart className="h-8 w-8 text-accent animate-pulse" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  Gratitude Protocol
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                  Your unwavering support has been the{" "}
                  <span className="text-accent font-semibold">core energy</span> driving our mission. 
                  Every interaction, every piece of feedback, every moment of patience during this transition 
                  fuels our commitment to deliver something{" "}
                  <span className="text-primary font-semibold">truly extraordinary</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12">
            <div className="glass-card rounded-3xl p-10 md:p-12 relative overflow-hidden animate-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-neon-purple/5 animate-gradient"></div>
              <div className="relative z-10">
                <div className="animate-float mb-6">
                  <Users className="h-16 w-16 text-primary mx-auto" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  <span className="neon-text">Join the Evolution</span>
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
                  Be among the first to experience the future. Subscribe to our{" "}
                  <span className="text-primary font-semibold">quantum updates</span> and gain 
                  exclusive access to behind-the-scenes development insights.
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 hover:scale-110 hover:shadow-2xl border-0 font-bold"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Follow for Updates
                </Button>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="text-center py-12">
            <div className="max-w-md mx-auto relative">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
              <div className="glass-card rounded-2xl p-6 border border-primary/20">
                <p className="text-muted-foreground text-xl font-light tracking-wider">
                  <span className="text-primary">—</span> Humayun <span className="text-accent">—</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                  System Architect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;