import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    constructor() { }

    public setItem(key: string, data: string): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public setWithExpiry(key: string, value: object) {
        var date = new Date();
        date.setDate(date.getDate() + 1);

        const data = {
            value: value,
            expiry: date.getTime(),
        }

        localStorage.setItem(key, JSON.stringify(data))
    }

    public getItem(key: string) {
        let itemStr = localStorage.getItem(key);

        if (!itemStr) {
            return null
        }

        return JSON.parse(itemStr);
    }

    public getWithExpiry(key: string) {
        const itemStr = localStorage.getItem(key)

        if (!itemStr) {
            return null
        }

        const item = JSON.parse(itemStr)
        const now = new Date()

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key)

            return null
        }

        console.log(key + ' localStorage');

        return item.value
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    public clear() {
        localStorage.clear();
    }

    onClearData() {
        this.clear();
    }
}