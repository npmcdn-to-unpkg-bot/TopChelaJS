export class Multimedia {
    constructor(public url: String, public format: String, public height: Number, public width: Number, public type: String, public subtype: String, public caption: String, public copyright: String){}
}

export class TopStory {
    constructor(public title: String, public abstract: String, public section: String, public subsection: String, public author: String) {}
}