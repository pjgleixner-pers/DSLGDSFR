# -*- coding: utf-8 -*-
"""
Created on Sat Sep  7 09:25:16 2019

@author: Stefano
"""

import face_recognition
import cv2
import numpy as np
import datetime
from firebase import firebase

#Inicializar Proyecto Firebase
firebase = firebase.FirebaseApplication('https://dslgdsfr.firebaseio.com/')
############################################


video_capture = cv2.VideoCapture(0)

#Dataset de rostros
# CODIGO_image = face_recognition.load_image_file("CODIGO.jpg")
# CODIGO_face_encoding = face_recognition.face_encodings(CODIGO_image)[0]

#id:3
u201416702_image = face_recognition.load_image_file("u201416702.jpg")
u201416702_face_encoding = face_recognition.face_encodings(u201416702_image)[0]
#id:4
u201420363_image = face_recognition.load_image_file("u201420363.jpg")
u201420363_face_encoding = face_recognition.face_encodings(u201420363_image)[0]
#id:6
#u201423717_image = face_recognition.load_image_file("u201423717.jpg")
#u201423717_face_encoding = face_recognition.face_encodings(u201423717_image)[0]
#id:11
u201411312_image = face_recognition.load_image_file("u201411312.jpg")
u201411312_face_encoding = face_recognition.face_encodings(u201411312_image)[0]
#id:19
u201414905_image = face_recognition.load_image_file("u201414905.jpg")
u201414905_face_encoding = face_recognition.face_encodings(u201414905_image)[0]
#id:23
u201420684_image = face_recognition.load_image_file("u201420684.jpg")
u201420684_face_encoding = face_recognition.face_encodings(u201420684_image)[0]
#id:43
u201517035_image = face_recognition.load_image_file("u201517035.jpg")
u201517035_face_encoding = face_recognition.face_encodings(u201517035_image)[0]
#id:44
u201414839_image = face_recognition.load_image_file("u201414839.jpg")
u201414839_face_encoding = face_recognition.face_encodings(u201414839_image)[0]
#id:45
u201518514_image = face_recognition.load_image_file("u201518514.jpg")
u201518514_face_encoding = face_recognition.face_encodings(u201518514_image)[0]
#id:50
u201416444_image = face_recognition.load_image_file("u201416444.jpg")
u201416444_face_encoding = face_recognition.face_encodings(u201416444_image)[0]
#id:57
u201415738_image = face_recognition.load_image_file("u201415738.jpg")
u201415738_face_encoding = face_recognition.face_encodings(u201415738_image)[0]
#id:59
u201414199_image = face_recognition.load_image_file("u201414199.jpg")
u201414199_face_encoding = face_recognition.face_encodings(u201414199_image)[0]
#id:60
u201511336_image = face_recognition.load_image_file("u201511336.jpg")
u201511336_face_encoding = face_recognition.face_encodings(u201511336_image)[0]
#id:66
u201510923_image = face_recognition.load_image_file("u201510923.jpg")
u201510923_face_encoding = face_recognition.face_encodings(u201510923_image)[0]
#id:72
#u201420181_image = face_recognition.load_image_file("u201420181.jpg")
#u201420181_face_encoding = face_recognition.face_encodings(u201420181_image)[0]
#id:76
u201418397_image = face_recognition.load_image_file("u201418397.jpg")
u201418397_face_encoding = face_recognition.face_encodings(u201418397_image)[0]
#id:77
#u201413838_image = face_recognition.load_image_file("u201413838.jpg")
#u201413838_face_encoding = face_recognition.face_encodings(u201413838_image)[0]
#id:80
#u201510738_image = face_recognition.load_image_file("u201510738.jpg")
#u201510738_face_encoding = face_recognition.face_encodings(u201510738_image)[0]
#id:84
#u201410268_image = face_recognition.load_image_file("u201410268.jpg")
#u201410268_face_encoding = face_recognition.face_encodings(u201410268_image)[0]
#id:85
u201412061_image = face_recognition.load_image_file("u201412061.jpg")
u201412061_face_encoding = face_recognition.face_encodings(u201412061_image)[0]
#id:102
u201417582_image = face_recognition.load_image_file("u201417582.jpg")
u201417582_face_encoding = face_recognition.face_encodings(u201417582_image)[0]
#id:106
#u201510540_image = face_recognition.load_image_file("u201510540.jpg")
#u201510540_face_encoding = face_recognition.face_encodings(u201510540_image)[0]
#id:109
u201314158_image = face_recognition.load_image_file("u201314158.jpg")
u201314158_face_encoding = face_recognition.face_encodings(u201314158_image)[0]
#id:115
u201512304_image = face_recognition.load_image_file("u201512304.jpg")
u201512304_face_encoding = face_recognition.face_encodings(u201512304_image)[0]
#id:117
u201613349_image = face_recognition.load_image_file("u201613349.jpg")
u201613349_face_encoding = face_recognition.face_encodings(u201613349_image)[0]
#id:118
u201517391_image = face_recognition.load_image_file("u201517391.jpg")
u201517391_face_encoding = face_recognition.face_encodings(u201517391_image)[0]
#id:119
u201625709_image = face_recognition.load_image_file("u201625709.jpg")
u201625709_face_encoding = face_recognition.face_encodings(u201625709_image)[0]
#id:120
#u201611702_image = face_recognition.load_image_file("u201611702.jpg")
#u201611702_face_encoding = face_recognition.face_encodings(u201611702_image)[0]
#id:121
#u201520369_image = face_recognition.load_image_file("u201520369.jpg")
#u201520369_face_encoding = face_recognition.face_encodings(u201520369_image)[0]
#id:122
u201415551_image = face_recognition.load_image_file("u201415551.jpg")
u201415551_face_encoding = face_recognition.face_encodings(u201415551_image)[0]
#id:123
u201320400_image = face_recognition.load_image_file("u201320400.jpg")
u201320400_face_encoding = face_recognition.face_encodings(u201320400_image)[0]
#id:124
u201420413_image = face_recognition.load_image_file("u201420413.jpg")
u201420413_face_encoding = face_recognition.face_encodings(u201420413_image)[0]
#id:129
u201420554_image = face_recognition.load_image_file("u201420554.jpg")
u201420554_face_encoding = face_recognition.face_encodings(u201420554_image)[0]
#id:130
u201523752_image = face_recognition.load_image_file("u201523752.jpg")
u201523752_face_encoding = face_recognition.face_encodings(u201523752_image)[0]
#id:132
u201421988_image = face_recognition.load_image_file("u201421988.jpg")
u201421988_face_encoding = face_recognition.face_encodings(u201421988_image)[0]
#id:22
u201616943_image = face_recognition.load_image_file("u201616943.jpg")
u201616943_face_encoding = face_recognition.face_encodings(u201616943_image)[0]
#id:24
u201315089_image = face_recognition.load_image_file("u201315089.jpg")
u201315089_face_encoding = face_recognition.face_encodings(u201315089_image)[0]
#id:61
u201511334_image = face_recognition.load_image_file("u201511334.jpg")
u201511334_face_encoding = face_recognition.face_encodings(u201511334_image)[0]
#id:64
u201421465_image = face_recognition.load_image_file("u201421465.jpg")
u201421465_face_encoding = face_recognition.face_encodings(u201421465_image)[0]
#id:68
u201319643_image = face_recognition.load_image_file("u201319643.jpg")
u201319643_face_encoding = face_recognition.face_encodings(u201319643_image)[0]



