import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.breezesoftdrinks.com/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.breezesoftdrinks.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.breezesoftdrinks.com/blog",
      lastModified: new Date(),
    },
     {
      url: "https://www.breezesoftdrinks.com/premium-product",
      lastModified: new Date(),
    },
    {
      url: "https://www.breezesoftdrinks.com/contact",
      lastModified: new Date(),
    },
  ];
}