"use client";

import { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increment view count
    const incrementView = async () => {
      try {
        const response = await fetch("/api/views", {
          method: "POST",
        });
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error("Failed to increment view:", error);
        // Fallback to localStorage for demo
        const localViews = parseInt(localStorage.getItem("portfolio-views") || "0") + 1;
        localStorage.setItem("portfolio-views", localViews.toString());
        setViews(localViews);
      } finally {
        setLoading(false);
      }
    };

    incrementView();
  }, []);

  if (loading) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-gray-700/30 text-xs text-gray-400">
        <BiShow className="w-4 h-4 animate-pulse" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-gray-700/30 text-xs text-gray-300">
      <BiShow className="w-4 h-4 text-sky-400" />
      <span>
        <span className="font-semibold text-white">{views?.toLocaleString()}</span> views
      </span>
    </div>
  );
}
