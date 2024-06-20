import os
import json

import torch
from PIL import Image
from torchvision import transforms
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

# from vit_model import vit_base_patch16_224_in21k as create_model
from .vit_model import vit_base_patch16_224_in21k as create_model



def predict(img_path, type):
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

    data_transform = transforms.Compose(
        [transforms.Resize(256),
         transforms.CenterCrop(224),
         transforms.ToTensor(),
         transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])])

    # load image
    # img_path = r"D:\lib_project\vit\grape\grape\archive\Original Data\test\Black Rot\0aff8add-93ad-4099-97ae-23515744e620___FAM_B.Rot 0748_flipLR.JPG"
    assert os.path.exists(img_path), "file: '{}' dose not exist.".format(img_path)
    img = Image.open(img_path)
    plt.imshow(img)
    # [N, C, H, W]
    img = data_transform(img)
    # expand batch dimension
    img = torch.unsqueeze(img, dim=0)

    # read class_indict
    json_path = './vit/class_indices.json'
    # if not os.path.exists(json_path):
    #     with open(json_path, 'w') as f:
    #         print(f"File created: {json_path}")
    # else:
    #     print(f"File already exists: {json_path}")

    assert os.path.exists(json_path), "file: '{}' dose not exist.".format(json_path)

    with open(json_path, "r") as f:
        class_indict = json.load(f)

    # create model
    model = create_model(num_classes=4, has_logits=False).to(device)
    # load model weights

    model_weight_path = r"C:\Users\win10\Desktop\grape_weight\grape_weight\model-9.pth"

    model.load_state_dict(torch.load(model_weight_path, map_location=device))
    model.eval()
    with torch.no_grad():
        # predict class
        output = torch.squeeze(model(img.to(device))).cpu()
        predict = torch.softmax(output, dim=0)
        predict_cla = torch.argmax(predict).numpy()

    print(class_indict)

    print_res = "class: {}   prob: {:.3}".format(class_indict[str(predict_cla)],
                                                 predict[predict_cla].numpy())
    # 假设 class_indict, predict_cla 和 predict 已经定义
    class_name = class_indict[str(predict_cla)]
    probability = float(predict[predict_cla].numpy())

    # 构建结果字典
    result_dict = {
        class_name: [probability]
    }
    # plt.title(print_res)
    # for i in range(len(predict)):
    #     print("class: {:10}   prob: {:.3}".format(class_indict[str(i)],
    #                                               predict[i].numpy()))
    # # plt.show()

        # Display result on the image using Matplotlib
    # plt.imshow(img)
    plt.title(print_res)
    plt.axis('off')  # Hide axes for better visualization
    
    # Convert Matplotlib figure to NumPy array
    plt.draw()
    fig = plt.gcf()
    fig.canvas.draw()
    img_np = np.frombuffer(fig.canvas.tostring_rgb(), dtype=np.uint8)
    img_np = img_np.reshape(fig.canvas.get_width_height()[::-1] + (3,))
    # plt.close(fig)  # Close the figure to free memory

    return img_np, result_dict



# if __name__ == '__main__':
#     main()
