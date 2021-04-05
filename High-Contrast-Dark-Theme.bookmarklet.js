javascript:(function () { function addStyleString(str) {const node = document.createElement('style');node.innerHTML = str;document.body.appendChild(node);} addStyleString( ` :root {--color-background:14,18,22;--color-blue:120,180,255;--color-shadow-blue:0,0,0;--color-foreground:20,25,31;--color-foreground-alt:18,23,29;--color-foreground-blue:26,33,45;--color-foreground-grey:15,22,28;--color-foreground-grey-dark:6,12,13;--color-background-300:30,42,56;--color-background-100:19,24,32;--color-background-200:14,18,22;--color-text:240,240,240;--color-text-light:220,230,240;--color-text-lighter:230,230,240;--color-text-bright:255,255,255;--color-blue-100:247,250,252;--color-blue-200:236,246,254;--color-blue-300:201,232,255;--color-blue-400:143,215,255;--color-blue-500:111,200,255;--color-blue-600:61,180,242;--color-blue-700:8,143,214;--color-blue-800:12,101,166;--color-blue-900:11,70,113;--color-blue-1000:16,61,85;} .site-theme-dark {--color-blue:120,180,255;--color-shadow-blue:8,10,16,0.5;--color-foreground:20,25,31;--color-foreground-alt:18,23,29;--color-background:14,18,22;--color-foreground-blue:26,33,45;--color-foreground-grey:15,22,28;--color-foreground-grey-dark:6,12,13;} .site-theme-dark {--color-background-300:30,42,56;--color-background-100:19,24,32;--color-background-200:14,18,22;--color-text:240,240,240;--color-text-light:220,230,240;--color-text-lighter:230,230,240;--color-text-bright:255,255,255;--color-blue-100:247,250,252;--color-blue-200:236,246,254;--color-blue-300:201,232,255;--color-blue-400:143,215,255;--color-blue-500:111,200,255;--color-blue-600:61,180,242;--color-blue-700:8,143,214;--color-blue-800:12,101,166;--color-blue-900:11,70,113;--color-blue-1000:16,61,85;} #app .nav-unscoped {background:#14191f;color:#eaeeff;} #app .nav-unscoped.transparent {background:rgba(20,25,31,0.5);color:#eaeeff;} #app .nav-unscoped.transparent:hover {background:#14191f;color:#eaeeff;} @media screen and (max-width:600px) {.page-content > .container,.page-content > .user > .container {padding-left:2px;padding-right:2px;}} .name[data-v-5e514b1e] {color:rgb(var(--color-blue));} .site-theme-dark .user-page-unscoped.pink {--color-blue:252,157,214;} .el-dropdown-menu.el-popper.el-dropdown-menu--medium {width:150px;text-align:center;background-color:rgb(var(--color-foreground-grey-dark)) !important;box-shadow:0 1px 10px 0 rgba(var(--color-shadow-blue));} .el-dropdown-menu.el-popper.el-dropdown-menu--medium .el-dropdown-menu__item:hover {background-color:rgb(var(--color-foreground-alt)) !important;} .el-dropdown-menu.el-popper.el-dropdown-menu--medium .el-dropdown-menu__item--divided {border-top:3px solid rgb(var(--color-foreground-alt));width:90%;margin:auto;} .el-dropdown-menu.el-popper.el-dropdown-menu--medium .el-dropdown-menu__item--divided:before {background-color:rgb(var(--color-foreground-grey-dark)) !important;} .el-dropdown-menu.el-popper.el-dropdown-menu--medium.activity-extras-dropdown {text-align:left;} .el-select-dropdown.el-popper {background-color:rgb(var(--color-foreground-grey-dark)) !important;} .el-select-dropdown {box-shadow:0 1px 10px 0 rgba(var(--color-shadow-blue));} .el-select-dropdown__item.hover,.el-select-dropdown__item:hover {background-color:rgb(var(--color-background)) !important;} .activity-edit .input.el-textarea {} @media all and (min--moz-device-pixel-ratio:0) {.activity-edit .input.el-textarea {padding-bottom:5px;}} .activity-edit .input.el-textarea textarea {box-shadow:none;overflow:hidden;transition:height 0.1s;will-change:height;} .feed-select .el-dropdown,.section-header .el-dropdown {margin-right:10px;} .feed-select .el-dropdown .feed-filter,.section-header .el-dropdown .feed-filter,.feed-select .el-dropdown .el-dropdown-link,.section-header .el-dropdown .el-dropdown-link {display:none;} .feed-select .el-dropdown .el-dropdown-menu,.section-header .el-dropdown .el-dropdown-menu {display:flex !important;position:relative;text-align:center;margin:0;padding:0;box-shadow:none;background-color:rgb(var(--color-foreground));border-radius:3px;} .feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item {line-height:inherit;font-size:1.2rem;font-weight:400;white-space:nowrap;flex-grow:1;margin:0;padding:6px 10px;color:rgb(var(--color-text-lighter));border-radius:3px;} .feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:hover,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:hover {background-color:inherit;color:rgb(var(--color-blue));} .feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item.active,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item.active,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus {font-weight:500;background-color:rgb(var(--color-foreground-blue));color:rgb(var(--color-text));border-radius:0;} .feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item.active:hover,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item.active:hover,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active:hover,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active:hover,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus:hover,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus:hover {background-color:rgb(var(--color-foreground-blue));} .feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active:first-of-type,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active:first-of-type,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:first-of-type.active,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:first-of-type.active,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus:first-of-type,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus:first-of-type {border-radius:3px 0 0 3px;} .feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active:last-of-type,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:active:last-of-type,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:last-of-type.active,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:last-of-type.active,.feed-select .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus:last-of-type,.section-header .el-dropdown .el-dropdown-menu .el-dropdown-menu__item:focus:last-of-type {border-radius:0 3px 3px 0;} .overview .section-header {align-items:center;display:flex;} .overview .section-header .el-dropdown {margin-right:0px;margin-left:auto;padding-right:0;} .announcement {background-color:rgb(var(--color-blue-800)) !important;} .el-picker-panel {border:1px solid rgb(var(--color-foreground));background-color:rgb(var(--color-foreground-grey-dark));color:rgb(var(--color-text-bright));} .el-picker-panel .el-date-picker__header-label {color:rgb(var(--color-text));} .el-picker-panel .el-picker-panel__icon-btn,.el-picker-panel .el-date-table th {color:rgb(var(--color-text-light));} .el-picker-panel .el-date-table td.current:not(.disabled) span {background-color:rgb(var(--color-blue-700));} .el-picker-panel .el-date-table th {border-bottom:1px solid #60656c;padding:1px;} .el-picker-panel .el-date-table td.next-month,.el-picker-panel .el-date-table td.prev-month {color:#76777a;} .el-picker-panel .el-date-table tbody tr:nth-of-type(2) td {padding-top:10px;} .el-picker-panel .popper__arrow::after {border-bottom-color:rgb(var(--color-foreground-grey-dark)) !important;border-top-color:rgb(var(--color-foreground-grey-dark)) !important;} .button .fa-heart {color:#0000;stroke:rgb(var(--color-blue-dim));stroke-width:70;stroke-alignment:inner;font-size:0.87em;padding-bottom:0.08em;padding-top:0.05em;} .button.liked .fa-heart {color:rgb(var(--color-red));stroke:rgba(0,0,0,0);stroke-width:0;font-size:0.875em;padding-bottom:0;padding-top:0;} * {scrollbar-color:rgb(var(--color-blue)) rgba(0,0,0,0);scrollbar-width:thin;} ::-webkit-scrollbar {width:4px;height:8px;} ::-webkit-scrollbar-button {display:none;} ::-webkit-scrollbar-track {background-color:#1110;width:0px;} ::-webkit-scrollbar-track-piece {display:none;} ::-webkit-scrollbar-thumb {background-color:rgb(var(--color-blue));} .markdown {overflow-y:scroll!important;scrollbar-color:rgba(0,0,0,0) rgba(0,0,0,0);} .markdown:hover {scrollbar-color:rgb(var(--color-blue)) rgba(0,0,0,0);} .markdown::-webkit-scrollbar-thumb,.markdown .about .content-wrap::-webkit-scrollbar-thumb {background-color:rgba(0,0,0,0);} .markdown:hover::-webkit-scrollbar-thumb,.markdown .about .content-wrap:hover::-webkit-scrollbar-thumb {background-color:rgb(var(--color-blue));} ::-webkit-scrollbar-corner {display:none;} ::-webkit-resizer {display:none;} .about .content-wrap {overflow-y:scroll!important;scrollbar-color:rgba(0,0,0,0) rgba(0,0,0,0);} .about .content-wrap .markdown {overflow:hidden!important;} .about .content-wrap:hover {overflow-y:scroll!important;scrollbar-color:rgb(var(--color-blue)) rgba(0,0,0,0);} .comment-wrap {border-left:7px solid rgba(var(--color-foreground-blue));} .comment-wrap .child.odd {border-left:7px solid rgba(var(--color-foreground-grey-dark));} .media.container {} @media screen and (max-width:800px) {.media.container {grid-template-columns:auto;gap:20px;min-width:250px;} .media.container .el-dialog__wrapper.dialog .el-dialog {width:98%;} .media.container .pages {grid-column:1;grid-row:1;} .media.container > div:last-of-type {grid-column:1;grid-row:2;}} .media.container .submission-form .col-2 {gap:0 10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));} .media.container .submission-form .col-3 {gap:0 10px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));} .media.container .submission-form.select-group .col-3 {gap:10px;grid-template-columns:repeat(auto-fit,minmax(180px,250px));} .media.container .character-row {grid-template-columns:1fr 1.3fr 0.1fr;} @media screen and (min-width:1000px) {.media.container .character-row {grid-template-columns:0.6fr 1.3fr 0.1fr;}} @media screen and (max-width:450px) {.media.container .character-row {grid-template-columns:auto auto 40px;grid-template-rows:auto;gap:10px;} .media.container .character-row .character.col {grid-row:1;} .media.container .character-row .actor.col {grid-row:2;} .media.container .character-row .actions {grid-column:3;grid-row:1 / span 2;}} @media screen and (min-width:550px) {.media.container .images .submission-form:first-of-type {display:grid;grid-template-columns:min-content;} .media.container .images .submission-form:first-of-type .el-input {grid-column:2;grid-row:1;} .media.container .images .submission-form:first-of-type .cover {margin-right:15px;grid-column:1;grid-row:1;}} .media.container .images .submission-form .cover.banner {width:100%;} :root {font-size:12px;}`);})();