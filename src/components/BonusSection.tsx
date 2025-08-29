'use client'

import Image from 'next/image'
import { Gift } from 'lucide-react'

function GiftIcon() {
    return (
        <svg 
            className="w-3 h-3 text-[#0F2C80]" 
            viewBox="0 0 12 12" 
            fill="currentColor"
        >
            <path d="M10.5879 4.23635H8.27869C8.39991 4.0282 8.46973 3.78659 8.46973 3.52882C8.46973 2.75098 7.83691 2.11816 7.05907 2.11816C6.63745 2.11816 6.2587 2.30433 5.99998 2.59852C5.74125 2.30433 5.36252 2.11816 4.94088 2.11816C4.16304 2.11816 3.53023 2.75098 3.53023 3.52882C3.53023 3.78656 3.60005 4.02818 3.72127 4.23635H1.41211V6.35159H2.11816V12H9.88184V6.35159H10.5879V4.23635ZM7.05909 2.82131C7.44923 2.82131 7.76663 3.1387 7.76663 3.52884C7.76663 3.91898 7.44923 4.23638 7.05909 4.23638H7.05764H6.35156V3.52884C6.35156 3.1387 6.66895 2.82131 7.05909 2.82131ZM6.35449 5.64846H5.64551V4.93948H5.64844H6.35156H6.35449V5.64846ZM4.2334 3.52882C4.2334 3.13868 4.55079 2.82129 4.94093 2.82129C5.33107 2.82129 5.64844 3.1387 5.64844 3.52882V4.23635H4.94238H4.94093C4.55079 4.23635 4.2334 3.91896 4.2334 3.52882ZM2.11523 5.64846V4.93948H4.94091H4.94236V5.64846H2.11814H2.11523ZM2.82129 11.2969V6.35159H4.94238V11.2969H2.82129ZM5.64551 11.2969V6.35159H6.35449V11.2969H5.64551ZM9.17871 11.2969H7.05762V6.35159H9.17871V11.2969ZM9.88477 5.64846H9.88184H7.05762V4.93948H7.05907H9.88477V5.64846Z" />
            <path d="M3.32715 0.74707L3.94379 0.40957L4.5091 1.44244L3.89246 1.77994L3.32715 0.74707Z" />
            <path d="M7.49023 1.44629L8.05555 0.413416L8.67219 0.750916L8.10688 1.78379L7.49023 1.44629Z" />
            <path d="M5.64844 0H6.35156V0.870117H5.64844V0Z" />
            <path d="M9.39832 2.125L10.0135 1.50983L10.5106 2.00694L9.89542 2.62211L9.39832 2.125Z" />
            <path d="M1.52917 2.00586L2.02628 1.50875L2.64146 2.12392L2.14435 2.62103L1.52917 2.00586Z" />
        </svg>
    )
}

