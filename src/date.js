import React,{Component} from "react";
import $ from 'jquery';
import {datePicker} from './date_module';

export default class DateTable extends Component{
  render(){
    return (
      <div className="date" ondefault={this.default1.call(this)}>
      <div className="show header">
      <i className="arrow left pre caret-left"></i>
      <p className="cur"><span>十</span>月 <b>2017</b></p>
      <i className="arrow right next caret-right"></i>
      </div>
      <table className="panel">
      <tbody>
      <tr>
      <th>一</th>
      <th>二</th>
      <th>三</th>
      <th>四</th>
      <th>五</th>
      <th>六</th>
      <th>日</th>
      </tr>
      <tr>
      <td><span>1</span></td>
      <td><span>2</span></td>
      <td><span>3</span></td>
      <td><span>4</span></td>
      <td><span>5</span></td>
      <td><span>6</span></td>
      <td><span>7</span></td>
      </tr>
      <tr>
      <td><span className="current">11</span></td>
      <td><span className="data">12</span></td>
      <td><span>13</span></td>
      <td><span>14</span></td>
      <td><span>15</span></td>
      <td><span>16</span></td>
      <td><span>17</span></td>
      </tr>
      <tr>
      <td><span>1</span></td>
      <td><span>2</span></td>
      <td><span>3</span></td>
      <td><span>4</span></td>
      <td><span>5</span></td>
      <td><span>6</span></td>
      <td><span>7</span></td>
      </tr>
      <tr>
      <td><span>1</span></td>
      <td><span>2</span></td>
      <td><span>3</span></td>
      <td><span>4</span></td>
      <td><span>5</span></td>
      <td><span>6</span></td>
      <td><span>7</span></td>
      </tr>
      </tbody>
      </table>
      </div>
    )
    // $('.date').datePicker();
  }
  default1(){
    // console.log(datePicker($('.date')));
  }
}
