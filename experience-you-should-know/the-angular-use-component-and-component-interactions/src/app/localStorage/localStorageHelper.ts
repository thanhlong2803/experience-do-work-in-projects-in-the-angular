export class localStorageHelper {
    static getItem<T>(key: string): T {
        return <T>JSON.parse(localStorage[key] || '{}')
    }

    static setItem(key: string, item: any) {
        localStorage[key] = JSON.stringify(item);
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}