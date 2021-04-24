// const aboutMe = document.getElementById("aboutMe")

const input = document.getElementById('aboutMe');
input.addEventListener('click', function() {
  alert('Thats all there is to know!');
}); 

const newInput = document.getElementById('myProjects');
newInput.addEventListener('click', function() {
  alert('More to come!');
}); 

function showhide1() {
  const div = document.getElementById("aboutMe");
  div.classList.toggle('hidden'); 
}

function showhide2() {
  const div = document.getElementById("myProjects");
  div.classList.toggle('hidden'); 
}

function showhide3() {
  const div = document.getElementById("emailMe");
  div.classList.toggle('hidden'); 
}