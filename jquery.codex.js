/**
 * Codex: jQuery Plugin for sodomizing texts for a given time.
 *
 * @author: @tuxxus
 * @version: 1.0.4
 * @url: http://www.tuxxus.com/projects/codex/
 */

;(function($) {

    $.codex = function(element, options) {

        var plugin = this;
        plugin.settings = {};

        var $element = $(element),
        element = element;


        var defaults = {
            min_miliseconds : 100,
            max_miliseconds : 3000,
            final_text: $element.text(),

            total_iterations : 0,
            interval : -1
        }




        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            var el = $element;
            var str = el.text();


            plugin.settings.interval = setInterval( function(){

                // char changer
                el.text( codex_change_each_position( str ) );

                // time controller
                plugin.settings.total_iterations += plugin.settings.min_miliseconds;
                //console.log( plugin.settings.total_iterations );
                if ( plugin.settings.total_iterations >= plugin.settings.max_miliseconds ) {
                    clearInterval(plugin.settings.interval);
                    plugin.settings.total_iterations = 0;
                    plugin.settings.interval = -1;
                    el.text(plugin.settings.final_text);
                }


            }, plugin.settings.min_miliseconds );



        }




        // private methods

        var codex_get_random_char = function (max, min){
            // 33 - 126 ascii (decimal)
            var random = Math.floor(Math.random() * (max - min + 1) + min);
            return String.fromCharCode(random);

        }

        /* un-used
        var codex_replaceCharAt = function (string, index, character) {
            return string.substr(0, index) + character + string.substr(index+character.length);
        }
         */

        var codex_change_each_position = function (s){
            var ret_string = "";
            for (var c = 0; c < s.length; c++){
                if ( s.charCodeAt(c) != 32 ){
                    ret_string += codex_get_random_char(33, 126);
                }else{
                    ret_string += " ";
                }
            }
            return ret_string;
        }



        plugin.init();

    }

    $.fn.codex = function(options) {

        return this.each(function() {
            /*
            if (undefined == $(this).data('codex')) {
                var plugin = new $.codex(this, options);
                $(this).data('codex', plugin);
            }
            */
            var plugin = new $.codex(this, options);
            $(this).data('codex', plugin);
        });

    }

})(jQuery);
