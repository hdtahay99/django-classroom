import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import BodyForm from './BodyForm';

class Formulario extends Component{

    render(){
        const {handleSubmit, setPicture, data} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="page-header py-4 no-gutters row">
                    <div className="text-sm-left mb-3 text-center text-md-left mb-sm-0 col-12 col-sm-4">
                        <h3>Usuarios classroom</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="mb-4 col-lg-12">
                        <div className="mb-4 card card-small">
                            <div className="border-bottom card-header"><h6 className="m-0">Crear nuevo usuario</h6></div>
                            <BodyForm 
                                setPicture={setPicture}
                                data={data} 
                            />

                            <div className="mb-4 col text-center">
                                <button type="submit" className="btn btn-primary">
                                    Registar usuario
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                
            </form>
        )
    }
}


export default reduxForm({
    form: 'usuario'
})(Formulario);