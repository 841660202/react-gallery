var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');
//图片组件
var ImgFigure = React.createClass({

    /*
     * imgFigure 的点击处理函数
     */
    handleClick: function (e) {

        if (this.props.arrange.isCenter) {
            this.props.inverse(); //在中间被点击翻转
        } else {
            this.props.center(); //不在中间被点击到中间
        }

        e.stopPropagation(); //阻止冒泡
        e.preventDefault(); //阻止默认行为
    },

    render: function () {

        var styleObj = {};

        // 如果props属性中指定了这张图片的位置，则使用
        if (this.props.arrange.pos) {
            styleObj = this.props.arrange.pos;
            console.info('styleObj');
            console.info(styleObj);
        }

        // 如果图片的旋转角度有值并且不为0， 添加旋转角度
        if (this.props.arrange.rotate) {
            (['MozTransform', 'msTransform', 'WebkitTransform', 'transform'])
                .forEach(function (value) {
                    //动态生成对象的---键值对
                    styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
                }.bind(this));
            console.info('rotate => styleObj');
            console.info(styleObj);
        }

        // 如果是居中的图片， z-index设为11
        if (this.props.arrange.isCenter) {
            styleObj.zIndex = 11;
        }

        var imgFigureClassName = 'img-figure'; //给每张图片设置大小等基样式本
        //是否反转
        imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

        return (
            <figure
                className={imgFigureClassName}
                style={styleObj}                               // 样式对象
                onClick={this.handleClick}>
                <img src={this.props.data.imageURL} alt={this.props.data.title}/> {/*这里面的有个事件，他会冒泡，所以函数阻止冒泡*/}
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back" onClick={this.handleClick}>
                        <p>
                            {this.props.data.desc}
                        </p>
                    </div>
                </figcaption>
            </figure>
        );
    }
});
//改变自身样式
//子组件回调
module.exports = ImgFigure;
