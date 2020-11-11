import './Comment.scss';

function Comment({comments, convertTime}) {
    return (
        <>
        {comments.map((comment) => 
            <div className="comment__card" key={comment.timestamp}>
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
        </>
    )
};

export default Comment;