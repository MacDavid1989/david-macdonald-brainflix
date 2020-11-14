import './VideoComments.scss';
import mohan from '../../assets/images/mohan-muruge.jpg';
import Comment from '../Comment/Comment';
import axios from 'axios'
import {API_KEY} from '../../utils/apiKey'


function VideoComments({history, match, comments, convertTime}) {

    const handleCommentSubmit = (e, form) => {
        const header = {'Content-Type': 'application/json'};
        const newComment = {name: 'This Guy', comment: form.commentsInput.value}
        if(match.url === '/'){
            axios.post(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments${API_KEY}`, newComment, header)
            .then( response => {
                console.log(response)
            })
            .catch(error => console.error(error));
        } else {
            axios.post(`https://project-2-api.herokuapp.com/videos/${match.params.id}/comments${API_KEY}`, newComment, header)
            .then( response => {
                console.log(response)
            })
            .catch(error => console.error(error));
        }
    };

    return (
        <section className="comments">
            <h2 className="comments__title">3 Comments</h2>
            <div className="comments__new">
                <img className="comments__image" src={mohan} alt=""/>
                <form className="comments__form" onSubmit={(e)=> handleCommentSubmit(e, e.target)}>
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

export default VideoComments;