import React, {Component} from 'react';
import Carousel from "./carousel";
import TimeUntil from "./timeUntil";

class Featured extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <Carousel/>
                <div className="artist_name">
                    <div className="wrapper">Artist</div>
                </div>
                <TimeUntil/>
            </div>
        );
    }
}

export default Featured;