import React from 'react';
import { Request } from 'react-axios';
import Details from '../theme/Details/index';
import dates from '../util/storage.json'
import Markdown from 'react-markdown';

// First solution was https://emgithub.com/ , but it wasn't playing nicely with dark and light theme
export default function Changelog({ type, project, version }) {
    const urlVersion = version.split('.').join("");
    const path = `/${project}/${urlVersion}.md`;
    const sourceUrl = `https://raw.githubusercontent.com/EvergoodTeam/Changelogs/main${path}`;
    var day = dates[type][project][urlVersion];
    if (day == null) day = "N/A";

    /*
    const [date, setDate] = React.useState('');
    React.useEffect(() => {
        let isMounted = true;
        database.getProject(type, project, version)
            .then(date => {
                if (isMounted) setDate(date)})
        return () => { isMounted = false }
    }, [])*/

    return (
        // node_modules\@docusaurus\theme-common\src\components\Details\index.tsx
        <Details summary={<summary><em><strong>{version}</strong> - {day}</em></summary>}>
            <Request url={sourceUrl}>
                {(error, response, isLoading, makeRequest, axios) => {
                    if (response != null) {
                        return (<div><Markdown children={response.data} /></div>);
                    }
                    else return null;
                }}
            </Request>
        </Details>
    );
}