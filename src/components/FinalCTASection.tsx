'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'
import EnrollButton from './enroll'
import { Caveat, Shadows_Into_Light } from 'next/font/google'

const shadowsIntoLight = Caveat({
    weight: '400',
    subsets: ['latin']
})


function CalendarIcon() {
    return (
        <svg
            className="w-4 h-4 text-[#454545]"
            viewBox="0 0 16 16"
            fill="currentColor"
        >
            <g clipPath="url(#clip0_2039_30)">
                <path d="M14.75 10.375V3.75C14.75 3.06079 14.1892 2.5 13.5 2.5H12.6875V3.125C12.6875 3.47021 12.4077 3.75 12.0625 3.75C11.7173 3.75 11.4375 3.47021 11.4375 3.125V2.5H8.59375V3.125C8.59375 3.47021 8.31396 3.75 7.96875 3.75C7.62354 3.75 7.34375 3.47021 7.34375 3.125V2.5H4.53125V3.125C4.53125 3.47021 4.25146 3.75 3.90625 3.75C3.56104 3.75 3.28125 3.47021 3.28125 3.125V2.5H2.5C1.81079 2.5 1.25 3.06079 1.25 3.75V13.5C1.25 14.1892 1.81079 14.75 2.5 14.75H13.5C14.1892 14.75 14.75 14.1892 14.75 13.5C14.75 13.1548 15.0298 12.875 15.375 12.875C15.7202 12.875 16 13.1548 16 13.5C16 14.8785 14.8785 16 13.5 16H2.5C1.12146 16 0 14.8785 0 13.5V3.75C0 2.37146 1.12146 1.25 2.5 1.25H3.28125V0.625C3.28125 0.279785 3.56104 0 3.90625 0C4.25146 0 4.53125 0.279785 4.53125 0.625V1.25H7.34375V0.625C7.34375 0.279785 7.62354 0 7.96875 0C8.31396 0 8.59375 0.279785 8.59375 0.625V1.25H11.4375V0.625C11.4375 0.279785 11.7173 0 12.0625 0C12.4077 0 12.6875 0.279785 12.6875 0.625V1.25H13.5C14.8785 1.25 16 2.37146 16 3.75V10.375C16 10.7202 15.7202 11 15.375 11C15.0298 11 14.75 10.7202 14.75 10.375ZM8.59375 6.28125C8.59375 5.93604 8.31396 5.65625 7.96875 5.65625C7.62354 5.65625 7.34375 5.93604 7.34375 6.28125V10.3125C7.34375 10.6577 7.62354 10.9375 7.96875 10.9375C8.31396 10.9375 8.59375 10.6577 8.59375 10.3125V6.28125ZM7.96875 11.875C7.62354 11.875 7.34375 12.1548 7.34375 12.5C7.34375 12.8452 7.62354 13.125 7.96875 13.125C8.31396 13.125 8.59375 12.8452 8.59375 12.5C8.59375 12.1548 8.31396 11.875 7.96875 11.875Z" />
            </g>
        </svg>
    )
}

