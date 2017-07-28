
function progressLabelsPlugin(options) {
  const player = this;
  var duration = 0;
  var started = false;
  var tipLabel = null;

  if (player.controlBar){
    duration = player.duration();
    init(options)
  }

  function init(options) {
    clean()
    var seekBar = player.controlBar.progressControl.seekBar;
    var tipsControl = findTipsControler()

    if (!tipsControl) {
      tipsControl = document.createElement('div')
      tipsControl.className = "vjs-progress-tips"
      seekBar.el().appendChild(tipsControl)
    }

    initializeTipLabel();

    var width = seekBar.el().clientWidth
    options.tips.forEach(function(item){
      var tip = document.createElement('div')
      var left = width * item.seconds / duration
      if (left > 3){
        left -= 3
      }
      tip.style.left = left + 'px';
      tip.className = 'vjs-progress-tip ' + item.class
      tip['data-text'] = item.text
      tip.onmouseover = showTipLabel
      tip.onmouseout = hideTipLabel
      tipsControl.appendChild(tip)
    })
  }

  function clean() {
    var tipsControl = findTipsControler()
    if (tipsControl){
      tipsControl.innerHTML = ''
    }
  }

  function findTipsControler(){
    var seekBar = player.controlBar.progressControl.seekBar;
    var divs = seekBar.el().getElementsByTagName('div')
    for(var i = 0; i < divs.length; i++) {
      if (divs[i].className.indexOf('vjs-progress-tips') > -1 ) {
        return divs[i]
      }
    }
    return null
  }

  function initializeTipLabel() {
    if (tipLabel) {
      return;
    }
    tipLabel = videojs.createEl('div', {
      className: 'vjs-tip',
      innerHTML: "<div class='vjs-tip-arrow'></div><div class='vjs-tip-inner'></div>",
    });
    player.el().querySelector('.vjs-progress-holder').appendChild(tipLabel);
  }

  function showTipLabel(event) {
    if (tipLabel) {
      tipLabel.querySelector('.vjs-tip-inner').innerText = event.target['data-text'];
      tipLabel.style.left = (event.target.offsetLeft + 3) + 'px';
      tipLabel.style.marginLeft =
        -parseFloat(tipLabel.getBoundingClientRect().width / 2) + parseFloat(event.target.getBoundingClientRect().width / 4) + 'px';
      tipLabel.style.visibility = 'visible';
    }
  }

  function hideTipLabel() {
    if (tipLabel) {
      tipLabel.style.visibility = 'hidden'
    }
  }

  player.on('playing', function() {
    
  });
}


videojs.plugin('progressLabels', progressLabelsPlugin);
