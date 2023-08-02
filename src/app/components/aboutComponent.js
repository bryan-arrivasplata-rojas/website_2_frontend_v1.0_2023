import React, { useEffect,useState } from 'react';
import { Http } from '../services/http';
import Loading from './loading/loadingComponent';
const image_me = process.env.REACT_APP_IMAGE_ME;

export const AboutComponet = () => {
    const [dataset, setData] = useState([]);
    const [datasetSite, setDataSite] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HttpFromApi = async () => {
            const response_user = await Http('user');
            const response_file = await Http('file');
            if (response_user && response_file) {
                const filteredData = response_file.filter((item) => item.idUsability === 6);
                setData(response_user);
                setDataSite(filteredData);
                setIsLoading(false);
            }
        };

        HttpFromApi();
    }, []);
    const renderData = () => (
        <div className="component">
            {dataset.map((data) => (
                <div key ={data.idUser} className="content">
                    <img className="img-me" src={image_me} alt="..." />
                    <div className="text">
                        <h1>{data.profile.name_profile}</h1>
                        <p>
                            {data.profile.description_profile}
                        </p>
                        <div className="data-personal">
                            <strong>Datos personales:</strong>
                            <ul>
                                {datasetSite.map((dataSite) => (
                                    <li key={dataSite.idFile}><strong>{dataSite.name_file}: </strong><a href={dataSite.url_visit}>{dataSite.description_file}</a></li>
                                ))}
                                <li><strong>Email: </strong><a href={`mailto:${data.email}`}>{data.email}</a></li>
                                <li><strong>Cumpleaños: </strong>{data.profile.birthday}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div className="about">
            {isLoading ? <Loading /> : renderData()}
        </div>
    )
}