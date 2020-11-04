import Image0 from '../assets/images/video-list-0.jpg';
import Image1 from '../assets/images/video-list-1.jpg'; 
import Image2 from '../assets/images/video-list-2.jpg'; 
import Image3 from '../assets/images/video-list-3.jpg'; 
import Image4 from '../assets/images/video-list-4.jpg'; 
import Image5 from '../assets/images/video-list-5.jpg'; 
import Image6 from '../assets/images/video-list-6.jpg'; 
import Image7 from '../assets/images/video-list-7.jpg'; 
import Image8 from '../assets/images/video-list-8.jpg';
import SampleVideo from '../assets/video/brainstation-sample-video.mp4'

//Main Video Object
const mainVideo = {
    id: '1',
    title: "BMX Rampage: 2018 Highlights",
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: "By Red Cow",
    image: Image0,
    views: '1,001,023',
    likes: '110,985',
    duration: 'type of <string>',
    video: SampleVideo,
    timestamp: '2 years ago',
    comments: [
        {
            name:'Micheal Lyons',
            timestamp:'1530744138878',
            comment:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
        },
        {
            name:'Gary Wong',
            timestamp:'1530744238878',
            comment:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He\'s so talented! I wish I can ride like him one day so I can really enjoy myself!'
        },

        {
            name:'Theodore Duncan',
            timestamp:'1530744338878',
            comment:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He\'s definitely my favorite ever!'
        }
    ]
};

// Side Video Object
const sideVideos = [
    {
        id: '1',
        title: 'BMX Rampage: 2018 Highlights',
        channel: 'By Red Cow',
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

export {mainVideo, sideVideos};