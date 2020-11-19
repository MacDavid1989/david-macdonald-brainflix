import './Comment.scss';
import {defaultCommentIds} from '../../utils/defaultCommentIds'
import mohan from '../../assets/images/mohan-muruge.jpg';
import like from '../../assets/icons/svg/heart.svg';
import pacman from '../../assets/icons/svg/pacman.svg'

function Comment({comment, onDelete, onCommentLike, convertTime}) {
    // delete handler which calls the handler passed from Home component and passes it the comment id as an argument
    const handleCommentDelete = (id, onDelete) => {
        onDelete(id)
    };
    
    // like handler which calls the handler passed from Home component and passes it the comment id as an argument
    const handleCommentLike = (id, onCommentLike) => {
        onCommentLike(id)
    };

    return (
        // individual comment wrapper
        <div className="comment__card" key={comment.id}>
            {/* conditonal element creation based on whether the comment is a default or new user submission, creates a div for default comments and an image with the user profile pic for new comments */}
            {defaultCommentIds.find(id => id === comment.id) ? <div className="card__image-main"></div> : <img className="card__image-main" src={mohan} alt="user profile pic"/>}
            <div className="card__info-main">
                <div className="card__header-main">
                    <span className="card__name-main">{comment.name}</span>
                    <span className="card__timestamp-main">{convertTime(comment.timestamp)}</span>
                </div>
                <p className="card__comment-main">{comment.comment}</p>
                <div className="card__buttons">
                    <div className='like' onClick={(e)=> handleCommentLike(comment.id, onCommentLike)}>
                        <img className='like-image' src={like} alt="heart for like button"/>
                            {comment.likes}
                    </div>
                    {/* div container with onClick attribute to call local delete handler and pass it the comment id and props derived delete handler */}
                    <div className='delete' onClick={(e)=> handleCommentDelete(comment.id, onDelete)}>
                        <img className='delete-image' src={pacman} alt="pacman icon for delete button"/>
                            DELETE
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;