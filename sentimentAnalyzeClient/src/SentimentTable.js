import React from 'react';
import './bootstrap.min.css';

class SentimentTable extends React.Component {

    render() {
  let index=0;
      return (
        <div>
          <table className="table table-bordered">
            <tbody>
            <tr  key={index+1} style={{color:this.props.color,fontSize:20}} >
                <td>{this.props.label}</td>
                <td>{this.props.score}</td>
            </tr>
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default SentimentTable;