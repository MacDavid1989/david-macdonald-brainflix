import mohan from '../../assets/images/mohan-muruge.jpg';

function Comments(props) {
    return (
        <section className="comments">
            <h2 className="comments__title">3 Comments</h2>
            <div className="comments__new">
                <img className="comments__image" src={mohan} width={48} height={48} alt=""/>
                <form className="comments__form">
                        <div className="comments__entry">
                            <label className="comments__label">JOIN THE CONVERSATION</label>
                            <textarea className="comments__input" placeholder="Write comment here"></textarea>
                        </div>
                        <button className="button comment">COMMENT</button>
                </form>
            </div>
        {props.comments.map((comment) => 
            <div className="comments__cards" key={comment.timestamp}>
                <img className="card__image-main" alt=""/>
                <div className="card__info-main">
                    <div className="card__header-main">
                        <span className="card__name-main">{comment.name}</span>
                        <span className="card__timestamp-main">{props.convertTime(comment.timestamp)}</span>
                    </div>
                    <p className="card__comment-main">{comment.comment}</p>
                </div>
            </div>
        )}
        </section>
    )
};

export default Comments;