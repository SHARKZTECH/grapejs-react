import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import grapeJsConfig from './grapeJsConfig';

function WebBuilder() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init(grapeJsConfig);

    const h1Component = editor.DomComponents.addComponent({
      tagName: 'h1',
      content: 'Hello World Component!',
    });

    editor.setComponents([h1Component]);

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
      <div id="gjs"></div>
      <div id="blocks"></div>
    </>
  );
}

export default WebBuilder;
