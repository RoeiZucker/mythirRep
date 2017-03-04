import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainPageViewComponent } from './mainPageView/mainPageView.component'
import { InvalidPageComponent } from './Pages/InvalidPage/InvalidPage.component'
import { AboutComponent } from './Pages/About/About.component'
import { ProductComponent } from './Pages/Product/Product.component'
import { StoreComponent } from './Pages/Store/Store.component'
const appRoutes: Routes = [
  {
    path: '',
    component: MainPageViewComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Product',
    component: ProductComponent
  },
  {
    path: 'Store',
    component: StoreComponent
  },
  {
    path: '**',
    component: InvalidPageComponent
  }
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
