<?php
/*
 * Plugin Name: Guten env
 *
 * */
defined( 'ABSPATH' ) || exit;

const MAP_BLOCK_VERSRION = '1.0.0';

add_action( 'enqueue_block_editor_assets', 'map_block_js' );

function map_block_js() {

	wp_enqueue_script( 'map_block_js', plugins_url( 'block.build.js', __FILE__ ), array( 'wp-blocks', 'wp-i18n', 'wp-element','jQuery'  ), filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' , MAP_BLOCK_VERSRION );

}


add_action( 'enqueue_block_editor_assets', 'map_block_editor_style' );

function map_block_editor_style() {
	wp_enqueue_style( 'map_block_editor_style', plugins_url( 'css/blocks.style.css', __FILE__ ), array( 'wp-blocks' ), filemtime( plugin_dir_path( __FILE__ ) . 'css/blocks.style.css', MAP_BLOCK_VERSRION );
}

add_action( 'enqueue_block_assets', 'map_block_front_style' );

function map_block_front_style() {

	//if admin then return only load on front
	if( is_admin() ){

		return ;
	}
	wp_enqueue_style( 'map_block_editor_style', plugins_url( 'css/block-front-style.css', __FILE__ ), array( 'wp-blocks' ), filemtime( plugin_dir_path( __FILE__ ) . 'css/block-front-style.css' , MAP_BLOCK_VERSRION );
}

function google_map_js(){

 wp_enqueue_script('map_block_google_js', 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap', $deps = array(), MAP_BLOCK_VERSRION, $in_footer = true );

}
add_action( 'wp_enqueue_scripts', 'google_map_js');
