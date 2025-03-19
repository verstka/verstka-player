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

declare namespace VerstkaPlayer {
  /**
   * Include external JavaScript
   */
  function includeScript(src: string, callback: () => void): void;

  /**
   * Include external CSS
   */
  function includeStyle(src: string, callback: () => void): void;

  /**
   * Indicates if VerstkaPlayer is ready
   */
  const is_ready: boolean;

  /**
   * Initialize the VerstkaPlayer
   */
  function init(): void;

  /**
   * View management
   */
  namespace View {
    const items: Record<string, any>;
    function formViewKey(v: string, c: string): string;
    function add(v: string, c: string, content: any): void;
    function get(v: string, c: string): any;
    function use(version: string, client: string, callback: (view: any) => void): void;
  }

  /**
   * Article management
   */
  namespace Article {
    function slideDown(params: {
      element: HTMLElement | JQuery;
      height: number;
      duration?: number;
      callback?: () => void;
    }): void;
    
    function slideReset(params: {
      duration?: number;
      callback?: () => void;
    }): void;
    
    function resizeObject(params: {
      element: HTMLElement | JQuery;
      height: number;
      duration?: number;
      callback?: () => void;
    }): void;
    
    function changeDisplayMode(mode_name: string): void;
    function clearCache(): void;
    
    function enable(options?: {
      article_selector?: string;
      observe_selector?: string;
      [key: string]: any;
    }): void;
    
    function refresh(): void;
    function disable(): void;
  }
}

declare global {
  const VerstkaPlayer: typeof VerstkaPlayer;
}

export = VerstkaPlayer;
export as namespace VerstkaPlayer;