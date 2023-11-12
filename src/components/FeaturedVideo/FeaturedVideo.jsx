import React from 'react';
import './FeaturedVideo.css';
import playIcon from '../../assets/icons/play.png';
import {formatDuration} from '../../utils/helpers'

const FeaturedVideo = ({ video, showVideo }) => {
  return (
    <>
      {showVideo ? (
        <div className={`featured-video ${showVideo ? 'video-active' : ''}`}>
            <video autoPlay muted loop className="video-player">
              <source src={video.VideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Video info displayed below video player */}
            <div className="video-info">
              <div className="video-metadata">
                <span className="category">{video?.Category}</span>
                <img src={`images/${video?.TitleImage}`} alt={video?.Title} />
                <div>
                  <span className="release-year">{video?.ReleaseYear}</span>
                  <span className="mpa-rating">{video?.MpaRating}</span>
                  <span className="video-duration">
                    {formatDuration(video?.Duration)}
                  </span>
                </div>
              </div>
              <p className="video-description">{video?.Description}</p>
              <div className="button-group">
                <button className="button play">
                  <img src={playIcon} alt="play" />
                  Play
                </button>
                <button className="button more-info">More Info</button>
              </div>
            </div>
          </div>
      ) : (
        <div
          className="featured-video"
          style={{ backgroundImage: `url(images/${video?.CoverImage})` }}
        >
          <div className="video-info">
            <div className="video-metadata">
              <span className="category">{video?.Category}</span>
              <img src={`images/${video?.TitleImage}`} alt={video?.Title} />
              <div>
                <span className="release-year">{video?.ReleaseYear}</span>
                <span className="mpa-rating">{video?.MpaRating}</span>
                <span className="video-duration">
                  {formatDuration(video?.Duration)}
                </span>
              </div>
            </div>
            <p className="video-description">{video?.Description}</p>
            <div className="button-group">
              <button className="button play">
                <img src={playIcon} alt="play" />
                Play
              </button>
              <button className="button more-info">More Info</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedVideo;
