import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// This would be your WordPress GraphQL client in production
// import { client } from './client';
// import { GET_ALL_PRODUCTS, GET_ALL_POSTS } from './queries';

const domain = 'https://riklabel.com';

interface SitemapLink {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

/**
 * Generate a dynamic sitemap based on your pages and WordPress content
 */
async function generateSitemap(): Promise<void> {
  // Define your sitemap stream
  const links: SitemapLink[] = [];
  
  try {
    // Get all static pages
    const pages = await globby([
      'src/app/**/page.tsx',
      '!src/app/**/[*]/**/page.tsx', // Exclude dynamic routes
      '!src/app/api',
    ]);
    
    // Add static pages to the sitemap
    pages.forEach((page: string) => {
      // Convert the page path to a URL route
      const path = page
        .replace('src/app', '')
        .replace('/page.tsx', '')
        .replace('/index', '');
      
      // Skip certain paths if needed
      if (path.includes('api') || path.includes('_')) {
        return;
      }
      
      // Add the page to links
      links.push({
        url: path || '/',
        changefreq: path === '/' ? 'daily' : 'weekly',
        priority: path === '/' ? 1.0 : 0.8,
      });
    });
    
    // In production, you would fetch dynamic pages from WordPress
    // For example:
    /*
    // Get all products from WordPress
    const { data: productData } = await client.query({
      query: GET_ALL_PRODUCTS,
    });
    
    // Add product pages to the sitemap
    productData.products.nodes.forEach((product) => {
      links.push({
        url: `/products/${product.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
      });
    });
    
    // Get all blog posts from WordPress
    const { data: postData } = await client.query({
      query: GET_ALL_POSTS,
    });
    
    // Add blog post pages to the sitemap
    postData.posts.nodes.forEach((post) => {
      links.push({
        url: `/blog/${post.slug}`,
        changefreq: 'monthly',
        priority: 0.6,
      });
    });
    */
    
    // For demonstration, we're adding mock product pages
    const mockProductSlugs = [
      'category-1',
      'category-2',
      'category-3',
      'category-4',
      'category-5',
      'category-6',
    ];
    
    // Add mock product pages
    mockProductSlugs.forEach((slug) => {
      links.push({
        url: `/products/${slug}`,
        changefreq: 'weekly',
        priority: 0.7,
      });
    });
    
    // Generate the XML sitemap
    const stream = new SitemapStream({ hostname: domain });
    const sitemapData = await streamToPromise(
      Readable.from(links).pipe(stream)
    );
    
    // Format the XML
    const formatted = await prettier.format(sitemapData.toString(), {
      parser: 'html',
    });
    
    // Write the sitemap to the public directory
    writeFileSync('public/sitemap.xml', formatted);
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

export default generateSitemap;