// 点图点击后的响应函数
function pointButtonClick(){
    document.getElementById('pointColor').style.visibility = 'visible';
}

// 苏轼情感迁徙点响应函数
var sdpButtonClickCount = 0;
function sdpButtonClick(){
    if(sdpButtonClickCount==0){
        document.getElementById('sdpdiv').style.visibility = 'visible';
        overlay = new L.echartsLayer(map, echarts);
    }
    if(sdpButtonClickCount<34){
        var optiondata ={};
        optiondata.data1 =[];
        optiondata.data2 =[];
        optiondata.data3 =[];
        for(var i = 0;i<=sdpButtonClickCount;i++){
            optiondata.data1.push(sushi.mapdata[i]);
            optiondata.data2.push(sushi.valuedata[i]);
            optiondata.data3.push(sushi.pointValuedata[i]);
        }
        document.getElementById('inputS').value = sushi.valuedata[sdpButtonClickCount][0].name;
        document.getElementById('inputE').value = sushi.valuedata[sdpButtonClickCount][1].name;
        document.getElementById('inputValue').value = sushi.valuedata[sdpButtonClickCount][1].value;
        addRemoval(optiondata);
    }
    if(sdpButtonClickCount==34){
        document.getElementById("sdpStart").disabled=true;
    }
    sdpButtonClickCount++;
}