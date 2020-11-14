import './Comment.scss';
import mohan from '../../assets/images/mohan-muruge.jpg';

function Comment({comment, convertTime, onDelete}) {

    const handleCommentDelete = (id, onComment) => {
        onComment(id)
    };

    const defaultCommentIds = ["1ab6d9f6-da38-456e-9b09-ab0acd9ce818","cc6f173d-9e9d-4501-918d-bc11f15a8e14","993f950f-df99-48e7-bd1e-d95003cc98f1"]

    return (
            <div className="comment__card" key={comment.id}>
                {defaultCommentIds.find(id => id === comment.id) ? <div className="card__image-main"></div> : <img className="card__image-main" src={mohan} alt=""/>}
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