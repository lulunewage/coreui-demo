import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'; 

let prev = 0; 
let next = 0; 
let last = 0; 
let first = 0; 
export default class PageFooter extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
    this.handleLastClick = this.handleLastClick.bind(this); 
    this.handleFirstClick = this.handleFirstClick.bind(this); 
  }
  handleClick(event) { 
    //console.log(event)可看到target
    event.preventDefault(); 
    this.props.callApi(event.target.id);
  } 
  
  handleLastClick(event) {
    event.preventDefault();
    this.props.callApi(last);
  }
  handleFirstClick(event) {
    event.preventDefault();
    this.props.callApi(1);
  }
//this.props.todosPerPage是接受父層的總筆數
  render() {
    last = Math.ceil(150/this.props.todosPerPage);
    let { currentPage } = this.props; 
    next = (last === currentPage) ?currentPage: currentPage +1; 
    prev = currentPage > 0 ? (currentPage -1) :0; 
    // Logic for displaying page numbers 
    let pageNumbers = []; 
    for (let i = 1; i <=last; i++) { 
      pageNumbers.push(i); 
    } 
    //監聽事件必須用駝峰式命名
    return (
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
              id={prev} 
              href={prev}>Prev
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
    )
  }
}
