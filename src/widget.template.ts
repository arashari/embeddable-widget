import styles from './styles/main.scss';
import cross from './assets/cross.svg';
import tick from './assets/tick.svg';

const convertRupiah = (numb: number | string) => {
    const safeNumb = typeof numb === 'number' ? numb.toString() : numb;
    const format = safeNumb.split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    return 'Rp ' + convert?.join('.').split('').reverse().join('') || '';
}

const renderItem = (item: any, index: number) => {
    const hasDiscount = Boolean(item.initialAmount && item.initialAmount !== item.amount);
    const isPopular = false;
    return `
        <div class="${isPopular ? 'box-popular' : 'box'}">
            ${isPopular ? '<div class="most-popular">MOST POPULAR</div>' : ''}
            <p class="title"><b>${item.title}</b></p>
            <span class="description">${item.description}</span>
            <div>
                <p class="${hasDiscount ? 'initial-amount-discount' : 'initial-amount'}" ${hasDiscount ? 'style="margin-bottom:8px"' : ""}>${convertRupiah(item.initialAmount || item.amount)}</p>
                ${hasDiscount ? `<span class="discount-amount" style="margin-top:0">${convertRupiah(item.amount)}</span>` : ''}
            </div>
            <ul>
                ${item.checklist.map((desc: string) => `<li class="checklist-list-item"><img src="${tick}" alt="tick" width="24px" height="24px" class="checklist-icon" /> ${desc}</li>`).join('')}
            </ul>
            <a href="https://goakal.com/buy/${item.id}" target="_blank" class="order-btn">Daftar</a>
            <button class="show-modal-btn" onclick="showModal()"><svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99991 16.125L14.9999 9.875M3.98891 15.7708L2.46891 14.1875C1.84891 13.5417 1.84891 12.4792 2.46891 11.8333L3.98891 10.25C4.24891 9.97917 4.45891 9.44792 4.45891 9.07292V6.83333C4.45891 5.91667 5.17891 5.16667 6.05891 5.16667H8.20891C8.56891 5.16667 9.07891 4.94792 9.33891 4.67708L10.8589 3.09375C11.4789 2.44792 12.4989 2.44792 13.1189 3.09375L14.6389 4.67708C14.8989 4.94792 15.4089 5.16667 15.7689 5.16667H17.9189C18.7989 5.16667 19.5189 5.91667 19.5189 6.83333V9.07292C19.5189 9.44792 19.7289 9.97917 19.9889 10.25L21.5089 11.8333C22.1289 12.4792 22.1289 13.5417 21.5089 14.1875L19.9889 15.7708C19.7289 16.0417 19.5189 16.5729 19.5189 16.9479V19.1875C19.5189 20.1042 18.7989 20.8542 17.9189 20.8542H15.7689C15.4089 20.8542 14.8989 21.0729 14.6389 21.3438L13.1189 22.9271C12.4989 23.5729 11.4789 23.5729 10.8589 22.9271L9.33891 21.3438C9.07891 21.0729 8.56891 20.8542 8.20891 20.8542H6.05891C5.17891 20.8542 4.45891 20.1042 4.45891 19.1875V16.9479C4.45891 16.5625 4.24891 16.0313 3.98891 15.7708Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.4941 15.6048H14.5031M9.49414 10.3965H9.50214" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Add Promo
            </button>
        </div>
    `;
}

