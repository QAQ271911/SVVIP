@charset "UTF-8";
:root {
  --bg: #08131e;
  --panel: #102333;
  --panel2: #142d40;
  --line: #2d4d68;
  --text: #edf7ff;
  --muted: #9cb6ca;
  --gold: #f5d27b;
  --blue: #7ab6ff;
  --green: #79e2a6;
  --red: #ff8b8b;
  --purple: #d6b9ff;
  --shadow: 0 12px 30px #0005;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: radial-gradient(circle at 20% 0, #1b3a50 0, #08131e 42%);
  color: var(--text);
  font: 14px/1.65 system-ui, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif;
}
button, select, input { font: inherit; }
button { cursor: pointer; }
.app { max-width: 1500px; margin: auto; padding: 18px; }
.top {
  display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 16px;
}
.brand { font-size: 25px; font-weight: 800; color: var(--gold); }
.version, .sub, .muted { color: var(--muted); font-size: 12px; }
.topright { display: flex; gap: 10px; align-items: center; }
.year { color: var(--blue); font-weight: 700; }
.grid { display: grid; grid-template-columns: 280px 1fr 300px; gap: 16px; }
.bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
.panel {
  background: linear-gradient(145deg, #102333f2, #0c1d2bf2);
  border: 1px solid var(--line); border-radius: 12px; padding: 16px; box-shadow: var(--shadow);
}
h2, h3 { margin: 0 0 10px; }
h2 { font-size: 17px; }
h3 { font-size: 14px; color: var(--gold); }
select {
  width: 100%; padding: 9px; margin: 4px 0; background: #0a1b29; color: var(--text);
  border: 1px solid var(--line); border-radius: 7px;
}
.card {
  background: #0b1d2b; border: 1px solid #25445b; border-radius: 9px; padding: 12px; margin-top: 12px;
}
.portrait { font-size: 34px; float: right; }
.stat {
  display: grid; grid-template-columns: 72px 1fr 38px; gap: 7px; align-items: center; margin: 6px 0; font-size: 12px;
}
.bar { height: 7px; background: #20394c; border-radius: 8px; overflow: hidden; }
.fill { height: 100%; background: var(--blue); border-radius: 8px; transition: width .3s; }
.fill.good { background: var(--green); }
.fill.warn { background: var(--gold); }
.fill.bad { background: var(--red); }
.action {
  width: 100%; text-align: left; background: #122c3e; color: var(--text); border: 1px solid #315873;
  border-radius: 8px; padding: 10px; margin: 5px 0; transition: .15s;
}
.action:hover:not(:disabled) { transform: translateY(-1px); border-color: var(--gold); background: #18394e; }
.action:disabled { opacity: .42; cursor: not-allowed; }
.action b { display: block; color: var(--gold); }
.action small { display: block; color: var(--muted); }
.toolbar { display: flex; gap: 7px; flex-wrap: wrap; }
.toolbar button, .choice {
  border: 1px solid var(--line); border-radius: 7px; padding: 7px 10px; background: #17344a; color: var(--text);
}
.toolbar button:hover, .choice:hover { border-color: var(--gold); }
.notice { border-left: 3px solid var(--gold); padding-left: 10px; color: #dceaf3; }
.tags span, .pill { display: inline-block; border: 1px solid #426078; border-radius: 20px; padding: 1px 7px; margin: 2px; color: var(--blue); font-size: 11px; }
.regions { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px; }
.region { border: 1px solid #294b63; border-radius: 8px; padding: 9px; background: #0e2637; }
.region strong { display: block; color: var(--gold); }
.heat { font-size: 12px; color: var(--red); }
.list { max-height: 250px; overflow: auto; }
.log { padding: 5px 0; border-bottom: 1px solid #1e394d; color: #c7d9e5; font-size: 12px; }
.goal { display: flex; justify-content: space-between; border-bottom: 1px solid #1e394d; padding: 7px 0; }
.done { color: var(--green); }
.modal { display: none; position: fixed; inset: 0; background: #02080dcc; place-items: center; padding: 18px; z-index: 5; }
.modal.open { display: grid; }
.modal-box { max-width: 620px; width: 100%; background: #112b3d; border: 1px solid var(--gold); border-radius: 12px; padding: 22px; box-shadow: 0 20px 70px #000b; }
.choices { display: grid; gap: 8px; }
.choice { text-align: left; padding: 12px; }
.choice b { display: block; color: var(--gold); }
.toast { position: fixed; right: 20px; bottom: 20px; background: #15384c; border: 1px solid var(--green); padding: 10px 14px; border-radius: 8px; display: none; z-index: 9; }
.toast.show { display: block; }
.danger { color: var(--red); }
@media (max-width: 1000px) { .grid { grid-template-columns: 1fr 1fr; } .grid .main { grid-column: 1 / -1; } .bottom { grid-template-columns: 1fr; } }
@media (max-width: 620px) { .app { padding: 10px; } .top { align-items: flex-start; flex-direction: column; } .grid, .bottom { display: block; } .panel { margin-bottom: 12px; } }


















































































































































n












































































































































































