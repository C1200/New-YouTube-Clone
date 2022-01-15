import Base from "../Base";
import { VideoGrid, Video } from "../components/VideoGrid";

function Home() {
  return (
    <Base>
      <VideoGrid style={{ padding: "18px" }}>
        <Video
          title="Test"
          views={0}
          timestamp={0}
          thumbnail="https://c1200.js.org/YouTube-Clone/assets/img/test-video2.png"
        />
        <Video
          title="Test"
          views={0}
          timestamp={0}
          thumbnail="https://c1200.js.org/YouTube-Clone/assets/img/test-video2.png"
        />
        <Video
          title="Test"
          views={0}
          timestamp={0}
          thumbnail="https://c1200.js.org/YouTube-Clone/assets/img/test-video2.png"
        />
      </VideoGrid>
    </Base>
  );
}

export default Home;
