import 'grapesjs/dist/css/grapes.min.css';

const grapeJsConfig = {
  container: '#gjs',
  height: '500px',
  width: 'auto',
  storageManager: false,
  panels: { defaults: [] },
  blockManager: {
    appendTo: '#blocks',
    blocks: [
      {
        id: 'section',
        label: '<b>Section</b>',
        attributes: { class: 'gjs-block-section' },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      },
      {
        id: 'text',
        label: 'Text',
        content: '<div data-gjs-type="text">Insert your text here</div>',
      },
      {
        id: 'image',
        label: 'Image',
        select: true,
        content: { type: 'image' },
        activate: true,
      },
    ],
  },
  layerManager: {
    appendTo: '.layers-container',
  },
  panels: {
    defaults: [
      {
        id: 'layers',
        el: '.panel__right',
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0,
          cl: 1,
          cr: 0,
          bc: 0,
          keyWidth: 'flex-basis',
        },
      },
    ],
  },
};

export default grapeJsConfig;
