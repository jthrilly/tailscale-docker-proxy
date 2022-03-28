function FindProxyForURL(url, host) {
  var proxy_yes = "PROXY 127.0.0.1:1055";
  var proxy_no = "DIRECT";

  if (shExpMatch(url, "127.0.0.1")) {
    return proxy_no;
  }
  if (shExpMatch(url, "http://news.bbc.*")) {
    return proxy_no;
  }
  if (shExpMatch(url, "*.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.bbc.co.uk*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.bbc.*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.itv.com")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.itv.com*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.itv.*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://www.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://iplayerhelp.external.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.external.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.external.bbc.co.uk*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.external.bbc*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.external.bbc.*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://iplayerhelp.internal.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://iplayerhelp.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://node1.bbcimg.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://node2.bbcimg.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://stats.bbc.co.uk")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://su.sageanalyst.net")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "su.sageanalyst.net")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*su.sageanalyst.net")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.sageanalyst.net")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*.sageanalyst.*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://www.itv.com/itvplayer/")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "http://www.itv.com/itvplayer/*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*/itvplayer/")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*itvplayer*")) {
    return proxy_yes;
  }
  if (shExpMatch(url, "*www.*")) {
    return proxy_no;
  }
  if (shExpMatch(url, "*.*")) {
    return proxy_no;
  }
  if (shExpMatch(url, "https://*")) {
    return proxy_no;
  }
  if (shExpMatch(url, "ftp://*")) {
    return proxy_no;
  }
  if (shExpMatch(url, "gopher*")) {
    return proxy_no;
  }
  return proxy_no;
}
