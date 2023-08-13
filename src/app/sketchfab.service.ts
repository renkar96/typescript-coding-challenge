import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SketchfabService {

  constructor(private http: HttpClient) { }

  public getModels(): Observable<any> {
    const customHeaders = {
      'Authorization': 'Token 47ad9ba72fbb4688825f3d2be7e1d91f'
    }

    return this.http.get("https://api.sketchfab.com/v3/models?sort_by=viewCount", { headers: customHeaders })
  }
  public getCategories(): Observable<any> {
    const customHeaders = {
      'Authorization': 'Token 18a401c2c3964bc798ed96be114561d6'
    }
    var url = "https://api.sketchfab.com/v3/categories"

    return this.http.get("https://api.sketchfab.com/v3/categories", { headers: customHeaders })
  }
  public getModelsByTag(tag: string): Observable<any> {
    const customHeaders = {
      'Authorization': 'Token 18a401c2c3964bc798ed96be114561d6'
    }
    var url = "https://api.sketchfab.com/v3/models?sort_by=viewCount&tags=" + tag + "&categories=" + tag

    return this.http.get(url, { headers: customHeaders })
  }
}
