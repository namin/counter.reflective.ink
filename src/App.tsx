import { useState } from 'react'
import './App.css'

function countWords(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

function App() {
  const [text, setText] = useState('');

  const wordCount = countWords(text);
  const charCount = text.length;

  return (
    <div className="app-container">
      <textarea
        className="textarea"
        value={text}
        onChange={e => setText(e.target.value)}
        rows={8}
      />
      <div className="stats">
        <span><strong>Words:</strong> {wordCount}</span>
        <span><strong>Characters:</strong> {charCount}</span>
      </div>
    </div>
  );
}

export default App
