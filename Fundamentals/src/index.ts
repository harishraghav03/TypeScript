// In TypeScript, we don't need to anotate the variable, it will auto-detect based on the value
let sales: number = 1_2_3;
let course = 'TypeScript';
let isPublished = true;
let level; // It assumes to be any -> Which kinda represents any kind of value
// level = 1;
// level = 'a'; // We should any as mush as possible

function render(document : any){  // Now we have a compilation error -> we can annotate
    console.log(document);
}