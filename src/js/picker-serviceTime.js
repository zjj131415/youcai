/**
 * Created by n on 2017/5/12.
 */

var nameEl1 = document.getElementById('time-one');//选择
var nameEl2 = document.getElementById('time-two');//选择
var nameEl3 = document.getElementById('time-three');//选择
nameEl1.addEventListener('click', function () {
    picker1.show();//显示picker
});
nameEl2.addEventListener('click', function () {
    picker2.show();//显示picker
});
nameEl3.addEventListener('click', function () {
    picker3.show();//显示picker
});

var data1 = [
    {
        text: '今天 周四',
        value: 1
    }, {
        text: '明天 周五',
        value: 2
    },
    {
        text: '5月6 周六',
        value: 3
    }
];

var data2 = [
    {
        text: '08:00-10:00 约满',
        value: 1
    },
    {
        text: '10:00-12:00 约满',
        value: 2
    },
    {
        text: '13:00-15:00',
        value: 3
    },
    {
        text: '15:00-17:00',
        value: 4
    },
];

var picker1 = new Picker({
    data: [data1, data2],
    selectedIndex: [0, 1],//0索引data1 1索引data2
    title: '预约上门时间'
});
var picker2 = new Picker({
    data: [data1, data2],
    selectedIndex: [0, 1],//0索引data1 1索引data2
    title: '预约上门时间'
});
var picker3 = new Picker({
    data: [data1, data2],
    selectedIndex: [0, 1],//0索引data1 1索引data2
    title: '预约上门时间'
});

picker1.on('picker.select', function (selectedVal, selectedIndex) {//确定选择的回调
    var time=nameEl1.getElementsByClassName('time')[0];//选定位置
    var timeValid=data2[selectedIndex[1]].text;
    var result=timeValid.substr(timeValid.length-2,2);//截取最后两位字符
    if(result=="约满"){//判断是否可选择
        return
    }else {
        time.innerText = data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text;//取数组里面对应的值赋值到页面位置
    }

})
picker2.on('picker.select', function (selectedVal, selectedIndex) {//确定选择的回调
    var time=nameEl2.getElementsByClassName('time')[0];//选定位置
    var timeValid=data2[selectedIndex[1]].text;
    var result=timeValid.substr(timeValid.length-2,2);//截取最后两位字符
    if(result=="约满"){//判断是否可选择
        return
    }else {
        time.innerText = data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text;//取数组里面对应的值赋值到页面位置
    }

})
picker3.on('picker.select', function (selectedVal, selectedIndex) {//确定选择的回调
    var time=nameEl3.getElementsByClassName('time')[0];//选定位置
    var timeValid=data2[selectedIndex[1]].text;
    var result=timeValid.substr(timeValid.length-2,2);//截取最后两位字符
    if(result=="约满"){//判断是否可选择
        return
    }else {
        time.innerText = data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text;//取数组里面对应的值赋值到页面位置
    }
})
picker1.on('picker.change', function (index, selectedIndex) {//滚动停止后回调
    console.log(index);
    console.log(selectedIndex);
});
picker2.on('picker.change', function (index, selectedIndex) {//滚动停止后回调
    console.log(index);
    console.log(selectedIndex);
});
picker3.on('picker.change', function (index, selectedIndex) {//滚动停止后回调
    console.log(index);
    console.log(selectedIndex);
});

