import React from "react";
import { AddUser } from './AddUser'

function addUser(
  users, // users array
  userToAdd // new user to add
) {
  return [...users, userToAdd];
}

export class UsersList extends React.Component {
  state = {
    // все пользователи
    users: [
      {
        id: 1,
        name: "Vasya",
        phone: "+375299999999"
      }
      ,
      {
        id: 2,
        name: "Oleg",
        phone: "+375259999999"
      }
    ]
  };

  nextId = 3;

  render() {
	return (
		<React.Fragment>
			<AddUser 
				onSave={(name, phone) => {
	            // Creating new uder with name, phone and id
	            const user = {
	              id: this.nextId,
	              name,
	              phone
	            };

	            // Add new user in users array
	            this.setState({
	              users: addUser(this.state.users, user)
	            });

	            this.nextId++;
	          }}
			/>
		  	<table>
			  	<thead>
				  	<tr>
					  	<th>ID</th>
					  	<th>Name</th>
					  	<th>Phone</th>
				  	</tr>
			  	</thead>
			  	<tbody>
			  	 {this.state.users.map((user) => (
					<tr key={user.id}>
					  	<th>{user.id}</th>
					  	<th>{user.name}</th>
					  	<th>{user.phone}</th>
				  	</tr>
				  ))}
			  	</tbody>
		  	</table>
		</React.Fragment>
	);
  }
}