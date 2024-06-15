
import uuid from 'react-uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import  React,{ Component } from 'react';
import './App.css';
class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false,

  };
  handleChange=(e)=>{
    this.setState({
      item: e.target.value
    })
      console.log('handle change')    
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems=[...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    },
    
    );
    
  };
  ClearList=()=>{ 
    this.setState({
      items:[]
    });  
  }
  handleEdit= id =>{
    const filteredItems=this.state.items.filter(item=>item.id !==id);
    const selectedItem=this.state.items.find(item=>item.id === id);
    console.log(selectedItem);
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true

    }); 

  };
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id !==id);
    this.setState({
      items:filteredItems
    });    
  };
  handleToggleComplete = (id) => {
    const updatedItems = this.state.items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      items: updatedItems,
    });
  };
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
  };

  getFilteredAndSortedItems = () => {
    let filteredItems = this.state.items;
    if (this.state.filter === 'completed') {
      filteredItems = filteredItems.filter((item) => item.completed);
    } else if (this.state.filter === 'incomplete') {
      filteredItems = filteredItems.filter((item) => !item.completed);
    }

    if (this.state.sort === 'asc') {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.state.sort === 'desc') {
      filteredItems.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredItems;
  };
  render(){
    const filteredAndSortedItems = this.getFilteredAndSortedItems();

    console.log(this.state);
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Todo-App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" id="searchTxt" aria-label="Search"/>
                </form>
            </div>
        </div>
    </nav>
    <div className='container'>
       <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
              <h3 className='text-capitalize text-center'> 
              
              Todo App using React
              
              <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}
              />
              <div className="row my-2">
              <div className="col">
                <select className="form-control" value={this.state.filter} onChange={this.handleFilterChange}>
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">Incomplete</option>
                </select>
              </div>
              <div className="col">
                <select className="form-control" value={this.state.sort} onChange={this.handleSortChange}>
                  <option value="none">No Sort</option>
                  <option value="asc">Sort Ascending</option>
                  <option value="desc">Sort Descending</option>
                </select>
              </div>
            </div>
              <TodoList
              items={filteredAndSortedItems}
              ClearList={this.ClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleToggleComplete={this.handleToggleComplete}
              />
              </h3>
          </div>  
        </div>
      
    </div>
    <footer className="text-center text-lg-start text-white mt-10">
      <section className="d-flex justify-content-between p-4">
            <div className="me-5">
              <span>Get connected with me on social networks:</span>
            </div>
            <div>
                  
              
                <a href="https://mayuriweb.netlify.app/" className="text-white me-4">
                  <i className="fa fa-google  "></i>
                </a>
                <a href="https://www.youtube.com/channel/UCqzo9230kipqRye4DfdabZg" className="text-white me-4">
                  <i className="fa fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/mayuri-narute-556995216/" className="text-white me-4">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/MayuriNarute" className="text-white me-4">
                  <i className="fa fa-github"></i>
                </a>
            </div>
      </section>
    </footer>

    </>
  );
  }
}

export default App;

