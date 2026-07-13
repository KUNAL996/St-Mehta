import { Component } from '@angular/core';
import { Footer } from '../../../core/modules/footer/footer';

interface Trustee {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-management',
  imports: [Footer],
  templateUrl: './management.html',
  styleUrl: './management.css'
})
export class Management {
  trustees: Trustee[] = [
    {
      name: 'Smt. Meena A. Khetani',
      role: 'Managing Trustee & Honorary Secretary',
      image: 'assets/trustees/Meena Khetani.png'
    },
    {
      name: 'Shri. Chirag Sheth',
      role: 'Trustee',
      image: 'assets/trustees/Chirag Sheth.png'
    },
    {
      name: 'Shri. Abhay Khetani',
      role: 'Trustee',
      image: 'assets/trustees/Abhay-Khetani.png'
    },
    {
      name: 'Shri. Ashwinbhai Mehta',
      role: 'Trustee',
      image: 'assets/trustees/Ashwinbhai Mehta.png'
    },
    {
      name: 'Shri. Sharadbhai T. Mehta',
      role: 'Trustee',
      image: 'assets/trustees/Sharadbhai T. Mehta.png'
    },
    {
      name: 'Shri Nisheeth Vasa',
      role: 'Trustee',
      image: 'assets/trustees/Nisheethbhai-Vasa.png'
    },
    {
      name: 'Shri. Piyush Avlani',
      role: 'Trustee',
      image: 'assets/trustees/Piyushbhai-Avlani.png'
    },
    {
      name: 'Shri. Atulbhai Boda',
      role: 'Trustee',
      image: 'assets/trustees/Atulbhai Boda.png'
    },
    {
      name: 'Shri. Rajul Parekh',
      role: 'Trustee',
      image: 'assets/trustees/Rajulbhai-Parekh.png'
    },
    {
      name: 'Shri. Darshan K.Koticha',
      role: 'Trustee',
      image: 'assets/trustees/Darshanbhai-K-Koticha.png'
    },
    {
      name: 'Smt. Bijalben S. Doshi',
      role: 'Trustee',
      image: 'assets/trustees/Bijalben-Doshi.png'
    },
    {
      name: 'Shri. Bhavesh. C.Vora',
      role: 'Trustee',
      image: 'assets/trustees/Bhavesh.C.Vora.png'
    }
  ];
}
