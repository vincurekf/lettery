# lettery
Simple jQuery plugin to help repair some bad text behavior.
## Usage
  lettery accepts two parametters: ```letters``` and ```options

```
$( '.lettery' ).lettery( letters, options );```</pre>
```

```letters``` should be an array of letters, so for one letter it would be: 
```[ "w" ]```, for more letters: ```[ "w", "t", "f" ]```.

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
$( '.lettery' ).lettery( [ "w", "t", "f" ], {
  styles: {
    'position': 'relative',
    'bottom': '4px',
    'color': '#e46'
  },
  class: "letter"
});
```
Licence MIT, so, you know...