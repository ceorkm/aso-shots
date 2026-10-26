const I=(d,sz=24,sw=1.9,c='currentColor')=>`<svg width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC={plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  bed:'<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M6 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>',
  fork:'<path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2M17 2c-2 1-3 4-3 7h3v13"/>',
  pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  boat:'<path d="M3 17c2 2 4 2 6 0 2 2 4 2 6 0 2 2 4 2 6 0M5 14l1-5h12l1 5M12 4v5"/>',
  walk:'<circle cx="13" cy="4" r="2"/><path d="m10 21 2-6-3-3 1-5 4 3 3 1M9 12l-2 3"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  map:'<path d="m9 4-6 3v13l6-3 6 3 6-3V4l-6 3z"/><path d="M9 4v13M15 7v13"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  suit:'<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>',
  heart:'<path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  share:'<path d="M12 3v13M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/>',
  back:'<path d="m15 18-6-6 6-6"/>',coffee:'<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3"/>'};
const sbar=(c='#10201F')=>`<div class="sb" style="color:${c}"><span>9:41</span><span style="display:flex;gap:6px;align-items:center">
  <svg width="18" height="12" fill="${c}"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
  <svg width="16" height="12" viewBox="0 0 16 12" fill="${c}"><path d="M8 11.5 5.6 8.9a3.4 3.4 0 0 1 4.8 0zM3.6 6.9a6.2 6.2 0 0 1 8.8 0l-1.3 1.3a4.4 4.4 0 0 0-6.2 0zM1.3 4.6a9.5 9.5 0 0 1 13.4 0l-1.3 1.3a7.6 7.6 0 0 0-10.8 0z"/></svg>
  <svg width="27" height="13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="${c}" opacity=".45"/><rect x="2" y="2" width="18" height="9" rx="2" fill="${c}"/></svg></span></div><div class="di"></div>`;
const tabs=on=>`<div class="tab">${[['suit','Trips'],['cal','Itinerary'],['map','Map'],['user','Profile']].map(([k,l],i)=>`<div class="ti${i==on?' on':''}">${I(IC[k],25)}<span>${l}</span></div>`).join('')}</div><div class="hb"></div>`;
function sMap(){
  const pins=[[70,236,'#0E8C8C','coffee'],[214,214,'#D9534F','fork'],[318,252,'#5B5BD6','bed'],[262,410,'#E09F1F','boat'],[120,392,'#0E8C8C','walk'],[42,330,'#D9534F','fork']];
  return `<div class="scr" style="background:#E2E8E1">
   <img class="abs" src="img/map3d.png" style="left:0;top:0;width:393px;height:855px">
   ${sbar()}
   <div class="abs" style="left:16px;right:16px;top:60px;height:48px;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(16,32,31,.08);display:flex;align-items:center;gap:10px;padding:0 14px;font:500 15px Inter;color:#8a9694">${I(IC.search,18,2.4,'#8a9694')}Search saved spots</div>
   <div class="abs" style="left:16px;top:120px;display:flex;gap:8px;font:600 13px Inter">${['All 12','Food','Stays','Beaches'].map((c,i)=>`<span style="padding:8px 13px;border-radius:16px;${i?'background:#fff':'background:#10201F;color:#fff'};box-shadow:0 2px 8px rgba(16,32,31,.06)">${c}</span>`).join('')}</div>
   ${pins.map(([x,y,c,k])=>`<div class="abs" style="left:${x-20}px;top:${y-46}px;width:40px;height:40px;border-radius:20px 20px 20px 4px;transform:rotate(-45deg);background:${c};box-shadow:0 6px 12px rgba(16,32,31,.25);display:grid;place-items:center"><span style="transform:rotate(45deg);color:#fff;display:grid">${I(IC[k],18,2.2)}</span></div>`).join('')}
   <div class="abs" style="left:0;right:0;bottom:0;height:250px;border-radius:26px 26px 0 0;background:#fff;box-shadow:0 -8px 24px rgba(16,32,31,.08)">
     <div style="width:40px;height:5px;border-radius:3px;background:#dde5e3;margin:8px auto 12px"></div>
     <div style="padding:0 20px;display:flex;justify-content:space-between;font:700 17px Inter"><span>Near you</span><span style="font:500 14px Inter;color:#7d8a88">12 saved</span></div><div style="display:flex;align-items:center;gap:12px;padding:10px 20px"><div style="width:44px;height:44px;border-radius:12px;background:#E2574C;display:grid;place-items:center;color:#fff">${I(IC.fork,20,2.2)}</div><div><div style="font:600 15px Inter;color:#10201F">Le Petit Port</div><div style="font:500 13px Inter;color:#7d8a88">Seafood · harbour view</div></div><div style="margin-left:auto;font:600 13px Inter;color:#0E8C8C">6 min</div></div><div style="display:flex;align-items:center;gap:12px;padding:10px 20px"><div style="width:44px;height:44px;border-radius:12px;background:#0E8C8C;display:grid;place-items:center;color:#fff">${I(IC.pin,20,2.2)}</div><div><div style="font:600 15px Inter;color:#10201F">Plage du Bestouan</div><div style="font:500 13px Inter;color:#7d8a88">Beach · calm water</div></div><div style="margin-left:auto;font:600 13px Inter;color:#0E8C8C">9 min</div></div></div>
   ${tabs(2)}</div>`;
}
