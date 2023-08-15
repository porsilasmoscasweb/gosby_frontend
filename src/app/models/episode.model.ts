import { Injectable } from "@angular/core";
import { LocalStorageService } from "../services/localStorage-service.service";

@Injectable({
    providedIn: 'root'
})

export class Episode {

    localStorage: LocalStorageService = new LocalStorageService();
    episode: any;
    i: any;

    id: any;
    title: any;
    description: any;
    previewUrl: any;
    date: any;
    duration: any;

    constructor() { }

    setEpisode(id: string, title: string, description: string, previewUrl: string, date: string, duration: string): void {
        this.id = id;
        this.title = title;
        this.description = description;
        this.previewUrl = previewUrl;
        this.date = date;
        this.duration = duration;
    }

    getEpisodes() {
        return this;
    }

    find(id: string) {
        this.episode = this.localStorage.getWithExpiry('episode');

        if (this.episode === null) {
            return false;
        }

        this.episode = Object.values(this.episode).filter(item => {
            const search = ['id'];
            return search.some(key => {
                this.i = item;
                return String(this.i[key]).toLowerCase().includes(id);
            });
        });
        
        return this.episode[0];
    }
}