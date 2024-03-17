import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    const [changelog, setChangelog] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(sourceUrl);
                setChangelog(response.data); // Assuming the response contains the string data
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
        }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Details summary={<summary><em><strong>{version}</strong> - {day}</em></summary>}>
             <div><Markdown children={changelog} /></div>
        </Details>
    );
}