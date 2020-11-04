import Likes from '../../assets/icons/svg/icon-likes.svg';
import Views from '../../assets/icons/svg/icon-views.svg';

function Article() {
    return (
        <article>
            <h1>BMX Rampage: 2018 Highlights</h1>
            <div>
                <div>
                    <h2>By Red Cow</h2>
                    <h5>12/18/2018</h5>
                </div>
                <div>
                    <div>
                        <img src={Views}/>
                        <span>1,001,023</span>
                    </div>
                    <div>
                        <img src={Likes}/>
                        <span>110,985</span>
                    </div>
                </div>
            </div>
            <p>
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what is
                possible on two wheels, unleashing some of the
                biggest moments the sport has ever seen. While
                mother nature only allowed for one full run before
                the conditions made it impossible to ride, that was
                all that was needed for event veteran Kyle Strait,
                who won the event for the second time -- eight years
                after his first Red Cow Rampage title
            </p>
        </article>
    )
}

export default Article;