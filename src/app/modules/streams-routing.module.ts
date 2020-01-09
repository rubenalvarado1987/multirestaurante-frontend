import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { StreamsComponent } from '../components/streams/streams.component';
import { AuthGuard } from '../services/auth.guard';
import { CommentsComponent } from '../components/comments/comments.component';
import { PeopleComponent } from '../components/people/people.component';
import { FollowingComponent } from '../components/following/following.component';
import { FollowersComponent } from '../components/followers/followers.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ImagesComponent } from '../components/images/images.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { RestaurantsComponent } from '../components/restaurants/restaurants.component';
import { RestaurantManageComponent } from '../components/restaurant-manage/restaurant-manage.component';
import { CategoryViewComponent } from '../components/category-view/category-view.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { ItemManageComponent } from '../components/item-manage/item-manage.component';
import { ItemsComponent } from '../components/items/items.component';
import { RestaurantInfoComponent } from '../components/restaurant-info/restaurant-info.component';
import { RestaurantEditComponent } from '../components/restaurant-edit/restaurant-edit.component';
import { CategoryEditComponent } from '../components/category-edit/category-edit.component';
import { CategoryInfoComponent } from '../components/category-info/category-info.component';
import { ItemInfoComponent } from '../components/item-info/item-info.component';
import { ItemEditComponent } from '../components/item-edit/item-edit.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { OrderInfoComponent } from '../components/order-info/order-info.component';
import { OrderStatusComponent } from '../components/order-status/order-status.component';

const routes: Routes = [
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:id',
    component: CommentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people',
    component: PeopleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people/following',
    component: FollowingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people/followers',
    component: FollowersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat/:name',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'images/:name',
    component: ImagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':name',
    component: ViewUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurants/all',
    component: RestaurantsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurants/manage',
    component: RestaurantManageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category/manage',
    component: CategoryViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account/password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category/all',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item/all',
    component: ItemsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item/manage',
    component: ItemManageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurant/:id',
    component: RestaurantInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurant-edit/:id',
    component: RestaurantEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category-info/:id',
    component: CategoryInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item-info/:id',
    component: ItemInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item-edit/:id',
    component: ItemEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order/all',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-info/:id',
    component: OrderInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-status/:id',
    component: OrderStatusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'streams'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
