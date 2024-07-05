import { useCallback, useEffect, useState } from 'react';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontSize from './FontSize';
import Typography from '@tiptap/extension-typography'
import './styles.css';
import iFrame from './IFrames'; 
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, ImageIcon, ListIcon, ListOrderedIcon, YoutubeIcon} from 'lucide-react';






const extensions = [
  StarterKit,
  Image,
  iFrame,
  TextStyle,
  Color,
  Typography,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Highlight,
  Image,
  FontSize,
];



const TiptapEdit = ({ data, setData }:any) => {

  





  const [content, setContent] = useState(data);
  const [headingMenuOpen, setHeadingMenuOpen] = useState(false);

  useEffect(() => {
    setContent(data);
  }, [data]);

  const editor:any = useEditor({
    extensions,
    content,
    onUpdate({ editor }) {
      const htmlContent = editor.getHTML();
      setData((prevData:any) => ({ ...prevData, content: htmlContent }));
    },
  });
  const addYouTubeVideo = useCallback(() => {
    const url = window.prompt('Enter YouTube URL'); // You can replace this with a custom link uploader
    const youtubeMatch = url?.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
  
    if (youtubeMatch) {
      const youtubeId = youtubeMatch[1];
      const iframeHTML = `<iframe 
        
        src="https://www.youtube.com/embed/${youtubeId}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>`;
      editor.commands.insertContent(iframeHTML).run();
    } else {
      alert('Invalid YouTube URL');
    }
  }, [editor]);
  
  if (!editor) {
    return null;
  }
  

  

  const toggleHeadingMenu = () => {
    setHeadingMenuOpen(!headingMenuOpen);
  };

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  // const renderContent = (htmlContent:any) => {
  //   return { __html: htmlContent.replace(/<p><\/p>/g, '<p><br></p>').replace(/\n/g, '<br>') };
  // };

  return (
    <div className="">
      <EditorContent editor={editor} className="tiptap w-full border border-border " />

      <BubbleMenu editor={editor} className="bg-white gap-4 outline-none rounded shadow-lg p-2 mt-2 flex flex-wrap">
      <div className="relative inline-block text-left">
          <button type="button" className="btn" onClick={toggleHeadingMenu}>
            H
          </button>
          {headingMenuOpen && (
            <div className="origin-top-right absolute mt-4 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1 z-20" role="none">
                {[1, 2, 3, 4, 5, 6].map((level:any, key:any) => (
                  <button key={key} onClick={() => editor.chain().focus().toggleHeading({ level }).run()} className={`block px-4 py-2 text-sm text-left ${editor.isActive('heading', { level }) ? 'bg-gray-100 text-gray-900' : 'text-primary-foreground'}`} role="menuitem">
                    <p>H{level}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        
        <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
          P
        </button>
        
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
          S
        </button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
          HI
        </button>
        
        
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`btn ${editor.isActive('bold') ? 'font-bold' : ''}`}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`btn ${editor.isActive('italic') ? 'font-bold' : ''}`}>I</button>
        <div className='flex items-center gap-4'>
          <div onClick={() => editor.chain().focus().setColor('#ff8c00').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#ff8c00]"></div>
          <div onClick={() => editor.chain().focus().setColor('#171719').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#171719]"></div>
          <div onClick={() => editor.chain().focus().setColor('#5d193e').run()} className="btn w-5 h-5 rounded-md cursor-pointer bg-[#5d193e]"></div>
        </div>

        <div className=' flex'>
          <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={`btn ${editor.isActive('textAlign', { align: 'left' }) ? 'font-bold' : ''}`}><AlignLeft /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={`btn ${editor.isActive('textAlign', { align: 'center' }) ? 'font-bold' : ''}`}><AlignCenter /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={`btn ${editor.isActive('textAlign', { align: 'right' }) ? 'font-bold' : ''}`}><AlignRight /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={`btn ${editor.isActive('textAlign', { align: 'justify' }) ? 'font-bold' : ''}`}><AlignJustify /></button>

        </div>
        <div className="flex">
          <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`btn ${editor.isActive('bulletList') ? 'font-bold' : ''}`}><ListIcon /></button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`btn ${editor.isActive('orderedList') ? 'font-bold' : ''}`}><ListOrderedIcon /></button>
        </div>

        <button
          onClick={addImage}
          className="btn"
        >
          <ImageIcon/>
        </button>

        <button
          onClick={addYouTubeVideo}
          className="btn"
        >
          <YoutubeIcon/>
        </button>
        
        
        
      </BubbleMenu>

      {/* <div className="tiptap w-full border border-border" dangerouslySetInnerHTML={renderContent(content)} /> */}
    </div>
  );
};

export default TiptapEdit;
