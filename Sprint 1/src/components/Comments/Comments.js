import Mohan from '../../assets/images/mohan-muruge.jpg';

function Comments(props) {
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
                        <h5>{props.convertTime(comment.timestamp)}</h5>
                    </div>
                    <p>{comment.comment}</p>
                </div>
            </div>
        )}
        </section>
    )
}

export default Comments;