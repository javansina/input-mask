/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, validation, inputValue }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        value={inputValue}
        id="input"
        onChange={handleChange}
      />
      {!validation ? <h5>The city name is not valid !</h5> : null}
    </div>
  );
};

export default Input;
