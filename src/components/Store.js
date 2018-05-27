import React, { Component } from 'react';

class Option extends Component{
    render(){
        return(
            <option>{this.props.value}</option>
        )
    }
}

class StoreWorkout extends Component{
    render(){
        let _mockWorkouts = [
            {
                "name": "Murh",
                "type": "fortime",
                "description": "Run 1 Mile \n 100 pull-ups \n 200 push-ups \n 300 squats \n Run 1 Mile"
            },
            {
                "name": "Tabata Something Else",
                "type": "reps",
                "description": "4 x 20 seconds on 10 seconds off for 4 minutes \n pull-ups, push-ups, sit-ups, squats"
            }
        ]

        let opts = [];
        for (let i = 0; i < _mockWorkouts.length; i++) {
            opts.push(<Option value={_mockWorkouts[i].name} key={ i } />); 
        }

        return(
            <div id="logWorkout" className="tabView">
                <h2>Entrenamiento Guardado</h2>
                <label htmlFor="chooseWorkout">Entrenamiento:</label>
                <select name="" id="chooseWorkout">
                    { opts }
                </select>
                <label htmlFor="workoutResult">Resultado:</label>
                <input id="workoutResult" type="text" />
                <input id="workoutDate" type="date" />
                <label htmlFor="notes"></label>
                <textarea id="notes"></textarea>
                <button>Almacenar</button>
            </div>
        );
    }
}

export default StoreWorkout;
