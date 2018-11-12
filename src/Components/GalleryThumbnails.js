import React, { Component } from 'react';
import './GalleryThumbnails.css';

class GalleryThumbnails extends Component {
    onClick (id) {
        this.props.onClick(id);
    }
    render () {
        const renderThumbnails = this.props.images.map((image, id) => {
            return (
                <img className="thumbnail" 
                    src={image.src} 
                    key={image.id} 
                    alt={image.caption}
                    onClick={() => this.onClick(image.id)}/>
            )
        });

        return (
            <div className="thumbnail-container">
                {renderThumbnails}
            </div>
        )
    }
}

export default GalleryThumbnails;