import React, {useEffect, useState, useRef} from "react";
import ConsoleService from '@services/console.service';
import '@styles';
import './console.style.scss';

const log = ConsoleService(null);

export default function Console() {
  const [consoleContent, setConsoleContent] = useState('');
  /** @type {{current: MutableRefObject<HTMLElement>}} */
  let logElement = useRef(null);
  /** @type {{current: MutableRefObject<HTMLInputElement>}} */
  let inputElement = useRef(null);

  useEffect(init, []);
  useEffect(setupFormHandler, [inputElement]);

  function init() {
    ConsoleService.addEventHandler(onNewMessage);
  }

  function onNewMessage(newMessage, _) {
    const isScroll = logElement.current.scrollHeight === logElement.current.scrollTop + logElement.current.clientHeight;
    setConsoleContent((oldValue) => oldValue + (oldValue === '' ? '' : '\n') + newMessage);
    if (isScroll)
      scrollToBottom();
  }

  function scrollToBottom() {
    logElement.current.scrollTo(0, logElement.current.scrollHeight);
  }

  function setupFormHandler() {
    const input = inputElement.current;
    input.addEventListener('keyup', ({key}) => {
      if (key === "Enter") {
        const value = input.value;
        input.value = '';
        if (value !== '')
          log(value);
      }
    });
  }

  return <div className="console flex-layout column">
    <pre className="console-log flex" ref={logElement}>
      {consoleContent}
    </pre>
    <div className="console-input">
      <input type="text" id="console-input" ref={inputElement} placeholder="Type command here"/>
    </div>
  </div>
}
