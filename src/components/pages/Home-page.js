import logoBlack from '../../img/footer-logo.svg';
import CoffeeItem from '../sections/coffee-item-section/coffee-item-section';
import './Home-page.css';


function Home({ dataBest }) {
  const array = dataBest.map(item => {
    const { id, ...itemProps } = item;
    return (
      <>
        <CoffeeItem key={id} {...itemProps} />
      </>
    )
  })
  return (
    <>
      <div className="main-about">
        <h2 className="main-about__title">About Us</h2>
        <img className="main-about__logo" src={logoBlack} alt="main page logo"></img>
        <p className="main-about__textblock">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.
          <br />
          <br />
          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
        </p>
      </div>
      <div className='main-best'>
        <h2 className='main-best__title'>Our best</h2>
        <div className='main-best__list'>
          {array}
        </div>
      </div>
    </>
  )
}

export default Home;