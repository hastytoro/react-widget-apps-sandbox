import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  // Step 5
  const [urlPath, setUrlPath] = useState(window.location.pathname);
  // Step 4
  useEffect(() => {
    const onLocationChange = () => {
      setUrlPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return urlPath === path ? children : null;
};

export default Route;
