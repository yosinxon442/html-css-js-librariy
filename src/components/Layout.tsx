import { Sidebar } from './Sidebar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
