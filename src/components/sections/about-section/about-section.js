import './about-section.css';
import aboutLogo from '../../../img/about-logo.svg';

const AboutSection = () => {
  return (
    <div className="about">
      <div className="about__image"></div>
      <div className="about__text">
        <h2 className="about__text-title">About our beans</h2>
        <img className="about__text-logo" src={aboutLogo}></img>
        <article className='about__text-article'>
          <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
          <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
             As greatly removed calling pleased improve an. Last ask him cold feel
             met spot shy want. Children me laughing we prospect answered followed. At it went
             is song that held help face.
          </p>
        </article>
      </div>
    </div>
  )
}

export default AboutSection;