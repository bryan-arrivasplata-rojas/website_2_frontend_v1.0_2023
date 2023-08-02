import React, { useState,useEffect,lazy,Suspense } from 'react';
import { Http } from '../services/http';
import Loading from './loading/loadingComponent';

const YouTubeLazy = lazy(() => import('./lazyYoutubes'));
export const PortafolioComponet = () => {
    
    const [dataset, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HttpFromApi = async () => {
            const response = await Http('file');
            if (response) {
                const filteredData = response.filter((item) => item.idUsability === 4);
                // Agrupar los elementos por idType usando reduce()
                const groupedData = filteredData.reduce((acc, item) => {
                    if (!acc[item.idType]) {
                        acc[item.idType] = [];
                    }
                    acc[item.idType].push(item);
                    return acc;
                }, {});
                setData(groupedData);
                setIsLoading(false);
            }
        };

        HttpFromApi();
        
    }, []);
    const renderData = () => (
        <div>
            {Object.keys(dataset).map((idType) => (
                <div key={idType} className="card text-center">
                    <div className="card-header">
                        <h1>{dataset[idType][0].type.name_type}</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {dataset[idType].map((data, index) => (
                                <div key={index} className="col-lg">
                                    <div className="card">
                                        <div className="card-header">{data.name_file}</div>
                                        {/*<LazyYouTube videoId={data.videoID} />*/}
                                        <Suspense fallback={<div>Loading...</div>}>
                                            <YouTubeLazy videoId={data.url_video} />
                                        </Suspense>
                                        
                                        <div className="card-body">
                                            <p className="card-text">{data.description_file} - Los lenguajes empleados fueron: <strong>{data.language}</strong></p>
                                        </div>
                                        <div className="card-footer">
                                            {data.url_visit && (
                                                <a href={data.url_visit} type="button" className="btn btn-primary">
                                                    <i className="bi bi-browser-edge"></i> Visit
                                                </a>
                                            )}
                                            {data.url_document && (
                                                <a href={data.url_document} type="button" className="btn btn-secondary">
                                                    <i className="bi bi-file-earmark-pdf"></i> Document
                                                </a>
                                            )}
                                            {data.url_download && (
                                                <a href={data.url_download} type="button" className="btn btn-success">
                                                    <i className="bi bi-cloud-download"></i> Download
                                                </a>
                                            )}
                                            {data.url_repository && (
                                                <a href={data.url_repository} type="button" className="btn btn-dark">
                                                    <i className="bi bi-github"></i> Repository
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="card-text">{dataset[idType][0].type.description_type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
    
    return (
        <div className='container-fluid component'>
            {isLoading ? <Loading /> : renderData()}
        </div>
    )
}