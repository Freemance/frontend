export default interface ISEOTypes {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  twitter?: Twitter;
}
interface OpenGraph {
  url?: string;
  title?: string;
  description?: string;
  images?: OpenGraphImages;
  siteName?: string;
  type?: string;
}
interface OpenGraphImages {
  url?: string;
  alt?: string;
}
interface Twitter {
  handle?: string;
  site?: string;
  cardType?: string;
}
