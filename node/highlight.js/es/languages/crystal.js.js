function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/crystal" instead of "highlight.js/lib/languages/crystal.js"'
      );
    }
  }
  emitWarning();
    import lang from './crystal.js';
    export default lang;