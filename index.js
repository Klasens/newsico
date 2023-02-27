const menu = document.querySelector('#menu');
const sideMenu = document.querySelector('#sideMenu');
const sideMenuClose = document.querySelector('#menuClose');
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
  sideMenu.classList.remove('pointer-events--none');
  pageOverlay.classList.remove('pointer-events--none');
});
sideMenuClose.addEventListener('click', function () {
  sideMenu.classList.remove('opacity--1');
  pageOverlay.classList.remove('opacity--1');
  techInterviewsContent.classList.remove('opacity--1');
  developerResourcesContent.classList.remove('opacity--1');
  developerResourcesContent.classList.add('pointer-events--none');
  techInterviewsContent.classList.add('pointer-events--none');
  pageOverlay.classList.add('pointer-events--none');
  sideMenu.classList.add('pointer-events--none');
});

pageOverlay.addEventListener('click', function () {
  sideMenu.classList.remove('opacity--1');
  pageOverlay.classList.remove('opacity--1');
  techInterviewsContent.classList.remove('opacity--1');
  developerResourcesContent.classList.remove('opacity--1');
  pageOverlay.classList.add('pointer-events--none');
  sideMenu.classList.add('pointer-events--none');
});

techInterviews.addEventListener('click', function () {
  techInterviewsContent.classList.add('opacity--1');
  techInterviewsContent.classList.remove('pointer-events--none');
  developerResourcesContent.classList.remove('opacity--1');
  developerResourcesContent.classList.add('pointer-events--none');
});
developerResources.addEventListener('click', function () {
  developerResourcesContent.classList.add('opacity--1');
  developerResourcesContent.classList.remove('pointer-events--none');
  techInterviewsContent.classList.remove('opacity--1');
  techInterviewsContent.classList.add('pointer-events--none');
});
