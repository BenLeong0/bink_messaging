interface QueryParams {
    [key: string]: string;
}


export default class HttpService {

    API_URL = process.env.REACT_APP_API_URL;


    formatQueryParams(queryParams: QueryParams | undefined): string {
        if (typeof queryParams === "undefined") {
            return '';
        }

        const reducer = (accumulator: string, currValue: string[]) => (
            accumulator + '&' + currValue[0] + '=' + currValue[1]
        );
        const queryString =  Object.entries(queryParams).reduce(reducer, '');
        return '?' + queryString;
    }


    async makeGetRequest(res: string, queryParams?: QueryParams): Promise<any> {
        let url = this.API_URL + res;
        const requestOptions = {
            method: "GET"
        };

        url += this.formatQueryParams(queryParams);

        const data: Response = await fetch(url, requestOptions);
        const resp: any = await data.json();
        return resp;
    }


    async makePostRequest(res: string, body: any): Promise<any> {
        // let { headers } = await this.coreService.getSession();
        const headers: any = {};
        headers["Content-Type"] = "application/json";

        const url = this.API_URL + res;
        const requestOptions = {
            headers,
            method: "POST",
            body: JSON.stringify(body),
        };

        const data: Response = await fetch(url, requestOptions);
        const resp: any = await data.json();
        return resp;
    }


    async makeDeleteRequest(res: string, body: any): Promise<any> {
        // let { headers } = await this.coreService.getSession();
        const headers: any = {};
        headers["Content-Type"] = "application/json";

        const url = this.API_URL + res;
        const requestOptions = {
            headers,
            method: "DELETE",
            body: JSON.stringify(body),
        };

        const data: Response = await fetch(url, requestOptions);
        const resp: any = await data.json();
        return resp;
    }


    async makePatchRequest(res: string, body: any): Promise<any> {
        // let { headers } = await this.coreService.getSession();
        const headers: any = {};
        headers["Content-Type"] = "application/json";

        const url = this.API_URL + res;
        const requestOptions = {
            headers,
            method: "PATCH",
            body: JSON.stringify(body),
        };

        const data: Response = await fetch(url, requestOptions);
        const resp: any = await data.json();
        return resp;
    }
}
