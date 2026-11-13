const express=require('express');const http=require('http');const {Server}=require('socket.io');
const app=express(),server=http.createServer(app),io=new Server(server);
app.use(express.static('public'));
const players={};
io.on('connection',socket=>{
 players[socket.id]={x:Math.random()*500-250,y:Math.random()*500-250,a:0,name:'Korsan-'+socket.id.slice(0,4),hp:100};
 socket.on('move',v=>{const p=players[socket.id];if(!p||!v)return;const dx=Math.max(-1,Math.min(1,Number(v.dx)||0)),dy=Math.max(-1,Math.min(1,Number(v.dy)||0));if(Math.hypot(dx,dy)>.08){p.a=Math.atan2(dy,dx);p.x+=dx*3.2;p.y+=dy*3.2;p.x=Math.max(-2000,Math.min(2000,p.x));p.y=Math.max(-2000,Math.min(2000,p.y));}});
 socket.on('fire',()=>{const p=players[socket.id];if(!p)return;for(const [id,q] of Object.entries(players)){if(id!==socket.id&&Math.hypot(p.x-q.x,p.y-q.y)<180){q.hp-=10;if(q.hp<=0){q.hp=100;q.x=Math.random()*600-300;q.y=Math.random()*600-300;}break;}}});
 socket.on('disconnect',()=>delete players[socket.id]);
});
setInterval(()=>io.emit('state',{players}),50);
const port=process.env.PORT||3000;server.listen(port,'0.0.0.0',()=>console.log('Korsan Dünyası çalışıyor: '+port));