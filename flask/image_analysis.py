import os
import boto3
import botocore

from flask import Flask, request, jsonify
from flask_cors import CORS

# model
from libs.pconv_model import PConvUnet
from keras import backend

import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

import requests
from io import BytesIO

import tensorflow as tf
import sys
import json



aws_access_key_id ='s3 access_key'
aws_secret_access_key='s3 secret_access_key'

# s3 객체를 생성
s3 = boto3.resource('s3')

bucket_name = 'shot-py-test'
bucket = s3.Bucket(name=bucket_name)

# 플라스크 웹 서버 객체를 생성합니다.
app = Flask(__name__, static_folder='outputs')
CORS(app)

#s3 url을 가져와 image load
def img_load(url):
    response = requests.get(url)
    url = BytesIO(response.content)

    img = Image.open(url)
    if img.size != (512,512) :
        img = img.resize((512,512))
    img = img.convert('RGB')      # RGBA to RGB :: (H,W,4) to (H,W,3)
    img = np.array(img) / 255

    print(type(img), img.shape)  
    
    return img

# model load -> pred_image 생성
def img_analysis(original_url, mask_ori_url):
    print('original_url ::: ',original_url)
    print('mask_ori_url ::: ', mask_ori_url)

    # input image check
    ori = img_load(original_url)
    mask = img_load(mask_ori_url)
    masked = img_load(original_url)

    mask = np.where(mask==0,1,0)        # background == white / mask == black
    # background == white / mask == black
   
    masked[mask==0] = 1

    model_input_masked = masked[np.newaxis, ...]
    model_input_mask = mask[np.newaxis, ...]

    print(model_input_masked.shape, model_input_mask.shape)

    # Model
    trained_path = '/home/jin/flask/model/pconv_imagenet.26-1.07.h5'
    # vgg_weights = '/home/jin/flask/model/pytorch_to_keras_vgg16.h5'
    vgg_weights = '/home/jin/flask/model/weights.48-0.53.h5'
    model = PConvUnet(vgg_weights=vgg_weights, inference_only=True)
    model.load(trained_path, train_bn=False)

    pred_imgs = model.predict([model_input_masked, model_input_mask])

    return pred_imgs[0], masked

# image s3 upload and url reuturn
def s3_upload(folder_name, image, file_name):

    # narray to PIL
    img = Image.fromarray((image * 255).astype(np.uint8))

    result_img = BytesIO()
    img.save(result_img,'png')
    result_img.seek(0)

    s3_client = boto3.client('s3', aws_access_key_id=aws_access_key_id, 
                                     aws_secret_access_key=aws_secret_access_key, 
                                     region_name='ap-northeast-2')

    s3_client.upload_fileobj(result_img, bucket_name, folder_name+file_name+'.png' ,ExtraArgs={'ACL': 'public-read'})

    return "https://shot-py-test.s3.ap-northeast-2.amazonaws.com/"+folder_name+file_name+'.png'


@app.route("/process", methods=['GET', 'POST'])
def process():
    
    backend.clear_session()

    # print('process start', file=sys.stdout)
    result = {}
    # content = request.json
    content = request.get_json()
    # print(request, file=sys.stdout)
    # print(request.mimetype, file=sys.stdout)
    # print(request.get_data(), file=sys.stdout)
    # print(request.get_json(), file=sys.stdout)

    content = json.loads(request.get_data())
    # print(content)


    original_url, mask_ori_url = '',''
    # original/
    original_url = content['analysis_url']
    # mask/
    mask_ori_url = content['mask_url']
    file_name=original_url[62:76]

    pred_img, masked_img = img_analysis(original_url, mask_ori_url)

    pred_url = s3_upload('predict/', pred_img, file_name)
    masked_url = s3_upload('masked_ori/', masked_img, file_name)
    print('pred_url ::: ',pred_url)
    print('masked_url ::: ', masked_url)

    result = {
        "url2": pred_url, 
        "url1": masked_url
        }

    return jsonify(result)
 
####

@app.route("/getimage", methods=['GET', 'POST'])
def getimage():
    from minio import Minio

    client = Minio('s3.ap-northeast-2.amazonaws.com',
                access_key=aws_access_key_id,
                secret_key=aws_secret_access_key)

    # List all object paths in bucket that begin with hello.
    objects = client.list_objects(bucket_name, prefix='predict',
                                recursive=True)

    url_list = []
    for obj in objects:
        url = 'https://{0}.s3.ap-northeast-2.amazonaws.com/{1}'.format(obj.bucket_name, obj.object_name)
        url_list.append(url)
    url_list = url_list[1:]


    result = []
    for i in range(len(url_list)) :
        result.append({'id':i+1, 'url':url_list[len(url_list)-1-i]})

    print(result)

    return json.dumps(result)


if __name__ == '__main__':

    app.run('0.0.0.0', port=5004, threaded=True)  # 처리 속도 향상을 위해 쓰레드를 적용합니다. #
