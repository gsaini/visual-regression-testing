// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setDefaultOptions } from "jsdom-screenshot";

const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

setDefaultOptions({
  serve: ['src']
});

// to load global stylesheet.
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "/App.css";
document.head.appendChild(styleLink);

// to increase the timeout because of image snapshot.
// jest.setTimeout(30000);
