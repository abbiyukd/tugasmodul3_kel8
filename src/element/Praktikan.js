import React, { Component } from "react";
import Button from "./Button";

class Praktikan extends Component {
    state = {
        nama: "Abbiyu Kirana Distira"
    }
    UbahNamaPraktikan = () => {
        this.setState((state) => {
            if (state.nama === "Abbiyu Kirana Distira") {
                return { nama: "Muhammad Afishal Fakhri" }
            } else {
                return { nama: "Abbiyu Kirana Distira" }
            }
        })
    }
    componentWillUnmount() {
        alert(`Komponen Praktikan akan dihilangkan`)
    }
    render() {
        return (
            <div>
                <h3>Kelompok 8</h3>
                <h3>{this.state.nama}</h3>
                <Button onClick={this.UbahNamaPraktikan}>{this.state.nama == "Abbiyu Kirana Distira" ? 'Praktikan 1' :
                        'Praktikan 2'}</Button>
            </div>
        );
    }
}
export default Praktikan;