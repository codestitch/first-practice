// TRAINING ONE: Basics of React

import { useEffect, useReducer, useRef, useState } from 'react';

// 1b. Destructuring array
// const menus = ["Batchoy", "Tapsilog", "Sisig"]
const [favorite, secondOption, thirdOption] = ["Batchoy", "Tapsilog", "Sisig"];


// 7a. Custom Hooks: Reusable method
// always starts w/ the prefix word use
// Choosing Form Libs: https://formik.org, https://react-hook-forms, https://usehooks.com
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  // you can return whatever you want
  return [
    { 
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue),
    () => alert(`Feedback: ${value}`)
  ]
}

// 1a. Destructuring object
function PracticeOne() {
  const restoName = 'Crazy Resto';
  // 2a. useState hooks
  const [firstOrder, setFirstOrder] = useState(favorite);
  
  // 3a. useEffect
  // things that aren't related to the component; typically use for consoles, animation, loading data etc
  // the first argument is the function that executes when effect is triggered
  // the 2nd argument is dependency array that tells when useEffect is trigered. An empty array means triggered once as soon as component is rendered. An array with value means that it will trigger whenever that value is updated.
  useEffect(() => {
    console.log(`The first order is ${firstOrder}`);
  }, [firstOrder]);

  // 4a. useReducer
  // Use instead of useState when there is underlying logic for state values
  const [confirmFirstOrder, setConfirmFirstOrder] = useReducer((checked) => !checked, false);

  // 5a. useRef (uncontrolled form elements)
  // The useRef Hook allows you to persist values between renders.
  // It can be used to store a mutable value that does not cause a re-render when updated.
  // It can be used to access a DOM element directly - get and update its value directly
  const customerName = useRef();
  const customerColor = useRef();

  const submitCustomerInformation = (e) => {
    e.preventDefault();
    const name = customerName.current.value;
    const color = customerColor.current.value;
    alert(`Customer: ${name} : ${color}`);
    customerName.current.value = '';
    customerColor.current.value = '';
  }

  // 6a. Test: Use useState to make controlled form elements
  // const [customerFeedback, setCustomerFeedback] = useState('');
  // const submitFeedback = (e) => {
  //   e.preventDefault();
  //   alert(`Feedback: ${customerFeedback}`);
  //   setCustomerFeedback('');
  // }

  // 7b. Implementing custom hooks
  const [feedbackProps, resetFeedback, notification] = useInput('');
  const submitFeedback = (e) => {
    e.preventDefault();
    notification();
    resetFeedback();
  }

  return (
    <div className="App">
      <header className="App-header">
        Welcome to {restoName}
      </header>

      <h2>Best Sellers</h2>
      <ul>
        {/* 2b. useState hooks usage */}
        <li onClick={() => setFirstOrder(favorite)}>{favorite}</li>
        <li onClick={() => setFirstOrder(secondOption)}>{secondOption}</li>
        <li onClick={() => setFirstOrder(thirdOption)}>{thirdOption}</li>
      </ul>

      <h2>First Order</h2>
        {/* 2c. useState hooks usage */}
      <p>Your first Order is <b>{firstOrder}</b></p>

      <h2>Click to Confirm Order</h2>
      <input type="checkbox" value={confirmFirstOrder} onChange={setConfirmFirstOrder}/>
      <label>{confirmFirstOrder ? `Confirmed Order` : `Pending Order`}</label>
      
      <h2>Customer Information</h2>
      <form onSubmit={submitCustomerInformation}>
        <input type="text" placeholder="enter your name" ref={customerName}/>
        <input type="color" ref={customerColor}/>
        <button>Submit</button>
      </form>

      <h2>Customer Feedback</h2>
      <form onSubmit={submitFeedback}>
        {/* 
        Using controlled form elements
          <input type="textarea" 
            value={customerFeedback} 
            onChange={(event) => setCustomerFeedback(event.target.value) }
            placeholder="Enter your feedback"
            />
        */}
        <input type="textarea" 
            {...feedbackProps}
            placeholder="Enter your feedback"
            />        

        <button>Submit</button>
      </form> 
    </div>
  );
}

export default PracticeOne;
