import { useRef } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const mealInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const amountOfMeal = +mealInput.current.value;
    if (amountOfMeal <= 0 || amountOfMeal > 5) {
      return;
    }
    props.onAdd(amountOfMeal);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={mealInput}
        label="Amount"
        meal={{
          id: `Amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
