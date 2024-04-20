import Fuse from "fuse.js";
import { Kuliah } from "./types";

export const fuzzySearch = (items: Kuliah[], searchTerm: string): Kuliah[] => {
  const options = {
    isCaseSensitive: false,
    findAllMatches: true,
    includeMatches: false,
    includeScore: false,
    useExtendedSearch: false,
    minMatchCharLength: 3,
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    keys: ["Topic", "Speaker"],
  };

  const fuse = new Fuse(items, options);
  const fuseSearchResult = fuse.search(searchTerm);
  return fuseSearchResult.map((result) => result.item);
};
