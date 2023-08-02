import React, { useEffect,useState } from 'react';
import { Http } from '../services/http';
import Loading from './loading/loadingComponent';

export const ExperienceComponet = () => {
    const [dataset, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HttpFromApi = async () => {
        const response = await Http('file');
        if (response) {
            const filteredData = response.filter((item) => item.idUsability === 16);
            setData(filteredData);
            setIsLoading(false);
        }
        };

        HttpFromApi();
    }, []);
    const renderData = () => (
        <div className='container-fluid row'>
            {dataset.map((data) => (
                <div key={data.idFile} className="col-sm col-lg experiencie-bottom">
                    <div className="card">
                        <div className="card-image" data-bs-toggle="modal" data-bs-target={`#exampleModal${data.idFile}`} style={{ cursor: 'pointer' }}>
                            <img src={data.url_icon} className="card-img-top img-thumbnail" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">{data.description_file}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" title={data.name_file} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${data.idFile}`}>Ver constancia</button>
                        </div>
                    </div>
                    <div className="modal fade" id={`exampleModal${data.idFile}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${data.idFile}`}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id={`exampleModalLabel${data.idFile}`}>{data.name_file}</h1>
                                    <button title="Close" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img src={data.url_image} className="card-img-top img-thumbnail" alt="..."></img>
                                </div>
                                <div className="modal-footer">
                                    <button title="Close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div className="component">
            {isLoading ? <Loading /> : renderData()}
        </div>
    )
}