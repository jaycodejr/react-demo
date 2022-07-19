import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addUser, addUserFailure } from '../../redux/user/userActions';

const AddUserComponent = () => {
  const [name,setName] = useState('')
  const [position,setPosition] = useState('')

  const user = useSelector(state => state.users);
  const dispatch = useDispatch()

  function handleAddUser(){
    const newUser = {
      name:"Makame Juma makame",
      position:"Senior Software Developer"
    }
    dispatch(addUser(newUser));
  }

  function handleOnFormSubmit(e){
    e.preventDefault()      
    const newUser = {name,position}
    if(!newUser.name || !newUser.position){
      dispatch(addUserFailure("Please complete all fields!"))
      return;
    }
    dispatch(addUser(newUser));
    setName('')
    setPosition('')
  }

  function handleOnChangeEvent(e){
    e.preventDefault()
    if(e.target.name === 'name') setName(e.target.value)
    if(e.target.name === 'position') setPosition(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleOnFormSubmit}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-group'>
              <label htmlFor='name'>Enter name</label>
              <input type='text' onChange={handleOnChangeEvent} name='name' value={name} className='form-control' maxLength='40'></input>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
            <label htmlFor='position'>Enter position</label>
              <input type='text' onChange={handleOnChangeEvent} value={position} name='position' className='form-control' maxLength='40'></input>
            </div>
          </div>
        </div>
          <button className='btn btn-sm btn-primary'>New User</button>

          <div style={{marginTop:'10px'}} className='row'>
            <div className='col-md-12'>
              {
               user.hasError
                &&  
               <div className='alert alert-danger' role="alert">
                {user.hasError}
              </div>
              }
              
              {/* <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div> */}
              {
                user.isLoading && 
                <div className="alert alert-dark" role="alert">
                Please waiting ...
              </div>
              }
              
            </div>
          </div>

      </form>
    </div>
  )
}

export default AddUserComponent