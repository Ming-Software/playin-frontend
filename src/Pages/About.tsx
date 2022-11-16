import ApiService from "../Services/Api.service";
import axios from "axios";

export const AboutPage = () => {
  const getevents = (event: any) => {
    event.preventDefault();
    ApiService.httpGet("api/events")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {})
      .finally();
  };

  return (
    <section className="section" id="about">
      {/* Title */}
      <header className="hero is-primary">
        <div className="hero-body">
          <div className="has-text-white">
            Olá! Nós somos
            <h1 className="title is-1 has-text-white">Ming Software</h1>
            <h2 className="subtitle is-4 has-text-white">Follow your ming</h2>
          </div>
        </div>
      </header>

      {/* Quem somos */}
      <section className="section" id="about">
        <div className="section-heading">
          <h3 className="title is-2">Sobre Nós</h3>
          <div className="has-text-justified">
            <p>
              A nossa equipa nasceu de uma longa amizade. Tudo começou em 2018, quando todos entramos para o ensino superior no curso
              Mestrado Integrado de Engenharia Informática na Universidade do Minho. Trabalhamos juntos desde então e decidimos criar a{" "}
              <strong>Ming Software</strong>. Constituída por um grupo de amigos, a <strong>Ming Software </strong>
              surge do sonho de todos os elementos, sendo o nosso objetivo-mor a disponibilização de ferramentas úteis para a comunidade,
              apostando na competência e no trabalho árduo, de modo a levar o nosso <strong> Ming </strong> mais adiante.
            </p>
          </div>
        </div>
      </section>

      {/* Imagens e nomes */}
      <div className="columns is-multiline is-mobile">
        <div className="column ml-6 my-6">
          <strong> Rodrigo Meira </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/RodrigoMeira.jpg" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> João Félix </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/JoaoFelix.jpg" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> Daniel Sousa </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/dani.jpg" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> João Sá </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/JoaoSa.jpg" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> Rafael Azevedo </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/RafaelAzevedo.jpg" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> José Veloso </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/ze.png" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> José Barros </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/JoseBarros.jpg" />
          </figure>
        </div>
        <div className="column ml-6 my-6">
          <strong> João Amorim </strong>
          <figure className="image is-128x128">
            <img className="is-rounded" src="OurPhotos/JoaoAmorim.jpg" />
          </figure>
        </div>
      </div>
      <button onClick={getevents} className="button is-primary is-fullwidth has-text-center is-center" type="submit">
        Login
      </button>
    </section>
  );
};

export default AboutPage;
