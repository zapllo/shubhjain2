'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import EnrollButton from './enroll'

interface ContentData {
    eventDate: string
    eventTime: string
    eventLocation: string
    eventLanguage: string
    heroVideoUrl: string
    heroVideoPoster: string
}

export default function HeroSection() {

    const [content, setContent] = useState<ContentData>({
        eventDate: '29th – 31st Aug',
        eventTime: '7 PM – 9 PM',
        eventLocation: 'Zoom',
        eventLanguage: 'English',
        heroVideoUrl: 'https://lp.launchatscale.com/wp-content/uploads/2025/06/C3926-YT.mp4',
        heroVideoPoster: 'https://lp.launchatscale.com/wp-content/uploads/2024/05/Shubh-Jain-thum1-1-1.avif'
    })
    const [loading, setLoading] = useState(true)





    const bars = useMemo(() => Array.from({ length: 22 }), [])

    const items = [
        { label: 'DATE', value: content.eventDate, Icon: CalendarIcon },
        { label: 'TIME', value: content.eventTime, Icon: ClockIcon },
        { label: 'WHERE', value: content.eventLocation, Icon: PinIcon },
        { label: 'LANGUAGE', value: content.eventLanguage, Icon: GlobeIcon },
    ]

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('/api/content')
                if (response.ok) {
                    const data = await response.json()
                    setContent({
                        eventDate: data.eventDate || '29th – 31st Aug',
                        eventTime: data.eventTime || '7 PM – 9 PM',
                        eventLocation: data.eventLocation || 'Zoom',
                        eventLanguage: data.eventLanguage || 'English',
                        heroVideoUrl: data.heroVideoUrl || 'https://lp.launchatscale.com/wp-content/uploads/2025/06/C3926-YT.mp4',
                        heroVideoPoster: data.heroVideoPoster || 'https://lp.launchatscale.com/wp-content/uploads/2024/05/Shubh-Jain-thum1-1-1.avif'
                    })
                }
            } catch (error) {
                console.error('Error fetching content:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchContent()
    }, [])



    return (
        <div className='w-full flex overflow-hidden justify-center'>
            <section className="relative w-full bg-[url('/back.png')] bg-[length:32px_32px] bg-center">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                {/* Content - Updated padding to match specifications */}
                <div className="relative z-10 px-[10px] py-0 sm:px-5 md:px-10  lg:px-10 ">
                    {/* Top ribbon */}
                    <div className='w-full flex justify-center '>
                        <div className="bg-gradient-to-r from-[#3A51A6] to-[#092E4E] md:px-[74px] px-5 text-nowrap  md:py-[22px] py-[9px] rounded-t-none rounded-b-xl max-w-full">
                            <h1 style={{ fontWeight: 600 }} className=" text-[#FCFEFF] text-[17.6px]  lg:text-xl text-center">
                                ⏰ Give Me 3 Days & I&apos;ll Show You How To...
                            </h1>
                        </div>

                    </div>

                    {/* Headline + subhead */}
                    <div className="mx-auto md:mt-3 px-4 py-6 text-center">
                        <h1 className="mx-auto max-w-[900px]  font-extrabold sm:leading-[1.25] text-[#0F2C80] text-[26px]  md:text-[42px] lg:text-[46px] leading-[1.35]">
                            Scale your Coaching Business To{' '}
                            <span className="bg-[#FFF9C4]">8 Lakhs/Month PROFIT</span>{' '}
                            Using Army Of{' '}
                            <span className="underline text-[#0F2C80]">A.I.</span>{' '}
                            <span className="underline text-[#0F265C]">Agents.</span>
                        </h1>

                        <p className="mt-4 text-[23px]  md:text-[26px] font-medium italic text-[#454545] -600">
                            ... Zero Tech Method &amp; Complete Time Freedom.
                        </p>

                        {/* Small pills - responsive grid */}
                        <div className="mx-auto p-4 md:mt-4 mt-1">
                            {/* Mobile layout: 2 on top, 1 centered below */}
                            <div className="flex flex-col items-center gap-6 sm:hidden">
                                <div className="flex gap-2">
                                    <TinyPill text="NO Sales Calls" />
                                    <TinyPill text="NO Endless Content" />
                                </div>
                                <div>
                                    <TinyPill text="NO Begging In DMs" />
                                </div>
                            </div>

                            {/* Desktop layout: all in one row */}
                            <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3">
                                <TinyPill text="NO Sales Calls" />
                                <TinyPill text="NO Endless Content" />
                                <TinyPill text="NO Begging In DMs" />
                            </div>
                        </div>
                    </div>

                    {/* Video + Agenda - Responsive Layout */}
                    <div className="mx-auto  w-full md:max-w-[1200px] md:px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.96fr] gap-6">
                            {/* Video */}
                            <div className="order-1 lg:order-1">
                                <div className="rounded-2xl bg-white md:p-2">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <video
                                            className="h-[250px] md:h-[320px] w-full rounded-2xl object-cover"
                                            src={content.heroVideoUrl}
                                            poster={content.heroVideoPoster}
                                            preload="metadata"
                                            controls
                                            controlsList="nodownload"
                                        />
                                    </div>
                                </div>
                                {/* Info Cards - Full width on mobile, grid on larger screens */}
                                <div className="mt-6 grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                                    {items.map((it, i) => (
                                        <InfoCard key={i} {...it} />
                                    ))}
                                </div>
                            </div>

                            {/* Agenda + Info Cards */}
                            <div className="order-1 lg:order-1 mt-4 space-y-6">
                                {/* Agenda */}
                                <div className="relative rounded-xl   bg-[#f0f1fc] p-6  border-b border-black ">
                                    {/* LIVE badge */}
                                    <div className="absolute left-1/2 top-0 z-[2] -translate-x-1/2 -translate-y-1/2">
                                        <img
                                            src="/live.svg"
                                            alt="live"
                                            className="object-cover w-auto md:h-12 scale-150 "
                                        />
                                    </div>

                                    <div className="relative rounded-[14px]">
                                        <div className="pointer-events-none absolute inset-0 rounded-[14px] [background:linear-gradient(180deg,#EEF2FF_0%,#EAF0FF_100%)] [mask-image:linear-gradient(#000,rgba(0,0,0,.98))]"></div>
                                        <div
                                            className="pointer-events-none absolute bottom-[-8px] right-[-8px] md:h-[80px] h-[120px] md:w-[80px]  w-[120px] opacity-[.18]"
                                            style={{
                                                background:
                                                    "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 120%22><path d=%22M86 94 96 120 70 110 56 120 50 98 24 106 36 82 16 72 40 66 34 44 56 56 64 34 74 58 96 48 86 72 108 78 86 86Z%22 fill=%22%2394A3FF%22/></svg>') center/contain no-repeat",
                                            }}
                                        />

                                        <h3 className="relative z-[1] mb-2 mt-[5px] text-center text-[24px] font-extrabold tracking-[-0.2px] text-[#2a2a2a]">
                                            Implementation Agenda:
                                        </h3>
                                        <span className="relative z-[1] block h-[8px] sm:h-[10px] w-[180px] sm:w-[210px] mx-auto -mt-1 mb-3 bg-[url('https://lp.launchatscale.com/wp-content/uploads/2024/05/line.svg')] bg-contain bg-center bg-no-repeat" />

                                        <ul className="relative mt-6 z-[1] text-[13px] sm:text-[15px] leading-[1.55] text-[#273352] space-y-4">
                                            <li className="flex gap-2 sm:gap-3 ">
                                                <span className="mt-[2px] inline-block shrink-0">
                                                    <CheckIcon className="h-[24px] sm:h-[30px] w-[24px] sm:w-[30px]" />
                                                </span>
                                                <span className='text-base md:text-base'
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            'How to Make <b>10 Lakhs or More in Sales In ONE Weekend</b> Which Would Otherwise Take You Months to HIT!',
                                                    }}
                                                />
                                            </li>

                                            {/* Separator */}
                                            <div className="h-px bg-[#E2E7FF] mx-4"></div>

                                            <li className="flex gap-2 sm:gap-3 ">
                                                <span className="mt-[2px] inline-block shrink-0">
                                                    <CheckIcon className="h-[24px] sm:h-[30px] w-[24px] sm:w-[30px]" />
                                                </span>
                                                <span className='text-base md:text-base'
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            'How to <b>SELL Premium Offers Without Sales Calls</b> &amp; Close Effortlessly in 5 hours/month.',
                                                    }}
                                                />
                                            </li>

                                            {/* Separator */}
                                            <div className="h-px bg-[#E2E7FF] mx-4"></div>

                                            <li className="flex gap-2 sm:gap-3 mb-8">
                                                <span className="mt-[2px] inline-block shrink-0">
                                                    <CheckIcon className="h-[24px] sm:h-[30px] w-[24px] sm:w-[30px]" />
                                                </span>
                                                <span className='text-base md:text-base'
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            'How To Create A Buying Movement That Makes <b>People Throw Credit Cards</b> At You To Buy!',
                                                    }}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <div className="text-center mt-8">
                                    <div className="relative inline-block">
                                        <EnrollButton
                                            price="₹99"
                                            originalPrice="₹999"
                                            buttonText="ENROLL NOW"
                                            className="inline-flex rounded-2xl  items-center justify-center"
                                        />


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
                                            <CalIcon className="h-3 sm:h-4 w-3 sm:w-4" />
                                            <span>Seats Of This Event As Of {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }).replace(/(\d+)/, '$1th')} Is Low</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div >
    )
}

