interface QueryParams {
    [key: string]: string;
}


export default class HttpService {

    // TODO: Get URL etc from redux
    url: string = "localhost";
    stage: string = "/dev";
    API_URL: string = this.url + this.stage;


    constructor() { }


    async makeGetRequest(res: string, queryParams?: QueryParams): Promise<any> {
        let url = this.API_URL + res;
        let requestOptions = {
            method: "GET"
        };

        if (typeof queryParams !== "undefined") {
            let reducer = (accumulator: string, currValue: string[]) => (
                accumulator + '&' + currValue[0] + '=' + currValue[1]
            );
            let queryString =  Object.entries(queryParams).reduce(reducer, '');
            url += '?' + queryString;
        };

        let data: any = await fetch(url, requestOptions);
        let resp: any = await data.json();
        return resp;
    }


    async makePostRequest(res: string, body: any): Promise<any> {
        // let { headers } = await this.coreService.getSession();
        let headers: any = {}
        headers["Content-Type"] = "application/json";

        let url = this.API_URL + res;
        let requestOptions = {
            headers,
            method: "POST",
            body: JSON.stringify(body),
        };

        let data: any = await fetch(url, requestOptions);
        let resp: any = await data.json();
        return resp;
    }


    async makeDeleteRequest(res: string, body: any): Promise<any> {
        // let { headers } = await this.coreService.getSession();
        let headers: any = {}
        headers["Content-Type"] = "application/json";

        let url = this.API_URL + res;
        let requestOptions = {
            headers,
            method: "DELETE",
            body: JSON.stringify(body),
        };

        let data: any = await fetch(url, requestOptions);
        let resp: any = await data.json();
        return resp;
    }


    async makePatchRequest(res: string, body: any): Promise<any> {
        // let { headers } = await this.coreService.getSession();
        let headers: any = {}
        headers["Content-Type"] = "application/json";

        let url = this.API_URL + res;
        let requestOptions = {
            headers,
            method: "PATCH",
            body: JSON.stringify(body),
        };

        let data: any = await fetch(url, requestOptions);
        let resp: any = await data.json();
        return resp;
    }
}
