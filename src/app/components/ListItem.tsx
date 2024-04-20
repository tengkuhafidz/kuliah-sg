import { Kuliah } from "@/types";

interface Props {
  kuliah: Kuliah;
}

export default function ListItem({ kuliah }: Props) {
  const { Organisation, Day, Prayer, Details, Topic, Speaker } = kuliah;
  return (
    <div id="list-item" className="rounded-lg border shadow py-2 px-4 mb-3">
      <h2 className="font-medium">{Topic}</h2>
      <div className="text-white font-light -mt-1">
        <span className="bg-gray-500 text-xs px-1 rounded mr-1">{Prayer}</span>
        <span className="bg-gray-500 text-xs px-1 rounded mr-1">{Day}</span>

        {Details && (
          <span className="bg-gray-500 text-xs px-1 rounded mr-1">
            {Details}
          </span>
        )}
      </div>
      <div className="my-1">
        <p className="text-xs text-gray-600">👳🏽 {Speaker}</p>

        <p className="text-xs text-gray-600">📍 {Organisation}</p>
      </div>
    </div>
  );
}
