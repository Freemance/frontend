import * as React from 'react';

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#000c83"
      {...props}
    >
      <path d="M2.117 12l7.527 6.235L9 19l-9-7.521L9 4l.645.764L2.116 11H24v1H2.117z" />
    </svg>
  );
}

export default ArrowDown;
