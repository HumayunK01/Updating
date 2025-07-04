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
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-delay">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Project Archived
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-10 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're taking a step back to build something better for you.
          </p>
        </div>

        {/* Main Content Sections - Side by Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 animate-slide-up">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Section 1: Project Status */}
            <div className="bg-card rounded-3xl p-8 modern-shadow border border-border hover:glow-effect transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="bg-destructive/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-float">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-card-foreground mb-6 tracking-tight">
                    Current Status
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Due to persistent errors and unrecoverable file loss, we've made the difficult 
                    decision to archive the current version of this project. While this wasn't easy, 
                    it's the right choice to ensure we can deliver the quality experience you deserve.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Thank You */}
            <div className="bg-card rounded-3xl p-8 modern-shadow border border-border hover:glow-effect transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-card-foreground mb-6 tracking-tight">
                    Thank You
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Your support and feedback have been invaluable throughout this journey. 
                    We deeply appreciate your patience as we work to create something extraordinary. 
                    Your trust motivates us to build a better, more reliable platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Section 2: What's Next */}
            <div className="bg-card rounded-3xl p-8 modern-shadow border border-border hover:glow-effect transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-card-foreground mb-6 tracking-tight">
                    Version 2.0 Development
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We're rebuilding everything from scratch with a focus on better code quality, 
                    improved stability, and enhanced user experience. Version 2.0 will address all 
                    the issues we encountered and introduce exciting new features.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/20 modern-shadow hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-2xl w-fit mx-auto mb-6 animate-float" style={{animationDelay: '1.5s'}}>
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Be the first to know when Version 2.0 launches. Follow us for development 
                  updates, behind-the-scenes content, and early access opportunities.
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 glow-effect"
                >
                  Follow for Updates
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center py-12 animate-fade-in-delay-2">
          <div className="max-w-md mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
            <p className="text-muted-foreground italic text-xl font-light tracking-wide">
              – Humayun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;