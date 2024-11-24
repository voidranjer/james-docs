---
title: The DriveSafe Score
description: Driver Risk Assessment using Dashcam Footage and Machine Learning
sidebar_label: DriveSafe
---

**Driver Risk Assessment using Dashcam Footage and Machine Learning**

The goal is to train an AI-model that can take in video-footage from a dashcam and assign a safety score to the driver based on their driving habits. This score can then be used by safe drivers as leverage to negotiate lower insurance rates, promoting defensive driving and road safety.

## Features

![collisions](collisions.png)
![tailgating](tailgating.png)
![lane-weaving](weaving.png)

---

## Problem Statement

Road crashes are always recognized as a safety and health problem in Canada as well as all over the world. Though a decreasing trend was seen in both collisions and victims through 2002 to 2021[1], they still remain a relatively high number. Compared to 2020, the number of fatalities and serious injuries increased from 1,746 to 1,768, 7,868 to 8,185, respectively. Among these collisions in 2021, the percentage of driver fatalities and serious injuries where victims were not using seat belts is 41.5%. 28.5% drivers not wearing seatbelt ended in fatalities and 12.5% ended in serious injury.[1] At the same time, considering the monetary cost of car accidents, National Highway Traffic Safety Administration (NHTSA) reported that traffic crashes cost $340 Billion just in 2019.[2]

Based on the listed data, it is obvious that there is a controllable part for drivers’ driving habits to potentially prevent car accidents and save money. Assuming we have the data from the dash cam, car accelerometer and GPS, it would be possible to assign a “safety score” to each individual’s driving habits, akin to the financial credit scoring mechanism employed in the financial sector. The name we have chosen for our project is “The DriveSafe Scoring Scale”.

Implementing the DriveSafe Scoring system would facilitate fair financial accountability for drivers while allowing insurance companies to assess and promote better driving habits. This approach not only incentivizes safer driving, but also offers a more customized and dynamic framework for insurance risk assessment.

## Why It Matters

We are confident that implementing this scoring system will enhance public safety. For instance, the DriveSafe score can be used to select drivers for various driving roles, including public transit (e.g., OC Transpo), Uber, and school buses in our local Ottawa community. The decreased frequency of traffic accidents will minimize both loss of life and financial burdens for drivers and insurance companies, increasing public safety while doing so.

Furthermore, our system has the unique advantage of being able to identify dangerous yet hard to prove driving behaviors, like aggressive lane switching or tailgating. These offenses are typically hard to prosecute due to their nature, however using the DriveSafe Score, one could mathematically and empirically prove that a car’s driving is unsafe, something that road cameras cannot consistently flag. This would serve as additional road monitoring for the safety of all.

Additionally, this system provides financial incentives for drivers to increase their awareness of their own driving habits, especially since it could directly influence their insurance rates. If the finance sector relies on credit scores to ensure individual accountability, a similar system for public safety and transportation, including driver assessments, becomes imperative. Just as credit scores gauge financial responsibility, a comparable mechanism could enhance accountability and safety in our daily commute.

## How ML Can Help

Machine learning is crucial in our system as it efficiently processes and analyzes the vast data collected from dash cams, identifying key patterns that relate driving behaviors to DriveSafe scores.

Our primary dataset will leverage dashcam footage due to its ubiquitous presence in society as one of the most widely used car accessories. The widespread use of dashcams ensures accessibility and abundance of data for our analysis.

When riding with an aggressive driver, we can identify their unsafe behavior through subconscious cues such as frequent unnecessary lane changes, impatient overtaking, and other observable signs. We aspire to build an AI, using ample training data, to interpret these subconscious cues effectively in a measurable and consistent manner.

This system works like a credit score for driving, encouraging drivers to be more responsible. It makes sure insurance costs are fairer by matching them with how risky each driver is.

Dash cams, widely used in vehicles, generate extensive data. However, manually parsing this data to identify risky behaviors is not feasible. Machine learning automates this process, transforming raw data into meaningful risk assessments.

## What Data to Use

To train a machine learning model, it is important to have a dataset. These are our potential candidates:

- Dashcam footage
  - [https://datasets.cms.waikato.ac.nz/ufdl/camvid/](https://datasets.cms.waikato.ac.nz/ufdl/camvid/)
  - [https://ar5iv.labs.arxiv.org/html/1904.01975](https://ar5iv.labs.arxiv.org/html/1904.01975)
- Car accelerometer data
- GPS data
- Car model specifications

  - Can also be used to assign safety scores to car brands and models.

---

1. Canadian Motor Vehicle Traffic Collision Statistics: 2021 (canada.ca)

2. Traffic Crashes Cost America Billions in 2019 | NHTSA
