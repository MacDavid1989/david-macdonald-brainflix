import Logo from '../../assets/logo/logo-brainflix.svg';
import Upload from '../../assets/icons/svg/icon-upload.svg';
import Mohan from '../../assets/images/mohan-muruge.jpg';

function SearchBar() {
    return (
        <section className="search-bar">
            <img src={Logo} alt=""/>
            <form>
                <input value="Search" readOnly></input>
                <div>
                    <button><img src={Upload} alt=""/>UPLOAD</button>
                    <img src={Mohan} height={48} width={48} alt=""/>
                </div>
            </form>
        </section>
    );
};

export default SearchBar;