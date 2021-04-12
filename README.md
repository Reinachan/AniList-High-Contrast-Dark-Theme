# AniList High-Contrast Dark-Theme

Major overhaul to the default dark-theme on AniList to improve accessibility for visual impairments where increased contrast is helpful but dark themes still preferred.

## Install

If you're on a computer or on Android, you can install it directly from [GitHub](https://github.com/Reinachan/AniList-High-Contrast-Dark-Theme/raw/main/High-Contrast-Dark-Theme.user.css) — or from [GreasyFork](https://greasyfork.org/en/scripts/416013-anilist-high-contrast-dark-theme) — with Stylus on [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) or [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

If you're on Android, you can add it through the same method as above, just use a browser that supports plugins. [Kiwi Browser](https://kiwibrowser.com/) and [Yandex Browser](https://browser.yandex.com/mobile/) both support Chrome plugins.

If you're on iOS (or don't want to use Yandex or Kiwi), you can add it as a bookmarklet by making a bookmark with the content of [this](https://raw.githubusercontent.com/Reinachan/AniList-High-Contrast-Dark-Theme/main/High-Contrast-Dark-Theme.bookmarklet.js) file as the URL. You'll have to apply this every time you open or reload AniList for it to work. Sadly, for security reasons, I can't have this one auto-update. This means you'll have to update it manually as I add new features. I announce them over on [AniList](https://anilist.co/user/Reina/) in case you don't use GitHub actively.

## Screenshots

![Profile Page](https://i.imgur.com/c9hojWc.png)
<img width="49.5%" src="https://i.imgur.com/37QSkJe.png" alt="activity feed"><span width="0.5%"></span><img width="49.5%" src="https://i.imgur.com/wBhBWpO.png" alt="Submission Manual">

## Known Issues

- The GraphiQL interactive editor is still light-themed.
- I want to increase font-sizes to make it more accessible. This theme is accessibility-focused in general.

If any of these issues are really annoying to you, message me on my profile https://anilist.co/user/Reina/

## Changelog

1.0.0 - Released <br>
1.0.1 - Fixed navbar not disappearing when scrolling <br>

1.1.0 - Adjusted the scrollbar to integrate better with the look and be slimmer <br>
1.1.1 - Fixed an issue with the quick-add-to-list dropdown on media pages having white text on a white background <br>
1.1.2 - Fixed an issue with the watching/reading status from the advanced entry editor <br>
1.1.2.1 - I accidentally deleted the closing bracket at the end which broke the plugin. Should be fixed now. <br>
1.1.3 - Apparently I can't have that many numbers in my version, so I had to change it to 1.1.3 instead of 1.1.2.1 <br>

1.2.0 - Made the scrollbar-styling work in Firefox using official CSS spec. Made the scrollbars in long posts not change the width of the content when you hover over the element (as in, it's always there, but transparrent until you hover over the field). <br>
1.2.1 - Removed the padding I added for some testing and forgot to remove before publishing. Oops. <br>

1.3.0 - Added dark-theme to the database submission manual and darkened the announcement background colour. <br>
1.3.1 - Dark-themed the calendar picker and removed a superfluous closing curly bracket <br>
1.3.2 - Quick-fix of miscoloured arrow on the calendar picker. <br>

1.4.0 - Major under-the-hood restructuring as well as some welcome changes to how liking activites work and filtering posts displays. <br>
1.4.1 - Fixed an unintentional text alignment issue with the edit post dropdown. <br>

1.5.0 - Database tools are now usable on small screens and viewports. <br>
1.5.1 - Improved modals, character page, and images in the database tools on small screens. <br>
1.5.2 - Updated metadata as I now host the userstyle on [Github](https://github.com/Reinachan/AniList-High-Contrast-Dark-Theme). <br>
1.5.3 - Fixed semi-transparent navbar. Now it actually appears semi-transparent. <br>
1.5.4 - Enabled database edit button on mobile. <br>
1.5.5 - improved like hearts with hover effects. <br>

1.6.0 - Dark-themed AniChart and styled some more aspects of Automail. <br>
