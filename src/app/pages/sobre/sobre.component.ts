import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit {
  empresa: string = "Izabela Soluções";

  ngOnInit() {
    window.scrollTo(0, 0);  
  }
}
