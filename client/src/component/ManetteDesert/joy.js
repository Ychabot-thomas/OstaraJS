/**
 * @desc Principal object that draw a joystick, you only need to initialize the object and suggest the HTML container
 * @costructor
 * @param container {String} - HTML object that contains the Joystick
 * @param parameters (optional) - object with following keys:
 */
export const JoyStick = function (container, parameters) {
  parameters = parameters || {};
  var title = undefined === parameters.title ? "joystick" : parameters.title,
    width = undefined === parameters.width ? 0 : parameters.width,
    height = undefined === parameters.height ? 0 : parameters.height,
    internalFillColor =
      undefined === parameters.internalFillColor
        ? "#66350F"
        : parameters.internalFillColor,
    internalLineWidth =
      undefined === parameters.internalLineWidth
        ? 10
        : parameters.internalLineWidth,
    internalStrokeColor =
      undefined === parameters.internalStrokeColor
        ? "#50290B"
        : parameters.internalStrokeColor,
    // externalFillColor =
    //   undefined === parameters.externalFillColor
    //     ? "#FFF"
    //     : parameters.externalFillColor,
    externalLineWidth =
      undefined === parameters.externalLineWidth
        ? 5
        : parameters.externalLineWidth,
    externalStrokeColor =
      undefined === parameters.externalStrokeColor
        ? "transparent"
        : parameters.externalStrokeColor,
    autoReturnToCenter =
      undefined === parameters.autoReturnToCenter
        ? true
        : parameters.autoReturnToCenter;

  // Create Canvas element and add it in the Container object
  var objContainer = document.getElementById(container);
  var canvas = document.createElement("canvas");
  canvas.id = title;
  if (width === 0) width = objContainer.clientWidth;
  if (height === 0) height = objContainer.clientHeight;
  canvas.width = width;
  canvas.height = height;
  objContainer.appendChild(canvas);
  var context = canvas.getContext("2d");

  var pressed = 0; // Bool - 1=Yes - 0=No
  var circumference = 2 * Math.PI;
  var internalRadius = (canvas.width - (canvas.width / 2 + 10)) / 2.5;
  var maxMoveStick = internalRadius + 5;
  var externalRadius = internalRadius + 30;
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  // var directionHorizontalLimitPos = canvas.width / 10;
  // var directionHorizontalLimitNeg = directionHorizontalLimitPos * -1;
  // var directionVerticalLimitPos = canvas.height / 10;
  // var directionVerticalLimitNeg = directionVerticalLimitPos * -1;
  // Used to save current position of stick
  var movedX = centerX;
  var movedY = centerY;

  // Check if the device support the touch or not
  if ("ontouchstart" in document.documentElement) {
    canvas.addEventListener("touchstart", onTouchStart, false);
    canvas.addEventListener("touchmove", onTouchMove, false);
    canvas.addEventListener("touchend", onTouchEnd, false);
  } else {
    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mousemove", onMouseMove, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
  }
  // Draw the object
  drawExternal();
  drawInternal();
  /******************************************************
   * Private methods
   *****************************************************/
  /**
   * @desc Draw the external circle used as reference position
   */
  function drawExternal() {
    context.beginPath();
    context.arc(centerX, centerY, externalRadius, 0, circumference, false);
    context.lineWidth = externalLineWidth;
    context.strokeStyle = externalStrokeColor;
    // context.fillStyle = externalFillColor;
    context.stroke();
  }
  /**
   * @desc Draw the internal stick in the current position the user have moved it
   */
  function drawInternal() {
    context.beginPath();
    if (movedX < internalRadius) movedX = maxMoveStick;
    if (movedX + internalRadius > canvas.width)
      movedX = canvas.width - maxMoveStick;
    if (movedY < internalRadius) movedY = maxMoveStick;
    if (movedY + internalRadius > canvas.height)
      movedY = canvas.height - maxMoveStick;
    context.arc(movedX, movedY, internalRadius, 0, circumference, false);
    // create radial gradient
    var grd = context.createRadialGradient(
      centerX,
      centerY,
      5,
      centerX,
      centerY,
      200
    );
    // Light color
    grd.addColorStop(0, internalFillColor);
    // grd.addColorStop(0, externalFillColor);
    // Dark color
    grd.addColorStop(1, internalStrokeColor);
    context.fillStyle = grd;
    context.fill();
    context.lineWidth = internalLineWidth;
    context.strokeStyle = internalStrokeColor;
    context.stroke();
  }

  /**
   * @desc Events for manage touch
   */
  function onTouchStart(event) {
    pressed = 1;
  }
  function onTouchMove(event) {
    // Prevent the browser from doing its default thing (scroll, zoom)
    event.preventDefault();
    if (pressed === 1 && event.targetTouches[0].target === canvas) {
      movedX = event.targetTouches[0].pageX;
      movedY = event.targetTouches[0].pageY;
      // Manage offset
      movedX -= canvas.offsetLeft;
      movedY -= canvas.offsetTop;
      // Delete canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Redraw object
      drawExternal();
      drawInternal();
    }
  }
  function onTouchEnd(event) {
    pressed = 0;
    // If required reset position store variable
    if (autoReturnToCenter) {
      movedX = centerX;
      movedY = centerY;
    }
    // Delete canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Redraw object
    drawExternal();
    drawInternal();
    //canvas.unbind('touchmove');
  }
  /**
   * @desc Events for manage mouse
   */
  function onMouseDown(event) {
    pressed = 1;
  }
  function onMouseMove(event) {
    if (pressed === 1) {
      movedX = event.pageX;
      movedY = event.pageY;
      // Manage offset
      movedX -= canvas.offsetLeft;
      movedY -= canvas.offsetTop;
      // Delete canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Redraw object
      drawExternal();
      drawInternal();
    }
  }
  function onMouseUp(event) {
    pressed = 0;
    // If required reset position store variable
    if (autoReturnToCenter) {
      movedX = centerX;
      movedY = centerY;
    }
    // Delete canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Redraw object
    drawExternal();
    drawInternal();
    //canvas.unbind('mousemove');
  }
  /******************************************************
   * Public methods
   *****************************************************/
  /**
   * @desc The width of canvas
   * @return Number of pixel width
   */
  this.GetWidth = function () {
    return canvas.width;
  };

  /**
   * @desc The height of canvas
   * @return Number of pixel height
   */
  this.GetHeight = function () {
    return canvas.height;
  };

  /**
   * @desc The X position of the cursor relative to the canvas that contains it and to its dimensions
   * @return Number that indicate relative position
   */
  this.GetPosX = function () {
    return movedX;
  };

  /**
   * @desc The Y position of the cursor relative to the canvas that contains it and to its dimensions
   * @return Number that indicate relative position
   */
  this.GetPosY = function () {
    return movedY;
  };

  /**
   * @desc Normalizzed value of X move of stick
   * @return Integer from 0 to 1
   */
  this.GetX = function () {
    return (1 * ((movedX - centerX) / maxMoveStick)).toFixed();
  };

  /**
   * @desc Normalizzed value of Y move of stick
   * @return Integer from 0 to 1
   */
  this.GetY = function () {
    return (1 * ((movedY - centerY) / maxMoveStick) * -1).toFixed();
  };
};
