import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    // Aquí se debe escribir la lógica para cerrar sesión
  }

  render() {
    const { dataUser } = this.props;
    const { _id } = dataUser;

    return (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <span className="text">
              Welcome {dataUser.name}, {dataUser.role}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`/UpdateU/${_id}`}>Actualizar</Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={this.handleLogOut}>LogOut</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    );
  }
}

export default DropdownMenu;