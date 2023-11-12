import React, { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import FeaturedVideo from "./components/FeaturedVideo/FeaturedVideo";
import TrendingNowCarousel from "./components/TrendingNowCarousel/TrendingNowCarousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingNowVideos, fetchVideos } from "./redux/actions/videoActions";

const App = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.video);
  const { trendingVideos } = useSelector((state) => state.video);
  const [data, setData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    if (selectedVideo && selectedVideo.VideoUrl) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [selectedVideo, selectedVideo?.VideoUrl]);

  useEffect(() => {
    if (!videos.length) {
      dispatch(fetchVideos());
      setSelectedVideo(videos);
    }
    // eslint-disable-next-line
  }, [videos.length]);

  useEffect(() => {
    dispatch(fetchTrendingNowVideos());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const storedVideo = sessionStorage.getItem("selectedVideo");

    if (storedVideo && !filtered && trendingVideos.length) {
      const selectedVideo = JSON.parse(storedVideo);
      const filteredData = trendingVideos.filter(
        (item) => item.Id !== selectedVideo.Id
      );
      filteredData.unshift(selectedVideo);
      setData(filteredData);
      setFiltered(true);
    } else if (!data && trendingVideos.length) {
      setData(trendingVideos);
    }
    // eslint-disable-next-line
  }, [data, trendingVideos.length]);

  const onSelectVideo = async (video) => {
    sessionStorage.setItem("selectedVideo", JSON.stringify(video));
    setSelectedVideo(video);
    setShowVideo(false);
  };

  return (
    <div className="App">
      <MainMenu />
      <FeaturedVideo video={selectedVideo} showVideo={showVideo} />
      <TrendingNowCarousel data={data} onSelectVideo={onSelectVideo} />
    </div>
  );
};

export default App;
