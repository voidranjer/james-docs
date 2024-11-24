---
title: DriveSafe v4
description: DriveSafe v4 - Driving Risk Evaluation from Video Input using AI with temporal data using LSTM and image features using ResNet50
sidebar_label: v4 – Intro
--- 

**Driving Risk Evaluation from Dashcam Footage using AI using LSTM (Temporal Data) and  ResNet50 (Image Features)**

**DriveSafe v4** is a hybrid of **DriveSafe v3** and **DriveSafe v2**. We combined the temporal data training using LSTM from **DriveSafe v3** and the image features using ResNet50 from **DriveSafe v2**.

**DriveSafe v4** came as a result of DriveSafe v3 not being complex enough to learn from the video data (due to the absence of transfer learning using ResNet50), which led to the model massively underfitting the data (which we had to learn the hard way, yikes 😰).

## Demo

import demoVid from './demo.mp4';

<video style={{width: "100%"}} controls>
  <source src={demoVid}/>
</video>

---

The video input used in this demo is the exact same video as the one used in the [DriveSafe v3 demo](../../07-v3/index.md#demo). However, you can already see the massive quantum leap in performance between the two models.

## Training Plot

![training_plot](training_plot.png)

Just a couple of observations, `val_acc` seem to plateau around the 7 epochs mark, which could be a sign of **underfitting**. However, `train_loss` and `val_loss` seem to be continuously decreasing, which is a good sign.

## Resources

| **Resource** | **Platform** |                              **Link**                             |
|:------------:|:------------:|:-----------------------------------------------------------------:|
|     Code     |    GitHub    |          [Link](https://github.com/voidranjer/DriveSafe)          |
|     Model    |    Kaggle    |     [Link](https://www.kaggle.com/models/voidranjer/drivesafe)    |
|    Dataset   |    Kaggle    | [Link](https://www.kaggle.com/datasets/voidranjer/drivesafe/data) |