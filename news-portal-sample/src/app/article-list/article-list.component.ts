import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any[] = [
    {
      "articleId": 1,
      "articleTitle": "Article 1 Title",
      "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor purus libero, quis volutpat diam bibendum in. Suspendisse maximus venenatis mauris quis eleifend. Proin a lacus id eros sodales facilisis id sit amet erat. Morbi elit velit, semper quis facilisis quis, tempor ut dolor. Quisque tempor est lobortis sagittis sagittis. Aenean vitae urna at quam volutpat dapibus. Sed nec diam ultricies, volutpat diam in, molestie enim. Nam diam nunc, malesuada id lobortis a, cursus eget neque. Nam ac nisl accumsan, pretium augue id, congue justo. Sed sed nisl blandit lorem scelerisque sagittis. Sed elementum nulla a magna scelerisque, accumsan auctor erat accumsan.",
      "isBreaking": false
    },
    {
      "articleId": 2,
      "articleTitle": "Article 2 Title",
      "articleText": "Nam finibus cursus maximus. Suspendisse auctor placerat quam feugiat maximus. Nullam consectetur mi tortor, et auctor sapien euismod vel. Fusce hendrerit commodo convallis. Aenean odio nunc, aliquet in interdum eu, iaculis ut nisl. Aenean ac nisl sed nisi imperdiet lobortis quis quis lorem. Nunc in vulputate diam. Proin vel fermentum orci. Praesent quis lorem at nisi accumsan posuere scelerisque non neque. Pellentesque posuere dolor in lacus ultrices fringilla. Phasellus vel efficitur purus. Nam nec tortor ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ultrices laoreet dictum. Fusce lacus lorem, varius id leo quis, fringilla varius augue. Nulla sed quam ac quam elementum vulputate ultrices sit amet odio.",
      "isBreaking": true
    },
    {
      "articleId": 3,
      "articleTitle": "Article 3 Title",
      "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor purus libero, quis volutpat diam bibendum in. Suspendisse maximus venenatis mauris quis eleifend. Proin a lacus id eros sodales facilisis id sit amet erat. Morbi elit velit, semper quis facilisis quis, tempor ut dolor. Quisque tempor est lobortis sagittis sagittis. Aenean vitae urna at quam volutpat dapibus. Sed nec diam ultricies, volutpat diam in, molestie enim. Nam diam nunc, malesuada id lobortis a, cursus eget neque. Nam ac nisl accumsan, pretium augue id, congue justo. Sed sed nisl blandit lorem scelerisque sagittis. Sed elementum nulla a magna scelerisque, accumsan auctor erat accumsan.",
      "isBreaking": false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
