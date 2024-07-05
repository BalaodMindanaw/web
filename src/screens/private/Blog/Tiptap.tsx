import { useEffect, useState } from 'react';
import { useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';

import FontSize from './FontSize';
import './styles.css';

// Define your extension array
const extensions:any = [
  StarterKit,
  TextStyle,
  Color,
  TextAlign.configure({
    types: ['heading', 'paragraph'],

  }),
  FontSize, // Add the FontSize extension
];

 const Tiptap = ({con}:any) => {
  const [_selectedFontSize, setSelectedFontSize] = useState(16);
  const [content, setContent] = useState(con);
  // const [fontSizeMenuOpen, setFontSizeMenuOpen] = useState(false);
  // const [headingMenuOpen, setHeadingMenuOpen] = useState(false);

  useEffect(()=>{
    setContent(`${con}`)


  },[con])

  const editor:any = useEditor({
    extensions,
    content,
    onUpdate({ editor }) {
      console.log(editor.getHTML())
      setContent(editor.getHTML());
      const attributes = editor.getAttributes('textStyle');
      setSelectedFontSize(attributes.fontSize || 16);
    }
  });

  if (!editor) {
    return null;
  }

  const renderContent = (htmlContent:any) => {
   // Assuming selectedFontSize is a number
    return { __html: htmlContent.replace(/<p><\/p>/g, '<p><br></p>').replace(/\n/g, '<br>').replace(/<p>/g, `<p>`) };
  };

  // const handleFontSizeChange = (size: any) => {
  //   editor.chain().focus().setFontSize(size).run();
  //   setSelectedFontSize(size);
  //   setFontSizeMenuOpen(false);
  // };

  // const toggleFontSizeMenu = () => {
  //   setFontSizeMenuOpen(!fontSizeMenuOpen);
  //   setHeadingMenuOpen(false); // Close the heading menu if it's open
  // };

  // const toggleHeadingMenu = () => {
  //   setHeadingMenuOpen(!headingMenuOpen);
  //   setFontSizeMenuOpen(false); // Close the font size menu if it's open
  // };

  return (
    <div className="">
      {/* <EditorContent editor={editor} className="tiptap text-w  " /> */}

      {/* <BubbleMenu editor={editor} className="bg-white gap-4 outline-none rounded shadow-lg p-2 mt-2 flex flex-wrap">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`btn ${editor.isActive('bold') ? 'font-bold' : ''}`}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`btn ${editor.isActive('italic') ? 'font-bold' : ''}`}>I</button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="btn"><Eraser /></button>
        <button onClick={() => editor.chain().focus().clearNodes().run()} className="btn"><XSquare /></button>
        <div className=' flex items-center gap-4'>
          <div onClick={() => editor.chain().focus().setColor('#ff8c00').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#ff8c00]"></div>
          <div onClick={() => editor.chain().focus().setColor('#171719').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#171719]"></div>
        <div onClick={() => editor.chain().focus().setColor('#171719').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#171719]"></div>
        <div onClick={() => editor.chain().focus().setColor('#5d193e').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#5d193e]"></div>
        </div>
        
        
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={`btn ${editor.isActive('textAlign', { align: 'left' }) ? 'font-bold' : ''}`}><AlignLeft /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={`btn ${editor.isActive('textAlign', { align: 'center' }) ? 'font-bold' : ''}`}><AlignCenter /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={`btn ${editor.isActive('textAlign', { align: 'right' }) ? 'font-bold' : ''}`}><AlignRight /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={`btn ${editor.isActive('textAlign', { align: 'justify' }) ? 'font-bold' : ''}`}><AlignJustify /></button>

        <div className="relative inline-block text-left">
          <button type="button" className="btn" onClick={toggleFontSizeMenu}>
            Size {selectedFontSize}
          </button>
          {fontSizeMenuOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1 z-20" role="none">
                {[8, 12, 16, 18, 20, 24, 26, 30].map((size) => (
                  <button key={size} onClick={() => handleFontSizeChange(size)} className={`block px-4 py-2 text-sm w-10 text-left ${selectedFontSize === size ? 'bg-gray-100 text-gray-900' : 'text-primary-foreground'}`} role="menuitem">
                    <p>{size}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative inline-block text-left">
          <button type="button" className="btn" onClick={toggleHeadingMenu}>
            Headings
          </button>
          {headingMenuOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1 z-20" role="none">
                {[1, 2, 3, 4, 5, 6].map((level:any,key:any) => (
                  <button key={key} onClick={() => editor.chain().focus().toggleHeading({ level }).run()} className={`block px-4 py-2 text-sm text-left ${editor.isActive('heading', { level }) ? 'bg-gray-100 text-gray-900' : 'text-primary-foreground'}`} role="menuitem">
                    <p>H{level}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </BubbleMenu> */}

      <div className="tiptap outline-none " dangerouslySetInnerHTML={renderContent(content)} />
    </div>
  );
};

export default Tiptap;
