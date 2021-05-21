import React from 'react';

function Chevron_left(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" fill={fill}/>
	</g>
</svg>
	);
};

export default Chevron_left;