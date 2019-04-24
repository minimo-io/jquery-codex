# Codex jQuery Plugin
jQuery plugin for sodomizing texts for a given time; check this [homepage](https://minimo.io) for a demo.

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
  * this examples uses the effect 'charbychar' by which each character is revealed one by one
  * in this effect the total duration is automatically calculated with the reveal value
  */
$("#do4").click(function(){
  $("#codex4").codex({
      effect: "charbychar",
      keep_whitespaces: false, // sodomize also whitespaces
      speed: 50, // speed in which random chars will appear in letters not yet revelaed
      reveal: 100 // number of miliseconds that will take for a single char reveal
  });
});
```
## TODO
* TODO
* Be able to define a specific charset as base for the random chars
* Create the typewriter effect, similar than 'charbychar' but all non-revealed text is blank
* Use a single sodomizer function for all effects when possible (remove duplicated code)

## Changelog
### Version 1.0.5 - 2018-04-23
  * Better param names
### Version 1.0.3 - 2015-10-16
  * Minor tweaks
### Version 1.0.0 - 2015-05-1
  * Change version number; [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
### Version 0.1 - 2014-11-07
  * First release
