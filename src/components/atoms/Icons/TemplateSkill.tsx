import * as React from 'react';

interface IProfileTimeline {
  icono: Array<string>;
  filled: string;
}
function TemplateSkill({ icono, filled }: IProfileTimeline) {
  return (
    <svg width={24} height={24} fill={filled}>
      {icono.map((pathd, i) => (
        <path d={pathd} key={i} />
      ))}
    </svg>
  );
}

export default TemplateSkill;
