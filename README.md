# A Facial Login Registration Implementation
FaceLogin is a login and registration app that uses facial recognition as a form of validation. The face recognition is done within the OpenCV framework is done so by using the Python library OpenCV.

## Setup
1. Clone this repository on your local machine:


    `git clone https://github.com/EmilChoparinov/FacialLogging`

2. Enter the directory **FacialLogging** (`cd ./FacialLogging`)

### Install npm packages
We must now install the servers and clients packages.

1. navigate to **"./server/intermediary/"** and run the command: `npm install`
2. navigate back to the root of the project by doing the command: **./../../../**
3. now install the client's packages by navigating to **"./client/WebApp/"** and running the command: `npm install`

### Install python packages
We must now install the python dependencies in order to run the ml microservice. This was written in Python 3 so make sure Python 3
is install on your local machine
1. navigate to: **"./server/ml/"**
2. start a virtual environment in python3 by doing: `py -3 -m venv FaceLoginEnv`
3. enter your virtual environment by running: `. ./FaceLoginEnv/Scripts/activate`
4. install the requirements from **r.txt** using the command: `pip install -r r.txt`

## Architecture
- Implemented in the MEAN MVVC Architecture
- Express is used as a proxy to the Python machine learning microservice that generates profiles and validates users. This architecture allows easy scalability due to how the microservice is setup.
- More info in this presentation [here](https://github.com/EmilChoparinov/FacialLogging/#)

### Screenshots

**Contributors:** [@Ayadlin](https://github.com/ayadlin) [@Bhkangw](https://github.com/bhkangw) [@EmilChoparinov](https://github.com/EmilChoparinov/)
