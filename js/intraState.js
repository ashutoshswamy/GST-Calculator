function intraState() {
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
    const SGST = (2.5 / 100) * sellingPrice;
    const CGST = (2.5 / 100) * sellingPrice;
    const bill = sellingPrice + SGST + CGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>SGST (2.5%) = Rs. ${SGST.toLocaleString()}<br/>CGST (2.5%) = Rs. ${CGST.toLocaleString()}<br/>IGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  } else if (gstPercent == 12) {
    const SGST = (6 / 100) * sellingPrice;
    const CGST = (6 / 100) * sellingPrice;
    const bill = sellingPrice + SGST + CGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>SGST (6%) = Rs. ${SGST.toLocaleString()}<br/>CGST (6%) = Rs. ${CGST.toLocaleString()}<br/>IGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  } else if (gstPercent == 18) {
    const SGST = (2.5 / 100) * sellingPrice;
    const CGST = (2.5 / 100) * sellingPrice;
    const bill = sellingPrice + SGST + CGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>SGST (9%) = Rs. ${SGST.toLocaleString()}<br/>CGST (9%) = Rs. ${CGST.toLocaleString()}<br/>IGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  } else if (gstPercent == 28) {
    const SGST = (2.5 / 100) * sellingPrice;
    const CGST = (2.5 / 100) * sellingPrice;
    const bill = sellingPrice + SGST + CGST;

    resultdiv.innerHTML = `Cost Price = Rs. ${costPrice.toLocaleString()}<br/>Discount % = ${discountPercent}%<br/>GST % = ${gstPercent}%<br/>Selling Price = Rs. ${sellingPrice.toLocaleString()}<br/>SGST (14%) = Rs. ${SGST.toLocaleString()}<br/>CGST (14%) = Rs. ${CGST.toLocaleString()}<br/>IGST = Nil<br/>Amount of Bill = Rs. ${bill.toLocaleString()}`;
  }
}
