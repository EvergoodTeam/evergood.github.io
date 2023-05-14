import React from 'react';
import Markdown from 'react-markdown';

// Have download counter

function card(site, link) {
    return (<div style={{
        //backgroundColor: '#00AF5C',
        display: 'inline-block',
        marginInline: '.75rem',
        width: '18rem'
    }} class="card shadow--tl">
        <div class="card__header">
            <a href={link}><span className={'download-' + site} /></a>
        </div>
    </div>);

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
    var markdown = "Download over at [**CurseForge**](" + link + ")";
    return (card("curseforge", link));
}

export function Modrinth({ type, project }) {
    var link = "https://modrinth.com/" + type + "/" + project;
    var markdown = "Download over at [**Modrinth**](" + link + ")";
    return (card("modrinth", link));
}