const renderTemplate = (data: any[]) => `
    <style>${styles}</style>
    ${data.map((item, index) => renderItem(item, index)).join('')}
    <div class="modal" id="promoModal">
        <div class="modal-content">
            <img src="${cross}" onclick="closeModal()" alt="cross" style="position: absolute; top: 10px; right: 10px; cursor: pointer;" width="24px" height="24px" />
            <div style="justify-content: center; align-items: flex-start; gap: 10px; display: inline-flex; margin-bottom: 32px">
                <div style="color: black; font-size: 24px; font-family: DM Sans; font-weight: 400; line-height: 36px; letter-spacing: 0.70px; word-wrap: break-word">Add Promo</div>
            </div>
            <div style="justify-content: center; display: flex;">
                <input type="text" id="promoCode" placeholder="Kode promo" name="promoCode">
                <button id="submitPromoCode" onclick="submitPromo()" style="width: 180px; padding: 12px; background: #009E3D; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 20px; justify-content: center; align-items: center; display: inline-flex; border: none; cursor: pointer;">
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.98891 15.7708L2.46891 14.1875C1.84891 13.5417 1.84891 12.4792 2.46891 11.8333L3.98891 10.25C4.24891 9.97917 4.45891 9.44792 4.45891 9.07292V6.83333C4.45891 5.91667 5.17891 5.16667 6.05891 5.16667H8.20891C8.56891 5.16667 9.07891 4.94792 9.33891 4.67708L10.8589 3.09375C11.4789 2.44792 12.4989 2.44792 13.1189 3.09375L14.6389 4.67708C14.8989 4.94792 15.4089 5.16667 15.7689 5.16667H17.9189C18.7989 5.16667 19.5189 5.91667 19.5189 6.83333V9.07292C19.5189 9.44792 19.7289 9.97917 19.9889 10.25L21.5089 11.8333C22.1289 12.4792 22.1289 13.5417 21.5089 14.1875L19.9889 15.7708C19.7289 16.0417 19.5189 16.5729 19.5189 16.9479V19.1875C19.5189 20.1042 18.7989 20.8542 17.9189 20.8542H15.7689C15.4089 20.8542 14.8989 21.0729 14.6389 21.3438L13.1189 22.9271C12.4989 23.5729 11.4789 23.5729 10.8589 22.9271L9.33891 21.3438C9.07891 21.0729 8.56891 20.8542 8.20891 20.8542H6.05891C5.17891 20.8542 4.45891 20.1042 4.45891 19.1875V16.9479C4.45891 16.5625 4.24891 16.0313 3.98891 15.7708ZM8.99991 16.125L14.9999 9.875L8.99991 16.125Z" fill="white"/>
                    <path d="M8.99991 16.125L14.9999 9.875M3.98891 15.7708L2.46891 14.1875C1.84891 13.5417 1.84891 12.4792 2.46891 11.8333L3.98891 10.25C4.24891 9.97917 4.45891 9.44792 4.45891 9.07292V6.83333C4.45891 5.91667 5.17891 5.16667 6.05891 5.16667H8.20891C8.56891 5.16667 9.07891 4.94792 9.33891 4.67708L10.8589 3.09375C11.4789 2.44792 12.4989 2.44792 13.1189 3.09375L14.6389 4.67708C14.8989 4.94792 15.4089 5.16667 15.7689 5.16667H17.9189C18.7989 5.16667 19.5189 5.91667 19.5189 6.83333V9.07292C19.5189 9.44792 19.7289 9.97917 19.9889 10.25L21.5089 11.8333C22.1289 12.4792 22.1289 13.5417 21.5089 14.1875L19.9889 15.7708C19.7289 16.0417 19.5189 16.5729 19.5189 16.9479V19.1875C19.5189 20.1042 18.7989 20.8542 17.9189 20.8542H15.7689C15.4089 20.8542 14.8989 21.0729 14.6389 21.3438L13.1189 22.9271C12.4989 23.5729 11.4789 23.5729 10.8589 22.9271L9.33891 21.3438C9.07891 21.0729 8.56891 20.8542 8.20891 20.8542H6.05891C5.17891 20.8542 4.45891 20.1042 4.45891 19.1875V16.9479C4.45891 16.5625 4.24891 16.0313 3.98891 15.7708Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.4941 15.6048H14.5031M9.49414 10.3965H9.50214" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span style="margin-left: 4px; color: #F2F1EE; font-size: 16px; font-family: DM Sans; font-weight: 700; line-height: 24px; letter-spacing: 0.70px; word-wrap: break-word">Apply Promo</span>
                </button>
            </div>
        </div>
    </div>
`;

(window as any).showModal = () => {
    const widgetElement = document.querySelector("goakal-widget");
    const modal = widgetElement?.shadowRoot?.querySelector("#promoModal") as HTMLDivElement | null;

    if (!modal) {
        console.error("Modal not found");
        return;
    }

    modal.style.display = 'block';
};

(window as any).closeModal = async () => {
    const widgetElement = document.querySelector("goakal-widget");
    const modal = widgetElement?.shadowRoot?.querySelector("#promoModal") as HTMLDivElement | null;
    if (modal && modal.style) {
        modal.style.display = 'none';
    }
};

(window as any).submitPromo = async () => {
    const widgetElement = document.querySelector("goakal-widget");
    const promoCodeInput = widgetElement?.shadowRoot?.querySelector("#promoCode") as HTMLInputElement | null;

    if (!promoCodeInput) {
        console.error("Promo code input not found");
        return;
    }
    const code = (window as any).code;

    if (code) {
        console.log("Promo Code:", promoCodeInput.value);

        try {
            const response = await fetch(`https://goakal.com/api/prices/${code}?promo=${promoCodeInput.value}`);
            const data = await response.json();
            console.log(data);
            const widgetElement = document.querySelector('goakal-widget');
            (widgetElement as any).updateData(data);
        } catch (error) {
            console.error("Error fetching prices with promo code:", error);
        }
    }
};

export { renderTemplate };