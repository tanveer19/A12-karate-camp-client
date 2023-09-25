import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://2-21-a12-summer-camp-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);
  return [instructors, loading];
};

export default useInstructors;
