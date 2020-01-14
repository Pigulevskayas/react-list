import React from "react";

export class AddUser extends React.Component {
	state = {
	    name: "",
	    phone: "",
	    status: "",
	    statuses: this.props.statuses
	};

	render(){
		return (
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					placeholder="Name"
					value={this.state.name}
					onChange={e =>
						this.setState({
							name: e.target.value
						})
					}
					// required
				/>
				<input
					type="text"
					placeholder="Phone"
					value={this.state.phone}
					onChange={e =>
						this.setState({
							phone: e.target.value
						})
					}
					// required
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
							this.setState({ name: "" });
							this.setState({ phone: "" });
							this.setState({ status: 0 });
							this.props.onSave(this.state.name, this.state.phone, this.state.status);
						}
					}}
				>
				Add Client
				</button>
			</form>
		);
	}
}