import React from 'react';

const SongDetail = (props) => {
    console.log(props.song)
    if (!props.song) return null;
    return (
        <>
        
        <h2>Song Title: {props.song['im:name']['label']} </h2>
        <h2>Artist: {props.song['im:artist']['label']}</h2>
        <img src={props.song['im:image'][2]['label']} alt="song cover"></img>
        
        <audio controls id="music_player" >
              <source src={props.song.link[1].attributes.href}  />
        </audio>

        <p>Rights: {props.song.rights.label}</p>
        
        </>
    )
}

export default SongDetail;