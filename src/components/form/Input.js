const Input = ({ label = "input", type = "text" }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input className="input-box" type={type} />
    </div>
  );
};

export default Input;
