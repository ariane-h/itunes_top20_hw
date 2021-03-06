import React from 'react'; 

const SongSelector = (props) => {
    // i have an array of countries
    // want one option component for each entry in the array
    const options = props.songs.map( song => {
      return <option 
              value={song.title.label} 
              key={song.title.label}
              >
                {song.title.label}
              </option>
    })
  
   function handleChange(event){
        props.onSongSelected(event.target.value);
   }
  
    return (
        <div className="song-selector">
            <select id="song-selector" defaultValue="default" onChange={handleChange} > 
                <option disabled value="default">Choose a song...</option>
                {options}
            </select>
        </div>
    )

}

export default SongSelector;