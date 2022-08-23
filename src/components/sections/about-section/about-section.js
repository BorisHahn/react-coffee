import './about-section.css';
import aboutLogo from '../../../img/about-logo.svg';



const AboutSection = ({info}) => {
  return (
    <div className="about">
      <img className="about__image" src={info.img} alt="girl"></img>
      <div className="about__text">
        <h2 className="about__text-title">{info.title}</h2>
        <img className="about__text-logo" src={aboutLogo} alt="logo"></img>
        <article className='about__text-article'>
          <p>{info.firstText}</p>
          <p>{info.secondText}</p>
        </article>
      </div>
    </div>
  )
}

export default AboutSection;