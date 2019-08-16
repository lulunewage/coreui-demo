import React, { Component } from 'react'; 
import TableData from '../../components/TableData'; 
import { SearchDate } from '../../components/SearchDate'; 
import PageFooter from '../../components/PageFooter'; 
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'; 

const todosPerPage = 10;
export default class Recharge extends Component { 
  constructor(){ 
    super(); 
    this.state={ 
      list:[],
      currentPage: 1,
    } 
  }

  callApi = () => {
    const {
      currentPage,
    } = this.state;
    // 上方24-27行ES6的寫法等同於下方29-30行
    // 建立一個變數丟給currentPage
    // const currentPage = this.state.currentPage;
    // const todosPerPage = this.state.todosPerPage;
  

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
  handleChangePage = currentPage =>{
    this.setState({
      currentPage:currentPage
    })
  }
  
  render() { 
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
      
      <PageFooter
      callApi={this.callApi}
      currentPage={this.state.currentPage}
      todosPerPage={this.state.todosPerPage}
      onChangePage={this.handleChangePage}
      />
      
        </CardBody> 
        </Card> 
        </Col> 
        </Row> 
        </div> 
        ) 
      } 
    }