import "./App.css";
import CodeBlock from "./components/codeBlock";

function App() {
  const text1 = `const App: React.FC = () => {
  //Form validation using useState
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleValidation = () => {
    if (inputValue.trim() === '') {
      setError('Input cannot be empty');
    } else {
      setError('');
    }
  };`;

  return (
    <>
      <div className="card">
        <h1>How will you perform form validation in React?</h1>
        <p>
          In React, form validation can be performed using controlled components
          and validation functions. You can manually validate input values on
          events like onBlur or onSubmit. Libraries like Formik or React Hook
          Form can simplify the process by providing more structured validation
          approaches, including schema validation using Yup.
        </p>
        <CodeBlock text={text1} />
      </div>
    </>
  );
}

export default App;
