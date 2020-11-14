import './Header.scss';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Header({mainVideo}) {
    console.log(mainVideo)
    
    return (
        <header className="header">
            <VideoPlayer mainVideo={mainVideo}/>
        </header>
    )
};

export default Header;