import { useState } from "react";

const FormValidation = () => {
  //Form validation using useState
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleValidation = () => {
    if (inputValue.trim() === "") {
      setError("Input cannot be empty");
    } else {
      setError("");
    }
  };

  //...........
  return (
    <div>
      {/* Form validation */}
      <h2>Form Validation Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleValidation}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FormValidation;
