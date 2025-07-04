import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Heart, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Warning Banner */}
      <div className="bg-warning text-warning-foreground py-4 px-6 animate-fade-in">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <AlertTriangle className="h-5 w-5" />
          <p className="font-semibold text-center">
            Project Archived – Version 2.0 Coming Soon!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-delay">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight tracking-tight">
            Project Archived
          </h1>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            We're taking a step back to build something better for you.
          </p>
        </div>

        {/* Main Content Sections - Side by Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 animate-slide-up">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Section 1: Project Status */}
            <div className="bg-card rounded-xl p-6 modern-shadow border border-border hover:glow-effect transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-card-foreground mb-3 tracking-tight">
                    Current Status
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Due to persistent errors and unrecoverable file loss, we've made the difficult 
                    decision to archive the current version of this project. While this wasn't easy, 
                    it's the right choice to ensure we can deliver the quality experience you deserve.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Thank You */}
            <div className="bg-card rounded-xl p-6 modern-shadow border border-border hover:glow-effect transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-card-foreground mb-3 tracking-tight">
                    Thank You
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Your support and feedback have been invaluable throughout this journey. 
                    We deeply appreciate your patience as we work to create something extraordinary. 
                    Your trust motivates us to build a better, more reliable platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Section 2: What's Next */}
            <div className="bg-card rounded-xl p-6 modern-shadow border border-border hover:glow-effect transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-card-foreground mb-3 tracking-tight">
                    Version 2.0 Development
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We're rebuilding everything from scratch with a focus on better code quality, 
                    improved stability, and enhanced user experience. Version 2.0 will address all 
                    the issues we encountered and introduce exciting new features.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20 modern-shadow hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  Be the first to know when Version 2.0 launches. Follow us for development 
                  updates, behind-the-scenes content, and early access opportunities.
                </p>
                <Button 
                  size="lg" 
                  className="text-sm px-6 py-2.5 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  Follow for Updates
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center py-8 animate-fade-in-delay-2">
          <div className="max-w-md mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
            <p className="text-muted-foreground italic text-base font-light tracking-wide">
              – Humayun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;