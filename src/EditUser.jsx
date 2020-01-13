import React from "react";

export class EditUser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.userName,
			phone: this.props.userPhone,
			status: this.props.status,
			statuses: this.props.statuses
		};
	}
	render(){
		return(
			<form onSubmit={e => e.preventDefault()}>
		        <input
		          type="text"
		          value={this.state.name}
		          onChange={e =>
		            this.setState({
		              name: e.target.value
		            })
		          }
		        />
		        <input
		          type="text"
		          value={this.state.phone}
		          onChange={e =>
		            this.setState({
		              phone: e.target.value
		            })
		          }
		        />
		        <select
			        value={this.state.status}
			        onChange={e =>
			            this.setState({
			              status: e.target.value
			            })
		            }
		        >
		        	{
		        		this.state.statuses.map((elem, index) => (
		        			<option key={index} value={index}>{elem}</option>
		        		))
		        	}
		        </select>
		        <button
		          onClick={() => {
		            if (this.state.name && this.state.name.trim() && this.state.phone && this.state.phone.trim()) {
		            	this.setState({ name: "", phone: "" });
		                this.props.onSave(this.state.name, this.state.phone, this.state.status);
		            }
		          }}
		        >
		          Save
		        </button>
		        <button onClick={() => this.props.onCancel()}>Cancel</button>
		    </form>
		);
	}
}