#Creando arreglo de rostros
# CODIGO_face_encoding
known_face_encodings = [
    u201416702_face_encoding,
    u201420363_face_encoding,
    #u201423717_face_encoding,
    u201411312_face_encoding,
    u201414905_face_encoding,
    u201420684_face_encoding,
    u201517035_face_encoding,
    u201414839_face_encoding,
    u201518514_face_encoding,
    u201416444_face_encoding,
    u201415738_face_encoding,
    u201414199_face_encoding,
    u201511336_face_encoding,
    u201510923_face_encoding,
    #u201420181_face_encoding,
    u201418397_face_encoding,
    #u201413838_face_encoding,
    #u201510738_face_encoding,
    #u201410268_face_encoding,
    u201412061_face_encoding,
    u201417582_face_encoding,
    #u201510540_face_encoding,
    u201314158_face_encoding,
    u201512304_face_encoding,
    u201613349_face_encoding,
    u201517391_face_encoding,
    u201625709_face_encoding,
    #u201611702_face_encoding,
    #u201520369_face_encoding,
    u201415551_face_encoding,
    u201320400_face_encoding,
    u201420413_face_encoding,
    u201420554_face_encoding,
    u201523752_face_encoding,
    u201421988_face_encoding,
    u201616943_face_encoding,
    u201315089_face_encoding,
    u201511334_face_encoding,
    u201421465_face_encoding,
    u201319643_face_encoding
    

]

#ID en el mismo orden

known_face_names = [
    "3",
    "4",
    #"6",
    "11",
    "19",
    "23",
    "43",
    "44",
    "45",
    "50",
    "57",
    "59",
    "60",
    "66",
    #"72",
    "76",
    #"77",
    #"80",
    #"84",
    "85",
    "102",
    #"106",
    "109",
    "115",
    "117",
    "118",
    "119",
    #"120",
    #"121",
    "122",
    "123",
    "124",
    "129",
    "130",
    "132",
    "22",
    "24",
    "61",
    "64",
    "68"
]


face_locations = []
face_encodings = []
face_names = []
process_this_frame = True

clockvar=datetime.datetime.now()

while True:
   
    ret, frame = video_capture.read()
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    rgb_small_frame = small_frame[:, :, ::-1]

    if process_this_frame:
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            #Comprobar con cada rostro del arreglo
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
            name = "Desconocido"

            # Si no encuentra, usar la más cercana
            face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)
            if matches[best_match_index]:
                name = known_face_names[best_match_index]

            face_names.append(name)

    process_this_frame = not process_this_frame

    if not face_names and (clockvar+datetime.timedelta(0,3)).strftime("%X")==datetime.datetime.now().strftime("%X"):
        clockvar=datetime.datetime.now()
        print(str(datetime.datetime.now().strftime("%X")))
        print("Enviar Ninguno")
        data =  { 'IdPersona': "Ninguno"
                }          
        result = firebase.post('/Interacciones',data)
        print("Data enviada: Ninguno")
        
    #Mostrar resultados
    for (top, right, bottom, left), name in zip(face_locations, face_names):
        
        top *= 4
        right *= 4
        bottom *= 4
        left *= 4

        #Cuadro
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        #Nombre
        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
        
        
        print(str(datetime.datetime.now().strftime("%X")))
        #Enviar Nombre a Firebase
        if name == "Desconocido":
            break
        elif name!="" and (clockvar+datetime.timedelta(0,3)).strftime("%X")==datetime.datetime.now().strftime("%X"):
            print("Enviar")
            clockvar=datetime.datetime.now()
            data =  { 'IdPersona': name
                    }  
            result = firebase.post('/Interacciones',data)
            print("Data enviada: ",str(name))
            break
    
    #Mostrar video
    cv2.imshow('Video', frame)
    
    #time.sleep(8)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        data =  { 'IdPersona': "Ninguno"
                }  
        result = firebase.post('/Interacciones',data)
        break

#Soltar webcam
video_capture.release()
cv2.destroyAllWindows()