/* ============== small parts ============== */

function TinyPill({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-3 md:text-[20px]  font- text-[#273352] shadow-sm">
            <CheckIcon className="h-[20px]  w-[18px] sm:w-[22px] flex-shrink-0" />
            <span className="leading-none whitespace-nowrap md:py-3 py-3">{text}</span>
        </div>
    )
}

function AgendaItem({ text }: { text: string }) {
    return (
        <li className="flex gap-3">
            <span className="mt-[1px] inline-block">
                <CheckIcon className="h-[24px] w-[24px]" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: text }} />
        </li>
    )
}

/* ============== icons (same shapes as your HTML) ============== */

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none">
            <circle cx="16.5" cy="16.5" r="16.5" fill="#4A68EE" fillOpacity="0.37" />
            <circle cx="16.5" cy="16.5" r="9.9" fill="#1C348F" />
            <path d="M21.017 13.564c.263.276.263.724 0 1.001l-5.387 5.656a.9.9 0 0 1-1.0 0l-2.693-2.83a.71.71 0 0 1 1.0-1l2.218 2.327 4.912-5.155a.71.71 0 0 1 1.05 0Z" fill="#fff" />
        </svg>
    )
}

function DateIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#dgrad)" />
            <path d="M25 22.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#fff" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 10.25c.414 0 .75.336.75.75v.763c.662-.013 1.391-.013 2.193-.013h4.113c.802 0 1.531 0 2.193.013V11c0-.414.336-.75.75-.75s.75.336.75.75v.827c.26.02.506.045.739.076 1.172.158 2.12.49 2.869 1.239.748.748 1.08 1.697 1.238 2.869.153 1.139.153 2.594.153 4.432v2.113c0 1.838 0 3.293-.153 4.432-.158 1.172-.49 2.12-1.238 2.869-.748.748-1.697 1.08-2.869 1.238-1.139.153-2.594.153-4.432.153h-4.113c-1.838 0-3.293 0-4.432-.153-1.172-.158-2.12-.49-2.869-1.238-.748-.748-1.08-1.697-1.238-2.869C9.25 25.85 9.25 24.394 9.25 22.556V20.444c0-1.838 0-3.293.153-4.432.158-1.172.49-2.12 1.238-2.869.749-.749 1.697-1.081 2.869-1.239.233-.031.479-.056.739-.076V11c0-.414.336-.75.75-.75Z" fill="#fff" />
            <defs>
                <linearGradient id="dgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function TimeIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#tgrad)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.25 10.5c0-.414.336-.75.75-.75 5.937 0 10.75 4.813 10.75 10.75S25.937 31.25 20 31.25 9.25 26.437 9.25 20.5c0-.414.336-.75.75-.75s.75.336.75.75c0 5.108 4.141 9.25 9.25 9.25 5.108 0 9.25-4.142 9.25-9.25 0-5.108-4.142-9.25-9.25-9.25-.414 0-.75-.336-.75-.75Zm.75 6.25c.414 0 .75.336.75.75v3.25H24c.414 0 .75.336.75.75s-.336.75-.75.75h-4c-.414 0-.75-.336-.75-.75V17.5c0-.414.336-.75.75-.75Z" fill="#fff" />
            <defs>
                <linearGradient id="tgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function WhereIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#wgrad)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.25 19.143C11.25 14.244 15.155 10.25 20 10.25s8.75 3.994 8.75 8.893c0 2.365-.674 4.905-1.866 7.099-1.19 2.191-2.929 4.095-5.104 5.112-1.13.528-2.431.528-3.561 0-2.175-1.017-3.914-2.921-5.105-5.113-1.191-2.194-1.865-4.733-1.865-7.098ZM20 16.75A2.25 2.25 0 1 0 22.25 19 2.25 2.25 0 0 0 20 16.75Z" fill="#fff" />
            <defs>
                <linearGradient id="wgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function LangIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none">
            <circle cx="20" cy="20.5" r="20" fill="url(#lgrad)" />
            <path d="M29.11 26.576c1.03-1.678 1.573-3.608 1.571-5.576 0-1.968-.544-3.898-1.573-5.575-.955-1.557-2.294-2.843-3.888-3.735C23.623 10.788 21.827 10.32 20 10.32c-1.826 0-3.622.469-5.216 1.36-1.594.893-2.932 2.179-3.888 3.736C9.864 17.103 9.32 19.032 9.32 21c0 1.968.543 3.897 1.57 5.576.956 1.557 2.294 2.843 3.888 3.735 1.594.892 3.39 1.36 5.216 1.36 1.827 0 3.623-.468 5.216-1.36 1.594-.892 2.932-2.178 3.888-3.735Zm-7.744 3.274a2.1 2.1 0 0 1-.693.479 1.75 1.75 0 0 1-1.343 0 3.6 3.6 0 0 1-1.883-2.03 16.7 16.7 0 0 1-.72-2.229 60.5 60.5 0 0 1 6.176 0c-.154.55-.35 1.088-.583 1.61a5.6 5.6 0 0 1-1.271 1.17ZM10.541 21.6h4.308c.028 1.202.158 2.4.389 3.58-1.177.103-2.352.246-3.523.427-.686-1.231-1.087-2.6-1.174-4.007Zm1.174-5.206c1.171.181 2.346.323 3.525.427a34.5 34.5 0 0 0-.39 3.579h-4.308c.087-1.406.488-2.775 1.173-4.006ZM16.445 25.086A34.7 34.7 0 0 1 16.049 21.6h7.903a34.7 34.7 0 0 1-.396 3.486c-1.184-.078-2.37-.118-3.556-.119-1.186 0-2.371.04-3.555.118Zm7.11-8.172c.235 1.148.367 2.315.396 3.486h-7.902c.028-1.171.16-2.338.395-3.486 1.184.078 2.37.119 3.556.119 1.186 0 2.371-.041 3.555-.119Z" fill="#fff" />
            <defs>
                <linearGradient id="lgrad" x1="20" y1=".5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function CalIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
            <path d="M14.75 10.375V3.75c0-.689-.561-1.25-1.25-1.25h-.812v.625a.625.625 0 1 1-1.25 0V2.5H8.594v.625a.625.625 0 0 1-1.25 0V2.5H4.53v.625a.625.625 0 1 1-1.25 0V2.5H2.5C1.811 2.5 1.25 3.061 1.25 3.75V13.5C1.25 14.189 1.811 14.75 2.5 14.75H13.5c.689 0 1.25-.561 1.25-1.25 0-.345.279-.625.625-.625S16 13.154 16 13.5c0 1.378-1.121 2.5-2.5 2.5H2.5A2.5 2.5 0 0 1 0 13.5V3.75C0 2.371 1.121 1.25 2.5 1.25h.781V.625a.625.625 0 1 1 1.25 0V1.25h2.812V.625a.625.625 0 1 1 1.25 0V1.25h2.844V.625a.625.625 0 1 1 1.25 0V1.25H13.5C14.879 1.25 16 2.371 16 3.75v6.625c0 .345-.279.625-.625.625s-.625-.279-.625-.625ZM8.594 6.281a.625.625 0 0 0-1.25 0v4.031a.625.625 0 0 0 1.25 0V6.281Zm-.625 5.594a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25Z" fill="#454545" />
        </svg>
    )
}

