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
    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`)
              .open();
          },
        }
      ],
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
    <div class="panel__top">
        <div class="panel__basic-actions"></div>
    </div>
      <div id="gjs"></div>
      <div id="blocks"></div>
      <div className="panel__right">
        <div className="layers-container"></div>
      </div>
    </>
  );
}

export default WebBuilder;
