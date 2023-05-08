import "./home.css";
import React, { useState } from "react";
import ImageHome from "../../assets/Back-to-School-Illustration-removebg-preview.png";
import ImageAbout from "../../assets/2.jpg";
import Slider1 from "../../assets/img1.jpg";
import Slider2 from "../../assets/img2.jpg";
import Slider3 from "../../assets/img3.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  }

  return (
    <>
      <div className="bg">
        <div className="headline">
          <div className="text-area">
            <h1>A melhor escola para seu filho</h1>
            <span>
              Escola particular do maternal ao quinto ano! Escola particular do
              maternal ao quinto ano! Escola particular do maternal ao quinto
              ano! Escola particular do maternal ao quinto ano!
            </span>
            <button>Ler mais</button>
          </div>
          <div className="img-area">
            <img src={ImageHome} alt="home"></img>
          </div>
        </div>
      </div>
      <section className="about">
        <div className="text-area">
          <h1>Quem Somos Nós?</h1>
          <span>
            A Escola Municipal Viramundo foi fundada em 1985 e desde então vem
            se dedicando à educação de qualidade para crianças e jovens em
            Formiga. Sua missão é oferecer uma educação integral e inclusiva,
            valorizando a diversidade e estimulando o desenvolvimento integral
            dos alunos.
          </span>
        </div>
        <div className="img-area">
          <img src={ImageAbout} alt="sobre"></img>
        </div>
      </section>
      <section className="instalation">
        <div className="text-area">
          <span>
            A Escola Municipal Viramundo foi fundada em 1985 e desde então vem
            se dedicando à educação de qualidade para crianças e jovens em
            Formiga. Sua missão é oferecer uma educação integral e inclusiva,
            valorizando a diversidade e estimulando o desenvolvimento integral
            dos alunos.
          </span>
          <h1>Instalação e Recursos</h1>
        </div>
        <div className="img-area">
          <img src={ImageAbout} alt="instalation"></img>
        </div>
      </section>

      <div className="container-slider">
        <button id="prev-button" onClick={prevSlide}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
        <div className="container-images">
          <img
            src={Slider1}
            alt="girl"
            className={`slider ${currentSlide === 0 ? "on" : ""}`}
          />
          <img
            src={Slider2}
            alt="girl"
            className={`slider ${currentSlide === 1 ? "on" : ""}`}
          />
          <img
            src={Slider3}
            alt="girl"
            className={`slider ${currentSlide === 2 ? "on" : ""}`}
          />
        </div>
        <button id="next-button" onClick={nextSlide}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </>
  );
}
