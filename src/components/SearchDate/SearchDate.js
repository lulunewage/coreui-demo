import React from 'react'; 
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import s from './Style.module.scss';

class SearchDate extends React.Component { 

    // super()是呼叫父層的建構式來綁定 
    // this.state可以設置元件本身各別的變數 
    // state是元件自身的變數，props是上面傳下來的變數， 
    // 只要state和props的數值有改變,render都會重新跑一次 
    // 監聽事件必須用駝峰式命名
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
    
    handleSubmit = e => { 
        e.preventDefault(); 
        this.props.callApi(); 
    } 
    
    // return回一個標籤
    // jsx中的js會用{}包起來
    // class會變成className,input或label的for會變成htmlFor={}
    //select設定唯一值可以用selectedValue={}
    // 單標籤可以用/>直接結尾 
    render() { 
        
        return ( 
            <form onSubmit={this.handleSubmit} className={s.SearchStyle}>
                <DatePicker 
                selected={this.state.startDate} 
                onChange={this.handleChange.bind(this, 'startDate')}
                className="form-control" 
                />- 
                <DatePicker 
                selected={this.state.endDate} 
                onChange={this.handleChange.bind(this, 'endDate')}
                className="form-control"  
                />
            <div className="mb-3 mb-xl-0 col-sm-4 col-md-1 col-sm">
                <button className="btn btn-primary btn-block">search</button>
            </div>
            </form> 
            
            ) 
        } 
    } 
    export default SearchDate;