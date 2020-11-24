import React, { Component } from 'react';
import './Mygoals.css';


class Mygoals extends Component {

    render() {
        return (
            <div>
                <div className="dailyGoals">
                    <p>Daily Goals</p>
                </div>
                <section className="mygoals">

                    <div>
                        <input type="text" className="goal" placeholder="Enter your goal here..." />

                        <button onClick={goals} >Add</button>

                    </div>

                </section>
            </div>

        )
    }

}

function goals() {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'checkbox';
    let label = document.createElement('label');
    label.append(input);
    label.append(document.querySelector('.goal').value)

    li.append(label);

    let ul = document.querySelector('.goalList');

    ul.append(li);

}

export default Mygoals