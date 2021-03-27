
function addStyleString(str) {
  const node = document.createElement('style');
  node.innerHTML = str;

  document.body.appendChild(node)
}

addStyleString(
`
@-moz-document domain('anilist.co') {
  :root {
    --color-background: 14, 18, 22;
    --color-blue: 120, 180, 255;
    --color-shadow-blue: 0, 0, 0;
    --color-foreground: 20, 25, 31;
    --color-foreground-alt: 18, 23, 29;
    --color-foreground-blue: 26, 33, 45;
    --color-foreground-grey: 15, 22, 28;
    --color-foreground-grey-dark: 6, 12, 13;
    --color-background-300: 30, 42, 56;
    --color-background-100: 19, 24, 32;
    --color-background-200: 14, 18, 22;
    --color-text: 240, 240, 240;
    --color-text-light: 220, 230, 240;
    --color-text-lighter: 230, 230, 240;
    --color-text-bright: 255, 255, 255;
    --color-blue-100: 247, 250, 252;
    --color-blue-200: 236, 246, 254;
    --color-blue-300: 201, 232, 255;
    --color-blue-400: 143, 215, 255;
    --color-blue-500: 111, 200, 255;
    --color-blue-600: 61, 180, 242;
    --color-blue-700: 8, 143, 214;
    --color-blue-800: 12, 101, 166;
    --color-blue-900: 11, 70, 113;
    --color-blue-1000: 16, 61, 85;
  }
  #nav {
    background: rgb(20, 25, 31);
    color: #eaeeff!important;
  }
  .site-theme-dark {
    --color-blue: 120, 180, 255;
    --color-shadow-blue: 8, 10, 16, 0.5;
    --color-foreground: 20, 25, 31;
    --color-foreground-alt: 18, 23, 29;
    --color-background: 14, 18, 22;
    --color-foreground-blue: 26, 33, 45;
    --color-foreground-grey: 15, 22, 28;
    --color-foreground-grey-dark: 6, 12, 13;
  }
  .site-theme-dark {
    
    --color-background-300: 30, 42, 56;
    --color-background-100: 19, 24, 32;
    --color-background-200: 14, 18, 22;
    
    --color-text: 240, 240, 240;
    --color-text-light: 220, 230, 240;
    --color-text-lighter: 230, 230, 240;
    --color-text-bright: 255, 255, 255;
    
    --color-blue-100: 247, 250, 252;
    --color-blue-200: 236, 246, 254;
    --color-blue-300: 201, 232, 255;
    --color-blue-400: 143, 215, 255;
    --color-blue-500: 111, 200, 255;
    --color-blue-600: 61, 180, 242;
    --color-blue-700: 8, 143, 214;
    --color-blue-800: 12, 101, 166;
    --color-blue-900: 11, 70, 113;
    --color-blue-1000: 16, 61, 85;
  }
  
  .page-content > .container {
    @media screen and (max-width: 600px) {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
  
  .name[data-v-5e514b1e] {
    color: rgb(var(--color-blue));
  }
  .site-theme-dark .user-page-unscoped.pink {
    --color-blue: 252, 157, 214;
  }
  
  .el-dropdown-menu.el-popper.el-dropdown-menu--medium {
    width: 150px;
    text-align: center;
    background-color: rgb(var(--color-foreground-grey-dark))!important;
    box-shadow: 0 1px 10px 0 rgba(var(--color-shadow-blue));
    .el-dropdown-menu__item:hover {
      background-color: rgb(var(--color-foreground-alt))!important;
    }
    .el-dropdown-menu__item--divided {
      border-top: 3px solid rgb(var(--color-foreground-alt));
      width: 90%;
      margin: auto;
      &:before {
        background-color: rgb(var(--color-foreground-grey-dark))!important;
      }
    }
  }
  .el-dropdown-menu.el-popper.el-dropdown-menu--medium.activity-extras-dropdown {
    text-align: left;
  }
  
  .el-select-dropdown.el-popper {
    background-color: rgb(var(--color-foreground-grey-dark))!important;
  }
  .el-select-dropdown {
    box-shadow: 0 1px 10px 0 rgba(var(--color-shadow-blue));
  }
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: rgb(var(--color-background))!important;
  }
  
  .activity-edit {
    .input.el-textarea {
      
      
      @media all and (min--moz-device-pixel-ratio:0) {
        padding-bottom: 5px;
      }
      
      textarea {
        box-shadow: none;
        
        transition: height 0.1s;
        will-change: height;
      }
    }
  }
  
  .feed-select,
  .section-header {
    .el-dropdown {
      margin-right: 10px;
      .feed-filter,
      .el-dropdown-link {
        display: none;
      }
      .el-dropdown-menu {
        display: flex !important;
        position: relative;
        text-align: center;
        margin: 0;
        padding: 0;
        box-shadow: none;
        background-color: rgb(var(--color-foreground));
        border-radius: 3px;
        .el-dropdown-menu__item {
          line-height: inherit;
          font-size: 1.2rem;
          font-weight: 400;
          white-space: nowrap;
          flex-grow: 1;
          margin: 0;
          padding: 6px 10px;
          color: rgb(var(--color-text-lighter));
          border-radius: 3px;
          &:hover {
            background-color: inherit;
            color: rgb(var(--color-blue));
          }
          &.active,
          &:active,
          &:focus {
            font-weight: 500;
            background-color: rgb(var(--color-foreground-blue));
            color: rgb(var(--color-text));
            border-radius: 0;
            &:hover {
              background-color: rgb(var(--color-foreground-blue));
            }
          }
          &:active:first-of-type,
          &:first-of-type.active,
          &:focus:first-of-type {
            border-radius: 3px 0 0 3px;
          }
          &:active:last-of-type,
          &:last-of-type.active,
          &:focus:last-of-type {
            border-radius: 0 3px 3px 0;
          }
        }
      }
    }
  }
  .overview .section-header {
    align-items: center;
    display: flex;
    .el-dropdown {
      margin-right: 0px;
      margin-left: auto;
      padding-right: 0;
    }
  }
  
  .announcement {
    background-color: rgb(var(--color-blue-800))!important;
  }
  
  .el-picker-panel {
    border: 1px solid rgb(var(--color-foreground));
    background-color: rgb(var(--color-foreground-grey-dark));
    color: rgb(var(--color-text-bright));
    .el-date-picker__header-label {
      color: rgb(var(--color-text));
    }
    .el-picker-panel__icon-btn,
    .el-date-table th {
      color: rgb(var(--color-text-light));
    }
    .el-date-table {
      td.current:not(.disabled) span {
        background-color: rgb(var(--color-blue-700));
      }
      th {
        border-bottom: 1px solid #60656c;
        padding: 1px;
      }
      td.next-month,
      td.prev-month {
        color: #76777a;
      }
      tbody tr:nth-of-type(2) td {
        padding-top: 10px;
      }
    }
    .popper__arrow::after {
      border-bottom-color: rgb(var(--color-foreground-grey-dark))!important;
      border-top-color: rgb(var(--color-foreground-grey-dark))!important;
    }
  }
  
  #hohSettings {
    .hohCategories {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      text-align: center;
      margin: 0;
      padding: 0;
      box-shadow: none;
      background-color: rgb(var(--color-background));
      border-radius: 3px;
      .hohCategory {
        border: none;
        line-height: inherit;
        font-size: 1.2rem;
        font-weight: 400;
        white-space: nowrap;
        flex-grow: 1;
        margin: 0;
        padding: 6px 10px;
        color: rgb(var(--color-text-lighter));
        border-radius: 3px;
        &:hover {
          background-color: inherit;
          color: rgb(var(--color-blue));
        }
        &.active,
        &:active,
        &:focus {
          font-weight: 500;
          background-color: rgb(var(--color-foreground-blue));
          color: rgb(var(--color-text));
          border-radius: 0;
          &:hover {
            background-color: rgb(var(--color-foreground-blue));
          }
        }
        &:active:first-of-type,
        &:first-of-type.active,
        &:focus:first-of-type {
          border-radius: 3px 0 0 3px;
        }
        &:active:last-of-type,
        &:last-of-type.active,
        &:focus:last-of-type {
          border-radius: 0 3px 3px 0;
        }
      }
    }
    .hohDisplayBox {
      border-color: rgb(14, 18, 22);
      border-radius: 5px;
    }
    .scrollableContent {
      padding: 30px;
      padding-top: 35px;
      padding-left: 15px;
    }
    .hohDisplayBoxTitle {
      top: 25px;
      left: 35px;
      font-weight: bold;
      font-size: 1.7em;
    }
    .hohResizePearl {
      right: 10px;
      bottom: 10px
    }
    .hohDisplayBoxClose {
      padding: 4px;
      border-radius: 20px;
      border-width: 2px;
      border-color: #900;
      width: 30px;
      height: 30px;
      text-align: center;
      vertical-align: bottom;
      font-weight: bold;
    }
    input,
    select {
      height: 40px;
      border-radius: 4px;
      color: rgb(var(--color-text));
      outline: 0;
      transition: .2s;
      border: 0;
      background: rgb(var(--color-background));
      box-shadow: none;
      padding-right: 10px;
      padding-left: 15px;
    }
    textarea {
      border-radius: 4px;
      color: rgb(var(--color-text));
      outline: 0;
      transition: .2s;
      border: 0;
      background: rgb(var(--color-background));
      box-shadow: none;
      padding: 10px;
      width: 100%;
      height: 200px;
    }
  }
  .button {
    .fa-heart {
      color: #0000;
      stroke: rgb(var(--color-blue-dim));
      stroke-width: 70;
      stroke-alignment: inner;
      font-size: 0.870em;
      padding-bottom: 0.08em;
      padding-top: 0.05em;
    }
    &.liked {
      .fa-heart {
        color: rgb(var(--color-red));
        stroke: rgba(0, 0, 0, 0);
        stroke-width: 0;
        font-size: 0.875em;
        padding-bottom: 0;
        padding-top: 0;
      }
    }
  }
  .hohNativeInput {
    height: 40px;
    border-radius: 4px;
    color: rgb(var(--color-text));
    outline: 0;
    transition: .2s;
    border: 0;
    background: rgb(var(--color-background));
    box-shadow: none;
    padding-right: 10px;
    padding-left: 15px;
  }
  
  * {
    scrollbar-color: rgb(var(--color-blue)) rgba(0, 0, 0, 0);
    scrollbar-width: thin;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
  ::-webkit-scrollbar-track {
    background-color: #1110;
    width: 0px;
  }
  ::-webkit-scrollbar-track-piece {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(var(--color-blue));
  }
  .markdown {
    overflow-y: scroll!important;
    scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    &:hover {
      scrollbar-color: rgb(var(--color-blue)) rgba(0, 0, 0, 0);
    }
    &::-webkit-scrollbar-thumb,
    .about .content-wrap::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0);
    }
    &:hover::-webkit-scrollbar-thumb,
    .about .content-wrap:hover::-webkit-scrollbar-thumb {
      background-color: rgb(var(--color-blue));
    }
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
  ::-webkit-resizer {
    display: none;
  }
  .about .content-wrap {
    overflow-y: scroll!important;
    scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    .markdown {
      overflow: hidden!important;
    }
    &:hover {
      overflow-y: scroll!important;
      scrollbar-color: rgb(var(--color-blue)) rgba(0, 0, 0, 0);
    }
  }
  
  .comment-wrap {
    border-left: 7px solid rgba(var(--color-foreground-blue));
    .child.odd {
      border-left: 7px solid rgba(var(--color-foreground-grey-dark));
    }
  }
  
  .media.container {
    @media screen and (max-width: 800px) {
      grid-template-columns: auto;
      gap: 20px;
      min-width: 250px;
      .pages {
        grid-column: 1;
        grid-row: 1;
      }
      > div:last-of-type {
        grid-column: 1;
        grid-row: 2;
      }
    }
    .submission-form {
      .col-2 {
        gap: 0 10px;
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
      }
      .col-3 {
        gap: 0 10px;
        grid-template-columns: repeat( auto-fit, minmax(180px, 1fr));
      }
      &.select-group {
        .col-3 {
          gap: 10px;
          grid-template-columns: repeat( auto-fit, minmax(180px, 250px));
        }
      }
    }
  }
}
`);