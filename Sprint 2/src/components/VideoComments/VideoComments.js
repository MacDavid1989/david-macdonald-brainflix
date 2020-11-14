import './VideoComments.scss';
import mohan from '../../assets/images/mohan-muruge.jpg';
import Comment from '../Comment/Comment';


function VideoComments({comments, convertTime, onComment, onDelete}) {

    const handleCommentSubmit = (e, form, onComment) => {
        e.preventDefault()
        const header = {'Content-Type': 'application/json'};
        const newComment = {name: 'This Guy', comment: form.commentsInput.value}
        onComment(header,newComment)
        form.reset()
    };

    return (
        <section className="comments">
            <h2 className="comments__title">{comments.length} Comments</h2>
            <div className="comments__new">
                <img className="comments__image" src={mohan} alt=""/>
                <form className="comments__form" onSubmit={(e)=> handleCommentSubmit(e, e.target, onComment)}>
                        <div className="comments__entry">
                            <label className="comments__label">JOIN THE CONVERSATION</label>
                            <textarea name="commentsInput" className="comments__input" placeholder="Write comment here" required></textarea>
                        </div>
                        <button className="button comment">
                            <p className="comment__text">
                                COMMENT
                            </p>
                        </button>
                </form>
            </div>
            {comments.sort((a, b) => (a.timestamp > b.timestamp) ? -1 : 1).map((comment) => {
                return <Comment 
                    comment={comment} 
                    convertTime={convertTime}
                    onDelete={onDelete}
                />
            })}
        </section>
    )
};

export default VideoComments;