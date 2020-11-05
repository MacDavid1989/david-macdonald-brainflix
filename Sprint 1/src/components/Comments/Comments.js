import Mohan from '../../assets/images/mohan-muruge.jpg';

function Comments(props) {
    return (
        <section className="comments">
            <h2 className="comments__title">3 Comments</h2>
            <form className="comments__form">
                <img className="comments__image" src={Mohan} width={48} height={48} alt=""/>
                <div>
                    <div className="comments__wrapper">
                        <label className="comments__label">JOIN THE CONVERSATION</label>
                        <textarea className="comments__input" value="Write comment here" readOnly></textarea>
                    </div>
                    <button className="button__comment">COMMENT</button>
                </div>
            </form>
        {props.comments.map((comment) => 
            <div className="comments__card" key={comment.timestamp}>
                <img className="card__image" alt=""/>
                <div className="card__wrapper">
                    <div className="card__header">
                        <h4 className="card__name">{comment.name}</h4>
                        <h5 className="card__timestamp">{props.convertTime(comment.timestamp)}</h5>
                    </div>
                    <p className="card__comment">{comment.comment}</p>
                </div>
            </div>
        )}
        </section>
    )
};

export default Comments;