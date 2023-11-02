/*
 * Utility file for printing logs
 */

import chalk from 'chalk';

/**
 * Options for the log function.
 * @type {object} LogOptions
 * @property {string} [message] - The message to be logged.
 * @property {Object} [object] - The object to be logged.
 * @property {boolean} [clearConsole] - Whether to clear the console before logging.
 */
interface LogOptions {
  message?: string;
  object?: object;
  clearConsole?: boolean;
}

/**
 * Logs a message or object to the console.
 * @param {LogOptions} options - The options for logging.
 */
export const log = ({ message, object, clearConsole }: LogOptions) => {
  if (clearConsole) {
    console.clear();
  }
  if (message) {
    console.log(`${chalk.bold.green('[+]')} ${message}`);
  }
  if (object) {
    console.log(
      `${chalk.bold.green('[+]')} Returned Object:\n\n`,
      object,
      '\n',
    );
  }
};

/**
 * Logs a warning message to the console.
 * @param {string} message - The warning message to be logged.
 */
export const warn = (message: string) => {
  console.log(`${chalk.bold.yellow('[+]')} ${message}`);
};

/**
 * Logs an error message to the console.
 * @param {string} message - The error message to be logged.
 */
export const error = (message: string) => {
  console.log(`${chalk.bold.red('[+]')} ${message}`);
};

export const underline = chalk.underline;
export const bold = chalk.bold;
export const italic = chalk.italic;
