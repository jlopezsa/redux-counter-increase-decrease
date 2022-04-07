import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  setMyInterval,
  incrementValue,
  isCheckIncrement,
  decrementValue,
 } from '../../store/actions';

function Increment() {

  const dispatch = useDispatch();
  const verify = useSelector(state => state.incrementIsCheck);

  const onHandleChange = (e) => {
    const { value } = e.target; // podría se const value = e.target.value;
    dispatch(setMyInterval(value));
  }

  const onHandleClick = (e) => {
    const valueIncrement = e.target.value;
    if(verify){
      dispatch(incrementValue(valueIncrement))
    }else {
      dispatch(decrementValue(valueIncrement))
    }
  }

  const handleCheckIncrement = (e) => {
    const valueCheck = e.target.checked;
    dispatch(isCheckIncrement(valueCheck));
  }


  return (
    <div>
        <label htmlFor='interval'>
            <input type="number" onChange={onHandleChange}
            placeholder={verify ? 'Ingrese incremento':'Inrgese decremento'}
            />
            <input type="checkbox" name="incrementar" id="chk" onChange={handleCheckIncrement} />
            <br />
            <button type="button" onClick={onHandleClick}>
              {verify ? 'Incrementar':'Decrementar'}
            </button>
        </label>
    </div>
  )
}

export default Increment
