'use client'

import Image from 'next/image'
import { Calendar, Sun } from 'lucide-react'
import EnrollButton from './enroll'

function SunIcon() {
    return (
        <svg
            className="w-4 h-4 text-[#0F2C80]"
            viewBox="0 0 16 16"
            fill="currentColor"
        >
            <path d="M7.99911 13.3555C7.69758 13.3555 7.45312 13.5999 7.45312 13.9015V15.4538C7.45312 15.7553 7.69758 15.9998 7.99911 15.9998C8.30071 15.9998 8.5451 15.7553 8.5451 15.4538V13.9015C8.5451 13.5999 8.30064 13.3555 7.99911 13.3555Z" />
            <path d="M7.99911 2.64446C8.30071 2.64446 8.5451 2.40001 8.5451 2.09848V0.545986C8.5451 0.244456 8.30071 0 7.99911 0C7.69758 0 7.45312 0.244456 7.45312 0.545986V2.09848C7.45312 2.40001 7.69758 2.64446 7.99911 2.64446Z" />
            <path d="M3.4411 11.7862L2.34301 12.8838C2.12971 13.0969 2.12964 13.4426 2.34279 13.6558C2.44944 13.7625 2.58921 13.8159 2.72899 13.8159C2.86869 13.8159 3.00831 13.7626 3.11496 13.6561L4.21305 12.5586C4.42635 12.3454 4.42642 11.9997 4.21327 11.7865C3.99997 11.5732 3.65432 11.5732 3.4411 11.7862Z" />
            <path d="M12.1724 4.37265C12.3121 4.37265 12.4518 4.31937 12.5585 4.21279L13.6564 3.11528C13.8696 2.90206 13.8697 2.55641 13.6565 2.34312C13.4433 2.12982 13.0977 2.12974 12.8844 2.34304L11.7864 3.44055C11.5732 3.6537 11.5731 3.99942 11.7863 4.21264C11.8929 4.31937 12.0326 4.37265 12.1724 4.37265Z" />
            <path d="M2.64432 8.00009C2.64432 7.69856 2.39986 7.4541 2.09833 7.4541H0.545986C0.244456 7.4541 0 7.69856 0 8.00009C0 8.30162 0.244456 8.54607 0.545986 8.54607H2.09833C2.39986 8.54607 2.64432 8.30162 2.64432 8.00009Z" />
            <path d="M15.454 7.4541H13.901C13.5994 7.4541 13.355 7.69856 13.355 8.00009C13.355 8.30162 13.5994 8.54607 13.901 8.54607H15.454C15.7556 8.54607 16 8.30162 16 8.00009C16 7.69863 15.7556 7.4541 15.454 7.4541Z" />
            <path d="M3.44089 4.2127C3.54747 4.31927 3.68724 4.37256 3.82694 4.37256C3.96664 4.37256 4.10641 4.31927 4.21299 4.2127C4.42622 3.99947 4.42622 3.65375 4.21299 3.44053L3.11549 2.34302C2.90226 2.1298 2.55654 2.1298 2.34339 2.34302C2.13017 2.55625 2.13017 2.90197 2.34339 3.11512L3.44089 4.2127Z" />
            <path d="M12.5591 11.7864C12.3459 11.5732 12.0002 11.5731 11.7869 11.7863C11.5736 11.9996 11.5736 12.3453 11.7869 12.5584L12.8842 13.6559C12.9909 13.7626 13.1306 13.8159 13.2703 13.8159C13.41 13.8159 13.5498 13.7626 13.6564 13.656C13.8697 13.4428 13.8697 13.0971 13.6565 12.8839L12.5591 11.7864Z" />
            <path d="M7.99969 3.75C5.65653 3.75 3.75024 5.65644 3.75024 7.99973C3.75024 10.343 5.65653 12.2493 7.99969 12.2493C10.3431 12.2493 12.2495 10.343 12.2495 7.99973C12.2495 5.65644 10.343 3.75 7.99969 3.75ZM7.99969 11.1574C6.25865 11.1574 4.84222 9.74085 4.84222 7.99973C4.84222 6.25855 6.25865 4.84197 7.99969 4.84197C9.74094 4.84197 11.1575 6.25855 11.1575 7.99973C11.1575 9.74085 9.74094 11.1574 7.99969 11.1574Z" />
        </svg>
    )
}

