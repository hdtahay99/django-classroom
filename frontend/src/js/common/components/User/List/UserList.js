import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from "react-bootstrap-table";
import Grid from "../../Utils/Grid";
import {standardActions} from "../../Utils/Grid/StandardActions";

const defaultAvatar = require("assets/img/avatar-placeholder.png");

class UserList extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        loader: PropTypes.bool.isRequired,
        onPageChange: PropTypes.func,
        onSortChange: PropTypes.func,
    };

    static defaultProps = {
        loading: false
    };

    showImage = (cell, row) => {
        console.log({cell})
        return `<img class="user-avatar rounded-circle ml-3" style="width: 100px; height: 100px" src=${(cell) ? (cell.picture) ? cell.picture : defaultAvatar : defaultAvatar} alt="User Avatar" />`;
    }

    componentWillMount() {
        const { listar, page } = this.props;
        listar(page);
    }

    render(){   
        const { data, loader, listar: onPageChange, onSortChange } = this.props;
        return (
            <div className="py-4">
                <h3>Usuarios classroom</h3> 
                <div className="row">
                    <div className="mb-4 mt-4 col-12">
                        <div className="mb-4 card card-small">
                            <div className="border-bottom card-header"><h6 className="m-0">Lista de usuarios</h6></div>
                            <div className="p-0 px-3 pt-3">
                                <Grid hover striped data={data} loading={loader} onPageChange={onPageChange} onSortChange={onSortChange} >
                                    
                                    <TableHeaderColumn
                                        dataField="profile"
                                        dataFormat={this.showImage}
                                        dataSort
                                    >
                                        Avatar
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        isKey
                                        dataField="email"
                                        dataSort
                                    >
                                        Email
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="username"
                                        dataSort
                                    >
                                        Usuario
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="profile"
                                        dataFormat={(cell, row) => cell ? cell.name : ''}
                                        dataSort
                                    >
                                        Nombre
                                    </TableHeaderColumn>


                                    <TableHeaderColumn
                                        dataField="profile"
                                        dataFormat={(cell, row) => cell ? cell.last_name : ''}
                                        dataSort
                                    >
                                        Apellido
                                    </TableHeaderColumn>


                                    <TableHeaderColumn
                                        dataField="profile"
                                        dataFormat={(cell, row) => cell ? cell.address : ''}
                                        dataSort
                                    >
                                        Dirección
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="profile"
                                        dataFormat={(cell, row) => cell ? cell.phone : ''}
                                        dataSort
                                    >
                                        Teléfono
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="id"
                                        dataAlign="center"
                                        dataSort
                                        dataFormat={standardActions({ editar: "grids", ver: "grids", eliminar: () => {} })}
                                    >
                                        Acciones
                                    </TableHeaderColumn>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        )
    }
}

export default UserList;