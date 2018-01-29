import React, { PureComponent } from "react";
import Reveal from "reveal.js";

import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/night.css";

import Slide from "../Slide";
import Slides from "../Slides";

class App extends PureComponent {
  centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  emojiStyle = {
    fontSize: "96px"
  };

  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <Slides>
        <Slide>
          <h1>async</h1>
        </Slide>
        <Slide>
          <h2>hello, world</h2>
          <pre>
            <code>
              {`
                var result = asyncFn("awesome")

                console.info(result)
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // undefined
              `}
            </code>
          </pre>
          <span
            className="fragment"
            role="img"
            aria-label="thinking"
            style={this.emojiStyle}
          >
            🤔
          </span>
        </Slide>
        <Slide>
          <h2>callback</h2>
          <pre>
            <code>
              {`
                asyncFn("awesome", (result) => {
                  console.log(result)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>"errback"</h2>
          <pre>
            <code>
              {`
                asyncFn("awesome", (err, result) => {
                  if (err) {
                    console.error(err)

                    return
                  }

                  console.info(result)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>flow control</h2>
          <span
            className="fragment"
            role="img"
            aria-label="cry"
            style={this.emojiStyle}
          >
            😭
          </span>
        </Slide>
        <Slide>
          <h2>error handling</h2>
          <span
            className="fragment"
            role="img"
            aria-label="cry"
            style={this.emojiStyle}
          >
            😭
          </span>
        </Slide>
        <Slide>
          <h2>Promise</h2>
          <pre>
            <code>
              {`
                asyncFn("awesome").then((result) => {
                  console.info(result)
                }).catch((err) => {
                  console.error(err)
                }).finally(() => {
                  console.info("🔥")
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
                // 🔥
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>…finally?</h2>
          <ul>
            <li>
              <p>V8 6.3</p>
              <ul>
                <li>Chrome 63</li>
                <li>Node.js (master)</li>
              </ul>
            </li>
            <li>Firefox 58</li>
          </ul>
        </Slide>
        <Slide>
          <h2>flow control</h2>
          <img
            className="fragment"
            src="http://3.bp.blogspot.com/-3Y4_Y-v6cug/UYqb0V__6LI/AAAAAAAALuI/NwmRVgUGtZQ/s1600/nodding.gif"
            alt="nod"
          />
        </Slide>
        <Slide>
          <h2>série</h2>
          <pre>
            <code>
              {`
                asyncFn("awesome").then((result) => {
                  return asyncFn(result)
                }).then((result) => {
                  console.info(result)
                }).catch((err) => {
                  console.error(err)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🌈
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>parallèle</h2>
          <pre>
            <code>
              {`
                Promise.all([
                  asyncFn("awesome"),
                  asyncFn("🦄")
                ]).then((result) => {
                  console.info(result)
                }).catch((err) => {
                  console.error(err)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // [🦄, 🌈]
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>error handling</h2>
          <span
            className="fragment"
            role="img"
            aria-label="cry"
            style={this.emojiStyle}
          >
            🙃
          </span>
        </Slide>
        <Slide>
          <h2>generators</h2>
          <pre>
            <code>
              {`
                function* generator() {
                  yield "🦄"
                  yield "🌈"
                  return "🐱";
                }

                const iterator = generator()

                iterator.next()
                iterator.next()

                setTimeout(() => iterator.next(), 1000)
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // { value: 🦄, done: false }
                // { value: 🌈, done: false }
                // 1 seconde...
                // { value: 🐱, done: true }
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>flow control</h2>
          <span
            className="fragment"
            role="img"
            aria-label="smile"
            style={this.emojiStyle}
          >
            🙂
          </span>
        </Slide>
        <Slide>
          <h2>error handling</h2>
          <span
            className="fragment"
            role="img"
            aria-label="smile"
            style={this.emojiStyle}
          >
            🙂
          </span>
        </Slide>
        <Slide>
          <h2>utilisation</h2>
          <span
            className="fragment"
            role="img"
            aria-label="cry"
            style={this.emojiStyle}
          >
            😭
          </span>
        </Slide>
        <Slide>
          <h2>async/await</h2>
          <span
            className="fragment"
            role="img"
            aria-label="thinking"
            style={this.emojiStyle}
          >
            😍
          </span>
        </Slide>
        <Slide>
          <h2>support</h2>
          <ul>
            <li>
              <p>V8 5.5</p>
              <ul>
                <li>Chrome 55</li>
                <li>Node.js 7.6</li>
              </ul>
            </li>
            <li>Edge</li>
            <li>Firefox 52</li>
            <li>Safari 10.1</li>
          </ul>
        </Slide>
        <Slide>https://github.com/Zertz/async</Slide>
      </Slides>
    );
  }
}

export default App;
