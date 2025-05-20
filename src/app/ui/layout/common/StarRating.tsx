"use client";
import { useState, useMemo } from "react";

type StarRatingProps = {
  maxRating?: number;
  average?: number;
  color?: string;
  size?: number;
  onRate?: (rating: number) => void;
};

export default function StarRating({
  maxRating = 5,
  average = 0,
  color = "#facc15", // amber-400
  size = 24,
  onRate,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const displayRating = useMemo(() => {
    if (hovered !== null) return hovered;
    if (selected !== null) return selected;
    return average;
  }, [hovered, selected, average]);

  return (
    <div className="flex space-x-1 items-center">
      {Array.from({ length: maxRating }).map((_, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => {
            setSelected(i + 1);
            if (onRate) onRate(i + 1);
          }}
          style={{
            cursor: "pointer",
            width: size,
            height: size,
            display: "inline-block",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={i + 1 <= Math.floor(displayRating) ? color : "none"}
            viewBox="0 0 24 24"
            stroke={color}
            strokeWidth={1.5}
            className="w-full h-full"
            style={{
              fill:
                i + 1 <= Math.floor(displayRating)
                  ? color
                  : i + 1 - displayRating < 1 && i + 1 - displayRating > 0
                  ? `url(#half${i})`
                  : "none",
            }}
          >
            <defs>
              <linearGradient id={`half${i}`} x1="0" x2="100%" y1="0" y2="0">
                <stop
                  offset={`${(displayRating % 1) * 100}%`}
                  stopColor={color}
                />
                <stop
                  offset={`${(displayRating % 1) * 100}%`}
                  stopColor="#e5e7eb"
                />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.75.75 0 011.04 0l2.772 2.797 3.772.5a.75.75 0 01.416 1.279l-2.73 2.824.645 3.897a.75.75 0 01-1.09.79L12 14.347l-3.303 1.239a.75.75 0 01-1.09-.79l.645-3.897-2.73-2.824a.75.75 0 01.416-1.28l3.772-.5 2.772-2.796z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
