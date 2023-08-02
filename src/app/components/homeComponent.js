import React, { useEffect,useState } from 'react';
import { Http } from '../services/http';
import LoadingInit from './loadingInit/loadingInitComponent';

export const HomeComponent = () => {
    const [dataset, setData] = useState([]);
    const [datasetSite, setDataSite] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const HttpFromApi = async () => {
            const response_user = await Http('user') ;
            const response_file = await Http('file');
            if (response_user && response_file) {
                const filteredData = response_file.filter((item) => item.idType === 6);
                setData(response_user);
                setDataSite(filteredData);
                setIsLoading(false);
            }
        };

        HttpFromApi();
    }, []);
    useEffect(() => {
        // Aplicar el estilo al body cuando isLoading es true
        if (isLoading) {
            document.body.style.overflowY = 'hidden';
        } else {
            // Quitar el estilo cuando isLoading es false
            document.body.style.overflowY = 'auto';
        }
    }, [isLoading]);
    const renderData = () => (
        <div>
            {dataset.map((data) => (
                <div key={data.idUser}>
                    <h1>I'm {data.profile.name_profile}</h1>
                    <ul>
                        {datasetSite.map((dataSite) => (
                            <li key={dataSite.idFile}>{dataSite.name_file}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
    return (
        <div className={`col ${isLoading ? 'container-bar' : ''}`}>
            {isLoading ? <LoadingInit /> : renderData()}
        </div>
    )
}