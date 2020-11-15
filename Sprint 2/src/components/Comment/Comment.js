import './Comment.scss';
import mohan from '../../assets/images/mohan-muruge.jpg';
import like from '../../assets/icons/svg/heart.svg';
import pacman from '../../assets/icons/svg/pacman.svg'
import {defaultCommentIds} from '../../utils/defaultCommentIds'

function Comment({comment, convertTime, onDelete}) {

    const handleCommentDelete = (id, onComment) => {
        onComment(id)
    };

    return (
            <div className="comment__card" key={comment.id}>
                {defaultCommentIds.find(id => id === comment.id) ? <div className="card__image-main"></div> : <img className="card__image-main" src={mohan} alt=""/>}
                <div className="card__info-main">
                    <div className="card__header-main">
                        <span className="card__name-main">{comment.name}</span>
                        <span className="card__timestamp-main">{convertTime(comment.timestamp)}</span>
                    </div>
                    <p className="card__comment-main">{comment.comment}</p>
                    <div className="card__buttons">
                        <div className='like' >
                            <img className='like-image' src={like} alt=""/>
                            	{comment.likes}
                        </div>
                        <div className='delete' onClick={(e)=> handleCommentDelete(comment.id, onDelete)}>
                            <img className='delete-image' src={pacman} alt=""/>
                                DELETE
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Comment;