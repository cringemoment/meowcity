document.write(`
  <div class = "stars"></div>
  <script src = "../js/starrynight.js"></script>
  <script src = "../js/starrytrail.js"></script>
  <div class="pagebox title">
    <img class = "logo" src = "../assets/boykisserlogo.png" alt = "cat stares at you">
    <h1 style = "margin-left: auto;">jane and josh's website</h1>
  </div>
  <div class="pagebox sidebar">
    <div class="sidebar_links">
      <li><a class = "sidebar_link" href="landing.html">go to the home page</a></li>
      <li><a class = "sidebar_link" href="about.html">readme.md</a></li>
      <li><a class = "sidebar_link" href="guestbook.html">leave a nice comment!</a></li>
      <li><a class = "sidebar_link" href="reviews.html">read our reviews!</a></li>
    </div>
  </div>
  <div class="pagebox badges">
    <div class = "webring">
      <img class = "webringimage" src = "../assets/webringlol.png" alt = "boykisser feels your shame">
      <p class = "webringtext">
        <strong>boykisser webring</strong><br>
        for the boykisser in you
      </p>
      <div class = "webringlinks">
        <a href = "landing.html">prev</a>
        <a href = "whatthehell.html">list</a>
        <a href = "landing.html">next</a>
      </div>
    </div>
    <a href = "https://cyber.dabamos.de/88x31/index.html"><img class = "badge" src = "../assets/88x31s/88x31.gif"></a>
    <a href = "https://en.wikipedia.org/wiki/Canada"><img class = "badge" src = "../assets/88x31s/can.gif"></a>
    <img class = "badge" src = "../assets/88x31s/transnow2.gif">
    <img class = "badge" src = "../assets/88x31s/noframes3.gif">
    <img class = "badge" src = "../assets/88x31s/noframes4.gif">
    <img class = "badge" src = "../assets/88x31s/noframes5.gif">
    <img class = "badge" src = "../assets/88x31s/caramell.gif">
  </div>
  <audio id="player" src="https://github.com/cringemoment/meowcity/raw/main/songs/I%20Put%20a%20Spell%20on%20You%20(152kbit_Opus).opus" type = "audio/opus"></audio>
  <div id="audioplayer">
    <p class="songtitle">Album of the week: The Social Dilemna Soundtrack<p>
    <p id = "songtitle" style = "width:100%; text-align: center">Now playing: I Put a Spell On You</p>
    <button class = "audiobutton" onclick="prevsong()"><img src = "../assets/audiobuttons/leftarrow.png" alt = "previous song"></button>
    <button class = "audiobutton" onclick="toggleplay()"><img id = "playpauseimg" src = "../assets/audiobuttons/play.png" alt = "play"></button>
    <button class = "audiobutton" onclick="togglemute()"><img id = "muteimg" src = "../assets/audiobuttons/unmuted.png" alt = "play"></button>
    <button class = "audiobutton" onclick="nextsong()"><img src = "../assets/audiobuttons/rightarrow.png" alt = "previous song"></button>
  </div>
  <script src = "../js/audiobox.js"></script>
  <script src = "../js/links.js"></script>
`);
