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
  MatTableModule, MatPaginatorModule, MatCardModule, MatSelectModule, MatSortModule, MatOptionModule
} from '@angular/material';
// baes
import { FormsModule } from '../../node_modules/@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}	from	'@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EwsKafkaComponent,
    EwsHbaseComponent,
    WriteCsvComponent,
    FooterComponent
  ],
  imports: [
    //shania
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
    //baes
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
