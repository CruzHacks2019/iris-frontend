import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

const faceUrl = `${environment.apiUrl}/update_azure_db`;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  new_face(name: string, relation: string, notes: string, file: File) {
    this.getBase64(file).then(
      b64file => {
        console.log(b64file);
        this.http.post<any>(`${faceUrl}`, {name: name, relation: relation, notes: notes, file: b64file})
          .subscribe(
            resp => console.log(resp)
          );
      }
    );
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
