const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const pos={};
for(const [s,w,h] of [['shelf',1400,1500],['gap',1400,1500],['bottle',700,900],['candle',700,700],['soap',700,700],['teapot',700,700],['mug',700,700],['jar',700,700]]){
 const p=await b.newPage({viewport:{width:w,height:h}});p.on('pageerror',e=>console.log('ERR',s,e.message));
 await p.goto(`http://localhost:8791/render.html?scene=${s}&w=${w}&h=${h}`);await p.waitForFunction(()=>window.__done,{timeout:60000});
 pos[s]=await p.evaluate(()=>window.__pos);
 await p.screenshot({path:`img/${s}.png`,omitBackground:true});await p.close();console.log('ok',s);}
fs.writeFileSync('img/pos.json',JSON.stringify(pos));await b.close();})();
