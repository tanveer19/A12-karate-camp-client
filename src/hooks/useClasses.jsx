import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const useClasses = () => {
  // const [classes, setClasses] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://2-21-a12-summer-camp-server.vercel.app/classes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClasses(data);
  //       setLoading(false);
  //     });
  // }, []);
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://2-21-a12-summer-camp-server.vercel.app/classes"
      );
      return res.json();
    },
  });
  return [classes, loading, refetch];
};

export default useClasses;
