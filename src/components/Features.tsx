import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Features = () => {
  return (
    <section className="py-24 bg-orange-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            Seu gato merece um plano de saúde feito{" "}
            <span className="font-bold">exclusivamente</span> para ele, e você
            sabe disso
          </h2>
          <p className="text-xl md:text-2xl">
            A Catlife tem coberturas completas e um jeito descomplicado de
            cuidar do seu pet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="h-[500px] px-8 pt-24 pb-14 bg-orange-500 rounded-[56px] border-2 border-border shadow-brutal-lg flex flex-col justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <div className="w-48 h-48 p-10 bg-orange-100 rounded-full border-2 border-border shadow-brutal flex items-center justify-center">
                <div className="text-6xl">🩺</div>
              </div>
              <div className="p-4 bg-orange-400 rounded-full border-2 border-border shadow-brutal">
                <div className="text-4xl">🏠</div>
              </div>
              <div className="w-48 h-48 p-10 bg-orange-200 rounded-full border-2 border-border shadow-brutal flex items-center justify-center">
                <div className="text-6xl">💉</div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-center max-w-md leading-8">
              Consultas com <span className="font-bold">especialista</span> e{" "}
              <span className="font-bold">à domicílio</span> desde o plano mais{" "}
              <span className="font-bold">básico</span>
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="h-[500px] px-8 pt-12 pb-14 bg-orange-400 rounded-[56px] border-2 border-border shadow-brutal-lg flex flex-col justify-between items-center">
            <div className="space-y-2">
              {[
                { text: "Consultas", bg: "bg-gray-50" },
                { text: "Teste rápido", bg: "bg-orange-100" },
                { text: "Vacinas", bg: "bg-orange-200" },
                { text: "Telemedicina", bg: "bg-orange-300" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 justify-end"
                >
                  <div className="p-1 bg-success rounded-full border border-border shadow-brutal">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div
                    className={`px-5 py-2 ${item.bg} rounded-xl border-2 border-border shadow-brutal`}
                  >
                    <span className="text-2xl md:text-4xl font-normal">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-medium text-center leading-8">
              Procedimentos <span className="font-bold">pré-aprovados</span> e{" "}
              <span className="font-bold">sem coparticipação</span>
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
          {/* Multi-cat Discount */}
          <div className="h-[500px] px-8 py-14 bg-orange-300 rounded-[48px] border-2 border-border shadow-brutal-lg flex flex-col justify-between items-center">
            <div className="w-80 flex flex-col gap-2">
              {[
                { name: "Joaquim", discount: null },
                { name: "Nina Maria", discount: "-10%" },
                { name: "Francisco", discount: "-20%" },
                { name: "Geraldinho", discount: "-30%" },
                { name: "Abobrinha", discount: "-40%" },
              ].map((cat, index) => (
                <div
                  key={index}
                  className={`px-2.5 py-2 rounded-xl border-2 border-border shadow-brutal flex justify-between items-center ${
                    cat.discount
                      ? "bg-success/30"
                      : "bg-orange-100"
                  }`}
                >
                  <span className="text-2xl md:text-3xl font-medium">
                    {cat.name}
                  </span>
                  {cat.discount && (
                    <span className="px-2 py-1 bg-success rounded-full border border-border text-xl font-bold">
                      {cat.discount}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-medium text-center leading-8 max-w-md">
              Adicione mais gatinhos e{" "}
              <span className="font-bold">
                ganhe até 40% de desconto na mensalidade.
              </span>
            </p>
          </div>

          {/* Coverage Table */}
          <div className="h-[500px] pl-12 py-8 bg-orange-200 rounded-[48px] border-2 border-border shadow-brutal-lg flex items-center gap-6">
            <div className="flex-1 space-y-6">
              <p className="text-2xl md:text-3xl font-medium leading-8">
                Tabela de cobertura para gatos{" "}
                <span className="font-bold">mais completa do mercado</span>
              </p>
            </div>
            <div className="bg-gray-50 rounded-tl-2xl border-l-2 border-t-2 border-border p-5 space-y-3">
              {[
                "Consultas",
                "Exames laboratoriais",
                "Vacinas",
                "Proc. Médico-veterinário",
                "Testes rápidos",
                "Cirurgias",
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-lg md:text-2xl font-medium">
                    {item}
                  </span>
                  <div className="p-0.5 bg-orange-400 rounded-full border border-border">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="default">
            Simular o plano ideal
          </Button>
        </div>
      </div>
    </section>
  );
};