function VerticalLine({ height = "h-6" }: { height?: string }) {
    return (
        <svg 
            className={`w-1 ${height} text-[#2A2A2A]`} 
            viewBox="0 0 4 26" 
            fill="currentColor"
        >
            <path d="M0 0C2.20914 0 4 1.79086 4 4V22C4 24.2091 2.20914 26 0 26V0Z" />
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

interface BonusCardProps {
    bonusNumber: string
    title: string
    items: string[]
    image: string
    priceText: string
    backgroundColor?: string
}

function BonusCard({ bonusNumber, title, items, image, priceText, backgroundColor = "bg-white" }: BonusCardProps) {
    return (
        <div className={`${backgroundColor} rounded-xl -lg overflow- relative`}>
            {/* Background SVG Pattern */}
           
            {/* Main Image */}
            <div className="relative bg-white rounded-xl p-6">
                <Image
                    src={image}
                    alt={`Bonus ${bonusNumber}`}
                    width={549}
                    height={300}
                    className="w-full h-auto rounded-lg "
                />

                {/* Bonus Badge */}
                <div className="absolute -top-4 left-6 bg-[#f2efbc] backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                    <GiftIcon />
                    <span className="text-[#000000] font-bold text-sm">
                        {bonusNumber}
                    </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                    <span className="text-xs font-bold" dangerouslySetInnerHTML={{ __html: priceText }} />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-white rounded-xl pt-0">
                {/* Title with Icon */}
                <div className="flex items-start gap-3 mb-4">
                    <VerticalLine height="h-8" />
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[#2A2A2A] leading-tight">
                        {title}
                    </h3>
                </div>

                {/* Feature List */}
                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckIcon />
                            <span 
                                className="text-[14px] sm:text-[15px] leading-relaxed text-gray-700"
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
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

const bonusData = [
    {
        bonusNumber: "BONUS 01",
        title: "AI Hook Creator Software:",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/Frame-1519-8.png.webp",
        priceText: "<del>₹9000</del> <span style='font-size:20px'>FREE</span>",
        items: [
            "Free access to my AI Hook Creator software.",
            "Trained with years & years of HIGH CONVERTING direct response copy.",
            "One click & get KILLER money making hooks.",
            "1000x better than typical Chat-GPT stuff."
        ]
    },
    {
        bonusNumber: "BONUS 02",
        title: "1.7 Crore Launch Step-By-Step Breakdown",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/Frame-1519-2.webp",
        priceText: "<span style='font-size:20px'>PRICELESS</span>",
        items: [
            "Step-by-step breakdown.",
            "Revealing the exact strategy.",
            "Traffic & launch strategy.",
            "Sales strategy.",
            "Numbers, math & stat revealed."
        ]
    },
    {
        bonusNumber: "BONUS 03",
        title: "LIVE Pre Training Party To Kickstart Your Journey!",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/Frame-1519-3.webp",
        priceText: "<span style='font-size:20px'>PRICELESS</span>",
        items: [
            "Hotseats with audience.",
            "Answering all Q&As.",
            "BONUS Day extra training!",
            "And much more."
        ]
    },
    {
        bonusNumber: "BONUS 04",
        title: "Private \"Your Eyes Only\" Workbooks & Cheat Sheets",
        image: "https://lp.launchatscale.com/wp-content/uploads/2024/05/Frame-1519-4.webp",
        priceText: "<span style='font-size:20px'>PRICELESS</span>",
        items: [
            "These are your downloadable resources, cheat-sheets & much more that you'll receive after the challenge!",
            "And access to your eyes only resources.",
            "And so much more."
        ]
    }
]

export default function BonusSection() {
    return (
        <section className="w-full bg-[#F5F6F8] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Decorative Icons */}
            <div className="absolute top-8 md:left-8  lg:block">
                <DecorativeIcon1 />
            </div>
            <div className="absolute bottom-8 right-8 hidden lg:block">
                <DecorativeIcon2 />
            </div>

            <div className="mx-auto max-w-[1200px] px-4">
                {/* Main Headline */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#13316b] leading-[1.2] mb-6">
                        Get INSANE Bonuses{' '}
                        <span className="inline-block bg-[#FFF9C4] text-[#13316b] px-3 py-1 rounded">
                            (Previously Sold For ₹24,997)
                        </span>
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

                    {/* Hero Bonus Image */}
                    <div className="mb-12">
                        <Image
                            src="https://lp.launchatscale.com/wp-content/uploads/2025/02/9222d943181e28e25f5b5afe9ad302d5_1200_80-1024x576.webp"
                            alt="Bonus Overview"
                            width={1024}
                            height={576}
                            className="w-full max-w-[800px] mx-auto h-auto rounded-xl "
                        />
                    </div>
                </div>

                {/* Bonus Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-12 mb-16">
                    {bonusData.map((bonus, index) => (
                        <BonusCard
                            key={index}
                            bonusNumber={bonus.bonusNumber}
                            title={bonus.title}
                            items={bonus.items}
                            image={bonus.image}
                            priceText={bonus.priceText}
                            backgroundColor={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        />
                    ))}
                </div>

               
            </div>
        </section>
    )
}