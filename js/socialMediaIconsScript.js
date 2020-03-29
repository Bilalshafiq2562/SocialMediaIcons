var socialMedia = {
  facebook: 'http://facebook.com/',
  twitter: 'http://twitter.com/',
  flickr: 'http://flickr.com/',
  youtube: 'http://youtube.com/',
  google: 'http://google.com/',
  linkedin: 'http://linkedin.com/',
  meetup: 'http://meetup.com/',
  wordpress: 'http://wordpress.com/',
  socialmediaicons_fw: 'https://www.flaticon.com/'
};

var socialList = function () {
  var output = '<ul class="list-inline list-unstyled m-0 p-0">',
    myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output += '<li class="list-inline-item m-3"><a href="' + socialMedia[key] +
      '">' +
      '<img class="img-fluid rounded" src="images/' + key +
      '.png" alt="icon for ' + key +
      '">' +
      '</a></li>';
  }
  output += '</ul>';

  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };

}(socialMedia);