import React from 'react';

function Menu(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M45,22H3c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h42c0.552,0,1-0.448,1-1v-2 C46,22.448,45.552,22,45,22z"/>
		<path d="M23,36H3c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h20c0.552,0,1-0.448,1-1v-2C24,36.448,23.552,36,23,36z " fill={fill}/>
		<path d="M45,8H25c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h20c0.552,0,1-0.448,1-1V9C46,8.448,45.552,8,45,8z" fill={fill}/>
	</g>
</svg>
	);
};

export default Menu;