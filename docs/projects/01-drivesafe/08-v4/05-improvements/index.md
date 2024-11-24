---
title: v4 – Improvements
description: Some improvements that can be made in the next version of this model.
sidebar_label: v4 – Improvements
---

Although the model has shown a quantum leap in terms of performance, there are still some areas that can be improved in the next version of the model. Here are some of the improvements that can be made:

## 1. Hyperparameter Tuning

Observe the [training plot](../01-intro/index.md#training-plot) of the model. The `val_acc` seems to plateau around the 7 epochs mark, which could be a sign of **underfitting**. However, `train_loss` and `val_loss` seem to be continuously decreasing, which is a good sign.

One thing we could do to improve the model is to **tune the hyperparameters**. This could include **increasing the number of epochs**, **changing the learning rate**, **changing the batch size**, etc.

:::tip Computational Complexity

- On introducing the **ResNet50** layer (via the Keras [TimeDistributed layer](https://keras.io/api/layers/recurrent_layers/time_distributed/)), the model has become significantly more computationally complex.
- The model now has to process **both temporal data** (using the LSTM layer) and **image data** (using the ResNet50 layer).
- I have noticed a significant increase in the time taken to train the model on my machine (M2 Pro Macbook Pro 14")

:::

## 2. Mean Subtraction

See that in the [pyimagesearch article](https://pyimagesearch.com/2019/07/15/video-classification-with-keras-and-deep-learning/) that I heavily referenced in this project, the author uses mean subtraction to normalize the data. This is a technique that can be used to improve the performance of the model.

```python {18-20,25,27} title="Extracted from the PyImageSearch article"
# initialize the training data augmentation object
trainAug = ImageDataGenerator(
	rotation_range=30,
	zoom_range=0.15,
	width_shift_range=0.2,
	height_shift_range=0.2,
	shear_range=0.15,
	horizontal_flip=True,
	fill_mode="nearest")

# initialize the validation/testing data augmentation object (which
# we'll be adding mean subtraction to)
valAug = ImageDataGenerator()

# define the ImageNet mean subtraction (in RGB order) and set the
# the mean subtraction value for each of the data augmentation
# objects
mean = np.array([123.68, 116.779, 103.939], dtype="float32")
trainAug.mean = mean
valAug.mean = mean

...

H = model.fit(
	x=trainAug.flow(trainX, trainY, batch_size=32),
	steps_per_epoch=len(trainX) // 32,
	validation_data=valAug.flow(testX, testY),
	validation_steps=len(testX) // 32,
	epochs=args["epochs"])
```

:::tip Earlier Versions

- Earlier versions of this model does indeed **use mean subtraction**.
- These versions are: [v1](../../05-v1/index.md) – [v2](../../06-v2/01-intro/index.md).
- These versions do not have nay **LSTM/RNN layers**.

:::

Earlier versions of this model use mean subtraction (as proposed by the [pyimagesearch article](https://pyimagesearch.com/2019/07/15/video-classification-with-keras-and-deep-learning/)). The reason why this was not included in this version of the model is because as we added the LSTM layer, we had to change the way the data was fed into the model.

In previous versions, data were fed in as **non-sequential, non-temporal data** (individual images fed into a ResNet50 CNN with transfer learning). The task of mean subtraction was trivial.

I did not include mean subtraction code simply because it became a non-trivial task, but still could be done. I wanted to first see how well the model would perform without mean subtraction, and then add it in later if necessary.

This could be a potential area for improvement in the next version of the model. Regardless, the model has shown a significant improvement in performance just from adding the ResNet50 layer to the [v3 LSTM-only model](../../07-v3/index.md).

## 3. UI + `matplotlib`

In [DriveSafe v2](../../06-v2/01-intro/index.md), a very simple animated `matplotlib` graph was used to show the model's predictions in real-time. It was stripped from v3 onwards as the model was being changed significantly and I wanted to focus on the model's performance rather than the UI.