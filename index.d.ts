/**
 * Type definitions for verstka-player
 */

interface JQuery {
  get(index: number): HTMLElement;
  each(callback: (index: number, element: HTMLElement) => void): JQuery;
  offset(): { top: number; left: number };
  parents(selector: string): JQuery;
  find(selector: string): JQuery;
  not(selector: string): JQuery;
  filter(filter: (index: number, element: HTMLElement) => boolean): JQuery;
  attr(attributeName: string, value: string | number): JQuery;
  removeAttr(attributeName: string): JQuery;
  animate(properties: any, duration?: number): JQuery;
  promise(): JQueryPromise<any>;
  height(): number;
  resize(): void;
}

interface JQueryPromise<T> {
  done(callback: (...args: any[]) => any): JQueryPromise<T>;
}

declare const VerstkaPlayer: {
  /**
   * Include external JavaScript
   */
  includeScript(src: string, callback: () => void): void;

  /**
   * Include external CSS
   */
  includeStyle(src: string, callback: () => void): void;

  /**
   * View management
   */
  View: {
    items: Record<string, any>;
    formViewKey(v: string, c: string): string;
    add(v: string, c: string, content: any): void;
    get(v: string, c: string): any;
    use(version: string, client: string, callback: (view: any) => void): void;
  };

  /**
   * Article management
   */
  Article: {
    slideDown(params: {
      element: HTMLElement | JQuery;
      height: number;
      duration?: number;
      callback?: () => void;
    }): void;
    
    slideReset(params: {
      duration?: number;
      callback?: () => void;
    }): void;
    
    resizeObject(params: {
      element: HTMLElement | JQuery;
      height: number;
      duration?: number;
      callback?: () => void;
    }): void;
    
    changeDisplayMode(mode_name: string): void;
    clearCache(): void;
    
    enable(options?: {
      article_selector?: string;
      observe_selector?: string;
      [key: string]: any;
    }): void;
    
    refresh(): void;
    disable(): void;
  };

  /**
   * Initialize the VerstkaPlayer
   */
  init(): void;

  /**
   * Indicates if VerstkaPlayer is ready
   */
  is_ready: boolean;
};

export default VerstkaPlayer;