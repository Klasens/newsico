const menu = document.querySelector('#menu');
const sideMenu = document.querySelector('#sideMenu');
const pageOverlay = document.querySelector('#menuOverlay');
const techInterviews = document.querySelector('#tech-interviews');
const techInterviewsContent = document.querySelector(
  '#tech-interviews-content'
);
const developerResources = document.querySelector('#dev-resources');
const developerResourcesContent = document.querySelector(
  '#dev-resources-content'
);

menu.addEventListener('click', function () {
  sideMenu.classList.add('opacity--1');
  pageOverlay.classList.add('opacity--1');
  pageOverlay.classList.remove('pointer-events--none');
});

pageOverlay.addEventListener('click', function () {
  sideMenu.classList.remove('opacity--1');
  pageOverlay.classList.remove('opacity--1');
  techInterviewsContent.classList.remove('opacity--1');
  developerResourcesContent.classList.remove('opacity--1');
  pageOverlay.classList.add('pointer-events--none');
});

techInterviews.addEventListener('click', function () {
  techInterviewsContent.classList.add('opacity--1');
  developerResourcesContent.classList.remove('opacity--1');
});
developerResources.addEventListener('click', function () {
  developerResourcesContent.classList.add('opacity--1');
  techInterviewsContent.classList.remove('opacity--1');
});
