import { Extension } from '@tiptap/core'

const FontSize = Extension.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => ({
              fontSize: element.style.fontSize.replace('px', ''),
            }),
            renderHTML: attributes => {
              if (!attributes.fontSize) {
                return {}
              }

              return {
                style: `font-size: ${attributes.fontSize}px`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands():any {
    return {
      setFontSize:
        (size:any)=>
        ({ chain }:any) => {
          return chain().setMark('textStyle', { fontSize: size }).run()
        },
    }
  },
})

export default FontSize
