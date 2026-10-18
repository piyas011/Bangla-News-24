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
  description: string | null;
  link: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: "article";
  isLive: boolean;
  firstPublished: string;
  lastPublished: string | null;
  source: string;
}
