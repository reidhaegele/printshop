import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];