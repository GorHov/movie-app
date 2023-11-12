import React, { useState } from 'react';
import './MainMenu.css';
import iconHome from '../../assets/icons/46.png';
import iconTVShows from '../../assets/icons/47.png';
import iconMovies from '../../assets/icons/53.png';
import iconGenres from '../../assets/icons/54.png';
import iconWatchLater from '../../assets/icons/56.png';
import iconSearch from '../../assets/icons/Search.png';
import avatar from '../../assets/images/avatar.jpg';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen ? 'main-menu expanded' : 'main-menu';

  return (
    <div className={menuClass} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {isOpen && <div className="profile-section">
        <img src={avatar} alt="User Avatar" className="user-avatar" />
         <span>Daniel</span>
      </div>}
      <div className="menu-item">
        <img src={iconSearch} alt="Search" />
        {isOpen && <span>Search</span>}
      </div>
      <div className={`${isOpen ? 'menu-item' : 'menu-item circle'} `}>
        <img src={iconHome} alt="Home" />
        {isOpen && <span>Home</span>}
      </div>
      <div className="menu-item">
        <img src={iconTVShows} alt="TV Shows" />
        {isOpen && <span>TV Shows</span>}
      </div>
      <div className="menu-item">
        <img src={iconMovies} alt="Movies" />
        {isOpen && <span>Movies</span>}
      </div>
      <div className="menu-item">
        <img src={iconGenres} alt="Genres" />
        {isOpen && <span>Genres</span>}
      </div>
      <div className="menu-item">
        <img src={iconWatchLater} alt="Watch Later" />
        {isOpen && <span>Watch Later</span>}
      </div>
      
      {isOpen && (
        <div className="menu-bottom">
          <div className="menu-item">Language</div>
          <div className="menu-item">Get Help</div>
          <div className="menu-item">Exit</div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
