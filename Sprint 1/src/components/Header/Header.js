import SearchBar from "../SearchBar/SearchBar";
import Hero from "../Hero/Hero";

function Header(props) {
    return (
        <header>
            <SearchBar/>
            <Hero mainVideo={props.mainVideo}/>
        </header>
    );
}

export default Header;