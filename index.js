// ( function( window ) {
	/**/

	var CACHE_TAG = 'npm';

	var appendCriticalCss = function () {
		var critical_css = '[data-vms-version="1"] [class~=object][data-type="background"],[data-vms-version="1"] [class~=object] [class~=data],[data-vms-version="1"].body--desktop [data-devices-mode="mobile"],[data-vms-version="1"] [class~=object][data-type="embed"] xmp{display:none;}.vms_article_parent.article_background-size--cover{background-size:cover;}[data-vms-version="1"] [class~=object][data-type="colorchanger"]{pointer-events:none !important;}[class~=vms_article_parent],[data-vms-version="1"] .object .content{position:relative;}[data-type="slider"] [class~=slider] [class~=fotorama__arr]{width:50%;}.vms_article_parent.article_background-size--cover{background-position:center center;}[data-type="slider"] [class~=slider] [class~=fotorama__arr],[data-vms-version="1"] [class~=object][data-type="ajpg"] [class~=content],[data-vms-version="1"] [class~=object] [class~=content] [class~=content_link],[data-vms-version="1"] .object .content{height:100%;}[data-vms-version="1"] [class~=object] [class~=content] [class~=content_link],[data-vms-version="1"] .object .content,[data-vms-version="1"] [class~=object][data-type="media"] [class~=content],[data-vms-version="1"] [class~=object][data-type="text"] [class~=content],[data-vms-version="1"] [class~=object][data-type="slider"] img,[class~=vms_article_parent],[data-vms-version="1"] [class~=object][data-type="image"] img,[data-vms-version="1"] .object[data-type="embed"] .content{width:100%;}[data-type="slider"] [class~=slider] [class~=fotorama__arr]{top:0;}[data-vms-version="1"] [class~=object] [class~=content] [class~=content_link],[data-vms-version="1"] [class~=object][data-type="ajpg"][class~=object--mobile] [class~=content]{position:absolute;}[data-vms-version="1"] [class~=object] [class~=content] [class~=content_link]{z-index:10;}[data-vms-version="1"],[class~=vms_article_parent]{margin-left:auto;}[data-vms-version="1"] [class~=object][data-type="slider"] img,[data-vms-version="1"] [class~=object][data-type="image"] img{display:block;}.vms_article_parent.article_background-size--tile{background-size:auto;}[data-type="slider"] [class~=slider] [class~=fotorama__arr]{background-image:none !important;}.vms_article_parent.article_background-size--tile{background-repeat:repeat;}[data-vms-version="1"] [class~=object][data-type="slider"] img,[data-vms-version="1"] [class~=object][data-type="image"] img{font-size:0;}[data-type="slider"] [class~=slider] [class~=fotorama__arr]{opacity:1 !important;}[data-vms-version="1"] [class~=object] [class~=content] [class~=content_link]{left:0in;}[data-vms-version="1"] [class~=object] [class~=content] [class~=content_link]{top:0pc;}.vms_article_parent.article_background-size--tile{background-position:center;}[class~=vms_article_parent]{margin-bottom:0pt;}[class~=vms_article_parent],[data-vms-version="1"]{margin-right:auto;}[data-vms-version="1"] .object--mobile[data-devices-mode="both"][data-type="text"] br{display:none !important;}[data-vms-version="1"][class~=body--mobile],[data-vms-version="1"][class~=body--wide]{width:100% !important;}[data-vms-version="1"][class~=body--mobile]{padding-left:11.25pt !important;}[data-vms-version="1"][class~=body--mobile]{padding-bottom:11.25pt !important;}[data-vms-version="1"][class~=body--mobile]{padding-right:11.25pt !important;}[data-vms-version="1"] .object[data-type="embed"] .content,[data-vms-version="1"] .object .content{z-index:2;}[class~=vms_article_parent]{margin-top:0pt;}[data-vms-version="1"] [class~=object][data-type="ajpg"][class~=object--mobile]{height:0in !important;}[class~=vms_article_parent]{z-index:1;}[data-vms-version="1"][class~=body--mobile]{padding-top:11.25pt !important;}[data-vms-version="1"] .object .content,[class~=vms_article_parent]{overflow:hidden;}[data-vms-version="1"][class~=body--mobile],[data-vms-version="1"] [class~=object][data-type="text"],[data-vms-version="1"] .object .content{-webkit-box-sizing:border-box;}[data-vms-version="1"][class~=body--mobile],[data-vms-version="1"] [class~=object][data-type="text"],[data-vms-version="1"] .object .content{-moz-box-sizing:border-box;}[data-vms-version="1"] [class~=object][data-type="text"] [class~=content],[data-vms-version="1"] .object[data-type="embed"] .content,[data-vms-version="1"] [class~=object][data-type="media"] [class~=content],[data-vms-version="1"] [class~=object][data-type="text"] [class~=editor]{height:100%;}[data-vms-version="1"],[data-vms-version="1"] .object[data-type="embed"] .content{position:relative;}[data-vms-version="1"][class~=body--mobile]{margin-left:0 !important;}[data-vms-version="1"][class~=body--mobile]{margin-bottom:0 !important;}[data-vms-version="1"] .object .content,[data-vms-version="1"] [class~=object][data-type="text"],[data-vms-version="1"][class~=body--mobile]{box-sizing:border-box;}[data-vms-version="1"][class~=body--mobile]{margin-right:0 !important;}[data-vms-version="1"] [class~=object][class~=hide]{opacity:0;}[data-vms-version="1"][class~=body--mobile]{margin-top:0 !important;}[data-vms-version="1"][class~=body--mobile],[data-vms-version="1"] [class~=object--mobile]:not([data-type="button"]){height:auto !important;}[data-vms-version="1"] [class~=object--mobile] [class~=content]{padding-left:0 !important;}[data-vms-version="1"]{margin-bottom:0;}[data-vms-version="1"] [class~=object][data-type="shape"] [class~=content]{background:#000;}[data-vms-version="1"] [class~=object--mobile] [class~=content]{padding-bottom:0 !important;}[data-vms-version="1"]{margin-top:0;}[data-vms-version="1"]{-webkit-text-size-adjust:100%;}[data-vms-version="1"] [class~=object--mobile] [class~=content]{padding-right:0 !important;}[data-vms-version="1"] [class~=object--mobile] [class~=content]{padding-top:0 !important;}[data-vms-version="1"] [class~=hide_object],[data-vms-version="1"] [class~=object]{position:absolute;}[data-vms-version="1"] [class~=object--mobile][data-devices-mode="mobile"],[data-vms-version="1"] [class~=object--mobile][data-devices-mode="both"]{display:block;}[data-vms-version="1"] [class~=object][data-type="shape"][class~=object--mobile],[data-vms-version="1"] .object[data-type="text"].object--mobile .editor .float,[data-vms-version="1"] [class~=object--mobile][data-devices-mode="desktop"]{display:none;}[data-vms-version="1"] [class~=object][data-type="text"]{background:rgba(255,255,255,0);}[data-vms-version="1"] [class~=object][data-type="text"]{-webkit-touch-callout:auto;}[data-vms-version="1"] [class~=object][data-type="text"]{-webkit-user-select:auto;}[data-vms-version="1"] [class~=hide_object]{left:-624.9375pc;}[data-vms-version="1"] [class~=object][data-type="text"]{-khtml-user-select:auto;}[data-vms-version="1"] [class~=object][data-type="text"]{-moz-user-select:auto;}[data-vms-version="1"] [class~=object],[data-vms-version="1"] [class~=object][data-type="ajpg"][class~=object--mobile] [class~=content]{left:0pc;}[data-vms-version="1"] [class~=object][data-type="text"]{-ms-user-select:auto;}[data-vms-version="1"] [class~=object][data-type="text"]{user-select:auto;}[data-vms-version="1"].body--inited [data-fullscreen_slider-index]{opacity:1;}[data-vms-version="1"][class~=body--inited] [data-button-junior]{opacity:inherit;}[data-vms-version="1"] [class~=hide_object]{top:-104.15625in;}[data-vms-version="1"] [class~=object][data-type="text"] [class~=content]{overflow:visible;}[data-vms-version="1"] [class~=hide_object]{overflow:hidden;}[data-vms-version="1"] [class~=object][data-type="before_after"] [class~=before_after],[data-vms-version="1"] [class~=object][data-type="text"] [class~=editor],[data-vms-version="1"] .object[data-type="before_after"] .before_after__scene{width:100%;}[data-vms-version="1"] [class~=hide_object],[data-vms-version="1"][data-vms-client="buro247"].body [data-scroll-effects="true"]{visibility:hidden;}[data-vms-version="1"] [class~=object],[data-vms-version="1"] [class~=object][data-type="ajpg"][class~=object--mobile] [class~=content]{top:0in;}[data-vms-version="1"] [class~=object]{z-index:10;}[data-vms-version="1"] .object[data-type="before_after"] .before_after__scene,[data-vms-version="1"] [class~=object][data-type="before_after"] [class~=before_after]{height:100%;}[data-vms-version="1"] [class~=object][data-type="before_after"] [class~=before_after]{position:relative;}[data-vms-version="1"] .object--mobile{position:relative !important;}[data-vms-version="1"] .object--mobile{top:auto !important;}[data-vms-version="1"] .object--mobile{left:auto !important;}[data-vms-version="1"] [class~=object][data-type="text"][class~=object--mobile] h1,[data-vms-version="1"] [class~=object][data-type="text"][class~=object--mobile] p,[data-vms-version="1"] [class~=object][data-type="text"][class~=object--mobile] span{word-break:break-word;}[data-vms-version="1"] .object--mobile{width:100% !important;}[data-vms-version="1"] .object--mobile{margin-bottom:20px;}[data-vms-version="1"] .object--mobile{padding-left:0;}[data-vms-version="1"] .object[data-type="before_after"] .before_after__scene{background:#eee;}[data-vms-version="1"] .object--mobile{padding-bottom:0;}[data-vms-version="1"] .object--mobile{padding-right:0;}[data-vms-version="1"] .object--mobile{padding-top:0;}[data-vms-version="1"] [data-button-junior],[data-vms-version="1"] [data-fullscreen_slider-index]{opacity:0;}[data-vms-version="1"][data-vms-client="buro247"][class~=body--loaded2] [data-scroll-effects="true"]{visibility:visible;}settings{display:none !important;}',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

		style.type = 'text/css';
		style.id = 'verstka-critical';

		if (style.styleSheet){
		  style.styleSheet.cssText = critical_css;
		} else {
		  style.appendChild(document.createTextNode(critical_css));
		}

		head.appendChild(style);
	};

	appendCriticalCss();

	var Collection = function( parameters ) {
	    this.items = [];
	    this.items_length = 0;

	    this.setConstructor( parameters.constructor );
	    this.setDestructor( parameters.destructor );
	};

	Collection.prototype.setConstructor = function( fn ) {
	    this.constructor = fn || function() {};

	    return this;
	};

	Collection.prototype.setDestructor = function( fn ) {
	    this.destructor = fn || function() {};

	    return this;
	};

	Collection.prototype.getLength = function() {
	    return this.items_length;
	};

	Collection.prototype.getElements = function() {
	    return this.items.map( function( item ) {
	        return item.element;
	    } );
	};

	Collection.prototype.each = function( iterator ) {
	    var i,
	        item;

	    for ( i = 0; i < this.items_length; i++ ) {
	        item = this.items[ i ];

	        if ( iterator( item.element, item.data, i, this.items_length ) === false ) {
	            break;
	        }
	    }

	    return this;
	};

	Collection.prototype.index = function( element ) {
	    var index = -1;

	    this.each( function( current_element, data, i ) {
	        if ( current_element === element ) {
	            index = i;
	            return false;
	        }
	    } );

	    return index;
	};

	Collection.prototype.has = function( element ) {
	    return this.index( element ) > -1;
	};

	Collection.prototype.add = function( element, options ) {
	    var that = this;

	    if ( this.has( element ) === false ) {
	        this.items[ this.items_length++ ] = {
	            element: element,
	            data: that.constructor( element, options ),
	            options: options
	        };

	        return true;
	    } else {
	        return false;
	    }
	};

	Collection.prototype.remove = function( element ) {
	    var index = this.index( element ),
	        item;

	    if ( index > -1 ) {

	        item = this.items[ index ];

	        this.destructor( item.element, item.data, item.options );

	        this.items.splice( index, 1 );
	        this.items_length--;

	        return true;
	    } else {
	        return false;
	    }
	};

	Collection.prototype._processFew = function( action_name, elements, options ) {
	    var length = elements.length,
	        i;

	    for ( i = 0; i < length; i++ ) {
	        this[ action_name ]( elements[ i ], options );
	    }

	    return this;
	};

	Collection.prototype.addFew = function( elements, options ) {
	    return this._processFew( 'add', elements, options );
	};

	Collection.prototype.removeFew = function( elements ) {
	    return this._processFew( 'remove', elements );
	};

	Collection.prototype.merge = function( selector, options ) {
	    return this.addFew( document.querySelectorAll( selector ), options );
	};

	Collection.prototype.scatter = function( selector ) {
	    return this.removeFew( document.querySelectorAll( selector ) );
	};

	Collection.prototype.clear = function() {
	    return this.removeFew( this.getElements() );
	};

	Collection.prototype.filter = function( filter ) {
	    var that = this;

	    this.each( function( element, data, i, length ) {
	        if ( filter( element, data, i, length ) !== true ) {
	            that.remove( item.element );
	        }
	    } );

	    return this;
	};

	Collection.prototype.refresh = function() {
	    var elements = this.getElements();

	    this.clear();
	    this.addFew( elements );

	    return this;
	};

	/**/

  var resizeObserver = window.ResizeObserver ? new ResizeObserver(function () {
    // console.log('resizeObserver: resize happened');
    $(window).resize();
  }) : null;

  function observeResize($element) {
    // console.log('resizeObserver: add', !!resizeObserver, $element.get(0));
    resizeObserver && resizeObserver.observe($element.get(0));
  }

	var domObserver = function ($element, callback) {
		MutationObserver = window.MutationObserver || window.WebKitMutationObserver || function(callback) {
			var mo = this,
				id = Math.round( 299792458 * Math.random() );

			mo.observe = function() {
				$element.on( 'DOMSubtreeModified.' + id, callback );
			};

			mo.disconnect = function() {
				$element.off( 'DOMSubtreeModified.' + id );
			};

			mo.takeRecords = function() {
			};
		};

		var observer = new MutationObserver(callback);

		observer.observe($element.get(0), {
			childList: true,
			attributes: true,
			subtree: true
		} );

		return observer;
	};
