'use client'

import { useState, useEffect } from 'react'

interface EnrollButtonProps {
  className?: string
  showSeatsChip?: boolean
}

interface ContentData {
  price: string
  originalPrice: string
  enrollLink: string
}

export default function EnrollButton({ 
  className = "",
  showSeatsChip = true
}: EnrollButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(30)
  const [content, setContent] = useState<ContentData>({
    price: '₹99',
    originalPrice: '₹999',
    enrollLink: 'https://pages.razorpay.com/hts-fbspecial'
  })

  useEffect(() => {
    // Fetch dynamic content
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content')
        if (response.ok) {
          const data = await response.json()
          setContent({
            price: data.price || '₹99',
            originalPrice: data.originalPrice || '₹999',
            enrollLink: data.enrollLink || 'https://pages.razorpay.com/hts-fbspecial'
          })
        }
      } catch (error) {
        console.error('Error fetching content:', error)
      }
    }

    fetchContent()
  }, [])

  useEffect(() => {
    // Get the page load time or use current time
    const pageLoadTime = sessionStorage.getItem('pageLoadTime')
    const startTime = pageLoadTime ? parseInt(pageLoadTime) : Date.now()
    
    if (!pageLoadTime) {
      sessionStorage.setItem('pageLoadTime', startTime.toString())
    }

    const updateSeats = () => {
      const now = Date.now()
      const elapsed = now - startTime
      
      // 30 minute cycle (1800000 ms)
      const cycleTime = 30 * 60 * 1000
      const cyclePosition = elapsed % cycleTime
      
      // Deduct seats every 15 minutes within the 30-minute cycle
      const fifteenMinutes = 15 * 60 * 1000
      
      if (cyclePosition < fifteenMinutes) {
        // First 15 minutes: 30 seats going down to 10
        const minutesElapsed = Math.floor(cyclePosition / (60 * 1000))
        // Deduct 1 seat every 0.75 minutes (45 seconds) to go from 30 to 10 in 15 minutes
        const seatsDeducted = Math.floor(minutesElapsed / 0.75)
        setSeatsLeft(Math.max(10, 30 - seatsDeducted))
      } else {
        // Next 15 minutes: stay at 10 seats, then reset to 30
        setSeatsLeft(10)
      }
    }

    updateSeats()
    const interval = setInterval(updateSeats, 45000) // Update every 45 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="elementor-button-wrapper relative">
        {showSeatsChip && (
          <div className="absolute -top-4 sm:-top-6 right-[4%] mt-2 min-w-[100px] sm:min-w-[118px] rounded-full bg-[#0B1A3A] px-2 sm:px-3.5 py-1 sm:py-1.5 text-center text-[10px] sm:text-[11px] font-semibold text-white shadow z-10">
            {seatsLeft} Seats Left
          </div>
        )}
        
        <b><b>
          <a 
            className="relative inline-block bg-[#E2181B] text-white font-bold py-4 px-12 md:py-4 md:px-12 rounded-[20px] text-sm md:text-base transition-all duration-300 overflow-hidden group"
            href={content.enrollLink}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="elementor-button-content-wrapper relative z-10">
              <span className="elementor-button-text md:text-2xl text-xl items">
                ENROLL NOW @ {content.price}{' '}
                <strike className="text-red-200 opacity-80">
                  {content.originalPrice}
                </strike>
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