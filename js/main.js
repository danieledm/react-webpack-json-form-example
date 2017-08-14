import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import '../css/style.css';


const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Titolo", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false},
    attachment: {type: "array", items: { type: "string",  format: "data-url" }, title: "allegato" }
  }
};

const formData = {
  title: "il mio primo task",
  done: true
};

const log = (type) => console.log.bind(console, type);

render((
  <Form schema={schema}
        formData={formData}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));

