import { Component } from "react";
import React from "react";
import Praktikan from "./Praktikan";
import HitungAntrian from "./HitungAntrian";
import Button from "./Button"

class Parent extends Component {
    state = {
        elemen1: false,
        elemen2: false
    }
    componentDidMount() {
        alert(`Selamat Datang!`);
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
    render() {
        return (
            <div>
                {this.state.elemen1 ? <Praktikan /> : ''}
                <Button
                    onClick={this.ubahelemen1}>{this.state.elemen1 ? 'Hilangkan' :
                        'Munculkan'} Nama Kelompok</Button>
                <br />
                <br />
                {this.state.elemen2 ? <HitungAntrian /> : ''}
                <Button
                    onClick={this.ubahelemen2}>{this.state.elemen2 ? 'Hilangkan' :
                        'Munculkan'} Perhitungan Antrian</Button>
            </div>
        );
    }
}
export default Parent;
