import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let products = [ {
            "id":1,
            "name":"pen",
            "price":25,
            "imageUrl":"assets/pen.jpg",
            "imageHeight":75,
            "imageWidth":75,
            "mfg":"01-february-2017",
            "rating":3.5462,
            "categoryId":1
        },
        {
            "id":2,
            "name":'pencil',
            "price":10,
            "imageUrl":"assets/pencil.jpg",
            "imageHeight":75,
            "imageWidth":75,
            "mfg":"01-january-2017",
            "rating":4.5462,
            "categoryId":1
        },
        {
            "id":3,
            "name":'eraser',
            "price":5,
            "imageUrl":"assets/eraser.jpg",
            "imageHeight":75,
            "imageWidth":75,
            "mfg":"01-march-2017",
            "rating":5.5462,
            "categoryId":1
        },
        {
            "id":4,
            "name":'mouse',
            "price":500,
            "imageUrl":"assets/mouse.jpg",
            "imageHeight":75,
            "imageWidth":75,
            "mfg":"01-august-2017",
            "rating":8.5462,
            "categoryId":2
        }
    ];
    let categories=[
        {"id":1,"category":"stationery"},
        {"id":2,"category":"electronics"},
        {"id":3,"category":"pharmacy"},
    ];
    return {products,categories};
    }
}