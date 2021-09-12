import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {


    getlistOfEmotions= (emotion) => {
        let color = "white";
        let index=0;
        switch(emotion[0]) {
            case "sadness": color = "GREEN";break;
            case "joy": color = "BLUE";break;
            case "fear": color = "MAGENTA";break;
            case "disgust": color = "BLACK";break;
            case "anger": color = "RED";break;
            default: color = "black";
        }


     return  ( <tr  key={index+1} style={{color:color,fontSize:20}} >
            <td>{emotion[0]}</td>
            <td>{emotion[1]}</td>
        </tr>);

    }






    render() {
      //Returns the emotions as an HTML table
        var index=0;

        let listOfEmotions = this.props.emotions;
        let listOfEmotionsArray= Object.entries(listOfEmotions);
        console.log(listOfEmotionsArray.length);
        this.emotionsList= listOfEmotionsArray.map((emotion) =>this.getlistOfEmotions(emotion));

      return (

        <div>
          <table className="table table-bordered">
            <tbody>
            {this.emotionsList}
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;