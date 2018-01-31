import io
import cv2
import base64 
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg


# Take in base64 string and return PIL image
def stringToImage(base64_string):
    imgdata = base64.binascii.a2b_base64(base64_string)
    #b64decode(base64_string)
    return Image.open(io.BytesIO(imgdata))

def toRGB(image):
    return cv2.cvtColor(np.array(image), cv2.COLOR_BGR2RGB)

f = open('brianBase64.txt','r')
a=f.read()


with open('emilBase64.txt','rt') as in_file:
    contents = in_file.read()
    i = contents.find(',')
    print(i)
    contents= contents[i+1:]
    print(contents[0:10])


# png_recovered = base64.decodestring(a.encode())
# q = open('recovered.jpg', 'wb')
# q.write(png_recovered)
# q.close()

imag = stringToImage(contents)
imag = toRGB(imag)
gray = cv2.cvtColor(imag,cv2.COLOR_BGR2GRAY)
print(gray)


# img=mpimg.imread('tester.png')
# imgplot = plt.imshow(img)
# plt.show()




# Create Local Binary Patterns Histograms for face recognization
recognizer = cv2.face.LBPHFaceRecognizer_create()

# Load the trained mode
recognizer.read('trainer/trainer.yml')

# Load prebuilt model for Frontal Face
cascadePath = "haarcascade_frontalface_default.xml"

# Create classifier from prebuilt model
faceCascade = cv2.CascadeClassifier(cascadePath)

image = cv2.imread("recovered.jpg")
faces = faceCascade.detectMultiScale(gray, 1.2,8)

for(x,y,w,h) in faces:

    

    # Recognize the face belongs to which ID
    Id, confidence = recognizer.predict(gray[y:y+h,x:x+w])


    # Check the ID if exist 
    print(Id)
    print(confidence)

