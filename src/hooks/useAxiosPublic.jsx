import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://2-21-a12-summer-camp-server.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
