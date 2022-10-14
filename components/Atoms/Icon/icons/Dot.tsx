import * as React from "react";
import { SVGProps } from "react";

const Dot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="3"
    height="3"
    viewBox="0 0 3 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="1.5" cy="1.5" r="1.5" fill="#63748A" />
  </svg>
);
const dot = Dot;
export { dot };
