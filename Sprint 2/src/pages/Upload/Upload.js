import './Upload.scss';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import uploadImage from '../../assets/images/upload-video-preview.jpg'

function Upload(props) {
    return (
        <div className="uploads-page">
            <SearchBar/>
            <div className="uploads">
                <h1 className="uploads__title">Upload Video</h1>
                <form className="uploads__form">
                    <div className="thumbnail">
                        <label className="thumbnail__label">VIDEO THUMBNAIL</label>
                        <img className="thumbnail__image" src={uploadImage} alt=""/>
                    </div>
                    <div className="uploads__info">
                        <div className="title">
                            <label className="title__label">TITLE YOUR VIDEO</label>
                            <input className="title__input" placeholder="Add a title to your video"/>
                        </div>
                        <div className="description">
                            <label className="description__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="description__input" placeholder="Add a description of your video"></textarea>
                        </div>
                    </div>
                </form>
                <div className="uploads__buttons">
                    <button className="button cancel">CANCEL</button>
                    <button className="button publish">PUBLISH</button>
                </div>
            </div>
        </div>
    );
}

export default Upload;