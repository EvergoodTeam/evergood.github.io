import React from 'react';
import {Request} from 'react-axios';
import CodeBlock from '@theme/CodeBlock';
import Details from '../theme/Details/index';

// TODO: have single changelog file per project, add separators between each update
// + have proper markdown (links etc.) support with maybe codeblock font?

// First solution was https://emgithub.com/ , but it wasn't playing nicely with dark and light theme
export default function Changelog({ project, version }) {

    const urlVersion = version.split('.').join("");
    const sourceUrl = "https://raw.githubusercontent.com/EvergoodTeam/Changelogs/main/" + project + "/" + urlVersion + ".md";
    
    return (
        // node_modules\@docusaurus\theme-common\src\components\Details\index.tsx
        <Details summary = {<summary>{version} Changelog</summary>}>
            <Request url = {sourceUrl}>
                {(error, response, isLoading, makeRequest, axios) => {
                    //console.log(response)
                    if(response != null){
                        return (<div><CodeBlock showLineNumbers>{response.data}</CodeBlock></div>)
                        
                        //<pre>{response.data}</pre>
                    } 
                    else return null;
                }}
            </Request>
        </Details>
    );
}