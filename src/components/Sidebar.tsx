import { NavLink } from '@/components/NavLink';
import { Home, Code2, Palette, Braces, Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', icon: Home, label: 'Bosh sahifa', color: 'text-primary' },
  { to: '/kutubxona', icon: BookOpen, label: 'Kutubxona', color: 'text-accent' },
  { to: '/html', icon: Code2, label: 'HTML', color: 'text-html' },
  { to: '/css', icon: Palette, label: 'CSS', color: 'text-css' },
  { to: '/javascript', icon: Braces, label: 'JavaScript', color: 'text-js' },
];

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar border border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        aria-label="Menyu ochish"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "md:hidden fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 transition-transform duration-300 flex flex-col w-[70%] max-w-[280px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile Header */}
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-js flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-sidebar-foreground">CodeQuiz</h1>
              <p className="text-xs text-muted-foreground">Web testlari</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            aria-label="Menyu yopish"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
            >
              <item.icon className={cn("w-5 h-5 flex-shrink-0", item.color)} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 flex-col w-64">
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gradient-js flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground">CodeQuiz</h1>
            <p className="text-xs text-muted-foreground">Web dasturlash testlari</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
            >
              <item.icon className={cn("w-5 h-5 flex-shrink-0", item.color)} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
