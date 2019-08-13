import React, { Component } from 'react';
import TableData from '../Common/TableData';
import SearchDate from '../Common/SearchDate';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import PageFooter from '../Common/PageFooter'


export default class Recharge extends Component {
  constructor(){
    super();
    this.state={
      list: [],
      page: 1,
      pageSize: 10,
    }
  }
  handleSetList = newList =>{
    this.setState({
      list: newList
    })
  }
  handelPageChange = page =>{
    // 可利用快速語法sst
    this.setState({
      page: page,
    })
  }
  
  handelChangePageSize = size =>{
    this.setState({
      pageSize: size 
    })
  }
  
  callApi = () =>{
    const page = this.state.page;
    const pageSize = this.state.pageSize;
      fetch(`https://randomuser.me/api/?page=${page}}&results=${pageSize}`)
      .then(res =>{
          return res.json()
      })
      .then(json =>{
        this.handleSetList(json.results);
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
                      onSetList={this.handleSetList}
                      page={this.state.page}
                      pageSize={this.state.pageSize}
                      />
                  
                  <TableData list={this.state.list} />
                  <nav>
                    <PageFooter
                    page={this.state.page}
                    pageSize={this.state.pageSize}
                    callApi={this.callApi}
                    onPageChange={this.handelPageChange}
                    onChangePageSize={this.handelChangePageSize}
                     />
                  </nav>
                  </CardBody>
              </Card>
            </Col>
        </Row>
        </div>

        )
    }
}
