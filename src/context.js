import React, {Component} from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jon Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-55555'
      },
      {
        id: 2,
        name: 'Karen Page',
        email: 'kpage@gmail.com',
        phone: '222-222-55555'
      },
      {
        id: 3,
        name: 'Peter Parker',
        email: 'parker@gmail.com',
        phone: '111-555-55555'
      }
    ],
    dispatch: action => {
      this.setState(state =>
        reducer(state, action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;