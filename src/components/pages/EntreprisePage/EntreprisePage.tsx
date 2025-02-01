import { HeaderSnowpact } from "@/components/organisms/HeaderSnowpact";
import { TestimonialSnowpact } from "@/components/organisms/TestimonialSnowpact";
import { SnowpactTeam } from "@/components/organisms/SnowpactTeam";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { TechSnowpact } from "@/components/organisms/TechSnowpact";
import { MissionSnowpact } from "@/components/organisms/MissionSnowpact";
import { NeonBlur } from "@/components/atoms/NeonBlur";

export function EntreprisePage() {
  return (
    <PublicLayout>
      <HeaderSnowpact />
      <section className="flex items-center justify-center flex-col gap-20 md:gap-44 md:mx-60 mx-10 mt-32 mb-32">
        <TechSnowpact />
        <TestimonialSnowpact />
      </section>
      <MissionSnowpact />
      <section className="relative">
        <NeonBlur customPosition="absolute bg-[#F8599C] -left-0 bottom-[0em]" />
        <NeonBlur customPosition="absolute bg-blue-800 -right-0 -top-0" />
        <div className="flex relative items-center justify-center flex-col gap-44 md:mx-60 mx-10 mt-32">
          <SnowpactTeam />
        </div>
      </section>
    </PublicLayout>
  );
}
