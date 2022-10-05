function interState() {
  const costPrice = document.getElementById("costpriceinput").value;
  const discountPercent = document.getElementById("discountinput").value;
  const gstPercent = document.getElementById("gstinput").value;
  const resultdiv = document.getElementById("resultdiv");

  if (
    gstPercent != 5 ||
    gstPercent != 12 ||
    gstPercent != 18 ||
    gstPercent != 28
  ) {
    resultdiv.innerHTML = "GST % can be only 5%, 12%, 18% or 28%";
  } else if (discountPercent >= 100) {
    resultdiv.innerHTML =
      "You can't keep Discount % greater than or equal to 100";
  } else if (discountPercent < 0) {
    resultdiv.innerHTML = "You can't keep Discount % less than 0";
  }

  const discount = (discountPercent / 100) * costPrice;
  const sellingPrice = costPrice - discount;

  if (gstPercent == 5) {
    const IGST = (5 / 100) * sellingPrice;
    const bill = sellingPrice + IGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>IGST (5%) = Rs. ${IGST.toLocaleString()}<br>SGST = Nil<br/>CGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  } else if (gstPercent == 12) {
    const IGST = (12 / 100) * sellingPrice;
    const bill = sellingPrice + IGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>IGST (12%) = Rs. ${IGST.toLocaleString()}<br>SGST = Nil<br/>CGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  } else if (gstPercent == 18) {
    const IGST = (18 / 100) * sellingPrice;
    const bill = sellingPrice + IGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>IGST (18%) = Rs. ${IGST.toLocaleString()}<br>SGST = Nil<br/>CGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  } else if (gstPercent == 28) {
    const IGST = (28 / 100) * sellingPrice;
    const bill = sellingPrice + IGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>IGST (28%) = Rs. ${IGST.toLocaleString()}<br>SGST = Nil<br/>CGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  }
}
