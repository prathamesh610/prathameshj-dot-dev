import React from 'react'

export const Home = () => {
  return (
    <div className='hero container'>
      <img className='hero__img' src="/hero_img.jpg" alt="Profile Picture" />
      <h2 className='hero__subtitle'>Hi, I'm Prathamesh 👋</h2>
      <h1 className='hero__title'>BACK-END <br /> JAVA DEVELOPER.</h1>
      <p className='hero__desc'>Some <strong>generic</strong> description</p>
      <a className='hero__btn btn' href="#">Reach out</a>
    </div>
  )
}
