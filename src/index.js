import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import marked from "marked";

	let marked = require('marked');
	class App extends React.Component {
		//create state object with initial text(just for FCC test)
		state = {
			markdown: `
# <center>SAMPLE FOR FREECODECAMP</center>
# Welcome to my markdown previewer 
## Use input field to put your text and field above to preview what you wrote
## Feel **free** to use GitHub"s and HTML markdown to style you text
1. Item 1
1. Item 2
 
http://github.com - automatic!
[GitHub](http://github.com)
![GitHub Logo](http://icons-for-free.com/icon/download-github_logo_website_icon-2639.ico)
Format: ![Alt Text](url)
As Kanye West said:

> We're living the future so
> the present is our past.
I think you should use an
\`<addr>\` element here instead.
\`\`\`
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`

`
		}
		//updateMarkdown = updateMarkdown.bind(this);

		//function to update the state when print smth into it
		updateMarkdown = function(markdown){

			this.setState({
				markdown:markdown //markdown as a value optional es6
			})
		}
		render() {
			//hold what ever this.state is es6
			let {markdown} = this.state;	

			console.log({markdown});
			return (
				<div className='divForEverything'>
					<div className='editorField'>
					{/*on chhange run function which runs update function above with parameter of current input value*/}
						<textarea type='text' id="editor" value={markdown} className='editorFieldTextArea' onChange={(event)=>this.updateMarkdown(event.target.value)} />
					</div>
					<div className='previewerField'>
							{/*this display the value of state with markdown applied*/}
							<div id='preview' dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}} />
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
