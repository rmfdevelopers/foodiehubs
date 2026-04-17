'use client';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: layered
// Divider Style: D-QUOTE
// Typography Personality: refined

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  UtensilsCrossed,
  Package,
  Leaf,
  Zap,
  Gift,
  Heart,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Loader2,
  CheckCheck,
  ImageOff,
  Instagram,
  ChefHat,
  Timer,
  ShoppingBag
} from 'lucide-react';

// --- Types ---
interface Stat { number: string; label: string; icon: any; }
interface Feature { title: string; description: string; icon: any; }
interface Product { name: string; description: string; price: string; image_url: string; }
interface Testimonial { name: string; text: string; role: string; }

// --- Hooks ---
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

// --- Components ---
function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: any) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-zinc-800 ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    );
  }
  return (
    <Image
      src={src} alt={alt} fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      className={`${className} will-change-transform`}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}

export default function Foodiehubs() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const brand = {
    name: "Foodiehubs",
    tagline: "The Taste of Home",
    description: "Premium authentic Nigerian snacks and curated foodstuffs, bringing the rich heritage of Command's finest flavors to your doorstep with a rustic-modern touch.",
    region: "Nigeria",
    address: "Command, Lagos"
  };

  const products: Product[] = [
    {
      name: "Spiced Gourmet Kilishi",
      description: "Thinly sliced, sun-dried beef marinated in a secret blend of spicy peanuts and heritage spices.",
      price: "₦5,500",
      image_url: "https://images.unsplash.com/photo-1668723948582-30cd050c5747"
    },
    {
      name: "Crunchy Kuli Kuli Cubes",
      description: "Traditional northern peanut snacks, pressed and fried to a perfect golden crunch.",
      price: "₦3,000",
      image_url: "https://images.unsplash.com/photo-1623302045289-504c901e9d35"
    },
    {
      name: "The Heritage Hamper",
      description: "A luxury curation of our finest snacks, packaged in a rustic-premium gift box for home-sick hearts.",
      price: "₦25,000",
      image_url: "https://images.unsplash.com/photo-1688452458093-0ee9ab19c3bd"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1722239312633-e0e82c8c60a9",
    "https://images.unsplash.com/photo-1608700730717-53738b6362de",
    "https://images.unsplash.com/photo-1665554837563-3782d21a676b",
    "https://images.unsplash.com/photo-1682482002999-654860dfcb24",
    "https://images.unsplash.com/photo-1615462561789-8dbd876de4fb",
    "https://images.unsplash.com/photo-1727867168767-c67974f68508"
  ];

  const features: Feature[] = [
    { title: "Authentic Sourcing", description: "Ingredients sourced directly from local artisans to preserve the true Nigerian palate.", icon: Leaf },
    { title: "Premium Packaging", description: "Rustic aesthetics meet modern freshness-seal technology for every snack.", icon: Package },
    { title: "Swift Delivery", description: "Same-day dispatch across Lagos to ensure your cravings never have to wait.", icon: Zap }
  ];

  const stats: Stat[] = [
    { number: "5,000+", label: "Hampers Delivered", icon: Gift },
    { number: "100%", label: "Artisanal Sourced", icon: Heart }
  ];

  const testimonials: Testimonial[] = [
    { name: "Olumide Adebayo", text: "The Kilishi is hands down the best I've had in Lagos. The spice level is just perfect!", role: "Verified Buyer" },
    { name: "Chidinma Okafor", text: "The Gourmet Hamper made me feel so nostalgic. The Kuli Kuli was incredibly fresh.", role: "Food Blogger" }
  ];

  // --- Animation Refs ---
  const revHero = useScrollReveal();
  const revFeat = useScrollReveal();
  const revProd = useScrollReveal();
  const revGallery = useScrollReveal();
  const revAbout = useScrollReveal();
  const revTest = useScrollReveal();
  const revContact = useScrollReveal();

  return (
    <main className="relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-primary/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-accent p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <UtensilsCrossed size={20} className="text-white" />
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-white uppercase">{brand.name}</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Home', 'The Snacks', 'Our Roots', 'Order'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="text-sm font-semibold text-white/70 hover:text-accent transition-colors uppercase tracking-widest">{link}</a>
            ))}
            <a href="#contact" className="bg-accent text-white px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg hover:shadow-accent/20">
              Shop Now
            </a>
          </div>

          <button onClick={() => setMobileMenu(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${mobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setMobileMenu(false)} />
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-primary p-10 transition-transform duration-500 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setMobileMenu(false)} className="absolute top-6 right-6 text-white/50">
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8 mt-12">
            {['Home', 'The Snacks', 'Our Roots', 'Order'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} onClick={() => setMobileMenu(false)} className="text-3xl font-heading font-bold text-white uppercase">{link}</a>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <p className="text-white/40 text-sm">{brand.address}</p>
          </div>
        </div>
      </div>

      {/* HERO-B Section */}
      <section id="home" ref={revHero.ref} className="min-h-screen relative flex items-end pb-32 px-6 md:px-16 overflow-hidden">
        <SafeImage src="https://images.unsplash.com/photo-1608700730717-53738b6362de" alt={brand.name} fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        <div className={`relative z-10 max-w-4xl transition-all duration-1000 will-change-transform ${revHero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-heading text-6xl md:text-[8rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            Flavors, <br /><span className="text-accent">Delivered.</span>
          </h1>
          <p className="text-white/80 mt-8 text-xl max-w-2xl leading-relaxed font-normal">
            {brand.description}
          </p>
          <div className="flex flex-wrap gap-6 mt-12">
            <a href="#products" className="bg-accent text-white px-10 py-5 font-black text-lg uppercase tracking-widest
              hover:brightness-110 hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
              Shop Signature Snacks <ArrowRight size={20} />
            </a>
            <a href="#about" className="border border-white/20 backdrop-blur-md text-white px-10 py-5 font-bold uppercase tracking-widest
              hover:bg-white/10 transition-all">Explore Our Roots</a>
          </div>
        </div>
      </section>

      {/* FEATURES Section (V4 Staggered) */}
      <section id="features" ref={revFeat.ref} className="py-28 px-6 bg-[#f8f5f2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-primary mb-8 uppercase tracking-tight">Why Foodiehubs?</h2>
            <div className="flex flex-col items-start gap-4">
              <span className="bg-accent text-white px-4 py-2 text-sm md:text-base font-bold uppercase tracking-widest inline-block">
                Crafting the ultimate food experience through heritage and quality.
              </span>
              <span className="bg-accent text-white px-4 py-2 text-sm md:text-base font-bold uppercase tracking-widest inline-block">
                Lagos-certified excellence delivered directly to your door.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i}
                style={{ transitionDelay: `${i * 150}ms` }}
                className={`bg-white p-8 shadow-sm border border-primary/5 transition-all duration-700 will-change-transform hover:shadow-xl hover:-translate-y-1 ${revFeat.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-[#3d2b1f] text-white flex items-center justify-center mb-6">
                  <f.icon size={20} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3 uppercase tracking-tighter">{f.title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO PRODUCTS Section (V2 Scale Reveal) */}
      <section id="thesnacks" ref={revProd.ref} className="py-28 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-accent font-heading tracking-[0.3em] uppercase mb-4">The Collection</p>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-none">Signature Snacks</h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-1000 ${revProd.isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {/* LARGE FEATURE BENTO */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl h-[450px] md:h-[500px]">
              <SafeImage src={products[0].image_url} alt={products[0].name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="max-w-md">
                    <span className="bg-accent text-white px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded mb-4 inline-block">Top Pick</span>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{products[0].name}</h3>
                    <p className="text-white/70 text-sm md:text-base line-clamp-2 mb-6">{products[0].description}</p>
                    <a href="#contact" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-all uppercase text-[10px] md:text-xs tracking-widest whitespace-nowrap text-center">Order Now</a>
                  </div>
                  <span className="text-accent font-heading text-3xl md:text-4xl font-black">{products[0].price}</span>
                </div>
              </div>
            </div>

            {/* SMALL BENTO 1 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl h-[400px] md:h-[500px]">
              <SafeImage src={products[1].image_url} alt={products[1].name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">{products[1].name}</h3>
                <p className="text-white/70 text-xs md:text-sm mb-4 leading-relaxed">{products[1].description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-heading text-2xl md:text-2xl font-black">{products[1].price}</span>
                  <ShoppingBag size={20} className="text-white/50 group-hover:text-accent transition-colors" />
                </div>
              </div>
            </div>

            {/* FULL WIDTH BENTO BOTTOM */}
            <div className="md:col-span-12 group relative overflow-hidden rounded-3xl min-h-[400px]">
              <SafeImage src={products[2].image_url} alt={products[2].name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent" />
              <div className="relative md:absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-2xl bg-gradient-to-t from-black/90 via-transparent md:bg-none">
                <p className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Gift The Taste</p>
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{products[2].name}</h3>
                <p className="text-white/60 text-base md:text-lg mb-8">{products[2].description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                  <span className="text-white font-heading text-3xl font-black">{products[2].price}</span>
                  <a href="#contact" className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-primary transition-all uppercase text-xs tracking-widest whitespace-nowrap">Enquire Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D-QUOTE DIVIDER */}
      <div className="py-24 px-8 text-center bg-accent/8 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,57,43,0.1),transparent_70%)]" />
        <p className="relative font-heading text-3xl md:text-6xl font-black text-secondary max-w-4xl mx-auto leading-tight italic">
          &ldquo;Crafting the ultimate food experience through heritage and quality. Lagos-certified excellence delivered directly to your door.&rdquo;
        </p>
        <p className="relative text-accent mt-8 text-xs tracking-[0.5em] uppercase font-bold">{brand.name}</p>
      </div>

      {/* GALLERY Section (Masonry V7 Blur Cascade) */}
      <section ref={revGallery.ref} className="py-28 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="font-heading text-5xl md:text-7xl font-black text-primary leading-none uppercase">The Texture <br /> Of Home</h2>
            <p className="text-primary/50 max-w-md text-lg leading-relaxed">High-contrast glimpses into our rustic kitchen and crunchy snack vault. Sharp delivery, nationwide.</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, i) => (
              <div key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`break-inside-avoid relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${revGallery.isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`}>
                <SafeImage src={src} alt={`Foodiehubs ${i}`} width={600} height={800} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT Section (V3 Horizontal Split + Stats) */}
      <section id="ourroots" ref={revAbout.ref} className="py-32 px-6 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 ${revAbout.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <SafeImage src="https://images.unsplash.com/photo-1771580824774-a1910891af35" alt="Our Roots" fill className="object-cover" />
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="border-l-2 border-accent pl-6">
                  <p className="font-heading text-5xl font-black text-white">{s.number}</p>
                  <p className="text-white/40 uppercase tracking-widest text-xs mt-2 font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${revAbout.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <p className="text-accent font-heading tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-8 leading-none">Crafted With <br /> Heart</h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
              <p>Foodiehubs started with a simple mission: to make premium, authentic Nigerian snacks accessible without losing the rustic charm of traditional preparation.</p>
              <p>Based in Command, Lagos, we believe snack time is more than just a quick bite—it&apos;s a journey back home. Every pack of Kilishi and every cube of Kuli Kuli we produce follows heritage recipes passed down through generations.</p>
              <p>We source only from artisans who share our commitment to perfection, ensuring that every bite delivers that authentic Northern Nigerian soul we all crave.</p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="p-4 bg-accent/10 rounded-full text-accent">
                <ChefHat size={32} />
              </div>
              <p className="text-white font-bold italic font-heading text-xl">&ldquo;Tradition is our main ingredient.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section (V4 Staggered) */}
      <section ref={revTest.ref} className="py-28 px-6 bg-[#f8f5f2] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="bg-accent text-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-6">Real reviews from our community</span>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-primary uppercase sr-only">Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i}
                style={{ transitionDelay: `${i * 200}ms` }}
                className={`bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-primary/5 transition-all duration-700 will-change-transform ${revTest.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex gap-1.5 mb-8">
                  {[1, 2, 3, 4, 5].map(n => <div key={n} className="w-1.5 h-1.5 rounded-full bg-accent" />)}
                </div>
                <div className="relative mb-12">
                  <span className="text-accent text-6xl font-serif absolute -top-8 -left-4 opacity-10 leading-none">&ldquo;</span>
                  <p className="relative z-10">
                    <span className="bg-accent text-white text-xl md:text-2xl leading-[1.6] font-bold italic py-1 px-2 box-decoration-clone inline transition-all">
                      {t.text}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-primary/5 pt-10">
                  <div className="w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center font-heading text-2xl font-black">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-xl tracking-tighter uppercase">{t.name}</p>
                    <p className="text-accent text-xs font-black tracking-[0.2em] uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT Section (C1 Two-column) */}
      <section id="contact" ref={revContact.ref} className="py-32 px-6 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start relative z-10">
          <div className={`transition-all duration-1000 ${revContact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase">Place Your <br /><span className="text-accent">Order</span></h2>
            <p className="text-white/50 text-xl leading-relaxed max-w-md mb-12">Craving the taste of home? Send us a message and we&apos;ll get your heritage snacks sorted.</p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-xl group-hover:bg-accent transition-colors">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">Instagram</p>
                  <p className="text-white text-xl font-bold">@foodiehubs.ng</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-xl group-hover:bg-accent transition-colors">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">Address</p>
                  <p className="text-white text-xl font-bold">{brand.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-xl group-hover:bg-accent transition-colors">
                  <Timer size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">Delivery</p>
                  <p className="text-white text-xl font-bold">Same-day within Lagos</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${revContact.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER Section */}
      <footer className="bg-[#1a0e06] py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-accent p-2 rounded-lg">
                  <UtensilsCrossed size={20} className="text-white" />
                </div>
                <span className="font-heading text-3xl font-bold text-white uppercase tracking-tighter">{brand.name}</span>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">Premium authentic Nigerian snacks. Bringing the heritage of Command, Lagos to your doorstep with every crunch.</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-white text-lg font-bold uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#thesnacks" className="hover:text-accent transition-colors">Our Snacks</a></li>
                <li><a href="#ourroots" className="hover:text-accent transition-colors">Our Roots</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Order Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-white text-lg font-bold uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li>Command, Lagos</li>
                <li>Instagram: @foodiehubs.ng</li>
                <li className="text-accent font-bold">Open: 9AM - 6PM</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs uppercase tracking-[0.2em]">© {new Date().getFullYear()} {brand.name}. All Rights Reserved.</p>
            <p className="text-white/20 text-xs uppercase tracking-[0.2em]">Designed for home-sick hearts.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center p-16 text-center animate-scaleIn bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
        <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-8 border border-accent/40 relative z-10 shadow-[0_0_50px_rgba(192,57,43,0.3)]">
          <CheckCheck size={40} className="text-accent" />
        </div>
        <h3 className="font-heading text-4xl font-black text-white mb-4 relative z-10 uppercase">Message Sent</h3>
        <p className="text-white/60 max-w-xs text-lg relative z-10">Thank you for reaching out. Our team will review your order inquiry shortly.</p>
        <button onClick={() => setSent(false)} className="mt-8 text-accent font-bold uppercase tracking-widest text-sm hover:text-white transition-colors relative z-10">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#1a0e06] p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none transition-all duration-500 group-focus-within:bg-accent/10" />
      <div className="relative z-10">
        <h3 className="font-heading text-3xl font-bold text-white mb-10 uppercase tracking-tight">Send An Inquiry</h3>
        <div className="space-y-4">
          <input
            type="text" placeholder="Full Name" value={form.name}
            onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email" placeholder="Email Address" value={form.email}
              onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
            />
            <input
              type="text" placeholder="Phone Number" value={form.phone}
              onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <textarea
            rows={4} placeholder="What snacks are you craving?"
            value={form.message}
            onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 text-sm outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <button type="submit" disabled={loading}
          className="w-full mt-10 bg-accent text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_30px_rgba(192,57,43,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-3">
          {loading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <>Send Order <ArrowRight size={20} /></>
          )}
        </button>
      </div>
    </form>
  );
}