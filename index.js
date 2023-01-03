const cardBox = document.querySelector('.cardBox');
const navBtns = document.querySelectorAll('.menuBtn');


navBtns.forEach(button => {
    button.addEventListener('click', () => {
        navBtns.forEach(button => button.classList.remove('active'));
        button.classList.add('active');

        if(button.classList.contains('home')){
            renderHome();
        }
        else if(button.classList.contains('menu')){
            clearChildren();
            renderMenu(8);
        }
        else if(button.classList.contains('contact')){
            clearChildren();
            renderContact();
        }
    });
});


renderHome();

function renderHome(){
    clearChildren();

    const welcomeBox = document.createElement('div');
    welcomeBox.classList.add('welcomeBox');
    cardBox.appendChild(welcomeBox);

    const firstLine = document.createElement('h3');
    const secondLine = document.createElement('h3');
    const bigImg = document.createElement('img');
    const thirdLine = document.createElement('h3');

    firstLine.textContent = "Welcome to Foodit!";
    secondLine.textContent = "We got the best YumYums!";
    bigImg.src = "/media/yum.png";
    thirdLine.textContent = "Order now!";

    welcomeBox.appendChild(firstLine);
    welcomeBox.appendChild(secondLine);
    welcomeBox.appendChild(bigImg);
    welcomeBox.appendChild(thirdLine);
}

function renderMenu(items){

    const menuBox = document.createElement('div');
    menuBox.classList.add('menuBox');
    cardBox.appendChild(menuBox);

    for(let i = 0; i <= items; i++){
        let card = document.createElement('div');
        card.classList.add('card');
        menuBox.appendChild(card);

        let myImg = document.createElement('img');
        let title = document.createElement('h2');
        let ingredients = document.createElement('h4');

        myImg.src='/media/yum.png'; 
        title.textContent = "Cinnamon Buns!";
        ingredients.textContent = "Ingredients: Butter, sugar, salt, eggs, cinnamon, milk";

        card.appendChild(myImg);
        card.appendChild(title);
        card.appendChild(ingredients);
    }

}

function renderContact(){
    let contactBox = document.createElement('div');
    contactBox.classList.add('addressBox');
    cardBox.appendChild(contactBox);

    let lineOne = document.createElement('h3');
    let lineTwo = document.createElement('address');
    let lineThree = document.createElement('address');
    let lineFour = document.createElement('address');
    let contactImg = document.createElement('img');
    let lastLine = document.createElement('h3');

    lineOne.textContent = "Contact us at:";
    lineTwo.textContent = "Address: StreetName 007 City town";
    lineThree.textContent = "PhoneNumber: 123-456-789";
    lineFour.textContent = "Country: location";
    contactImg.src = "/media/yum.png";
    lastLine.textContent = "Thanks!";

    contactBox.appendChild(lineOne);
    contactBox.appendChild(lineTwo);
    contactBox.appendChild(lineThree);
    contactBox.appendChild(lineFour);
    contactBox.appendChild(contactImg);
    contactBox.appendChild(lastLine);    
}


function clearChildren(){
    while(cardBox.firstChild){
        cardBox.removeChild(cardBox.lastChild);
    }
}



