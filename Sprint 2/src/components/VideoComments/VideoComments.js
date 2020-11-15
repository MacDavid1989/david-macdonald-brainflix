import './VideoComments.scss';
import mohan from '../../assets/images/mohan-muruge.jpg';
import Comment from '../Comment/Comment';

// component wrapper for new comment form and comments associated with current main video found in state
function VideoComments({comments, onComment, onDelete, onLike, convertTime}) {

    // form handler called when form new comment is submitted
    const handleCommentSubmit = (e, form, onComment) => {
        // prevents page refresh
        e.preventDefault()
        // sets header object for axios request
        const header = {'Content-Type': 'application/json'};
        // sets newComment object with user name and comment which will be passed in axios request
        const newComment = {name: 'This Guy', comment: form.commentsInput.value}
        // calls function passed through props from Home and provides header and newComment objects as arguments
        onComment(header,newComment)
        // reset form input field
        form.reset()
    };

    return (
        // wrapper for comment form and all comments
        <section className="comments">
            {/* section title */}
            <h2 className="comments__title">{comments.length} Comments</h2>
            {/* new comment form wrapper */}
            <div className="comments__new">
                <img className="comments__image" src={mohan} alt="user profile pic for comments"/>
                {/* new comment form with onSubmit attribute to call form handler function with the provided arguments */}
                <form className="comments__form" onSubmit={(e)=> handleCommentSubmit(e, e.target, onComment)}>
                        <div className="comments__entry">
                            <label htmlFor="commentsInput" className="comments__label">JOIN THE CONVERSATION</label>
                            <textarea id="commentsInput" name="commentsInput" className="comments__input" placeholder="Write comment here" required></textarea>
                        </div>
                        <button className="button comment">
                            <p className="comment__text">
                                COMMENT
                            </p>
                        </button>
                </form>
            </div>
            {/* sorts comments array in reverse chronological order by comparing timestamps, 
            then maps the array to render a comment component for each object in the array */}
            {comments.sort((a, b) => (a.timestamp > b.timestamp) ? -1 : 1).map((comment) => 
                <Comment
                    key={comment.id} 
                    comment={comment} 
                    onDelete={onDelete}
                    onLike={onLike}
                    convertTime={convertTime}
                />
            )}
        </section>
    )
};

export default VideoComments;