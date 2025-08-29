'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Client = {
    name: string
    title: string
    avatar: string
    followingImg: string
    followingText: string
}

const clients: Client[] = [
    {
        name: 'Jatan Shah',
        title: 'Microsoft Excel & Stock Market Coach',
        avatar:
            'https://lp.launchatscale.com/wp-content/uploads/2025/04/281248236_432195502067225_5218755859182455857_n.jpg',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following:  188K',
    },
    {
        name: 'Aarzoo Shah',
        title: "India's. #1 Life Coach",
        avatar:
            'https://lp.launchatscale.com/wp-content/uploads/2025/04/Arzoo-Shah_1.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following:  19.5K+',
    },
    {
        name: 'Karthik Naidu',
        title: 'SaaS Business Coach',
        avatar:
            'https://lp.launchatscale.com/wp-content/uploads/2025/04/Karthik-stage-min-scaled-1.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following:  22.2K+',
    },
    {
        name: 'Swastik Nandakumar',
        title: 'Performance coach and business growth expert',
        avatar:
            'https://lp.launchatscale.com/wp-content/uploads/2025/04/Swastik-Nand_1.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following: 44.7K+',
    },
    {
        name: 'Ankit Neerav',
        title: 'Law of Attraction Coach',
        avatar: 'https://lp.launchatscale.com/wp-content/uploads/2024/05/Ankit.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following:  24.3K+',
    },
    {
        name: 'Shankar Kulkarni',
        title: 'Financial Freedom & Confidence Coach',
        avatar:
            'https://lp.launchatscale.com/wp-content/uploads/2024/05/Shankar-1-1024x1024.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following:  9,111+',
    },
    {
        name: 'Viral Jain',
        title: 'Amazon Coach',
        avatar: 'https://lp.launchatscale.com/wp-content/uploads/2024/05/Viral.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following:  11.1K+',
    },
    {
        name: 'Dharaneetharan',
        title: 'Digital Marketing Coach',
        avatar:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/Dharaneetharan-1024x1024.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following: 268K+',
    },
    {
        name: 'Omkar Phadatare',
        title: 'Stock Market Coach',
        avatar: 'https://lp.launchatscale.com/wp-content/uploads/2025/06/Omkar.webp',
        followingImg:
            'https://lp.launchatscale.com/wp-content/uploads/2025/06/206467811_10900019-min-1024x1024.webp',
        followingText: 'Following: 26.6K+',
    },
]

function ClientCard({ client, isMobile }: { client: Client; isMobile: boolean }) {
    return (
        <article className={`${
            isMobile 
                ? 'min-w-[calc(100vw-32px)] max-w-[calc(100vw-32px)] mx-4' 
                : 'mx-2 min-w-[320px] max-w-[320px]'
        } flex-shrink-0 rounded-2xl border p-4 text-center bg-white shadow-sm`}>
            <div className="mx-auto aspect-square w-full max-w-[130px] overflow-hidden rounded-full">
                <Image
                    src={client.avatar}
                    alt={client.name}
                    width={512}
                    height={512}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className='flex mt-3 justify-center'>
                <div className='border px-2 py-1 shadow-sm rounded-full w-fit'>
                    <p className="text-[16px] font-medium text-[#0b1a3a]">{client.name}</p>
                </div>
            </div>
            <h3 className="mt-1 text-[14px] font-semibold text-[#273352]">{client.title}</h3>

            <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full">
                    <Image
                        src={client.followingImg}
                        alt=""
                        width={128}
                        height={128}
                        className="h-full w-full object-cover"
                    />
                </div>
                <span className="text-[14px] font-semibold text-[#0b1a3a]">
                    {client.followingText}
                </span>
            </div>
        </article>
    )
}

