import { Kuliah } from "@/types";
import Link from "next/link";

interface Props {
  kuliah: Kuliah;
}

export default function KuliahCard({ kuliah }: Props) {
  const { Id, Masjid, Day, Prayer, Timing, Location, Topic, Speaker } = kuliah;
  return (
    <Link href={{ pathname: Id }}>
      <div className="flex rounded-lg border shadow-md overflow-hidden mb-4 bg-white">
        {/* Teal left section */}
        <div className="bg-teal-700 text-white p-3 flex flex-col justify-center items-center w-24 text-center rounded-l-lg">
          <span className="text-lg font-semibold">{Prayer}</span>
          <span className="text-sm mt-1">{Day}</span>
          {Timing && <span className="text-xs">({Timing})</span>}
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-lg text-gray-800 leading-tight">{Topic}</h2>
            <p className="text-sm text-gray-600">By {Speaker}</p>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            <p className="">🕌 Masjid {Masjid}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
