import { Component, OnInit } from '@angular/core';
import { VideogamesInterface } from 'src/app/models/videogames.interfaces';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {
public videogame: VideogamesInterface = {
  title: "Titulo",
  gallery: [{
    src: "",
    alt: ""
  }]
}
  constructor() { }

  ngOnInit(): void {
  }

}
