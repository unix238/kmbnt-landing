import './style/index.css';
import React, { useState } from 'react';

import { texts } from './texts';

import Logo from './static/svg/logo.svg';

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

  const sendEmail = async (e) => {
    if (!validate()) {
      alert('Заполните все поля');
      return;
    }
    // const url = 'https://dev.kmbinat.com/send';
    const response = await fetch('https://dev.kmbinat.com/send', {
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
              <a href='#contact' className='nav__link nav__other'>
                {texts[currentLanguage].nav.contacts}
              </a>
            </div>

            <div className='lang__switcher'>
              <div
                onClick={() => {
                  setCurrentLanguage(2);
                }}
                className={currentLanguage === 2 ? 'lang active' : 'lang'}
              >
                kaz
              </div>
              <div className='slash'>/</div>

              <div
                onClick={() => {
                  setCurrentLanguage(1);
                }}
                className={currentLanguage === 1 ? 'lang active' : 'lang'}
              >
                rus
              </div>
              <div className='slash'>/</div>

              <div
                onClick={() => {
                  setCurrentLanguage(0);
                }}
                className={currentLanguage === 0 ? 'lang active' : 'lang'}
              >
                eng
              </div>
            </div>
          </nav>
          <div className='header__content'>
            <div className='header__content__text'>
              <div className='div__start'>ЗАПУСК ПЛАТФОРМЫ СКОРО!</div>
              {texts[currentLanguage].header.firstLine}
              <div></div>
              <span className='header__span'>
                <span className='firstSecondLine'>
                  {texts[currentLanguage].header.firstSecondLine}{' '}
                </span>
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
                <div className='online__imgs'>
                  <img
                    className='online__img'
                    src={require('./static/images/Group 6.png')}
                    alt='online1'
                  />
                  <img
                    className='mobile__img'
                    src={require('./static/images/contact.png')}
                    alt=''
                  />
                </div>
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
        </div>
        <div className='about' id='about'>
          <div className='wrapper'>
            <div className='about__first__line'>
              <div className='about__first__line__title'>
                {texts[currentLanguage].about.title}
                <span className='about__title'>
                  {texts[currentLanguage].about.title2}
                </span>
              </div>
              <div className='about__first__line__subtitle'>
                {texts[currentLanguage].about.subtitle}
                <img src={require('./static/images/line.png')} alt='' />
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
        {/* <div className='flags'>
          {generateFlag(Math.floor(window.innerWidth / 52)).map(() => {
            return <div className='flag'></div>;
          })}
        </div> */}
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
                    <a href=''>
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
                    </a>
                    <a href='https://instagram.com/kmbinat?igshid=MWI4MTIyMDE='>
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
                    </a>

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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='144'
                  height='27'
                  viewBox='0 0 144 27'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M44.3455 0L34.9035 12.132L30.24 0H19.2688L8.9028 11.2486L10.9061 0H4.74012L0 26.8741H6.16598L8.40102 14.0896L15.4537 26.8741H25.4999L28.2741 11.0568L33.0142 22.6517H33.7075L42.9177 11.1341L40.1426 26.875H46.3085L51.0506 0H44.3455ZM19.9363 23.4616L14.2979 13.2062L23.4928 3.29701L19.9363 23.4616Z'
                    fill='white'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M68.1572 13.0917C69.9814 11.8124 71.0597 10.0723 71.3939 7.87047C71.753 5.56657 71.2014 3.68529 69.7372 2.22663C68.2731 0.742209 66.3196 0 63.8796 0H53.7061L48.966 26.875H59.9103C62.9412 26.875 65.3639 26.1843 67.1747 24.802C68.9855 23.4196 70.0456 21.5517 70.3539 19.1963C70.6872 16.5347 69.9556 14.4998 68.1572 13.0917ZM64.3038 18.5438C64.1745 19.3117 63.8221 19.9328 63.2438 20.406C62.6654 20.8801 61.9529 21.1157 61.1054 21.1157H56.1345L57.0596 15.9708H62.0305C62.8779 15.9708 63.5014 16.2074 63.8997 16.6806C64.2981 17.1548 64.4331 17.7749 64.3048 18.5428L64.3038 18.5438ZM65.1906 8.13949C65.0613 8.85594 64.728 9.43216 64.1889 9.86718C63.6498 10.3032 62.9938 10.5197 62.2239 10.5197H58.0229L58.8704 5.75927H63.0714C63.8672 5.75927 64.4522 5.98346 64.8247 6.43089C65.1973 6.87926 65.3189 7.44785 65.1906 8.13949Z'
                    fill='white'
                  />
                  <path
                    d='M70.2677 26.8741L75.0078 0H81.1738L76.4337 26.8741H70.2677Z'
                    fill='white'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M112.988 0L100.957 23.2412L105.056 0H98.8904L96.2311 15.0884L88.4851 0H83.8609L79.1208 26.875H85.2867L87.9843 11.7866L95.692 26.875H105.821L107.979 22.6517H117.998L118.537 26.875H125.282L120.85 0H112.988ZM110.869 16.8924L116.033 6.71804L117.305 16.8924H110.869Z'
                    fill='white'
                  />
                  <path
                    d='M123.704 5.91191L122.72 0H144L142.959 5.91191H136.022L132.323 26.8741H126.157L129.856 5.91191H123.704Z'
                    fill='white'
                  />
                  <path
                    d='M139.659 22.9799C139.481 22.9799 139.319 23.0228 139.172 23.1096V23.1058C139.024 23.1926 138.908 23.308 138.82 23.454C138.734 23.6 138.69 23.764 138.69 23.9415C138.69 24.1189 138.734 24.2802 138.822 24.4261C138.91 24.5721 139.027 24.6885 139.174 24.7762C139.32 24.864 139.482 24.9079 139.66 24.9079C139.866 24.9079 140.04 24.8506 140.186 24.7362C140.331 24.6217 140.422 24.4748 140.459 24.2954H141.213C141.18 24.5482 141.093 24.7762 140.949 24.9785C140.805 25.1817 140.623 25.341 140.4 25.4574C140.178 25.5747 139.931 25.6329 139.66 25.6329C139.348 25.6329 139.065 25.5576 138.808 25.4059C138.551 25.2542 138.347 25.051 138.194 24.7953C138.042 24.5396 137.965 24.2534 137.965 23.9434C137.965 23.6333 138.041 23.35 138.194 23.0934C138.346 22.8377 138.551 22.6336 138.808 22.4819C139.065 22.3302 139.348 22.2548 139.66 22.2548C139.931 22.2548 140.182 22.314 140.412 22.4304C140.642 22.5477 140.832 22.707 140.984 22.9093C141.135 23.1125 141.227 23.3395 141.259 23.5923H140.505C140.469 23.413 140.372 23.2661 140.21 23.1516C140.048 23.0371 139.864 22.9799 139.659 22.9799Z'
                    fill='white'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M141.801 21.7864C141.522 21.5059 141.196 21.2865 140.826 21.1282C140.455 20.9698 140.058 20.8906 139.633 20.8906C139.209 20.8906 138.816 20.9698 138.446 21.1282C138.076 21.2865 137.751 21.5059 137.47 21.7864C137.19 22.0669 136.969 22.3912 136.809 22.7595C136.649 23.1277 136.569 23.5236 136.567 23.9453C136.565 24.3679 136.644 24.7629 136.804 25.1311C136.964 25.4994 137.184 25.8237 137.465 26.1042C137.747 26.3847 138.073 26.6041 138.444 26.7625C138.815 26.9208 139.211 27 139.633 27C140.056 27 140.455 26.9208 140.827 26.7625C141.198 26.6041 141.525 26.3847 141.805 26.1042C142.086 25.8237 142.306 25.4994 142.464 25.1311C142.623 24.7629 142.702 24.367 142.7 23.9453C142.698 23.5227 142.617 23.1277 142.458 22.7595C142.299 22.3912 142.08 22.0669 141.8 21.7864H141.801ZM141.753 24.8354C141.636 25.112 141.471 25.3544 141.261 25.5633C141.052 25.7713 140.807 25.9353 140.528 26.0536C140.249 26.1719 139.951 26.2311 139.633 26.2311C139.315 26.2311 139.019 26.1719 138.741 26.0536C138.463 25.9353 138.219 25.7713 138.009 25.5614C137.8 25.3525 137.635 25.1092 137.515 24.8325C137.396 24.5559 137.336 24.2611 137.336 23.9491C137.338 23.6333 137.399 23.3367 137.519 23.06C137.639 22.7833 137.804 22.5401 138.014 22.3292C138.224 22.1194 138.467 21.9553 138.745 21.8379C139.021 21.7206 139.317 21.6614 139.633 21.6614C139.949 21.6614 140.248 21.7206 140.525 21.8379C140.802 21.9553 141.045 22.1194 141.256 22.3283C141.465 22.5372 141.63 22.7805 141.75 23.059C141.868 23.3367 141.928 23.6334 141.928 23.9501C141.93 24.2649 141.871 24.5597 141.753 24.8373V24.8354Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className='nav__links footer__nav__links'>
                <a href='#' className='nav__link nav__main'>
                  {texts[currentLanguage].nav.main}
                </a>
              </div>
            </nav>
            <div className='nav__links__footer'>
              <a href='#'>
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
              </a>
              <a href='#'>
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
              </a>
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
