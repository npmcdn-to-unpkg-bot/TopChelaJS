import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {TopStory, Multimedia} from "./domain_classes";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class TopStoryService {
    constructor(private _http: Http){}

    getNews () {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.get(Config.apiUrl + "?api-key=" + Config.token,{
            headers: headers
        })
        .map(res => res.json())
        .map(data => {
            let topStories = [];
            data.results.forEach((story) => {
                // let item = story.multimedia[1];
                // let multimedia: Multimedia = new Multimedia(item.url, item.format, item.height, item.width, item.type, item.subtype, item.caption, item.copyright);
                // console.log(JSON.stringify(multimedia))
                topStories.push(new TopStory(story.title, story.abstract, story.section, story.subsection, story.author));
            })
            return topStories;
        })
        .catch(this.handleErrors);
    }
    
    // async getNews () {
    //    return new Promise<any>((resolve) => {
    //        
    //    });
    // }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error)
    }
}