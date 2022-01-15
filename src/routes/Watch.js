import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchVideoById } from "../utils/videos";

function Watch() {
  const [video, setVideo] = useState(null);
  const [search] = useSearchParams();

  useEffect(() => {
    fetchVideoById(search.get("v"))
      .then(data => setVideo(data))
      .catch(err => setVideo({ error: err.message }));
  }, []);

  if (!video) {
    return <p>Loading...</p>;
  } else if (video.error) {
    return <p>An error occurred: {video.error}</p>
  }

  return <p>{JSON.stringify(video)}</p>;
}

export default Watch;
