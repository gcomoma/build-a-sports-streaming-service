
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Home, Calendar, TrendingUp, User, Search, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthDialog from '@/components/AuthDialog';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/live', label: 'Live', icon: Play },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/trending', label: 'Trending', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Play className="w-6 h-6 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold gradient-text">StreamSport</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className="gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search sports, teams..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
            <Button 
              variant="default" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setAuthDialogOpen(true)}
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/settings">
                <User className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground fill-current" />
                </div>
                <span className="font-bold gradient-text">StreamSport</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Watch live sports and on-demand content from around the world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Sports</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/sports/football" className="hover:text-foreground transition-colors">Football</Link></li>
                <li><Link to="/sports/basketball" className="hover:text-foreground transition-colors">Basketball</Link></li>
                <li><Link to="/sports/tennis" className="hover:text-foreground transition-colors">Tennis</Link></li>
                <li><Link to="/sports/cricket" className="hover:text-foreground transition-colors">Cricket</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 StreamSport. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}