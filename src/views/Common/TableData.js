import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class TableData extends Component {
    render() {
        return (
            <Table hover bordered striped responsive size="sm">
                <thead>
                    <tr>
                        <th>订单号码</th>
                        <th>充值金额</th>
                        <th>充值状态</th>
                        <th>充值时间</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map(function(user) { 
                        return ( 
                            <tr key={user.login.uuid}> 
                                <td> 
                                <img src={user.picture.thumbnail} /> 
                                </td> 
                                <td>{user.name.first}</td> 
                                <td>{user.email}</td> 
                                <td>{user.cell}</td> 
                            </tr> 
                        ) 
                    })}
                </tbody>
            </Table>
        )
    }
}
