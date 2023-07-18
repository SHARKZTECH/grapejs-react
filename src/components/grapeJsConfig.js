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


    // ...
    panels: {
      defaults: [
        // ...
        {
          id: 'panel-switcher',
          el: '.panel__switcher',
          buttons: [{
              id: 'show-layers',
              active: true,
              label: 'Layers',
              command: 'show-layers',
              // Once activated disable the possibility to turn it off
              togglable: false,
            }, {
              id: 'show-style',
              active: true,
              label: 'Styles',
              command: 'show-styles',
              togglable: false,
          }],
        }
      ]
    },
    // The Selector Manager allows to assign classes and
    // different states (eg. :hover) on components.
    // Generally, it's used in conjunction with Style Manager
    // but it's not mandatory
    selectorManager: {
      appendTo: '.styles-container'
    },
    styleManager: {
      appendTo: '.styles-container',
      sectors: [{
          name: 'Dimension',
          open: false,
          // Use built-in properties
          buildProps: ['width', 'min-height', 'padding'],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: 'integer',
              name: 'The width', // Label for the property
              property: 'width', // CSS property (if buildProps contains it will be extended)
              units: ['px', '%'], // Units, available only for 'integer' types
              defaults: 'auto', // Default value
              min: 0, // Min value, available only for 'integer' types
            }
          ]
        },{
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Custom Label',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' },
              ],
           }
          ]
        }]
    },
};

export default grapeJsConfig;
