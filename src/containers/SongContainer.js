import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({songs: songs}))
        .catch(err => console.err(err))
    }

    render(){
        return(
            <>
            <h1>this is the song container</h1>
            <SongSelector></SongSelector>
            <SongDetail></SongDetail>
            </>
        )
    }

}

export default SongContainer;