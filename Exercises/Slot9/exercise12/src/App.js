import React from 'react';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToggleText from './components/ToggleText';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';

function App() {
  return (
    <div className="App">
      <h2>Exercise 1: Counter</h2>
      <Counter />

      <h2>Exercise 2: Controlled Input</h2>
      <TextInput />

      <h2>Exercise 3: Toggle Visibility</h2>
      <ToggleText />

      <h2>Exercise 4: Todo List</h2>
      <TodoList />

      <h2>Exercise 5: Color Switcher</h2>
      <ColorSwitcher />

      <h2>Exercise 6: Search Filter</h2>
      <SearchFilter />

      <h2>Exercise 7: Drag and Drop List</h2>
      <DragDropList />
    </div>
  );
}

export default App;