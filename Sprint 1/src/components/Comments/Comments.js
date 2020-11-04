import Mohan from '../../assets/images/mohan-muruge.jpg';

function Comments(props) {
    console.log(props)
    return (
        <section className="comments">
            <h2>3 Comments</h2>
            <form>
                <img src={Mohan} width={48} height={48} alt=""/>
                <div>
                    <div>
                        <label>JOIN THE CONVERSATION</label>
                        <textarea value="Write comment here" readOnly></textarea>
                    </div>
                    <button>COMMENT</button>
                </div>
            </form>
        {props.comments.map((comment) => 
            <div key={comment.timestamp}>
                <img alt=""/>
                <div>
                    <div>
                        <h4>{comment.name}</h4>
                        <h5>{convertTime(comment.timestamp)}</h5>
                    </div>
                    <p>{comment.comment}</p>
                </div>
            </div>
        )}
        </section>
    )
}

// returns a string stating how long since the comment was first submitted
function convertTime(timestamp) {

    // variable with the current time in milliseconds since the epoch
    const currentTime = new Date().getTime();
    
    // variable with the difference
    const time = Math.abs(currentTime - timestamp)/1000;
  
    // checks if total milliseconds are greater than the equivalent of at least 1 year
    if ((time/31536000) > 1) {
      return Math.floor(time/31536000) + " years ago";
    
      // checks if total milliseconds are greater than the equivalent of at least 1 month
    } else if ((time/2592000) > 1) {
      return Math.floor(time/2592000) + " months ago";
    
      // checks if total milliseconds are greater than the equivalent of at least 1 day
    } else if ((time/86400) > 1) {
      return Math.floor(time/86400) + " days ago";
    
      // checks if total milliseconds are greater than the equivalent of at least 1 hour
    } else if ((time/3600) > 1) {
      return Math.floor(time/3600) + " hours ago";
    
      // checks if total milliseconds are greater than the equivalent of at least 60 minutes
    } else if ((time/60) > 1) {
      return Math.floor(time/60) + " minutes ago";
    
    } else {
      // returns string with time rounded to the nearest second
    return Math.floor(time) + " seconds ago";
    }
};

export default Comments;