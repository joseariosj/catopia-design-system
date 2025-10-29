import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$39",
      description: "Cuidados de rotina com mais economia",
      highlighted: false,
    },
    {
      name: "Médio",
      price: "R$79",
      description: "Cobertura completa para o dia a dia",
      highlighted: true,
    },
    {
      name: "Top",
      price: "R$139",
      description: "Proteção máxima para seu gato",
      highlighted: false,
    },
  ];

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

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 max-w-6xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 bg-tangerine rounded-[40px] border-2 border-border shadow-brutal-lg flex flex-col gap-5 transition-all ${
                plan.highlighted
                  ? "scale-105 md:scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <h3
                className={`font-semibold ${
                  plan.highlighted ? "text-3xl" : "text-2xl"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-center gap-1">
                <span
                  className={`font-bold ${
                    plan.highlighted ? "text-7xl" : "text-6xl"
                  }`}
                >
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-xl" : "text-base"}>
                  <span className="font-bold">/ </span>mês
                </span>
              </div>
              <p
                className={`${
                  plan.highlighted ? "text-2xl" : "text-lg"
                } leading-snug`}
              >
                {plan.description}
              </p>
              <Button
                size={plan.highlighted ? "lg" : "default"}
                variant="secondary"
                className="w-full bg-gray-50 hover:bg-gray-100"
              >
                Simular
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2.5 mb-8">
          <div className="w-4 h-4 bg-tangerine rounded-full" />
          <div className="w-4 h-4 bg-gray-200 rounded-full" />
          <div className="w-4 h-4 bg-gray-200 rounded-full" />
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
