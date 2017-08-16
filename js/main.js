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

const formData = localStorage.dati ? JSON.parse(localStorage.dati) : {done:true, title: "ciccio bello"};

const log = (type) => console.log.bind(console, type);

const onSubmit = ({formData}) => localStorage.dati = JSON.stringify(formData);

const uiSchema = {
  attachment: {
    "ui:options":  {
      orderable: true,
          addable: true,
          removable: true

    }
  }
}

render((
  <Form schema={schema}
        formData={formData}
        onChange={log("changed")}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onError={log("errors")} />
), document.getElementById("app"));



