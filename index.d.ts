declare namespace VerstkaPlayerNS {
  interface ArticleOptions {
    article_selector?: string;
    observe_selector?: string;
  }

  type Constructor<T> = (element: Element, options?: any) => T;
  type Destructor<T> = (element: Element, data: T, options?: any) => void;

  interface Collection<T> {
    setConstructor(fn: Constructor<T>): this;
    setDestructor(fn: Destructor<T>): this;
    getLength(): number;
    getElements(): Element[];
    each(iterator: (element: Element, data: T, index: number, length: number) => boolean | void): this;
    index(element: Element): number;
    has(element: Element): boolean;
    add(element: Element, options?: any): boolean;
    remove(element: Element): boolean;
    addFew(elements: Element[], options?: any): this;
    removeFew(elements: Element[]): this;
    merge(selector: string, options?: any): this;
    scatter(selector: string): this;
    clear(): this;
    filter(filter: (element: Element, data: T, index: number, length: number) => boolean): this;
    refresh(): this;
  }
}

declare class Article {
  slideDown(params: { element: HTMLElement, height: number, duration?: number, callback?: () => void }): void;
  slideReset(params: { duration?: number, callback?: () => void }): void;
  resizeObject(params: { element: HTMLElement, height: number, duration?: number, callback?: () => void }): void;
  changeDisplayMode(modeName: string): void;
  clearCache(): void;
  enable(options?: VerstkaPlayerNS.ArticleOptions): void;
  refresh(): void;
  disable(): void;
}

declare class View {
  items: Record<string, any>;
  formViewKey(version: string, client: string): string;
  add(version: string, client: string, content: any): void;
  get(version: string, client: string): any;
  use(version: string, client: string, callback: (view: any) => void): void;
}

declare class VerstkaPlayer {
  View: View;
  Article: Article;
  is_ready: boolean;
  includeScript(src: string, callback: () => void): void;
  includeStyle(src: string, callback: () => void): void;
  init(): void;
}

declare const verstkaPlayer: VerstkaPlayer;
export = verstkaPlayer;
export as namespace VerstkaPlayer;