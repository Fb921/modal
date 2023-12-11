'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modal_container{background-color:#00000070;display:flex;height:100vh;left:0;position:fixed;top:0;width:100%}.modal_container .modal_content-container{background:#fff;border-radius:20px;margin:auto;max-width:90%;min-width:300px;padding:40px 20px 30px;position:relative;width:auto}.modal_container .modal-close_container{font-size:30px;position:absolute;right:10px;text-align:right;top:10px}.modal_container .modal-close_container span{cursor:pointer}.modal_container[data-display=true]{display:flex}.modal_container[data-display=false]{display:none}.modal_container div[data-display=true]{display:block}.modal_container .modal_title{font-size:23px;margin:10px 0 15px}";
styleInject(css_248z);

function Modal({
  id,
  collapse,
  title,
  content,
  closeModal
}) {
  return /*#__PURE__*/React__default["default"].createElement("section", {
    id: id,
    className: "modal_container",
    "data-display": collapse
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal_content-container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-close_container"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    onClick: () => {
      closeModal(false);
    }
  }, "\xD7")), title ? /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "modal_title"
  }, title) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal_content"
  }, content)));
}

module.exports = Modal;
