import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

interface Receita {
  foto: string;
  autor: string;
  nomeReceita: string;
  descricao: string;
  avaliacao: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, RouterLink],
})
export class HomePage {
  readonly receitas: Receita[] = [
    {
      autor: 'Alan Ryan',
      nomeReceita: 'Pudim de Leite Condensado',
      avaliacao: 5,
      descricao: 'Maravilho e saboroso pudim de leite condensado da família do Alan Ryan.',
      foto: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg'
    },
    {
      autor: 'Aerith Gainsborough',
      nomeReceita: 'Arroz Carreteiro',
      avaliacao: 3.5,
      descricao: 'Suculento arroz com um monte de coisa dentro e que o povo come e se suja todo.',
      foto: 'https://cdn.pixabay.com/photo/2023/12/19/18/56/arroz-carreteiro-8458228_1280.jpg'
    }
  ];

  constructor() {}
}
