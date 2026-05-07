import { ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"></div>

      {/* Content */}
      <div className="relative h-full flex items-center px-8 md:px-16">
        <div className="text-white max-w-2xl">
          <p className="text-lg md:text-xl text-cyan-300 mb-4 font-semibold">NEW COLLECTION</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Luxury Shopping<br />Redefined
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 font-light">
            Experience premium products with exceptional quality and unmatched customer service.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition flex items-center gap-2 text-lg">
            Shop Now <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroBanner;
