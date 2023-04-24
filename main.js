class Slider {
    constructor(settings) {
        this.slider = document.querySelector(settings.slider);
        this.sliderParent = this.slider.querySelector('.slider__block');
        this.slides = [...this.sliderParent.children];
        this.next = document.querySelector('.next');
        this.prev = document.querySelector('.prev');

        this.dir = settings.direction.toUpperCase() == 'X' ? 'X' : 'Y';
        this.timeMove = settings.time ?? 1000;
        this.width = this.slider.clientWidth;
        this.height = this.slider.clientHeight;
        this.moveSize = this.dir === 'X' ? this.width : this.heigth;

        this.active = 0;

        this.sliderParent.style = `
                    position: relative;
                    height: ${this.height}px;
                    overflow: hidden;`;

        this.slides.forEach((slide, index) => {

            slide.style = `
                position: absolute;
                width: ${this.width}px;
                height: ${this.height}px;`;
            
            if(index != this.active) {
                slide.style.transform = `translate${this.dir}(${this.width}px)`;
                
            }
        })
    }
}

const slider = new Slider({
    slider: '.slider',
    direction: 'x',
    time: 1000,
    autoplay: true,
    interval: 3000
});