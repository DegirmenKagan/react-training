import { TCard } from "../components/Card";
import FormValidation from "./FormValidation";

export const CardArr: TCard[] = [
  {
    header: "How will you perform form validation in React?",
    desc: `In React, form validation can be performed using controlled components
      and validation functions. You can manually validate input values on
      events like onBlur or onSubmit. Libraries like Formik or React Hook Form
      can simplify the process by providing more structured validation
      approaches, including schema validation using Yup.`,
    code: `//Form validation using useState
const [inputValue, setInputValue] = useState('');
const [error, setError] = useState('');

const handleValidation = () => {
  if (inputValue.trim() === '') {
    setError('Input cannot be empty');
  } else {
    setError('');
  }
};

//...........

{/* Form validation */}
  <div>
    <h2>Form Validation Example</h2>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleValidation}
    />
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>


`,
    component: <FormValidation />,
  },
];
