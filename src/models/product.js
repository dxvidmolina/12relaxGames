const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/arrayProductos.json');
const data = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const products = {
    getAll: () => {
        return data;
    },
    findById: (id)=>{
       return  data.find(elem => String(elem.id) === id)
    },
    modifiedAll: (data)=>{
        fs.writeFileSync(productsFilePath, JSON.stringify(data))
    },
    searchByName:(stringToSearch) => {
        return data.filter(elem => elem.name.includes(stringToSearch))
    }
}

module.exports = products;