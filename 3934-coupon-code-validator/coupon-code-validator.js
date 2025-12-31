function validateCoupons(codes, businessLines, isActives) {
    const valid = [];
    const order = {electronics: 0, grocery: 1, pharmacy: 2, restaurant: 3};
    
    for (let i = 0; i < codes.length; i++) {
        const code = codes[i];
        const business = businessLines[i];
        const active = isActives[i];
        
        // Check all conditions
        if (!active) continue;
        if (!order.hasOwnProperty(business)) continue;
        if (!code || !/^[a-zA-Z0-9_]+$/.test(code)) continue;
        
        valid.push({code, business, order: order[business]});
    }
    
    valid.sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
    });
    
    return valid.map(v => v.code);
}