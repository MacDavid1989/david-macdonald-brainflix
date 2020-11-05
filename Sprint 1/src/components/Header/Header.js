import SearchBar from "../SearchBar/SearchBar";
import Player from "../Player/Player";

function Header(props) {
    return (
        <header className="header">
            <SearchBar/>
            <Player mainVideo={props.mainVideo}/>
        </header>
    )
};

export default Header;