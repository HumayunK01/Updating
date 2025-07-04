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
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-delay">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Project Archived
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're taking a step back to build something better for you.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid gap-8 md:gap-12 animate-fade-in-delay-2">
          {/* Section 1: Project Status */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-destructive/10 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
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

          {/* Section 2: What's Next */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
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

          {/* Section 3: Thank You */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
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

          {/* Call to Action */}
          <div className="text-center py-8">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Be the first to know when Version 2.0 launches. Follow us for development 
                updates, behind-the-scenes content, and early access opportunities.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
              >
                Follow for Updates
              </Button>
            </div>
          </div>

          {/* Signature */}
          <div className="text-center py-8">
            <div className="max-w-md mx-auto">
              <div className="h-px bg-border mb-6"></div>
              <p className="text-muted-foreground italic text-lg">
                – Humayun
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;