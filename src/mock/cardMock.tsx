import { TCard } from "../components/Card";
import FormValidation from "./FormValidation";
import Memoization from "./Memoization";

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
  {
    header: "What is Reconciliation in React?",
    desc: "Reconciliation is the process React uses to compare the current Virtual DOM with the previous one to determine the most efficient way to update the UI. React uses a diffing algorithm to identify the minimal set of changes needed to update the real DOM, ensuring optimal performance. No explicit example as reconciliation happens behind the scenes in React when rendering components.",
  },
  {
    header: "What is Memoization and how is it used in React?",
    desc: `Memoization is an optimization technique used to cache the result of expensive function calls based on their inputs, so the function doesn’t have to recompute the result if the inputs haven’t changed. In React, React.memo can be used to memoize functional components, and useMemo and useCallback hooks can memoize values and functions respectively. \n Used useMemo for caching a calculated value and useCallback for a memoized function.`,
    code: `// Memoized Component example
const MemoizedComponent = React.memo(function({ value }: { value: string }) {
  console.log("Rendering MemoizedComponent");
  return <div>{value}</div>;
});
// useMemo and useCallback examples
  const expensiveCalculation = useMemo(() => {
    return inputValue.length * 1000; // Dummy expensive calculation
  }, [inputValue]);

  const memoizedCallback = useCallback(() => {
    console.log("Callback with input:", inputValue);
  }, [inputValue]);

  //...........
  
  {/* Memoization with useMemo and useCallback */}
      <div>
        <h2>Memoization Example</h2>
        <p>Expensive Calculation Result: {expensiveCalculation}</p>
        <button onClick={memoizedCallback}>Trigger Callback</button>
      </div>

      {/* Memoized Component */}
      <div>
        <h2>Memoized Component Example</h2>
        <MemoizedComponent value={inputValue} />
      </div>`,
    component: <Memoization />,
  },
];
