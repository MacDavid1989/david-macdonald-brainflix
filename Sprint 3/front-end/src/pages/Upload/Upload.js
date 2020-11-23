import React from 'react';
import axios from 'axios';
import './Upload.scss';
import uploadImage from '../../assets/images/upload-video-preview.jpg'

const API_URL = process.env.REACT_APP_API_URL;

// Upload page component
function Upload(props) {
    // upload handler function called when form is submitted
	const handleUploadSubmit = (e, form) => {
        // prevents page refresh after submission
        e.preventDefault();
        const header = {'Content-Type': 'application/json'};
        const newVideo = {title: form.titleInput.value, description: form.descriptionInput.value, image: `${API_URL}/images/upload-video-preview.jpg`};
        // post request to add a newComment object to the default video comments array
        axios.post(`${API_URL}/videos/`, newVideo, header)
        .then(() => {
            // resets form fields
            form.reset();
            // provides browser alert to inform user of successful submission
            alert('Video Upload Successful')
            // pushes a new entry onto the history stack causing the browser to direct to the route with the specified path
            props.history.push('/')
        })
        .catch(error => {
            alert('Video Upload Unsuccessful')
            console.error(error)
        });
	};
    
    return (
        <div className="uploads-page">
            {/* form with onSubmit attribute that utilizes an anonymous function to call the upload handler */}
            <form className="uploads" onSubmit={(e) => handleUploadSubmit(e, e.target)}>
                {/* upload page heading */}
                <h1 className="uploads__title">Upload Video</h1>
                <div className="uploads__form">
                    {/* form thumbnail */}
                    <div className="thumbnail">
                        <p className="thumbnail__label">VIDEO THUMBNAIL</p>
                        <img className="thumbnail__image" src={uploadImage} alt="cyclist pov of blue race bicycle"/>
                    </div>
                    {/* form input fields */}
                    <div className="uploads__info">
                        <div className="title">
                            <label htmlFor="titleInput" className="title__label">TITLE YOUR VIDEO</label>
                            <input id="titleInput" className="title__input" placeholder="Add a title to your video" required/>
                        </div>
                        <div className="description">
                            <label htmlFor="descriptionInput" className="description__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea id="descriptionInput" className="description__input" placeholder="Add a description of your video" required></textarea>
                        </div>
                    </div>
                </div>
                <div className="uploads__buttons">
                    {/* cancel button with type reset to clear all form input fields without submitting the form */}
                    <button type="reset" className="button cancel">CANCEL</button>
                    {/* publish button with type submit that causes the onSubmit event to occur */}
                    <button type="submit" className="button publish">PUBLISH</button>
                </div>
            </form>
        </div>
    );
};

export default Upload;