import styles from './styles/main.scss';
import tick from './assets/tick.svg';

const convertRupiah = (numb: number | string) => {
    let safeNumb = '';
    if (typeof numb === 'number') safeNumb = numb.toString();
    else if (typeof numb === 'string') safeNumb = numb;
    const format = safeNumb.split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    return 'Rp ' + convert?.join('.').split('').reverse().join('')
}
const renderTemplate = (data: any[]) => {
    const hasDiscount = false;
    return `
            <style>${styles}</style>
            ${data.map((item, index) => `<div class="${index === 1 ? 'box-popular' : 'box'}">
                ${index === 1 ? '<div class="most-popular">MOST POPULAR</div>' : ''}
                <p class="title"><b>${item.title}</b></p>
                <span class="description">${item.description}</span>
                <div>
                <p class="${hasDiscount ? 'initial-amount-discount' : 'initial-amount'}" ${hasDiscount ? 'style="margin-bottom:8px"' : ""}>${convertRupiah(hasDiscount ? item.initialAmount : item.amount)}</p>
                ${hasDiscount ? `<span class="discount-amount" style="margin-top:0">${convertRupiah(item.amount)}</span>` : ''}
                </div>
                <ul>
                    ${item.checklist.map((desc: string) => `<li class="checklist-list-item"><img src="${tick}" alt="tick" width="24px" height="24px" class="checklist-icon" /> ${desc}</li>`).join('')}
                </ul>
                <a href="https://goakal.com/buy/${item.id}" target="_blank" class="order-btn">Daftar</a>
            </div>`).join('')}
        `;
};

export { renderTemplate };