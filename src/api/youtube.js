import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: "AIzaSyDU6VwKzPA23a81PkLSN3qmzW4D_LpPC1Y",
  },
});
