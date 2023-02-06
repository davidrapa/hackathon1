const draggables = document.querySelectorAll('.draggable');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

const dropzones = document.querySelectorAll('.dropzone');

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', event => {
    event.preventDefault();
    dropzone.classList.add('highlight');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('highlight');
  });

  dropzone.addEventListener('drop', event => {
    event.preventDefault();
    const draggable = document.querySelector('.dragging');
    dropzone.appendChild(draggable);
    dropzone.classList.remove('highlight');
  });
});


