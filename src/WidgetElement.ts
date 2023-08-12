import { setupFontFaces } from './setupFonts';
import { renderTemplate } from './widget.template';

export const WidgetElement = () => {
    class WidgetElement extends HTMLElement {
        constructor() {
            super();
            setupFontFaces();
            this.shadowDocument = this.attachShadow({ mode: 'open' });
        }

        private shadowDocument: ShadowRoot;

        private appendShadowDOMWithData = (): void => {
            const template = document.createElement('template');
            template.innerHTML = renderTemplate();
            this.shadowDocument?.appendChild(template.content.cloneNode(true));
        };

        connectedCallback(): void {
            // const template = document.createElement('template');
            // template.innerHTML = '<p>Hello world</p>';
            // this.shadowDocument?.appendChild(template.content.cloneNode(true));

            this.appendShadowDOMWithData();
        }
    }

    return WidgetElement;
};
