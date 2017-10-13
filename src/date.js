import React,{Component} from "react";

export default class DateTable extends Component{
  render(){
    return (
      <div className="date">
      <div className="show">
      <i className="arrow left"></i>
      <p><span>十</span>月 <b>2017</b></p>
      <i className="arrow right"></i>
      </div>
      <table>
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
  }
}