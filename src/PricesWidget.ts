import { renderTemplate } from './widget.template';

export const PricesWidget = (data: any[]) => {
    class PricesWidget extends HTMLElement {
        private shadowDocument: ShadowRoot;

        constructor() {
            super();
            this.shadowDocument = this.attachShadow({ mode: 'open' });
        }

        connectedCallback(): void {
            const template = document.createElement('template');
            template.innerHTML = renderTemplate(data);
            this.shadowDocument?.appendChild(template.content.cloneNode(true));
        }
    }

    return PricesWidget;
};
