import Logo from '../../assets/logo/logo-brainflix.svg';
import Mohan from '../../assets/images/mohan-muruge.jpg';
import Upload from '../../assets/icons/svg/icon-upload.svg';

function SearchBar() {
    return (
        <section className="search-bar">
            <a>
                <img src={Logo}/>
            </a>
            <form>
                <input value="Search"></input>
                <div>
                    <button><img src={Upload}/>UPLOAD</button>
                    <img src={Mohan} width={48} height={48}/>
                </div>
            </form>
        </section>
    )
}

export default SearchBar;