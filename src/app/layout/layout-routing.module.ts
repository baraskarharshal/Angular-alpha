import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
              path: '',
              loadChildren: () => import('../features/demo/demo.module').then(m => m.DemoModule),
            },
            {
              path: 'demo2',
              loadChildren: () => import('../features/demo2/demo2.module').then(m => m.Demo2Module),
            }
          ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule {

}