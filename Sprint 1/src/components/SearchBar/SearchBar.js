import Logo from '../../assets/logo/logo-brainflix.svg';
import Upload from '../../assets/icons/svg/icon-upload.svg';
import Mohan from '../../assets/images/mohan-muruge.jpg';

function SearchBar() {
    return (
        <section className="search-bar">
            <img className="search-bar__logo" src={Logo} alt=""/>
            <form className="search-bar__form">
                <input className="search-bar__input" value="Search" readOnly></input>
                <div className="search-bar__wrapper">
                    <button className="button__upload"><img className="button__upload-icon" src={Upload} alt=""/>UPLOAD</button>
                    <img className="search-bar__image" src={Mohan} height={48} width={48} alt=""/>
                </div>
            </form>
        </section>
    )
};

export default SearchBar;