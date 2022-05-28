import React, { useEffect } from "react";

export default function useClickOutside (ref,closeComponent){

  useEffect(() => {
    const handleClickOutside =(event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeComponent();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
