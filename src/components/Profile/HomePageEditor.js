import React from "react";
import { useEffect, useState } from "react";
import Editor from "./Editor";
import { useLocalStorage } from "../../components/hooks/UseLocalStorage";
import "./Editor.css";
function HomePageEditor() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    console.log("hello");
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script></html>`);
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);
  const onClearHandler = (language) => {
    console.log("handler");
    switch (language) {
      case "HTML":
        console.log("html");
        setHtml("");
        break;
      case "CSS":
        setCss("");
        break;
      case "JS":
        setJs("");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="pane top-pane">
        <Editor
          langauge="xml"
          nameOfEditor="HTML"
          value={html}
          onChange={setHtml}
          onClear={onClearHandler}
        />
        <Editor
          langauge="css"
          nameOfEditor="CSS"
          value={css}
          onChange={setCss}
          onClear={onClearHandler}
        />
        <Editor
          langauge="javascript"
          nameOfEditor="JS"
          value={js}
          onChange={setJs}
          onClear={onClearHandler}
        />
      </div>
      <div>
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          title="output"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default HomePageEditor;
