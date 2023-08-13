export interface SketchfabModel {
    results: Result[]
}


interface Result {
    name: string
    embedUrl: string
    categories:string
    description:string
}