import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black text-white md:h-[80vh]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 md:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Sparkles className="h-3.5 w-3.5 text-orange-400" />
          <span>Playful, interactive, and friendly robotics</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Say hello to your mini robot companion
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          A black-and-white bot with subtle orange glow to welcome users. Explore the interactive 3D scene and discover how delightful technology can be.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#get-started"
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-orange-400"
          >
            Try it now
          </a>
          <a
            href="#features"
            className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
