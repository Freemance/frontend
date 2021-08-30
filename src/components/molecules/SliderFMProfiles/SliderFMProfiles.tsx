import React from 'react';
import FMCardItem from '@components/atoms/FMCardItem/index';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Style
import { useSliderFMProfileStyle } from './SliderFMProfiles.style';

const SliderFMProfiles = () => {
  const classes = useSliderFMProfileStyle();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const items = [
    {
      name: 'Random Name #1',
      description: ['REACT', 'VUE'],
    },
    {
      name: 'Random Name #2',
      description: ['VUE', 'CSS'],
    },
    {
      name: 'Random Name #2',
      description: ['HTML', 'CSS'],
    },
    {
      name: 'Random Name #2',
      description: ['JAVA', 'CSS'],
    },
    {
      name: 'Random Name #2',
      description: ['HTML', 'JAVSCRIPT'],
    },
    {
      name: 'Random Name #2',
      description: ['R', 'CSS'],
    },
    {
      name: 'Random Name #2',
      description: ['PYTHON', 'CSS'],
    },
  ];
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={800}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={200}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className={classes.carousel}
    >
      {items.map((item, i) => (
        <div key={i}>
          <FMCardItem
            key={i}
            avatar="https://avatars.githubusercontent.com/u/65286318?v=4"
            name={item.name}
            job="Frontend Developer"
            skills={item.description}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderFMProfiles;
