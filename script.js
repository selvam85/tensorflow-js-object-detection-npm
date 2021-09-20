import '@tensorflow/tfjs';
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const chooseFiles = document.getElementById('chooseFiles');
const selectedImg = document.getElementById('selectedImg');
const identifyObjectsButton = document.getElementById('identifyObjectsButton');
const imgDiv = document.getElementById('imgDiv');

//Load the pre-trained coco-ssd model
var model;
cocoSsd.load().then(cocoSsdModel => {
  model = cocoSsdModel;
});

chooseFiles.onchange = evt => {
  //Clear the image container (div element) before displaying the currently selected image
  for(let i = 0; i < imgDivChildren.length; i++) {
    imgDiv.removeChild(imgDivChildren[i]);
  }

  //Display the selected file and enable the 'Identify Objects' button
  const [file] = chooseFiles.files
  if (file) {
    selectedImg.src = URL.createObjectURL(file)
    identifyObjectsButton.disabled = false;
  }
};

var imgDivChildren = [];
identifyObjectsButton.addEventListener('click', function() {
    if(model) {
      model.detect(selectedImg).then(predictions => {
        console.log("Predictions: ", predictions);

        imgDivChildren = [];
        for(let i = 0; i < predictions.length; i++) {

          const boxHeader = document.createElement("p");
          boxHeader.setAttribute("class", "boxHeader");
          boxHeader.innerText = predictions[i].class  + " - " 
                                + Math.round(parseFloat(predictions[i].score) * 100) 
                                + "% confidence";
          boxHeader.style = "margin-left: " + predictions[i].bbox[0] + "px; " +
                            "margin-top: " + (predictions[i].bbox[1] - 20) + "px;" +
                            "width: " + (predictions[i].bbox[2] - 10) + "px; " + 
                            "top: 0; " +
                            "left: 0;";

          const boxDiv = document.createElement("div");
          boxDiv.setAttribute("class", "box");
          boxDiv.style = "left: " + predictions[i].bbox[0] + "px; " + 
                         "top: " + predictions[i].bbox[1] + "px; " +
                         "width: " + predictions[i].bbox[2] + "px; " +
                         "height: " + predictions[i].bbox[3] + "px;"

          imgDiv.appendChild(boxDiv);
          imgDiv.appendChild(boxHeader);

          imgDivChildren.push(boxDiv);
          imgDivChildren.push(boxHeader);

          identifyObjectsButton.disabled = true;
        }   
      });
    }
});