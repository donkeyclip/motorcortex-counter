# MotorCortex-Counter

**Table of Contents**

- [MotorCortex-Counter](#motorcortex-counter)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Counter](#counter)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-counter/demo/)

# Intro / Features
With MotorCortex-Counter you can easily add a counter in your clip. You are able to animate and customize the progress of a number from an initial value to the target value.

The Plugin exposes one Incident:
- Counter

#### Browser compatibility

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| 24+    | 6+     | 10+       | 32+     | 15+   |

# Getting Started

## Installation

```bash
$ npm install @donkeyclip/motorcortex-counter
# OR
$ yarn add @donkeyclip/motorcortex-counter
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import CounterDef from "@donkeyclip/motorcortex-counter";
const Counter = loadPlugin(CounterDef);
```

# Creating Incidents

## Counter
```javascript
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
```

### Counter Attrs

| Name     |                          Are                 | Values     |
| -------- | :------------------------------------------: | ---------: |
|  count   |        set that initial and target value     |       num  |
| decimals |  defines the decimal accurary of the counter | num (0-20) |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
