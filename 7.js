function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Alice', age: 30 };
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log('Data fetched:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
