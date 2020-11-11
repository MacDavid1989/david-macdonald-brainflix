import './Upload.scss';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import uploadImage from '../../assets/images/upload-video-preview.jpg'

function Upload(props) {
    return (
        <div className="upload-page">
            <SearchBar/>
            <div className="upload">
                <h1>Upload Video</h1>
                <form>
                    <div>
                        <label>VIDEO THUMBNAIL</label>
                        <img src={uploadImage} alt=""/>
                    </div>
                    <div>
                        <div>
                            <label>TITLE YOUR VIDEO</label>
                            <input placeholder="Add a title to your video"/>
                        </div>
                        <div>
                            <label>ADD A VIDEO DESCRIPTION</label>
                            <textarea placeholder="Add a description of your video"></textarea>
                        </div>
                    </div>
                </form>
                <div>
                    <button>CANCEL</button>
                    <button>PUBLISH</button>
                </div>
            </div>
        </div>
    );
}

export default Upload;