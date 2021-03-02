## Development

Node.js (and `npm`) are required. If not already installed, please download latest version from [NodeJS.org](https://nodejs.org/) (version >= 14). See below for a discussion on using nodeenv in case you are having trouble with installing npm packages.

**Install dependencies**
```sh
cd frontend
npm install
```

**Start development server**
```sh
npm run dev
```

After compiling successfully, app can be viewed at `localhost:3000`. App will run on port `3000` by default, although another port can be specified via `npm run dev -- -p 4032`, where `4032` is the port number you'd like to use.

### Style Linting

Repo follows [StandardJS](https://standardjs.com/) style guide.

**Lint repo**
```sh
npm run lint
```

**Fix any linting mistakes**
```sh
npm run fix
```


## Deployment

**Build the app for production**
```sh
npm run build
```

This will create a production-optimized build of the app in `build/`.

**Serve the production-optimized build**
```sh
npm run start
```

## Using Nodeenv

Nodeenv is like a Python virtualenv and allows you to install custom versions of node and npm. At least one of us (Christian) found it necessary to get things to work. The issue is that this repo/project uses ReactJS 17.+, but there are still many React Component packages that have a ReactJS 16 requirement. Using npm 7.0.4, Christian wasn't able to get packages installed.

```sh
brew install nodeenv
```

```sh
nodeenv env --node=15.3.0 --npm=6.14.10
```

```sh
source env/bin/activate
```

Then do your normal npm install, and potentially add --force to overwrite ReactJS 16 dependencies:

```sh
npm install --no-optional --force
```

## Global Modal

If you would like to use a global modal to display an error message or information the user, use the Global Modal dispatch.

Example:

```javascript
import { useModalDispatch } from './contexts'

...

const dispatch = useModalDispatch();

// Toggle the modal
dispatch({
  type: "SET_ERROR",
  payload: {
  isOpen: true,
    showButton1: true,
    button1Props: {
      size: 'extra',
      color: 'secondary',
      text: "Dashboard"
      nextRoute: '/admin/dashboard',
    },
    showButton2: true,
    button2Props: {
      size: 'small',
      color: 'primary',
      text: "Home"
      nextRoute: '/',
    },
  }
});
```

### Props

All you need to toggle the modal is the type "SET_ERROR" and payload with property "isOpen" set to true, in which only 1 button will show up with the text "Close". You have complete control over how the buttons can behave in your modal.

To pass custom props, use the "button1Props" or buttons2Props(Notice: if showButton2 is not set to true, your second button will not render)

**Size & Color**: Values allowed here can be found in components/buttons/Button.js

**nextRoute**: allows you to control where the user gets redirected on click. If this is left blank, no redirect will happen.
