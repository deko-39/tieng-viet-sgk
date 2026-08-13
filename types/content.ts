export type ContentKind = "poem" | "paragraph";

export type TagGroup = "textbook" | "format" | "theme" | "audience" | "period";

export type SortOption = "relevance" | "newest" | "title" | "author";

export interface Tag {
  id: string;
  name: string;
  slug: string;
  group: TagGroup;
  description?: string;
}

export interface Textbook {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  grade: string;
  volume: string;
  description: string;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  bio: string;
  hometown?: string;
  born?: number;
  died?: number;
  featured?: boolean;
}

export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface BaseContent {
  id: string;
  slug: string;
  kind: ContentKind;
  title: string;
  authorSlug?: string;
  content: string;
  excerpt: string;
  tags: string[];
  categories: string[];
  grade?: string;
  textbook?: string;
  volume?: string;
  publishedYear?: number;
  source?: string;
  featured?: boolean;
  addedAt: string;
  image?: ContentImage;
}

export interface Poem extends BaseContent {
  kind: "poem";
  meter?: string;
}

export interface Paragraph extends BaseContent {
  kind: "paragraph";
}

export type ContentItem = Poem | Paragraph;

export interface SearchResult {
  kind: ContentKind;
  item: ContentItem;
  score: number;
}

export interface CollectionFilters {
  q: string;
  tags: string[];
  categories: string[];
  authors: string[];
  sort: SortOption;
  page: number;
}

export interface ContentRepository {
  getPoems(): Promise<Poem[]>;
  getPoemBySlug(slug: string): Promise<Poem | null>;
  getParagraphs(): Promise<Paragraph[]>;
  getParagraphBySlug(slug: string): Promise<Paragraph | null>;
  getAuthors(): Promise<Author[]>;
  getAuthorBySlug(slug: string): Promise<Author | null>;
  getTags(): Promise<Tag[]>;
  getTagBySlug(slug: string): Promise<Tag | null>;
  getTextbooks(): Promise<Textbook[]>;
  getAllContent(): Promise<ContentItem[]>;
  search(query: string): Promise<SearchResult[]>;
}
