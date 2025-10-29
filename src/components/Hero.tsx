import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCat from "@/assets/hero-cat.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen px-6 md:px-14 pt-32 pb-24 flex flex-col lg:flex-row justify-between items-center gap-12">
      <div className="max-w-2xl space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          O plano de saúde pet para gatos{" "}
          <span className="inline-block">exigentes.</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-lg">
          O primeiro (e único) plano pet só para gatos com abrangência nacional.
        </p>
      </div>

      <div className="w-full max-w-sm p-8 bg-orange-100/40 backdrop-blur-sm rounded-[32px] border-2 border-border shadow-brutal-lg flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-center">
          Encontre a opção ideal
        </h2>
        <Input
          placeholder="Nome do seu pet"
          className="h-12 px-4 bg-orange-100/60 border-2 border-orange-50 rounded-full text-lg"
        />
        <Button size="lg" variant="default" className="w-full">
          Vamos lá
        </Button>
      </div>

      <div className="absolute right-0 top-32 w-[600px] h-96 -z-10 hidden lg:block">
        <img
          src={heroCat}
          alt="Gato exigente"
          className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
        />
      </div>
    </section>
  );
};
