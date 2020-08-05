

window.consoleService = ConsoleService;

/*
 * ConsoleService
 * Helps to handle console messages over the game
 */
export default function ConsoleService(sourceName) {
  function _triggerEvents(message) {
    for (let i = 0; i < ConsoleService._eventHandlers.length; i++) {
      ConsoleService._eventHandlers[i](message, ConsoleService._logs);
    }
  }

  return (...logs) => {
    let message = '';
    for (const log of logs) {
      if (typeof log === 'object') {
        try {
          message += JSON.stringify(log);
        } catch (_) {
          message += '[Object object]';
        }
      } else if (typeof log === 'string') {
        message = message.concat(log);
      } else {
        try {
          message += log.toString();
        } catch (_) {
          message += `[Can't dump '${typeof log}']`;
        }
      }
      message += ', ';
    }
    message = message.substr(0, message.length - 2);
    ConsoleService._logs.push(message);
    _triggerEvents(message);
  }
}

/**
 * @callback ConsoleService~AddMessageEventHandler
 * @param {string} addedMessage Message that just pop out
 * @param {Array<string>} allMessages
 */

/** @type {Array<string>} */
ConsoleService._logs = [];
/** @type {Array<ConsoleService~AddMessageEventHandler>} */
ConsoleService._eventHandlers = [];
/**
 * Add a function the the addMessage Event
 * @param {ConsoleService~AddMessageEventHandler} callback
 */
ConsoleService.addEventHandler = (callback) => {
  ConsoleService._eventHandlers.push(callback);
}
