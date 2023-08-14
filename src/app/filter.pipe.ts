import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, filterMetadata: any): any[] {
        if (!items) return [];
        if (!searchText) {
            filterMetadata.count = items.length;
            return items;
        }

        let filteredItems = items.filter(item => {
            const search = [
                "title",
                "author",
            ]
            return search.some(key => {
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
        });

        filterMetadata.count = filteredItems.length;
        return filteredItems;
    }
}
