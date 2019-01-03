import React, { Component } from 'react';
import Day from './Day';

class Calendar extends Component{

    render(){
        return (
            <div>
                <h1>hello</h1>
                <form action="" method={"get"}>
                    <input type="text" placeholder={"start"}/>
                    <input type="text" placeholder={"end"}/>
                    <input type={"submit"} value={"submit"}/>
                </form>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <Day/>
                            <Day/>
                            <Day/>
                            <Day/>
                            <Day/>
                            <Day/>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar;