import * as React from "react";
import { SVGProps } from "react";

const InboxColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
 <path d="M14.8327 0.333984H3.16602C2.50297 0.333984 1.86709 0.597377 1.39825 1.06622C0.929408 1.53506 0.666016 2.17094 0.666016 2.83398V11.1673C0.666016 11.8304 0.929408 12.4662 1.39825 12.9351C1.86709 13.4039 2.50297 13.6673 3.16602 13.6673H14.8327C15.4957 13.6673 16.1316 13.4039 16.6005 12.9351C17.0693 12.4662 17.3327 11.8304 17.3327 11.1673V2.83398C17.3327 2.17094 17.0693 1.53506 16.6005 1.06622C16.1316 0.597377 15.4957 0.333984 14.8327 0.333984V0.333984ZM14.491 2.00065L9.59102 6.90065C9.51355 6.97876 9.42138 7.04075 9.31983 7.08306C9.21828 7.12537 9.10936 7.14715 8.99935 7.14715C8.88934 7.14715 8.78042 7.12537 8.67887 7.08306C8.57732 7.04075 8.48515 6.97876 8.40768 6.90065L3.50768 2.00065H14.491ZM15.666 11.1673C15.666 11.3883 15.5782 11.6003 15.4219 11.7566C15.2657 11.9129 15.0537 12.0007 14.8327 12.0007H3.16602C2.945 12.0007 2.73304 11.9129 2.57676 11.7566C2.42048 11.6003 2.33268 11.3883 2.33268 11.1673V3.17565L7.23268 8.07565C7.70143 8.54382 8.33685 8.80678 8.99935 8.80678C9.66185 8.80678 10.2973 8.54382 10.766 8.07565L15.666 3.17565V11.1673Z" fill="#63748A"/>
</svg>
);

const inboxcolor = InboxColor;
export {inboxcolor};
