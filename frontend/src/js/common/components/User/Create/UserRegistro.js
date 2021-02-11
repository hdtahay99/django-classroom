import React, {Component} from 'react';
import Formulario from './Form';

class UserRegistro extends Component {

    constructor(props) {
        super(props);
        this.state = {picture: null};
    }

    setPicture = (picture) => {
        this.setState({picture});
    };

    handleSubmit = (data) => {
        const { crearUsuario } = this.props;
        crearUsuario({...data, picture: null}, [{"file": this.state.picture, "name": "picture"}]);
    };

    componentWillMount = () => {
        const {obtenerRoles} = this.props;
        obtenerRoles();
    }

    render(){

        const {dataRol} = this.props;
        return (
            <Formulario 
                onSubmit={this.handleSubmit}
                setPicture={this.setPicture}
                data={dataRol}
            />
        )
    }
}

export default UserRegistro;