
const sideVideo = [
    {
        id: '1',
        title: 'type of <string>',
        channel: 'type of <string>',
        image: '/static/media/video-list-0.52a50f82.jpg'
    },
    {
        id: '2',
        title: 'Become A Travel Pro In One Easy Lesson…',
        channel: 'Scotty Cranmer',
        image: '/static/media/video-list-1.5a6080b6.jpg'
    },
    {
        id: '3',
        title: 'Les Houches The Hidden Gem Of The…',
        channel: 'Scotty Cranmer',
        image: '/static/media/video-list-2.5d5f914a.jpg'
    },
    {
        id: '4',
        title: 'Travel Health Useful Medical Information…',
        channel: 'Scotty Cranmer',
        image: '/static/media/video-list-3.bf017b79.jpg'
    },
    {
        id: '5',
        title: 'Cheap Airline Tickets Great Ways To Save',
        channel: 'Emily Harper',
        image: '/static/media/video-list-4.4a82fa9f.jpg'
    },
    {
        id: '6',
        title: 'Take A Romantic Break In A Boutique Hotel',
        channel: 'Ethan Owen',
        image: '/static/media/video-list-5.ad24c303.jpg'
    },
    {
        id: '7',
        title: 'Choose The Perfect Accommodations',
        channel: 'Lydia Perez',
        image: '/static/media/video-list-6.5b74c9b4.jpg'
    },
    {
        id: '8',
        title: 'Cruising Destination Ideas',
        channel: 'Timothy Austin',
        image: '/static/media/video-list-7.331c835b.jpg'
    },
    {
        id: '9',
        title: 'Train Travel On Track For Safety',
        channel: 'Scotty Cranmer',
        image: '/static/media/video-list-8.03f7feba.jpg'
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