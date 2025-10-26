interface LogoArrowProps extends React.SVGProps<SVGSVGElement> {}

const LogoArrow = ({
  className,
  stroke = '#5267DF',
  ...props
}: LogoArrowProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 18 12'
      className={className}
      {...props}
    >
      <path fill='none' stroke={stroke} strokeWidth='3' d='M1 1l8 8 8-8' />
    </svg>
  );
};

export default LogoArrow;
