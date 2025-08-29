'use client'

import { useState, useEffect } from 'react'

interface EnrollButtonProps {
  href?: string
  price?: string
  originalPrice?: string
  buttonText?: string
  className?: string
}

export default function EnrollButtonWow({ 
  href = "https://pages.razorpay.com/hts-fbspecial",
  price = "₹99",
  originalPrice = "₹999",
  buttonText = "Enroll Now",
  className = ""
}: EnrollButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="elementor-button-wrapper">
        <b><b>
          <a 
            className="relative inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-12 md:py-4 md:px-24 rounded-2xl text-sm md:text-base transition-all duration-300 overflow-hidden group"
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="elementor-button-content-wrapper relative z-10">
              <span className="elementor-button-text md:text-xl text-sm text-nowrap items">
                {buttonText} 
                
              </span>
            </span>
            
            {/* Shimmer Effect */}
            <div 
              className={`absolute inset-0 -top-2 -bottom-2 w-6 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 ${
                isHovered ? 'animate-shimmer' : ''
              }`}
              style={{
                left: '-100%',
                animation: isHovered ? 'shimmer 0.8s ease-out' : 'none'
              }}
            />
            
            {/* Continuous shimmer animation */}
            <div 
              className="absolute inset-0 -top-2 -bottom-2 w-6 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-continuous-shimmer"
              style={{
                animation: 'continuousShimmer 3s ease-in-out infinite'
              }}
            />
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
          </a>
        </b></b>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes continuousShimmer {
          0%, 100% {
            left: -100%;
            opacity: 0;
          }
          50% {
            left: 100%;
            opacity: 1;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 0.8s ease-out;
        }
        
        .animate-continuous-shimmer {
          animation: continuousShimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}