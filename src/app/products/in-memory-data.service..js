"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            {
                "id": 1,
                "name": "pen",
                "price": 35,
                "imageUrl": "app/products/images/pen.jpg",
                "imageHeight": 20,
                "imageWidth": 20,
                "mfg": "27-april-2016",
                "rating": 3.2522,
                "country": 1
            },
            {
                "id": 2,
                "name": "pencil",
                "price": 5,
                "imageUrl": "app/products/images/pencil.png",
                "imageHeight": 20,
                "imageWidth": 20,
                "mfg": "27-april-2015",
                "rating": 4.2533,
                "country": 1
            },
            {
                "id": 3,
                "name": "eraser",
                "price": 5,
                "imageUrl": "app/products/images/eraser.jpg",
                "imageHeight": 20,
                "imageWidth": 20,
                "mfg": "27-april-2017",
                "rating": 4.257,
                "country": 1
            }
        ];
        var customers = [
            {
                "id": 1,
                "name": "prakash",
                "address": "chennai"
            },
            {
                "id": 2,
                "name": "anand",
                "address": "bangalore"
            },
            {
                "id": 3,
                "name": "santosh",
                "address": "hyderabad"
            }
        ];
        var countries = [
            { id: 1, name: "Ind" },
            { id: 2, name: "US" },
            { id: 3, name: "UK" }
        ];
        return { products: products, customers: customers, countries: countries };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map