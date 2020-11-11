import './Header.scss';
import SearchBar from "../SearchBar/SearchBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Header({mainVideo, onSearchClick}) {
    return (
        <header className="header">
            <SearchBar onSearchClick={onSearchClick}/>
            <VideoPlayer mainVideo={mainVideo}/>
        </header>
    )
};

export default Header;