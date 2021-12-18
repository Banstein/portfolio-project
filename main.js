const menuOverlay = document.querySelector('#menu-overlay');
const mobileMenuButton = document.querySelector('#mobileMenuButton');

function mobileMenuToogle() {
  menuOverlay.style.width = '100%';
}

function closeMobileMenu() {
  menuOverlay.style.width = '0';
}

mobileMenuButton.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.mobile-menu li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMobileMenu();
  });
}

//popup-window

const projects = [
  {
    id: 1,
    title: 'Tonic',
    image: 'images/one-background.png',
    imageAlt: 'First Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: 'images/two-background.png',
    imageAlt: 'Second Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    image: 'images/three-background.png',
    imageAlt: 'Third Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: 'images/four-background.png',
    imageAlt: 'Fourth Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    gitLink: '#',
    srcLink: '#',
  },
];

const popupWidnow = document.querySelector('.pop-main');
document.querySelectorAll('.see-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const popContainer = document.querySelector('.pop-container');
    const id = Number(btn.parentNode.id.split('-')[1]);
    const card = projects.find((item) => item.id === id );
    popContainer.innerHTML = `
    <h1 class="pop-header">${card.title}</h1>
    <ul class="pop-list1">
    ${card.details.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    <img class="pop-img" src="${card.image}" alt="${card.imageAlt}">
    <p class="pop-text">${card.description}</p>
    <div class="pop-list2-container">
      <ul class="pop-list2">
    ${card.langs.map((item) => {
    return `<li>${item}</li>`;
  }).join('')}
      </ul>
    </div>
    
    <hr class= "pop-hr">
    <div class="pop-btn-container">
      <button class="pop-btn live">See live<li id="pop-icon"><a href="#" ><i class="fa fa-rss" aria-hidden="true"></i></a></li></button>
      <button class="pop-btn source">See Source<li id="pop-icon"><a href="#" ><i class="fa fa-github" aria-hidden="true"></i></a></li></button>
    </div>
  `;
    popupWidnow.style.visibility = 'visible';
  });
});
const xbtn = document.querySelector('#close-btn');
xbtn.addEventListener('click', () => {
  popupWidnow.style.visibility = 'hidden';
});