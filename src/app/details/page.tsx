"use client";

import { kuliahList } from "@/data";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RWebShare } from "react-web-share";

export default function Details() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const org = searchParams.get("Organisation");
  const day = searchParams.get("Day");
  const prayer = searchParams.get("Prayer");
  const details = searchParams.get("Details");

  const kuliah = kuliahList.find(
    (kuliah) =>
      kuliah.Organisation === org &&
      kuliah.Day === day &&
      kuliah.Prayer === prayer &&
      kuliah.Details === details
  );
  if (!kuliah) {
    router.back();
  }

  const { Topic, Day, Prayer, Details, Speaker, Organisation } = kuliah!;

  const getShareText = () => {
    const text = `${`☪️ Kuliah ${Prayer}: ${Topic}`.toUpperCase()}

🗓️ ${Day}${Details && `, ${Details}`}
🎙️ ${Speaker}
🕌 ${Organisation}

`;

    return text;
  };

  return (
    <main className="min-h-full  max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6 text-sm">
        <Link
          href="/"
          className="hover:underline text-gray-500 hover:text-gray-600 text-center"
        >
          ← Back to Listing Page
        </Link>
      </div>

      <div
        id="list-item"
        className="rounded-lg border shadow py-4 px-6 mb-3 bg-white"
      >
        <div className="text-white font-light my-1">
          <span className="bg-gray-500 px-1 rounded mr-1">Kuliah {Prayer}</span>
        </div>
        <h2 className="font-medium text-xl">{Topic}</h2>
        <p className=" text-gray-600 text-sm">By {Speaker}</p>
        <div className=" text-gray-600 my-4">
          <p>
            🗓️ {Day}
            {Details && `, ${Details} `}
          </p>
          <p>🕌 {Organisation}</p>
        </div>
        <RWebShare
          data={{
            text: getShareText(),
          }}
        >
          <button className="mt-6 bg-gray-900 text-white py-2 px-4 block w-full rounded-lg">
            Share This 📲
          </button>
        </RWebShare>
        <p className="text-xs text-center my-1 text-gray-600">
          May you be rewarded for inspiring others 🤗
        </p>
      </div>
    </main>
  );
}
