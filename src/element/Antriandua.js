import React, { Component } from "react";

class Antriandua extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount Triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }

    kurangAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert(`Antrian kedua segera diselesaikan.`)
    }
    render() {
        return (
            <div>
                <h3>Afishal Antrian kedua</h3>
                <button
                    onClick={this.tambahAngka}>Bertambah</button>
                <button
                    onClick={this.kurangAngka}>Berkurang</button>
                <br />
                <span>{this.state.angka}</span>
            </div>
        )
    }
}
export default Antriandua;