'use client'

import Image from 'next/image'

function CheckmarkIcon() {
    return (
        <svg
            className="w-[22px] h-[23px] flex-shrink-0"
            viewBox="0 0 22 23"
            fill="none"
        >
            <rect y="0.75" width="22" height="22" fill="url(#pattern0_checkmark)" />
            <defs>
                <pattern id="pattern0_checkmark" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_checkmark" transform="scale(0.0151515)" />
                </pattern>
                <image
                    id="image0_checkmark"
                    width="66"
                    height="66"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyM0M3NzhDMjI2OTExRUE5RDZDRTU5QUJEQzkwNEE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyM0M3NzhEMjI2OTExRUE5RDZDRTU5QUJEQzkwNEE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjIzQzc3OEEyMjY5MTFFQTlENkNFNTlBQkRDOTA0QTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjIzQzc3OEIyMjY5MTFFQTlENkNFNTlBQkRDOTA0QTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5x0bO4AAAD7klEQVR42uScsWrjQBCGN0KwUhoHbFyZgNtw5zJdijxDHsBNIM29QlIkT3CQ5uCaewA/gwtXd6UDbgOHK6OA01je7nbNyNkssrSWZqSVbmAQceRdz+d/dkerlU++PP5mRMbhGMLxFI7BgfOE8foWjhs4xgfOK2Uv95e7o08UfBYAbvFeW0OD4iNDCI8I3BYqN9ozlSJcAcGNbz8oEbwtGGEoLy4LpCyIM+Lgs6Ao7wAApZK3MjB8hDSoGsIhpXQhXQqpwy/YcdcBAGkKCYqqw2+oCtDV4ReA0GFuG0/5kgQGiCZB0K1zDAy/pRCOhpEHoskQ0mAUAsFbAMGEcXDw9CymyLZYADHxYxQROjxFYlwNCxtFJGVzmyCY6c7zQHCtYGqrpaaI/x+khFWK+BnX/xSm0u5c+rX0ofSB9D78byV9Kf1V+lT6X+nrCqAIE4S+qEJhIwBwBcH3jP+rvy+kR3DODIDMCceKfW1xAmuWlFeUSgVj6TcpweeZgjKR/otAHft1jJf7S+EZgXMCFfyUflcAQqKSO2hjRDRWfJo1QoKZQn3wZ5B7WbuAtrBhqJjDr09/uEc4HjwXVEGWOrBhcF0RIXIBpcaEB2QIOowH6APLVOwhhSLGSOmQlSZj7EY95EpyBLMDtd0gpoiK/RRTEWdQJ/QqANGDvs4wFYFVO5xDIVSVXUGfGANmgKmIa61crsL60CeaIrBsWFFa6OkxxASBNW0OariSHLioiH4NILD63FWWgjXXVi6mxqrBQAWmIpY1BLB0cYx4hfWDqiyCPp0DMa04PVbQJxqILVJ6qDXGWYUgZtBn6fFBMcBUxBq+oaiitJgyxOU7BWLDPnaqlTW10DqpAMSE4S3qqtg3FOsRaqF1QQhhAX0wpLTYKyIGVQjEFHkkSpEI2sZc0d5tMaJas1Sy/YYMI4I2Ke5zsKSgihHHCRPGAikdKCComOPkvkZqziDCuJX+o6A6InjvLQGET7H62ovJ3mbsmzwqn7/DdJd1y08PfsVob/ntZwulBh0Eg/SgvPc5hwIoAVLnTWChxcxMEIkqKLcFrMHnrH7bmNMnM1SxZc1eo7AqqXU1pIFQJ70RzCAuWepebc9GNi1TQ2psfsZAsiWaRZxKiTxFtDFFMh9f8Cxk9N4CCO956Z63F1ufxzsNhxBnnWTzmELcYBg6BFEWhNlAp20QbEGkwXB5U2oyO5A8ypR0kFyydx2dWgs/+ugX7Ex15NKDboVUUBaEefVWlzoE+9hCXNsDsDoMXR1VjR9J8KVUgAUibewItSouQFaKWfqjAMAEcWix49ifTbAJ3KxrnPzZBP2D8bxKTrNaf0gjsX8CDAARgBnfIAUlqgAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    )
}

