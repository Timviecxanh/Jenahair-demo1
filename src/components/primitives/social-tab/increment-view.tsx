'use client';

import { useEffect } from 'react';
import { incrementBlogViewAction } from '@/actions/blog-action';

interface IncrementViewProps {
  blogId?: string;
}

export default function IncrementView({ blogId }: IncrementViewProps) {
  useEffect(() => {
    const incrementView = async () => {
      try {
        if (blogId) {
          await incrementBlogViewAction(blogId);
        }
      } catch (error) {
        // Silently fail - view increment is not critical
        console.error('Failed to increment view:', error);
      }
    };

    incrementView();
  }, [blogId]);

  return null;
}
