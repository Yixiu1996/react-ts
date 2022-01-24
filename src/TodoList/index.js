import React from "react";
import { useState, useEffect } from "react";

function TodoList() {
  const [item, setItem] = useState('')
  const [list, setList] = useState(['上午划水', '下午摸鱼'])
  useEffect(() => {
    console.log('item is changing');
  })
  useEffect(() => {
    console.log('list have changed');
  }, [list])
  return <div>
    <div className="handle-box">
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => {
        list.push(item)
        setList(list)
        setItem('')
      }}>Click to add</button>
    </div>
    <div className="list-box">
      {
        list.map((item, index) => {
          return <div key={index}>
            <span>{item}</span>
            <span onClick={() => {
              const arr = list.filter((e) => e !== item)
              setList(arr)
            }}>Delete item</span>
          </div>
        })
      }
    </div>
  </div>
}
export default TodoList;