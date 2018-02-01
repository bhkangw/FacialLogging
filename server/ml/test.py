from flask import Flask, jsonify, request
import io
import cv2
import base64 
import numpy as np
from PIL import Image
from pprint import pprint

# Take in base64 string and return PIL image
def stringToImage(base64_string):
    imgdata = base64.binascii.a2b_base64(base64_string)
    #b64decode(base64_string)
    return Image.open(io.BytesIO(imgdata))

def toRGB(image):
    return cv2.cvtColor(np.array(image), cv2.COLOR_BGR2RGB)

def equalize(image):
    # convert to yuv scale
    img_yuv = cv2.cvtColor(np.array(image), cv2.COLOR_BGR2YUV)
    # equalize the histogram of the Y channel
    img_yuv[:,:,0] = cv2.equalizeHist(img_yuv[:,:,0])
    # convert the YUV image back to RGB format
    img_output = cv2.cvtColor(img_yuv, cv2.COLOR_YUV2BGR)
    return img_output

# create a CLAHE object (Arguments are optional).
clahe = cv2.createCLAHE()

def localequalize(image):
    return clahe.apply(np.array(image))




def processBase64File(base64File):
    with open(base64File,'rt') as in_file:
        contents = in_file.read()
        i = contents.find(',')
        contents= contents[i+1:]
        imag = stringToImage(contents)
        imag = toRGB(imag)
        #imag = toRGB(imag)
        gray = cv2.cvtColor(imag,cv2.COLOR_BGR2GRAY)
        gray = localequalize(gray)
        print(gray)
        return gray

def processBase64String(base64String):
    i = base64String.find(',')
    base64String = base64String[i+1:] 
    base64Image = stringToImage(base64String)
    base64Image = localequalize(base64Image)#equalize(base64Image)
    base64Image = toRGB(base64Image)
    base64Gray = cv2.cvtColor(base64Image,cv2.COLOR_BGR2GRAY)
    return base64Gray


processBase64File("brianBase64.txt")