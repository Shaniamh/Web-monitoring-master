import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EwsKafkaComponent } from './ews-kafka/ews-kafka.component';
import { EwsHbaseComponent } from './ews-hbase/ews-hbase.component';
import { WriteCsvComponent } from './write-csv/write-csv.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatTableModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatOptionModule
} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '../../node_modules/@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}	from	'@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';
import { EwsIssueComponent } from './ews-issue/ews-issue.component';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EwsKafkaComponent,
    EwsHbaseComponent,
    WriteCsvComponent,
    FooterComponent,
    EwsIssueComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule,
    FormsModule,
    MatButtonModule, 
    MatCardModule, 
    MatIconModule,
    MatPaginatorModule, 
    MatSelectModule, 
    MatSidenavModule,
    MatSortModule, 
    MatToolbarModule, 
    MatTableModule,
    AppRoutingModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
