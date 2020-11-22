import React, { Component } from "react";

class Antriansatu extends Component {
    state = {
        nama: "Abbiyu Kirana Distira"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ChangeAntrian = () => {
        this.setState((state) => {
            if (state.nama === "Abbiyu Kirana Distira") {
                return { nama: "Muhammad Afishal Fakhri" }
            } else {
                return { nama: "Abbiyu Kirana Distira" }
            }
        })
    }
    componentWillUnmount() {
        alert(`Antrian Pertama segera diselesaikan, karena akan berganti ke antrian kedua.`)
    }
    render() {
        return (
            <div>
                <h3>Abbiyu Antrian Pertama</h3>
                <button onClick={this.ChangeAntrian}>ChangeAntrian!</button>
                <br />
                <h3>{this.state.nama}</h3>
            </div>
        );
    }
}
export default Antriansatu;