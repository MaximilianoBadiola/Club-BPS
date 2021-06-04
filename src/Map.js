import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

 
/* const AnyReactComponent = ({ text }) => <div>{text}</div>; */
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -34.9012274,
      lng: -56.180199
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7zMTbmhsoyGD5YopIhkr8p27bx0zfb0I' }}
          defaultCenter={this.props.center}
          defaultZoom={16}
        >
        <Marker
            text={"Club BPS"}
            lat={-34.9012274}
            lng={-56.180199}
        />
 {/*          <AnyReactComponent
            lat={-34.9012274}
            lng={-56.180199}
            text="Club BPS"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;