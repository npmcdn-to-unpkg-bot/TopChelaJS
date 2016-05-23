"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var domain_classes_1 = require("./domain_classes");
var config_1 = require("../config");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var TopStoryService = (function () {
    function TopStoryService(_http) {
        this._http = _http;
    }
    TopStoryService.prototype.getNews = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(config_1.Config.apiUrl + "?api-key=" + config_1.Config.token, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var topStories = [];
            data.results.forEach(function (story) {
                topStories.push(new domain_classes_1.TopStory(story.title, story.abstract, story.section, story.subsection, story.author));
            });
            return topStories;
        })
            .catch(this.handleErrors);
    };
    TopStoryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    TopStoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TopStoryService);
    return TopStoryService;
}());
exports.TopStoryService = TopStoryService;
//# sourceMappingURL=topstory.service.js.map