import boto3
import os

s3 = boto3.resource('s3')
region = 'ap-northeast-2'
s3.create_bucket(
    Bucket='shot-py-test',    
    CreateBucketConfiguration={'LocationConstraint': region}
    )
