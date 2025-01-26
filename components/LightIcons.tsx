// components/LightIcons.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const DeleteIcon = ({ width = 30, height = 30, color = '#3C6E71' }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.333"
      d="M8.167 6.417 2.333 14l5.834 7.583h17.5V6.417zM12.25 11.083l5.833 5.834M18.083 11.083l-5.833 5.834"
    />
  </Svg>
);

export const HistoryIcon = ({ width = 30, height = 30, color = '#3C6E71' }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.394 3.924v4.243h4.242"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.333 14c0 6.443 5.224 11.667 11.667 11.667S25.667 20.443 25.667 14 20.443 2.333 14 2.333A11.66 11.66 0 0 0 3.895 8.166"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14.003 7v7.005l4.945 4.946"
    />
  </Svg>
);

export const LightOnIcon = ({ width = 30, height = 30, color = '#3C6E71' }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      fill={color}
    />
    <Path
      d="M12 4V2M12 22V20M4 12H2M22 12H20M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93M19.07 4.93L17.66 6.34"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const LightOffIcon = ({ width = 30, height = 30, color = '#3C6E71' }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M12 4V2M12 22V20M4 12H2M22 12H20M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93M19.07 4.93L17.66 6.34"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);