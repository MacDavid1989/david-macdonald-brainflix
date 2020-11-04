import Image0 from '../../assets/images/video-list-0.jpg';
import Image1 from '../../assets/images/video-list-1.jpg'; 
import Image2 from '../../assets/images/video-list-2.jpg'; 
import Image3 from '../../assets/images/video-list-3.jpg'; 
import Image4 from '../../assets/images/video-list-4.jpg'; 
import Image5 from '../../assets/images/video-list-5.jpg'; 
import Image6 from '../../assets/images/video-list-6.jpg'; 
import Image7 from '../../assets/images/video-list-7.jpg'; 
import Image8 from '../../assets/images/video-list-8.jpg'; 


const sideVideo = [
    {
        id: '1',
        title: 'type of <string>',
        channel: 'type of <string>',
        image: Image0
    },
    {
        id: '2',
        title: 'Become A Travel Pro In One Easy Lesson…',
        channel: 'Scotty Cranmer',
        image: Image1
    },
    {
        id: '3',
        title: 'Les Houches The Hidden Gem Of The…',
        channel: 'Scotty Cranmer',
        image: Image2
    },
    {
        id: '4',
        title: 'Travel Health Useful Medical Information…',
        channel: 'Scotty Cranmer',
        image: Image3
        },
    {
        id: '5',
        title: 'Cheap Airline Tickets Great Ways To Save',
        channel: 'Emily Harper',
        image: Image4
        },
    {
        id: '6',
        title: 'Take A Romantic Break In A Boutique Hotel',
        channel: 'Ethan Owen',
        image:  Image5
       },
    {
        id: '7',
        title: 'Choose The Perfect Accommodations',
        channel: 'Lydia Perez',
        image:  Image6
       },
    {
        id: '8',
        title: 'Cruising Destination Ideas',
        channel: 'Timothy Austin',
        image: Image7    
    },
    {
        id: '9',
        title: 'Train Travel On Track For Safety',
        channel: 'Scotty Cranmer',
        image: Image8
    },
];

function Aside() {
    return (
        <aside>
            <h3>NEXT VIDEO</h3>
            {sideVideo.map(video =>
                <div>
                    <img src={video.image} alt='' height={50} width={50}/>
                    <div>
                        <h4>{video.title}</h4>
                        <h5>{video.channel}</h5>
                    </div>
                </div>
            )}
        </aside>
    )
}

export default Aside;