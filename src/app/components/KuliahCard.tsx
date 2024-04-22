import { Kuliah } from "@/types";
import Link from "next/link";

interface Props {
  kuliah: Kuliah;
}

export default function KuliahCard({ kuliah }: Props) {
  const { Organisation, Day, Prayer, Details, Topic, Speaker } = kuliah;
  return (
    <Link
      href={{
        pathname: "details",
        query: { Organisation, Prayer, Day, Details },
      }}
    >
      <div id="list-item" className="rounded-lg border shadow py-2 px-4 mb-3">
        <div className="text-white font-light">
          <span className="bg-gray-500 text-xs px-1 rounded mr-1">
            Kuliah {Prayer}
          </span>
        </div>
        <h2 className="font-medium">{Topic}</h2>
        <p className="text-xs -mt-0.5 text-gray-600">By {Speaker}</p>
        <div className="my-2 text-xs text-gray-600">
          <p>
            🗓️ {Day}
            {Details && `, ${Details}`}
          </p>
          <p>🕌 {Organisation}</p>
        </div>
      </div>
    </Link>
  );
}
