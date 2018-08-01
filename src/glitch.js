export default class Glitch {
  constructor () {
    this._currentImageIndex = -1;
    this._imageHistory = [];
    this.loaded = false;
  }

  /**
   * @private _setupGlitchImage
   *
   * @desc Convert image file to a byte array
   * and place it in a local variable so that we can
   * manipulate it.
   *
   * @param {File} file of type png, jpeg
   */

  _setupGlitchImage (file) {}

  /**
   * @private _clean
   *
   * @desc Clean the images in memory.
   */

  _clean () {}
  _addImageToMemory (file) {}
  _removeImageFromMemory () {}
  redo () {}
  glitch (iterations) {}
}
