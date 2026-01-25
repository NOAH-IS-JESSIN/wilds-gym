
import { ThreeDPhotoCarousel } from './ui/3d-carousel';

// New Background Asset
const DENSE_JUNGLE_BG = "https://images.unsplash.com/photo-1586094332115-680788e0182f?w=500&auto=format&fit=crop";

const Facilities = () => {
  return (
    <section className="bg-wild-black py-32 px-6 relative z-10 overflow-hidden border-t border-wild-dark">
      
      {/* 1. BACKGROUND IMAGE (Replaces Fog) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 grayscale-[40%]"
        style={{ backgroundImage: `url('${DENSE_JUNGLE_BG}')` }}
      ></div>
      
      {/* 2. OVERLAY (To darken it so text pops) */}
      <div className="absolute inset-0 z-10 bg-wild-black/70 mix-blend-multiply"></div>

      <div className="container mx-auto relative z-20">
        
        {/* --- BIG HEADER --- */}
        <div className="text-center mb-20">
          <p className="text-wild-accent font-mono text-sm uppercase tracking-[0.4em] mb-4">
            Heavy Artillery
          </p>
          <h2 className="text-6xl md:text-9xl font-beast font-black uppercase text-wild-white leading-none tracking-tighter opacity-10">
            THE ARSENAL
          </h2>
          <h2 className="text-4xl md:text-6xl font-beast font-black uppercase text-wild-white leading-none tracking-tighter -mt-12 md:-mt-20 relative z-10 drop-shadow-2xl">
            Our Facilities
          </h2>
        </div>

        {/* --- 3D CAROUSEL --- */}
        <div className="w-full">
           <ThreeDPhotoCarousel />
        </div>
        
        <div className="text-center mt-10">
          <p className="text-wild-gray font-mono text-xs uppercase animate-pulse">
            &larr; Drag to Rotate &rarr;
          </p>
        </div>

      </div>
    </section>
  );
};

export default Facilities;