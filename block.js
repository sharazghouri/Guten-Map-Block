
// import css for block editor view
import css from  './style.css';

import Map from './map';

const { __ } = wp.i18n;
const { registerBlockType, Editable } = wp.blocks;
const {  InspectorControls, BlockControls, BlockDescription } = wp.blocks;

const { PanelBody,PanelRow } = wp.components;

const PLUGIN_TEXTDOMAIN = 'map-block-guten';

registerBlockType( 'map-block/guten',{
  //title of the Block
  title : __( 'Map',  PLUGIN_TEXTDOMAIN ),
  // description of the block ( OPTIONAL )
  description : __('The Map Block give function to add maps in Post.' , PLUGIN_TEXTDOMAIN),
  //icon for block
  icon : 'location-alt',
  //category
  category: 'common',
  keywords:[
    __( 'map', PLUGIN_TEXTDOMAIN ),
    __( 'location', PLUGIN_TEXTDOMAIN ),
    __( 'way', PLUGIN_TEXTDOMAIN ),
  ],

  //attributres

    attributes: {
      address: {
        type: 'string',
        default:  'sialkot',
          source: 'attribute',
          selector: '.mymap',
          attribute: 'data-address'
      }

  },

  supports:{
    html: false,
    },

  edit: props=>{

    console.log( "edit");
    const onAddressChange = ( value ) => {

    props.setAttributes( { address: value } );

  }

    return( [

      <Map id='map'
        addressValue={ props.attributes.address }
           { ...{ onAddressChange  }  } /> ])
    },
    save:props=>{
        console.log( "save");

      return( [  <div   class="mymap" style={ {height : "200px" }} data-address={ props.attributes.address}  class={ props.className } ></div>]);

  }







  });
  //
