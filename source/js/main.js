import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

function onPressEnter() {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const loader = header.querySelector('.header__case-background');
  const pressEnter = document.querySelector('.header__press-enter');
  const enterOrTouch = document.querySelector('.header__press-inner');
  const headerContainer = document.querySelector('.header__container');
  const headerGroup = document.querySelector('.header__group');
  const headerNav = document.querySelector('.header__navigation');
  const mainTitle = document.querySelector('.main__title');
  const mainCase = document.querySelector('.main__case');
  const mainCaseImg = document.querySelector('.main__case-img');
  const mobileBtnMenu = document.querySelector('.header__mobile-btn')

  document.body.offsetWidth >= 1040 ?
    enterOrTouch.innerText = 'Нажмите на Enter' :
    enterOrTouch.innerText = 'Кликните на экран';

  setTimeout(() => {
    loader.style.opacity = '0';

    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 4000);

  setTimeout(() => {
    desctopWidth();
    mobileWidth();
  }, 4000);

  function desctopWidth() {
    document.addEventListener('keydown', desktopEnter);

    function desktopEnter(event) {
      if (event.code === 'Enter' && document.body.offsetWidth >= 1040) {
        pressEnter.remove();
        headerContainer.style.animation = 'minifyContainer 1s forwards ease-in-out';
        headerGroup.style.animation = 'groupMinify 1s forwards ease-in-out';

        setTimeout(() => {
          main.style.cssText = 'display:flex; justify-content: space-between;';
          headerNav.style.cssText = 'animation: navTransform 1s forwards ease-in-out; display: flex';
          mainTitle.style.animation = 'titleTransform 1s forwards ease-in-out';
          mainCase.style.animation = 'caseTransform 1s forwards ease-in-out';
          mainCaseImg.style.animation = 'caseImg 1s forwards ease-in-out';
        }, 1000);
      }
      document.removeEventListener('keydown', desktopEnter);
    }
  }

  function mobileWidth() {
    document.addEventListener('touchstart', mobileTouch);

    function mobileTouch(event) {
      if (event.type === 'touchstart' && document.body.offsetWidth < 1040) {
        pressEnter.remove();
        headerContainer.style.animation = 'minifyContainer 1s forwards ease-in-out';
        headerGroup.style.animation = 'groupMinify 1s forwards ease-in-out';

        setTimeout(() => {
          main.style.cssText = 'display:flex; justify-content: space-between;';
          mainTitle.style.animation = 'titleTransform 1s forwards ease-in-out';
          mobileBtnMenu.style.cssText = 'display: block;animation: mobile-btn 1s forwards ease-in-out';
          mobileBtnMenu.onclick = function () {
            alert('qwe')
          }

          const bluePage = document.querySelector('.blue-page');
          main.addEventListener('touchstart', moveBluePage);
          function moveBluePage() {
            bluePage.style.cssText = 'display: flex; animation: blue-page 1s forwards ease-in-out;';
            bluePage.onclick = function () {
              bluePage.style.cssText = 'display: flex; animation: blue-page-back 1s forwards ease-in-out;';
            };
          }

        }, 1000);
      }
      document.removeEventListener('touchstart', mobileTouch);
    }
  }
}

onPressEnter();
