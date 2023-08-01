import React, { ChangeEvent, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([
    'Buy groceries',
    'Clean the house',
    'Walk the dog',
  ]);
  const [inputValue, setInputValue] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleTodoInputOnClick = (): void => {
    if (inputValue === '') {
      return;
    }
    setTodos((prev) => {
      return [...prev, inputValue];
    });
    setInputValue('');
  };

  const handleTodoDeleteOnClick = (index: number): void => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  const handleTodoItemClick = (index: number): void => {
    setSelectedItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <React.Fragment>
      {todos.map((todo, index) => {
        return (
          <>
            <div
              onClick={() => handleTodoItemClick(index)}
              style={{
                cursor: 'pointer',
                fontWeight: selectedItemIndex === index ? '900' : 'normal',
              }}
              key={index + todo}
            >
              {todo}
            </div>
            <button onClick={() => handleTodoDeleteOnClick(index)}>
              Delete
            </button>
            <br />
          </>
        );
      })}
      {!todos[0] && (
        <>
          <div>Nothing to do? Really?</div>
          <label htmlFor="todoInput">Please Input Something Here!</label>
        </>
      )}
      {/* <label htmlFor="todoInput">Please Input Something Here!</label> */}
      <br></br>
      <input
        id="todoInput"
        type="text" // Set the input type to "text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
      />
      <button onClick={handleTodoInputOnClick}>Add</button>
    </React.Fragment>
  );
};

export default TodoList;
