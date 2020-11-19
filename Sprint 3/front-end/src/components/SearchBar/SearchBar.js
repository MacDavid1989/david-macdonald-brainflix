import {Link} from 'react-router-dom';
import './SearchBar.scss';
import logo from '../../assets/logo/logo-brainflix.svg';
import upload from '../../assets/icons/svg/icon-upload.svg';
import mohan from '../../assets/images/mohan-muruge.jpg';

// SearchBar component
function SearchBar() {
    return (
        <section className="search-bar">
            {/* Router link to act as anchor tag and link logo to Home component via the specified path */}
            <Link to="/">
                <img className="search-bar__logo" src={logo} alt="BrainFlix play log and name"/>
            </Link>
            {/* search bar form */}
            <div className="search-bar__form">
                {/* search input field */}
                <input type="search" name="searchBarInput" className="search-bar__input" placeholder="Search"></input>
                <div className="search-bar__wrapper">
                    {/* Router link to anchor upload button to upload component via the /upload route path */}
                    <Link to="/upload" className="link-upload">
                        <button className="button upload">
                            <img className="upload__icon" src={upload} alt="plus sign"/>
                            <p className="upload__text">UPLOAD</p>
                        </button>
                    </Link>
                    <img className="search-bar__image" src={mohan} alt="user profile pic"/>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;