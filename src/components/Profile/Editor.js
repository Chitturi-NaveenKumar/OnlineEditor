import React, { useState } from "react";

import "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/closetag";
import "codemirror/mode/css/css";
import HtmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import jsImage from "../../assets/js.png";
import "./Editor.css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ language, nameOfEditor, value, onChange, onClear }) {
  const [iscollapse, setIsCollpase] = useState(false);

  function handleChange(editor, data, value) {
    onChange(value);
  }
  let image;
  if (nameOfEditor === "HTML") {
    image = HtmlImage;
  } else if (nameOfEditor === "CSS") {
    image = cssImage;
  } else if (nameOfEditor === "JS") {
    image = jsImage;
  }
  return (
    <div className={`editor-container ${iscollapse ? "collapsed" : ""} `}>
      <div className="editor-title">
        <div className="logo">
          <img src={image} alt="img" />
          {nameOfEditor}
        </div>

        <div className="btns">
          <button className="clear" onClick={() => onClear(nameOfEditor)}>
            Clear
          </button>
          <button onClick={() => setIsCollpase((prevState) => !prevState)}>
            <FontAwesomeIcon icon={iscollapse ? faExpandAlt : faCompressAlt} />
          </button>
        </div>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "dracula",
          lineNumbers: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
}

export default Editor;
