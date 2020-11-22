import React, { Component } from "react";
import Button from "./Button";

class Praktikan extends Component {
    state = {
        nama: "Abbiyu Kirana Distira",
        nim: "21120117140010"
    }
    UbahPraktikan = () => {
        this.setState((state) => {
            if (state.nama === "Abbiyu Kirana Distira" && state.nim === "21120117140010") {
                return { nama: "Muhammad Afishal Fakhri", nim: "21120117130044" }
            } else {
                return { nama: "Abbiyu Kirana Distira", nim: "21120117140010" }
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
                <h3>{this.state.nim}</h3>
                <Button onClick={this.UbahPraktikan}>{this.state.nama == "Abbiyu Kirana Distira" ? 'Praktikan 1' :
                        'Praktikan 2'}</Button>
            </div>
        );
    }
}
export default Praktikan;