import React from "react";

export class AddUser extends React.Component {
	state = {
	    name: "",
	    phone: ""
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
				<button
					onClick={() => {
						if (this.state.name && this.state.name.trim() && this.state.phone && this.state.phone.trim()) {
							this.setState({ name: "" });
							this.setState({ phone: "" });
							this.props.onSave(this.state.name, this.state.phone);
						}
					}}
				>
				Add Client
				</button>
			</form>
		);
	}
}