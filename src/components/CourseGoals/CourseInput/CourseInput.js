import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  background: ${props => (props.invalid ? '#ffd7d7':'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* A ESTO <FormControl className ={!isValid && 'invalid'}> LO REMPLAZO COMO SIGUE, VER QUE SAQUE DEL CSS */}

      <FormControl invalid={!isValid}>
        {/* ESTOY REEMPLAZANDO ESTE div POR EL FORMCONTROL */}
        {/* <div className={`form-control ${!isValid ? 'invalid': ''}`}> */}
        {/* <div className="form-control"> */}
          {/* ESTO LO BORRO PORQUE LO HAGO EN CSS PERO QUEDA DE EJEMPLO */}
          {/* <label style ={{color: !isValid ?'red': 'black' }}>Course Goal</label> */}
          {/* <input 
                style ={{borderColor: !isValid ?'red': 'black', 
                background: !isValid ?'salmon': 'transparent' }} 
                type="text" onChange={goalInputChangeHandler} /> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>  
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
