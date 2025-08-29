'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Shadows_Into_Light } from 'next/font/google'
import EnrollButton from './enroll'

const shadowsIntoLight = Shadows_Into_Light({
    weight: '400',
    subsets: ['latin']
})

// Animated Arrow Component
const AnimatedArrow = ({ className = "" }: { className?: string }) => (
    <div className={`inline-block ${className}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="60"
            height="60"
            preserveAspectRatio="xMidYMid meet"
            className="w-12 h-12 sm:w-16 sm:h-16"
        >
            <defs>
                <clipPath id="__lottie_element_10">
                    <rect width="500" height="500" x="0" y="0"></rect>
                </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_10)">
                <g transform="matrix(0.9809139966964722,0,0,0.9809139966964722,1.9525985717773438,7.45379638671875)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,95.05500030517578,425.7869873046875)">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(255,0,24)"
                            strokeOpacity="1"
                            strokeWidth="13"
                            d="M-25.740999221801758,-23.406999588012695 C-24.871000289916992,-7.802000045776367 -24,7.802999973297119 -23.1299991607666,23.406999588012695 C-10.505999565124512,8.527999877929688 6.828000068664551,-2.2929999828338623 25.739999771118164,-7.099999904632568"
                            style={{
                                animation: 'arrowHeadAppear 3s ease-in-out infinite'
                            }}
                        />
                    </g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,255.5500030517578,240.7790069580078)">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(255,0,24)"
                            strokeOpacity="1"
                            strokeWidth="13"
                            d="M175.13499450683594,-189.9739990234375 C161.4409942626953,-148.10299682617188 135.91700744628906,-110.1719970703125 102.28600311279297,-81.71700286865234 C88.3270034790039,-69.90599822998047 71.69999694824219,-59.28799819946289 53.41699981689453,-59.57899856567383 C35.1349983215332,-59.87099838256836 16.31800079345703,-75.51100158691406 18.886999130249023,-93.61399841308594 C21.636999130249023,-112.99099731445312 47.48699951171875,-122.16200256347656 65.15899658203125,-113.75299835205078 C82.83100128173828,-105.34400177001953 92.38600158691406,-85.58799743652344 95.91899871826172,-66.33899688720703 C100.44100189208984,-41.70600128173828 97.14399719238281,-15.699999809265137 86.62100219726562,7.026000022888184 C78.4280014038086,24.7189998626709 65.4280014038086,40.79600143432617 47.900001525878906,49.334999084472656 C30.371999740600586,57.874000549316406 8.015999794006348,57.724998474121094 -7.619999885559082,46.077999114990234 C-23.256999969482422,34.43000030517578 -29.490999221801758,10.54699993133545 -18.923999786376953,-5.839000225067139 C-3.9159998893737793,-29.113000869750977 36.314998626708984,-23.327999114990234 49.97800064086914,0.7599999904632568 C63.64099884033203,24.847999572753906 54.209999084472656,56.983001708984375 34.53099822998047,76.46800231933594 C14.852999687194824,95.9530029296875 -12.673999786376953,105.17500305175781 -39.69499969482422,111.23999786376953 C-66.71700286865234,117.30400085449219 -94.58100128173828,120.93299865722656 -120.00499725341797,131.91299438476562 C-142.2429962158203,141.51600646972656 -162.93499755859375,158.11099243164062 -171.99000549316406,180.1649932861328"
                            style={{
                                animation: 'drawPath 3s ease-in-out infinite'
                            }}
                        />
                    </g>
                </g>
            </g>
        </svg>

        <style jsx>{`
            @keyframes drawPath {
                0% {
                    stroke-dasharray: 0 1000;
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: 1000 1000;
                    stroke-dashoffset: 0;
                }
                100% {
                    stroke-dasharray: 0 1000;
                    stroke-dashoffset: -1000;
                }
            }
            
            @keyframes arrowHeadAppear {
                0% {
                    opacity: 0;
                }
                70% {
                    opacity: 1;
                }
                75% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        `}</style>
    </div>
)
export default function ReadyToBuySection() {
    return (
        <section className="w-full  py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-4">
                {/* Main Headlines */}
                <div className="text-center">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[1.5] text-[#13316b] mb-4">
                        In Just 3 Days… You Can Start Getting{' '}
                        <span className="inline- bg-[#FFF9C4] text-[#13316b] px-2 py-1 rounded">
                            <span className="underline">Ready To Buy</span> <span className='md:inline-block'>Leads<br className='md:hidden' /> & High Ticket Sales!!</span>
                        </span>
                    </h2>

                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] font- text-[#454545] leading-[1.3] mt-6 mb-8">
                        This is the ultimate black-book of{' '}
                        <strong>
                            <u><br className='md:hidden' />
                                <i>TOP <br className='hidden' />1% coaches</i>
                            </u>
                        </strong>{' '}
                        (they won&apos;t <br /> reveal it to you…)
                    </h3>


                    {/* Decorative Line */}
                    <div className="flex justify-center mb-12">
                        <Image
                            src="https://lp.launchatscale.com/wp-content/uploads/2025/02/line.svg"
                            alt=""
                            width={200}
                            height={16}
                            className="w-full max-w-[200px] h-auto"
                        />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 items-center lg:grid-cols-2 -8  items- ">
                    {/* Left: Video/GIF - Hidden on mobile */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            <Image
                                src="https://lp.launchatscale.com/wp-content/uploads/2025/02/video-1.gif"
                                alt="Video demonstration"
                                width={400}
                                height={883}
                                className="scale-75 -mt-56 ml-24 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Right: Text and Phone Mockup */}
                    <div className="relative">
                        <div className="mb-8">
                            <p className={`text-[18px] sm:text-[20px] md:text-[22px] font-bold text-center text-[#0B2C67] mb-8 ${shadowsIntoLight.className}`} style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                lineHeight: '1.3em',
                                letterSpacing: '.8px',
                                color: '#0B2C67'
                            }}>
                                And when you start applying these principles... your inbox could start looking like this.
                            </p>
                            <AnimatedArrow className="absolute right-24 -mt-2 transform -rotate-[360deg] scale-200 z-[100]" />
                            {/* Animated Arrow for first shadowsIntoLight text */}

                            {/* Phone Mockup with Overlays */}
                            <div className="relative mx-auto max-w-[300px] sm:max-w-[400px]">
                                <Image
                                    src="https://lp.launchatscale.com/wp-content/uploads/2024/05/mockup_result-min.png"
                                    alt="Phone showing results"
                                    width={219}
                                    height={1024}
                                    className="w-full ml-6 -mt-4 h-auto transform scale-90"
                                />

                                {/* Overlay Text */}
                                <div className="absolute md:top-[60%] md:-ml-48  left-[0%] w-64 transform -rotate-6">
                                    <AnimatedArrow className="absolute md:left-56 left-24 -top-20 transform rotate-[180deg] md:-rotate-[160deg] scale-200" />
                                    <p className={`text-[12px] sm:text-[14px] md:text-[36px] font-bold text-green-600 px-2 py-1 rounded  -lg text-center ${shadowsIntoLight.className}`} style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        lineHeight: '1.3em',
                                        letterSpacing: '.8px',
                                        color: '#0B2C67'
                                    }}>
                                        <span className="text-green-600">Hundreds of sales @ High Ticket</span>{' '}
                                        through this Reverse Funnel in a span of 2 hours...
                                    </p>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                {/* CTA Section */}
                <div className='w-full flex justify-center md:-m md:-mt-36 -'>
                    <div className="text-center mt-32 md:mt-0 space-y-4">

                        {/* CTA Section */}
                        <div className="text-center mt-12">
                            <div className="relative inline-block">
                                <EnrollButton

                                    price="₹99"
                                    originalPrice="₹999"
                                    buttonText="ENROLL NOW"
                                    className="inline-flex rounded-2xl -center justify-center "
                                />

                                {/* Seats chip */}
                                <div className="absolute -top-4 sm:-top-6 right- right-[4%] mt-2 min-w-[100px] sm:min-w-[118px] rounded-full bg-[#0B1A3A] px-2 sm:px-3.5 py-1 sm:py-1.5 text-center text-[10px] sm:text-[11px] font-semibold text-white shadow">
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
            </div>
        </section >
    )
}