import React, {Component} from 'react';
import GMap from './GMap';

class Locations extends Component {
    render() {
        console.log(this.props.location.search);
        const params = new URLSearchParams(this.props.location.search);
        console.log(params.get('type'));
        return(
            <GMap type={params.get('type')}/>
        );
    }
}

export default Locations;