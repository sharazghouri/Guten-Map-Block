/**
 * Component dependencies
 */
import classnames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {  InspectorControls, BlockDescription } = wp.blocks;

const { PanelBody,PanelRow }
/**
 * Create an  map field Component
 */

 // render map using google api call_back
 function initMap() {
         var uluru = {lat: -25.363, lng: 131.044};
         var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 4,
           center: uluru
         });
         var marker = new google.maps.Marker({
           position: uluru,
           map: map
         });
       }

export default class  Map extends Component {
  constructor( props ) {
       super( ...arguments );

   }

componentDidMount(){
initMap();

}
   render(){

     return( <div id={ this.props.id } style={ {height : '300px'}}>

     </div> );
       }





}
