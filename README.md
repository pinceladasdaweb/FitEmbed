# FitEmbed
> Simple responsive iframes

## What is it?

FitEmbed.js is a plugin for wrapping an making iframes and embedded videos behave more like images when developing a responsive website. Currently iframes will default to an arbitrary width set by the embed code.

The plugin is very simple, it wraps the iframe in a relatively positioned container, and absolutely positions the iframe inside of that container to conform to the container's dimensions. No styling is applied to the iframe or the container other than what is needed to make the iframe responsive.

You can apply your own styles to the iframe or it's container by targeting the 'media-wrapper' class.

## Demo

View [demo here](http://www.pinceladasdaweb.com.br/blog/uploads/fitembed/)

## Getting Started

```bash
# Get the latest snapshot
$ git clone git@github.com:pinceladasdaweb/FitEmbed.git
```

## How to use?

### Javascript initialization

FitEmbed is a [Vanilla JS](http://vanilla-js.com/) plugin with no dependencies. Include the [`fitembed.min.js`](build/fitembed.min.js) before your ```</body>``` tag and initialise it:

```html
<script src="path/to/fitembed.min.js"></script>
<script>
    FitEmbed({
        embed: '.wrap'
    });
</script>
```

You can also load the plugin via AMD (require.js):

```html
<script>
require(["path/to/fitembed.min.js"], function(FitEmbed) {
    FitEmbed({
        embed: '.wrap'
    });
});
</script>
```

### Options

FitEmbed accepts 3 options: intrinsic, baseHeight and baseWidth.

**intrinsic:** This option lets media-wrapper use the intrinsic width and height attributes if they are set - this is good for sites that embed iframes of varying sizes. The default value is "true" - set it to "false" to use baseHeight & baseWidth.

**baseHeight & baseWidth:** These two options work together to determine the aspect ratio of the video you are embedding. You can use any combination of numbers, for example: an actual aspect ratio like '16 & 9' or '4 & 3' to set the aspect ratio, or a set of pixel values such as '640' & '480'. The plugin will fill 100% of it container's width by default. The default aspect ratio is 16:9.

##Browser Support

![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Thanks

Many thanks to [Matthew A. K. S.](https://github.com/akselkreis/mediaWrapper.js), who originally created the plugin for jQuery.

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/FitEmbed/releases) for detailed changelog.

## License
[MIT](LICENSE)