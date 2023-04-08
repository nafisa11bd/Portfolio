import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/webdev.png";
import IMG2 from "../../assets/android.png";
import IMG3 from "../../assets/ml.png";
import IMG4 from "../../assets/game.jpg";
import IMG5 from "../../assets/script.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="aa" />
          </div>
          <h3>Bachelor Student Management System</h3>
          <a
            href="https://github.com/nafisa11bd/bachelorstudentmanagementsystem"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="aa" />
          </div>
          <h3>Online Donation System</h3>
          <a
            href="https://github.com/nafisa11bd/Online-donation-system"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="aa" />
          </div>
          <h3>CNN & LSTM Based Weather Forecasting</h3>
          <a
            href="https://github.com/nafisa11bd/Online-donation-system"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="aa" />
          </div>
          <h3>Portfolio website</h3>
          <a
            href="https://github.com/nafisa11bd/portfolio-project"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="aa" />
          </div>
          <h3>Way to Mars</h3>
          <a
            href="https://github.com/nafisa11bd/Way-to-Mars"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="aa" />
          </div>
          <h3>Kaggle Titanic Project</h3>
          <a
            href="https://github.com/nafisa11bd/Kaggle-Titanic-Dataset-Notebook-"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="aa" />
          </div>
          <h3>Website Blocker</h3>
          <a
            href="https://github.com/nafisa11bd/Website-Blocker"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="aa" />
          </div>
          <h3>Whatsapp Automation software</h3>
          <a
            href="https://github.com/nafisa11bd/WhatsApp-Automation"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="aa" />
          </div>
          <h3>Image Searching Webapp</h3>
          <a
            href="https://github.com/nafisa11bd/Image-Searching-Webapp-using-React"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
