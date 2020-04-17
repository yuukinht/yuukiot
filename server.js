var mc = require('minecraft-protocol');
var states = mc.states;
var client = mc.createClient({
  host: "gar.aternos.host",
  port: 10156,
  username: "AfkBot"
});
client.on('connect',function() {
  console.log('Stuff to do when you recieve the connect packet!')
});
client.on('state', function (newState) {
  if (newState === states.PLAY) {
	  client.write('chat', { message: "---------------------------------------" });
      reload();	  
  }
});
function x(){
	client.write('chat', { message: "---------------------------------------" });
}
function reload(){
	client.write('chat', { message: "Reload sau 30s" });
	setTimeout(function (){
		client.write('chat', { message: "Reload sau 5s" });
	},25000);
	setTimeout(function (){
		client.write('chat', { message: "Reload sau 4s" });
	},26000);
	setTimeout(function (){
		client.write('chat', { message: "Reload sau 3s" });
	},27000);
	setTimeout(function (){
		client.write('chat', { message: "Reload sau 2s" });
	},28000);
	setTimeout(function (){
		client.write('chat', { message: "Reload sau 1s" });
	},29000);
	setTimeout(function (){
		client.write('chat', { message: "/reload" });
	},30000);
}
setInterval(x,9*1000*60);
setInterval(x,601000*60);
