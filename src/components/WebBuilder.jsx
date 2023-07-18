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

        
    // Define commands
    editor.Commands.add('show-layers', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getLayersEl(row) { return row.querySelector('.layers-container') },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });
    editor.Commands.add('show-styles', {
      getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
      getStyleEl(row) { return row.querySelector('.styles-container') },

      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });


    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
    <div className="panel__top">
        <div className="panel__basic-actions"></div>
    </div>
    <div className='editor-row'>
        <div className='editor-canvas'>
          <div id="gjs"></div>
        </div>
        <div className="panel__right">
          <div className="layers-container"></div>
          <div class="styles-container"></div>
        </div>
    </div>
      <div id="blocks"></div>
    </>
  );
}

export default WebBuilder;
