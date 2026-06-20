"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  stars: number;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: item.stars }).map((_, j) => (
                      <FontAwesomeIcon key={j} icon={faStar} className="size-4 text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
