import React, { useRef, useEffect, useState } from 'react';
import { Http } from '../services/http';
import Loading from './loading/loadingComponent';

export const LanguageComponet = () => {
    const intervalRef = useRef(null);

    const [dataset, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const HttpFromApi = async () => {
            const response = await Http('file');
            if (response) {
                const filteredData = response.filter((item) => item.idUsability === 5);
                setData(filteredData);
                setIsLoading(false);
            }
        };

        HttpFromApi();
    }, []);

    const progressRefs = useRef([]); // Inicializar la referencia como un array vacío

    const startProgressAnimation = (index, endValue) => {
        clearInterval(intervalRef.current);
        const circularProgress = progressRefs.current[index];
        const progressValue = circularProgress?.querySelector('.progress-value');

        if (!circularProgress || !progressValue) {
            // Verificar si los elementos existen antes de continuar
            return;
        }

        let progressStartValue = 0;
        let progressEndValue = endValue;
        let speed = 10;

        intervalRef.current = setInterval(() => {
            progressStartValue++;
            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 4deg)`;

            if (progressStartValue === progressEndValue) {
                clearInterval(intervalRef.current);
            }
        }, speed);
    };

    const handleMouseEnter = (index, progressValue) => {
        startProgressAnimation(index, progressValue);
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current);
    };
    const renderData = () => (
        <div className="row">
            {dataset.map((data) => (
                <div key={data.idFile} className="language flip-card" onMouseEnter={() => handleMouseEnter(data.idFile, data.nivel)} onMouseLeave={handleMouseLeave}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card">
                                <img src={data.url_image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name_file}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="circular-progress" ref={(el) => progressRefs.current[data.idFile] = el}>
                                <span className="progress-value">{data.nivel}</span>
                            </div>
                            <span className="text">{data.name_file}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div className="container component">
            {isLoading ? <Loading /> : renderData()}
        </div>
    )
}