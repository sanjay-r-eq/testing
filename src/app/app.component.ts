import { Component, OnInit } from '@angular/core';

const $: any = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // slick:any;
  // event:any;
  // currentSlide:any;
  // nextSlide:any;
  slides = [
    {img: "../assets/1.jpg"},
    {img: "../assets/2.jpg"},
    {img: "../assets/3.jpg"},
    {img: "../assets/4.jpg"},
    {img: "../assets/5.jpg"},
    {img: "../assets/6.jpg"},
    {img: "../assets/7.jpg"},
    {img: "../assets/1.jpg"}
  ];
  
  slideConfig = { 
    slidesToShow:4,
    slidesToScroll: 1,
    dots: false, 
    nav: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }; 

  title = 'testing';
  
  ngOnInit(): void {        
    // var $slider = $('.carousel');
    // var $progressBar = $('.progress');
    // var $progressBarLabel = $( '.slider__label' );      

    // $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    //   var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;      
    //   $progressBar
    //     .css('background-size', calc + '% 100%')
    //     .attr('aria-valuenow', calc );
      
    //   $progressBarLabel.text( calc + '% completed' );
    // });
  }
  
}
