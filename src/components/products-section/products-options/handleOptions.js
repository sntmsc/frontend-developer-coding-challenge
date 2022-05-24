const handleFilter = (category, products) =>{
    if(category !== 'All Products'){
    
        return products.filter(x => x.category === category);
    }
    else {
        return [...products];
    }
}


const sortFunctions = {
    lowest: (filteredProducts)=>[...filteredProducts].sort((a,b) => a.cost - b.cost),
    highest: (filteredProducts)=>[...filteredProducts].sort((a,b) => b.cost - a.cost),
    recent: (filteredProducts)=> filteredProducts 
}

const handleSort = (sort,filteredProducts) =>{
    switch(sort) {
        case 'Lowest Price':
            return sortFunctions.lowest(filteredProducts);
            break;
        case 'Highest Price':
            return sortFunctions.highest(filteredProducts);
            break;
        case 'Most Recent':
            return sortFunctions.recent(filteredProducts);
            break;
    }
}

const handlePagination = (firstIndexOfPage, itemsPerPage, sortedProducts) => [...sortedProducts].splice(firstIndexOfPage,itemsPerPage);

const handleOptions = (objOptions, itemsPerPage, products) =>{

    const filteredProducts = handleFilter(objOptions.filter, products);


    const sortedProducts = handleSort(objOptions.sort, filteredProducts);

    return handlePagination(objOptions.firstIndexOfPage, itemsPerPage, sortedProducts);
}



export default handleOptions