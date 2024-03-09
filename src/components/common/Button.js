const Button = ({ btnHandler, label }) => {
  return <button className="btn" onClick={btnHandler}>{label}</button>;
};

export default Button;