function CheckIcon() {
    return (
        <svg
            className="w-[30px] h-[30px] flex-shrink-0"
            viewBox="0 0 30 30"
            fill="none"
        >
            <rect width="30" height="30" rx="15" fill="#2C82C9" />
            <path
                d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375Z"
                fill="#E0F1FF"
                fillOpacity="0.83"
            />
        </svg>
    )
}

interface DayCardProps {
    day: string
    title: string
    image: string
    items: string[]
    dayNum: string
}

function DayCard({ day, title, image, items, dayNum }: DayCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-">
            {/* Image Section */}
            <div className="relative">
                <Image
                    src={image}
                    alt={`Day ${dayNum}`}
                    width={1024}
                    height={614}
                    className="w-full h-auto rounded-lg aspect-[5/3] object-cover"
                />
                <div className="absolute z-[100] -top-8 left-4 bg-yellow-100/90 backdrop-blur-sm  rounded-full p-3 flex items-center gap-2">
                    <SunIcon />
                    <span className="text-[#0F2C80] font-bold text-[14px] sm:text-[16px]">
                        {day}
                    </span>
                </div>
                {/* Glass Effect Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <h3 className="text-white text-[24px] sm:text-[28px] font-bold">
                        {title}
                    </h3>
                </div>

                {/* Day Badge */}

            </div>

            {/* Content Section */}
            <div className="p-6">
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckIcon />
                            <span
                                className="text-[14px] sm:text-[16px] leading-relaxed text-gray-700"
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const agendaData = [
    {
        day: "DAY 01",
        dayNum: "1",
        title: "Build",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/day1_1-min-1-1024x614.webp",
        items: [
            "EXACT 4-Step High-Ticket Offer Creation Formula that only TOP 1% coaches know.",
            "An ancient offer creation \"law\" that 99.8% people MISS out, which stops them to make more sales.",
            "An old-school offer strategy that crushes Cold Audience and makes it almost neurologically impossible for people to not consider buying your offer.",
            "Once you know this - creating million dollar offers & campaigns will be cake-walk!",
            "And so much more..."
        ]
    },
    {
        day: "DAY 02",
        dayNum: "2",
        title: "Sell - 10 Payday Custom Roadmap",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/Day2-min-1-1024x614.webp",
        items: [
            "Your \"Reverse-math\" to your NEXT 10 lakh payday.",
            "<b>7-Figure Launch Checklist</b> used behind every BIG launch.",
            "How to get your dream <b>high-ticket clients</b> lining up to work with you before you even pitch them.",
            "Battle-tested <b>5 Hour Engine</b> that makes you the most money and sales in a shorter duration.",
            "The TOP SECRET *** technique to CRUSH your launch the very first time."
        ]
    },
    {
        day: "DAY 03",
        dayNum: "3",
        title: "Scale Big",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/day3-min-1024x614.webp",
        items: [
            "My 40 crores \"Signature-Talk\" Framework.",
            "This #1 thing that absolutely EXTREME FEW PEOPLE do, but pulls in 60% more sales.",
            "How do I create presentations that are guaranteed to CRUSH.",
            "How to persuade the whole crowd without selling or talking about your product.",
            "The #1 strategy you can use to make any offer SELL AT ANY PRICE.",
            "How to SCALE the presentation easily."
        ]
    }
]

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

export default function AgendaSection() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Decorative Icons */}
            <div className="absolute top-8 md:left-8  lg:block">
                <DecorativeIcon1 />
            </div>
            <div className="absolute top-16 right-0 md:right-8 idden block">
                <DecorativeIcon2 />
            </div>

            <div className="mx-auto max-w-[1200px] px-4">
                {/* Main Headline */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#13316b] leading-[1.2] mb-6">
                        Results Driven Agenda For{' '}
                        <span className="inline-block bg-[#FFFECD] text-[#13316b] px-2 py-1 rounded">
                            <span className="text-[#13316b] ">3-Day High-Ticket</span>
                        </span>{' '}<br />
                        Sprint
                    </h2>

                    {/* Decorative Line */}
                    <div className="flex justify-center">
                        <Image
                            src="https://lp.launchatscale.com/wp-content/uploads/2024/05/line.svg"
                            alt=""
                            width={200}
                            height={16}
                            className="w-full max-w-[200px] h-auto"
                        />
                    </div>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 space-y-12 mb-12 sm:mb-16">
                    {agendaData.map((dayData, index) => (
                        <DayCard key={index} {...dayData} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 md:mt-24 space-y-6">


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