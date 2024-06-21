import React, {useState, useRef} from 'react'
import './TextArea.css';

export default function TextArea() {
    const [text, setText] = useState('Enter Your Text Here');
    const [wordLimit, setWordLimit] = useState(101);
    const textareaRef = useRef(null);

    // Upper Case Button
    const handleUpClick = ()=> {
        let temp = text.toUpperCase();
        setText(temp);        
    }

    // On Change function for textarea
    const handleChange = (event)=> {
        setText(event.target.value);
    }

    // Select the content of the textarea
    const selectContent = ()=> {
        if (textareaRef.current) {
            textareaRef.current.select();
        }
    }


    // Format Button
    const handleFormateClick = ()=> {
        const temp = formatString(text);
        setText(temp);
    }

    const formatString = (input)=> {
        let sentences = input.split('.');
    
        sentences = sentences.map(sentence => {
            sentence = sentence.trim();
            if (sentence.length > 0) {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }
            return sentence;
        });
    
        let formattedString = sentences.join('. ');
    
        formattedString = formattedString.replace(/\bi\b/g, 'I');
    
        formattedString = formattedString.replace(/\s+/g, ' ');
    
        return formattedString;
    }

    // Lower Case Button
    const handleDownClick = ()=> {
        let temp = text.toLowerCase();
        setText(temp);
    }

    // Word Wrap Button
    const handleWordWrap = ()=> {
        const temp = wordWrap(text, (wordLimit - 1));
        setText(temp);
    }

    const wordWrap = (text, limit)=> {
        if (text.length <= limit) return text;
    
        text = text.replace(/\n/g, ' ');
        let str = text.split(' ');

        let lengths = str.map(element => element.length);
        let maxLength = Math.max(...lengths);

        if (maxLength > limit) {
            alert ('Word limit is too small to wrap the text. Minimum word limit should be ' + (maxLength + 1) + ' characters.');
            return text;
        }

        else {
            let newWord = '';
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (count + str[i].length > limit) {
                    newWord += '\n';
                    count = 0;
                }
                newWord += str[i];
                newWord += ' ';
                count += str[i].length + 1;
            }
            
            return newWord;
        }
    }

    // On Change function for Word Limit
    const handleWordLimitChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setWordLimit(Number(value));
        }
    }


    return (
        <div className='Area'>
            <div className='textDetails'>
                <h1>Words : {text.split(' ').length}</h1>
                <h1>Characters : {text.length}</h1>
            </div>

            <textarea rows="25" cols="100" className="Content" ref={textareaRef} value={text} onChange={handleChange} onClick={selectContent}></textarea>
            <div className='button'>
                <button className='btn' onClick={handleFormateClick}>Format Text</button>
                <button className='btn' onClick={handleUpClick}>Upper Case</button>
                <button className='btn' onClick={handleDownClick}>Lower Case</button>
            </div>

            <div className='wrapping'>
                <h2>Word Wrap : </h2>
                <input className='WordLimitInput' value={wordLimit} onChange={handleWordLimitChange}></input>
                <button className='WordWrapBtn' onClick={handleWordWrap}>Wrap</button>
            </div>
        </div>
    )
}
