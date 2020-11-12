import {Link} from 'react-router-dom';
import './SearchBar.scss';
import logo from '../../assets/logo/logo-brainflix.svg';
import upload from '../../assets/icons/svg/icon-upload.svg';
import mohan from '../../assets/images/mohan-muruge.jpg';

function SearchBar({onSearchClick}) {
    return (
        <section className="search-bar">
            <Link to="/">
                <img className="search-bar__logo" src={logo} alt=""/>
            </Link>
            <div className="search-bar__form" onSubmit={(e) => onSearchClick(e, e.target)}>
                <input type="search" name="searchBarInput" className="search-bar__input" placeholder="Search"></input>
                <div className="search-bar__wrapper">
                    <Link to="/upload" className="link-upload">
                        <button className="button upload">
                            <img className="upload__icon" src={upload} alt=""/>
                            <p className="upload__text">UPLOAD</p>
                        </button>
                    </Link>
                    <img className="search-bar__image" src={mohan} alt=""/>
                </div>
            </div>
        </section>
    )
};

export default SearchBar;