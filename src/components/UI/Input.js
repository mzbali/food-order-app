import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.meal.id}>{props.label}</label>
      <input {...props.meal} />
    </div>
  );
};

export default Input;
