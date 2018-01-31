from flask import Flask, jsonify
import cv2
import numpy as np

app = Flask(__name__)



# Take in base64 string and return PIL image
def stringToImage(base64_string):
    imgdata = base64.binascii.a2b_base64(base64_string)
    #b64decode(base64_string)
    return Image.open(io.BytesIO(imgdata))

def toRGB(image):
    return cv2.cvtColor(np.array(image), cv2.COLOR_BGR2RGB)


def processBase64File(base64File):
    with open('emilBase64.txt','rt') as in_file:
        contents = in_file.read()
        i = contents.find(',')
        contents= contents[i+1:]
        imag = stringToImage(contents)
        imag = toRGB(imag)
        gray = cv2.cvtColor(imag,cv2.COLOR_BGR2GRAY)
        return gray

def processBase64String(base64String):
    i = base64String.find(',')
    base64String = base64String[i+1:] 
    base64Image = stringToImage(base64String)
    base64Image = toRGB(base64Image)
    base4Gray = cv2.cvtColor(base64Image,cv2.COLOR_BGR2GRAY)
    return base64Gray




def getFileContents():
    with open('trainer/trainer.yml','rt') as importFile: 
        contents = importFile.read()
        return contents

# @app.route('/')
# def testing():
#     return jsonify({'model': getFileContents()})


# generates yml from a set of images POST: //
# recieves
# {
#     images: Array<Base64String>(25);
# }

@app.route('api/ml/build')

# get images from front end
#images = data[images]

images = [brianBase64.txt, emilBase64]

# Create Local Binary Patterns Histograms for face recognization
recognizer = cv2.face.LBPHFaceRecognizer_create()

# Using prebuilt frontal face training model, for face detection
detector = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

#process images from base64 to numpy and assing id = 1.
processImages = []
ids = []
for image in images:
    processImage = processBase64String(image)
    id =1

    # Get the face from the training images
    faces = detector.detectMultiScale(img_numpy)

     # Loop for each face, append to their respective ID
        for (x,y,w,h) in faces:

            # Add the image to processImages
            processImages.append(processImage[y:y+h,x:x+w])

            # Add the ID to IDs
            ids.append(id)

# Train the model using the faces and IDs
trainer = recognizer.train(processImages, np.array(ids))
print trainer

# Save the model into trainer.yml
#recognizer.save('trainer/trainer.yml')



    



    return jsonify({'model': getFileContents()})


# verifies user and returns success boolean {success: true/false}
# recieves
# {
#     images: Array<Base64String>(5);
# }
@app.route('api/ml/verify')


app.run(debug=True)