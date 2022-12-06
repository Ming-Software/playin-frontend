export const ProfilePage = () => {
    return (
        <div className="">
            {/* hero */}
            <header className="hero is-primary">
                <div className="hero-body">
                    <div className="columns is-mobile is-multiline is-centered">
                        <div className="column is-narrow">
                            <strong> Rodrigo Meira </strong>
                            <figure className="image is-128x128">
                                <img
                                    className="is-rounded"
                                    src="OurPhotos/RodrigoMeira.jpg"
                                />
                            </figure>
                        </div>
                        <div className="column is-mobile ">
                            <div className="box">
                                <div className="columns is-mobile">
                                    <div className="column mr-2">
                                        <figure className="image is-48x48">
                                            <img src="Ranks/lvl1.png" />
                                        </figure>
                                    </div>
                                    <div className="column ml-2 mr-2">
                                        <p>1010</p>
                                        <p>
                                            <strong>Jogos</strong>
                                        </p>
                                    </div>
                                    <div className="column ml-2 mr-4">
                                        <p>Futebol</p>
                                        <p>
                                            <strong>Desporto Favorito</strong>
                                        </p>
                                    </div>
                                    <div className="column ml-4">
                                        <p>Social</p>
                                        <p>
                                            <strong>
                                                Nivel de Competividade
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <progress
                                    className="progress is-link is-large"
                                    value="5"
                                    max="100"
                                >
                                    20%
                                </progress>
                            </div>
                        </div>
                        <div className="column is-mobile">
                            <p>
                                <strong>FBI</strong>
                            </p>
                            <p>Comportamento</p>
                            <progress
                                className="progress is-danger"
                                value="100"
                                max="1000"
                            ></progress>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <h2 className="subtitle mt-6">Descrição</h2>
                <p>
                    Homem com vontade de jogar à bola (Futebol) e acima de tudo
                    conviver.
                </p>
                <h2 className="subtitle mt-6">Últimos 20 jogos</h2>
                <div className="box has-background-success has-text-white">
                    <p> Padel + Ganhou </p>
                </div>
                <div className="box has-background-danger has-text-white">
                    <p> Padel + Empatou</p>
                </div>
                <div className="box has-background-warning has-text-white">
                    <p> Padel + Perdeu</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
