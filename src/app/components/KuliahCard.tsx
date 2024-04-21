import { kuliahList } from "@/data";
import { Kuliah } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  kuliah: Kuliah;
}

export default function KuliahCard({ kuliah }: Props) {
  const { Organisation, Day, Prayer, Details, Topic, Speaker } = kuliah;
  return (
    <Link href={{ pathname: 'details', query: { Organisation, Prayer, Day, Details } }}>
      <div id="list-item" className="rounded-lg border shadow py-2 px-4 mb-3">
        <h2 className="font-medium">{Topic}</h2>
        <div className="text-white font-light -mt-1">
          <span className="bg-gray-500 text-xs px-1 rounded mr-1">Kuliah {Prayer}</span>
        </div>
        <div className="my-1 text-xs text-gray-600">
          <p>🗓️ {Day}{Details && `, ${Details}`}</p>
          <p>👳🏽 {Speaker}</p>
          <p>📍 {Organisation}</p>
        </div>
      </div>
    </Link>
  );
}
