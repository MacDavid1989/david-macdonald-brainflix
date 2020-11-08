import './SearchBar.scss';
import logo from '../../assets/logo/logo-brainflix.svg';
import upload from '../../assets/icons/svg/icon-upload.svg';
import mohan from '../../assets/images/mohan-muruge.jpg';

function SearchBar({onSearchClick}) {
    return (
        <section className="search-bar">
            <img className="search-bar__logo" src={logo} alt=""/>
            <form className="search-bar__form" onSubmit={(e) => onSearchClick(e, e.target)}>
                <input name="search-bar__input" className="search-bar__input" placeholder="Search" required></input>
                <div className="search-bar__wrapper">
                    <button className="button upload">
                        <img className="upload__icon" src={upload} alt=""/>
                        <p className="upload__text">UPLOAD</p>
                    </button>
                    <img className="search-bar__image" src={mohan} alt=""/>
                </div>
            </form>
        </section>
    )
};

export default SearchBar;