function DecorativeIcon() {
    return (
        <svg
            className="w-10 h-14 opacity-50"
            viewBox="0 0 40 56"
            fill="none"
        >
            <g opacity="0.5" clipPath="url(#clip0_2058_375)">
                <mask id="mask0_2058_375" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="-16" y="0" width="56" height="56">
                    <path d="M40 0H-16V56H40V0Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_2058_375)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 0H9.99999V23.1716L-6.38477 6.78678L-9.21319 9.61523L7.17157 26H-16V30H7.17154L-9.21319 46.3848L-6.38477 49.2131L9.99999 32.8283V56H14V32.8283L30.3848 49.2131L33.2131 46.3848L16.8283 30H40V26H16.8283L33.2131 9.6152L30.3848 6.78678L14 23.1715V0Z"
                        fill="url(#paint0_linear_2058_375)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient id="paint0_linear_2058_375" x1="-10.26" y1="4.48" x2="12" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8957BD"></stop>
                    <stop offset="1" stopColor="#667EEA"></stop>
                </linearGradient>
                <clipPath id="clip0_2058_375">
                    <rect width="56" height="56" fill="white" transform="translate(-16)"></rect>
                </clipPath>
            </defs>
        </svg>
    )
}

const achievements = [
    {
        text: "Sold Over<b> <u>130+ Crores</u></b> in Sales for clients."
    },
    {
        text: "TOP Players Trust Us With Their Marketing!"
    },
    {
        text: "Managed An Email List Of Over <b style=\"\"><u>640,000+</u></b> Names OVERALL..."
    },
    {
        text: "<b><u>Inventor</u></b> Of The Reverse Funnels"
    },
    {
        text: "The<b> <u>#1 Launch Expert</u></b> Of India!"
    }
]

export default function AboutSection() {
    return (
        <div className="w-full bg-white relative overflow-hidden py-[40px] px-5 md:px-[20px] lg:px-[40px]">
            <div className="max-w-[1140px] mx-auto">
                {/* Inner Container with Gradient Background (matches screenshot) */}
                <div className="relative rounded-2xl p-6 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                bg-gradient-to-br from-[#1B2B59] via-[#142247] to-[#0B1834]">

                    {/* subtle bottom inner highlight like the card edge */}
                    <div className="pointer-events-none absolute inset-x-3 bottom-2 h-[2px] rounded-full bg-white/10" />

                    {/* LEFT decorative star (subtle) */}
                    <div className="pointer-events-none absolute -left-3 md:-left-6 top-4 opacity-60">
                        <DecorativeIcon />
                    </div>
                    {/* RIGHT decorative star (subtle) */}
                    <div className="pointer-events-none absolute right-3 md:right-5 bottom-2 opacity-50  ">
                        <DecorativeIcon />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-white font-extrabold tracking-tight text-[26px] md:text-[32px] lg:text-[36px]">
                            Who Is Shubh and Why Should You Care?
                        </h2>

                        {/* underline line under the heading */}
                        <div className="mt-4 flex justify-center">
                            <span className="h-[6px] w-[160px] rounded-full bg-gradient-to-r from-white/60 via-white to-white/60" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                        {/* Photo with blue circular glow behind */}
                        <div className="relative w-full lg:w-auto flex-shrink-0">
                            {/* radial glow */}
                            <div className="absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2
                      h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] rounded-full
                      bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35)_0%,rgba(59,130,246,0.15)_45%,rgba(0,0,0,0)_70%)]
                      ring-1 ring-blue-300/10" />
                            <div className="relative z-10 max-w-[300px] lg:max-w-[380px] mx-auto lg:mx-0">
                                <Image
                                    src="https://lp.launchatscale.com/wp-content/uploads/2024/05/Shubh_pro-1024x1024.png"
                                    alt="Shubh - Launch Expert"
                                    width={1024}
                                    height={1024}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Achievements list with separators */}
                        <div className="flex-1 w-full">
                            <ul className="text-left">
                                {achievements.map((achievement, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 py-4 border-b border-white/15 last:border-0"
                                    >
                                        <div className="mt-[2px] flex-shrink-0">
                                            <CheckmarkIcon />
                                        </div>
                                        <span
                                            className="text-white/95 text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed font-bold"
                                            dangerouslySetInnerHTML={{ __html: achievement.text }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}