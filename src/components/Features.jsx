import React from 'react';
import { Bot, Shield, Zap, Smile } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Interactive 3D',
    desc: 'Engage with a fully interactive Spline robot directly in the browser.'
  },
  {
    icon: Shield,
    title: 'Robust & Safe',
    desc: 'Performance-first, secure by default, with smooth interactions.'
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    desc: 'Optimized assets and modern tooling keep things speedy.'
  },
  {
    icon: Smile,
    title: 'Friendly UX',
    desc: 'Playful, minimalist design that focuses on user delight.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full border-t border-white/10 bg-black py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,153,0,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Designed to welcome</h2>
          <p className="mt-3 text-white/80">Minimalist visuals, subtle orange lighting, and technology that feels personable.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.08]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-orange-400">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
