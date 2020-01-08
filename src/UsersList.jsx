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
    ],

    // id задачи, которую сейчас редактируем
    // если taskToEdit равен null, то видим список задач и форму добавления
    // если taskToEdit равен какому-то числу, видим форму редактирования задачи с таким id
    // taskToEdit: null,

    // текущее значение фильтра задач
    // filter: Filter.ALL
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