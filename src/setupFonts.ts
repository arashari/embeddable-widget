const FONT_FACE = `@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');`;
  
export const setupFontFaces = () => {
    if (document.querySelector('style[data-description="font-faces"]')) {
      return;
    }
    const style = document.createElement('style');
    style.dataset.description = 'font-faces';
  
    style.appendChild(document.createTextNode(FONT_FACE));
    document.head.appendChild(style);
}