import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Post, PostsService} from "./posts.service";
import {delay, Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post>{

  constructor(private postService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post | any {
    return of(this.postService.getById(+route.params['id'])).pipe(delay(1500))
  }

}
