import * as React from 'react';

function Success(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      <circle cx={25} cy={25} r={25} fill="#25ae88" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M38 15L22 33l-10-8"
      />
    </svg>
  );
}

export default Success;
