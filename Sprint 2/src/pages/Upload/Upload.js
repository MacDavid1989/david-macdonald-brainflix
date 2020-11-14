import './Upload.scss';
import React from 'react';
import uploadImage from '../../assets/images/upload-video-preview.jpg'

function Upload(props) {

	const handleUploadSubmit = (e, form) => {
        e.preventDefault();
        form.reset();
        alert('Video Upload Successful')
        props.history.push('/')
	};

    
    return (
        <div className="uploads-page">
            <form className="uploads" onSubmit={(e) => handleUploadSubmit(e, e.target)}>
                <h1 className="uploads__title">Upload Video</h1>
                <div className="uploads__form">
                    <div className="thumbnail">
                        <label className="thumbnail__label">VIDEO THUMBNAIL</label>
                        <img className="thumbnail__image" src={uploadImage} alt=""/>
                    </div>
                    <div className="uploads__info">
                        <div className="title">
                            <label className="title__label">TITLE YOUR VIDEO</label>
                            <input className="title__input" placeholder="Add a title to your video" required/>
                        </div>
                        <div className="description">
                            <label className="description__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="description__input" placeholder="Add a description of your video" required></textarea>
                        </div>
                    </div>
                </div>
                <div className="uploads__buttons">
                    <button className="button cancel">CANCEL</button>
                    <button className="button publish">PUBLISH</button>
                </div>
            </form>
        </div>
    );
}

export default Upload;