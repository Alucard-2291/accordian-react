import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [showInfo, setshowInfo] = useState(false);

  const expandHandler = () => {
    setshowInfo(!showInfo);
  }

  return (
    <article className='question'>
      <h4>
        {title}
        <button onClick={expandHandler} classNamebtn>
          {!showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
