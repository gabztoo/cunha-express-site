import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Download, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const slides = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  src: `/slides/cunha-apresentacao-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Slide ${index + 1} da apresentação institucional da Cunha Express`,
}));

const PDF_PATH = "/uploads/cunha-express-apresentacao-institucional.pdf";

const InstitutionalSlides = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrentSlide(api.selectedScrollSnap() + 1);

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const openViewer = (index: number) => {
    setViewerIndex(index);
    setIsViewerOpen(true);
  };

  const moveViewer = (direction: number) => {
    setViewerIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="panel-elevated rounded-3xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Apresentação Institucional</p>
            <h2 className="mt-4 text-3xl font-semibold text-cunha-navy sm:text-4xl">
              Material Comercial para Clientes B2B
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Mostre a apresentação completa da operação, diferenciais e parceiros de forma visual e objetiva.
            </p>
          </div>

          <Button asChild variant="outline" className="min-h-[44px]">
            <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar PDF Completo
            </a>
          </Button>
        </div>

        <div className="mt-6">
          <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-3">
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id} className="pl-2 sm:pl-3">
                  <button
                    type="button"
                    className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-white text-left shadow-sm transition-shadow duration-200 hover:shadow-md"
                    onClick={() => openViewer(index)}
                    aria-label={`Ampliar ${slide.alt}`}
                  >
                    <div className="relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        width={1280}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/9] w-full object-cover"
                      />
                      <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-cunha-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                        Ampliar
                      </span>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            className="min-h-[44px] px-3 sm:px-4"
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Anterior
          </Button>

          <p className="text-sm font-semibold text-cunha-navy">
            Slide {currentSlide} de {slides.length}
          </p>

          <Button
            type="button"
            variant="outline"
            className="min-h-[44px] px-3 sm:px-4"
            onClick={() => api?.scrollNext()}
          >
            Próximo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="w-[calc(100%-1rem)] max-w-5xl border-white/20 bg-cunha-navy/95 p-3 text-white sm:p-5">
          <DialogTitle className="sr-only">Visualização da apresentação institucional</DialogTitle>

          <div className="relative">
            <img
              src={slides[viewerIndex].src}
              alt={slides[viewerIndex].alt}
              width={1280}
              height={720}
              className="h-auto max-h-[82svh] w-full rounded-lg bg-black/20 object-contain"
            />

            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 min-h-[44px] min-w-[44px] -translate-y-1/2"
              onClick={() => moveViewer(-1)}
              aria-label="Slide anterior"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 min-h-[44px] min-w-[44px] -translate-y-1/2"
              onClick={() => moveViewer(1)}
              aria-label="Próximo slide"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex items-center justify-between text-sm text-white/85">
            <p>
              Slide {viewerIndex + 1} de {slides.length}
            </p>
            <a
              href={slides[viewerIndex].src}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded px-2 py-1 font-semibold hover:bg-white/10"
            >
              Abrir imagem
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstitutionalSlides;
