import ApiService from "../Services/Api.service";

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
    <>
      {/* Title */}
      <header className="hero is-primary">
        <div className="hero-body">
          <div className="has-text-white">
            Olá! Nós somos
            <h1 className="title has-text-white">Ming Software</h1>
            <h2 className="subtitle has-text-white">Follow your ming</h2>
          </div>
        </div>
      </header>

      {/* Quem somos */}
      <section className="section">
        <div className="content">
          <p className="title">Sobre Nós</p>
          <p className="has-text-justified">
            A nossa equipa nasceu de uma longa amizade. Tudo começou em 2018,
            quando todos entramos para o ensino superior no curso Mestrado
            Integrado de Engenharia Informática na Universidade do Minho.
            Trabalhamos juntos desde então e decidimos criar a{" "}
            <strong>Ming Software</strong>. Constituída por um grupo de amigos,
            a <strong>Ming Software </strong>
            surge do sonho de todos os elementos, sendo o nosso objetivo-mor a
            disponibilização de ferramentas úteis para a comunidade, apostando
            na competência e no trabalho árduo, de modo a levar o nosso{" "}
            <strong> Ming </strong> mais adiante.
          </p>
        </div>
      </section>

      {/* Imagens e nomes */}
      <section className="section">
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong> Rodrigo Meira </strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/RodrigoMeira.jpg" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong> João Félix </strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/JoaoFelix.jpg" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong> Daniel Sousa </strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/dani.jpg" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong> João Sá </strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/JoaoSa.jpg" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong>Rafael Azevedo</strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/RafaelAzevedo.jpg" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong>José Veloso</strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/ze.png" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong> José Barros </strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/JoseBarros.jpg" />
            </figure>
          </div>

          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            <p className="has-text-centered">
              <strong>João Amorim</strong>
            </p>
            <figure className="image is-square mt-3">
              <img className="is-rounded" src="OurPhotos/JoaoAmorim.jpg" />
            </figure>
          </div>
        </div>
      </section>
      {/* <button
        onClick={getevents}
        className="button is-primary is-fullwidth has-text-center is-center"
        type="submit"
      >
        Login
      </button> */}
    </>
  );
};

export default AboutPage;
