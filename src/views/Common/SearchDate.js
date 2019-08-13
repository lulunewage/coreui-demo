import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import s from './SearchDateStyle.scss';
import { fromUnixTime } from 'date-fns/esm';

class SearchDate extends React.Component {
    // super()是呼叫父層的建構式來綁定
    // this.state可以設置元件本身各別的變數
    // state是元件區塊內的變數，props是上面傳遞下來的變數，
    // 只要state和props的數值有改變,render都會重新跑一次

    constructor(props){
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }

    }
    handleChange=(key,date)=>{
        this.setState({
            [key]: date
        });
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.callApi();
    }
    // return回一個標籤，React中的js會用{}包起來，class會變成className，單標籤可以用/>直接結尾
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.Searchstyle}>
                搜寻日期
                <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange.bind(this, 'startDate')}
                />-
                <DatePicker
                selected={this.state.endDate}
                onChange={this.handleChange.bind(this, 'endDate')}
                />
            <button>搜寻</button>
            </form>
        )
    }
}
export default SearchDate;
