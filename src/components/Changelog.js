import React from 'react';

export default function Changelog({ project, version }) {

    var src = "data:text/html;charset=utf-8,<head><base target='_blank' /></head><body><script src=https://emgithub.com/embed.js?target=https://github.com/EvergoodTeam/Changelogs/blob/main/" + project + "/" + version + ".md&style=github&showBorder=on&showLineNumbers=on&showCopy=on></script></body>";

    return (
        <span>
            <iframe
                width="100%"
                height="250"
                src={src}>
            </iframe>
        </span>
    );
}