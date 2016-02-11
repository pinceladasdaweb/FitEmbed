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

        if (!options.embed) {
            console.log('%c Don\'t initialize the plugin without setting an embed', 'background: red; color: white');
            return;
        }

        this.embed      = document.querySelectorAll(options.embed);
        this.intrinsic  = options.intrinsic  || true;
        this.baseWidth  = options.baseWidth  || 16;
        this.baseHeight = options.baseHeight || 9;

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
        fit: function () {
            var hRatio, width, height, mediaWrapper;

            mediaWrapper                = document.createElement('div');
            mediaWrapper.className      = 'media-wrapper';
            mediaWrapper.style.position = 'relative';
            mediaWrapper.style.width    = '100%';
            mediaWrapper.style.height   = '0';

            Array.prototype.forEach.call(this.embed, function (embed) {
                width  = embed.getAttribute('width');
                height = embed.getAttribute('height');
                
                if (this.intrinsic === true && width !== '' && height !== '') {
                    hRatio = (height / width) * 100;
                } else {
                    hRatio = (this.baseHeight / this.baseWidth) * 100;
                }

                mediaWrapper.style.padding = hRatio + '% 0 0 0';

                embed.style.position = 'absolute';
                embed.style.width    = '100%';
                embed.style.height   = '100%';
                embed.style.top      = '0';
                embed.style.left     = '0';

                this.wrap(embed, mediaWrapper);
            }.bind(this));
        }
    };

    return FitEmbed;
}));