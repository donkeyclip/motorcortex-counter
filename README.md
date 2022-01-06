# MotorCortex Counter

## Installation

```bash
$ npm install @donkeyclip/motorcortex-counter
# OR
$ yarn add @donkeyclip/motorcortex-counter
```

```javascript
import Counter from "@donkeyclip/motorcortex-counter";
```

## Key Concepts / Features

## Browser compatibility

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| 24+    | 6+     | 10+       | 32+     | 15+   |

## Documentation

### Import and load the plugin to MotorCortex

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import Counter from "@donkeyclip/motorcortex-counter";

const Counter = MotorCortex.loadPlugin(AnimePluginDefinition);
```

### Create a Counter Incident to Animate a Number

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";

const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);

const MyClip = new MotorCortex.HTMLClip({
  html: `
        <div id="number-counter">
            <p class="effect-target">100</p>
            <p>%</p>
        </div>
    `,
  css: `
   #number-counter {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 800%;    
    }
  `,
});

const counterEffect = new Counter.Counter(
  {
    animatedAttrs: {
      count: 100,
    },
    initialValues: {
      count: 0,
    },
    decimals: 2,
  },
  {
    selector: ".effect-target",
    duration: 1000,
    easing: "easeInOutQuad",
  }
);

MyClip.addIncident(counterEffect, 1000);

MyClip.play();
```

With this Incident you are able to animate and customize the progress of a number from an initial value to the target value. The "count" parameter allows you to set that initial and target value, and as long as the input is a "Number" there are no other limitations. The "decimals" parameter is optional. It defines the decimal accurary of the counter. Its input must be an integer number between 0 and 20.

### Exposed Incidents

- `Counter`

### Demo

https://donkeyclip.github.io/motorcortex-counter/demo/

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
