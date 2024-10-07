
const users = JSON.parse(localStorage.getItem('userProfiles')) || [];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');
const manageProfileBtn = document.querySelector('.manageProfile');

addIcon.addEventListener('click', () => {
  let userName = prompt('please enter your name');

  if (userName != null && !users.includes(userName)) {
    if (users.length >= 3) {
      alert('You can only add up to 3 profiles.');
      return;
    }

    users.push(userName);
    localStorage.setItem('userProfiles', JSON.stringify(users)); 

    const newButton = document.createElement('button');
    newButton.classList.add('btn');
    newButton.innerHTML = `<span>${userName}</span>`;

    newButton.addEventListener('click', () => {
      window.location.assign("cinemania-main/index.html");
    });

    memberDiv.insertAdjacentElement('afterbegin', newButton);
  } else {
    alert('username already exist');
  }
});

users.forEach(user => {
  const newButton = document.createElement('button');
  newButton.classList.add('btn');
  newButton.innerHTML = `<span>${user}</span>`;

  newButton.addEventListener('click', () => {
    window.location.assign("cinemania-main/index.html");
  });

  memberDiv.insertAdjacentElement('afterbegin', newButton);
});

function userIcons() {}