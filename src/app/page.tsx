import { Aside } from "@/components/aside/aside";
import { Sections } from "@/components/sections/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary-500/10 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-400/10 rounded-full animate-pulse-slow blur-lg"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-secondary-600/10 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-secondary-300/10 rounded-full animate-pulse-slow blur-lg" style={{animationDelay: '3s'}}></div>
      
      <div className="flex flex-col md:flex-row w-full flex-grow relative z-10">
        <Aside />
        <main className="flex-grow md:w-3/5 lg:w-2/4 px-6 py-0 md:py-24">
          <Sections />
        </main>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-base-400 text-sm">
            © 2025 Eliezer Marques. All rights reserved.
          </div>
          <div className="text-base-500 text-xs">
            Made with Next.js + Gin (Golang)
          </div>
        </div>
      </footer>
    </div>
  );
}
