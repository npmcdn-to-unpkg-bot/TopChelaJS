"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var topstory_service_1 = require("../../shared/services/topstory.service");
var TopStoriesPage = (function () {
    function TopStoriesPage(_topStoryService, page) {
        this._topStoryService = _topStoryService;
        this.page = page;
        this.topStories = [];
        this.story = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    TopStoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Init');
        this.page.actionBarHidden = true;
        this.isLoading = true;
        this._topStoryService.getNews()
            .subscribe(function (loadedStories) {
            console.log(loadedStories);
            loadedStories.forEach(function (storyObject) {
                _this.topStories.unshift(storyObject);
            });
        });
        this.isLoading = false;
        this.listLoaded = true;
    };
    TopStoriesPage = __decorate([
        core_1.Component({
            selector: "topstories",
            templateUrl: "pages/top_stories/top_stories.html",
            styleUrls: ["pages/top_stories/top_stories.css"],
            providers: [topstory_service_1.TopStoryService]
        }), 
        __metadata('design:paramtypes', [topstory_service_1.TopStoryService, page_1.Page])
    ], TopStoriesPage);
    return TopStoriesPage;
}());
exports.TopStoriesPage = TopStoriesPage;
//# sourceMappingURL=top_stories.component.js.map