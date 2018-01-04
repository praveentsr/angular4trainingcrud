import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Category } from "./category";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Response } from "@angular/http/";


@Injectable()
export class ProductService{
private productUrl:string='api/products';
private categoriesUrl:string='api/categories';

constructor(private _http:Http){
}

getProducts():Observable<Product[]>{
    return this._http.get(this.productUrl)
        .map(this.extractData)
        .do((data)=>console.log('data: ' +JSON.stringify(data)))
        .catch(this.handleError)
    }

    getCategories():Observable<Category[]>{
        return this._http.get(this.categoriesUrl)
            .map(this.extractData)
            .do((data)=>console.log('data: ' +JSON.stringify(data)))
            .catch(this.handleError)
    }

private  extractData(res:Response)   {
    let body =res.json();
    return body || {};
}
   
private  handleError(error: Response | any) :any  {
    let errMsg :string;
    if(error instanceof Response){
        const body= error.json()|| '';
        const err =body.error || JSON.stringify(body);
        errMsg= `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else{
        errMsg=error.message ? error.message : error.toString();
    }
    
    console.error(errMsg);
    return Observable.throw(errMsg);
}

}