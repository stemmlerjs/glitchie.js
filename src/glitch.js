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
  }

  /**
   * read
   * 
   * @desc 
   * @param {File} file of type png, jpeg
   */

  read (file) {
    let input = file.target;
    let reader = new FileReader();

    reader.onload = () => {
      debugger;
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
        this._renderImage(dataURL)
      };
    };
    reader.readAsDataURL(input.files[0]);
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
    let canvas = document.createElement("canvas");
    let context;
    let imageData;

    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);

    imageData = context.getImageData(0, 0, width, height);
    this._imageInBytes = new Uint32Array(imageData.data.buffer)
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

  _renderImage (dataURL) {
    let output = document.getElementById('output')
    output.src = dataURL;
  }

  redo() {}
  glitch(iterations) {}
}
