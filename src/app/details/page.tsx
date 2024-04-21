'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { kuliahList } from "@/data";
import { RWebShare } from "react-web-share";


export default function Details() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const org = searchParams.get("Organisation")
    const day = searchParams.get("Day")
    const prayer = searchParams.get("Prayer")
    const details = searchParams.get("Details")

    const kuliah = kuliahList.find(kuliah => kuliah.Organisation === org && kuliah.Day === day && kuliah.Prayer === prayer && kuliah.Details === details)
    if (!kuliah) {
        router.back()
    }

    const { Topic, Day, Prayer, Details, Speaker, Organisation } = kuliah!

    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://kuliah.sg"

    const getShareText = () => {
        const text = `${`☪️ Kuliah ${Prayer}: ${Topic}`.toUpperCase()}
===
🗓️ ${Day}${Details && `, ${Details}`}
👳🏽‍♂️ ${Speaker}
🕌 ${Organisation}
===
`

        return text
    }

    return (
        <main className="bg-gray-200 min-h-screen px-4 py-8">
            <div id="list-item" className="rounded-lg border shadow py-4 px-6 mb-3 bg-white">
                <h2 className="font-medium text-xl">{Topic}</h2>
                <div className="text-white font-light">
                    <span className="bg-gray-500 px-1 rounded mr-1">Kuliah {Prayer}</span>
                </div>
                <div className="my-1 text-gray-600">
                    <p>🗓️ {Day}{Details && `, ${Details} `}</p>
                    <p>👳🏽 {Speaker}</p>
                    <p>📍 {Organisation}</p>
                </div>
                <RWebShare
                    data={{
                        text: getShareText(),
                        url: currentUrl
                    }}
                >
                    <button className='mt-4 bg-gray-900 text-white py-2 px-4 block w-full rounded-lg'>Share This 📲</button>
                </RWebShare>
                <p className='text-xs text-center my-1 text-gray-600'>May you attain amal jariyah for sharing 🤗</p>
            </div>
        </main>
    );
}