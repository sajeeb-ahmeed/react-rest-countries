const addToDb = (id) => {

    const quantity = localStorage.getItem(id);

    if (quantity) {

        const newItem = parseInt(quantity) + 1;
        localStorage.setItem(id, newItem);
    }
    else {
        localStorage.setItem(id, 1);
    }
}

export { addToDb };