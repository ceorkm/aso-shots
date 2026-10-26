const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const p=await b.newPage({viewport:{width:786,height:1710}});p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('http://localhost:8793/roam5/maprender.html');await p.waitForFunction(()=>window.__done,{timeout:120000});
 fs.writeFileSync('img/map3d.json',JSON.stringify(await p.evaluate(()=>window.__pos)));await p.screenshot({path:'img/map3d.png'});await b.close();})();
