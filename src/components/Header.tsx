import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-14 py-4 backdrop-blur-md">
      <nav className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 px-3 py-2.5 bg-orange-100/20 backdrop-blur rounded-full border border-orange-50/20 flex items-center justify-center">
            <span className="text-2xl">🐱</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 px-6 py-2 bg-orange-100/20 backdrop-blur rounded-full border border-orange-50/20">
            <span className="text-3xl font-bold">Catlife</span>
            <a href="#planos" className="text-lg font-medium hover:text-primary/80 transition-colors">
              Planos
            </a>
            <a href="#como-funciona" className="text-lg font-medium hover:text-primary/80 transition-colors">
              Como funciona
            </a>
            <a href="#rede" className="text-lg font-medium hover:text-primary/80 transition-colors">
              Rede credenciada
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-orange-100/20 backdrop-blur rounded-full border border-orange-50/20">
          <Button variant="outline" size="default" className="rounded-full">
            Entrar
          </Button>
          <Button variant="default" size="default" className="rounded-full">
            Simular plano
          </Button>
        </div>
      </nav>
    </header>
  );
};
