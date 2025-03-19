import { ref, onMounted } from 'vue'

/**
 * Composable for tracking visible posts and updating URL
 * @param options Configuration options
 * @returns Tracking state and methods
 */
export function usePostTracking(options: {
  posts: any[],
  threshold?: number,
  rootMargin?: string
}) {
  const visiblePostIndex = ref(0);
  const { posts, threshold = 0.5, rootMargin = '0px' } = options;

  /**
   * Initialize post tracking with Intersection Observer
   */
  const initTracking = () => {
    let feedItems: Element[] = [];
    let visibilityRatios: Record<number, number> = {};
    
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
        
        // Track visibility ratio for each item
        visibilityRatios[index] = visibleArea;
        
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
    
    // Setup scroll event listener to continuously check visibility
    window.addEventListener('scroll', updateMostVisiblePost, { passive: true });
    window.addEventListener('resize', updateMostVisiblePost, { passive: true });
    
    // Initialize feed items
    setTimeout(() => {
      feedItems = Array.from(document.querySelectorAll('.feed-item'));
      feedItems.forEach((item, index) => {
        item.setAttribute('data-post-index', index.toString());
      });
      updateMostVisiblePost();
    }, 100);
    
    // Check if URL already has a post param and scroll to it
    const urlParams = new URLSearchParams(window.location.search);
    const postParam = urlParams.get('post');
    if (postParam) {
      const index = parseInt(postParam) - 1;
      if (index >= 0 && index < posts.length) {
        visiblePostIndex.value = index;
        // Scroll to the specified post
        setTimeout(() => {
          document.querySelectorAll('.feed-item')[index]?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
    
    return {
      cleanup: () => {
        window.removeEventListener('scroll', updateMostVisiblePost);
        window.removeEventListener('resize', updateMostVisiblePost);
      }
    };
  };

  return {
    visiblePostIndex,
    initTracking
  };
} 