export default function ClientsSlider() {
    const [isHovered, setIsHovered] = useState(false)
    const [isReversed, setIsReversed] = useState(false)
    const [currentTranslate, setCurrentTranslate] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const mobileIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const touchStartRef = useRef<number>(0)
    const touchEndRef = useRef<number>(0)

    // Check if mobile on component mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Mobile auto-scroll logic
    useEffect(() => {
        if (isMobile && !isAutoScrollPaused) {
            if (mobileIntervalRef.current) {
                clearInterval(mobileIntervalRef.current)
            }
            
            mobileIntervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % clients.length)
            }, 4000) // Change card every 4 seconds on mobile

            return () => {
                if (mobileIntervalRef.current) {
                    clearInterval(mobileIntervalRef.current)
                }
            }
        }
    }, [isMobile, isAutoScrollPaused])

    // Desktop smooth scroll logic
    const getCardWidth = () => {
        return 320 // Fixed width for desktop
    }

    const getAnimationSpeed = () => {
        return isHovered ? 0.2 : 0.8 // Slow down on hover for desktop
    }

    const CARD_WIDTH = getCardWidth()
    const TOTAL_ORIGINAL_WIDTH = clients.length * CARD_WIDTH

    // Create multiple copies for infinite scroll (desktop only)
    const extendedClients = [...clients, ...clients, ...clients, ...clients]

    const startDesktopAnimation = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            const speed = getAnimationSpeed()
            setCurrentTranslate(prev => {
                const direction = isReversed ? speed : -speed
                let newTranslate = prev + direction

                // Reset position when we've scrolled through all original items
                if (newTranslate <= -TOTAL_ORIGINAL_WIDTH * 2) {
                    newTranslate = -TOTAL_ORIGINAL_WIDTH
                } else if (newTranslate >= 0) {
                    newTranslate = -TOTAL_ORIGINAL_WIDTH
                }

                return newTranslate
            })
        }, 16) // ~60fps
    }

    const stopDesktopAnimation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    // Desktop animation setup
    useEffect(() => {
        if (!isMobile) {
            setCurrentTranslate(-TOTAL_ORIGINAL_WIDTH)
            startDesktopAnimation()

            return () => stopDesktopAnimation()
        }
    }, [isHovered, isReversed, isMobile])

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsHovered(true)
        }
    }

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false)
        }
    }

    // Mobile navigation functions
    const goToPrevSlide = () => {
        if (isMobile) {
            setIsAutoScrollPaused(true)
            setCurrentIndex(prev => prev === 0 ? clients.length - 1 : prev - 1)
            
            // Resume auto-scroll after 5 seconds
            setTimeout(() => {
                setIsAutoScrollPaused(false)
            }, 5000)
        } else {
            setIsReversed(true)
            handleManualScroll('left')
        }
    }

    const goToNextSlide = () => {
        if (isMobile) {
            setIsAutoScrollPaused(true)
            setCurrentIndex(prev => (prev + 1) % clients.length)
            
            // Resume auto-scroll after 5 seconds
            setTimeout(() => {
                setIsAutoScrollPaused(false)
            }, 5000)
        } else {
            setIsReversed(false)
            handleManualScroll('right')
        }
    }

    const handleManualScroll = (direction: 'left' | 'right') => {
        stopDesktopAnimation()
        setCurrentTranslate(prev => {
            const scrollAmount = direction === 'left' ? CARD_WIDTH : -CARD_WIDTH
            let newTranslate = prev + scrollAmount

            // Handle boundary conditions
            if (newTranslate <= -TOTAL_ORIGINAL_WIDTH * 2) {
                newTranslate = -TOTAL_ORIGINAL_WIDTH
            } else if (newTranslate >= 0) {
                newTranslate = -TOTAL_ORIGINAL_WIDTH
            }

            return newTranslate
        })

        // Resume auto-scroll after a delay
        setTimeout(() => {
            startDesktopAnimation()
        }, 1000)
    }

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile) return
        touchStartRef.current = e.targetTouches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isMobile) return
        touchEndRef.current = e.targetTouches[0].clientX
    }

const handleTouchEnd = () => {
        if (!isMobile) return
        
        const touchDiff = touchStartRef.current - touchEndRef.current
        const minSwipeDistance = 50

        if (Math.abs(touchDiff) > minSwipeDistance) {
            if (touchDiff > 0) {
                // Swiped left, go to next slide
                goToNextSlide()
            } else {
                // Swiped right, go to previous slide
                goToPrevSlide()
            }
        }
    }

    return (
        <section className="w-full mt-12 pt-12">
            <div className="mx-auto md:max-w-[1240px] px-4">
                <h2 className="mb-4 text-center text-2xl md:text-4xl font-bold text-[#0F2C80]">
                    Some Of Our Clients...
                </h2>

                <div className="relative group">
                    {/* Left Arrow - Now visible on both mobile and desktop */}
                    <button
                        onClick={goToPrevSlide}
                        aria-label="Scroll left"
                        className={`absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200 ${
                            isMobile 
                                ? 'opacity-70 hover:opacity-100' 
                                : 'opacity-0 md:group-hover:opacity-100'
                        }`}
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>

                    {/* Right Arrow - Now visible on both mobile and desktop */}
                    <button
                        onClick={goToNextSlide}
                        aria-label="Scroll right"
                        className={`absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200 ${
                            isMobile 
                                ? 'opacity-70 hover:opacity-100' 
                                : 'opacity-0 md:group-hover:opacity-100'
                        }`}
                    >
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>

                    <div className="overflow-hidden">
                        {isMobile ? (
                            // Mobile: Show one card at a time with smooth transitions and touch support
                            <div 
                                className="relative"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div 
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentIndex * 100}%)`
                                    }}
                                >
                                    {clients.map((client, index) => (
                                        <div key={client.name} className="w-full flex-shrink-0">
                                            <ClientCard client={client} isMobile={true} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Desktop: Continuous smooth scroll
                            <div
                                ref={containerRef}
                                className="flex transition-none"
                                style={{
                                    transform: `translateX(${currentTranslate}px)`,
                                    width: `${extendedClients.length * CARD_WIDTH}px`
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {extendedClients.map((client, index) => (
                                    <ClientCard key={`${client.name}-${index}`} client={client} isMobile={false} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile pagination dots */}
                {isMobile && (
                    <div className="flex justify-center mt-6 gap-2">
                        {clients.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoScrollPaused(true)
                                    setCurrentIndex(index)
                                    setTimeout(() => {
                                        setIsAutoScrollPaused(false)
                                    }, 5000)
                                }}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                    index === currentIndex ? 'bg-[#0F2C80]' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}