// CREO UN ISTANZA DI VUE.JS
const myWebApp = new Vue({
    el : '#app',
    data : {
        activeSlide : 0,
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },

    created () {
        setInterval (this.nextFunc, 3000);
    },

    methods : {
        nextFunc () {
            this.activeSlide++;
            if (this.activeSlide == this.slides.length) {
                this.activeSlide = 0;
                
            };
        },

        prevFunc () {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length -1;
            };
        },

        activeFunc (newSlide) {
            this.activeSlide = newSlide;
        },

        pauseFunc () {
            
        },

        startFunc  () {

        }
    }
});
