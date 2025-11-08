
document.addEventListener("DOMContentLoaded", () => {
  // older toggle buttons used to swap text; keep compatibility for other pages
  const buttons = document.querySelectorAll(".toggle");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      // stop propagation only for buttons so clicking elsewhere on the card follows the link
      e.stopPropagation();
      const display = button.nextElementSibling;
      // if price-display contains numeric spans, just toggle show class
      if (display && display.querySelector('.with-price')) {
        display.classList.toggle('show');
        button.textContent = display.classList.contains('show') ? 'Hide Price' : 'Show Price';
        return;
      }
      const withWarranty = button.getAttribute("data-with");
      const withoutWarranty = button.getAttribute("data-without");
      if (display.textContent.includes(withWarranty) || display.textContent.includes(withoutWarranty)) {
        display.textContent = "Click to view price";
      } else {
        display.textContent = `With Warranty: ${withWarranty} | Without: ${withoutWarranty}`;
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card').forEach(card => {
    const base = parseInt(card.getAttribute('data-base') || 0, 10);
    const withoutEl = card.querySelector('.without-price');
    const withEl = card.querySelector('.with-price');
    if (!isNaN(base) && withoutEl && withEl) {
      const withPrice = Math.round(base * 1.4);
      withoutEl.textContent = base.toLocaleString('en-IN');
      withEl.textContent = withPrice.toLocaleString('en-IN');
    }
  });
});
