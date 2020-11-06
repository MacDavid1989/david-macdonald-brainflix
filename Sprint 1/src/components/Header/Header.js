import SearchBar from "../SearchBar/SearchBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Header(props) {
    return (
        <header className="header">
            <SearchBar/>
            <VideoPlayer mainVideo={props.mainVideo}/>
        </header>
    )
};

export default Header;