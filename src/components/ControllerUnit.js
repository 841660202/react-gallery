
var React = require('react/addons');


// CSS
require('normalize.css');
require('../styles/main.scss');
// 控制组件
var ControllerUnit = React.createClass({
    // 这是这个组件的点击函数，与其他组件不相关，可以与其他组件的函数重名这不影响
    handleClick: function (e) {
        // 1.处理图片，自身应该也要处理 如果点击的是当前正在选中态的按钮，则翻转图片，否则将对应的图片居中
        // this.props,指向的是这个组件，这就意味着，组件可重用而不会发生，一个组件改变影响其他组件的情况
        if (this.props.arrange.isCenter) {
            this.props.inverse();//方法在父组件中由setState动作，会重新渲染-父组件的重新渲染会引起子组件的重新渲染
        } else {
            this.props.center();//方法在父组件中由setState动作，会重新渲染-父组件的重新渲染会引起子组件的重新渲染
        }

        e.preventDefault();
        e.stopPropagation();
    },
    render: function () {
        console.info('arrange');
        console.info(this.props.arrange);
        //在这里处理的是按钮，在render函数外面处理的是图片
        var controlelrUnitClassName = 'controller-unit';

        // 如果对应的是居中的图片，显示控制按钮的居中态
        if (this.props.arrange.isCenter) {
            controlelrUnitClassName += ' is-center';

            // 如果同时对应的是翻转图片， 显示控制按钮的翻转态
            if (this.props.arrange.isInverse) {
                controlelrUnitClassName += ' is-inverse';
            }
        }
        console.info('导航按钮');
        console.log(controlelrUnitClassName);//不会出现controlelrUnitClassName无限累加增长的情况，因为controlelrUnitClassName每次在h-26被重新var一次
        return (
            <span className={controlelrUnitClassName} onClick={this.handleClick}></span>
        );
    }
});
//改变自身样式
//子组件回调
module.exports = ControllerUnit;
