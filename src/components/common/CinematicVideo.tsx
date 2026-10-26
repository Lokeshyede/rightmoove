"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CinematicVideoProps {
  src: string;
  fallbackSrc?: string;
  poster: string;
  alt?: string;
  isHero?: boolean;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  showOverlay?: boolean;
  overlayOpacity?: string;
  priority?: boolean;
  blurGlow?: boolean;
  isFullScreen?: boolean;
}

export const CinematicVideo: React.FC<CinematicVideoProps> = ({
  src,
  fallbackSrc,
  poster,
  alt = "RIGHTMOVE Cinematic Showcase",
  isHero = false,
  className = "",
  containerClassName = "",
  aspectRatio = "aspect-video",
  objectFit = "cover",
  objectPosition = "center",
  showOverlay = true,
  overlayOpacity = "bg-black/30",
  priority = false,
  blurGlow = false,
  isFullScreen = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState<boolean>(isHero || priority);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  // Intersection Observer for viewport-aware loading & play/pause lifecycle
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (videoRef.current && videoRef.current.paused) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {});
              }
            }
          } else {
            // Offscreen: pause video to free up GPU & battery
            if (!isHero && videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: isHero ? "0px" : "350px 0px 350px 0px",
        threshold: 0.05
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [isHero]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setVideoError(true);
    }
  };

  const containerClasses = isFullScreen
    ? `absolute inset-0 w-full h-full overflow-hidden ${containerClassName}`
    : `relative overflow-hidden w-full ${aspectRatio} ${containerClassName}`;

  return (
    <div ref={containerRef} className={containerClasses}>
      {/* Glow highlight underneath if enabled */}
      {blurGlow && (
        <div className="ambient-glow -inset-10 opacity-30 z-0 pointer-events-none" />
      )}

      {/* Poster Fallback / Initial Loading state */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src={poster}
          alt={alt}
          fill
          priority={isHero || priority}
          sizes="100vw"
          className="w-full h-full"
          style={{ objectFit, objectPosition }}
        />
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12]/80 via-transparent to-transparent pointer-events-none" />
        )}
      </div>

      {/* Video Element */}
      {shouldLoad && !videoError && (
        <video
          ref={videoRef}
          src={currentSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={isHero ? "auto" : "metadata"}
          onLoadedData={handleVideoLoaded}
          onError={handleError}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          style={{ objectFit, objectPosition }}
        />
      )}

      {/* Minimal Gradient Overlay for Readability */}
      {showOverlay && (
        <div
          className={`absolute inset-0 z-10 pointer-events-none ${overlayOpacity}`}
        />
      )}
    </div>
  );
};
