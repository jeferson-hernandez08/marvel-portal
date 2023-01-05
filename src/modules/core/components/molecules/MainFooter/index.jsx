import './styles.scss';

export default function MainFooter() {
  return (
    <footer className="mvl-main-footer">
      <div className="Container-Footer-Completed">
        <div className="container-imagen-m">
          <img
            className="imagen-m"
            src="https://www.marvel.com/static/images/favicon/mstile-150x150.png"></img>
        </div>
        <div className="marvel-about">
          <ul className="list1-footer">
            <li className="text-footer">ABOUT MARVEL</li>
            <li className="text-footer">HELP/FAGS</li>
            <li className="text-footer">CAREERS</li>
            <li className="text-footer">INTERNSHIPS</li>
          </ul>
        </div>
        <div className="cuadro2">
          <ul className="list2-footer">
            <li className="text-footer">ADVERTISING</li>
            <li className="text-footer">DISNEY+</li>
            <li className="text-footer">MARVELHQ.COM</li>
            <li className="text-footer">REDEEM DIGITAL COMICS</li>
          </ul>
        </div>
        <div>
          <div className="main.footer__promotion-image-wrapper">
            <img
              className="imagen-insider"
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"></img>
          </div>
          <div className="container-bloque2">
            <div className="main-footer__promotion-info">
              <h4>MARVEL INSIDER</h4>
              <p>Get Rewarded for Being a Marvel Fan</p>
            </div>
            <div className="main.footer__promotion-image-wrapper">
              <img
                className="imagen-UNLIMIT"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"></img>
            </div>
            <div className="main-footer__promotion-link">
              <h4>MARVEL UNLIMITED</h4>
              <p>Access Over 30,000+ Digital Comics</p>
            </div>
          </div>
        </div>
        <div className="main-footer__follow">
          <h4 className="texto-follow-marvel">Follow Marvel</h4>
          <div className="redes-footer">
            <img
              className="vector-redes"
              src="https://static.vecteezy.com/system/resources/previews/001/972/889/non_2x/social-media-logo-in-black-and-white-color-free-vector.png"></img>
          </div>
        </div>
      </div>
      <div className="Text-Final-Footer">
        <div className="Container-Text-Final">
          <a className="Text-Final-Footer">Terms of use</a>
          <a className="Text-Final-Footer">Privacy Policy</a>
          <a className="Text-Final-Footer">Your US State Privacy Rights</a>
          <a className="Text-Final-Footer">Children&apos;s Online Privacy Policy</a>
          <a className="Text-Final-Footer">License Agreement</a>
          <a className="Text-Final-Footer">Interest-Baseb Ads</a>
          <a className="Text-Final-Footer">Marvel Insider Terms</a>
          <a className="Text-Final-Footer">&copy;2023 MARVEL</a>
        </div>
      </div>
    </footer>
  );
}
