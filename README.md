# tweets.tanho.ca: a twitter archive

Forked from <https://github.com/jvns/tweets-archive>, see README there for main setup instructions.

I fussed with stuff here for a while, so adding a few notes that may or may not be helpful.

## my tweaks to the original

- I went ahead with deleting all of my tweets (via [lucahammer/tweetXer](https://github.com/lucahammer/tweetXer_))
so I updated all `https://twitter.com/_TanHo/status/*` link references to point to `./_TanHo/status/*` instead (i.e. to the
[local tweet detail](https://tweets.tanho.ca/_tanho/status/1746205216926466299/) page rather than the original tweet on Twitter). This was done in:

  - [build.py's url() function](https://github.com/tanho63/tantastic-tweets/blob/7b72d0be1f6654095954184a12b8b06615fc150d/scripts/build.py#L21-L22)
  - [app.js's twitter_url()](https://github.com/tanho63/tantastic-tweets/blob/main/app.js#L59-L60) function
  - a manual search and replace in `searchDocuments.js` to handle quote tweet hrefs (so that it would show the original `https://twitter.com/_TanHo/status/`
  but links you to the local version instead, see [this example](https://tweets.tanho.ca/_tanho/status/1692580866973643153/) for what it looks like)

- I crudely made [Space Mono](https://fonts.google.com/specimen/Space+Mono) the font by updating:
  - [index.html](https://github.com/tanho63/tantastic-tweets/blob/7b72d0be1f6654095954184a12b8b06615fc150d/index.html#L25-L27) to add font preload to the home page
  - [scripts/build.py](https://github.com/tanho63/tantastic-tweets/blob/7b72d0be1f6654095954184a12b8b06615fc150d/scripts/build.py#L51-L53) to add font preload to each individual tweet page
  - [styles.css](https://github.com/tanho63/tantastic-tweets/blob/7b72d0be1f6654095954184a12b8b06615fc150d/styles.css#L21-L27) to update the CSS classes to use Space Mono as the main font + sans-serif as fallback.

- I noticed that twitter handles didn't hyperlink to the users anymore, so I ran a crude regex replace on `searchDocuments.js`, something like: replacing `@(\w+)` with `<a href=\"https://twitter.com/\1\">\1</a>`
  - I've noticed since that a few places that `@xyz` were used inside URLs rather than as user references (i.e. Mastodon, Medium links) are now broken. Whoops. That probably could have been `[\s\b]@(\w+)` for the pattern-find?

- I hand-edited the latest tweet's text contents to add a link to Bluesky, and updated the date to Nov 14 instead of Jan 23 ish which was the actual date of that tweet.

- Also deleted a few stray replies that appeared at the top of the timeline that I was annoyed was there. 

## things i want to do but dunno if i want to spend the time on
- figure out how to link reply tweets to the original? or retrieve the original tweet and include it in the status page somehow? debateable how valuable that would be.
- fix that broken link bug I introduced trying to hyperlink back to twitter users
- figure out a user-facing sort-by option rather than just "newest to oldest"

## how i think this thing works
(not 100% confident on these notes because have never really worked with vue/js, might be helpful for non-JS/non-py users)

- `searchDocuments.js` holds the bulk of your tweet contents and sets it as a JS variable named `searchDocuments`. Vaguely JSON-shaped except for the const bit at the beginning.
  - If you want to modify your tweets for the purposes of this site, modify them in this file.
- `tweets_media/` holds the images that your tweets refer to.
- `app.js` does the bulk of the lifting, parsing `searchDocuments.js` into the homepage timeline and adding the search functionality (via `js/minisearch.min.js`)
- `index.html` incorporates app.js and an html template to hold the actual timeline contents that app.js will build client-side.
- `scripts/build.py` parses `searchDocuments.js` and generates one html file per tweet in the appropriate tweet directory, e.g. `/_TanHo/status/1234/index.html` based on the template stored inside `scripts/build.py`
  - If you make a change to a tweet in `searchDocuments.js`, `index.html` will show the change right away, but the individual tweet's direct link will not update until you rerun `scripts/build.py`. 