// })(window);

const VerstkaPlayer = new function() {
  var api = this,
    artciles_collection,
    root_path = '//go.verstka.org/src/Components/Editor/1/builds/',
    dev_root_path = '//dev.verstka.io/src/Components/Editor/1/builds/',
    dev_version_str = 'dev.verstka.io',
    global_article_options;

  var is_dev = (function (str) {
    var scripts = document.getElementsByTagName("script"),
        script,
        dev = false;

    for (var i = 0; i < scripts.length; ++i) {
      script = scripts[i].src;

      if( script !== null && script.indexOf(str) !== -1){
        dev = true;
      }
    }

    return dev;
  })(dev_version_str);

  root_path = (is_dev === false) ? (root_path) : (dev_root_path);

  api.includeScript = function( src, callback ) {
    var head = document.getElementsByTagName( 'head' )[ 0 ],
      script = document.createElement( 'script' );

      script.type = 'text/javascript';

      if (window.location.protocol == 'file:') {
        script.src = 'http:' + src;
      }else{
        script.src = src;
      }

      script.onreadystatechange = callback;
      script.onload = callback;

      head.appendChild( script );
  };

  api.includeStyle = function( src, callback ) {
    var head  = document.getElementsByTagName( 'head' )[ 0 ],
      link  = document.createElement( 'link' );

      link.rel  = 'stylesheet';
      link.type = 'text/css';

      if (window.location.protocol == 'file:') {
        link.href = 'http:' + src;
      }else{
        link.href = src;
      }

      link.media = 'all';

      link.onreadystatechange = callback;
      link.onload = callback;

      head.appendChild( link );
  };

  api.View = new function() {
    var self = this,
      processed = {};

    self.items = {};

    self.formViewKey = function( v, c ) {
      return 'v' + v + '_' + c;
    };

    self.add = function( v, c, content ) {
      self.items[ self.formViewKey( v, c ) ] = content;
    };

    self.get = function( v, c ) {
      return self.items[ self.formViewKey( v, c ) ];
    };

    self.use = function( version, client, callback ) {
      var view = self.get( version, client ),
        key = self.formViewKey( version, client );

      if ( view !== undefined ) {
        callback && callback( view );
      } else {
        if ( processed[ key ] === undefined ) {
          processed[ key ] = [];

          api.includeStyle( root_path + client + '_main.css?v=' + CACHE_TAG, function() {
            api.includeScript( root_path + client + '_main.js?v=' + CACHE_TAG, function() {
              view = self.get( version, client );

              view.whenInit(function () {
                view.setOptions(global_article_options);
              });

              processed[ key ].forEach( function( clb ) {
                clb( view === undefined ? null : view );
              } );
            } );
          } );
        }

        processed[ key ].push( callback );
      }
    };
  };

  function getArticleByElement(element) {
    return $(element).parents('[data-vms-client]');
  }

  api.Article = new function() {
    var self = this,
      display_mode;

    self.slideDown = function(params) {
      var $element = $(params.element);
      var top = $element.offset().top;
      var height = params.height;
      var duration = params.duration || 400;

      var $parentArticle = $element.parents('[data-vms-client]');

      var $objects = $parentArticle
        .find('.object')
        .not('[data-type="nativeroll"]')
        .not('[nativeroll-height]')
        .filter(function() {
          return $(this).offset().top >= top;
        });

      $parentArticle.animate({
        'height': '+=' + height
      }, duration);

      $objects
        .attr({
          'nativeroll-height': height
        })
        .animate({
          'top': '+=' + height
        }, duration)
        .promise()
        .done(function() {
          $(window).resize();
          params.callback && params.callback();
        });

      // setTimeout(function() {
      //   $(window).resize();
      //   params.callback && params.callback();
      // }, duration + 10);
    };

    self.slideReset = function(params) {
      var duration = params.duration || 400;
      var maxHeight = 0;

      $('.object[nativeroll-height]')
        .each(function() {
          var $this = $(this);

          var h = parseInt($this.attr('nativeroll-height'));

          maxHeight = Math.max(maxHeight, h);

          $this.animate({
            'height': '-=' + h
          }, duration);
        })
        .removeAttr('nativeroll-height');

      var $parentArticle = $('.object[nativeroll-height]').parents('[data-vms-client]');

      $parentArticle.animate({
        'top': '-=' + maxHeight
      }, duration);

      setTimeout(function() {
        $(window).resize();
        params.callback && params.callback();
      }, duration + 10);
    };

    var slideDownObjectsNativeRoll = function( params ) {
      var top = params.top || 0,
        height = ( params.height || 0 ) + 0,
        $objects = $dom.article.find( '.object' ).not( '[data-type="advertising"]' ),
        $seedr = params.$object;

      $seedr.addClass( 'shown' );

      $objects = $objects.filter( function() {
        return $( this ).offset().top >= top;
      } ).data( {
        'seedr-height': height
      } ).animate( {
        'top': '+=' + height
      }, 400 );

      $dom.article_body.animate( {
        'height': '+=' + height
      }, 400 );
    };


    self.resizeObject = function (params) {
      var $element = $(params.element);
      var top = $element.offset().top;
      var height = params.height;
      var element_height = $element.height();
      var duration = params.duration || 400;
      var height_diff = height - element_height;

      var $parentArticle = $element.parents('[data-vms-client]');

      var $objects = $parentArticle
        .find('.object')
        .filter(function() {
          return $(this).offset().top >= top;
        });

      $parentArticle.animate({
        'height': '+=' + height_diff
      }, duration);

      $element.animate({
        'height': '+=' + height_diff
      }, duration);

      $objects
        .not($element)
        .animate({
          'top': '+=' + height_diff
        }, duration)
        .promise()
        .done(function() {
          $(window).resize();
          params.callback && params.callback();
        });
    };


    var useArticle = function( article_element, callback ) {
      var version = article_element.getAttribute( 'data-vms-version' ) || '0',
        client = article_element.getAttribute( 'data-vms-client' ) || 'unknown';

      api.View.use( version, client, callback );

      return {
        version: version,
        client: client
      };
    };

    var articleConstructor = function( article_element ) {
      var result = {},
        used;

      used = useArticle( article_element, function( view ) {
        if ( view !== null ) {
          view.whenInit( function() {
            view.enable( article_element );
          } );

          result.view = view;
        } else {
          console.warn( 'VMS API -> Article.enable: couldn\'t find view of version "%s" for client "%s"', version, client );
        }
      } );

      result.version = used.version;
      result.client = used.client;

      return result;
    };

    var articleDestructor = function( article_element, data ) {
      useArticle( article_element, function( view ) {
        if ( view !== null ) {
          view.whenInit( function() {
            if (global_article_options !== undefined) {
              view.disable( /* no arguments */ );
              global_article_options = undefined;
            }
          } );
        } else {
          console.warn( 'VMS API -> Article.disable: couldn\'t find view of version "%s" for client "%s"', version, client );
        }
      } );
    };

    artciles_collection = new Collection( {
      constructor: articleConstructor,
      destructor: articleDestructor
    } );

    self.changeDisplayMode = function (mode_name) {
      display_mode = mode_name;

      var views_objs = api.View.items;

      for (var key in views_objs) {
          if (!views_objs.hasOwnProperty(key)) continue;

        views_objs[key].changeDisplayMode(mode_name);
      }
    };

    self.clearCache = function () {
      artciles_collection.each( function(element, object) {
        object.view && object.view.clearArticleCache();
      } );
    };

    self.enable = function( options ) {
      options = options || {};

      if (options.article_selector === undefined) {
        options.article_selector = '[data-vms-version]';
      }

      global_article_options = options;

      artciles_collection.merge( options.article_selector, options );
      if (options.observe_selector && window.jQuery) {
        $(options.observe_selector).each(function () {
          observeResize($(this));
          // domObserver($(this), function () {
          // 	$(window).resize();
          // });
        });
      }

      self.init_options = options;
    };

    self.refresh = function () {
      $(window).resize();
    };

    self.disable = function() {
      artciles_collection.clear();
    };

  };

  api.init = function() {
    (function(callback) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
            window.addEventListener("load", callback);
        }
    })(function() {
      api.is_ready = true;
      window.VMS_API = api;
    });
  };

  api.init();
};



export default VerstkaPlayer;