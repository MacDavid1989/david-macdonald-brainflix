import './Comment.scss';

function Comment({comments, convertTime, onDelete}) {

    const handleCommentDelete = (id, onComment) => {
        onComment(id)
    };

    return (
        comments.sort((a, b) => (a.timestamp > b.timestamp) ? -1 : 1).map((comment) =>  
            <div className="comment__card" key={comment.id}>
                <div className="card__image-main"></div>
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
    )
};

export default Comment;