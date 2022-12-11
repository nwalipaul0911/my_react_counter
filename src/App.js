import './App.css';
import { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component { 
  state = { 
    counters : [
      { id:1, value:0 },
      { id:2, value:0 },
      { id:3, value:0 },
      { id:4, value:0 } 
    ]
   } 
   handleIncrement = (counter) => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index].value++
    this.setState({ counters })
  }
  handleDecrement = (counter) => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index].value--
    this.setState({ counters })
  }
  handleReset=()=>{
    let counters = [...this.state.counters]
    counters.map(counter=>counter.value=0)
    this.setState({ counters })
  }
  handleDelete=(counter)=>{
    let counters = this.state.counters.filter(c=>c.id !==counter.id)
    this.setState({ counters })
  }
  createCounter=()=>{
    let counters = [...this.state.counters]
    const counter = counters[counters.length-1]
    let newCounter = {id:counter.id+1, value:0}
    counters.push(newCounter)
    this.setState({counters}) 
  }
  handleTotal=()=>{
    return this.state.counters.filter(counter=>counter.value>0).length
  }
  render() { 
    return (
      <>
        <Navbar total={this.handleTotal()} />
        <button className='btn btn-sm btn-success' onClick={this.createCounter}>Create</button>
        <Counters 
          counters={this.state.counters} 
          handleDecrement = {this.handleDecrement}
          handleIncrement = {this.handleIncrement}
          handleDelete = {this.handleDelete}
          handleReset = {this.handleReset}
        />
      </>
    );
  }
}
export default App;