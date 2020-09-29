const [myProjectsLink, aboutMeLink, getInTouchLink] = document.querySelectorAll('.menu__item > a');
const [nav, myProjectsSection, aboutMeSection, getInTouchSection, closeButton] = document.querySelectorAll('.container > *');

function showSection(section){
  section.classList.remove('hidden');
  closeButton.classList.remove('hidden');
  nav.classList.add('hidden');
}

function closeSection() {
  const activeSection = document.querySelector('.page:not(.hidden)');
  activeSection.classList.add('hidden');
  closeButton.classList.add('hidden');
  nav.classList.remove('hidden');
}

myProjectsLink.addEventListener('click', () => showSection(myProjectsSection));
aboutMeLink.addEventListener('click', () => showSection(aboutMeSection));
getInTouchLink.addEventListener('click', () => showSection(getInTouchSection));
closeButton.addEventListener('click', closeSection)
