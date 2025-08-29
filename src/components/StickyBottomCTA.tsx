'use client'

import { useEffect, useState } from 'react'
import EnrollButton, { LetsTalk } from './enroll'
import { Calendar } from 'lucide-react'
import EnrollButtonWow from './enrollsticky'

interface ContentData {
  price: string
  originalPrice: string
  enrollLink: string
  eventDeadline: string
}

export default function StickyBottomCTA() {
    const [currentDate, setCurrentDate] = useState('')
    const [seatsLeft, setSeatsLeft] = useState(10)
    const [content, setContent] = useState<ContentData>({
        price: '₹99',
        originalPrice: '₹999',
        enrollLink: 'https://pages.razorpay.com/hts-fbspecial',
        eventDeadline: ''
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
                        enrollLink: data.enrollLink || 'https://pages.razorpay.com/hts-fbspecial',
                        eventDeadline: data.eventDeadline || ''
                    })
                    
                    // Set deadline date from API or fallback to current date
                    if (data.eventDeadline) {
                        const deadlineDate = new Date(data.eventDeadline)
                        const options: Intl.DateTimeFormatOptions = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                        setCurrentDate(deadlineDate.toLocaleDateString('en-US', options))
                    } else {
                        // Fallback to current date if no deadline is set
                        const now = new Date()
                        const options: Intl.DateTimeFormatOptions = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                        setCurrentDate(now.toLocaleDateString('en-US', options))
                    }
                }
            } catch (error) {
                console.error('Error fetching content:', error)
                // Fallback to current date on error
                const now = new Date()
                const options: Intl.DateTimeFormatOptions = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }
                setCurrentDate(now.toLocaleDateString('en-US', options))
            }
        }

        fetchContent()

        // Optional: Add countdown animation for seats
        const interval = setInterval(() => {
            setSeatsLeft(prev => prev > 1 ? prev - 1 : 10) // Reset to 10 when it reaches 1
        }, 30000) // Change every 30 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="fixed bottom-0 left-0 w-full z-[5555] bg-white shadow-[0_0_30px_2px_rgba(0,0,0,0.5)]"
            style={{
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '0px',
                paddingRight: '0px'
            }}
        >
            <div className="max-w-[1140px] mx-auto">
                <div className="flex flex-row items-center justify-between gap-0 px-4 md:px-6">
                    <div>
                        {/* Left Side - Pricing */}
                        <div className="flex-shrink-0">
                            <h3 className="text-[#272727] text-[18px] md:text-[26px] font-bold leading-tight mb-0">
                                <b><b>
                                    <span className="text-[#008000] scale-125 -600">{content.price}</span>{' '}
                                    <strike className="text-red-600 text-[16px] md:text-[22px]">
                                        <span>{content.originalPrice}</span>
                                    </strike>
                                </b></b>
                            </h3>
                        </div>

                        {/* Center - Deadline */}
                        <div className="flex-shrink-0 text-start md:text-center ">
                            <h3 className="text-[#272727] text-[14px] md:text-[20px] font-bold mt-2 leading-tight mb-0">
                                <b><b>
                                    Deadline {' '}
                                    <span id="current-date">{currentDate}</span>
                                </b></b>
                            </h3>
                        </div>
                    </div>
                    {/* Right Side - CTA Button and Bonus Text */}
                    <div className="flex-grow flex flex-col md:flex-row items-center md:items-end justify-end gap-2 md:gap-2 relative">

                        {/* CTA Section */}
                        <div className="text-center ">


                            <div className="text-center ">
                                <div className="relative inline-block">
                                    <EnrollButtonWow

                                      
                                        buttonText="ENROLL NOW"
                                        className="inline-flex text-sm rounded-2xl -center justify-center "
                                    />

                                    {/* Seats chip */}
                                    <div className="absolute md:-top-4 -top-5 right- right-[4%] mt-2 min-w-[100px] sm:min-w-[118px] rounded-full bg-[#0B1A3A] px-2 sm:px-3.5 py-1 sm:py-1.5 text-center text-[10px] sm:text-[11px] font-semibold text-white shadow">
                                        10 Seats Left
                                    </div>
                                </div>



                            </div>
                            {/* Progress Bar */}
                            <div className="">

                                <div className=" flex items-center justify-center gap-2 text-[12px] font-bold md:text-[16px] text-[#2a2a2a]">
                                    <h1>+ Unbelievable Bonuses</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add the hover animation keyframes */}
            <style jsx>{`
                @keyframes hoverbtn {
                    from {
                        left: 120%;
                        transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                    to {
                        left: 0%;
                        transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                    }
                }
            `}</style>
        </div>
    )
}