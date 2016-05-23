import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {TextField} from "ui/text-field";
import {TopStory} from "../../shared/services/domain_classes";
import {TopStoryService} from "../../shared/services/topstory.service";

@Component({
    selector: "topstories",
    templateUrl: "pages/top_stories/top_stories.html",
    styleUrls: ["pages/top_stories/top_stories.css"],
    providers: [TopStoryService]
})

export class TopStoriesPage implements OnInit {
    topStories: Array<TopStory> = [];
    story: string = "";
    isLoading = false;
    listLoaded = false;

    constructor(private _topStoryService: TopStoryService){}

    ngOnInit() {
        this.isLoading = true;
        this._topStoryService.getNews()
            .subscribe(loadedStories => {
                console.log(loadedStories);
                loadedStories.forEach((storyObject) => {
                    this.topStories.unshift(storyObject);
                });
            });
        this.isLoading = false;
        this.listLoaded = true;
    }
}