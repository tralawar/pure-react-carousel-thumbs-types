declare module 'pure-react-carousel-thumbs' {
  import * as React from 'react';

  export interface CarouselProps {
    images: string[] | undefined;
    className?: string;
    changeOnClick?: boolean;
    height?: number | string;
    width?: number | string;
    index?: number;
    autoPlay?: boolean;
    stopAutoPlayOnHover?: boolean;
    interval?: number;
    animationDuration?: number;
    swipe?: boolean;
    navButtonsAlwaysVisible?: boolean;
    navButtonsAlwaysInvisible?: boolean;
    cyclical?: boolean;
    navIcon?: React.ReactNode;
    onChange?: (newIndex: number) => any;
    next?: (now?: number, previous?: number) => any;
    prev?: (now?: number, previous?: number) => any;
  }

  export interface CarouselThumbsProps {
    images: string[] | undefined;
    currentIndex: number;
    changeIndex: (newIndex: number) => void;
  }

  export class Carousel extends React.Component<CarouselProps> {}
  export class CarouselThumbs extends React.Component<CarouselThumbsProps> {}
}
