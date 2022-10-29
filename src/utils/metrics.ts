import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
const DESIGN_WIDTH = 390; //This is the iPhone 13's viewport width
const DESIGN_HEIGHT = 844; //This is the iPhone 13's viewport height
const horizontalScaleCoefficient = width / DESIGN_WIDTH;
const verticalScaleCoefficient = height / DESIGN_HEIGHT;

export const hs = (value: number) =>
  Math.round(value * horizontalScaleCoefficient);
export const vs = (value: number) =>
  Math.round(value * verticalScaleCoefficient);

export const pagePadding = hs(20);
