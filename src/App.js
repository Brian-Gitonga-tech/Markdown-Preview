import './App.css';
import styles from './App.module.css';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; 


// a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![luffy](https://i.pinimg.com/564x/f2/0e/67/f20e67d5871375928297529bea9f7f8c.jpg)`

function App() {
  const textAreaRef = useRef(null)
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    textAreaRef.current.style.height = "auto"
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 3 + "px";
  }, [text])

  return (
    <div>
     <div id='header' className={styles.heading}>
      <h1 className={styles.text}>Markdown-Previewer</h1>
     </div>
     <div id='Markdown Previewer' className={styles.markdown}>
      <div id='editorwrap' className={styles.editor}>
      <div id='editorheading'  className={styles.edit}>
      <h1>EDITOR</h1>
      </div>
       <textarea ref={textAreaRef} value={text} onChange={(e) => {setText(e.target.value)}} id='editor'></textarea>
      </div>
      <div id='previewwrap' className={styles.preview}>
      <div id='previewheading' className={styles.view}>
        <h1>PREVIEW</h1>
      </div>
      <div id='preview'>
       <ReactMarkdown>{text}</ReactMarkdown>
      </div>
     </div>
    </div>
    </div>
  );
}

export default App;
