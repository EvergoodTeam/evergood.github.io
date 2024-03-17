import React from 'react';
import Markdown from 'react-markdown';

export default function Source({ project }) {

    var link = "https://github.com/EvergoodTeam/" + project;
    var markdown = "You can find the source code on [**GitHub**](" + link + ")";

    return (
        <Markdown children = {markdown}/>
    );
}