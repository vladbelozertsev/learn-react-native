import React, { useState } from 'react';

const App = () => {
  const [arr, setArr] = useState([
    { id: 1, text: 'some text 1' },
    { id: 2, text: 'some text 2' },
    { id: 3, text: 'some text 3' },
    { id: 4, text: 'some text 4' },
    { id: 5, text: 'some text 5' },
  ]);

  const handleClick = () => {
    const first = arr.find((item) => item.id === 1);
    first.text = 'NEW text for 1';
    console.log(arr);
    // setArr(arr); // так НЕ работает, т.е. ререндер НЕ происходит!
    setArr([...arr]);
  };

  return (
    <div>
      {arr[0].text}
      <button onClick={handleClick}>Редактировать</button>
    </div>
  );
};

export default App;
