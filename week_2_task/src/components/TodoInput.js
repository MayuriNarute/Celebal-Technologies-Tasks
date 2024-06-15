import React, { Component } from 'react'
import '../App.css'
export default class TodoInput extends Component {
  render() {
    const{item,handleChange,handleSubmit,editItem}=this.props;

    return (
      <>
      <div className='card card-body my-4'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text bg-primary text-white'>
                <i id="icon" className='fa fa-book '/>
            </div>
          </div>
          <input value={item} onChange={handleChange} type='text' className='form-control text-capitalize' placeholder='add todo item'/>

        </div>
        <button disabled={item?false:true} type='submit' className={editItem?"btn btn-block btn-success mt-3 text-uppercase": "btn btn-block btn-primary mt-3 text-uppercase"}
         >
        {editItem ? "edit item": "add item"}
        
          </button>
      </form>
      </div>
      </>
      )
  }
}
