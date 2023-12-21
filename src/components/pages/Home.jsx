import React from 'react';
import './Home.css'

export const Home = () => {
  return (
    <main>
      <section className='hero container'>
        <img className='hero__img' src="/hero_img.jpg" alt="Profile Picture" />
        <h2 className='hero__subtitle'>Hi, I'm Prathamesh 👋</h2>
        {/* 
      <div class="wrapper">
        <div class="static-txt">I'm a</div>
        <ul class="dynamic-txts">
          <li><span>Developer</span></li>
          <li><span>Freelancer</span></li>
          <li><span>Graduate</span></li>
          <li><span>Piston Head</span></li>
        </ul>
      </div> */}

        <h1 className='hero__title'>BACK-END <br /> JAVA DEVELOPER.</h1>
        <p className='hero__desc'>Some <strong>generic</strong> description</p>
        <a className='hero__btn btn' href="#">Reach out</a>
      </section>
      <section className='about container section'>
        <div className='about__content'>
          <h2 className='about__title'>About</h2>
          <p className='about__desc'>Hello there! I'm Prathamesh, a <strong>Backend Developer</strong> based near Pune, India. I wake up in the morning grab my oatmeal and build reliable production ready Java Spring Boot apps, everyday.</p>
          <p className='about__desc'>People who know me say I'm obsessed, that's fair. I am driven by technology and love to learn new things.</p>
          <p className='about__desc'></p>
          <hr className='about__hr' />
          <h3 className='about__subtitle'>Technologies</h3>
          <div className='about__ul-container'>
            <ul className='about__ul'>
              <li className='about__li'>Java</li>
              <li className='about__li'>Spring Boot</li>
              <li className='about__li'>Redis</li>
            </ul>
            <ul className='about__ul'>
              <li className='about__li'>Apache Kafka</li>
              <li className='about__li'>Elasticsearch</li>
              <li className='about__li'>MySQL</li>
            </ul>
          </div>
        </div>
        <div className='about__img-wrapper'>
          <img className='about__img' src="/about.jpg" alt="Profile Image" />
        </div>
      </section>

    </main>
  )
}
