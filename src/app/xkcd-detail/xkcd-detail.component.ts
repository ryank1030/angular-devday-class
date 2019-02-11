import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XkcdService } from '../services/xkcd.service';
import { Comic } from '../models/comic';
import { CompilerFacadeImpl } from '@angular/compiler/src/jit_compiler_facade';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-xkcd-detail',
  templateUrl: './xkcd-detail.component.html',
  styleUrls: ['./xkcd-detail.component.scss']
})
export class XkcdDetailComponent implements OnInit {

  comic: Comic;
  comicId: number;

  constructor(private activatedRoute: ActivatedRoute, private xkcdService: XkcdService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.comicId = params['id'];
      this.loadComicById(params['id'])
    })
   }
   
   private loadComicById(id: number){
     this.xkcdService.getComicById(id).subscribe(comic => { 
       this.comic = comic;})
   }

   next() {
    this.navigate(this.comic.num + 1)
  }

  previous() {
    this.navigate(this.comic.num - 1)
  }

  private navigate(id: number) : void {
    this.router.navigateByUrl("/xkcd/" + id);

  }

  ngOnInit() {
  }

}
