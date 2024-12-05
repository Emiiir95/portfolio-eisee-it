import React from "react";
import { HeaderSnowpact } from "@/components/organisms/HeaderSnowpact";
import { TestimonialSnowpact } from "@/components/organisms/TestimonialSnowpact";
import { SnowpactTeam } from "@/components/organisms/SnowpactTeam";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { TechSnowpact } from "@/components/organisms/TechSnowpact";
import { MissionSnowpact } from "@/components/organisms/MissionSnowpact";

export function EntreprisePage() {
  return (
    <PublicLayout>
      <HeaderSnowpact />
      <section className="flex items-center justify-center flex-col gap-20 md:gap-44 md:mx-60 mx-10 mt-32 mb-32">
        <TechSnowpact />
        <TestimonialSnowpact />
      </section>
      <MissionSnowpact />
      <section className="flex items-center justify-center flex-col gap-44 md:mx-60 mx-10 mt-32">
        <SnowpactTeam />
      </section>
    </PublicLayout>
  );
}
