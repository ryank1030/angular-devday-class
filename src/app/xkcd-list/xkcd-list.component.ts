import { Component, OnInit } from '@angular/core';
import { XkcdService } from '../services/xkcd.service';
import { Comic } from '../models/comic';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-xkcd-list',
  templateUrl: './xkcd-list.component.html',
  styleUrls: ['./xkcd-list.component.scss']
})
export class XkcdListComponent implements OnInit {

  filter: string = '';
  filteredComics: Comic[] = [];
  private comics: Comic[] = [];

  constructor(private xkcdService: XkcdService, private router: Router) {
    this.xkcdService.findComics().subscribe(comics => {
      this.comics = comics;
      this.doFilter();
    });
  }

  ngOnInit() {
  }

  onSelectComic(comic: Comic) {
    this.router.navigateByUrl('/xkcd/' + comic.num);
  }

  doFilter() {
    this.filteredComics = this.comics.filter(comic => comic.title.toLowerCase().includes(this.filter.toLowerCase()))
  }

  onChangeFilter() {
    this.doFilter();
  }

}
