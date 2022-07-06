# Please Train Me

This project is an update of the [old version](https://github.com/Emalios/PleaseTrainMe) that I made in java, I intend to go further in the implementation of this 
genetic algorithm and to allow to configure some input information.

## Milestones

Here is a list of features already implemented or not:

- [ ] Functional genetic algorithm.
- [ ] Reset and pause buttons.
- [ ] Wall implementation.
- [ ] GUI for configuration of many parameters like the number of cells or the number of iterations.
- [ ] Saving the evolution at an instant t in order to resume it later.

## Installation

### With NodeJS

Clone the repo and execute:
```
npm install
npm run
```

### With Docker

To build the image you have to execute this command in the root of the project 
(in the folder which contains the Dockerfile)

```
docker build -t <IMAGE_NAME> .
```

And then you can run the image with

```
docker run -p <PORT>:3000 <IMAGE_NAME>
```

Where \<PORT> is the port you want to allow to the application, if you don't precise one, by default it's 3000. 