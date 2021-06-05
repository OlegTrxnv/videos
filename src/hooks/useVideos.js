// Custom Hook
// Custom hooks is 2nd best way to create reusable code (after creating reusable components)
// Extracting only hook-related code out of function (not JSX in return(), use components for that)
// Use at least 1 primitive hook while creating custom hook
// Custom hook serves 1 purpose only!
// Good for data fetching
// Define inputs and outputs of your hook

import { useEffect, useState } from "react";
import youtube from "../api/youtube";

// defaultSearchTerm is the only input for the hook
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  // outputs for the hook, multiple can be returned as [] or {}
  return [videos, search];
};

export default useVideos;
