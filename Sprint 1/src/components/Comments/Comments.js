import './Comments.scss';
import mohan from '../../assets/images/mohan-muruge.jpg';

function Comments({comments, convertTime, onCommentClick}) {
    return (
        <section className="comments">
            <h2 className="comments__title">3 Comments</h2>
            <div className="comments__new">
                <img className="comments__image" src={mohan} width={48} height={48} alt=""/>
                <form className="comments__form" onSubmit={(e)=> onCommentClick(e, e.target)}>
                        <div className="comments__entry">
                            <label className="comments__label">JOIN THE CONVERSATION</label>
                            <textarea className="comments__input" placeholder="Write comment here" required></textarea>
                        </div>
                        <button className="button comment">
                            <p className="comment__text">
                                COMMENT
                            </p>
                        </button>
                </form>
            </div>
        {comments.map((comment) => 
            <div className="comments__cards" key={comment.timestamp}>
                <div className="card__image-main"></div>
                <div className="card__info-main">
                    <div className="card__header-main">
                        <span className="card__name-main">{comment.name}</span>
                        <span className="card__timestamp-main">{convertTime(comment.timestamp)}</span>
                    </div>
                    <p className="card__comment-main">{comment.comment}</p>
                </div>
            </div>
        )}
        </section>
    )
};

export default Comments;