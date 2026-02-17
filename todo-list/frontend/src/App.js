
import {useState,useEffect} from "react";
import axios from "axios";

export default function App(){
 const API="http://localhost:8080/api/todos";
 const [tasks,setTasks]=useState([]);
 const [title,setTitle]=useState("");
 const [desc,setDesc]=useState("");
 const [dark,setDark]=useState(false);

 const [editingId,setEditingId]=useState(null);
 const [editTitle,setEditTitle]=useState("");
 const [editDesc,setEditDesc]=useState("");

 const load=async()=>setTasks((await axios.get(API)).data);
 useEffect(()=>{load();},[]);
 useEffect(()=>{document.body.className=dark?"darkBody":""},[dark]);

 const add=async()=>{
  if(!title) return;
  await axios.post(API,{title,description:desc,completed:false});
  setTitle("");
  setDesc("");
  load();
 };

 const toggle=async t=>{
  await axios.put(`${API}/${t.id}`,{...t,completed:!t.completed});
  load();
 };

 const del=async id=>{
  await axios.delete(`${API}/${id}`);
  load();
 };

 const startEdit=t=>{
  setEditingId(t.id);
  setEditTitle(t.title);
  setEditDesc(t.description);
 };

 const saveEdit=async id=>{
  const original=tasks.find(t=>t.id===id);
  await axios.put(`${API}/${id}`,{
   id,
   title:editTitle,
   description:editDesc,
   completed:original.completed
  });
  setEditingId(null);
  load();
 };

 const cancelEdit=()=>setEditingId(null);

 const active=tasks.filter(t=>!t.completed);
 const completed=tasks.filter(t=>t.completed);

 const render=(list)=>(<ul>
  {list.map(t=>(
   


<li className="taskRow">

 <div className="left">
  <input
   type="checkbox"
   checked={t.completed}
   onChange={()=>toggle(t)}
  />
 </div>

 <div className={`center ${t.completed?"done":""}`}>
  <div className="time">
   {new Date(t.createdAt).toLocaleString()}
  </div>
  <div className="title">{t.title}</div>
  <div className="desc">{t.description}</div>
 </div>

 <div className="right">
  <button onClick={()=>startEdit(t)}>✏</button>
  <button onClick={()=>del(t.id)}>✕</button>
 </div>

</li>



  ))}
 </ul>);

 return(
 <div className={dark?"app dark":"app"}>
 <div className="card">

 <header>
  <h1>Todo List</h1>
  <button onClick={()=>setDark(!dark)}>
   {dark?"☀️":"🌙"}
  </button>
 </header>

 <div className="inputRow">
  <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title"/>
  <input value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description"/>
  <button onClick={add}>Add</button>
 </div>

 <h3>Active Tasks</h3>
 {active.length?render(active):<p className="empty">No active tasks</p>}

 <h3>Completed Tasks</h3>
 {completed.length?render(completed):<p className="empty">None completed</p>}

 </div>
 </div>
 );
}
