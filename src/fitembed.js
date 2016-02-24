/*jslint browser: true*/
/*global define, module, exports*/
(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.FitEmbed = factory();
    }
}(this, function () {
    "use strict";

    var FitEmbed = function (options) {
        if (!this || !(this instanceof FitEmbed)) {
            return new FitEmbed(options);
        }

        if (!options || !options.embed) {
            console.log('%c Don\'t initialize the plugin without setting an embed', 'background: red; color: white');
            return;
        }

        this.embed      = document.querySelectorAll(options.embed);
        this.intrinsic  = options.intrinsic  || true;
        this.baseWidth  = options.baseWidth  || 16;
        this.baseHeight = options.baseHeight || 9;
        this.prefixes   = ['webkit', 'Moz', 'ms', 'O'];

        this.fit();
    };

    FitEmbed.prototype = {
        wrap: function (toWrap, wrapper) {
            wrapper = wrapper || document.createElement('div');
            if (toWrap.nextSibling) {
                toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
            } else {
                toWrap.parentNode.appendChild(wrapper);
            }
            return wrapper.appendChild(toWrap);
        },
        vendor: function (el, prop) {
            var s = el.style, pp, i, len;

            prop = prop.charAt(0).toUpperCase() + prop.slice(1);

            for (i = 0, len = this.prefixes.length; i < len; i += 1) {
                pp = this.prefixes[i] + prop;

                if(s[pp] !== undefined) return pp;
            }

            if(s[prop] !== undefined) return prop;
        },
        css: function (el, prop) {
            var p;

            for (p in prop) {
                if (prop.hasOwnProperty(p)) {
                    el.style[this.vendor(el, p) || p] = prop[p];
                }
            }
        },
        fit: function () {
            var hRatio, width, height, mediaWrapper;

            mediaWrapper           = document.createElement('div');
            mediaWrapper.className = 'media-wrapper';

            this.css(mediaWrapper, {
                position: 'relative',
                width: '100%',
                height: '0'
            });

            Array.prototype.forEach.call(this.embed, function (embed) {
                width  = embed.getAttribute('width');
                height = embed.getAttribute('height');
                
                if (this.intrinsic === true && width !== '' && height !== '') {
                    hRatio = (height / width) * 100;
                } else {
                    hRatio = (this.baseHeight / this.baseWidth) * 100;
                }

                this.css(mediaWrapper, {
                    padding: hRatio + '% 0 0 0'
                });

                this.css(embed, {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: '0',
                    left: '0'
                });

                this.wrap(embed, mediaWrapper);
            }.bind(this));
        }
    };

    return FitEmbed;
}));