export interface BBCBengali {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: "article";
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
