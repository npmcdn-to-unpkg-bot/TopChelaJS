import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {TopStory} from "./domain_classes";
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
                topStories.push(new TopStory(story.title, story.abstract, story.section, story.subsection, story.author));
            })
            return topStories;
        })
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error)
    }
}