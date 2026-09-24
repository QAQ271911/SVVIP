<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>大时代：五线史诗 v0.3.0</title>
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <div class="app">
    <header class="top">
      <div>
        <div class="brand">大时代 · 五线史诗</div>
        <span class="version">v0.3.0 · 扩展与战略加固版</span>
      </div>
      <div class="topright">
        <span class="year" id="year"></span>
        <div class="toolbar">
          <button id="save">保存</button>
          <button id="load">读取</button>
          <button id="export">导出</button>
          <button id="import">导入</button>
          <button id="nextYear">推进年份</button>
          <button id="newGame">新局</button>
        </div>
      </div>
    </header>

    <div class="grid">
      <aside class="panel">
        <h2>国家与制度 <span class="sub">统治中心</span></h2>
        <select id="nation"></select>
        <select id="route"></select>
        <div class="card">
          <span class="portrait" id="portrait">♛</span>
          <h3 id="leaderName"></h3>
          <div id="leaderInfo" class="muted"></div>
          <div class="tags" id="tags"></div>
        </div>
        <div class="card">
          <h3>国家指标</h3>
          <div id="stats"></div>
        </div>
      </aside>

      <main class="panel main">
        <h2>历史舞台 <span class="sub">国家、地区、人物与时代</span></h2>
        <div class="card">
          <h3>时代锚点</h3>
          <p id="anchor" class="notice"></p>
          <p id="advice" class="muted"></p>
        </div>
        <div class="card">
          <h3>地区局势</h3>
          <div class="regions" id="regions"></div>
        </div>
        <div class="card">
          <h3>五线进程</h3>
          <div id="goals"></div>
        </div>
        <div class="card">
          <h3>审计面板</h3>
          <div id="audit" class="muted"></div>
        </div>
      </main>

      <aside class="panel">
        <h2>战略行动 <span class="sub">每年一次</span></h2>
        <div id="actions"></div>
        <div class="card">
          <h3>结构速览</h3>
          <div id="summary"></div>
        </div>
      </aside>
    </div>

    <div class="bottom">
      <section class="panel">
        <h2>历史日志 <span class="sub" id="logCount"></span></h2>
        <div class="list" id="logs"></div>
      </section>
      <section class="panel">
        <h2>制度与提示</h2>
        <p class="muted">每年可执行一次行动。事件会在关键年份触发；红色热区会生成危机。资源不足时行动不会消耗回合，避免误操作。</p>
        <div class="toolbar">
          <button id="clearSave">清除本地存档</button>
          <button id="help">玩法说明</button>
        </div>
        <p id="status" class="muted"></p>
      </section>
    </div>
  </div>

  <div class="modal" id="modal">
    <div class="modal-box">
      <h2 id="eventTitle"></h2>
      <p id="eventText"></p>
      <div class="choices" id="choices"></div>
    </div>
  </div>

  <div class="toast" id="toast"></div>
  <input id="file" type="file" accept="application/json" hidden>

  <script type="module" src="js/main.js"></script>
</body>
</html>
