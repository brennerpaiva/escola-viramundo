import "./home.css";
import React, { useState } from "react";
import ImageHome from "../../assets/Back-to-School-Illustration-removebg-preview.png";
import ImageAbout from "../../assets/2.jpg";
import Slider1 from "../../assets/img1.jpg";
import Slider2 from "../../assets/img2.jpg";
import Slider3 from "../../assets/img3.jpg";
import Box1 from "../../assets/box-1.png"
import MusicIcon from "../../assets/music-icon.png"
import BaleIcon from "../../assets/bale-icon.png"
import FinanceIcon from "../../assets/finance-icon.png"
import TeacherIcon from "../../assets/teacher-icon.png"

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
            <h1>A Melhor Escola Para Seu Filho</h1>
            <span>
              Bem-vindo à escola Viramundo, um lugar onde o aprendizado ganha
              vida e as crianças são incentivados a explorar seus interesses,
              desenvolver suas habilidades e preparar-se para um futuro
              brilhante.
            </span>
            <button>Ler mais</button>
          </div>
          <div className="img-area">
            <img src={ImageHome} alt="home"></img>
          </div>
        </div>
      </div>
      <section className="diferencials">
        <span className="title">Programas Educacionais</span>
        <h2>Aqui Seu Filho Tem Acesso:</h2>
        <div className="card-diferencials" id="dif1">
          <img src={MusicIcon} alt="music-icon"></img>
          <strong>Aulas de Inglês</strong>
          <span>
            Aprender uma nova língua pode abrir muitas portas no futuro
          </span>
        </div>
        <div className="card-diferencials" id="dif2">
          <img src={BaleIcon}></img>
          <strong>Aulas de Balé</strong>
          <span>A partir do primeiro período da Educação Infantil</span>
        </div>
        <div className="card-diferencials" id="dif3">
          <img src={FinanceIcon}></img>
          <strong>Educação Financeira</strong>
          <span>
            Extremamente importante para as crianças se tornarem adultos com uma
            mentalidade financeira saudável.
          </span>
        </div>
        <div className="card-diferencials" id="dif4">
          <img src={TeacherIcon}></img>
          <strong>Os Melhores Professores</strong>
          <span>
            Professores com experiência e capacitados para ensinar seu filho.
          </span>
        </div>
      </section>

      <div className="bg-about-infos">
        <section className="about-infos">
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

          <span className="title">Programas Educacionais</span>
          <h2>Um Pouco Sobre nós</h2>
          <div className="text-area">
            <p>
              Nossa missão é educar para a vida, oferecendo um ambiente de
              aprendizado seguro, inclusivo e estimulante, onde cada aluno é
              valorizado e respeitado por quem é.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
