import React, { Component } from 'react'; 
import TableData from '../../components/TableData'; 
import { SearchDate } from '../../components/SearchDate'; 
import PageFooter from '../../components/PageFooter'; 
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'; 
//定義每頁的總筆數
const todosPerPage = 10;
export default class Recharge extends Component { 
  //建構式
  constructor(){
    //呼叫父層，並定義兩個state變數的初始值 
    super(); 
    this.state={ 
      list:[],
      currentPage: 1,
    } 
  }

//接子層傳上來的變數
  callApi = (page) => {
    //setState 的功能就是修改 state 變數
    this.setState({ currentPage: page })
    fetch(`https://randomuser.me/api/?page=${page}}&results=${todosPerPage}`) 
    .then(res => res.json())
    .then(json =>{ 
      //json.results是拿回來的資料,再塞給state.list
      this.setState({
        list: json.results
      }); 
    }) 
  } 
//render函式，會return回標籤
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
      todosPerPage={todosPerPage}
      currentPage={this.state.currentPage}
      />
      
        </CardBody> 
        </Card> 
        </Col> 
        </Row> 
        </div> 
        ) 
      } 
    }