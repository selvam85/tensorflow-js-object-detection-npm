# Object Detection using TensorFlow.js (Node)

This is a simple node project for Object Detection using TensorFlow.js. This app uses the coco-ssd model for object detection which is part of pre-trained models in TensorFlow.js.

Learn more details about this project in this [blog post](https://handsondeeplearning.com/object-detection-using-tensorflow-js/). 

## Run the project 
This project uses Parcel build tool to bundle the package. Use the below command to run the code, which would open up a browser and display the index.html page.

It is tested with the latest version of node (v16.9.1) as of 9/20/2021 

```
npm run dev
```

## Project Contents

This project consists of the following three files. 

### index.html

The UI of this app. It loads the custom JS file (script.js) belonging to this app.

```HTML
<script src="./script.js" defer></script>
```

### style.css

Stylesheet required for the elements on the web page.

```HTML
<link rel="stylesheet" href="./style.css">
```

### script.js

Javascript file that handles the returned prediction of objects identified on the image by the coco-ssd model. 

This file loads the TensorFlow.js and coco-ssd models as below.

```
import '@tensorflow/tfjs';
import * as cocoSsd from "@tensorflow-models/coco-ssd";

var model;
cocoSsd.load().then(cocoSsdModel => {
  model = cocoSsdModel;
});
```