function DecorativeIcon1() {
    return (
        <svg
            className="w-10 h-14 opacity-50"
            viewBox="0 0 40 56"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z"
                fill="url(#paint0_linear_dec1)"
            />
            <defs>
                <linearGradient id="paint0_linear_dec1" x1="-10.26" y1="4.48" x2="12" y2="56">
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
            className="w-13 h-22 opacity-50"
            viewBox="0 0 52 90"
            fill="none"
        >
            <path
                d="M45.1143 90C43.6949 90 42.4952 88.9722 42.1515 87.5952C41.0558 83.2064 38.9585 78.5389 35.8594 73.5939C32.1875 67.6562 26.9531 62.1486 20.1563 57.0703C14.2447 52.6023 8.33315 49.5554 2.42162 47.93C1.02152 47.5452 0 46.3036 0 44.8516C0 43.428 0.982228 42.2008 2.35113 41.8099C8.14703 40.1551 13.7305 37.4684 19.1016 33.75C25.2734 29.4531 30.4297 24.2969 34.5703 18.2812C38.2333 12.9224 40.7478 7.62246 42.1138 2.38143C42.4717 1.00843 43.6804 0 45.0994 0C46.534 0 47.7513 1.03076 48.1005 2.42248C48.8889 5.56443 50.121 8.7804 51.7968 12.0703C53.9064 16.1328 56.6014 20.039 59.8828 23.7891C63.2421 27.4609 66.9924 30.7813 71.1329 33.75C76.5436 37.5854 82.044 40.28 87.6348 41.8338C89.0064 42.2149 90 43.436 90 44.8593C90 46.3041 88.9762 47.5353 87.583 47.9174C84.0393 48.8889 80.3916 50.4558 76.6408 52.6171C72.1094 55.2735 67.8906 58.4374 63.9841 62.1094C60.0781 65.7031 56.875 69.4921 54.3748 73.4764C51.2698 78.4319 49.1701 83.1353 48.0766 87.5875C47.7373 88.9686 46.5358 90 45.1143 90Z"
                fill="url(#paint0_linear_dec2)"
            />
            <defs>
                <linearGradient id="paint0_linear_dec2" x1="12.375" y1="8.55" x2="67.05" y2="78.525">
                    <stop stopColor="#FFD9A0" />
                    <stop offset="1" stopColor="#FFF5F1" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function DecorativeIcon3() {
    return (
        <svg
            className="w-14 h-8 opacity-50"
            viewBox="0 0 54 34"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M71.6616 32.405C71.8578 34.3836 70.227 36 68.2387 36H55.1887C53.2004 36 51.6312 34.3667 51.1823 32.4299C49.5652 25.4513 43.3094 20.25 35.8388 20.25C28.3683 20.25 22.1125 25.4513 20.4952 32.4299C20.0463 34.3667 18.477 36 16.4888 36H3.43878C1.45056 36 -0.180128 34.3836 0.0160323 32.405C1.81991 14.2107 17.1698 0 35.8388 0C54.5076 0 69.8576 14.2107 71.6616 32.405Z"
                fill="url(#paint0_linear_dec3)"
            />
            <defs>
                <linearGradient id="paint0_linear_dec3" x1="56.4462" y1="5.76" x2="40.2271" y2="38.6215">
                    <stop offset="0.0509862" stopColor="#D0BCE5" />
                    <stop offset="1" stopColor="#E7DDF2" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default function FinalCTASection() {
    return (
        <section className="w-full bg-white py-2 relative overflow-hidden">
            {/* Decorative Icons */}
            <div className="absolute top-8 md:left-8  ">
                <DecorativeIcon1 />
            </div>
            <div className="absolute top-16 right-8 ">
                <DecorativeIcon2 />
            </div>
            <div className="absolute bottom-8 right-16 ">
                <DecorativeIcon3 />
            </div>

            <div className="mx-auto max-w-[1200px] px-4">
                {/* Main Headline */}
                <div className="text-center mt-12 mb-8">
                    <h2 className={`text-[28px] md:text-[40px] font-bold text-center text-[#0B2C67] mb-8 ${shadowsIntoLight.className}`} style={{
                        fontWeight: '600',
                        lineHeight: '1.3em',
                        letterSpacing: '.8px',
                        color: '#0B2C67'
                    }}>
                        YES! Save My Spot For The &apos;High Ticket Sprint!!&apos;
                    </h2>

                    {/* Decorative Line */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="https://lp.launchatscale.com/wp-content/uploads/2024/05/line.svg"
                            alt=""
                            width={200}
                            height={16}
                            className="w-full max-w-[200px] h-auto"
                        />
                    </div>

                    {/* Bonus Banner Image */}
                    <div className="mb-8">
                        <Image
                            src="https://lp.launchatscale.com/wp-content/uploads/2025/05/bonus-1-1024x257.webp"
                            alt="Special Bonus"
                            width={1024}
                            height={257}
                            className="w-full max-w-[800px] mx-auto h-auto rounded-lg "
                        />
                    </div>

                    {/* Pricing */}
                    <div className="mb-2">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[40px] font-bold text-[#000000]">
                            <span className="font-bold">Price Today:</span>{' '}
                            <span className="text-[#b6b5b1] line-through">₹1499</span>{' '}
                            <span className="text-[#b6b5b1] line-through">₹999</span>{' '}
                            <span className="text-[#01B236] font-bold text-[40px]">₹99/-</span>
                        </h3>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 space-y-6">


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
                             <span>Seats Of This Event As Of {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }).replace(/(\d+)/, '$1th')} Is Low</span>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}