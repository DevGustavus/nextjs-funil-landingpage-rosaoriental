"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function OfferTimer() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    // 20 minutes in milliseconds
    const DURATION = 20 * 60 * 1000;
    
    // Check if there is an existing end time in localStorage
    const savedEndTime = localStorage.getItem("offerEndTime");
    
    let endTime: number;
    
    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
      // If timer expired, we reset it
      if (Date.now() > endTime) {
        endTime = Date.now() + DURATION;
        localStorage.setItem("offerEndTime", endTime.toString());
      }
    } else {
      endTime = Date.now() + DURATION;
      localStorage.setItem("offerEndTime", endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      setTimeLeft(remaining);
    };

    updateTimer(); // Initial call
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Avoid hydration mismatch by not rendering anything until client side calculates time
  if (timeLeft === null) return null;

  const minutes = Math.floor(timeLeft / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#C97A8F] text-white py-3 px-2 md:px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex flex-wrap md:flex-nowrap justify-center items-center gap-2 md:gap-6">
      <div className="flex items-center gap-1 md:gap-2">
        <svg className="w-5 h-5 animate-pulse flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span className="font-medium text-xs md:text-base leading-tight">
          Oferta exclusiva expira em:
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="font-mono font-bold text-sm md:text-xl tracking-widest bg-white/20 px-2 py-1 rounded-lg">
          {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </div>
        <Link href="/produtos" className="bg-white text-[#C97A8F] font-bold text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
          Ver Ofertas
        </Link>
      </div>
    </div>
  );
}
