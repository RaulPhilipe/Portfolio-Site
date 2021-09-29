function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `This is a paragraph

**This is Bolded text**

# heading
## heading 2 
### heading 3

> Block Quote!

- list

[This is a link](https://www.freecodecamp.org/)

This is a inline \`<div></div>\`

This is a block of code
\`\`\` 
let x = 1;
let y = x;
let z = x - y;
\`\`\`

![React](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center", id: "subtitle" }, "Enter your Markdown here:"), /*#__PURE__*/


      React.createElement("textarea", {
        className: "form-control",
        id: "editor",
        value: text,
        onChange: this.handleChange })), /*#__PURE__*/



      React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center", id: "subtitle" }, "Result:"), /*#__PURE__*/


      React.createElement("div", {
        className: "previewer",
        dangerouslySetInnerHTML: { __html: markdown },
        id: "preview" })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));