import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import marked from "marked";

	let marked = require('marked');
	class App extends React.Component {
		//create state object with initial text
		state = {
			markdown: '# Welcome to my markdown previewer<br/> ## Use input field to put your text and field above to preview what you wrote<br /> Feel free to use GitHub"s and HTML markdown to style you text<br/> # ENJOY!'
		}
		//updateMarkdown = updateMarkdown.bind(this);

		
		updateMarkdown = function(markdown){
			console.log('ss');

			this.setState({
				markdown:markdown
			})
		}
		render() {
			let {markdown} = this.state;	
			console.log({markdown});
			return (
				<div>
					<div className='editorField'>
						<textarea type='text' value={markdown} className='editorFieldTextArea' onChange={(event)=>this.updateMarkdown(event.target.value)} />
					</div>
					<div className='previewerField'>
						<div className='previewerFieldText'>
							<div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}} />
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
