import React from 'react';

// Have download counter

function card(site, link) {
    return (<a href={link}><div style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginInline: '.75rem',
        width: '18rem'
    }} className="card shadow--tl">
        <div className="card__header">
            <span className={'download-' + site} />
        </div>
    </div></a>);

    /** <div class="card__body">
            <Markdown components={{ p: React.Fragment }} children={markdown}/>
        </div> */
    /**<div class="card__footer">
            <button class="button button--secondary button--block">See All</button>
        </div> */
}

/*export default function Download({ typeCurseForge, typeModrinth, project }) {
    return (<div style={{ textAlign: 'center', margin: '2rem' }}>
        <Download type={typeCurseForge} project={project}></Download><Modrinth type={typeModrinth} project={project}></Modrinth>
    </div>);
}*/

export function Curseforge({ type, project }) {
    var link = "https://www.curseforge.com/minecraft/" + type + "/" + project;
    return (card("curseforge", link));
}

export function Modrinth({ type, project }) {
    var link = "https://modrinth.com/" + type + "/" + project;
    return (card("modrinth", link));
}