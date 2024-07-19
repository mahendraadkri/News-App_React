//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    articles = [
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "BBC.com",
        "title": "Kenya police ban protests in Nairobi - BBC.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jeDcyZTN4djUwbm_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3g3MmUzeHY1MG5vLmFtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T06:59:56Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "Senators confront Secret Service director on Republican convention floor - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiUGh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNy8xNy9wb2xpdGljcy9zZW5hdG9ycy1jb25mcm9udC1jaGVhdGxlLXJuYy9pbmRleC5odG1s0gFJaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyNC8wNy8xNy9wb2xpdGljcy9zZW5hdG9ycy1jb25mcm9udC1jaGVhdGxlLXJuYw?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T06:55:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "Emmy nominations 2024: ‘The Bear’ sets new record for comedies - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiTWh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNy8xNy9lbnRlcnRhaW5tZW50L2VtbXktbm9taW5hdGlvbnMtMjAyNC9pbmRleC5odG1s0gFGaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyNC8wNy8xNy9lbnRlcnRhaW5tZW50L2VtbXktbm9taW5hdGlvbnMtMjAyNA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T06:35:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNBC",
        "title": "European markets open higher ahead of ECB rate decision - CNBC",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDcvMTgvZXVyb3BlYW4tbWFya2V0cy1zZXQtdG8tb3Blbi1oaWdoZXItYWhlYWQtb2YtZWNiLXJhdGUtZGVjaXNpb24uaHRtbNIBZ2h0dHBzOi8vd3d3LmNuYmMuY29tL2FtcC8yMDI0LzA3LzE4L2V1cm9wZWFuLW1hcmtldHMtc2V0LXRvLW9wZW4taGlnaGVyLWFoZWFkLW9mLWVjYi1yYXRlLWRlY2lzaW9uLmh0bWw?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T06:24:33Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Yahoo Finance",
        "title": "TSMC, Tokyo Electron Lead Tech Selloff in Asia on Trade Angst - Yahoo Finance",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy90c21jLXRva3lvLWVsZWN0cm9uLWxlYWQtdGVjaC0wMjQyNTYyMjQuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T05:54:51Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Financial Times",
        "title": "JD Vance proclaims ‘America first’ as Republicans embrace economic populism - Financial Times",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzE4ODJkODBjLTQ4MzUtNDM5Ny1iOTFmLTUyMTgxNTZjMzI2OdIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T05:26:15Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "Trump triumphant as Biden descends into a deepening crisis - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiTGh0dHBzOi8vd3d3LmNubi5jb20vMjAyNC8wNy8xOC9wb2xpdGljcy90cnVtcC1iaWRlbi1hbmFseXNpcy0yMDI0L2luZGV4Lmh0bWzSAUVodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDI0LzA3LzE4L3BvbGl0aWNzL3RydW1wLWJpZGVuLWFuYWx5c2lzLTIwMjQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T05:05:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "BBC.com",
        "title": "Biden tests positive for Covid, White House says - BBC.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jdjJnajgzMTRucW_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3YyZ2o4MzE0bnFvLmFtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T04:40:42Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "WPTZ",
        "title": "At least five tornadoes confirmed by radar in New York - WPTZ",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3Lm15bmJjNS5jb20vYXJ0aWNsZS9hdC1sZWFzdC1maXZlLXRvcm5hZG9lcy1jb25maXJtZWQtYnktcmFkYXItaW4tbmV3LXlvcmsvNjE2Mjc0MzfSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:57:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "POLITICO",
        "title": "Pelosi told Biden: You’re dragging down Democrats - POLITICO",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiVmh0dHBzOi8vd3d3LnBvbGl0aWNvLmNvbS9uZXdzLzIwMjQvMDcvMTcvcGVsb3NpLWJpZGVuLWRyYWdnaW5nLWRvd24tZGVtb2NyYXRzLTAwMTY5MzE30gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:56:22Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Daily Beast",
        "title": "Trump’s Granddaughter Kai Makes RNC Debut: Praises ‘Normal Grandpa’ - The Daily Beast",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LnRoZWRhaWx5YmVhc3QuY29tL3RydW1wcy1ncmFuZGRhdWdodGVyLWthaS1tYWtlcy1ybmMtZGVidXQtcHJhaXNlcy1ub3JtYWwtZ3JhbmRwYdIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:38:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Wall Street Journal",
        "title": "Rep. Adam Schiff Says Biden Should Leave Presidential Race - The Wall Street Journal",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMikgFodHRwczovL3d3dy53c2ouY29tL2xpdmVjb3ZlcmFnZS90cnVtcC1iaWRlbi1ybmMtZWxlY3Rpb24tMjAyNC9jYXJkL3JlcC1hZGFtLXNjaGlmZi1zYXlzLWJpZGVuLXNob3VsZC1sZWF2ZS1wcmVzaWRlbnRpYWwtcmFjZS1oSjJ2cTdTUmhadXRpS0V6RjVqZtIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:27:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Associated Press",
        "title": "Caitlin Clark breaks WNBA’s game assists record with 19 in Fever’s loss to Wings - The Associated Press",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL2NhaXRsaW4tY2xhcmstYXNzaXN0LXJlY29yZC13bmJhLWNmOTMxMjg0NWRmZDA4ZjZmZWFiMTBiN2RhMWRjNDEw0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:15:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CBS Sports",
        "title": "2024 Open Championship picks, field, predictions, odds: Golf expert high on Brooks Koepka at Royal Troon - CBS Sports",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL2dvbGYvbmV3cy8yMDI0LW9wZW4tY2hhbXBpb25zaGlwLXBpY2tzLWZpZWxkLXByZWRpY3Rpb25zLW9kZHMtZ29sZi1leHBlcnQtaGlnaC1vbi1icm9va3Mta29lcGthLWF0LXJveWFsLXRyb29uL9IBjQFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL2dvbGYvbmV3cy8yMDI0LW9wZW4tY2hhbXBpb25zaGlwLXBpY2tzLWZpZWxkLXByZWRpY3Rpb25zLW9kZHMtZ29sZi1leHBlcnQtaGlnaC1vbi1icm9va3Mta29lcGthLWF0LXJveWFsLXRyb29uL2FtcC8?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:11:43Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Page Six",
        "title": "Angelina Jolie asks Brad Pitt to ‘end the fighting’ and drop his winery lawsuit against her - Page Six",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMihwFodHRwczovL3BhZ2VzaXguY29tLzIwMjQvMDcvMTcvZW50ZXJ0YWlubWVudC9hbmdlbGluYS1qb2xpZS1hc2tzLWJyYWQtcGl0dC10by1lbmQtdGhlLWZpZ2h0aW5nLWFuZC1kcm9wLWhpcy13aW5lcnktbGF3c3VpdC1hZ2FpbnN0LWhlci_SAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T03:04:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "USA TODAY",
        "title": "Cavan Sullivan becomes youngest in US major sports to make pro debut - USA TODAY",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9zcG9ydHMvc29jY2VyLzIwMjQvMDcvMTcvY2F2YW4tc3VsbGl2YW4teW91bmdlc3QtbWxzLXBsYXllci83NDQ0NjQxMzAwNy_SAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T02:48:45Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "SpaceNews",
        "title": "NASA cancels VIPER lunar rover - SpaceNews",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiNWh0dHBzOi8vc3BhY2VuZXdzLmNvbS9uYXNhLWNhbmNlbHMtdmlwZXItbHVuYXItcm92ZXIv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T02:37:53Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "BBC.com",
        "title": "Trump shooter seen as threat before attack, was lost in crowd - BBC.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jNTF5ZGc3OTJnZ2_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvYzUxeWRnNzkyZ2dvLmFtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T00:51:58Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "San Francisco Chronicle",
        "title": "Surging California wastewater readings signal ‘very high’ COVID levels - San Francisco Chronicle",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnNmY2hyb25pY2xlLmNvbS9oZWFsdGgvYXJ0aWNsZS9zdXJnaW5nLWNhbGlmb3JuaWEtd2FzdGV3YXRlci1yZWFkaW5ncy1zaWduYWwtMTk1NzgwNTAucGhw0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T00:50:59Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Washington Post",
        "title": "King’s Speech and parliamentary pomp mark major power shift in U.K. - The Washington Post",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS93b3JsZC8yMDI0LzA3LzE3L2tpbmdzLXNwZWVjaC1sYWJvdXItZ292ZXJubWVudC1vcGVuaW5nLXBhcmxpYW1lbnQv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-18T00:35:40Z",
        "content": null
      }
    ]
  
  constructor(){
    super();
    console.log("Hello I am a Constructor from news Component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey -Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydescription" imageUrl=""/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydescription"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydescription"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
