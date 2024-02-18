
// -----------------
function updaTeGrandTotalByUseCoupon(){
    const couponNewOfferString = document.getElementById('coupon-new-str').innerText;
    const couponCoupleString = document.getElementById('coupon-couple').innerText;
    const couponApplyField = document.getElementById('counpon-apply-field').value;
    const currentGrandTotal = getElementValueById('grand-total');
    if(currentGrandTotal < 2000){
        alert('you have already got this coupon');
        return;
    }
    if(couponApplyField === couponNewOfferString){
        const discoutNewOffer = currentGrandTotal * (15 /100);
        const newGrandTotal = currentGrandTotal - discoutNewOffer;
        setValueById('grand-total', newGrandTotal);}
        else if(couponApplyField === couponCoupleString){
            const discountCoupleOffer =currentGrandTotal  * (20 /100);
            const updateGrandTotal = currentGrandTotal - discountCoupleOffer;

            setValueById('grand-total', updateGrandTotal)

        }
        else{
            alert('type right coupon');
            return
        }
    }