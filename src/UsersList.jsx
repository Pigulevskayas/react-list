import React from "react";
import { AddUser } from './AddUser'
import { EditUser } from './EditUser'

function addUser(
  users, // users array
  userToAdd // new user to add
) {
  return [...users, userToAdd];
}

function deleteUser(
  users, // users array
  userID // user to delete
) {
	users.splice(userID, 1);
	// console.log(users);
  	return users;
}

function updateUser(
	users, // users array
  	userID, // user to edit
  	fieldToUpdate
) {
	const userIndex = users.findIndex(user => user.id === userID);
  	const userToUpdate = users[userIndex];
  	const userCopy = { ...userToUpdate, ...fieldToUpdate };

  	return [
	    ...users.slice(0, userIndex),
	    userCopy,
	    ...users.slice(userIndex + 1)
	];
}

export class UsersList extends React.Component {
  state = {
    // all users array
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
    ],
    userToDelete: null,
    userToEdit: null,
  };

  nextId = 3;

  render() {
  	if (this.state.userToDelete) {
  		let deleteIndex = this.state.users.findIndex(user => user.id === this.state.userToDelete);
  		deleteUser(this.state.users, deleteIndex); 
  		this.setState({
		    userToDelete: null
		})  
  	}

  	if (this.state.userToEdit) {
  		return(
  			<EditUser 
  				userName={
  					this.state.users.find(user => user.id === this.state.userToEdit).name
  				}
  				userPhone={
  					this.state.users.find(user => user.id === this.state.userToEdit).phone
  				}
  				onSave={(name, phone) => {
  					const usersCopy = updateUser(this.state.users, this.state.userToEdit, {
		              name,
		              phone
		            });
		            this.setState({
		            	users: usersCopy,
		              	userToEdit: null
		            })
		        }}
  				onCancel={() =>
		            this.setState({
		              userToEdit: null
		            })
		        }
  			/>
  		);
  	}

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
	            console.log(this.nextId);
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
					  	<td>{user.id}</td>
					  	<td>{user.name}</td>
					  	<td>{user.phone}</td>
					  	<td>
					  		<button
					  			onClick={() => 
					  				this.setState({
				                        userToDelete: user.id
				                    })
					  			}
					  		>
					  			Delete
							</button>
					  	</td>
					  	<td>
					  		<button
					  			onClick={() => 
					  				this.setState({
				                        userToEdit: user.id
				                    })
					  			}
					  		>
					  			Edit
							</button>
					  	</td>
				  	</tr>
				  ))}
			  	</tbody>
		  	</table>
		</React.Fragment>
	);
  }
}