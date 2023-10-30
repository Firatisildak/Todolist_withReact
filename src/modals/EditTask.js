import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName]=useState('');
    const [description, setDescription]=useState('');

    const handleChange=(e)=>{//burdaki kodlar ile modal üzerine yazı yazmamızı sağlıyor. name isimlinin value değerini değitiriyor.
        const {name, value}=e.target

        if(name==='taskName'){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }
    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e) =>{
        e.preventDefault();
        let templeObj={}
        templeObj['Name']=taskName
        templeObj['Description']=description
        updateTask(templeObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input type='text' className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;