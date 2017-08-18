import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import '../css/style.css';



const schema = {
  title: "Todos",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Titolo", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false},
    attachment: {type: "array", items: { type: "string",  format: "data-url" }, title: "allegato" }
  }
};

const formData = localStorage.dati ? JSON.parse(localStorage.dati) : {done:true, title: "prova"};

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





import DropzoneComponent from 'react-dropzone-component';

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

var djsConfig = { autoProcessQueue: false }

var eventHandlers = { 
  addedfile: (file) => {console.log(file); return true;} 
}


render(
    <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />,
    document.getElementById('uploader')
);



