import React, { Component } from 'react'; 
import TableData from '../Common/TableData'; 
import SearchDate from '../Common/SearchDate'; 
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'; 

let prev = 0; 
let next = 0; 
let last = 0; 
let first = 0; 
export default class Recharge extends Component { 
  constructor(){ 
    super(); 
    this.state={ 
      list:[], 
      currentPage: 1, 
      todosPerPage: 10, 
    } 
    this.handleClick = this.handleClick.bind(this); 
    this.handleLastClick = this.handleLastClick.bind(this); 
    this.handleFirstClick = this.handleFirstClick.bind(this); 
  }

  callApi = () =>{ 
    const currentPage = this.state.page; 
    const todosPerPage = this.state.size; 
    const indexOfLastTodo = currentPage * todosPerPage; 
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage; 
    // const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo); 
    prev = currentPage > 0 ? (currentPage -1) :0; 
    // last = Math.ceil(list.length/todosPerPage); 
    next = (last === currentPage) ?currentPage: currentPage +1; 

    fetch(`https://randomuser.me/api/?page=${currentPage}}&results=${todosPerPage}`) 
    .then(res =>{ 
      return res.json() 
    }) 
    .then(json =>{ 
      this.handleSetList(json.results); 
    }) 
  } 
  handleSetList = newList =>{ 
    this.setState({ 
      list: newList 
    }) 
  } 
  
  handleClick(event) { 
    event.preventDefault(); 
    this.setState({ 
      currentPage: Number(event.target.id)
    });
    this.callApi();
  } 
  
  handleLastClick(event) { 
    event.preventDefault(); 
    this.setState({ 
      currentPage:last 
    });
    this.callApi();
  } 
  handleFirstClick(event) { 
    event.preventDefault(); 
    this.setState({ 
      currentPage:1 
    }); 
    this.callApi();
  } 
  
  render() { 
    let { todos, currentPage, todosPerPage } = this.state; 
    
    // Logic for displaying current todos 
    // let indexOfLastTodo = currentPage * todosPerPage; 
    // let indexOfFirstTodo = indexOfLastTodo - todosPerPage; 
    // let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo); 
    // prev = currentPage > 0 ? (currentPage -1) :0; 
    // last = Math.ceil(todos.length/todosPerPage); 
    // next = (last === currentPage) ?currentPage: currentPage +1; 
    
    // Logic for displaying page numbers 
    let pageNumbers = []; 
    for (let i = 1; i <=last; i++) { 
      pageNumbers.push(i); 
    } 
    return ( 
      <div className="animated fadeIn"> 
      <Row> 
      <Col> 
      <Card> 
      <CardHeader> 
      <i className="fa fa-align-justify"></i> 充值记录 
      </CardHeader> 
      <CardBody> 
      <SearchDate 
      callApi={this.callApi} 
      onSetList={this.handleSetList} /> 
      
      <TableData list={this.state.list} /> 
      {/* <ul> 
      { 
        currentTodos.map((todo,index) =>{ 
          return <li key={index}>{todo}</li>; 
        }) 
      } 
      </ul> */}
      <ul id="page-numbers"> 
      <nav> 
      <Pagination> 
        <PaginationItem> 
        { prev === 0 ? <PaginationLink disabled>First</PaginationLink> : 
          <PaginationLink 
            onClick={this.handleFirstClick} 
            id={prev} 
            href={prev}>First
          </PaginationLink> 
        } 
        </PaginationItem> 
        <PaginationItem> 
        { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> : 
            <PaginationLink 
              onClick={this.handleClick} 
              id={prev} href={prev}>Prev
            </PaginationLink> 
        } 
        </PaginationItem> 
        { 
          pageNumbers.map((number,i) => 
          <Pagination key= {i}> 
            <PaginationItem 
            active = {pageNumbers[currentPage-1] === (number) ? true : false} > 
              <PaginationLink 
                onClick={this.handleClick} 
                href={number} key={number} id={number}> 
                {number} 
              </PaginationLink> 
            </PaginationItem> 
          </Pagination> 
          )} 
          
          <PaginationItem> 
          { 
            currentPage === last ? <PaginationLink disabled>Next</PaginationLink> : 
              <PaginationLink 
                onClick={this.handleClick} 
                id={pageNumbers[currentPage]} 
                href={pageNumbers[currentPage]}>Next
              </PaginationLink> 
          } 
          </PaginationItem> 
          
          <PaginationItem> 
          { 
            currentPage === last ? <PaginationLink disabled>Last</PaginationLink> : 
              <PaginationLink 
                onClick={this.handleLastClick} 
                id={pageNumbers[currentPage]} 
                href={pageNumbers[currentPage]}>Last
              </PaginationLink> 
          } 
          </PaginationItem> 
        </Pagination> 
        </nav> 
        </ul> 
        </CardBody> 
        </Card> 
        </Col> 
        </Row> 
        </div> 
        ) 
      } 
    }