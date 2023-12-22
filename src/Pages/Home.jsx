import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
    <main>
      <section className="banner-section bg-black">
        <div className="container">
          <div className="bnr-main">
            <div className="bnr-innerflx">
              <div className="bnr-heading">
                <h1>
                  Bridging Imagination with Innovation in Digital Solutions{" "}
                </h1>
                <div className="bnrseprate-line">
                  <span className=""></span>
                </div>

                <div className="bnr-btn">
                  <Link className="btn btn-primary" to="/contactus">
                    Talk to our Expert
                  </Link>
                </div>
              </div>
            </div>
            <div className="bnr-innerflx">
              <div className="bnr-img">
                <img src="image/brain-skills-expertise 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section bg-black">
        <div className="container">
          <div className="tphdng-flx">
            <div class="top-heading-1 lft-heading-1">
              <h4>OUR SERVICES</h4>
              <h3>What we can do for you?</h3>
              <p>
                Our strength lies in the comprehensive suite of services we
                offer to our clients. From full-stack development to just
                consultancy- you demand, we deliver.
              </p>
            </div>
            <div className="goto-icon ">
              <a href="/services">
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="srveslist">
            <ul>
              <li className="card-1">
                <div className="card srvc-card flex-col  ">
                  <div className="srvc-img">
                    <img src="image/services-1.png" alt="" />
                  </div>
                  <h3>Web Development</h3>
                </div>
              </li>
              <li className="card-1">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-2.png" alt="" />
                  </div>
                  <h3>Mobile App Development</h3>
                </div>
              </li>
              <li className="card-1">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-3.png" alt="" />
                  </div>
                  <h3 className="text-right">Digital Marketing</h3>
                </div>
              </li>
              <li className="card-1">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-4.png" alt="" />
                  </div>
                  <h3>UI/UX Design</h3>
                </div>
              </li>
              <li className="card-2">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-5.png" alt="" />
                  </div>
                  <h3>Branding</h3>
                </div>
              </li>
              <li className="card-2">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-6.png" alt="" />
                  </div>
                  <h3>Mobile App Development</h3>
                </div>
              </li>
              <li className="card-2">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-7.png" alt="" />
                  </div>
                  <h3>Digital Marketing</h3>
                </div>
              </li>
              <li className="card-2">
                <div className="card srvc-card flex-col ">
                  <div className="srvc-img">
                    <img src="image/services-8.png" alt="" />
                  </div>
                  <h3>UI/UX Design</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="teclogy-section bg-black">
        <div className="container">
          <div className="tphdng-flx">
            <div className="top-heading lft-heading">
              <h4 className="fade-left">TECHNOLOGY</h4>
            </div>
            <div className="fade-right goto-icon">
              <a href="/">
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="technlgy-main tech-row-1">
            <div className="technlgy-inner-30">
              <div className="technlgy-iconmain">
                <img alt="" src="image/Group-33.png" />
              </div>
            </div>
            <div className="technlgy-inner-70 ">
              <div className="techlogyicon">
                <ul>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img alt="" src="image/download-1.png" />
                      </div>
                      <p>Swift</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>SwiftUI</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Kotlin</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgBzZhPTxNBFMDf7PSPC5jsxURvPXohKYnGoBd7MfFEuSkcLOGDCJ9Aj8aEUBMgwQsKCRovjQdjMEZquGpS4wWiMZV2KazdGd9bCmnpv53Z3cIvKZTt7JtfXmfevIXBAJjech4xKfKgipTzS+PmXPMlBhETpiwRqfDDraMsl3INVOkiS0QmPPWhmjZ4rIBvLaUbe8gSkQhHJUuELhxA9gXK5voNC1U4alkiNOFByBIxCIEHH2spxhhVg0hlicAZJlnOWAEDpVTu05ElAglryzJWXLqVHAMNDNAkiGwskciAJloZDiqbH2Nl0ERZ+DxlvTAqg89b1gvld6CuLI4v8WRyLAxZwtemCyQrZSYs2UbM3gSWHTdLECI9M5zdltZFkiW6CpPssONcKNlG/HZOZaVMg1qwSGUbc7QShSztgxhjT0CxOZJCvF6+PfS0+VpsELK0D0CjdsdNM3/2cssatkD96PMjG+ZB0+aXwyzXMcvgI8uDlm3M2Y4f6fOQJTqWNbrBawExQMe4AGXu1ic7yVpvZOpIRtdvdK3DnrQQk5TJlrjHspn8nZFiJ9mEIQtf7FiqJvzvBpqD5vJzhPeNmsOv18WvV2LG/MhiMUrR36Yh4caw6/3uJ6tSu/s2PxSIAuLbr35lCcrwZ5tDr0zrHDSqVawNa01aiSG53SzbzGUu4eZwHWKsbWKtU5FDABqylNnr3cY4ksHvugHX4gIMFkyW0BZuku1br5ulOQvWb2g/NaPsoh/ZEyoug097h/Dz+7fJIM2R9hq+ihtNnNlovRDVKthvN0HYdtFM8Ew5P6P1FKKd4d37rGQIhtWDlfqNFdUK2JsbICoVoMaq5riLoIm2MOFHWlT2obq+BmL/L/17ChpVOZuYXtCSDlzWCG95cLGNNi39LklWX70EeVDD1GAny/Fl4D43DDqKST7vLM/OgAKBMnwCZVqCi70HnK5LeXQI9sYqiPIfTGwdJAp6svxYlsCfOdVMh5LhE668c9IMeEEe1qzKyjNcDjVgyRGAS/hi3XOjkulQhQmStleXCm7lwIK46fs+v9KhLIlmft1LFP/V6hkZN5XKlrc8phYe+xgXDfGp52nGOPXFag+eEuacldn5bp8H6iV6IXY2duOjE3uYkqzKfbgf7/LRCXB31t93+jwyYaK+s15E6R9hSkcqTIQt/R998xyTUlK3BgAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <p>Flutter</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>React Native</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhcSURBVHgB1VlrjFVXFV5r7/O477nzYLgCwlCnlBaC5SGgIoFAKiUjwZpBoqk2UVsFgxkq/dOY3kQbbSUMaUOjbWJq/OFj+qADAlEaJpUO2CASULQpTpFXBhjuzNy5cx/nnr2X61w7yGOs58yr9UvuzDn77L3Pd9Zee702wP8ZEEaBFWkKJSODsxXCChRiJSKmCMAFIMmPi3xPmhuIIC+Q/qY1Hc5Jp6OjpboPRohAhNNpEkcgmxTx8AxTqgfQ1VNJijIRvS4R3zIpdLltKxZuHdfcQuF8g/MxQ7nLAeV8Il1USr1JGDsSDV+91ra5PueXg2/C656iuAMwJWQVNzDBOh74ZlyFf/uLbTgIAdG8K5cqleTX+XKO1vC6suhAIRPu7kijW3neTLLtN6CBVygwYV52I5GEWtSlL2mA1RLF47tbrBMwBvCIF4tiIyJs1C5tMiORf7pUTIAjJzuO7snaVy8e2frRgm/Cn2w5H66dmloohPsV1sPOPY+GX4RxQEXijvkkaN1ICIuYVIRFe5Uf/Uy5Azv3PVbfPdRX/LdJVv8oU1U7pWa1EOpBTWrXeJH10LY51q2Vu4fFt9wj67Xx/0ks+QcNGV17Y99hCXuSNc3QGiGNDXz740UD0VMwzhAIC25rJKgllHNvbDJu7dOUvhgRsbo1fHmH61rb9m2Dy+3DKP9YQyD269ubS8x64KZ+t3WJVa9FQTMA3d8vzsMVmACyHrRrHmVFuHElPYtxhd/+zo39biK8vrXQIIRYqoGO29MiJ9Np1DBBKIeMYwj4BAvoFQLcx00v8Qcc1KRDnoOCWwk3pSmiCb9ASr/l9uf/3LYBHZhA7N+CpflZ6zWbSt8gob9VAmezU6KnBBqTYpHB5UP9rpu1pu35ZSzdJexCX97dEj4LHwJUXH+0sK6M1Iignt/73USP8e8HV2K8Sxez0vw13x+6ACPEQ+l3Q312KkUGTVbomlqLnJunSw7EMkNeLAh4TPGBZ/KdhpKTWFVWcdOvK4Rj8eolJMqanWHXSCZu3tFfUyRz5TUQSwXpu0hgQqAphYCikcC+EBVPrvth8ZfZkn026PwZdtnxhHMBiRaxbzhQISywvECjPJcfuHQuyGT3pMlqjJfnlMj13Ot9vNcbCDFZeXjdtngXtAxsWB63i79a39rLKuc/WvM+sGl76W0pcXrEtO8Qa5/OpUijSap0viM9s+h3Ii9ya4jllhKqHbxcm3g73Mu/5LCdOezkv6sR6AcaQt9Z0dqbhACoy1lnNYguEmKuMIScxbsyUwbjfJBJTlT1JQw0vs+79lN8G/M3iokTfTOqrA33P3EtAT7xIuuyILfMkZ0pSNJUIKN3AMM9fidoZlVQ2lzPNmYp31oQCJiSAjeb1TUf8VbJ7yjXxR5AbbAVQwvJzXa2gG91UDWFegD5aHCyQ8C5WuW/3MGr5HeEYYoMuzEhOPoPsSsm9OmCH2LbqB1axJtsNowcQqBsDkvbpyoBmKVCrxRU4iWRvLK276yhr4qtFKKnCgaMCtTI+uh78+UuXiuyJ7Y4SAImAL5jBpO3qkash9HDYENd5bfz/mfv9CK3km+l/7CAPbKbRSr4Jp4zEi4rfxeMFgSO0rrfb3cvMWVN4O0GaIMStt+BkzPgCBB/4ctRhZ68x0+42rrmt39mPiQRJNthJs75dJQNuq+U3zPirqGOs0kZcZDEcFm6r4q+jO/NHg4VQkCKhcWKDBLt5ueuRv0OViLsxQJP8hf6LoDcghPSMtuXYI3v8ULpWhasZw6hi1wdypcs3zufg+2sclU7r+tBJh000O/mjKb1nYx1JkhGQ4Zdx/prCCjpM8IUKVRyOgRAPh/tIVVuZdU4zKQz/3MAR+DoqRHpn+Syl185nfaf0Sx8+BgHZ+UaDltzIpWMXGX9tTh8m7KCA3C/k3hhXzYX62QBP6JAt7IMTnA0NlzY6PJHneN3vMqFwe/Zpn4uSFTooX7WXXfyB08nabxd2WjrdxTvU6TnEbl7OQ35OwSEl7FUVcXWgILFIMVMJljDH2ABYY6QulHTKVah/ZGZsX8EzRW9Ulk8nl/DZnAexSM7K+7VdN2TZMiVStof5w5ngmYFHelK9fElHru7enKuplwU0wBVhFctY8vCuSDVyVsRDhdSHAo0CFRdex7BfIVw22Ox7qYdxUO8Excmq4rTuOksjADvfeiV936jhiddU7p3a1BSa/eg1/YfD5e1DxPqfq1oQZDgejwRSxamIKq7TeH8ycuYvbbrhPemWdwkD3JIvUrGrAVevgYfINY+TSkk+WkCyvX2xY8Ntd8UQ/QO2F0E+jWU5ucbIoP3BMkIxhJN26lOiMIy0mpS2aTfeen+0LObCHk6mMtG35BaHZLS+GpntDhjokl76ZdEZ5WQyJm8PrR/S+SmEGDY+KF5B4UdKqxTIJYJ7b6QHYyeHkm9Iijuf4Zs0y1vZOeyhKtQzw9X6R9Wet7BihULH+CiyCGU8ouxcHYBjDM8Idm69G1NDr9LvGB2msPWpN83QmveRTGnVORqJn6Ovdjx9q3hn8M4wKuNCCkeZ+m96xK+HP1j6EJbGyoISthD5VAmnK/nsONhNuCf4AHPtm8NHYAxAM8dSyQKX2PP+BnS7k5llU/u31Kbfb8xvo+91rdSEqg8S0N5E58b1vJLfkoDztG96YTvesYQWKL3GsJYxQrZyFbpkHL1G9GGaMaP2w50sOhJOxIZrLNMOdvVOE8ifJZf2OUq+ANqeSpjWmePDHewyMXCPFhzBCCfENFSPudTnPy226LYWeir7vF8gF8OY3J066JYJiUs5uC20auv8aRh77l3ZMvE2P2ry1ywOc0Z5EEpw0fnZeDSRFb3P1D8C2nxt7p724iGAAAAAElFTkSuQmCC"
                        />
                      </div>
                      <p>Ionic</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="technlgy-main tech-row-2">
            <div className="technlgy-inner-30">
              <div className="technlgy-iconmain">
                <img alt="" src="image/tech-2.png" />
              </div>
            </div>
            <div className="technlgy-inner-70">
              <div className="techlogyicon">
                <ul>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Java Script</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>HTML</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATfSURBVHgBvZlBbBtFFIbfjF2ChUJDQUJJekgkcje2pebUOleiNPQEpJVqBGrglHIH6ogTQpHSG5WQKBIUbrgtXMHhBFJKl4JAiIPXbeRUSCkuTmtwvDudt/E6s7Nr7+7sqN/BszPeHf96++a95xkCGqllC8UUTS3eY1ap0bWrDOyrnRZUTplGEzRBICEoMk3pCQZwnk83hmP/MBu2rO7BjzBS0SVeSXAtWxxL04crjJEin6Eofy8L9sDIZYuLP/mrUQEFIgtGkZTulghLLQaJFBkq+IAmF1+JK56EiQTYzaZI6gJ/r1n3lYcRUbCIycVXbWZ/tvCbUYW4gt3Fw99fKapIkc7MC/DnH7+DIkPFE1GkvHhUGf/ma9h89324t3kDEuITT+7kj63wN/hymF9GJVM8Ac+tfQg7m5vw0xvnQCMmAXaR2jZ7UZdYZHTpFad9tlCAzMQ4aGTKAhijQIi2oJ7iAkfyuX5/5u1l0EmKgUEB/UQTh8+96ek/PzcH6dFR0IWVgiYlhJmgAbTuUwvznrFDXOz06SXQBRdbo9RKm6AB2bouU2eWtFl5/ubNOt2DhyYkhHJBI4Vc4HcarWw4vzVtYDHCEi28TPE4pMcHRwRNVr6PH3T/OlmkeHrZ6w63P1qDbqvV72uxMmE1bBzBpGduFXChydbdrW5A7YsrnjG0chJsBnVs6X6H3QdF5Mjw4Pq30N2+C+bnV3xWPnpyAVTBGIztvksQtViMSUJMFMi/lz5x2j0uVrby5KK6YIzB2PZcQi0Wy9b9/8bP3Lrb/b5sZUzXRwp5UAFjsNM6PYX0HJQo0B1E0Mp3v6t6xlTTNcZgbB3BlkVjLzo5UViNbZ9g5K+PL3n6ilbu6+uFtf9iWTjIuq0vvwq8t91owNbV654xBSv3g4IjOG7yeDLvz2rt738YeP/WtWueflwr28D6Fk67F4QQkzHIRplAThQ299Ujq+/1+2N8oklgQ+dAK8co8Js+wXx+k3+GCg5KFE4tIVh9BMJxC/x2Yzv0XjcGO7/lXtiwn0nCkK2bhOkzpyPd58ZghArjZtiDaMVhRU5cJnnmi1IUdYUoceDDYDe9+v0cXvaHsp3yB777HnAf/tu2AufIr6/1RbpFkRz6ZE4Zht+HqX3IsKk18CH5/5ojjMddzG4yLf43fGfARgqm65m3DsIaFkU4JmZECU+O6Jt0z7HwYIL+UQQlijAwXYtEKD09hVlf8LTxoznoiaBE0eYlpFg3RAXTtZxIhhX4Ygz2CO5hBj00+tqrvjEV67rIiSTEyp437xFMCAS6RWbuuKePi61dHZzZwsAtLNwZEjk6oPQUYzDiEcx3gX6RHwhKFEms61KXfDkzMRFY4IsxGPHsXtZzx9b5wAokJM52K/ruEz3/7XD/lqNFh7JnxLDm226t52bLvKA/yy+n4DEIHsIGF1viYk1xcMD+8OwUJXaZF0RnQYGEgjdsysoLRvDGdsgOvJpwRcGmxdg7YccHkc447hRmi8xmn0JEN4kpGGvxi/O3jHKUm2OdIt3OzZb45BcgRHjkQxkutENhXVxUYSgde4UtzFDBhF3uEFiVF1QUlA8Wh/n3EMFDF1QUNJyE+oUHCDa50NeTCHVJLNhFXJiC4CZ3ndWXbhnroAltgl1wYe7Y1vmGvVeJu6Ci8AiMZlqkQoXLXAAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <p>Angular</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Veu.js</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Wordpress</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Python</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="technlgy-main tech-row-3">
            <div className="technlgy-inner-30">
              <div className="technlgy-iconmain">
                <img alt="" src="image/tech-3.png" />
              </div>
            </div>
            <div className="technlgy-inner-70">
              <div className="techlogyicon">
                <ul>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOeSURBVHgBzZi/bxNJFMe/bzdOcscd55xOOkcHkmnuTrorsCioEGshEEighA5REJt/gEAPcYAazD+Alx8CyiAKCpDilDQkUCFRsIgCI6FgoCAheB8zIUgJ0rydHdhNPpXt+a781ds3M98ZgiVvDm4JfKITIArU16KkHfzzPxR+HYYI8RyY5hDHk9QMI1hCSYI3+0tlv1BorRi1wsrwWhp04fKkjdCTBpfN9vdPpzHrSINPHW/ZCEXDy5UFysiHmjI9niQyGn53aGsth8p+ywSP18T5IVV4BPlThOeNSgKz4fyr+wXm7dKwVGHx1WQG0W/SsGS4iw2I1BJzWB8eSYNGw8w8g/UgjqekYaPh2POayL8twqRt2mh4aCrq9jzvMPIj0rkiSSTudMp0u8dcR/aV1marNiHISxIM3XkRqkpXGLiCH48uxKQyW7FNbIlp7SutUS5uHohqm/npmMcfyz4+GNfp4U2vwr9/f7hm0l7fuit4XNw2skT+8nMvB4Zuz/zxT7Ozt9BGCqwMXzvKJ1SFG2DLzYRRP3aLQv2xdG8pIPIn1MfAoI54abHaOfBTBAsSW+LqUW4xo2ltdhV/3ecxZXYaZrOaMhUGnpWUFhaIhq8d4QlltAYHSne5HINDWz0prX4bSTqj4dYRLjOpNnCECjyd8hGstI6I0bDvIfFhEw/+xW64Bf8gqcpGw2o2ijFPojPEARwhcszDaqI5G17sdz9WqdXIOV5uSCTDERzxe9+xlTOeS8PmlgBuw5Etr2kKznhtcdQ0EBNCOLLzCfS23EZaCFFnL7UlidFw/QbNqSpfgiPMPaubnDXPeIvVJI046cZu0riraR1qmOK6rZ7juN6pJueJxFVCm0aMk3CYhJ09fSH7tE2/aqOIMcNM1c6+vhAWpIqX88Pztflf3o/MF98GknZgya83G/+Hq38r3dObSRwQr6zRHrrM3lRSzzoZHpxtlAn+RXxJXYmpjWOuL+w4EyID+pIEm2bPj6nUpQ+k63Ox8g2i4Z9nz42miYh5YJx0ug3UCnERGwxhlfAC5Hc3bI0QL8nqyJI30jrsHC+zJJPr1pjjzC5eMrlu9Xx/HQyTQ9paYRC9zK5qpSOSU+hRkzXsVhr5V3ihcrqN9Jm2G+NT6liZBjGtMXo6HkawhMEnFyoNa70LomH958q0DtVtyHTVrlhdqGQTeFZjHS8HZ8/WVDQcVRcH+pJEL3ld1eiPmKitJlkzy75dzWcoAi6WbcrdYAAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <p>Figma</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Photoshop</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>illustrator</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>Adobe XD</p>
                    </div>
                  </li>
                  <li>
                    <div className="tech-card">
                      <div className="icon-technlgy">
                        <img
                          alt=""
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p>After effect</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-main-section bg-black">
        <div className="container">
          <div className="contact-headingtop">
            <h4>Lets connect</h4>
            <div className="contact-headingbtm">
              <h3>
                <span>LET YOUR GOAL </span>BE OUR NEXT PROJECT{" "}
              </h3>
            </div>
          </div>
          <div className="contact-card contact-box">
            <div className="contact-flx-main">
              <div className="contact-inner-flx-40">
                <div className="contact-info">
                  <div className="contactheading-bg">
                    <h3>You have a vision. We have a way to get you there.</h3>
                  </div>
                </div>
              </div>
              <div className="contact-inner-flx-60">
                <div className="contact-form">
                  <div className="contact-frm">
                    <div className="form-flx">
                      <div className="frm-flx-50">
                        <div className="input-singl">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="frm-flx-50">
                        <div className="input-singl">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="frm-flx-50">
                        <div className="input-singl">
                          <input type="text" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="frm-flx-50">
                        <div className="input-singl">
                          <input type="text" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="frm-flx-50">
                        <div className="input-singl">
                          <textarea
                            name=""
                            placeholder="Your Message"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="cntct-btn">
                      <a className="btn btn-primary" href="/contact">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default Home;
