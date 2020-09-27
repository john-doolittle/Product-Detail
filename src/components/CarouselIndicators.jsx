import React from 'react';

function CarouselIndicators({ items, activeIndex, onClickHandler }) {
  return (
    <ol className="carousel-indicators ajs-carousel-indicators">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => onClickHandler(index)}
          >
            <img src={item.src} className="ajs-indicator-image"/>
            <li
              className={activeIndex === index ? 'active' : ''}
            />
          </div>
        );
      })}
    </ol>
  );
}

export default CarouselIndicators;
