export const cardComponentVenta = (data) => {
    const formattedPrice = parseFloat(data.price).toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `
        <div class="card">
            <label>${data.title}</label>
            <label>$${formattedPrice}</label>
        </div>
    `;
};