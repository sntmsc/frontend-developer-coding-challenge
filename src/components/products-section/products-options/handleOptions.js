const handleOptions = ({objOptions, products}) =>{
    console.log(products)
    let reorderedProducts;

    const handleFilter = (category, products) =>{
        if(category !== 'All Products'){
        
            reorderedProducts = products.filter(x => x.category === category);
        }
        else {
            reorderedProducts = [...products];
        }
    }

    handleFilter(objOptions.filter, products);

    const sortFunctions = {
        lowest: ()=>{reorderedProducts.sort((a,b) => a.cost - b.cost)},
        highest: ()=>{reorderedProducts.sort((a,b) => b.cost - a.cost)},
        recent: ()=> {reorderedProducts = handleFilter()}
    }

    switch(objOptions.sort) {
        case 'Lowest Price':
            sortFunctions.lowest();
            break;
        case 'Highest Price':
            sortFunctions.highest();
            break;
        case 'Most Recent':
            sortFunctions.recent();
            break;
    }

    return reorderedProducts;

}


export default handleOptions