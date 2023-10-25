import { renderTemplate } from './widget.template';

export const PricesWidget = (data: any[]) => {
    class PricesWidget extends HTMLElement {
        private shadowDocument: ShadowRoot;

        constructor() {
            super();
            this.shadowDocument = this.attachShadow({ mode: 'open' });
            this.render();
        }

        connectedCallback(): void {
            this.render();
        }

        render(): void {
            this.shadowDocument.innerHTML = "";
            const template = document.createElement('template');
            template.innerHTML = renderTemplate(data);
            this.shadowDocument.appendChild(template.content.cloneNode(true));
        }

        updateData(newData: any[]): void {
            data = newData;
            this.render();
        }
    }

    return PricesWidget;
};
