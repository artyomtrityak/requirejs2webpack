define(function(require) {
  'use strict';
  //TODO:  Try to rewrite to coffee, i don't wry "while" in coffee did't work as in js in this case.
  //This is main function that looks throw all text and "decide" what attr add to word
  //Maybe need to optimize it

  require('overlay');

  var
    CodeMirror = require('codemirror'),
    attributeRegExp = /\w+\s*?=/;

  CodeMirror.defineMode('DSL', function(config, parserConfig) {
    var mustacheOverlay = {
      token: function(stream) {
        if (stream.match(attributeRegExp)) {
          stream.eat(attributeRegExp);
          return 'attribute';
        }

        while (stream.next() != null && !stream.match(attributeRegExp, false)) {}

        return null;
      }
    };

    return CodeMirror.overlayMode(
      CodeMirror.getMode(config, parserConfig.backdrop || "text/x-groovy"), mustacheOverlay
    );
  });
});
