import React from 'react';

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
        <a className='hero__btn btn' href="mailto:hello@prathameshj.dev" target='_blank'>Reach out</a>
      </section>
      <section id='about' className='about container section'>
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

      <section id='featured' className='featured container section'>
        <h3 className='featured__subtitle'>Featured Projects</h3>
        <div className='featured__wrapper'>

          <h2 className='featured__title'>Kart Mall</h2>
          <a className='featured__link' href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <p className='featured__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse enim facere iste hic, quae distinctio quaerat corporis rerum soluta. Mollitia, nesciunt laudantium. Reiciendis necessitatibus quae doloremque esse quibusdam iusto.</p>

        <div className="featured__info-container">
          <div>
            <h3 className='featuerd__label'>Tech Stack</h3>
            <ul className='featured__tech-stack'>
              <li className='featured__info'>Lore</li>
              <li className='featured__info'>em</li>
              <li className='featured__info'>ips</li>
              <li className='featured__info'>asd</li>
              <li className='featured__info'>xlk</li>
              <li className='featured__info'>asd</li>
            </ul>
          </div>
          <div>
            <h3 className="featured__label">Project Type</h3>
            <p className="featured__info">Backend</p>

          </div>
          <div>
            <h3 className="featured__label">Timeline</h3>
            <p className="featured__info">December 2022 - Present</p>
          </div>
        </div>
        {/* TODO: ADD IMAGES LATER */}
        <div className="featured__img-container">

          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
          <div className='featured__img-wrapper'>
            <img src="/about.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="work container section">
        <h2 className="work__title">Projects</h2>
        <p className="work__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis aperiam minus, sint facilis culpa qui ex accusantium aspernatur eligendi distinctio tempora, voluptate voluptas modi assumenda delectus, cum laudantium sit.
        </p>
        <div className="work__container">
          {/* Project 1 */}
          <h3 className='work__project-title'>Kart Mall</h3>
          {/* use a square image only here. */}
          <div className='work__img-wrapper work__image1'>
            <img src="/about.jpg" alt="Project 1" />
          </div>
          <div className="work__project work__content1">
            <h3 className="work__project-subtitle">Kart Mall</h3>
            <p className='work__project-desc1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis inventore culpa quidem adipisci eius vitae nostrum autem.</p>
            <p className='work__project-desc2'>Aperiam quos possimus magni magnam repellendus ratione officiis iure eos cupiditate velit.</p>
            <a href="#" className="btn work__project-btn">Website</a>
          </div>
          {/* Project 2 */}
          <h3 className='work__project-title'>Kart Mall Draft 2</h3>
          {/* use a square image only here. */}
          <div className='work__img-wrapper work__image2'>
            <img src="/about.jpg" alt="Project 1" />
          </div>
          <div className="work__project work__content2">
            <h3 className="work__project-subtitle">Kart Mall Draft 2</h3>
            <p className='work__project-desc1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis inventore culpa quidem adipisci eius vitae nostrum autem.</p>
            <p className='work__project-desc2'>Aperiam quos possimus magni magnam repellendus ratione officiis iure eos cupiditate velit.</p>
            <a href="#" className="btn work__project-btn">Website</a>
          </div>
        </div>
      </section>
      <section id='contact' className='contact container section'>
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__desc">Hi there! Glad you made it this far. In case you liked my profile and have a job opportunity for me or looking for us to contribute on a project my inbox is always open.</p>
        <a href="mailto:hello@prathameshj.dev" target='_blank' className="contact__btn btn">Reach Out</a>
      </section>
    </main>
  )
}
