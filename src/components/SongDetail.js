import React from 'react';
import './SongDetail.css'

const SongDetail = (props) => {
    console.log(props.song)
    if (!props.song) return null;
    return (
        <div classname="song-detail">
        
        <h2>Song Title: {props.song['im:name']['label']} </h2>
        <h2>Artist: {props.song['im:artist']['label']}</h2>
        <h2>Genre: {props.song.category.attributes.term}</h2>

            <div className="media-container">
                <img src={props.song['im:image'][2]['label']} alt="song cover"></img>

                <audio controls id="music_player" >
                    <source src={props.song.link[1].attributes.href}  />
                </audio>
    
            </div>

        <p>Rights: {props.song.rights.label}</p>
        
        </div>
    )
}

export default SongDetail;