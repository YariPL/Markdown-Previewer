import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import marked from "marked";


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			textData: `# Welcome to my React Markdown Previewer!`
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
				<div className='editorField'>
					<textarea type='text' defaultValue={this.state.textData} className='editorFieldTextArea' onChange={this.props.handlechangeTextArea}/>
				</div>
				<div className='previewerField'>
					<div className='previewerFieldText'>
						<div dangerouslySetInnerHTML = {{__html: marked(this.state.textData)}} />
					</div>
				</div>
			</div>
		)
	}
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
