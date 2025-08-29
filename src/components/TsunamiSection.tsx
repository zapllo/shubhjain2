'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'
import EnrollButton from './enroll'

function DecorativeIcon1() {
    return (
        <svg
            className="w-8 h-12 text-purple-400 opacity-50"
            viewBox="0 0 40 56"
            fill="none"
        >
            <g opacity="0.5">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z"
                    fill="url(#paint0_linear_icon1)"
                />
            </g>
            <defs>
                <linearGradient id="paint0_linear_icon1" x1="-10.26" y1="4.48" x2="12" y2="56">
                    <stop stopColor="#8957BD" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function DecorativeIcon2() {
    return (
        <svg
            className="w-12 h-20 text-orange-200 opacity-50"
            viewBox="0 0 52 90"
            fill="none"
        >
            <path
                d="M45.1143 90C43.6949 90 42.4952 88.9722 42.1515 87.5952C41.0558 83.2064 38.9585 78.5389 35.8594 73.5939C32.1875 67.6562 26.9531 62.1486 20.1563 57.0703C14.2447 52.6023 8.33315 49.5554 2.42162 47.93C1.02152 47.5452 0 46.3036 0 44.8516C0 43.428 0.982228 42.2008 2.35113 41.8099C8.14703 40.1551 13.7305 37.4684 19.1016 33.75C25.2734 29.4531 30.4297 24.2969 34.5703 18.2812C38.2333 12.9224 40.7478 7.62246 42.1138 2.38143C42.4717 1.00843 43.6804 0 45.0994 0C46.534 0 47.7513 1.03076 48.1005 2.42248C48.8889 5.56443 50.121 8.7804 51.7968 12.0703C53.9064 16.1328 56.6014 20.039 59.8828 23.7891C63.2421 27.4609 66.9924 30.7813 71.1329 33.75C76.5436 37.5854 82.044 40.28 87.6348 41.8338C89.0064 42.2149 90 43.436 90 44.8593C90 46.3041 88.9762 47.5353 87.583 47.9174C84.0393 48.8889 80.3916 50.4558 76.6408 52.6171C72.1094 55.2735 67.8906 58.4374 63.9841 62.1094C60.0781 65.7031 56.875 69.4921 54.3748 73.4764C51.2698 78.4319 49.1701 83.1353 48.0766 87.5875C47.7373 88.9686 46.5358 90 45.1143 90Z"
                fill="url(#paint0_linear_icon2)"
            />
            <defs>
                <linearGradient id="paint0_linear_icon2" x1="12.375" y1="8.55" x2="67.05" y2="78.525">
                    <stop stopColor="#FFD9A0" />
                    <stop offset="1" stopColor="#FFF5F1" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default function TsunamiSection() {
    return (
        <section className="w-full bg-[#F9F9F9] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Decorative Icons */}
            <div className="absolute top-8 md:left-8  block">
                <DecorativeIcon1 />
            </div>
            <div className="absolute top-16 right-0 md:right-8  block">
                <DecorativeIcon2 />
            </div>

            <div className="mx-auto max-w-[1200px] px-4">
                {/* Main Headline */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#13316b] leading-[1.2] mb-6">
                        Get A Tsunami of{' '}
                        <span className="md:inline-block  px-2 py-1 rounded">
                            <span className="">Coaching Sales</span>
                        </span>{' '}
                        Than What You <br /> Could Possibly Handle!{' '}
                        <span className="underline">(ON AUTOPILOT)</span>
                    </h2>

                    {/* Decorative Line */}
                    <div className="flex justify-center mb-8 sm:mb-12">
                        <Image
                            src="https://lp.launchatscale.com/wp-content/uploads/2024/05/line.svg"
                            alt=""
                            width={200}
                            height={16}
                            className="w-full max-w-[200px] h-auto"
                        />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
                    {/* Left Side - Image and What If Box */}
                    <div className="space-y-6">
                        {/* Zoom Screenshot */}
                        <div className="relative">
                            <Image
                                src="https://lp.launchatscale.com/wp-content/uploads/2024/05/WhatsApp-Image-2025-02-12-at-14.24.56-1024x605.jpeg"
                                alt="Zoom meeting screenshot"
                                width={1024}
                                height={605}
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                        {/* Story Text */}
                        <div className="text-[16px] sm:text-[18px] leading-relaxed text-[#5b6b89] space-y-4">
                            <p>
                                Before I created the Reverse Funnels System, I was tired of doing low attendance webinars & hour-long one-on-one sales calls.
                            </p>
                            <p>
                                I was stressed, exhausted and frustrated from repeating the same tiring process all over again.
                            </p>
                            <p>
                                And eventually, <strong className="text-[#13316b]">I ended up hating the business I built for freedom.</strong>
                            </p>
                            <p>
                                So I spent the next 4 years going through every possible big launch, super workshop, live masterclass, 5-day challenge, and 2-3 day immersions.
                            </p>
                            <p>
                                And, that&apos;s how <strong className="text-[#13316b]">Reverse Funnels</strong> was born.
                            </p>
                        </div>



                    </div>

                    {/* Right Side - Story Text and Before/After Image */}
                    <div className="space-y-6">
                        {/* What If Box */}
                        <div className="bg-gradient-to-r from-[#2E4BA7] to-[#0F265C] rounded-xl p-6">
                            <div className="text-[15px] sm:text-[17px] text-white">
                                <p className="font-bold italic mb-4">
                                    What if <span className="underline">YOU</span> could just…
                                </p>
                                <ul className="space-y-3 list-disc list-inside">
                                    <li>Gather a bunch of your ideal clients in ZOOM…</li>
                                    <li>Use The Reverse Selling System That Persuades Buyers…</li>
                                    <li>Then just simply invite them to YOUR offer?</li>
                                </ul>
                            </div>
                        </div>

                        {/* Before/After Comparison Image */}
                        <div className="relative transform mt-20 scale-105 sm:scale-110">
                            <Image
                                src="https://lp.launchatscale.com/wp-content/uploads/2025/02/Before-and-after1-1.webp"
                                alt="Before and after comparison"
                                width={1990}
                                height={2066}
                                className="w-full h-auto rounded-xl "
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-24 space-y-6">


                    <div className="text-center mt-12">
                        <div className="relative inline-block">
                            <EnrollButton

                                price="₹99"
                                originalPrice="₹999"
                                buttonText="ENROLL NOW"
                                className="inline-flex rounded-2xl -center justify-center "
                            />

                            {/* Seats chip */}
                            <div className="absolute -top-4 sm:-top-6 right- right-[4%] min-w-[100px] sm:min-w-[118px] rounded-full bg-[#0B1A3A] px-2 sm:px-3.5 py-1 md:py-1.5 mt-2 text-center text-[10px] sm:text-[11px] font-semibold text-white shadow">
                                10 Seats Left
                            </div>
                        </div>



                    </div>
                    {/* Progress bar */}
                    <div className="mt-6">
                        <div className="mx-auto grid gap-[2px] sm:gap-[3px] max-w-[300px] sm:max-w-none"
                            style={{ gridTemplateColumns: 'repeat(22,minmax(8px,18px))', width: 'fit-content' }}>
                            {Array.from({ length: 22 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={
                                        'h-[18px] sm:h-[24px] md:h-[28px] relative ' +
                                        (i < 20 ? 'bg-[#A8A8A8]' : 'bg-[#CF342A] animate-pulse')
                                    }
                                >
                                    {i >= 20 && (
                                        <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] sm:text-[14px] font-bold">
                                            ✔
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 flex items-center justify-center gap-2 text-[13px] font-bold text-[#454545]">
                            <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
                            <span>Hurry! 28 Seats Of This Event Left</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}