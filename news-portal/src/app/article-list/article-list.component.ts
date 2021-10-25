import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  title: string = "News Portal";
  articles: any[] = [
    {
        "articleId": 1,
        "articleTitle": "ARTICLE 1",
        "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Pretium quam vulputate dignissim suspendisse in. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam vulputate ut pharetra sit amet aliquam. Ornare arcu dui vivamus arcu felis bibendum ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc vel risus commodo viverra maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet.",
        "isBreaking": false,
      },
      {
        "articleId": 2,
        "articleTitle": "ARTICLE 2",
        "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Pretium quam vulputate dignissim suspendisse in. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam vulputate ut pharetra sit amet aliquam. Ornare arcu dui vivamus arcu felis bibendum ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc vel risus commodo viverra maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet.",
        "isBreaking": true,
      },
      {
        "articleId": 3,
        "articleTitle": "ARTICLE 3",
        "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Pretium quam vulputate dignissim suspendisse in. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam vulputate ut pharetra sit amet aliquam. Ornare arcu dui vivamus arcu felis bibendum ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc vel risus commodo viverra maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet.",
        "isBreaking": false,
      },
      {
        "articleId": 4,
        "articleTitle": "ARTICLE 4",
        "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Pretium quam vulputate dignissim suspendisse in. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam vulputate ut pharetra sit amet aliquam. Ornare arcu dui vivamus arcu felis bibendum ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc vel risus commodo viverra maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet.",
        "isBreaking": true,
      },
      {
        "articleId": 5,
        "articleTitle": "ARTICLE 5",
        "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Pretium quam vulputate dignissim suspendisse in. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam vulputate ut pharetra sit amet aliquam. Ornare arcu dui vivamus arcu felis bibendum ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc vel risus commodo viverra maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet.",
        "isBreaking": false,
      },
      {
        "articleId": 6,
        "articleTitle": "ARTICLE 6",
        "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Pretium quam vulputate dignissim suspendisse in. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam vulputate ut pharetra sit amet aliquam. Ornare arcu dui vivamus arcu felis bibendum ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc vel risus commodo viverra maecenas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet.",
        "isBreaking": true,
      },
  ];

  getArticleColor(article: any) : string {
    if(article.isBreaking === true){
      return "bg-danger";
    }
    return "bg-primary";
  }

  getArticleTitle(article: any) : string{
    let title: string = article.articleTitle;
   
    if(article.isBreaking === true){
      title = "BREAKING: " + title;
    }

    return title;
  }

  hasArticles() : boolean {
    return this.articles != null && this.articles.length > 0;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
