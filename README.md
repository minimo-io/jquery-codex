# Codex jQuery Plugin
jQuery plugin for sodomizing texts for a given time. Check the [demo page](https://minimo.io/en/2019/7/) and the [npm package](https://www.npmjs.com/package/@minimo-labs/jquery-codex).

![SCREENSHOT](https://i.imgur.com/FpohB6c.gif)

<h2>Usage</h2>

```javascript
$("#do1").click(function(){
  $("#codex").codex({final_text: "Pee Kee Tup"});
});

$("#do2").click(function(){
   $("#codex2").codex({
       speed: 80,
       duration: 6000
   });
});

/**
  * this example uses the effect 'charbychar' by which each character is revealed one by one
  * in this effect the total duration is automatically calculated with the reveal value
  */
$("#do4").click(function(){
  $("#codex4").codex({
      effect: "charbychar",
      keep_whitespaces: false, // sodomize also whitespaces
      speed: 50, // speed in which random chars will appear in letters not yet revelaed
      reveal: 100 // number of miliseconds that will take for a single char to reveal
  });
});

/**
  * Typewriter effect: similar than 'charbychar' but all non-revealed text is blank.
  */
$("#do5").click(function(){
  $("#codex5").codex({
    effect: "typewriter",
    speed: 50,
    reveal: 50
  });
});

```
## TODO
* Use a single sodomizer function for all effects when possible (remove duplicated code)
* Create a callback function to trigger at the end of the effect.

## Changelog
### Version 1.1.1 - 2020-05-24
  * 'typewriter' effect introduced. Similar than 'charbychar' but all non-revealed text is blank
### Version 1.1.0 - 2018-04-23
  * 'charbychar' effect introduced, by which each character is revelaed one at a time
  * 'keep_whitespaces' config value added, so it's possible to choose whether to also sodomize white spaces or not
### Version 1.0.5 - 2018-04-23
  * Better param names
### Version 1.0.3 - 2015-10-16
  * Minor tweaks
### Version 1.0.0 - 2015-05-1
  * Change version number; [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
### Version 0.1 - 2014-11-07
  * First release
