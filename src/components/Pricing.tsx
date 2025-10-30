import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const Pricing = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plans = [
    {
      name: "Básico",
      price: "R$39",
      description: "Cuidados de rotina com mais economia",
    },
    {
      name: "Médio",
      price: "R$79",
      description: "Cobertura completa para o dia a dia",
    },
    {
      name: "Top",
      price: "R$139",
      description: "Proteção máxima para seu gato",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 bg-orange-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium">
            Se o seu gato tivesse cartão de crédito, já teria escolhido um
            desses
          </h2>
          <div className="max-w-sm mx-auto">
            <Input
              placeholder="Belo Horizonte - MG"
              className="h-14 px-6 bg-orange-100/40 border border-orange-50 rounded-full text-xl"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {plans.map((plan, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={`p-8 bg-tangerine rounded-[40px] border-2 border-border shadow-brutal-lg flex flex-col gap-5 transition-all duration-500 ${
                      current === index
                        ? "scale-105 md:scale-110 opacity-100"
                        : "opacity-50 scale-95"
                    }`}
                  >
                    <h3
                      className={`font-semibold ${
                        current === index ? "text-3xl" : "text-2xl"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span
                        className={`font-bold ${
                          current === index ? "text-7xl" : "text-6xl"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={current === index ? "text-xl" : "text-base"}
                      >
                        <span className="font-bold">/ </span>mês
                      </span>
                    </div>
                    <p
                      className={`${
                        current === index ? "text-2xl" : "text-lg"
                      } leading-snug`}
                    >
                      {plan.description}
                    </p>
                    <Button
                      size={current === index ? "lg" : "default"}
                      variant="secondary"
                      className="w-full bg-gray-50 hover:bg-gray-100"
                    >
                      Simular
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-tangerine border-2 border-border shadow-brutal hover:bg-orange-400" />
            <CarouselNext className="hidden md:flex -right-12 bg-tangerine border-2 border-border shadow-brutal hover:bg-orange-400" />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2.5 mb-8">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-4 h-4 rounded-full border-2 border-border transition-all duration-300 ${
                current === index
                  ? "bg-tangerine scale-110"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" variant="default">
            Ver tabela de cobertura
          </Button>
        </div>
      </div>
    </section>
  );
};
