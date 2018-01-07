(function ($) {
  var audio = document.getElementsByTagName('audio')[0];

  if (!audio) {
    return;
  }

  var $img = $('<img width="18px" style="opacity: 0.7;">')
    .attr('src', chrome.extension.getURL("app/images/stopwatch.png"));

  var $text = $('<span class="rewind_text">x1.0</span>');

  var rates = [1.0, 1.2, 1.4, 1.6, 1.8];

  var rateIndex = 0;

  $('<button type="button" style="width: 32px; height: 32px">')
    .append($img, $text)
    .insertBefore($('button[data-plyr="mute"]'))
    .on('click', function () {
      rateIndex = (rateIndex + 1) % rates.length;

      var rate = rates[rateIndex];

      audio.playbackRate = rate;

      $text.text('x' + rate.toFixed(1));
    });
})(jQuery);
