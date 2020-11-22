import { Component } from "react";
import React from "react";
import Antriansatu from "./Antriansatu";
import Antriandua from "./Antriandua";

class Parent extends Component {
    state = {
        elemen1: false,
        elemen2: false
    }
    componentDidMount() {
        alert(`Mount triggered!`);
    }



    ubahelemen1 = () => {
        this.setState((state) => {
            return { elemen1: !this.state.elemen1 }
        })
    }
    ubahelemen2 = () => {
        this.setState((state) => {
            return { elemen2: !this.state.elemen2 }
        })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('OOKEEYYYY');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`antrian berhasil di update!`);
    }
    render() {
        return (
            <div>
                {this.state.elemen1 ? <Antriansatu /> : ''}
                <button
                    onClick={this.ubahelemen1}>{this.state.elemen1 ? 'Terima kasih' :
                        'Ayo'} Antrian Pertama!</button>
                <br />
                <br />
                {this.state.elemen2 ? <Antriandua /> : ''}
                <button
                    onClick={this.ubahelemen2}>{this.state.elemen2 ? 'Terima kasih' :
                        'Ayo'} Antrian Kedua!</button>
            </div>
        );
    }
}
export default Parent;
