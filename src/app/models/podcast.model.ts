import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/localStorage-service.service';
import { ApiserviceService } from '../services/api-service.service';

@Injectable({
    providedIn: 'root'
})

export class Podcast {

    localStorage: LocalStorageService = new LocalStorageService();
    podcasts: any;
    i: any;

    image: any;
    title: any;
    description: any;
    author: any;
    detail: any;

    constructor() { }

    setPodcast(image: string, title: string, description: string, author: string, detail: string): void {
        this.image = image;
        this.title = title;
        this.description = description;
        this.author = author;
        this.detail = detail;
    }

    getPodcast() {
        return this;
    }
    
    find(id: string) {
        this.podcasts = this.localStorage.getWithExpiry('podcasts');

        if (this.podcasts === null) {
            return false;
        }

        this.podcasts = Object.values(this.podcasts).filter(item => {
            const search = ['detail'];
            return search.some(key => {
                this.i = item;
                return String(this.i[key]).toLowerCase().includes(id);
            });
        });

        return this.podcasts[0];
    }
}