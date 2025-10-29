import { Button } from "@/components/ui/button";
import catsGroup from "@/assets/cats-group.jpg";
import vetWithCat from "@/assets/vet-with-cat.jpg";

export const CTASection = () => {
  return (
    <>
      {/* Telemedicine CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-orange-200 rounded-[56px] border-2 border-border shadow-brutal-lg overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 flex-1 flex flex-col justify-center gap-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                  Telemedicina ilimitada
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Receba orientação veterinária 24 horas por dia sem precisar
                  tirar seu gato do sofá!
                </p>
              </div>
              <Button size="lg" variant="default">
                Contratar
              </Button>
            </div>
            <img
              src={vetWithCat}
              alt="Veterinário com gato"
              className="w-full md:w-[688px] h-[400px] md:h-[562px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* No Copay CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-orange-200 rounded-[56px] border-2 border-border shadow-brutal-lg overflow-hidden flex flex-col md:flex-row-reverse">
            <div className="p-12 flex-1 flex flex-col justify-center gap-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                  Catlife não tem coparticipação
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Você não paga por serviço utilizado. A mensalidade é fixa e
                  sem letras miúdas.
                </p>
              </div>
              <Button size="lg" variant="default">
                Contratar
              </Button>
            </div>
            <img
              src={catsGroup}
              alt="Grupo de gatos felizes"
              className="w-full md:w-[693px] h-[400px] md:h-[561px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
