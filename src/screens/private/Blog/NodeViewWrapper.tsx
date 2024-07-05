

const YoutubeNodeView = ({ node }:any) => {
  // Extract the video ID from the node's attributes
  const videoId = node.attrs.videoId;

  // Construct the iframe HTML
  const iframeHtml = `<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/${videoId}" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen 
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>`;

  return (
    <div
      contentEditable={false} // This prevents the iframe from being editable
      className="youtube-iframe"
      dangerouslySetInnerHTML={{ __html: iframeHtml }}
    />
  );
};

export default YoutubeNodeView;
