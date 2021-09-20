# Object Detection using TensorFlow.js

This is a simple node project for Object Detection using TensorFlow.js. This app uses the coco-ssd model for object detection which is part of pre-trained models in TensorFlow.js.

Learn more details about this project in this [blog post](https://github.com/tensorflow/tfjs/tree/master/tfjs-vis). 

## Run the project 
This project uses parcel to bundle the package. Use the below command to run the code, which would open up a browser and display the index.html page.

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
