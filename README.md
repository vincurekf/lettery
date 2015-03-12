# lettery
Simple jQuery plugin to help repair some bad text behavior.
## Usage
  lettery accepts two parametters: ```letters``` and ```options```

```
$( '.lettery' ).lettery( letters, options );
```

```letters/words``` should be an array of letters or words, so for one letter it would be: 
```[ "w" ]```, for more letters: ```[ "w", "t", "f" ]```, and for words: 
```[ "bone", "ribs" ]```.
If you want to use words, you neet do define option ```words``` to ```true```

```options: styles``` can be any css:
```
styles: {
  'position': 'relative',
  'color': '#f00'
},
```

```options: class``` is optional, change if you wish to use custom css class for single letter.

Full example:
```
$( '.lettery' ).lettery( [ "bone", "ribs" ], {
  styles: {
    'position': 'relative',
    'bottom': '4px',
    'color': '#e46'
  },
  class: "letter",
  words: true
});
```

Preview:

![lettery preview](https://raw.githubusercontent.com/vincurekf/lettery/master/example/preview.jpg)

Licence MIT, so, you know...
