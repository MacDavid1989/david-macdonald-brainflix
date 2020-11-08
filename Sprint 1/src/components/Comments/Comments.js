import './Comments.scss';
import Comment from '../Comment/Comment';
import mohan from '../../assets/images/mohan-muruge.jpg';

function Comments({comments, convertTime, onCommentClick}) {
    return (
        <section className="comments">
            <h2 className="comments__title">3 Comments</h2>
            <div className="comments__new">
                <img className="comments__image" src={mohan} alt=""/>
                <form className="comments__form" onSubmit={(e)=> onCommentClick(e, e.target)}>
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
            <Comment 
                comments={comments} 
                convertTime={convertTime}
            />
        </section>
    )
};

export default Comments;