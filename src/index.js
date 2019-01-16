import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import marked from "marked";

let marked = require('marked');
class App extends React.Component {
	state = {
		markdown: `# Welcome to my React Markdown Previewer!`
	}
	//updateMarkdown = updateMarkdown.bind(this);

	
	updateMarkdown = function(markdown){
		console.log('ss');
				console.log(e);

		this.setState({
			textData:{markdown}
		})
	}
	render() {
		let markdown = this.state;	
		return (
			<div>
				<div className='editorField'>
					<textarea type='text' value={markdown} className='editorFieldTextArea' onChange={(event)=>this.updateMarkdown(event.target.value))} />
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
