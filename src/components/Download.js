import React from 'react';

function card(site, link) {
    return (
        <a href={link}><div className="card card-button">
            <div className="card__header">
                <span className={'download-' + site} />
            </div>
        </div></a>);
}

export function Curseforge({ type, project }) {
    var link = "https://www.curseforge.com/minecraft/" + type + "/" + project;
    return (card("curseforge", link));
}

export function Modrinth({ type, project }) {
    var link = "https://modrinth.com/" + type + "/" + project;
    return (card("modrinth", link));
}