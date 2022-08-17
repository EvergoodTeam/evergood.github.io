import React from 'react';
import Markdown from 'react-markdown';

export default function Download({ type, project }) {

    var link = "https://www.curseforge.com/minecraft/"+ type + "/" + project;
    var markdown = "Currently only available on [**Curseforge**](" + link + ")";

    return (
        <Markdown children = {markdown}/>
    );
}