import './style/index.css';
import React, { useState } from 'react';

import { texts } from './texts';

import Logo from './static/svg/logo.svg';
import HeaderImage from './static/images/CHARACTER.png';

const generateFlag = (count) => {
  let x = [];
  for (let i = 0; i < count; i++) {
    x.push('t');
  }
  return x;
};

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const validate = () => {
    if (name.length > 0 && email.length > 0 && phone.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const addFiles = (e) => {
    const files = e.target.files;
    const filesArr = [];
    for (let i = 0; i < files.length; i++) {
      filesArr.push(files[i]);
    }
    setFiles(filesArr);
  };
  const sendEmail = async (e) => {
    if (!validate()) {
      alert('Заполните все поля');
      return;
    }
    // const url = 'https://dev.kmbinat.com/send';
    const response = await fetch('http://localhost:3030/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // cors
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        files: files,
      }),
    });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className='page'>
      <section className='header'>
        <div className='wrapper'>
          <nav className='nav'>
            <div className='logo'>
              <img src={Logo} alt='Logo' />
            </div>
            <div className='nav__links'>
              <a href='#' className='nav__link nav__main'>
                {texts[currentLanguage].nav.main}
              </a>
              <a href='#about' className='nav__link nav__other'>
                {texts[currentLanguage].nav.about}
              </a>
              <a href='#opportunity' className='nav__link nav__opportunities'>
                {texts[currentLanguage].nav.opportunities}
              </a>
              <a href='#contact' className='nav__link nav__other'>
                {texts[currentLanguage].nav.contacts}
              </a>
            </div>

            <div className='lang__switcher'>
              <div
                onClick={() => {
                  setCurrentLanguage(1);
                }}
                className={currentLanguage === 1 ? 'lang active' : 'lang'}
              >
                rus
              </div>
              <div
                onClick={() => {
                  setCurrentLanguage(2);
                }}
                className={currentLanguage === 2 ? 'lang active' : 'lang'}
              >
                kaz
              </div>
              <div
                onClick={() => {
                  setCurrentLanguage(0);
                }}
                className={currentLanguage === 0 ? 'lang active' : 'lang'}
              >
                eng
              </div>
            </div>
            {/* <div className='nav__info'>
              <div className='nav__info__item'>
                <a href='tel:+7707 777 77 77' className='nav__info__link'>
                  +7 707 777 77 77
                </a>
                <span className='nav__info__divide'>/</span>
                <a href='#' className='nav__info__link'>
                  <svg
                    width='41'
                    height='40'
                    viewBox='0 0 41 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_4_54)'>
                      <path
                        d='M18.5 0L21.0361 13.7279L31.8836 4.82158L24.9136 16.9539L39 17.0409L25.7921 21.8973L36.5283 30.9312L23.2619 26.2373L25.6223 40L18.5 27.9547L11.3836 40L13.744 26.2373L0.477571 30.9312L11.2079 21.8973L-2 17.0409L12.0923 16.9539L5.12229 4.82158L15.9697 13.7279L18.5 0Z'
                        fill='#A8A8A8'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_4_54'>
                        <rect width='41' height='40' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  Оставить заявку
                </a>
              </div>
            </div> */}
          </nav>
          <div className='header__content'>
            <div className='header__content__text'>
              {texts[currentLanguage].header.firstLine}
              <span className='header__span'>
                {texts[currentLanguage].header.secondLine}
              </span>
              <div className='header__subtitle'>
                <span className='line'>|</span>
                <div className='header__subtitle__text'>
                  {texts[currentLanguage].header.subtitle}
                </div>
              </div>
            </div>
            <div className='header__content__image'></div>
          </div>

          <div className='online__content'>
            <div className='online__text'>
              <div className='online__text__top'>
                <div className='online__title'>
                  {texts[currentLanguage].online.title}
                </div>
                <div className='online__subtitle'>
                  {texts[currentLanguage].online.subtitle}
                </div>
              </div>
              <div className='online__text__bottom'>
                <div className='border__line'></div>
                {texts[currentLanguage].online.third}
              </div>
            </div>
            <div className='online__image'>
              <img
                src={require('./static/images/second.png')}
                alt='HeaderImage'
                loading='lazy'
                className='online__image__first'
              />
            </div>
          </div>

          <div className='about' id='about'>
            <div className='about__first__line'>
              <div className='about__first__line__title'>
                {texts[currentLanguage].about.title}
                <span className='about__title'>
                  {texts[currentLanguage].about.title2}
                </span>
              </div>
              <div className='about__first__line__subtitle'>
                {texts[currentLanguage].about.subtitle}
              </div>
            </div>
            <div className='about__second__line'>
              <div className='about__second__line__item'>
                {texts[currentLanguage].about.guideline1}
                <br />
                {texts[currentLanguage].about.guideline1_2}
              </div>
              <div className='about__second__line__dash' />
              <div className='about__second__line__item'>
                {texts[currentLanguage].about.guideline2}
                <br />
                {texts[currentLanguage].about.guideline2_2}
              </div>
              <div className='about__second__line__dash' />
              <div className='about__second__line__item'>
                {texts[currentLanguage].about.guideline3}
                <br />
                {texts[currentLanguage].about.guideline3_2}
              </div>
              <div className='about__second__line__download'>
                {texts[currentLanguage].about.download}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='opportunities' id='opportunity'>
        <div className='flags'>
          {generateFlag(Math.floor(window.innerWidth / 52)).map(() => {
            return <div className='flag'></div>;
          })}
        </div>
        <div className='opportunities__texts'>
          <div className='wrapper'>
            <div className='opportunities__texts__first'>
              <div className='opportunities__texts__block'>
                <div className='opportunities__texts__title'>
                  {texts[currentLanguage].opportunities.title1}
                </div>
                <div className='opportunities__texts__title'>
                  {texts[currentLanguage].opportunities.title2}
                </div>
                <div className='opportunities__texts__subtitle'>
                  {texts[currentLanguage].opportunities.subtitle1}
                </div>
              </div>

              <div className='right_block'>
                <div className='opportunities__photo'>
                  <img
                    src={require('./static/images/photo.jpeg')}
                    alt='HeaderImage'
                    loading='lazy'
                  />
                </div>
                <div className='opportunities__texts__right'>
                  <div className='opportunities__texts__person'>
                    <div className='opportunities__texts__name'>
                      {texts[currentLanguage].opportunities.name}
                    </div>
                    <div className='opportunities__texts__position'>
                      {texts[currentLanguage].opportunities.position}
                    </div>
                    <div className='dashed__line'>---------</div>
                  </div>
                  <div className='opportunities__texts__subtitle'>
                    {texts[currentLanguage].opportunities.subtitlePos}
                  </div>
                </div>
              </div>
            </div>

            <div className='opportunities__blocks__second'>
              <div className='opportunities__blocks__block'>
                <div className='opportunities__blocks__image'>
                  <img
                    src={require('./static/images/1.png')}
                    alt='HeaderImage'
                    loading='lazy'
                  />
                </div>
                <div className='opportunities__blocks__text'>
                  <div className='opportunities__blocks__text__title'>
                    {texts[currentLanguage].opportunities.title3}
                  </div>
                  <div className='opportunities__blocks__text__subtitle'>
                    {texts[currentLanguage].opportunities.subtitle3}
                  </div>
                </div>
              </div>

              <div className='opportunities__blocks__block'>
                <div className='opportunities__blocks__image'>
                  <img
                    src={require('./static/images/2.png')}
                    alt='HeaderImage'
                    loading='lazy'
                  />
                </div>
                <div className='opportunities__blocks__text'>
                  <div className='opportunities__blocks__text__title'>
                    {texts[currentLanguage].opportunities.title4}
                  </div>
                  <div className='opportunities__blocks__text__subtitle'>
                    {texts[currentLanguage].opportunities.subtitle4}
                  </div>
                </div>
              </div>

              <div className='opportunities__blocks__block'>
                <div className='opportunities__blocks__image'>
                  <img
                    src={require('./static/images/3.png')}
                    alt='HeaderImage'
                    loading='lazy'
                  />
                </div>
                <div className='opportunities__blocks__text'>
                  <div className='opportunities__blocks__text__title'>
                    {texts[currentLanguage].opportunities.title5}
                  </div>
                  <div className='opportunities__blocks__text__subtitle'>
                    {texts[currentLanguage].opportunities.subtitle5}
                  </div>
                </div>
              </div>
            </div>

            <div className='opportunities__blocks__third'>
              <div className='opportunities__blocks__help'>
                <div className='info__text'>
                  {texts[currentLanguage].opportunities.questions}
                  <br />
                  <span className='email'>info@kmbinat.kz</span> и мы
                  {texts[currentLanguage].opportunities.answer}
                </div>
              </div>

              <div className='opportunities__blocks__buttons'>
                <div className='opportunities__blocks__button'>
                  {texts[currentLanguage].opportunities.contact1}
                </div>
                <div className='divider'>/</div>
                <div className='opportunities__blocks__button'>
                  {texts[currentLanguage].opportunities.contact2}
                </div>
              </div>
            </div>
            <div className='contact'>
              <div className='contact__texts'>
                <div className='contact__texts__block'>
                  <div className='contact__texts__title'>
                    {texts[currentLanguage].contact.title1}
                    <br />
                    {texts[currentLanguage].contact.title2}
                  </div>
                  <div className='contact__texts__subtitle'>
                    {texts[currentLanguage].contact.subtitle1}
                  </div>
                  <div className='contact__texts__warning'>
                    {texts[currentLanguage].contact.subtitle2}
                  </div>
                  <div className='contact__links'>
                    <svg
                      width='37'
                      height='31'
                      viewBox='0 0 37 31'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2.69986 13.6185C2.69986 13.6185 18.5687 6.93477 24.0723 4.58127C26.1821 3.63995 33.3368 0.627472 33.3368 0.627472C33.3368 0.627472 36.6391 -0.690375 36.3638 2.51024C36.272 3.82822 35.5383 8.44088 34.8045 13.4302C33.7037 20.4905 32.5112 28.2098 32.5112 28.2098C32.5112 28.2098 32.3278 30.375 30.7685 30.7515C29.2091 31.128 26.6407 29.4337 26.1821 29.057C25.8151 28.7747 19.3025 24.5384 16.9176 22.4674C16.2755 21.9026 15.5417 20.773 17.0093 19.455C20.3115 16.3485 24.2558 12.4889 26.6407 10.0413C27.7414 8.9116 28.8421 6.27578 24.2558 9.47639C17.7432 14.0892 11.3222 18.4195 11.3222 18.4195C11.3222 18.4195 9.85457 19.3608 7.10278 18.5136C4.35086 17.6665 1.1404 16.5367 1.1404 16.5367C1.1404 16.5367 -1.06093 15.1247 2.69986 13.6185Z'
                        fill='black'
                      />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='40'
                      viewBox='0 0 22 40'
                      fill='none'
                    >
                      <path
                        d='M20.5428 22.5391L21.6542 15.478H14.8083V10.8882C14.8083 8.95746 15.764 7.07083 18.8202 7.07083H21.9765V1.05785C20.1384 0.764753 18.2812 0.606186 16.4197 0.583435C10.7852 0.583435 7.10666 3.97056 7.10666 10.0939V15.478H0.860901V22.5391H7.10666V39.6181H14.8083V22.5391H20.5428Z'
                        fill='black'
                      />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                    >
                      <path
                        d='M13.509 20.0999C13.509 16.507 16.42 13.5936 20.0118 13.5936C23.6037 13.5936 26.5162 16.507 26.5162 20.0999C26.5162 23.6928 23.6037 26.6062 20.0118 26.6062C16.42 26.6062 13.509 23.6928 13.509 20.0999ZM9.9928 20.0999C9.9928 25.635 14.4783 30.1218 20.0118 30.1218C25.5453 30.1218 30.0308 25.635 30.0308 20.0999C30.0308 14.5648 25.5453 10.078 20.0118 10.078C14.4783 10.078 9.9928 14.5648 9.9928 20.0999ZM28.0861 9.68062C28.0859 10.1438 28.223 10.5967 28.4802 10.982C28.7373 11.3672 29.1028 11.6676 29.5306 11.845C29.9584 12.0224 30.4291 12.069 30.8833 11.9788C31.3376 11.8886 31.7549 11.6657 32.0824 11.3383C32.41 11.0109 32.6332 10.5937 32.7237 10.1394C32.8142 9.68511 32.7681 9.21418 32.591 8.78615C32.414 8.35812 32.114 7.99222 31.7291 7.73471C31.3441 7.47721 30.8915 7.33967 30.4284 7.33948H30.4275C29.8068 7.33977 29.2115 7.58649 28.7725 8.02545C28.3335 8.46441 28.0866 9.05972 28.0861 9.68062ZM12.1291 35.9866C10.2268 35.8999 9.19282 35.5829 8.50569 35.3152C7.59473 34.9604 6.94476 34.5379 6.26138 33.8553C5.578 33.1726 5.15499 32.5231 4.80191 31.6119C4.53405 30.9249 4.21718 29.8903 4.1307 27.9874C4.03611 25.9301 4.01722 25.3121 4.01722 20.1001C4.01722 14.888 4.03767 14.2717 4.1307 12.2127C4.21733 10.3099 4.53655 9.27732 4.80191 8.58828C5.15655 7.67705 5.57894 7.02689 6.26138 6.34332C6.94382 5.65974 7.59317 5.23661 8.50569 4.88342C9.19251 4.61549 10.2268 4.29852 12.1291 4.21202C14.1858 4.1174 14.8036 4.09851 20.0118 4.09851C25.22 4.09851 25.8385 4.11897 27.8969 4.21202C29.7992 4.29868 30.8315 4.61798 31.5203 4.88342C32.4313 5.23661 33.0812 5.66068 33.7646 6.34332C34.448 7.02596 34.8694 7.67705 35.2241 8.58828C35.4919 9.27529 35.8088 10.3099 35.8953 12.2127C35.9899 14.2717 36.0088 14.888 36.0088 20.1001C36.0088 25.3121 35.9899 25.9284 35.8953 27.9874C35.8087 29.8903 35.4902 30.9245 35.2241 31.6119C34.8694 32.5231 34.447 33.1732 33.7646 33.8553C33.0822 34.5373 32.4313 34.9604 31.5203 35.3152C30.8335 35.5831 29.7992 35.9001 27.8969 35.9866C25.8402 36.0812 25.2224 36.1001 20.0118 36.1001C14.8013 36.1001 14.1852 36.0812 12.1291 35.9866ZM11.9675 0.700778C9.8904 0.795398 8.47104 1.12485 7.2315 1.60732C5.94779 2.10556 4.86106 2.77399 3.77512 3.85853C2.68918 4.94307 2.02266 6.03182 1.52456 7.3159C1.04224 8.55658 0.712878 9.97557 0.618285 12.0533C0.522131 14.1343 0.500122 14.7996 0.500122 20.0999C0.500122 25.4002 0.522131 26.0655 0.618285 28.1465C0.712878 30.2244 1.04224 31.6432 1.52456 32.8839C2.02266 34.1672 2.68933 35.2572 3.77512 36.3413C4.86091 37.4254 5.94779 38.0929 7.2315 38.5925C8.47338 39.075 9.8904 39.4044 11.9675 39.4991C14.049 39.5937 14.7131 39.6172 20.0118 39.6172C25.3106 39.6172 25.9757 39.5952 28.0561 39.4991C30.1334 39.4044 31.5518 39.075 32.7921 38.5925C34.0751 38.0929 35.1626 37.4258 36.2485 36.3413C37.3345 35.2568 37.9996 34.1672 38.4991 32.8839C38.9814 31.6432 39.3123 30.2243 39.4054 28.1465C39.5 26.0639 39.522 25.4002 39.522 20.0999C39.522 14.7996 39.5 14.1343 39.4054 12.0533C39.3108 9.97542 38.9814 8.5558 38.4991 7.3159C37.9996 6.0326 37.3327 4.94478 36.2485 3.85853C35.1643 2.77227 34.0751 2.10556 32.7937 1.60732C31.5518 1.12485 30.1332 0.793836 28.0577 0.700778C25.9773 0.606158 25.3121 0.582581 20.0134 0.582581C14.7146 0.582581 14.049 0.604596 11.9675 0.700778Z'
                        fill='black'
                      />
                      <path
                        d='M13.509 20.0999C13.509 16.507 16.42 13.5936 20.0118 13.5936C23.6037 13.5936 26.5162 16.507 26.5162 20.0999C26.5162 23.6928 23.6037 26.6062 20.0118 26.6062C16.42 26.6062 13.509 23.6928 13.509 20.0999ZM9.9928 20.0999C9.9928 25.635 14.4783 30.1218 20.0118 30.1218C25.5453 30.1218 30.0308 25.635 30.0308 20.0999C30.0308 14.5648 25.5453 10.078 20.0118 10.078C14.4783 10.078 9.9928 14.5648 9.9928 20.0999ZM28.0861 9.68062C28.0859 10.1438 28.223 10.5967 28.4802 10.982C28.7373 11.3672 29.1028 11.6676 29.5306 11.845C29.9584 12.0224 30.4291 12.069 30.8833 11.9788C31.3376 11.8886 31.7549 11.6657 32.0824 11.3383C32.41 11.0109 32.6332 10.5937 32.7237 10.1394C32.8142 9.68511 32.7681 9.21418 32.591 8.78615C32.414 8.35812 32.114 7.99222 31.7291 7.73471C31.3441 7.47721 30.8915 7.33967 30.4284 7.33948H30.4275C29.8068 7.33977 29.2115 7.58649 28.7725 8.02545C28.3335 8.46441 28.0866 9.05972 28.0861 9.68062ZM12.1291 35.9866C10.2268 35.8999 9.19282 35.5829 8.50569 35.3152C7.59473 34.9604 6.94476 34.5379 6.26138 33.8553C5.578 33.1726 5.15499 32.5231 4.80191 31.6119C4.53405 30.9249 4.21718 29.8903 4.1307 27.9874C4.03611 25.9301 4.01722 25.3121 4.01722 20.1001C4.01722 14.888 4.03767 14.2717 4.1307 12.2127C4.21733 10.3099 4.53655 9.27732 4.80191 8.58828C5.15655 7.67705 5.57894 7.02689 6.26138 6.34332C6.94382 5.65974 7.59317 5.23661 8.50569 4.88342C9.19251 4.61549 10.2268 4.29852 12.1291 4.21202C14.1858 4.1174 14.8036 4.09851 20.0118 4.09851C25.22 4.09851 25.8385 4.11897 27.8969 4.21202C29.7992 4.29868 30.8315 4.61798 31.5203 4.88342C32.4313 5.23661 33.0812 5.66068 33.7646 6.34332C34.448 7.02596 34.8694 7.67705 35.2241 8.58828C35.4919 9.27529 35.8088 10.3099 35.8953 12.2127C35.9899 14.2717 36.0088 14.888 36.0088 20.1001C36.0088 25.3121 35.9899 25.9284 35.8953 27.9874C35.8087 29.8903 35.4902 30.9245 35.2241 31.6119C34.8694 32.5231 34.447 33.1732 33.7646 33.8553C33.0822 34.5373 32.4313 34.9604 31.5203 35.3152C30.8335 35.5831 29.7992 35.9001 27.8969 35.9866C25.8402 36.0812 25.2224 36.1001 20.0118 36.1001C14.8013 36.1001 14.1852 36.0812 12.1291 35.9866ZM11.9675 0.700778C9.8904 0.795398 8.47104 1.12485 7.2315 1.60732C5.94779 2.10556 4.86106 2.77399 3.77512 3.85853C2.68918 4.94307 2.02266 6.03182 1.52456 7.3159C1.04224 8.55658 0.712878 9.97557 0.618285 12.0533C0.522131 14.1343 0.500122 14.7996 0.500122 20.0999C0.500122 25.4002 0.522131 26.0655 0.618285 28.1465C0.712878 30.2244 1.04224 31.6432 1.52456 32.8839C2.02266 34.1672 2.68933 35.2572 3.77512 36.3413C4.86091 37.4254 5.94779 38.0929 7.2315 38.5925C8.47338 39.075 9.8904 39.4044 11.9675 39.4991C14.049 39.5937 14.7131 39.6172 20.0118 39.6172C25.3106 39.6172 25.9757 39.5952 28.0561 39.4991C30.1334 39.4044 31.5518 39.075 32.7921 38.5925C34.0751 38.0929 35.1626 37.4258 36.2485 36.3413C37.3345 35.2568 37.9996 34.1672 38.4991 32.8839C38.9814 31.6432 39.3123 30.2243 39.4054 28.1465C39.5 26.0639 39.522 25.4002 39.522 20.0999C39.522 14.7996 39.5 14.1343 39.4054 12.0533C39.3108 9.97542 38.9814 8.5558 38.4991 7.3159C37.9996 6.0326 37.3327 4.94478 36.2485 3.85853C35.1643 2.77227 34.0751 2.10556 32.7937 1.60732C31.5518 1.12485 30.1332 0.793836 28.0577 0.700778C25.9773 0.606158 25.3121 0.582581 20.0134 0.582581C14.7146 0.582581 14.049 0.604596 11.9675 0.700778Z'
                        fill='black'
                      />
                    </svg>
                    <div className='contact__email'>
                      +7 (701) 223-40-82
                      <br />
                      info@kmbinat.kz
                    </div>
                  </div>
                </div>
              </div>

              <div className='contact__form' id='contact'>
                <div className='contact__form__title'>
                  {texts[currentLanguage].contact.form.title}
                </div>
                <input
                  type='name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder={texts[currentLanguage].contact.form.name}
                  className='input'
                />
                <input
                  type='phone'
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder={texts[currentLanguage].contact.form.phone}
                  className='input'
                />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder={texts[currentLanguage].contact.form.email}
                  className='input'
                />
                <textarea
                  type='text'
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder={texts[currentLanguage].contact.form.message}
                  className='input textarea'
                />
                <div className='buttons'>
                  <div className='send__button' onClick={sendEmail}>
                    {texts[currentLanguage].contact.form.send}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='wrapper footer__wrapper'>
            <nav className='nav footer__nav'>
              <div className='logo'>
                <img src={Logo} alt='Logo' />
              </div>
              <div className='nav__links footer__nav__links'>
                <a href='#' className='nav__link nav__main'>
                  {texts[currentLanguage].nav.main}
                </a>
                <a href='#about' className='nav__link nav__other'>
                  {texts[currentLanguage].nav.about}
                </a>
                <a href='#opportunity' className='nav__link nav__opportunities'>
                  {texts[currentLanguage].nav.opportunities}
                </a>
                <a href='#contact' className='nav__link nav__other'>
                  {texts[currentLanguage].nav.contacts}
                </a>
              </div>
            </nav>
            <div className='nav__links__footer'>
              <svg
                width='37'
                height='31'
                viewBox='0 0 37 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.69986 13.6185C2.69986 13.6185 18.5687 6.93477 24.0723 4.58127C26.1821 3.63995 33.3368 0.627472 33.3368 0.627472C33.3368 0.627472 36.6391 -0.690375 36.3638 2.51024C36.272 3.82822 35.5383 8.44088 34.8045 13.4302C33.7037 20.4905 32.5112 28.2098 32.5112 28.2098C32.5112 28.2098 32.3278 30.375 30.7685 30.7515C29.2091 31.128 26.6407 29.4337 26.1821 29.057C25.8151 28.7747 19.3025 24.5384 16.9176 22.4674C16.2755 21.9026 15.5417 20.773 17.0093 19.455C20.3115 16.3485 24.2558 12.4889 26.6407 10.0413C27.7414 8.9116 28.8421 6.27578 24.2558 9.47639C17.7432 14.0892 11.3222 18.4195 11.3222 18.4195C11.3222 18.4195 9.85457 19.3608 7.10278 18.5136C4.35086 17.6665 1.1404 16.5367 1.1404 16.5367C1.1404 16.5367 -1.06093 15.1247 2.69986 13.6185Z'
                  fill='white'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='40'
                viewBox='0 0 22 40'
                fill='none'
              >
                <path
                  d='M20.5428 22.5391L21.6542 15.478H14.8083V10.8882C14.8083 8.95746 15.764 7.07083 18.8202 7.07083H21.9765V1.05785C20.1384 0.764753 18.2812 0.606186 16.4197 0.583435C10.7852 0.583435 7.10666 3.97056 7.10666 10.0939V15.478H0.860901V22.5391H7.10666V39.6181H14.8083V22.5391H20.5428Z'
                  fill='white'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
              >
                <path
                  d='M13.509 20.0999C13.509 16.507 16.42 13.5936 20.0118 13.5936C23.6037 13.5936 26.5162 16.507 26.5162 20.0999C26.5162 23.6928 23.6037 26.6062 20.0118 26.6062C16.42 26.6062 13.509 23.6928 13.509 20.0999ZM9.9928 20.0999C9.9928 25.635 14.4783 30.1218 20.0118 30.1218C25.5453 30.1218 30.0308 25.635 30.0308 20.0999C30.0308 14.5648 25.5453 10.078 20.0118 10.078C14.4783 10.078 9.9928 14.5648 9.9928 20.0999ZM28.0861 9.68062C28.0859 10.1438 28.223 10.5967 28.4802 10.982C28.7373 11.3672 29.1028 11.6676 29.5306 11.845C29.9584 12.0224 30.4291 12.069 30.8833 11.9788C31.3376 11.8886 31.7549 11.6657 32.0824 11.3383C32.41 11.0109 32.6332 10.5937 32.7237 10.1394C32.8142 9.68511 32.7681 9.21418 32.591 8.78615C32.414 8.35812 32.114 7.99222 31.7291 7.73471C31.3441 7.47721 30.8915 7.33967 30.4284 7.33948H30.4275C29.8068 7.33977 29.2115 7.58649 28.7725 8.02545C28.3335 8.46441 28.0866 9.05972 28.0861 9.68062ZM12.1291 35.9866C10.2268 35.8999 9.19282 35.5829 8.50569 35.3152C7.59473 34.9604 6.94476 34.5379 6.26138 33.8553C5.578 33.1726 5.15499 32.5231 4.80191 31.6119C4.53405 30.9249 4.21718 29.8903 4.1307 27.9874C4.03611 25.9301 4.01722 25.3121 4.01722 20.1001C4.01722 14.888 4.03767 14.2717 4.1307 12.2127C4.21733 10.3099 4.53655 9.27732 4.80191 8.58828C5.15655 7.67705 5.57894 7.02689 6.26138 6.34332C6.94382 5.65974 7.59317 5.23661 8.50569 4.88342C9.19251 4.61549 10.2268 4.29852 12.1291 4.21202C14.1858 4.1174 14.8036 4.09851 20.0118 4.09851C25.22 4.09851 25.8385 4.11897 27.8969 4.21202C29.7992 4.29868 30.8315 4.61798 31.5203 4.88342C32.4313 5.23661 33.0812 5.66068 33.7646 6.34332C34.448 7.02596 34.8694 7.67705 35.2241 8.58828C35.4919 9.27529 35.8088 10.3099 35.8953 12.2127C35.9899 14.2717 36.0088 14.888 36.0088 20.1001C36.0088 25.3121 35.9899 25.9284 35.8953 27.9874C35.8087 29.8903 35.4902 30.9245 35.2241 31.6119C34.8694 32.5231 34.447 33.1732 33.7646 33.8553C33.0822 34.5373 32.4313 34.9604 31.5203 35.3152C30.8335 35.5831 29.7992 35.9001 27.8969 35.9866C25.8402 36.0812 25.2224 36.1001 20.0118 36.1001C14.8013 36.1001 14.1852 36.0812 12.1291 35.9866ZM11.9675 0.700778C9.8904 0.795398 8.47104 1.12485 7.2315 1.60732C5.94779 2.10556 4.86106 2.77399 3.77512 3.85853C2.68918 4.94307 2.02266 6.03182 1.52456 7.3159C1.04224 8.55658 0.712878 9.97557 0.618285 12.0533C0.522131 14.1343 0.500122 14.7996 0.500122 20.0999C0.500122 25.4002 0.522131 26.0655 0.618285 28.1465C0.712878 30.2244 1.04224 31.6432 1.52456 32.8839C2.02266 34.1672 2.68933 35.2572 3.77512 36.3413C4.86091 37.4254 5.94779 38.0929 7.2315 38.5925C8.47338 39.075 9.8904 39.4044 11.9675 39.4991C14.049 39.5937 14.7131 39.6172 20.0118 39.6172C25.3106 39.6172 25.9757 39.5952 28.0561 39.4991C30.1334 39.4044 31.5518 39.075 32.7921 38.5925C34.0751 38.0929 35.1626 37.4258 36.2485 36.3413C37.3345 35.2568 37.9996 34.1672 38.4991 32.8839C38.9814 31.6432 39.3123 30.2243 39.4054 28.1465C39.5 26.0639 39.522 25.4002 39.522 20.0999C39.522 14.7996 39.5 14.1343 39.4054 12.0533C39.3108 9.97542 38.9814 8.5558 38.4991 7.3159C37.9996 6.0326 37.3327 4.94478 36.2485 3.85853C35.1643 2.77227 34.0751 2.10556 32.7937 1.60732C31.5518 1.12485 30.1332 0.793836 28.0577 0.700778C25.9773 0.606158 25.3121 0.582581 20.0134 0.582581C14.7146 0.582581 14.049 0.604596 11.9675 0.700778Z'
                  fill='white'
                />
                <path
                  d='M13.509 20.0999C13.509 16.507 16.42 13.5936 20.0118 13.5936C23.6037 13.5936 26.5162 16.507 26.5162 20.0999C26.5162 23.6928 23.6037 26.6062 20.0118 26.6062C16.42 26.6062 13.509 23.6928 13.509 20.0999ZM9.9928 20.0999C9.9928 25.635 14.4783 30.1218 20.0118 30.1218C25.5453 30.1218 30.0308 25.635 30.0308 20.0999C30.0308 14.5648 25.5453 10.078 20.0118 10.078C14.4783 10.078 9.9928 14.5648 9.9928 20.0999ZM28.0861 9.68062C28.0859 10.1438 28.223 10.5967 28.4802 10.982C28.7373 11.3672 29.1028 11.6676 29.5306 11.845C29.9584 12.0224 30.4291 12.069 30.8833 11.9788C31.3376 11.8886 31.7549 11.6657 32.0824 11.3383C32.41 11.0109 32.6332 10.5937 32.7237 10.1394C32.8142 9.68511 32.7681 9.21418 32.591 8.78615C32.414 8.35812 32.114 7.99222 31.7291 7.73471C31.3441 7.47721 30.8915 7.33967 30.4284 7.33948H30.4275C29.8068 7.33977 29.2115 7.58649 28.7725 8.02545C28.3335 8.46441 28.0866 9.05972 28.0861 9.68062ZM12.1291 35.9866C10.2268 35.8999 9.19282 35.5829 8.50569 35.3152C7.59473 34.9604 6.94476 34.5379 6.26138 33.8553C5.578 33.1726 5.15499 32.5231 4.80191 31.6119C4.53405 30.9249 4.21718 29.8903 4.1307 27.9874C4.03611 25.9301 4.01722 25.3121 4.01722 20.1001C4.01722 14.888 4.03767 14.2717 4.1307 12.2127C4.21733 10.3099 4.53655 9.27732 4.80191 8.58828C5.15655 7.67705 5.57894 7.02689 6.26138 6.34332C6.94382 5.65974 7.59317 5.23661 8.50569 4.88342C9.19251 4.61549 10.2268 4.29852 12.1291 4.21202C14.1858 4.1174 14.8036 4.09851 20.0118 4.09851C25.22 4.09851 25.8385 4.11897 27.8969 4.21202C29.7992 4.29868 30.8315 4.61798 31.5203 4.88342C32.4313 5.23661 33.0812 5.66068 33.7646 6.34332C34.448 7.02596 34.8694 7.67705 35.2241 8.58828C35.4919 9.27529 35.8088 10.3099 35.8953 12.2127C35.9899 14.2717 36.0088 14.888 36.0088 20.1001C36.0088 25.3121 35.9899 25.9284 35.8953 27.9874C35.8087 29.8903 35.4902 30.9245 35.2241 31.6119C34.8694 32.5231 34.447 33.1732 33.7646 33.8553C33.0822 34.5373 32.4313 34.9604 31.5203 35.3152C30.8335 35.5831 29.7992 35.9001 27.8969 35.9866C25.8402 36.0812 25.2224 36.1001 20.0118 36.1001C14.8013 36.1001 14.1852 36.0812 12.1291 35.9866ZM11.9675 0.700778C9.8904 0.795398 8.47104 1.12485 7.2315 1.60732C5.94779 2.10556 4.86106 2.77399 3.77512 3.85853C2.68918 4.94307 2.02266 6.03182 1.52456 7.3159C1.04224 8.55658 0.712878 9.97557 0.618285 12.0533C0.522131 14.1343 0.500122 14.7996 0.500122 20.0999C0.500122 25.4002 0.522131 26.0655 0.618285 28.1465C0.712878 30.2244 1.04224 31.6432 1.52456 32.8839C2.02266 34.1672 2.68933 35.2572 3.77512 36.3413C4.86091 37.4254 5.94779 38.0929 7.2315 38.5925C8.47338 39.075 9.8904 39.4044 11.9675 39.4991C14.049 39.5937 14.7131 39.6172 20.0118 39.6172C25.3106 39.6172 25.9757 39.5952 28.0561 39.4991C30.1334 39.4044 31.5518 39.075 32.7921 38.5925C34.0751 38.0929 35.1626 37.4258 36.2485 36.3413C37.3345 35.2568 37.9996 34.1672 38.4991 32.8839C38.9814 31.6432 39.3123 30.2243 39.4054 28.1465C39.5 26.0639 39.522 25.4002 39.522 20.0999C39.522 14.7996 39.5 14.1343 39.4054 12.0533C39.3108 9.97542 38.9814 8.5558 38.4991 7.3159C37.9996 6.0326 37.3327 4.94478 36.2485 3.85853C35.1643 2.77227 34.0751 2.10556 32.7937 1.60732C31.5518 1.12485 30.1332 0.793836 28.0577 0.700778C25.9773 0.606158 25.3121 0.582581 20.0134 0.582581C14.7146 0.582581 14.049 0.604596 11.9675 0.700778Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
          <div className='wrapper footer__texts'>
            <div className='footer__left__text'>
              <div className='footer__first__text'>
                {texts[currentLanguage].footer.title}
              </div>
              <div className='footer__second__text'>
                {texts[currentLanguage].footer.subtitle1}
              </div>
            </div>
            <div className='footer__right__text'>
              <div className='footer__right__first'>
                {texts[currentLanguage].footer.subtitle2}
              </div>
              <div className='footer__right__second'>
                {texts[currentLanguage].footer.subtitle3}
              </div>
              <div className='footer__right__third'>
                +7 (777) 123 4567 / info@kmbinat.kz
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
