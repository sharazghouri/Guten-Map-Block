<?php
/*
 * Plugin Name: Map Block for Guten
 *
 * */
defined( 'ABSPATH' ) || exit;

const MAP_BLOCK_VERSION = '1.0.0';



function map_block_js() {

	wp_enqueue_script( 'map_block_js' , plugins_url( 'js/block.build.js', __FILE__ ), array( 'wp-blocks', 'wp-i18n', 'wp-element','jquery'  ), filemtime( plugin_dir_path( __FILE__ ) . 'js/block.build.js'  ), MAP_BLOCK_VERSION);

}

add_action( 'enqueue_block_editor_assets', 'map_block_js' );



function map_block_editor_style() {

	wp_enqueue_style( 'map_block_editor_style', plugins_url( 'css/blocks.style.css', __FILE__ ), array( 'wp-blocks' ), filemtime( plugin_dir_path( __FILE__ ) . 'css/blocks.style.css'), MAP_BLOCK_VERSION );
}
add_action( 'enqueue_block_editor_assets', 'map_block_editor_style' );


function map_block_front_style() {

	//if admin then return only load on front
	if( is_admin() ){

		return ;
	}
	wp_enqueue_style( 'map_block_editor_style_front', plugins_url( 'css/block-front-style.css', __FILE__ ), array( 'wp-blocks' ), filemtime( plugin_dir_path( __FILE__ ) . 'css/block-front-style.css') , MAP_BLOCK_VERSION );
}
add_action( 'enqueue_block_assets', 'map_block_front_style' );

function google_map_js(){

//enquening script to maim wp_enqueue_script hook for access for both admin and  site
//https://maps.googleapis.com/maps/api/js?key=AIzaSyAjyDspiPfzEfjRSS5fQzm-3jHFjHxeXB4&callback=initMap"
 wp_enqueue_script('map_block_google_js', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAjyDspiPfzEfjRSS5fQzm-3jHFjHxeXB4&libraries=places',  array(), MAP_BLOCK_VERSION  );

}
add_action( 'enqueue_block_assets', 'google_map_js');
