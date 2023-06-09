import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id:i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
const dumi = [
  {
    id:1,
    text: '리액트 기초 알아보기',
    checked: true,
  },
  {
    id:2,
    text: '컴포넌트 스타일링 해보기',
    checked: true,
  },
  {
    id:3,
    text: '일정 관리 앱 만들어 보자',
    checked: false,
  },
];
const App = () => {
  
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback((text)=>{
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  },[])

  const onRemove = useCallback((id)=>{
    setTodos(todos => todos.filter(todo => todo.id !== id));
  },[]);

  const onToggle = useCallback(id =>{
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}: todo,));
  }, []);
  return(
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate></div>
  );
};


export default App;
