import { getBlogCategoryByEndpointAction } from "@/actions/blog-category-action";
import LandingBlogCategory from "@/components/primitives/landing-blog-category/landing-blog-category";
import SearchBar from "@/components/primitives/search-bar/search-bar";
import { notFound } from "next/navigation";
import { getPageByEndpointAction } from "@/actions/page-action";
import LandingPageDetail from "@/components/primitives/landing-page-detail/landing-page-detail";
import { Suspense } from "react";
import { Loader } from "@mantine/core";

export default async function DynamicPageContent({ params, searchParams }: { params: Promise<{ endpoint: string }>, searchParams: Promise<{ q?: string; type?: string; destinations?: string }> }) {
  const { endpoint } = await params;
  const queryParams = await searchParams;

  // If endpoint is a blog category, return the blog category page
  const blogCategoryResponse = await getBlogCategoryByEndpointAction(endpoint);
  if (blogCategoryResponse.success && blogCategoryResponse.data) {
    return (
      <>
        <Suspense fallback={<Loader size={64} />}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<Loader size={64} />}>
          <LandingBlogCategory
            category={blogCategoryResponse.data}
            queryParams={{
              q: queryParams.q,
              destinations: queryParams.destinations,
            }}
          />
        </Suspense>
      </>
    );
  }

  // If endpoint is a page, return the page detail page
  const pageResponse = await getPageByEndpointAction(endpoint);
  if (pageResponse.success && pageResponse.data) {
    return (
      <>
        <Suspense fallback={<Loader size={64} />}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<Loader size={64} />}>
          <LandingPageDetail page={pageResponse.data} />
        </Suspense>
      </>
    );
  }

  // Neither found
  notFound();
}