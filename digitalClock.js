/**
 * Created by masongzhi on 2016/7/23.
 */
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var W = canvas.width;
    var H = canvas.height;

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var vals = {
        times : [s/60,m/60,h/24],
        lineWs : [10,20,25],
        colors : ["lightgreen","#FF7359","#83CBFF","#333"],
        ctx : ctx,
        H : H,
        W : W,
        ranges : [50,70,100]
    };


    function bg(){
        ctx.beginPath();
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 30;
        ctx.arc(W/2,H/2,100,0,Math.PI*2,false);
        ctx.stroke();
    }
    bg();//背景

    //设置画板
    drawArc(vals,0);
    drawArc(vals,1);
    drawArc(vals,2);
    //重复
    setInterval(arguments.callee,500);
    //当s=0时，清空画布
    if(s == 0){
        clearDrawArc(vals,0);
    }
    if(m == 0){
        clearDrawArc(vals,1);
    }
    if(h == 0){
        clearDrawArc(vals,2);
    }
};
//设置弧线
function drawArc(vals,i){
    var ctx = vals.ctx;
    var W = vals.W;
    var H = vals.H;
    var degree = vals.times[i];
    var end_angle = Math.PI*3/2+Math.PI*2*degree;
    ctx.beginPath();
    ctx.strokeStyle = vals.colors[i];
    ctx.lineWidth = vals.lineWs[i];
    ctx.arc(W/2,H/2,vals.ranges[i],Math.PI*3/2,end_angle,false);
    ctx.stroke();

}

function clearDrawArc(vals,i){
    var ctx = vals.ctx;
    var W = vals.W;
    var H = vals.H;
    ctx.beginPath();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = vals.lineWs[i]+1;
    ctx.arc(W/2,H/2,vals.ranges[i],Math.PI*3/2,Math.PI*3/2+Math.PI*2,false);
    ctx.stroke();

}
