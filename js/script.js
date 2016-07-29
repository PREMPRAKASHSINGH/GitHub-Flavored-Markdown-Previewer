"use strict";

//the EditText component to change/write values
var EditText = React.createClass({
  displayName: "EditText",

  getInitialState: function getInitialState() {
    return { textinput: "" };
  },
  makeChange: function makeChange() {
    this.props.handleUpdate(this.refs.newValue.value);
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-6 col-xs-6" },
      React.createElement(
        "form",
        null,
        React.createElement("textarea", { rows: "25", className: "form-control", ref: "newValue", value: this.props.textvalue, onChange: this.makeChange })
      )
    );
  }
});

//the Output component
var Output = React.createClass({
  displayName: "Output",

  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-6 col-xs-6" },
      React.createElement(
        "h1",
        { className: "output" },
        "Output : "
      ),
      React.createElement("hr", null),
      React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.show } })
    );
  }
});
//the main component page which will have EditText component and Output component as child components
var Page = React.createClass({
  displayName: "Page",

  getInitialState: function getInitialState() {
    return {
      textinput: "# Header h1\n\n## Small heading h2\n\n*This text will be italic*  \n_This will also be italic_\n\n**This text will be bold**  \n__This will also be bold__\n\n_You **can** combine them_  \n\n\n ### As Kanye West said:\n> We're living the future so the present is our past.  \n\n## Lists Ordered and Unordered mixed\n* Item 1 unordered\n* Item 2 unordered\n 1. Item 2a ordered\n 2. Item 2b ordered\n\n## Code block\n ```javascript\nfunction fancyAlert(arg) {\n    if(arg) {\n     $.facebox({div:'#foo'})\n}} ```\n\n [Premprakash Singh](https://www.freecodecamp.com/premprakashsingh)"
    };
  },
  update: function update(textString) {
    this.setState({
      textinput: textString
    });
  },
  render: function render() {
    var mark = marked(this.state.textinput, { sanitize: true });
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "FCC GitHub Markdown Previewer"
      ),
      React.createElement(EditText, { handleUpdate: this.update, textvalue: this.state.textinput }),
      React.createElement(Output, { show: marked(this.state.textinput) })
    );
  }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById("root"));