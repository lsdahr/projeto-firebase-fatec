import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-firelist',
  templateUrl: './firelist.component.html',
  styleUrls: ['./firelist.component.css']
})
export class FirelistComponent implements OnInit {
  nome: string;
  idade: number;

  listaRef: AngularFireList <any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private authService: AuthService) { 
    this.listaRef = db.list('lista');
    this.list = this.listaRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    )
  }

  ngOnInit() {

  }

  adc() {
    this.listaRef.push( {
      nome: this.nome,
      idade: this.idade,
      email: this.authService.currentUserEmail
    });
    this.nome = null;
    this.nome = null;
  }

  delete(key: string) {
    this.listaRef.remove(key);
  }

}