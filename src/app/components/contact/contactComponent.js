import React, { useEffect,useState }from 'react';
import { Http } from '../../services/http';
import LoadingInit from './../loadingInit/loadingInitComponent';
import './contactComponent.scss';

export const ContactComponent = () => {
    const [dataset, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const HttpFromApi = async () => {
            const response_file = await Http('file');
            if (response_file) {
                const filteredData = response_file.filter((item) => item.idUsability === 6);
                setData(filteredData);
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
        <div className="col-lg-4 col-md-8 col-sm-12 contact-render">
            <div className="card">
                <div className="card-header">
                    <h1>Enviar Mensaje</h1>
                </div>
                <div className="card-body">
                    <form method="POST" id="formulario_contacto" action="https://formsubmit.co/el/mofepi">
                        <div className="form-floating mb-3">
                            <input type="text" id="name" className="form-control" name="name" required autoFocus placeholder="Bryan Daniell Arrivasplata Rojas"></input>
                            <label htmlFor="name">Nombre Completo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" id="email" className="form-control" name="email" required placeholder="bryanarrivasplata.rojas@gmail.com"></input>
                            <label htmlFor="email">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea required placeholder="Escribe tu mensaje" className="form-control" name="subject" id="subject" cols="30" rows="5"></textarea>
                            <label htmlFor="subject">Mensaje</label>
                        </div>
                        <div className="msg mt-3 mb-3"></div>
                        <div className="form-group">
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="row fanpage">
                        <div className="btn-group">
                            {dataset.map((data) => (
                                <a key={data.idFile} title={data.name_file} href={data.url_visit} type="button" className={data.url_icon}> </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className={`row justify-content-center container-fluid contactComponent `}>
            {isLoading ? <LoadingInit /> : renderData()}
        </div>
    )
}