const Button = ({
  children = null,
  onClick = () => null,
  className = null,
  ...allyProps
}) => (
  <button className={className} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

export default Button;
