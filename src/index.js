import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import marked from "marked";


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			textData: `
# Welcome to my React Markdown Previewer!
`
		}
	this.handlechangeTextArea = this.handlechangeTextArea.bind(this);

	}
	handlechangeTextArea(){
		console.log('ss');
		this.setState({
			textData:'s'
		})
	}
	render() {
		return (
			<div>
			<Editor text={this.state.textData}
			/>
			<Previewer text={this.state.textData}/>
			</div>
		)
	}
}

export default App;


class Editor extends React.Component {

	
	render() {
		return(
			<div className='editorField'>
				<textarea type='text' defaultValue={this.props.text} className='editorFieldTextArea' onChange={this.props.handlechangeTextArea}/>
			</div>
		)
	}
}

class Previewer extends React.Component {
	render() {
		return(
			<div className='previewerField'>
				<div className='previewerFieldText'>
					{marked(this.props.text)};

				</div>
			</div>
		)
	}
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
