import React, { useState } from 'react';
import FMCardItem from '@components/atoms/FMCardItem/index';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Style
import { useSliderFMProfileStyle } from './SliderFMProfiles.style';
// Apollo
import { useQuery } from '@apollo/client';
import { getSliderFreemancers } from 'src/lib/apollo/query/GetSliderFreemancers';

const SliderFMProfiles = () => {
  const [freelancers, setFreelancers] = useState(undefined);
  const {} = useQuery(getSliderFreemancers, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      const result = [...data.profileFilter.edges]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setFreelancers(result);
    },
  });
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

  return (
    <>
      {freelancers && (
        <Carousel
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className={classes.carousel}
        >
          {freelancers &&
            freelancers.map((freelancer: any, i: number) => (
              <div key={i}>
                <FMCardItem
                  identifier={freelancer.node.user.username}
                  avatar={freelancer.node.avatar}
                  name={`${freelancer.node.firstName} ${freelancer.node.lastName}`}
                  job={freelancer.node.jobTitle}
                  skills={freelancer.node.skills.map((skill: Object) => {
                    return skill;
                  })}
                />
              </div>
            ))}
        </Carousel>
      )}
    </>
  );
};

export default SliderFMProfiles;
