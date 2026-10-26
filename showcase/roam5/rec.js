// Record Roam screenshot 1 frame by frame (deterministic time), 30 fps × 8 s loop, at 886 px wide.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const p=await b.newPage({viewport:{width:2000,height:1450},deviceScaleFactor:886/603});
 await p.goto('http://localhost:8793/roam5/index.html?t=0');await p.waitForFunction(()=>window.__globeReady,{timeout:60000});
 await p.addStyleTag({content:'#a_mrs,#a_lis,#a_jtr{transition:none!important}.panel{border-radius:0!important}'});await p.waitForTimeout(1500);
 const el=await p.$('#P1');
 for(let f=0;f<240;f++){await p.evaluate(t=>window.__setT(t),f/30);await el.screenshot({path:`frames/f${String(f).padStart(3,'0')}.png`});}
 await b.close();})();
