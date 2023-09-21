# goakal prices widget

insert

```html
<script id="prices-widget" src="https://raw.githack.com/arashari/embeddable-widget/main/dist/widget.js" class-url="<class url>"></script>
```

in your HTML


# references
[https://hackernoon.com/building-embeddable-widgets-with-typescript](https://hackernoon.com/building-embeddable-widgets-with-typescript)

---

# local development process

1. execute `yarn webpack` or `npm run webpack` for the build process.
   > Remember to rebuild whenever you make code changes.
   > 
   > or automate it using `nodemon` or something like that.

2. launch the local server with `npx http-serve dist` to serve the build.

3. have fun

# what files to changes?
- `src/widget.template.ts`

main file, template html-nya ada di sini

- `src/styles/main.scss`

second main file, styling utamanya ada di sini

- `src/assets/*`

untuk naro assets seperti gambar

# how to deploy to production
1. build it
2. host the `dist` folder somewhere that publicly accessible
3. profit
