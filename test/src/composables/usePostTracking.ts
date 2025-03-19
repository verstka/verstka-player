import { ref } from 'vue'

/**
 * Composable for tracking visible posts and updating URL
 * @param options Configuration options
 * @returns Tracking state and methods
 */
export interface PostTrackingOptions {
  /** Array of posts to track */
  posts: any[];
  /** Visibility threshold (0-1) */
  threshold?: number;
  /** Observer root margin */
  rootMargin?: string;
}

/**
 * Composable for tracking visible posts and updating URL
 * @param options Configuration options
 * @returns Tracking state and methods
 */
export function usePostTracking(options: PostTrackingOptions) {
  const visiblePostIndex = ref(0);
  const { posts } = options;

  /**
   * Initialize post tracking with visibility calculations
   * @returns Cleanup function to remove event listeners
   */
  const initTracking = () => {
    let feedItems: Element[] = [];
    
    /**
     * Calculate which post has the highest visibility in viewport
     * and update URL accordingly
     */
    const updateMostVisiblePost = () => {
      let maxVisibleArea = 0;
      let mostVisibleIndex = visiblePostIndex.value;
      
      feedItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the element is visible in the viewport
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleArea = visibleHeight * rect.width;
        
        // Find the most visible item
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          mostVisibleIndex = index;
        }
      });
      
      // Only update if the most visible post has changed
      if (mostVisibleIndex !== visiblePostIndex.value) {
        visiblePostIndex.value = mostVisibleIndex;
        
        // Update URL in the address bar without reloading the page
        const newUrl = `${window.location.pathname}?post=${mostVisibleIndex + 1}`;
        window.history.replaceState({ postIndex: mostVisibleIndex }, '', newUrl);
      }
    };
    
    // Setup optimized event listeners
    const scrollHandler = () => window.requestAnimationFrame(updateMostVisiblePost);
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', scrollHandler, { passive: true });
    
    // Initialize feed items
    const initializeFeedItems = () => {
      feedItems = Array.from(document.querySelectorAll('.feed-item'));
      feedItems.forEach((item, index) => {
        item.setAttribute('data-post-index', index.toString());
      });
      updateMostVisiblePost();
    };
    
    // Use requestAnimationFrame for initialization to ensure DOM is ready
    requestAnimationFrame(() => {
      initializeFeedItems();
      
      // Check if URL already has a post param
      const urlParams = new URLSearchParams(window.location.search);
      const postParam = urlParams.get('post');
      if (postParam) {
        const index = parseInt(postParam) - 1;
        if (index >= 0 && index < posts.length) {
          visiblePostIndex.value = index;
        }
      }
    });
    
    return {
      cleanup: () => {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', scrollHandler);
      }
    };
  };

  return {
    visiblePostIndex,
    initTracking
  };
} 