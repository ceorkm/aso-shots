const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const pos={};
for(const [s,w,h] of [['bag',1400,1500],['stacks',1400,1100],['coin',600,600],['coin2',600,600]]){
 const p=await b.newPage({viewport:{width:w,height:h}});p.on('pageerror',e=>console.log('ERR',s,e.message));
 await p.goto(`http://localhost:8792/render.html?scene=${s}&w=${w}&h=${h}`);await p.waitForFunction(()=>window.__done,{timeout:90000});
 pos[s]=await p.evaluate(()=>window.__pos);await p.screenshot({path:`img/${s}.png`,omitBackground:true});await p.close();console.log('ok',s);}
fs.writeFileSync('img/pos.json',JSON.stringify(pos));await b.close();})();
