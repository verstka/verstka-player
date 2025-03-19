# verstka-player

## Article Display

Insert the HTML code of the article into any container and call the `enable()` method:
```js
import verstkaPlayer from 'verstka-player'

verstkaPlayer.Article.enable()
```

## Possible options
* `observe_selector` – selectors of DOM elements that could potentially change the position of the article. For example, here you specify the selector of a banner that expands above the article.

```js
verstkaPlayer.Article.enable({
  observe_selector: '.banner, .header-ad, .expandable-promo'
})
```