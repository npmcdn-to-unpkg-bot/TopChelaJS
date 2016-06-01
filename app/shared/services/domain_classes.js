"use strict";
var Multimedia = (function () {
    function Multimedia(url, format, height, width, type, subtype, caption, copyright) {
        this.url = url;
        this.format = format;
        this.height = height;
        this.width = width;
        this.type = type;
        this.subtype = subtype;
        this.caption = caption;
        this.copyright = copyright;
    }
    return Multimedia;
}());
exports.Multimedia = Multimedia;
var TopStory = (function () {
    function TopStory(title, abstract, section, subsection, author) {
        this.title = title;
        this.abstract = abstract;
        this.section = section;
        this.subsection = subsection;
        this.author = author;
    }
    return TopStory;
}());
exports.TopStory = TopStory;
//# sourceMappingURL=domain_classes.js.map