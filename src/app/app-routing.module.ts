import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EwsKafkaComponent } from './ews-kafka/ews-kafka.component';
import { EwsHbaseComponent } from './ews-hbase/ews-hbase.component';
import { WriteCsvComponent } from './write-csv/write-csv.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EwsIssueComponent } from './ews-issue/ews-issue.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'beranda', component: HomeComponent},
  {path: 'ews-kafka', component: EwsKafkaComponent},
  {path: 'ews-hbase', component: EwsHbaseComponent},
  {path: 'ews-issue', component: EwsIssueComponent},
  {path: 'write-csv', component: WriteCsvComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
