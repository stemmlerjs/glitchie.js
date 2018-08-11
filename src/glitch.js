// Reading material
//
// Setting up automatic semantic versioning
// https://egghead.io/lessons/javascript-publishing-to-npm
// http://www.macaalay.com/2014/09/26/rendering-images-from-byte-arrays-and-converting-images-to-byte-arrays-using-angularjs/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

export default class Glitch {
  constructor() {
    this._currentImageIndex = -1;
    this._imageHistory = [];
    this.loaded = false;
    this._imageInBytes; // Uint32Array
    this._canvas;
    this._context;
  }

  /**
   * read
   * 
   * @desc 
   * @param {File} file of type png, jpeg
   */

  read(file) {
    return new Promise((resolve, reject) => {
      let input = file.target;
      let reader = new FileReader();

      try {
        reader.onload = () => {
          let output = document.getElementById("output");
          let image = new Image();
          let width;
          let height;
          let dataURL;

          dataURL = reader.result;
          image.src = dataURL;

          /**
           * Wait for the image to load
           */

          image.onload = () => {
            this._setupGlitchImage(image, image.width, image.height);
            this._renderImage(dataURL);
            resolve();
          };
        };
        reader.readAsDataURL(input.files[0]);
      } catch (err) {
        reject(err);
      }
    });
  }

  _createCanvasAndContext(width, height) {
    if (!this._context) {
      this._canvas = document.createElement("canvas");
      this._canvas.width = width;
      this._canvas.height = height;
      this._context = this._canvas.getContext("2d");
    }
  }

  /**
   * @private _setupGlitchImage
   *
   * @desc Convert image file to a byte array
   * and place it in a local variable so that we can
   * manipulate it.
   *
   * @param {File} file of type png, jpeg
   * @param {Number} width
   * @param {Number} height
   */

  _setupGlitchImage(image, width, height) {
    let imageData;

    this._createCanvasAndContext(width, height);
    this._context.drawImage(image, 0, 0);
    debugger;

    imageData = this._context.getImageData(0, 0, width, height);
    this._imageInBytes = new Uint8Array(imageData.data.buffer);
    console.log(this._imageInBytes);
  }

  /**
   * @private _clean
   *
   * @desc Clean the images in memory.
   */

  _clean() {}
  _addImageToMemory(file) {}
  _removeImageFromMemory() {}

  /**
   * _renderImage
   * 
   * @desc Renders the image to the display.
   * @param {String} encoded data url
   */

  _renderImage(dataURL) {
    let output = document.getElementById("output");
    output.src = dataURL;
  }

  redo() {}
  bend(iterations = 100) {
    let width = this._canvas.width;
    let height = this._canvas.height;
    let currImgBytes = this._context.getImageData(0, 0, width, height);
    let dataURL;

    // debugger;

    for (let i = 0; i <= iterations; i++) {
      currImgBytes.data[Math.floor(Math.random() * currImgBytes.data.length)] =
        currImgBytes.data[Math.floor(Math.random() * 255)];
    }

    debugger;

    var imageData = this._canvas.getContext('2d').createImageData(this._canvas.width, this._canvas.height);
    imageData.data.set(currImgBytes.data);
    
    this._context.putImageData(imageData, 50, 0);
    let data = this._canvas.toDataURL('image/png')

    // Change bytes to data url
    this._renderImage(data);
  }
}
