# iris-frontend

[![Devpost | Iris](https://badges.devpost-shields.com/get-badge?name=Iris&id=iris-io&type=big-logo&style=flat)](https://devpost.com/software/iris-io)

![Iris Screenshots](https://www.stewartdulaney.com/wp-content/uploads/sites/7/2019/01/iris.gif "Iris")

## Inspiration

We had the idea to use machine learning in order to solve a common problem for people diagnosed with Alzheimer’s: helping them to remember things.

## What it does

Iris is a virtual assistant (and wearable device) that helps you remember people that you know and things you have to do by providing non-invasive cues through an intelligent voice interface.

## How we built it

We used a Raspberry Pi connected to a camera, a Flask app as the back end, and an Angular app as the front end. We used the Microsoft Azure Face API for facial recognition as well as an abundance of Google Cloud Platform services to support our application: including Google Compute Engine, Google App Engine, Firebase Realtime Database, Google Cloud Storage, and Google Cloud Text-to-Speech.

## Challenges we ran into

One problem our team on the backend ran into was learning new APIs and successfully incorporating them into our final product. The time crunch was also an issue, but due to teamwork we overcame this obstacle. 

Another challenge was training the speaker recognition using snowboy, a DNN based hotword and wake word detection toolkit. 

## Accomplishments that we're proud of

The final product looks amazing and we're extremely proud to present a web app in the time allotted.

## What we learned

We learned how to use the Microsoft Azure Face API, storing data into the realtime database, and images into Google Cloud Storage. We also learned how to perform realtime data updates on a web app using firebase. 

## What's next for Iris.io

We would like to allow a user to benefit from our app with a mobile device. Being able to incorporate the hardware into a smaller more discrete device, like glasses and an earpiece, is also a future goal. 

## Check it out
- [http://irisassist.org/](http://irisassist.org/)
- [https://devpost.com/software/iris-io](https://devpost.com/software/iris-io)
- [https://github.com/CruzHacks2019/iris-backend](https://github.com/CruzHacks2019/iris-backend)
- [https://github.com/CruzHacks2019/iris-frontend](https://github.com/CruzHacks2019/iris-frontend)
- [https://github.com/CruzHacks2019/iris-raspi](https://github.com/CruzHacks2019/iris-raspi)
- [https://www.youtube.com/watch?v=bZMzjwBbdrw](https://www.youtube.com/watch?v=bZMzjwBbdrw)

## Contributors
- [EgyptAmaru](https://github.com/EgyptAmaru)
- [sdulaney](https://github.com/sdulaney)
- [trfoss](https://github.com/trfoss)
- [tejashah88](https://github.com/tejashah88)
- [mommothazaz123](https://github.com/mommothazaz123)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
