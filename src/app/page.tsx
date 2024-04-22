"use client";

import { kuliahList } from "@/data";
import { Kuliah } from "@/types";
import { fuzzySearch } from "@/utils";
import { useState } from "react";
import ListItem from "./components/KuliahCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedPrayer, setSelectedPrayer] = useState("");

  const searchResults = searchTerm
    ? fuzzySearch(kuliahList, searchTerm)
    : kuliahList;

  const filterByMosque = (items: Kuliah[]) => {
    if (!selectedPrayer) {
      return items;
    }

    return items.filter((item) => item.Prayer === selectedPrayer);
  };

  const filterByDay = (items: Kuliah[]) => {
    if (!selectedDay) {
      return items;
    }

    return items.filter((item) => item.Day === selectedDay);
  };

  const filterByPrayer = (items: Kuliah[]) => {
    if (!selectedPrayer) {
      return items;
    }

    return items.filter((item) => item.Prayer === selectedPrayer);
  };

  const filteredResults = filterByPrayer(
    filterByDay(filterByMosque(searchResults))
  );

  const renderKuliahList = () => {
    return filteredResults.map((singleKuliah) => (
      <ListItem
        kuliah={singleKuliah}
        key={`${singleKuliah.Topic}-${singleKuliah.Day}`}
      />
    ));
  };
  return (
    <main>
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="font-bold text-xl my-2">Kuliah in Mosques</h1>
        <div>
          <div>
            <label
              htmlFor="Search"
              className="mb-2 text-sm font-medium sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search By Topic or Speaker"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 my-2 text-xs">
              <div>
                <select
                  id="Day"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5"
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  <option value="">Any Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div>
                <select
                  id="Prayer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1.5"
                  onChange={(e) => setSelectedPrayer(e.target.value)}
                >
                  <option value="">Any Prayer</option>
                  <option value="Subuh">Subuh</option>
                  <option value="Dhuha">Dhuha</option>
                  <option value="Zuhur">Zuhur</option>
                  <option value="Asar">Asar</option>
                  <option value="Maghrib">Maghrib</option>
                  <option value="Isyak">Isyak</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="listing" className="p-4 bg-white rounded-xl">
        <div className=" max-w-2xl mx-auto">
          {filteredResults?.length > 0 ? (
            renderKuliahList()
          ) : (
            <p className="text-gray-600 py-8 text-center">No Results.</p>
          )}
        </div>
      </div>
    </main>
  );
}
