/**
 * Component dependencies
 */
import classnames from 'classnames';

/**
 * Internal block libraries
 */
const {__} = wp.i18n;
const {Component} = wp.element;
const {  InspectorControls, BlockControls, BlockDescription } = wp.blocks;
const { PanelBody,PanelRow } = wp.components;

/**
 * Create an  map field Component
 */

// render map using google api call_back
function initMap(address) {

// first time set map
  console.log( address );

    var geocoder = new google.maps.Geocoder();
    var addressLatLng;
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                addressLatLng = results[0];

                setMap(addressLatLng.geometry.location.lat(), addressLatLng.geometry.location.lng());
            }
        });
    }

    function setMap(lat, lng) {


        var map = new google.maps.Map(document.getElementById('map'), {
            //  center: {lat: -33.8688, lng: 151.2195},
            center: {lat: lat, lng: lng},
            zoom: 13,
            mapTypeId: 'roadmap'
        });

    }

}

export default class Map extends Component {
    constructor(props) {
      super(...arguments );
     }

    componentDidMount() {
        initMap(this.props.addressValue);
        console.log('mounting');
    }

     onInputChange( e ) {
      console.log( "onInputChange");
     this.props.onAddressChange(  e.target.value );
     initMap( e.target.value );
    }

    render() {

        return ( [!! this.props.focus &&
        ( <InspectorControls key="my-controls">
            <BlockDescription>
                {__('Setting for the Map ')}
            </BlockDescription>


            <PanelRow>


            </PanelRow>

        </InspectorControls>),

            <BlockControls>

                <input type="text" value={ this.props.addressValue } onChange={ (e) => this.onInputChange(e) }/>
            </BlockControls>
            ,
            <div id={this.props.id}  style={{height: '300px'}}></div>] );
    }


}
