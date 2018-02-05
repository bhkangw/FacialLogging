# A Facial Login Registration Implementation
FaceLogin is a login and registration app that uses facial recognition to log the user in. This is done so by using the Python library OpenCV.

## Setup
1. Clone this repository on you local machine:


    `git clone https://github.com/EmilChoparinov/FacialLogging`

2. Enter the directory **FacialLogging** (`cd ./FacialLogging`)

### Install npm packages
We must now install the servers and clients packages.

1. naviate to **"./server/intermediary/"** and run the command `npm install`
2. naviate back to the root of the project by doing the command **./../../../**
3. now install the clients packages by navigating to **"./client/WebApp/"** and running the command `npm install`

## Install python packages
We must now install the python dependencies in order to run the ml microservice. This was written in Python 3 so make sure Python 3
is install on your local machine
1. naviagate to **"./server/ml/"**
2. 

## Architecture
- Implemented in the MEAN MVVC Architecture
- Express is used as a proxy to the Python machine learning microservice that generates profiles and validates users. This architecture allows easy scalability due to how the microservice is setup.
- More info in this presentation [here](/#)

### Screenshots

**Contributors:** [@Ayadlin](https://github.com/ayadlin) [@Bhkangw](https://github.com/bhkangw) [@EmilChoparinov](https://github.com/EmilChoparinov/)
