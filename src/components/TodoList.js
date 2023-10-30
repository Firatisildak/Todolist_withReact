import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList]=useState([])

    useEffect(()=>{
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj =JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deleteTask=(index)=>{
        let tempList=taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()//bu sildiğimiz kutunun anında sayfadan gitmes,ni sağlıyor yani saufayı yenilemeye gerek kalmıyor.
    }

    const updateListArray=(obj, index)=>{
        let tempList=taskList
        tempList[index]=obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle=()=>{//bu fonksiyon modal durumunu tersine çevirir açık ise kapatır kapalı ise açar.
        setModal(!modal);
    }

    const saveTask = (taskObj) => {//burdaki fonksiyon ile yazdığım yazıları setTaskList hooku ile değiştiriyorum ve yazdığım yazı yeni taskList değeri olur.
        let tempList=taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false);
        setTaskList(taskList);
    }

    return (
        <>
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={()=>setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
                {taskList && taskList.map((obj, index)=><Card taskObj= {obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}{/*Buradaki kodlar taskList değerinin içindeki her değer için bir li yapısı oluşturur. Bunu sağlayan da map fonksiyonudur.*/}
            </div>
            <CreateTask toggle= {toggle} modal={modal} save={saveTask}/>
        </>
    );
};

export default TodoList;