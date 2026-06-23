import fs from 'fs';

let content = fs.readFileSync('src/data/treatments.ts', 'utf-8');

// We previously added `hasBonus: false,` and `isPromo: false,` blindly.
// Let's replace them properly based on the content of each object.
// We can find each treatment object using a regex that matches `{ id: "...", ... }`
// But it's easier to just match each `hasBonus: false,` and `isPromo: false,` and replace them if the context around them indicates it.

let treatmentBlocks = content.split('id: "');
for (let i = 1; i < treatmentBlocks.length; i++) {
    let block = treatmentBlocks[i];
    
    // We are inside a treatment or treatmentGroup. 
    // Only treatments have "name:" and "durationMonths:".
    if (block.includes('durationMonths:')) {
        let isPromo = block.includes('budgetCategory: "Promoção"') || block.includes('tag: "Promoção"');
        let hasBonus = block.includes('bonus: "');
        
        if (isPromo) {
            block = block.replace(/isPromo:\s*false,/, 'isPromo: true,');
        }
        if (hasBonus) {
            block = block.replace(/hasBonus:\s*false,/, 'hasBonus: true,');
        }
    }
    
    treatmentBlocks[i] = block;
}

let newContent = treatmentBlocks.join('id: "');
fs.writeFileSync('src/data/treatments.ts', newContent);
console.log("treatments.ts updated successfully!");
