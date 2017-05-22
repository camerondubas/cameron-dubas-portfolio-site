      render: function(state, actions, view, emit) {
        var nextView = view[
          (state.router ||
            (state.router = match(location.pathname, emit))).match];

        if (nextView) {
          return nextView;
        } else {
          throw('This view does not exist, no fallback was provided. use "*" as a fallback view.');
        }
      }


// Note: Other Bug (Build an example)
// If you have an onclick on a button, that then gets changed to a href, the href is triggered


// Hyperxify acorn sourcetype fix

// Switching URLs where data in A is in a similar format to B, but is slightly different, does not cause a re-render, which results in old, incorrect text.
