import React, { PureComponent } from "react";
import Reveal from "reveal.js";

import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/night.css";

import Slide from "../Slide";
import Slides from "../Slides";

class App extends PureComponent {
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
          <span role="img" aria-label="wave" style={this.emojiStyle}>
            👋
          </span>
          <h2 className="fragment">Pier-Luc</h2>
          <h4 className="fragment">Classcraft (Meteor + React)</h4>
        </Slide>
        <Slide>
          <h1>async</h1>
        </Slide>
        <Slide>
          <h1>Node.js</h1>
          <blockquote>
            "asynchronous event driven<br />JavaScript runtime"
          </blockquote>
        </Slide>
        <Slide>
          <h2>hello, world</h2>
          <pre>
            <code>
              {`
                const result = asyncFn("awesome")

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
          <h2>Callback</h2>
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
          <h2>error-first callback</h2>
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
          <p className="fragment">http://caolan.github.io/async/</p>
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
          <h1>Promise</h1>
        </Slide>
        <Slide>
          <pre>
            <code>
              {`
                // Librairie
                const promise = new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (Math.random() > 0.5) {
                      reject(new Error("🔥"))

                      return
                    }

                    resolve("🦄")
                  }, 1000)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // Application
                promise.then((result) => {
                  console.info(result)
                }).catch((err) => {
                  console.error(err)
                }).finally(() => {
                  console.info("🐱")
                })
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>finally*</h2>
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
                  return asyncFn(result)
                }).then((result) => {
                  console.info(result)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>série, 2</h2>
          <pre>
            <code>
              {`
                ["🦄", "🌈"].reduce((promise, emoji) => {
                  return promise.then(() => asyncFn(emoji))
                }, Promise.resolve())
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
          <h2>🏎 🏎 🏎</h2>
          <pre>
            <code>
              {`
                Promise.race([
                  asyncFn("awesome"),
                  asyncFn("🦄")
                ]).then((result) => {
                  console.info(result)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // ???
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>error handling</h2>
          <span
            className="fragment"
            role="img"
            aria-label="happy"
            style={this.emojiStyle}
          >
            🙃
          </span>
          <pre className="fragment">
            <code>
              {`
                Promise.reject(new Error("🔥")).catch((err) => {
                  console.error(err)
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🔥
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>generators</h2>
          <h1 className="fragment">Super important!</h1>
          <h3 className="fragment">…mais</h3>
        </Slide>
        <Slide>
          <h2>function*</h2>
          <pre>
            <code>
              {`
                function* generator() {
                  yield "🦄"
                  yield "🌈"
                  return "🐱";
                }

                const iterator = generator()

                const result1 = iterator.next()
                const result2 = iterator.next()
                const result3 = iterator.next()

                console.info(result1, result2, result3)
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄, 🌈, 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>iterators</h2>
          <pre>
            <code>
              {`
                function* generator() {
                  yield "🦄"
                  yield "🌈"
                  return "🐱";
                }

                for (const value of generator()) {
                  console.info(value)
                }
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
                // 🌈
                // 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>expérience</h2>
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
          <pre>
            <code>
              {`
                const result = await asyncFn("🦄")

                console.info(result)
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
          <span
            className="fragment"
            role="img"
            aria-label="heart-eyes"
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
            <li>Edge 15</li>
            <li>Firefox 52</li>
            <li>Safari 10.1 (iOS 10.3)</li>
          </ul>
        </Slide>
        <Slide>
          <h2>transpilers</h2>
          <p>async / await (ES2017)</p>
          <p>&darr;</p>
          <p>generator (ES2015)</p>
          <p>&darr;</p>
          <p>regenerator (ES5)</p>
        </Slide>
        <Slide>
          <h2>flow control</h2>
          <span
            className="fragment"
            role="img"
            aria-label="smile"
            style={this.emojiStyle}
          >
            😃
          </span>
        </Slide>
        <Slide>
          <h2>série</h2>
          <h3>for, while, …</h3>
          <pre className="fragment">
            <code>
              {`
                const emojis = ["awesome", "🦄"]

                for (let i = 0; i < emojis.length; i++) {
                  await asyncFn(emojis[i])
                }

                console.info("🐱")
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
                // 🌈
                // 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>parallèle</h2>
          <h3>Promise!</h3>
          <pre className="fragment">
            <code>
              {`
                const result = await Promise.all([
                  asyncFn("awesome"),
                  asyncFn("🦄")
                ])

                console.info(result)
                console.info("🐱")
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // [🦄, 🌈]
                // 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>async iterators</h2>
          <h3>for…of</h3>
          <pre className="fragment">
            <code>
              {`
                const promises = [
                  asyncFn("awesome"),
                  asyncFn("🦄")
                ]

                for await (const result of promises) {
                  console.info(result)
                }

                console.info("🐱")
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
                // 🌈
                // 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>support</h2>
          <ul>
            <li>
              <p>V8 6.3</p>
              <ul>
                <li>Chrome 63</li>
                <li>Node.js (master)</li>
              </ul>
            </li>
            <li>Firefox 57</li>
          </ul>
        </Slide>
        <Slide>
          <h2>error handling</h2>
          <span
            className="fragment"
            role="img"
            aria-label="smile"
            style={this.emojiStyle}
          >
            😃
          </span>
        </Slide>
        <Slide>
          <h2>old school</h2>
          <pre>
            <code>
              {`
                try {
                  await asyncFn("🦄")
                  await asyncFn("☹️")
                } catch (err) {
                  console.error("🔥")
                } finally {
                  console.info("🐱")
                }
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🔥
                // 🐱
              `}
            </code>
          </pre>
        </Slide>
        <Slide>Code?</Slide>
        <Slide>https://github.com/Zertz/slides-async</Slide>
      </Slides>
    );
  }
}

export default App;
