import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://breezesoftdrinks.com/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://breezesoftdrinks.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://breezesoftdrinks.com/blog",
      lastModified: new Date(),
    },
     {
      url: "https://breezesoftdrinks.com/premium-product",
      lastModified: new Date(),
    },
    {
      url: "https://breezesoftdrinks.com/contact",
      lastModified: new Date(),
    },
  ];
}