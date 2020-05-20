import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';
import './SongContainer.css'

class SongContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            selectedSongTitle: ''
            
        }
        this.handleSongSelected = this.handleSongSelected.bind(this);
    }

    handleSongSelected(songTitle){
        this.setState({selectedSongTitle: songTitle})
    }


    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({songs: songs.feed.entry}))
        .catch(err => console.err(err))
    }

    render(){

        const selectedSong = this.state.songs.find(song => {
            return song.title.label === this.state.selectedSongTitle
        }); 

        return(
            <div className="song-container">
                <h1>Top 20 Singles</h1>

                <SongSelector 
                songs={this.state.songs}
                onSongSelected={this.handleSongSelected}>
                </SongSelector>

                <SongDetail
                song={selectedSong}></SongDetail>
            </div>
        )
    }

}

export default SongContainer;