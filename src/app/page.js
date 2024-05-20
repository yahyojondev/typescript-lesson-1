import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import personimages from "./assets/images/person.png";
import homeimg1 from "./assets/images/home1.png";
import homeimg2 from "./assets/images/home2.png";
import homeimg3 from "./assets/images/home3.png";
import homeimg4 from "./assets/images/home4.png";
import homeimg5 from "./assets/images/home5.png";
import homeimg6 from "./assets/images/home6.png";
import homeimg7 from "./assets/images/home7.png";
import homeimg8 from "./assets/images/home8.png";
import homeimg9 from "./assets/images/home9.png";
import homeimg10 from "./assets/images/home10.png";

export default function Home() {
  return (
    <main className="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__top">
            <GiHamburgerMenu />
            <Image className="person__img" src={personimages} alt="rasm" />
          </div>
          <div className="home__center">
            <h1>Overview</h1>
            <div className="home__center__right">
              <p>...</p>
              <span></span>
            </div>
          </div>
          <div className="home__bottom">
            <ul className="home__bottom__list">
              <li>
                <h3>owner</h3>
                <ul className="home__bottom__item__list img__list">
                  <li>
                    <Image src={homeimg1} alt="rasm" />
                    <p>Savannah Nguyen</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg2}
                      alt="rasm"
                    />
                    <p>Jenny Wilson</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg3}
                      alt="rasm"
                    />
                    <p>Annette Black</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg4}
                      alt="rasm"
                    />
                    <p>Kathryn Murphy</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg5}
                      alt="rasm"
                    />
                    <p>Kathryn Murphy</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg6}
                      alt="rasm"
                    />
                    <p> Kristin Watson</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg7}
                      alt="rasm"
                    />
                    <p>Eleanor Pena</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg8}
                      alt="rasm"
                    />
                    <p>Guy Hawkins</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg9}
                      alt="rasm"
                    />
                    <p>Brooklyn Simmons</p>
                  </li>
                  <li>
                    <Image
                      className="img__list__img"
                      src={homeimg10}
                      alt="rasm"
                    />
                    <p>Robert Fox</p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>end data</h3>
                <ul className="home__bottom__item__list">
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                  <li>1/15/12</li>
                </ul>
              </li>
              <li>
                <h3>Profits</h3>
                <ul className="home__bottom__item__list profits__list">
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                  <li>$328.85</li>
                </ul>
              </li>
              <li>
                <h3>Losses</h3>
                <ul className="home__bottom__item__list losses__list">
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                  <li>$779.58</li>
                </ul>
              </li>
              <li>
                <h3>Phone</h3>
                <ul className="home__bottom__item__list phone__list">
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                  <li>(603) 555-0123</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
