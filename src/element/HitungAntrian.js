import React, { Component } from "react";
import Button from "./Button"

class HitungAntrian extends Component {
    state = {
        angka: 0
    }
    tambahAntrian = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangAntrian = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert(`Komponen perhitungan antrian akan dihilangkan`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Tambahkan Antrian?' );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`antrian berhasil diupdate, jumlah antrian sebelumnya adalah ${prevState.angka}` );
    }
    render() {
        return (
            <div>
                <h3>Perhitungan Antrian</h3>
                <span>{this.state.angka}</span> <br></br>
                <Button
                    onClick={this.kurangAntrian}>Kurang Antrian</Button>
                <Button
                    onClick={this.tambahAntrian}>Tambah Antrian</Button>
            </div>
        )
    }
}
export default HitungAntrian;