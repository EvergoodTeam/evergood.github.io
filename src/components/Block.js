import React from 'react';

export default function Block({ row, col }) {

    const size = 28;
    const square = `${size * 4}px ${(size * 4)}px`;
    const itemCoords = `-${size * col}px -${size * row}px`

    const sprite = {
        background: 'url(/utils/compressorSprite.png)',
        filter: 'drop-shadow(0 0 2px #464649)',
        display: 'inline-block',
        marginBottom: '1px',
        verticalAlign: 'middle',
        backgroundSize: square,
        height: size,
        width: size,
        backgroundPosition: itemCoords
    }

    return (
        <span style = {{padding: '5px', class: 'item shadow--tl'}}><span style={sprite}/></span>
    );
}