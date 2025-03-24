import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

// HTML <span> 태그의 기본 속성 타입을 확장
type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type IconProps = ReactSpanProps & {
  name: string;
};

// prettier-ignore
export const Icon: FC<IconProps> = ({ name, className: _className, ...props }) => {
  const className = ['material-icons', _className].join(' ');
  console.log("className:", className);  // 추가
  return <span {...props} className={className}>{name}</span>;
};