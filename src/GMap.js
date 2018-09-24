import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import locationsData from "./content/locations.json";
import MyGreatPlace from './my_great_place.jsx';
import { db } from './Firebase.js'

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 15.95,
      lng: 79.33
    },
    zoom: 7,
    icon: 'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png'
  };

  componentDidMount() {
    console.log(this.props.type);
    db.collection('sunriseap').where('type', '==', ''+this.props.type).get().then(querySnap => {
      console.log('Test:'+querySnap);
      var locList = [];
      if (!querySnap.empty) {
        querySnap.forEach(doc => {
          locList.push(doc.data());
        })

        console.log('Test1:' + JSON.stringify(locList));
      } else {
        console.log('document not found');
      }
      this.setState({loc: locList});
    });
  }

  componentWillMount() {
    this.setState({loc: []});
    //console.log(locationsData);
    //this.setState({loc:locationsData});
  }

  render() {
    return (      
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDvsaENyQnSHWWGCI6JnLF8_-65Qv9sJaw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={createMapOptions}
        >
          {
            this.state.loc.map(item => (
            <MyGreatPlace
            lat={item.lat}
            lng={item.lng}
            text={item.name}
            
            />
            ))
          
          }
          

        </GoogleMapReact>
      </div>
    );
  }
}

export default GMap;