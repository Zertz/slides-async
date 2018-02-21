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
          <h1>Pier-Luc</h1>
          <h2>Node.js ~0.10</h2>
          <h3>Classcraft (Meteor + React)</h3>
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
          <p className="fragment">1 fonction, 1 error handler</p>
        </Slide>
        <Slide>
          <h2>Promise</h2>
          <pre>
            <code>
              {`
                asyncFn("awesome").then((result) => {
                  console.info(result)
                }).catch((err) => {
                  console.error("🔥")
                }).finally(() => {
                  console.info("🐱")
                })
              `}
            </code>
          </pre>
          <pre className="fragment">
            <code>
              {`
                // 🦄
                // 🐱
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
          <h2>série, 2</h2>
          <pre>
            <code>
              {`
                const awesome = ["🦄", "🌈"]

                awesome.reduce((promise, emoji) => {
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
          <h2>🏎 🏎 🏎</h2>
          <pre>
            <code>
              {`
                Promise.race([
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
                // ???
              `}
            </code>
          </pre>
          <p>https://stackoverflow.com/questions/46376432/</p>
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
          <p className="fragment">n functions, 1 error handler</p>
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
          <h1>Super important!</h1>
          <h2 className="fragment">…mais</h2>
          <span
            className="fragment"
            role="img"
            aria-label="squirrel"
            style={this.emojiStyle}
          >
            🐿
          </span>
        </Slide>
        <Slide>
          <h2>async/await</h2>
          <pre>
            <code>
              {`
                await asyncFn("🦄")

                // 🌈
              `}
            </code>
          </pre>
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
            <li>Edge 15</li>
            <li>Firefox 52</li>
            <li>Safari 10.1 (iOS 10.3)</li>
          </ul>
          <p>https://caniuse.com/#feat=async-functions</p>
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
          <h2>for, while, …</h2>
          <pre>
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
          <h2>map, reduce, …</h2>
          <pre>
            <code>
              {`
                const emojis = ["awesome", "🦄"]

                emojis.map(async (emoji) => {
                  const result = await asyncFn(emoji)

                  console.info(result)
                })

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
          <h2>Promise!</h2>
          <pre>
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
          <pre>
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
          <h2>error handling</h2>
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
        <Slide>
          <h2>code!</h2>
        </Slide>
        <Slide>https://github.com/Zertz/async</Slide>
      </Slides>
    );
  }
}

export default App;
