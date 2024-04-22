import { Kuliah } from "@/types";
import Link from "next/link";

interface Props {
  kuliah: Kuliah;
}

export default function KuliahCard({ kuliah }: Props) {
  const { Id, Masjid, Day, Prayer, Timing, Location, Topic, Speaker } = kuliah;
  return (
    <Link
      href={{
        pathname: Id,
      }}
    >
      <div id="list-item" className="rounded-lg border shadow py-2 px-4 mb-3">
        <div className="text-white font-light">
          <span className="bg-teal-600 text-xs px-1 rounded mr-1">
            Kuliah {Prayer}
          </span>
        </div>
        <h2 className="font-medium">{Topic}</h2>
        <p className="text-xs -mt-0.5 text-gray-600">By {Speaker}</p>
        <div className="my-2 text-xs text-gray-600">
          <p>
            🗓️ {Day}
            {Timing && `, ${Timing}`}
          </p>
          <p>
            🕌 Masjid {Masjid}
            {Location && `, ${Location}`}
          </p>
        </div>
      </div>
    </Link>
  );
}
