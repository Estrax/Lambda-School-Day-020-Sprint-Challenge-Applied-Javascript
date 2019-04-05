class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ; 
    this.tabData = this.tabElement.getAttribute("data-tab");

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      // this.cards = ;
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      // this.cards = ;
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }
    

    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // this.cards = Array.from(this.cards).map();
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab(){
    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    const tabs = document.querySelectorAll(".tab");
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()
    tabs.forEach(tab => tab.classList.remove("active-tab"));

    // Select all of the elements with the .card class on them
    // const cards = ;
    const cards = document.querySelectorAll(".card");

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    cards.forEach(card => card.style.display = "none");
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
    this.tabElement.classList.add("active-tab");
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
    this.cardElement.style.display = "flex";
  }
}

const articlesData = {
  articleIndexes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  articleTitles: [
    "So, remember the new number! 0118 999! 88199, 9119 725! ... 3!",
    "I'm a 58 year old IT-man who works in a basement. Yes, I do the whole Lambda Times thing!",
    "We don't need no education. Yes you do. You've just used a double negative.",
    "I am a man, he's a man, we're men! Ok, tell me how your feeling.",
    "Someone stole his keyboard. Did you see who it was? Red bearded man.",
    "How long have you been programming? Ten years? Ten years, and how did it happen? If that's not a rude question.",
    "Yeah, you need to turn it on... uh, the button turns it on.",
    "See the driver hooks a function by patching the system call table, so its not safe to unload it.",
    "It's not safe to unload it unless another thread's about to jump in there and do its stuff, and you don't want to end up in the middle of invalid memory!",
    "Hello, IT. Have you tried turning it off and on again?",
    "I am writing to inform you of a fire which has broken out at the premises of...",
    "Warning: Contains scenes of programming.",
    "Shut up, do what I tell you, I'm not interested"
  ],
  tabs: ["javascript", "technology", "node", "jquery", "bootstrap"],
  authors: [
    {name: "Sir Ruff'n'Stuff", img: "sir.jpg"},
    {name: "Bones R. Life", img: "bones.jpg"},
    {name: "Fido Walksalot", img: "fido.jpg"},
    {name: "Max Goodboye", img: "max.jpg"},
    {name: "Pupper S. Doggo", img: "puppers.jpg"},
  ] 
};

function generateArticles(){
  articlesData.articleIndexes.forEach((i) => {
    let tab = articlesData.tabs[Math.floor(Math.random()*articlesData.tabs.length)];
    let authorData = articlesData.authors[Math.floor(Math.random()*articlesData.authors.length)];
    let articleTitle = articlesData.articleTitles[Math.floor(Math.random()*articlesData.articleTitles.length)];

    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-tab', tab);

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = `${articleTitle}`;
    card.appendChild(headline);

    let author = document.createElement('div');
    author.classList.add('author');

    let img_container = document.createElement('div');
    img_container.classList.add('img-container');

    let img = document.createElement('img');
    img.setAttribute('src', `./assets/${authorData.img}`);
    
    img_container.appendChild(img);
    author.appendChild(img_container);

    let span = document.createElement('span');
    span.textContent = `By ${authorData.name.toUpperCase()}`;

    author.appendChild(span);

    card.appendChild(author);
    document.querySelector('.cards-container').appendChild(card);
  });
}

generateArticles();

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));