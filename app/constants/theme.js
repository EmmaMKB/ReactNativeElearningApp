import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    black: '#1E1F20',
    white: '#FFFFFF',
    gray: '#6A6A6A',
    blue: "#305F72",
    salmon: '#F18C8E',
    salmon2: '#FAE4F4'  
}

export const SIZES = {

    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    width,
    height
};


const appTheme = { COLORS, SIZES };

export default appTheme;