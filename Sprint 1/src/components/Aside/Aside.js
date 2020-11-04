const sideVideo = [
    {
        id: '1',
        title: 'type of <string>',
        channel: 'type of <string>',
        image: 'type of <string>'
    },
    {
        id: '2',
        title: 'Become A Travel Pro In One Easy Lesson…',
        channel: 'Scotty Cranmer',
        image: 'type of <string>'
    },
    {
        id: '3',
        title: 'Les Houches The Hidden Gem Of The…',
        channel: 'Scotty Cranmer',
        image: 'type of <string>'
    },
    {
        id: '4',
        title: 'Travel Health Useful Medical Information…',
        channel: 'Scotty Cranmer',
        image: 'type of <string>'
    },
    {
        id: '5',
        title: 'Cheap Airline Tickets Great Ways To Save',
        channel: 'Emily Harper',
        image: 'type of <string>'
    },
    {
        id: '6',
        title: 'Take A Romantic Break In A Boutique Hotel',
        channel: 'Ethan Owen',
        image: 'type of <string>'
    },
    {
        id: '7',
        title: 'Choose The Perfect Accommodations',
        channel: 'Lydia Perez',
        image: 'type of <string>'
    },
    {
        id: '8',
        title: 'Cruising Destination Ideas',
        channel: 'Timothy Austin',
        image: 'type of <string>'
    },
    {
        id: '9',
        title: 'Train Travel On Track For Safety',
        channel: 'Scotty Cranmer',
        image: 'type of <string>'
    },
];

function Aside() {
    return (
        <aside>
            <h3>NEXT VIDEO</h3>
            {sideVideo.map(video =>
                <div>
                    <img />
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