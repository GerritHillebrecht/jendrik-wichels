import { AnimatedBeamDemo } from "./_components/beam.video";
import { VideoDock } from "./_components/dock.video";

export default function Page() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20">
        <AnimatedBeamDemo />
      </div>
      <VideoDock />
    </section>
  );
}
