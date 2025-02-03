"use strict";

const header = document.querySelector('header');
const initialHeight = 200;
const minHeight = 100;

window.addEventListener('scroll', () => {

  const scrollAmount = window.scrollY;
  const maxShrink = initialHeight - minHeight;
  const newHeight = Math.max(minHeight, initialHeight - scrollAmount);

  if (header.style.height !== `${newHeight}px`) {
    header.style.height = `${newHeight}px`;
  }
});

header.style.transition = 'height 0.3s ease';



const menus = {
  3: [
    "Voorgerecht: Een rijke en romige kreeftenbisque, afgewerkt met een vleugje saffraan en knapperige venkel.",
    "Hoofdgerecht: Hertenkalf met rode wijnjus, pastinaakpuree en geroosterde spruitjes.",
    "Dessert: Onze iconische chocoladebom Le Mirage met ganache, hazelnootpraliné en een verrassende vloeibare kern.",
  ],
  5: [
    "Amuse-bouche: Tartaar van wagyu met een espuma van gerookte paprika.",
    "Voorgerecht: Een rijke en romige kreeftenbisque, afgewerkt met een vleugje saffraan en knapperige venkel.",
    "Tussengerecht: Een moderne interpretatie van de klassieke Belgische waterzooi, met tarbot, seizoensgroenten en een romige wittewijnsaus.",
    "Hoofdgerecht: Hertenkalf met rode wijnjus, pastinaakpuree en geroosterde spruitjes.",
    "Dessert: Onze iconische chocoladebom Le Mirage met ganache, hazelnootpraliné en een verrassende vloeibare kern.",
  ],
  7: [
    "Amuse-bouche: Tartaar van wagyu met een espuma van gerookte paprika.",
    "Voorgerecht: Een rijke en romige kreeftenbisque, afgewerkt met een vleugje saffraan en knapperige venkel.",
    "Tussengerecht: Een moderne interpretatie van de klassieke Belgische waterzooi, met tarbot, seizoensgroenten en een romige wittewijnsaus.",
    "Intermezzo: Gebakken ganzenlever met appelchutney en een briochetoast.",
    "Hoofdgerecht: Hertenkalf met rode wijnjus, pastinaakpuree en geroosterde spruitjes.",
    "Kaasselectie: Een selectie van lokale en internationale kazen, geserveerd met vijgenbrood en honing.",
    "Dessert: Onze iconische chocoladebom Le Mirage met ganache, hazelnootpraliné en een verrassende vloeibare kern.",
  ],
};


const buttons = document.querySelectorAll('.menu-buttons button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const menuTitle = document.getElementById('menu-title');
const menuItems = document.getElementById('menu-items');
const closeModal = document.getElementById('close-modal');


const showMenu = (menuType) => {

  menuTitle.textContent = `${menuType}-Gangenmenu`;
  menuItems.innerHTML = "";
  menus[menuType].forEach(item => {
    const li = document.createElement('li');
    const [dishName, description] = item.split(":");

    const dishElement = document.createElement('span');
    dishElement.textContent = dishName + ":";

    dishElement.classList.add('dish-name');

    const descriptionElement = document.createElement('span');
    descriptionElement.textContent = description;

    descriptionElement.classList.add('description');


    li.appendChild(dishElement);
    li.appendChild(descriptionElement);


    menuItems.appendChild(li);
  });

  modal.style.display = 'block';
  overlay.style.display = 'block';
};

const hideMenu = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const menuType = button.getAttribute('data-menu');
    showMenu(menuType);
  });
});

closeModal.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);
