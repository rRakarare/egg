import { FluidCanvas } from "@/components/Fluid";
import EggLogo from "@/components/logo/egg";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-foreground/20">
      <FluidCanvas />
      <div className="flex items-center justify-center">
      <EggLogo className="size-80" />
      <h1 className="text-7xl font-extrabold">Eggility</h1>
      </div>
    </div>
  );
}
