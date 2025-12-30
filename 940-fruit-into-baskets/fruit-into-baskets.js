var totalFruit = function(fruits) {
    let left = 0, max = 0;
    let basket = new Map();
    
    for (let right = 0; right < fruits.length; right++) {
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);
        
        while (basket.size > 2) {
            basket.set(fruits[left], basket.get(fruits[left]) - 1);
            if (basket.get(fruits[left]) === 0) basket.delete(fruits[left]);
            left++;
        }
        
        max = Math.max(max, right - left + 1);
    }
    
    return max;
};