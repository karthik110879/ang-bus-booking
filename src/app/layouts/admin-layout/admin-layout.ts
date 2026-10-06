import { Component } from '@angular/core';
import { Header } from './header/header'; 
import { RouterOutlet } from '@angular/router';
import { Sidenav } from './sidenav/sidenav';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, RouterOutlet, Sidenav, Footer],
  selector: 'app-admin-layout',
  styleUrl: './admin-layout.css',
  templateUrl: './admin-layout.html',
})
export class AdminLayout {}
