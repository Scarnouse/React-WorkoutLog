import React, { Component } from 'react';

class Define extends Component{
    render(){
        return(
            <div id="defineWorkouts">
                <h2>Define un entrenamiento</h2>
                <label htmlFor="defineName">Nombre
                    <input type="text" id="defineName"/>
                </label>
                <label htmlFor="defineType">Tipo
                    <input type="text" id="defineType"/>
                </label>
                <label htmlFor="defineDesc">Descripción
                    <textarea id="defineDesc"></textarea>
                </label>
                <button id="saveDefinition">Guardar</button>
            </div>
        );
    }
}

export default Define;