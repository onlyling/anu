'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ReactWX = require('../../../../ReactWX');

var _ReactWX2 = _interopRequireDefault(_ReactWX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function P() {
    this.state = {
        mode: 'normal',
        devicePosition: 'back',
        flash: 'auto',
        src: ''
    };
}

P = _ReactWX2.default.miniCreateClass(P, _ReactWX2.default.Component, {
    takePhoto: function () {
        const ctx = wx.createCameraContext();

        ctx.takePhoto({
            quality: 'high',
            success: res => {
                this.setState({
                    src: res.tempImagePath
                });
            },
            error: function (err) {
                // eslint-disable-next-line
                console.log(err);
            }
        });
    },
    render: function () {
        var h = _ReactWX2.default.createElement;

        return h('view', { style: 'display:flex;flex-direction:column;align-items:center;padding-top:25rpx;' }, h('view', null, h('camera', { mode: this.state.mode })), h('view', { style: 'font-size: 32rpx;' }, h('button', { onTap: this.takePhoto, 'data-tap-uid': 'e1946', 'data-class-uid': 'c1185', 'data-instance-uid': this.props.instanceUid }), h('text', { style: 'color: #999;' }, '\u9884\u89C8'), h('image', { src: this.state.src })));;
    },
    classUid: 'c1185'
}, {});
Page(_ReactWX2.default.createPage(P, 'pages/demo/native/camera/index'));

exports.default = P;