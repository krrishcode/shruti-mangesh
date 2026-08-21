import React, { useState } from 'react';

interface CelebLook {
  id: number;
  celebName: string;
  occasion: string;
  outfitName: string;
  image: string;
  quote?: string;
}

const CELEB_LOOKS: CelebLook[] = [
  {
    id: 1,
    celebName: 'RANBIR KAPOOR',
    occasion: 'Grand Reception Gala',
    outfitName: 'Custom Hand-woven Ivory Zardozi Sherwani',
    image: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwf27d8283/images/hires/FW26/F26MP8SR_BEIGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    quote: '“The craftsmanship on this sherwani is timeless royalty.”',
  },
  {
    id: 2,
    celebName: 'VICKY KAUSHAL',
    occasion: 'Royal Palace Pheras',
    outfitName: 'Imperial Antique Kasab Sherwani',
    image: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw1b754ca9/images/hires/FW26/F26MP6J_GOLD_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    quote: '“A silhouette of unmatched masculine dignity.”',
  },
  {
    id: 3,
    celebName: 'SIDHARTH MALHOTRA',
    occasion: 'Bespoke Sangeet Night',
    outfitName: 'Sage Chanderi Bundi & Kurta Set',
    image: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwfab212d9/images/hires/FW26/F26MP2B_SAGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    quote: '“Effortlessly lightweight yet exquisitely detailed.”',
  },
  {
    id: 4,
    celebName: 'ADITYA ROY KAPUR',
    occasion: 'Black Tie Soirée',
    outfitName: 'Firelight Silk Cocktail Tuxedo',
    image: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw83bb767f/images/hires/FW26/F26MP31J_OFF%20WHITE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    quote: '“Pure sartorial precision tailored for the red carpet.”',
  },
];

export const CelebsShowcase: React.FC = () => {
  const [selectedCeleb, setSelectedCeleb] = useState<CelebLook | null>(null);

  return (
    <section id="celebs" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Clean Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[40px] tracking-[0.14em] text-[#333333] font-light uppercase">
            CELEBS IN MANGESH MAHADEV
          </h2>
          <p className="font-sans-clean text-[11px] sm:text-xs text-[#333333] tracking-[0.06em] mt-3 font-light normal-case">
            Iconic gentlemen celebrated in handcrafted couture from our atelier.
          </p>
        </div>

        {/* 4-Column Clean Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {CELEB_LOOKS.map((celeb) => (
            <div
              key={celeb.id}
              className="group block text-center cursor-pointer"
              onClick={() => setSelectedCeleb(celeb)}
            >
              <div className="relative aspect-[3/4.6] overflow-hidden bg-[#ECE8E1] mb-4">
                <img
                  src={celeb.image}
                  alt={`${celeb.celebName} in ${celeb.outfitName}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Minimal Text Below Image */}
              <h3 className="font-serif-luxury text-sm sm:text-base tracking-[0.12em] font-normal text-[#333333] uppercase group-hover:text-[#4A0E17] transition-colors truncate">
                {celeb.celebName}
              </h3>
              <p className="font-sans-clean text-[10px] sm:text-[11px] text-[#333333] tracking-[0.06em] mt-1 font-light normal-case">
                {celeb.occasion}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Minimalist CTA Button Matching Anita Dongre */}
        <div className="text-center mt-12">
          <a
            href="#celebs"
            className="inline-block px-10 py-3.5 border border-[#1A1A1A] text-[#333333] hover:bg-[#4A0E17] hover:border-[#4A0E17] hover:text-white transition-all text-[11px] font-medium tracking-[0.20em] uppercase"
          >
            SHOP NOW
          </a>
        </div>

      </div>

      {/* Clean Quick Modal */}
      {selectedCeleb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedCeleb(null)}
          />
          <div className="relative bg-[#FCFAF7] max-w-2xl w-full rounded-xs shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2">
            <button
              onClick={() => setSelectedCeleb(null)}
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-black z-20 p-2"
            >
              ✕
            </button>
            <div className="h-[420px] bg-gray-100">
              <img
                src={selectedCeleb.image}
                alt={selectedCeleb.celebName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-medium tracking-[0.20em] text-[#66141F] uppercase block mb-1">
                  {selectedCeleb.occasion}
                </span>
                <h3 className="font-serif-luxury text-lg text-gray-900 mb-2 font-light uppercase">
                  {selectedCeleb.celebName}
                </h3>
                <h4 className="text-[11px] font-medium text-gray-700 mb-4 tracking-[0.10em] uppercase">
                  {selectedCeleb.outfitName}
                </h4>
                {selectedCeleb.quote && (
                  <p className="font-sans-clean text-[11px] text-gray-600 leading-relaxed font-light">
                    {selectedCeleb.quote}
                  </p>
                )}
                <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                  Handcrafted from pure raw silk with authentic heritage Zardozi wires. Available for bespoke fitting in our ateliers.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#bespoke-appointment"
                  onClick={() => setSelectedCeleb(null)}
                  className="block w-full py-3 bg-[#4A0E17] text-white text-center text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-[#66141F] transition"
                >
                  REQUEST BESPOKE ATELIER FITTING
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
