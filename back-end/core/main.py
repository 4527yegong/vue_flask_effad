# from core import process, predict
from vit import vit_model,predict
import cv2
import os
import numpy as np
# def c_main(path, model, ext):
#     image_data = process.pre_process(path)
#     image_info = predict.predict(image_data, model, ext)

#     return image_data[1] + '.' + ext, image_info

def c_main(path, ext, type):
    img_y, image_info = predict.predict(path, type)

    if not isinstance(img_y, np.ndarray):
        raise TypeError('img_y 不是一个有效的 NumPy 数组。')

    file_name_with_extension = os.path.split(path)[1]

    file_name, _ = os.path.splitext(file_name_with_extension)

    if not cv2.imwrite('./tmp/draw/{}.{}'.format(file_name, ext), img_y):
        raise Exception('保存图片时出错.Error saving thepicture.')
    print('图片保存成功.Picture saved successfully.')
    return file_name + '.' + ext, image_info

if __name__ == '__main__':
    pass