type Item = {
    label: string
    value: string
    Icon: React.ComponentType<{ className?: string }>
}

function InfoCard({ label, value, Icon }: Item) {
    return (
        <div className="rounded-[14px] border border-[#E6E6E6] bg-white p-3 sm:p-4 shadow-[0_6px_12px_rgba(0,0,0,0.06)] ">
            <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex h-[32px] sm:h-[41px] w-[32px] sm:w-[41px] items-center justify-center rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-10 sm:h-10" />
                </span>

                <div className="leading-tight min-w-0">
                    <div className="text-[14px] font-medium uppercase tracking-wide text-[#6B7CFF]">
                        {label}
                    </div>
                    <div className="mt-[2px] md:text-[18px] sm:text-[24px] font-bold text-[#0B1A3A] truncate">
                        {value}
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ===== Icons (exact look from your HTML) ===== */

/* ===== Icons (exact look from your HTML) ===== */

export function CalendarIcon({ className }: { className?: string }) {
    const gid = useId().replace(/:/g, '')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none"><circle cx="20" cy="20.5" r="20" fill="url(#paint0_linear_4014_1272)"></circle><path d="M25 22.5C25.5523 22.5 26 22.0523 26 21.5C26 20.9477 25.5523 20.5 25 20.5C24.4477 20.5 24 20.9477 24 21.5C24 22.0523 24.4477 22.5 25 22.5Z" fill="white"></path><path d="M25 26.5C25.5523 26.5 26 26.0523 26 25.5C26 24.9477 25.5523 24.5 25 24.5C24.4477 24.5 24 24.9477 24 25.5C24 26.0523 24.4477 26.5 25 26.5Z" fill="white"></path><path d="M21 21.5C21 22.0523 20.5523 22.5 20 22.5C19.4477 22.5 19 22.0523 19 21.5C19 20.9477 19.4477 20.5 20 20.5C20.5523 20.5 21 20.9477 21 21.5Z" fill="white"></path><path d="M21 25.5C21 26.0523 20.5523 26.5 20 26.5C19.4477 26.5 19 26.0523 19 25.5C19 24.9477 19.4477 24.5 20 24.5C20.5523 24.5 21 24.9477 21 25.5Z" fill="white"></path><path d="M15 22.5C15.5523 22.5 16 22.0523 16 21.5C16 20.9477 15.5523 20.5 15 20.5C14.4477 20.5 14 20.9477 14 21.5C14 22.0523 14.4477 22.5 15 22.5Z" fill="white"></path><path d="M15 26.5C15.5523 26.5 16 26.0523 16 25.5C16 24.9477 15.5523 24.5 15 24.5C14.4477 24.5 14 24.9477 14 25.5C14 26.0523 14.4477 26.5 15 26.5Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.25C15.4142 10.25 15.75 10.5858 15.75 11V11.7627C16.412 11.75 17.1413 11.75 17.9435 11.75H22.0564C22.8586 11.75 23.588 11.75 24.25 11.7627V11C24.25 10.5858 24.5858 10.25 25 10.25C25.4142 10.25 25.75 10.5858 25.75 11V11.8271C26.0099 11.8469 26.2561 11.8718 26.489 11.9031C27.6614 12.0608 28.6104 12.3929 29.3588 13.1412C30.1071 13.8896 30.4392 14.8386 30.5969 16.011C30.75 17.1502 30.75 18.6058 30.75 20.4435V22.5564C30.75 24.3941 30.75 25.8498 30.5969 26.989C30.4392 28.1614 30.1071 29.1104 29.3588 29.8588C28.6104 30.6071 27.6614 30.9392 26.489 31.0969C25.3498 31.25 23.8942 31.25 22.0565 31.25H17.9436C16.1058 31.25 14.6502 31.25 13.511 31.0969C12.3386 30.9392 11.3896 30.6071 10.6412 29.8588C9.89288 29.1104 9.56076 28.1614 9.40314 26.989C9.24997 25.8498 9.24998 24.3942 9.25 22.5564V20.4436C9.24998 18.6058 9.24997 17.1502 9.40314 16.011C9.56076 14.8386 9.89288 13.8896 10.6412 13.1412C11.3896 12.3929 12.3386 12.0608 13.511 11.9031C13.7439 11.8718 13.9901 11.8469 14.25 11.8271V11C14.25 10.5858 14.5858 10.25 15 10.25ZM13.7108 13.3898C12.7048 13.525 12.1251 13.7787 11.7019 14.2019C11.2787 14.6251 11.025 15.2048 10.8898 16.2108C10.8669 16.3812 10.8477 16.5606 10.8317 16.75H29.1683C29.1523 16.5606 29.1331 16.3812 29.1102 16.2108C28.975 15.2048 28.7213 14.6251 28.2981 14.2019C27.8749 13.7787 27.2952 13.525 26.2892 13.3898C25.2615 13.2516 23.9068 13.25 22 13.25H18C16.0932 13.25 14.7385 13.2516 13.7108 13.3898ZM10.75 20.5C10.75 19.646 10.7503 18.9027 10.7631 18.25H29.2369C29.2497 18.9027 29.25 19.646 29.25 20.5V22.5C29.25 24.4068 29.2484 25.7615 29.1102 26.7892C28.975 27.7952 28.7213 28.3749 28.2981 28.7981C27.8749 29.2213 27.2952 29.475 26.2892 29.6102C25.2615 29.7484 23.9068 29.75 22 29.75H18C16.0932 29.75 14.7385 29.7484 13.7108 29.6102C12.7048 29.475 12.1251 29.2213 11.7019 28.7981C11.2787 28.3749 11.025 27.7952 10.8898 26.7892C10.7516 25.7615 10.75 24.4068 10.75 22.5V20.5Z" fill="white"></path><defs><linearGradient id="paint0_linear_4014_1272" x1="20" y1="0.5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse"><stop stop-color="#151F44"></stop><stop offset="1" stop-color="#667EEA"></stop></linearGradient></defs></svg>
    )
}

export function ClockIcon({ className }: { className?: string }) {
    const gid = useId().replace(/:/g, '')
    return (
        <svg className={className} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="20" cy="20.5" r="20" fill={`url(#clk_${gid})`} />
            <path
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.25 10.5c0-.414.336-.75.75-.75 5.937 0 10.75 4.813 10.75 10.75S25.937 31.25 20 31.25 9.25 26.437 9.25 20.5c0-.414.336-.75.75-.75s.75.336.75.75c0 5.108 4.141 9.25 9.25 9.25 5.108 0 9.25-4.142 9.25-9.25 0-5.108-4.142-9.25-9.25-9.25-.414 0-.75-.336-.75-.75Zm.75 6.25c.414 0 .75.336.75.75v3.25H24c.414 0 .75.336.75.75s-.336.75-.75.75h-4c-.414 0-.75-.336-.75-.75V17.5c0-.414.336-.75.75-.75Z"
            />
            <defs>
                <linearGradient id={`clk_${gid}`} x1="20" y1="0.5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#151F44" />
                    <stop offset="1" stopColor="#667EEA" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function PinIcon({ className }: { className?: string }) {
    const gid = useId().replace(/:/g, '')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none"><circle cx="20" cy="20.5" r="20" fill="url(#paint0_linear_4014_1279)"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 19.1433C11.25 14.2443 15.155 10.25 20 10.25C24.845 10.25 28.75 14.2443 28.75 19.1433C28.75 21.5084 28.076 24.0479 26.8844 26.2419C25.6944 28.4331 23.9556 30.3372 21.7805 31.3539C20.6506 31.882 19.3494 31.882 18.2195 31.3539C16.0444 30.3372 14.3056 28.4331 13.1156 26.2419C11.924 24.0479 11.25 21.5084 11.25 19.1433ZM20 11.75C16.0084 11.75 12.75 15.0475 12.75 19.1433C12.75 21.2404 13.3526 23.5354 14.4337 25.526C15.5162 27.5192 17.046 29.1496 18.8546 29.995C19.5821 30.335 20.4179 30.335 21.1454 29.995C22.954 29.1496 24.4838 27.5192 25.5663 25.526C26.6474 23.5354 27.25 21.2404 27.25 19.1433C27.25 15.0475 23.9916 11.75 20 11.75ZM20 16.75C18.7574 16.75 17.75 17.7574 17.75 19C17.75 20.2426 18.7574 21.25 20 21.25C21.2426 21.25 22.25 20.2426 22.25 19C22.25 17.7574 21.2426 16.75 20 16.75ZM16.25 19C16.25 16.9289 17.9289 15.25 20 15.25C22.0711 15.25 23.75 16.9289 23.75 19C23.75 21.0711 22.0711 22.75 20 22.75C17.9289 22.75 16.25 21.0711 16.25 19Z" fill="white"></path><defs><linearGradient id="paint0_linear_4014_1279" x1="20" y1="0.5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse"><stop stop-color="#151F44"></stop><stop offset="1" stop-color="#667EEA"></stop></linearGradient></defs></svg>
    )
}

export function GlobeIcon({ className }: { className?: string }) {
    const gid = useId().replace(/:/g, '')
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none"><circle cx="20" cy="20.5" r="20" fill="url(#paint0_linear_4014_1293)"></circle><path d="M29.1098 26.5757C30.1394 24.8984 30.683 22.9683 30.6803 21.0002V20.9998C30.683 19.0317 30.1393 17.1015 29.1098 15.4242L29.1039 15.4151C28.1488 13.8583 26.8103 12.5724 25.2165 11.6804C23.6227 10.7884 21.8268 10.32 20.0003 10.32C18.1739 10.32 16.378 10.7884 14.7841 11.6804C13.1903 12.5724 11.8519 13.8582 10.8967 15.415L10.8908 15.4243C9.86379 17.1027 9.32032 19.0322 9.32031 21C9.3203 22.9677 9.86376 24.8972 10.8907 26.5757L10.8968 26.5851C11.852 28.1419 13.1904 29.4277 14.7842 30.3197C16.378 31.2116 18.1739 31.68 20.0004 31.68C21.8268 31.68 23.6227 31.2116 25.2165 30.3196C26.8103 29.4276 28.1487 28.1418 29.1039 26.585L29.1098 26.5757ZM21.3655 29.8496C21.1619 30.0459 20.9277 30.2077 20.672 30.3285C20.4621 30.4283 20.2327 30.48 20.0003 30.48C19.7679 30.48 19.5385 30.4283 19.3286 30.3285C18.842 30.08 18.4255 29.7134 18.1171 29.2624C17.4872 28.3522 17.0205 27.3395 16.7376 26.2694C17.8241 26.2026 18.9117 26.1685 20.0003 26.1673C21.0885 26.1673 22.1761 26.2013 23.2632 26.2694C23.1066 26.8196 22.9111 27.358 22.678 27.8804C22.3712 28.615 21.9255 29.2837 21.3655 29.8496ZM10.5412 21.6H14.849C14.877 22.802 15.0073 23.9995 15.2384 25.1794C14.0608 25.283 12.8863 25.4254 11.7147 25.6064C11.0287 24.3756 10.6276 23.0064 10.5412 21.6ZM11.7147 16.3936C12.8858 16.5751 14.0608 16.7175 15.2396 16.8207C15.0081 18.0005 14.8775 19.198 14.8493 20.4H10.5412C10.6276 18.9936 11.0287 17.6244 11.7147 16.3936ZM18.6352 12.1504C18.8387 11.954 19.0729 11.7922 19.3286 11.6715C19.5385 11.5717 19.7679 11.52 20.0003 11.52C20.2327 11.52 20.4621 11.5717 20.672 11.6715C21.1586 11.92 21.5751 12.2866 21.8835 12.7376C22.5134 13.6478 22.9801 14.6605 23.263 15.7306C22.1765 15.7974 21.089 15.8315 20.0003 15.8327C18.9121 15.8327 17.8245 15.7987 16.7374 15.7306C16.894 15.1804 17.0895 14.642 17.3226 14.1196C17.6294 13.3849 18.0751 12.7163 18.6352 12.1504ZM29.4594 20.4H25.1517C25.1236 19.198 24.9933 18.0005 24.7622 16.8206C25.9398 16.717 27.1144 16.5746 28.2859 16.3936C28.972 17.6244 29.373 18.9936 29.4594 20.4ZM16.4453 25.0861C16.2107 23.938 16.0781 22.7715 16.0493 21.6H23.9515C23.9229 22.7715 23.7906 23.9381 23.5561 25.0862C22.3722 25.0085 21.1869 24.9688 20.0003 24.9673C18.8146 24.9673 17.6296 25.0069 16.4453 25.0861ZM23.5553 16.9139C23.7899 18.0619 23.9225 19.2285 23.9513 20.4H16.0491C16.0777 19.2286 16.21 18.0619 16.4445 16.9138C17.6284 16.9915 18.8137 17.0311 20.0003 17.0327C21.186 17.0327 22.371 16.9931 23.5553 16.9139ZM25.1513 21.6H29.4594C29.373 23.0065 28.9719 24.3756 28.2859 25.6064C27.1148 25.4249 25.9398 25.2825 24.761 25.1793C24.9926 23.9995 25.1231 22.802 25.1513 21.6ZM27.5664 15.2892C26.5425 15.4369 25.5155 15.5538 24.4854 15.64C24.3003 14.9508 24.0616 14.2771 23.7713 13.625C23.5064 13.025 23.173 12.4576 22.7778 11.9342C24.6877 12.5199 26.3637 13.6941 27.5664 15.2892ZM13.2969 14.2966C14.3925 13.2 15.7403 12.3889 17.2223 11.9343C17.1998 11.9634 17.1767 11.9913 17.1545 12.021C16.3928 13.1175 15.838 14.3441 15.5174 15.6402C14.4872 15.553 13.4595 15.4359 12.4342 15.2892C12.6986 14.9389 12.9869 14.6073 13.2969 14.2966ZM12.4342 26.7108C13.4581 26.5631 14.4851 26.4461 15.5152 26.36C15.7003 27.0492 15.939 27.7229 16.2293 28.375C16.4942 28.975 16.8276 29.5424 17.2228 30.0658C15.3129 29.4801 13.637 28.3059 12.4342 26.7108ZM26.7037 27.7034C25.6081 28.8 24.2603 29.6112 22.7783 30.0657C22.8008 30.0366 22.8239 30.0087 22.8461 29.979C23.6078 28.8825 24.1627 27.6559 24.4833 26.3598C25.5134 26.447 26.5411 26.5641 27.5664 26.7108C27.302 27.0611 27.0137 27.3927 26.7037 27.7034Z" fill="white"></path><defs><linearGradient id="paint0_linear_4014_1293" x1="20" y1="0.5" x2="20" y2="40.5" gradientUnits="userSpaceOnUse"><stop stop-color="#151F44"></stop><stop offset="1" stop-color="#667EEA"></stop></linearGradient></defs></svg>
    )
}