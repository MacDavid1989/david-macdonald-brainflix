import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Aside from '../components/Aside/Aside';

function Home(props) {

    return (
        <>
            <Header mainVideo={props.mainVideo}/>
            <Main/>
            <Aside/>
        </>
    );
};

export default Home;