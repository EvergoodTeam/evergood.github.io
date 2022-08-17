import React from 'react';

export default function Block({ row, col }) {

    const size = 28;
    const square = `${size * 4}px ${(size * 4)}px`;
    const itemCoords = `-${size * col}px -${size * row}px`

    const sprite = {
        background: 'url(/utils/compressorSprite.png)',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundSize: square,
        height: size,
        width: size
    }

    const item = { backgroundPosition: itemCoords }

    return (
        <span style = {{padding: '5px'}}><span style={Object.assign({}, sprite, item)}/></span>
    );
}