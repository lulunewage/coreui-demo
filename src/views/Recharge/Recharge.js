import React, { Component } from 'react';
import TableData from '../Common/TableData';
import SearchDate from '../Common/SearchDate';
import SearchButton from '../Common/SearchButton';
import s from '../Common/SearchDateStyle.scss';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';


export default class Recharge extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
  }
    handleSubmit = e =>{
        e.preventDefault();
        // this.props.callApi();
    }
    callApi = () =>{
        fetch(`https://randomuser.me/api/?page={1}}&results={10}`)
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
                <form onSubmit={this.handleSubmit} className={s.style}>
                    <SearchDate />
                    <SearchButton />
                </form>
                
                <TableData list={this.state.list} />
                <nav>
                    <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                </nav>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </div>

        )
    }
}
