import React from "react";

export class UsersList extends React.Component {
  state = {
    // все пользователи
    users: [
      {
        id: 1,
        name: "Vasya",
        phone: "+375299999999"
      },
      {
        id: 2,
        name: "Oleg",
        phone: "+375259999999"
      }
    ]
  };

  render() {
  	return (
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
				<tr>
				  	<th>{user.id}</th>
				  	<th>{user.name}</th>
				  	<th>{user.phone}</th>
			  	</tr>
			  ))}
		  	</tbody>
	  	</table>
	);
  }
}