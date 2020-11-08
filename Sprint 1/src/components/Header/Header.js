import './Header.scss';
import SearchBar from "../SearchBar/SearchBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Header({mainVideo}) {
    return (
        <header className="header">
            <SearchBar/>
            <VideoPlayer mainVideo={mainVideo}/>
        </header>
    )
};

export default Header;