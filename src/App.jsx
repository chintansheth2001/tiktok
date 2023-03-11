import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SidebarRight } from "./components/SidebarRight";
import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";
import { OrderData, orderVideos } from "./components/OrderData";

import data from "./components/tiktok_json.json";
import userData from "./components/user.json";

function App() {
  const [videos, setVideos] = useState(data.data.videos);
  const [user, setUser] = useState(userData.data);
  const [filterOpen, setFilterOpen] = useState(false);
  const [orderValue, setOrderValue] = useState({
    orderCol: "create_time",
    isAsc: true,
  });

  const [filterValue, setFilterValue] = useState({
    download_count: {
      title: "Download",
      min: 6,
      max: 114,
      vmin: 6,
      vmax: 114,
    },
    comment_count: {
      title: "Comment",
      min: 198,
      max: 15339,
      vmin: 198,
      vmax: 15339,
    },
    play_count: {
      title: "Video Play",
      min: 105472,
      max: 275063763,
      vmin: 105472,
      vmax: 275063763,
    },
  });

  const filterVideos = (videos, filterValue) => {
    let argVideo = videos;

    argVideo = videos.filter((video) => {
      return (
        video.download_count >= filterValue.download_count.vmin &&
        video.download_count <= filterValue.download_count.vmax &&
        video.comment_count >= filterValue.comment_count.vmin &&
        video.comment_count <= filterValue.comment_count.vmax &&
        video.play_count >= filterValue.play_count.vmin &&
        video.play_count <= filterValue.play_count.vmax
      );
    });

    return argVideo;
  };

  useEffect(() => {
    const userDetails = userData.data;
    setUser(userDetails);

    const dataVideosList = filterVideos([...data.data.videos], filterValue);
    const orderVideosList = orderVideos([...dataVideosList], orderValue);

    setVideos(orderVideosList);
    console.log("videos updated", videos);
  }, [orderValue, filterValue]);

  return (
    <div>
      <Header />

      <main className={`px-4 mt-16  ${filterOpen && "pr-64"} `}>
        <section className="max-w-2xl mx-auto my-3">
          <UserInfo
            user={user.user}
            stats={user.stats}
            handleSidepanel={setFilterOpen}
            filterOpen={filterOpen}
          />
          <OrderData setOrderValue={setOrderValue} orderValue={orderValue} />
          <div className="grid grid-cols-4 gap-2 ">
            {videos.map((video) => {
              return <Card key={video.video_id} video={video} />;
            })}
          </div>
        </section>
      </main>
      {filterOpen && (
        <SidebarRight
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      )}
    </div>
  );
}

export default App;
