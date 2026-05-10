"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import gardenSalad from "../../images/fresh-garden-salad-with-colorful-vegetables.jpg";
import mushroomRisotto from "../../images/creamy-mushroom-risotto.jpg";
import quinoaBowl from "../../images/colorful-quinoa-power-bowl (1).jpg";
import veggieBurger from "../../images/gourmet-veggie-burger.jpg";
import mediterraneanWrap from "../../images/mediterranean-wrap.png";
import seasonalSoup from "../../images/colorful-seasonal-soup.jpg";
import Firefly_GeminiFlash from "../../images/hero-food.png";

export default function LandingPage() {
  const [hoveredId, setHoveredId] = useState(null);

  const dishes = [
    { id: 1, title: "Garden Fresh Salad", image: gardenSalad },
    { id: 2, title: "Mushroom Risotto", image: mushroomRisotto },
    { id: 3, title: "Quinoa Bowl", image: quinoaBowl },
    { id: 4, title: "Veggie Burger", image: veggieBurger },
    { id: 5, title: "Mediterranean Wrap", image: mediterraneanWrap },
    { id: 6, title: "Seasonal Soup", image: seasonalSoup },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 🔥 HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={Firefly_GeminiFlash}
          alt="Satvik Restaurant Dining"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Taste the <span className="text-cyan-400">Luxury</span>
            <br />
            of Pure Vegetarian Dining
          </motion.h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            Crafted with passion. Served with elegance. Experience food that
            nourishes both body and soul.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/menu">
              <button className="bg-gradient-to-r from-cyan-500 to-lime-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
                Explore Menu
              </button>
            </Link>

            <Link to="/book-table">
              <button className="border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white/20 transition duration-300">
                Book Table
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      </section>
      {/* 🔥 DISH SECTION */}
      <section className="-mt-24 pt-32 px-6 bg-gradient-to-b from-black to-gray-900 relative z-20">
        {/* Optional blur transition */}
        <div className="absolute top-0 left-0 w-full h-16 backdrop-blur-sm bg-black/30" />

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Trending Dishes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(dish.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                {/* Glass Content */}
                <div className="absolute bottom-0 w-full p-4 backdrop-blur-lg bg-white/10 border-t border-white/20">
                  <h3 className="text-lg font-semibold">{dish.title}</h3>
                  <p className="text-sm text-gray-300">
                    Premium vegetarian delight
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
