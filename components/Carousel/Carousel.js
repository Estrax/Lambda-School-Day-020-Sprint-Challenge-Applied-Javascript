class Carousel {
    constructor(element){
        this.element = element;

        this.slides = [];
        this.navs = [];

        this.currentlySelected = 0;

        this.renderSlides();
        this.renderSlideNavs();

        this.playCarousel();
    }

    renderSlides(){
        this.element.querySelectorAll('img').forEach(slide => {
            slide.classList.add('default');
            this.slides.push(new Slide(slide));
        });
    }

    renderSlideNavs(){
        this.element.querySelectorAll('div').forEach(nav => this.navs.push(new SlideNav(nav)));
    }

    updateCurrentlySelected(direction){
        this.slides[this.currentlySelected % this.slides.length].toggle();
        this.currentlySelected += direction ? 1 : -1;
        this.slides[this.currentlySelected % this.slides.length].toggle();
    }

    playCarousel(){
        this.slides[this.currentlySelected % this.slides.length].toggle();
    }
}

class SlideNav {
    constructor(element){
        this.element = element;

        this.element.addEventListener('click', () => this.changeSlide());
    }

    changeSlide(){
        return ref.updateCurrentlySelected(this.element.classList.contains('right-button') ? true : false);
    }

}

class Slide {
    constructor(element){
        this.element = element;
    }

    toggle(){
        this.element.classList.toggle('show');
    }
}

let carousel = document.querySelector('.carousel');
let ref = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
