import './Comment.scss';

function Comment({comment, convertTime, onDelete, counter}) {

    const handleCommentDelete = (id, onComment) => {
        onComment(id)
    };

    return (
            <div className="comment__card" key={comment.id}>
                <img className="card__image-main" src={comment.url} alt=""/>
                <div className="card__info-main">
                    <div className="card__header-main">
                        <span className="card__name-main">{comment.name}</span>
                        <span className="card__timestamp-main">{convertTime(comment.timestamp)}</span>
                    </div>
                    <p className="card__comment-main">{comment.comment}</p>
                </div>
                <div className='delete' onClick={(e)=> handleCommentDelete(comment.id, onDelete)}>
                    DELETE
                </div>
            </div>
    )
};

export default Comment;