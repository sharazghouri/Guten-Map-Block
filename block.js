
// import css for block editor view
import css from  './style.css';

import Map from './map';

const { __ } = wp.i18n;
const {
    registerBlockType,
    Editable } = wp.blocks;
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

  attributres:{

      address:{
        type:'string'
      }

  },

  supports:{
   html: false,

  },

  edit: props=>{

    return( <Map
             id='map'

    />);

  },
  save:props=>{


return( [ <Map id='map'  />,<script dangerouslySetInnerHTML={ { __html : 'alert( "fds" );'}}></script>]);
  }







});
//
