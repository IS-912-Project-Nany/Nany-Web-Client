import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
})
export class EmpresasComponent implements OnInit {
  companies = [
    {
      name: 'Little Caesars',
      logo: '../../assets/img/companies/empresa-little-caesars.svg',
    },
    {
      name: 'Bigos',
      logo: '../../assets/img/companies/empresa-bigos.jpg',
    },
    {
      name: 'Pizza Hut',
      logo: '../../assets/img/companies/empresa-pizza-hut.svg',
    },
    {
      name: 'Pollo Campero',
      logo: '../../assets/img/companies/empresa-Pollo-Capero-logo.png',
    },
    {
      name: 'KFC',
      logo: '../../assets/img/companies/empresa-kfc.png',
    },
    {
      name: "Wendy's",
      logo: '../../assets/img/companies/empresa-wendys.jpg',
    },
    {
      name: 'Popeyes',
      logo: '../../assets/img/companies/empresa-Popeyes.png',
    },
    {
      name: 'McDonalds',
      logo: '../../assets/img/companies/empresa-McDonalds.png',
    },
    {
      name: 'Burger King',
      logo: '../../assets/img/companies/empresa-Burger-King-Logo.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
