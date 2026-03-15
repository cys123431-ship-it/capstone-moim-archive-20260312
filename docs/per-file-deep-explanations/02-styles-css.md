# styles.css 깊은 해설서

## 1. 파일 개요
- 파일명: `styles.css`
- 역할: 메인 페이지 전용 스타일 파일이다. 색상 변수, 헤더, 추천 배너, 카드, 폼, 팝업, 반응형 규칙까지 모두 이 파일에 모여 있다.
- 사용 시점: `index.html`이 브라우저에서 열릴 때 자동으로 함께 로드된다.
- 이 파일에서 들여쓰기 읽는 법: CSS는 선택자 줄이 바깥에 있고, 그 안의 속성 줄을 한 단계 들여쓴다. `@media` 안쪽에 또 선택자가 오면 한 번 더 안으로 들어간다.
- 기본 연결 대상:
- `index.html`의 class와 id에 맞춰 레이아웃과 시각 스타일을 입힌다.
- `script.js`가 생성하는 `.meeting-card`, `.meta-chip`, `.empty-state` 같은 동적 마크업도 이 파일이 꾸민다.
- 모바일 화면에서는 같은 HTML 구조를 유지하면서 미디어 쿼리로 배치를 바꾼다.

## 2. 전체 코드 원문
~~~~css
   1 | /* 밝은 플랫폼형 톤으로 다시 쓰기 쉽게 색과 간격을 변수로 정리한다. */
   2 | :root {
   3 |   --bg: #f5f5f7;
   4 |   --surface: #ffffff;
   5 |   --surface-soft: #f0f0f2;
   6 |   --surface-muted: #f8f8f9;
   7 |   --hero: #efe1af;
   8 |   --hero-deep: #d7c27f;
   9 |   --text: #17181a;
  10 |   --muted: #74767d;
  11 |   --line: rgba(23, 24, 26, 0.08);
  12 |   --line-strong: rgba(23, 24, 26, 0.12);
  13 |   --accent: #111111;
  14 |   --accent-soft: #ff613f;
  15 |   --accent-blue: #3e7dff;
  16 |   --danger: #cf3e3e;
  17 |   --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);
  18 |   --radius-xl: 34px;
  19 |   --radius-lg: 24px;
  20 |   --radius-md: 18px;
  21 |   --radius-sm: 14px;
  22 |   --font-display: "Noto Sans KR", sans-serif;
  23 |   --font-body: "Noto Sans KR", sans-serif;
  24 | }
  25 | 
  26 | * {
  27 |   box-sizing: border-box;
  28 | }
  29 | 
  30 | html {
  31 |   scroll-behavior: smooth;
  32 | }
  33 | 
  34 | body {
  35 |   margin: 0;
  36 |   background: var(--bg);
  37 |   color: var(--text);
  38 |   font-family: var(--font-body);
  39 |   overflow-x: hidden;
  40 | }
  41 | 
  42 | a {
  43 |   color: inherit;
  44 |   text-decoration: none;
  45 | }
  46 | 
  47 | button,
  48 | input,
  49 | select,
  50 | textarea {
  51 |   font: inherit;
  52 | }
  53 | 
  54 | .container {
  55 |   width: min(1180px, calc(100% - 32px));
  56 |   margin: 0 auto;
  57 | }
  58 | 
  59 | .site-header {
  60 |   position: sticky;
  61 |   top: 0;
  62 |   z-index: 40;
  63 |   background: rgba(255, 255, 255, 0.94);
  64 |   border-bottom: 1px solid var(--line);
  65 |   backdrop-filter: blur(16px);
  66 | }
  67 | 
  68 | .nav-row {
  69 |   display: flex;
  70 |   align-items: center;
  71 |   justify-content: space-between;
  72 |   gap: 24px;
  73 |   min-height: 72px;
  74 | }
  75 | 
  76 | .brand-group,
  77 | .menu,
  78 | .sub-menu,
  79 | .header-actions,
  80 | .footer-links {
  81 |   display: flex;
  82 |   align-items: center;
  83 |   min-width: 0;
  84 | }
  85 | 
  86 | .brand-group {
  87 |   gap: 34px;
  88 | }
  89 | 
  90 | .brand,
  91 | .footer-brand {
  92 |   font-family: var(--font-display);
  93 |   font-size: 2rem;
  94 |   font-weight: 800;
  95 |   letter-spacing: -0.05em;
  96 | }
  97 | 
  98 | .menu {
  99 |   flex-wrap: wrap;
 100 |   gap: 20px;
 101 | }
 102 | 
 103 | .menu a,
 104 | .sub-menu a,
 105 | .sub-menu-button {
 106 |   color: var(--muted);
 107 |   font-size: 0.97rem;
 108 |   font-weight: 700;
 109 | }
 110 | 
 111 | .menu a.is-current,
 112 | .sub-menu a.is-current,
 113 | .sub-menu-button.is-current,
 114 | .sub-menu-button.is-active,
 115 | .menu a:hover,
 116 | .sub-menu a:hover,
 117 | .sub-menu-button:hover {
 118 |   color: var(--text);
 119 | }
 120 | 
 121 | .sub-menu-button {
 122 |   padding: 0;
 123 |   border: 0;
 124 |   background: transparent;
 125 |   cursor: pointer;
 126 | }
 127 | 
 128 | .header-actions {
 129 |   gap: 12px;
 130 | }
 131 | 
 132 | .header-link {
 133 |   display: inline-flex;
 134 |   align-items: center;
 135 |   justify-content: center;
 136 |   min-height: 40px;
 137 |   padding: 10px 16px;
 138 |   border-radius: 12px;
 139 |   border: 1px solid var(--line-strong);
 140 |   background: var(--surface);
 141 |   font-size: 0.92rem;
 142 |   font-weight: 700;
 143 | }
 144 | 
 145 | .header-link.primary {
 146 |   border-color: var(--text);
 147 | }
 148 | 
 149 | .sub-nav {
 150 |   border-top: 1px solid var(--line);
 151 | }
 152 | 
 153 | .sub-menu {
 154 |   flex-wrap: wrap;
 155 |   gap: 18px;
 156 |   min-height: 50px;
 157 | }
 158 | 
 159 | .hero-section {
 160 |   padding: 18px 0 12px;
 161 | }
 162 | 
 163 | /* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */
 164 | .hero-banner {
 165 |   display: grid;
 166 |   grid-template-columns: 1.05fr 0.95fr;
 167 |   gap: 34px;
 168 |   align-items: center;
 169 |   padding: 56px;
 170 |   border-radius: 40px;
 171 |   background: var(--hero);
 172 |   overflow: hidden;
 173 | }
 174 | 
 175 | .hero-copy {
 176 |   display: grid;
 177 |   gap: 20px;
 178 |   min-width: 0;
 179 | }
 180 | 
 181 | .hero-kicker,
 182 | .eyebrow {
 183 |   margin: 0;
 184 |   color: rgba(23, 24, 26, 0.78);
 185 |   font-size: 0.84rem;
 186 |   font-weight: 800;
 187 |   letter-spacing: 0.04em;
 188 | }
 189 | 
 190 | .hero-copy h1,
 191 | .section-title h2,
 192 | .map-copy h2,
 193 | .help-box h3,
 194 | .utility-note h3,
 195 | .dialog-header h2 {
 196 |   margin: 0;
 197 |   font-family: var(--font-display);
 198 | }
 199 | 
 200 | .hero-copy h1 {
 201 |   max-width: 8ch;
 202 |   font-size: clamp(3.1rem, 5vw, 4.8rem);
 203 |   font-weight: 800;
 204 |   letter-spacing: -0.08em;
 205 |   line-height: 0.96;
 206 | }
 207 | 
 208 | .hero-text,
 209 | .section-title p:last-child,
 210 | .map-copy p,
 211 | .help-box li,
 212 | .utility-note li,
 213 | .dialog-description p,
 214 | .footer-text,
 215 | .shortcut-tile p,
 216 | .meeting-card p {
 217 |   color: var(--muted);
 218 |   line-height: 1.65;
 219 | }
 220 | 
 221 | .hero-text {
 222 |   max-width: 34rem;
 223 |   margin: 0;
 224 | }
 225 | 
 226 | .hero-link,
 227 | .more-link {
 228 |   display: inline-flex;
 229 |   align-items: center;
 230 |   gap: 8px;
 231 |   font-weight: 700;
 232 | }
 233 | 
 234 | .hero-link::after,
 235 | .more-link::after {
 236 |   content: "›";
 237 |   font-size: 1.2rem;
 238 |   line-height: 1;
 239 | }
 240 | 
 241 | .hero-actions {
 242 |   display: flex;
 243 |   flex-wrap: wrap;
 244 |   gap: 12px;
 245 | }
 246 | 
 247 | .hero-media {
 248 |   position: relative;
 249 |   min-height: 320px;
 250 | }
 251 | 
 252 | .hero-orb {
 253 |   position: absolute;
 254 |   right: -74px;
 255 |   top: -24px;
 256 |   width: 470px;
 257 |   aspect-ratio: 1;
 258 |   display: grid;
 259 |   place-items: center;
 260 |   border-radius: 50%;
 261 |   background:
 262 |     radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),
 263 |     radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),
 264 |     linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));
 265 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
 266 | }
 267 | 
 268 | .hero-teaser-grid {
 269 |   width: 74%;
 270 |   display: grid;
 271 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 272 |   gap: 14px;
 273 | }
 274 | 
 275 | .hero-teaser-card {
 276 |   display: grid;
 277 |   gap: 6px;
 278 |   padding: 16px;
 279 |   border-radius: 22px;
 280 |   border: 1px solid rgba(23, 24, 26, 0.08);
 281 |   background: rgba(255, 255, 255, 0.82);
 282 |   box-shadow: var(--shadow);
 283 |   text-align: left;
 284 |   cursor: pointer;
 285 |   transition:
 286 |     transform 0.18s ease,
 287 |     background 0.18s ease,
 288 |     box-shadow 0.18s ease;
 289 | }
 290 | 
 291 | .hero-teaser-card:hover,
 292 | .hero-teaser-card.is-active {
 293 |   transform: translateY(-2px);
 294 |   background: rgba(255, 255, 255, 0.98);
 295 |   box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);
 296 | }
 297 | 
 298 | .hero-teaser-card.wide {
 299 |   grid-column: 1 / -1;
 300 | }
 301 | 
 302 | .hero-teaser-card span {
 303 |   color: var(--muted);
 304 |   font-size: 0.78rem;
 305 |   font-weight: 700;
 306 | }
 307 | 
 308 | .hero-teaser-card strong {
 309 |   font-size: 1rem;
 310 |   font-weight: 800;
 311 |   line-height: 1.35;
 312 | }
 313 | 
 314 | .hero-page-indicator {
 315 |   position: absolute;
 316 |   right: 12px;
 317 |   bottom: 10px;
 318 |   margin: 0;
 319 |   padding: 6px 10px;
 320 |   border-radius: 999px;
 321 |   background: rgba(23, 24, 26, 0.62);
 322 |   color: white;
 323 |   font-size: 0.78rem;
 324 |   font-weight: 700;
 325 | }
 326 | 
 327 | .hero-nav-button {
 328 |   position: absolute;
 329 |   top: 50%;
 330 |   z-index: 2;
 331 |   width: 44px;
 332 |   height: 44px;
 333 |   display: inline-grid;
 334 |   place-items: center;
 335 |   border: 1px solid rgba(23, 24, 26, 0.12);
 336 |   border-radius: 999px;
 337 |   background: rgba(255, 255, 255, 0.94);
 338 |   color: var(--text);
 339 |   cursor: pointer;
 340 |   transform: translateY(-50%);
 341 |   box-shadow: var(--shadow);
 342 | }
 343 | 
 344 | .hero-nav-button:disabled {
 345 |   cursor: not-allowed;
 346 |   opacity: 0.45;
 347 | }
 348 | 
 349 | .hero-nav-prev {
 350 |   left: 0;
 351 | }
 352 | 
 353 | .hero-nav-next {
 354 |   right: 0;
 355 | }
 356 | 
 357 | .dashboard-section {
 358 |   padding: 10px 0 18px;
 359 | }
 360 | 
 361 | .status-strip {
 362 |   display: grid;
 363 |   grid-template-columns: repeat(4, minmax(0, 1fr));
 364 |   gap: 12px;
 365 | }
 366 | 
 367 | .status-card,
 368 | .shortcut-tile,
 369 | .search-panel,
 370 | .map-shell,
 371 | .utility-note,
 372 | .help-box,
 373 | .create-panel,
 374 | .detail-dialog,
 375 | .dialog-description {
 376 |   border: 1px solid var(--line);
 377 |   box-shadow: var(--shadow);
 378 | }
 379 | 
 380 | .status-card {
 381 |   padding: 20px 22px;
 382 |   border-radius: 18px;
 383 |   background: var(--surface);
 384 | }
 385 | 
 386 | .status-card p {
 387 |   margin: 0;
 388 |   color: var(--muted);
 389 |   font-size: 0.82rem;
 390 |   font-weight: 700;
 391 | }
 392 | 
 393 | .status-card strong {
 394 |   display: block;
 395 |   margin-top: 10px;
 396 |   font-size: 1.75rem;
 397 |   font-weight: 800;
 398 |   letter-spacing: -0.05em;
 399 | }
 400 | 
 401 | .shortcut-shell {
 402 |   margin-top: 16px;
 403 |   padding: 22px;
 404 |   border-radius: 26px;
 405 |   background: #ececee;
 406 | }
 407 | 
 408 | .shortcut-grid {
 409 |   display: grid;
 410 |   grid-template-columns: repeat(8, minmax(0, 1fr));
 411 |   gap: 14px;
 412 | }
 413 | 
 414 | .shortcut-tile {
 415 |   min-height: 128px;
 416 |   display: grid;
 417 |   align-content: center;
 418 |   justify-items: center;
 419 |   gap: 10px;
 420 |   padding: 14px 10px;
 421 |   border-radius: 18px;
 422 |   background: rgba(255, 255, 255, 0.86);
 423 |   text-align: center;
 424 |   cursor: pointer;
 425 |   transition:
 426 |     transform 0.18s ease,
 427 |     background 0.18s ease,
 428 |     border-color 0.18s ease;
 429 | }
 430 | 
 431 | .shortcut-tile:hover,
 432 | .shortcut-tile.is-active {
 433 |   transform: translateY(-2px);
 434 |   border-color: rgba(23, 24, 26, 0.18);
 435 |   background: white;
 436 | }
 437 | 
 438 | .shortcut-tile strong {
 439 |   font-size: 0.95rem;
 440 |   font-weight: 800;
 441 |   line-height: 1.35;
 442 | }
 443 | 
 444 | .shortcut-tile p {
 445 |   margin: 0;
 446 |   font-size: 0.82rem;
 447 | }
 448 | 
 449 | .shortcut-icon {
 450 |   width: 48px;
 451 |   height: 48px;
 452 |   display: inline-grid;
 453 |   place-items: center;
 454 |   border-radius: 16px;
 455 |   font-size: 1rem;
 456 |   font-weight: 800;
 457 |   color: var(--text);
 458 | }
 459 | 
 460 | .tone-peach {
 461 |   background: #ffe1d9;
 462 | }
 463 | 
 464 | .tone-yellow {
 465 |   background: #fff0b8;
 466 | }
 467 | 
 468 | .tone-blue {
 469 |   background: #dce7ff;
 470 | }
 471 | 
 472 | .tone-pink {
 473 |   background: #ffdbe8;
 474 | }
 475 | 
 476 | .tone-green {
 477 |   background: #d9f2dd;
 478 | }
 479 | 
 480 | .tone-orange {
 481 |   background: #ffe1bf;
 482 | }
 483 | 
 484 | .tone-purple {
 485 |   background: #e7ddff;
 486 | }
 487 | 
 488 | .tone-dark {
 489 |   background: #dadbdd;
 490 | }
 491 | 
 492 | .section-block {
 493 |   padding: 34px 0;
 494 | }
 495 | 
 496 | .section-head {
 497 |   display: flex;
 498 |   align-items: flex-end;
 499 |   justify-content: space-between;
 500 |   gap: 20px;
 501 |   margin-bottom: 18px;
 502 | }
 503 | 
 504 | .section-title {
 505 |   display: grid;
 506 |   gap: 6px;
 507 | }
 508 | 
 509 | .section-title h2 {
 510 |   font-size: clamp(1.9rem, 4vw, 2.6rem);
 511 |   font-weight: 800;
 512 |   letter-spacing: -0.05em;
 513 |   line-height: 1.04;
 514 | }
 515 | 
 516 | .section-title p:last-child {
 517 |   margin: 0;
 518 | }
 519 | 
 520 | .search-panel,
 521 | .map-shell,
 522 | .utility-note,
 523 | .help-box,
 524 | .create-panel {
 525 |   border-radius: 24px;
 526 |   background: var(--surface);
 527 | }
 528 | 
 529 | /* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */
 530 | .search-form,
 531 | .create-form {
 532 |   display: grid;
 533 |   gap: 12px;
 534 |   padding: 20px;
 535 | }
 536 | 
 537 | .search-form {
 538 |   grid-template-columns: repeat(5, minmax(0, 1fr)) auto;
 539 |   align-items: end;
 540 | }
 541 | 
 542 | .create-shell {
 543 |   display: grid;
 544 |   grid-template-columns: 0.9fr 1.1fr;
 545 |   gap: 20px;
 546 | }
 547 | 
 548 | .create-copy {
 549 |   display: grid;
 550 |   gap: 18px;
 551 | }
 552 | 
 553 | .create-panel {
 554 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 555 | }
 556 | 
 557 | .search-form label,
 558 | .create-form label {
 559 |   display: grid;
 560 |   gap: 8px;
 561 |   font-size: 0.92rem;
 562 |   font-weight: 700;
 563 | }
 564 | 
 565 | input,
 566 | select,
 567 | textarea {
 568 |   width: 100%;
 569 |   border: 1px solid var(--line-strong);
 570 |   border-radius: 14px;
 571 |   padding: 14px 14px;
 572 |   background: var(--surface-muted);
 573 |   color: var(--text);
 574 | }
 575 | 
 576 | input::placeholder,
 577 | textarea::placeholder {
 578 |   color: rgba(23, 24, 26, 0.4);
 579 | }
 580 | 
 581 | .full-span,
 582 | .form-actions {
 583 |   grid-column: 1 / -1;
 584 | }
 585 | 
 586 | .button {
 587 |   display: inline-flex;
 588 |   align-items: center;
 589 |   justify-content: center;
 590 |   min-height: 44px;
 591 |   padding: 10px 18px;
 592 |   border: 1px solid transparent;
 593 |   border-radius: 14px;
 594 |   cursor: pointer;
 595 |   font-weight: 700;
 596 |   transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;
 597 | }
 598 | 
 599 | .button:hover {
 600 |   transform: translateY(-1px);
 601 | }
 602 | 
 603 | .button:disabled {
 604 |   cursor: not-allowed;
 605 |   opacity: 0.5;
 606 |   transform: none;
 607 | }
 608 | 
 609 | .button.primary {
 610 |   background: var(--accent);
 611 |   color: white;
 612 | }
 613 | 
 614 | .button.secondary {
 615 |   border-color: var(--line-strong);
 616 |   background: var(--surface);
 617 |   color: var(--text);
 618 | }
 619 | 
 620 | .button.ghost {
 621 |   border-color: var(--line-strong);
 622 |   background: transparent;
 623 |   color: var(--text);
 624 | }
 625 | 
 626 | .button.danger {
 627 |   background: var(--danger);
 628 |   color: white;
 629 | }
 630 | 
 631 | .form-actions {
 632 |   display: flex;
 633 |   gap: 10px;
 634 | }
 635 | 
 636 | .result-summary {
 637 |   margin: 14px 4px 0;
 638 |   color: var(--muted);
 639 |   font-size: 0.92rem;
 640 | }
 641 | 
 642 | /* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */
 643 | .meeting-list {
 644 |   display: grid;
 645 |   grid-template-columns: repeat(4, minmax(0, 1fr));
 646 |   gap: 24px 20px;
 647 |   margin-top: 18px;
 648 | }
 649 | 
 650 | .meeting-card {
 651 |   display: grid;
 652 |   gap: 12px;
 653 | }
 654 | 
 655 | .card-poster,
 656 | .mine-list .card-poster,
 657 | .manage-list .card-poster {
 658 |   position: relative;
 659 |   min-height: 176px;
 660 |   padding: 14px;
 661 |   border-radius: 18px;
 662 |   overflow: hidden;
 663 |   box-shadow: var(--shadow);
 664 | }
 665 | 
 666 | .meeting-list .meeting-card:nth-child(4n + 1) .card-poster {
 667 |   background: linear-gradient(145deg, #121315, #272a2d);
 668 |   color: white;
 669 | }
 670 | 
 671 | .meeting-list .meeting-card:nth-child(4n + 2) .card-poster {
 672 |   background: linear-gradient(145deg, #312019, #5e3a2d);
 673 |   color: white;
 674 | }
 675 | 
 676 | .meeting-list .meeting-card:nth-child(4n + 3) .card-poster {
 677 |   background: linear-gradient(145deg, #fff1dc, #ffd6d6);
 678 | }
 679 | 
 680 | .meeting-list .meeting-card:nth-child(4n + 4) .card-poster {
 681 |   background: linear-gradient(145deg, #f8d6d8, #a76b74);
 682 |   color: white;
 683 | }
 684 | 
 685 | .mine-list .meeting-card .card-poster {
 686 |   background: linear-gradient(145deg, #dfe8ff, #b7cdfd);
 687 | }
 688 | 
 689 | .manage-list .meeting-card .card-poster {
 690 |   background: linear-gradient(145deg, #ffe9da, #f9c7aa);
 691 | }
 692 | 
 693 | .card-poster::before,
 694 | .card-poster::after {
 695 |   content: "";
 696 |   position: absolute;
 697 |   border-radius: 999px;
 698 |   pointer-events: none;
 699 | }
 700 | 
 701 | .card-poster::before {
 702 |   width: 170px;
 703 |   height: 170px;
 704 |   right: -38px;
 705 |   bottom: -54px;
 706 |   background: rgba(255, 255, 255, 0.14);
 707 | }
 708 | 
 709 | .card-poster::after {
 710 |   width: 90px;
 711 |   height: 90px;
 712 |   right: 18px;
 713 |   top: 16px;
 714 |   background: rgba(255, 255, 255, 0.1);
 715 | }
 716 | 
 717 | .card-pills {
 718 |   position: relative;
 719 |   z-index: 1;
 720 |   display: flex;
 721 |   flex-wrap: wrap;
 722 |   align-items: center;
 723 |   gap: 8px;
 724 | }
 725 | 
 726 | .card-pill {
 727 |   display: inline-flex;
 728 |   align-items: center;
 729 |   justify-content: center;
 730 |   min-height: 28px;
 731 |   padding: 4px 10px;
 732 |   border-radius: 999px;
 733 |   border: 1px solid rgba(255, 255, 255, 0.26);
 734 |   background: rgba(255, 255, 255, 0.92);
 735 |   color: var(--text);
 736 |   font-size: 0.74rem;
 737 |   font-weight: 800;
 738 | }
 739 | 
 740 | .card-pill.primary {
 741 |   border-color: transparent;
 742 |   background: #ff6542;
 743 |   color: white;
 744 | }
 745 | 
 746 | .card-code {
 747 |   position: absolute;
 748 |   right: 14px;
 749 |   bottom: 14px;
 750 |   z-index: 1;
 751 |   font-size: 0.78rem;
 752 |   font-weight: 800;
 753 |   letter-spacing: 0.02em;
 754 | }
 755 | 
 756 | .card-copy {
 757 |   display: grid;
 758 |   gap: 10px;
 759 |   padding: 0 2px 2px;
 760 | }
 761 | 
 762 | .card-location,
 763 | .card-schedule {
 764 |   margin: 0;
 765 |   font-size: 0.85rem;
 766 |   color: var(--muted);
 767 | }
 768 | 
 769 | .meeting-card h3 {
 770 |   margin: 0;
 771 |   font-size: 1.45rem;
 772 |   font-weight: 800;
 773 |   letter-spacing: -0.05em;
 774 |   line-height: 1.2;
 775 | }
 776 | 
 777 | .description-preview {
 778 |   min-height: 46px;
 779 |   margin: 0;
 780 |   font-size: 0.92rem;
 781 | }
 782 | 
 783 | .meta-row,
 784 | .dialog-meta {
 785 |   display: flex;
 786 |   flex-wrap: wrap;
 787 |   gap: 8px;
 788 | }
 789 | 
 790 | .meta-chip {
 791 |   display: inline-flex;
 792 |   align-items: center;
 793 |   justify-content: center;
 794 |   min-height: 30px;
 795 |   padding: 5px 10px;
 796 |   border-radius: 999px;
 797 |   background: var(--surface-muted);
 798 |   border: 1px solid var(--line);
 799 |   font-size: 0.76rem;
 800 |   font-weight: 700;
 801 |   color: var(--text);
 802 | }
 803 | 
 804 | .card-footer {
 805 |   display: grid;
 806 |   gap: 12px;
 807 | }
 808 | 
 809 | .card-actions,
 810 | .dialog-owner-actions {
 811 |   display: flex;
 812 |   flex-wrap: wrap;
 813 |   gap: 8px;
 814 | }
 815 | 
 816 | .card-actions .button,
 817 | .dialog-owner-actions .button {
 818 |   min-height: 38px;
 819 |   padding: 8px 12px;
 820 |   font-size: 0.86rem;
 821 | }
 822 | 
 823 | .utility-grid {
 824 |   display: grid;
 825 |   grid-template-columns: 1.2fr 0.8fr;
 826 |   gap: 20px;
 827 | }
 828 | 
 829 | .map-shell {
 830 |   display: grid;
 831 |   grid-template-columns: 0.92fr 1.08fr;
 832 |   gap: 18px;
 833 |   padding: 24px;
 834 | }
 835 | 
 836 | .map-copy h2,
 837 | .help-box h3,
 838 | .utility-note h3,
 839 | .dialog-description h3 {
 840 |   font-size: 1.65rem;
 841 |   font-weight: 800;
 842 |   letter-spacing: -0.04em;
 843 |   line-height: 1.1;
 844 | }
 845 | 
 846 | .mini-feature-grid {
 847 |   display: grid;
 848 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 849 |   gap: 12px;
 850 |   margin-top: 18px;
 851 | }
 852 | 
 853 | .mini-feature-grid article {
 854 |   padding: 18px;
 855 |   border-radius: 18px;
 856 |   background: var(--surface-muted);
 857 | }
 858 | 
 859 | .mini-feature-grid strong {
 860 |   display: block;
 861 |   margin-bottom: 8px;
 862 |   font-size: 1rem;
 863 |   font-weight: 800;
 864 | }
 865 | 
 866 | .mini-feature-grid p {
 867 |   margin: 0;
 868 | }
 869 | 
 870 | .map-placeholder {
 871 |   min-height: 280px;
 872 |   display: grid;
 873 |   place-items: center;
 874 |   border-radius: 22px;
 875 |   background:
 876 |     radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),
 877 |     linear-gradient(145deg, #f7efe0, #ead8b7);
 878 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
 879 |   text-align: center;
 880 | }
 881 | 
 882 | .utility-note,
 883 | .help-box {
 884 |   padding: 24px;
 885 | }
 886 | 
 887 | .utility-note ul,
 888 | .help-box ul {
 889 |   margin: 0;
 890 |   padding-left: 18px;
 891 | }
 892 | 
 893 | .empty-state {
 894 |   grid-column: 1 / -1;
 895 |   padding: 28px 22px;
 896 |   border-radius: 20px;
 897 |   border: 1px dashed var(--line-strong);
 898 |   background: var(--surface);
 899 |   color: var(--muted);
 900 |   text-align: center;
 901 | }
 902 | 
 903 | .detail-dialog {
 904 |   width: min(720px, calc(100% - 24px));
 905 |   padding: 0;
 906 |   border: 0;
 907 |   border-radius: 24px;
 908 |   background: var(--surface);
 909 | }
 910 | 
 911 | .detail-dialog::backdrop {
 912 |   background: rgba(17, 17, 17, 0.34);
 913 |   backdrop-filter: blur(3px);
 914 | }
 915 | 
 916 | .dialog-shell {
 917 |   display: grid;
 918 |   gap: 18px;
 919 |   padding: 24px;
 920 | }
 921 | 
 922 | .dialog-header {
 923 |   display: flex;
 924 |   align-items: flex-start;
 925 |   justify-content: space-between;
 926 |   gap: 16px;
 927 | }
 928 | 
 929 | .dialog-description {
 930 |   padding: 20px;
 931 |   border-radius: 20px;
 932 |   background: var(--surface-muted);
 933 | }
 934 | 
 935 | .is-hidden {
 936 |   display: none !important;
 937 | }
 938 | 
 939 | .site-footer {
 940 |   padding: 28px 0 54px;
 941 | }
 942 | 
 943 | .footer-row {
 944 |   display: flex;
 945 |   align-items: center;
 946 |   justify-content: space-between;
 947 |   gap: 24px;
 948 |   padding: 24px 0 0;
 949 |   border-top: 1px solid var(--line);
 950 | }
 951 | 
 952 | .footer-text {
 953 |   max-width: 34rem;
 954 |   margin: 8px 0 0;
 955 | }
 956 | 
 957 | .footer-links {
 958 |   flex-wrap: wrap;
 959 |   justify-content: flex-end;
 960 |   gap: 16px;
 961 | }
 962 | 
 963 | .footer-links a {
 964 |   color: var(--muted);
 965 |   font-size: 0.92rem;
 966 |   font-weight: 700;
 967 | }
 968 | 
 969 | @media (max-width: 1120px) {
 970 |   .hero-banner,
 971 |   .utility-grid,
 972 |   .create-shell,
 973 |   .map-shell {
 974 |     grid-template-columns: 1fr;
 975 |   }
 976 | 
 977 |   .shortcut-grid {
 978 |     grid-template-columns: repeat(4, minmax(0, 1fr));
 979 |   }
 980 | 
 981 |   .status-strip,
 982 |   .meeting-list {
 983 |     grid-template-columns: repeat(2, minmax(0, 1fr));
 984 |   }
 985 | 
 986 |   .search-form {
 987 |     grid-template-columns: repeat(3, minmax(0, 1fr));
 988 |   }
 989 | 
 990 |   .hero-orb {
 991 |     position: static;
 992 |     width: min(100%, 420px);
 993 |     margin-inline: auto;
 994 |   }
 995 | 
 996 |   .hero-media {
 997 |     min-height: auto;
 998 |   }
 999 | }
1000 | 
1001 | @media (max-width: 780px) {
1002 |   .nav-row,
1003 |   .brand-group,
1004 |   .footer-row,
1005 |   .section-head,
1006 |   .dialog-header,
1007 |   .card-actions,
1008 |   .dialog-owner-actions,
1009 |   .form-actions,
1010 |   .hero-actions {
1011 |     flex-direction: column;
1012 |     align-items: stretch;
1013 |   }
1014 | 
1015 |   .nav-row,
1016 |   .sub-menu {
1017 |     padding: 14px 0;
1018 |   }
1019 | 
1020 |   .brand-group {
1021 |     gap: 14px;
1022 |   }
1023 | 
1024 |   .header-actions {
1025 |     width: 100%;
1026 |     justify-content: flex-start;
1027 |     gap: 8px;
1028 |   }
1029 | 
1030 |   .hero-banner,
1031 |   .shortcut-shell,
1032 |   .search-form,
1033 |   .map-shell,
1034 |   .utility-note,
1035 |   .help-box,
1036 |   .create-form,
1037 |   .dialog-shell {
1038 |     padding: 18px;
1039 |   }
1040 | 
1041 |   .hero-copy h1 {
1042 |     max-width: none;
1043 |     font-size: clamp(2.5rem, 11vw, 3.3rem);
1044 |   }
1045 | 
1046 |   .hero-teaser-grid,
1047 |   .meeting-list,
1048 |   .mini-feature-grid,
1049 |   .search-form,
1050 |   .create-panel {
1051 |     grid-template-columns: 1fr;
1052 |   }
1053 | 
1054 |   .status-strip {
1055 |     grid-template-columns: repeat(2, minmax(0, 1fr));
1056 |   }
1057 | 
1058 |   .shortcut-grid {
1059 |     grid-template-columns: repeat(4, minmax(0, 1fr));
1060 |   }
1061 | 
1062 |   .hero-orb {
1063 |     width: 100%;
1064 |     border-radius: 32px;
1065 |     aspect-ratio: auto;
1066 |     min-height: 260px;
1067 |     padding: 18px;
1068 |   }
1069 | 
1070 |   .hero-page-indicator {
1071 |     position: static;
1072 |     margin-top: 12px;
1073 |     justify-self: flex-end;
1074 |   }
1075 | 
1076 |   .hero-nav-button {
1077 |     top: 18px;
1078 |     transform: none;
1079 |   }
1080 | 
1081 |   .hero-nav-prev {
1082 |     left: 18px;
1083 |   }
1084 | 
1085 |   .hero-nav-next {
1086 |     right: 18px;
1087 |   }
1088 | 
1089 |   .button,
1090 |   .card-actions .button,
1091 |   .dialog-owner-actions .button {
1092 |     width: 100%;
1093 |   }
1094 | 
1095 |   .footer-links {
1096 |     justify-content: flex-start;
1097 |   }
1098 | }
1099 | 
1100 | @media (max-width: 520px) {
1101 |   .container {
1102 |     width: min(1180px, calc(100% - 24px));
1103 |   }
1104 | 
1105 |   .brand,
1106 |   .footer-brand {
1107 |     font-size: 1.7rem;
1108 |   }
1109 | 
1110 |   .sub-menu {
1111 |     gap: 14px;
1112 |   }
1113 | 
1114 |   .hero-banner {
1115 |     padding: 20px;
1116 |     border-radius: 28px;
1117 |   }
1118 | 
1119 |   .hero-copy h1 {
1120 |     font-size: clamp(2.1rem, 10vw, 2.8rem);
1121 |   }
1122 | 
1123 |   .shortcut-grid {
1124 |     grid-template-columns: repeat(2, minmax(0, 1fr));
1125 |   }
1126 | 
1127 |   .shortcut-tile {
1128 |     min-height: 102px;
1129 |   }
1130 | 
1131 |   .status-strip {
1132 |     grid-template-columns: 1fr;
1133 |   }
1134 | 
1135 |   .meeting-card h3 {
1136 |     font-size: 1.28rem;
1137 |   }
1138 | 
1139 |   .card-poster {
1140 |     min-height: 158px;
1141 |   }
1142 | }
~~~~

## 3. 한 줄씩 코드 보면서 설명
### 1줄
~~~~css
   1 | /* 밝은 플랫폼형 톤으로 다시 쓰기 쉽게 색과 간격을 변수로 정리한다. */
~~~~
- 설명: CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 2줄
~~~~css
   2 | :root {
~~~~
- 설명: `:root` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 3줄
~~~~css
   3 |   --bg: #f5f5f7;
~~~~
- 설명: `:root`에 `--bg: #f5f5f7;`를 적용하는 줄이다. `--bg` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 4줄
~~~~css
   4 |   --surface: #ffffff;
~~~~
- 설명: `:root`에 `--surface: #ffffff;`를 적용하는 줄이다. `--surface` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 5줄
~~~~css
   5 |   --surface-soft: #f0f0f2;
~~~~
- 설명: `:root`에 `--surface-soft: #f0f0f2;`를 적용하는 줄이다. `--surface-soft` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 6줄
~~~~css
   6 |   --surface-muted: #f8f8f9;
~~~~
- 설명: `:root`에 `--surface-muted: #f8f8f9;`를 적용하는 줄이다. `--surface-muted` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 7줄
~~~~css
   7 |   --hero: #efe1af;
~~~~
- 설명: `:root`에 `--hero: #efe1af;`를 적용하는 줄이다. `--hero` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 8줄
~~~~css
   8 |   --hero-deep: #d7c27f;
~~~~
- 설명: `:root`에 `--hero-deep: #d7c27f;`를 적용하는 줄이다. `--hero-deep` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 9줄
~~~~css
   9 |   --text: #17181a;
~~~~
- 설명: `:root`에 `--text: #17181a;`를 적용하는 줄이다. `--text` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 10줄
~~~~css
  10 |   --muted: #74767d;
~~~~
- 설명: `:root`에 `--muted: #74767d;`를 적용하는 줄이다. `--muted` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 11줄
~~~~css
  11 |   --line: rgba(23, 24, 26, 0.08);
~~~~
- 설명: `:root`에 `--line: rgba(23, 24, 26, 0.08);`를 적용하는 줄이다. `--line` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 12줄
~~~~css
  12 |   --line-strong: rgba(23, 24, 26, 0.12);
~~~~
- 설명: `:root`에 `--line-strong: rgba(23, 24, 26, 0.12);`를 적용하는 줄이다. `--line-strong` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 13줄
~~~~css
  13 |   --accent: #111111;
~~~~
- 설명: `:root`에 `--accent: #111111;`를 적용하는 줄이다. `--accent` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 14줄
~~~~css
  14 |   --accent-soft: #ff613f;
~~~~
- 설명: `:root`에 `--accent-soft: #ff613f;`를 적용하는 줄이다. `--accent-soft` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 15줄
~~~~css
  15 |   --accent-blue: #3e7dff;
~~~~
- 설명: `:root`에 `--accent-blue: #3e7dff;`를 적용하는 줄이다. `--accent-blue` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 16줄
~~~~css
  16 |   --danger: #cf3e3e;
~~~~
- 설명: `:root`에 `--danger: #cf3e3e;`를 적용하는 줄이다. `--danger` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 17줄
~~~~css
  17 |   --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);
~~~~
- 설명: `:root`에 `--shadow: 0 14px 34px rgba(28, 30, 35, 0.06);`를 적용하는 줄이다. `--shadow` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 18줄
~~~~css
  18 |   --radius-xl: 34px;
~~~~
- 설명: `:root`에 `--radius-xl: 34px;`를 적용하는 줄이다. `--radius-xl` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 19줄
~~~~css
  19 |   --radius-lg: 24px;
~~~~
- 설명: `:root`에 `--radius-lg: 24px;`를 적용하는 줄이다. `--radius-lg` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 20줄
~~~~css
  20 |   --radius-md: 18px;
~~~~
- 설명: `:root`에 `--radius-md: 18px;`를 적용하는 줄이다. `--radius-md` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 21줄
~~~~css
  21 |   --radius-sm: 14px;
~~~~
- 설명: `:root`에 `--radius-sm: 14px;`를 적용하는 줄이다. `--radius-sm` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 22줄
~~~~css
  22 |   --font-display: "Noto Sans KR", sans-serif;
~~~~
- 설명: `:root`에 `--font-display: "Noto Sans KR", sans-serif;`를 적용하는 줄이다. `--font-display` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 23줄
~~~~css
  23 |   --font-body: "Noto Sans KR", sans-serif;
~~~~
- 설명: `:root`에 `--font-body: "Noto Sans KR", sans-serif;`를 적용하는 줄이다. `--font-body` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 24줄
~~~~css
  24 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 25줄
~~~~css
  25 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 26줄
~~~~css
  26 | * {
~~~~
- 설명: `*` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 27줄
~~~~css
  27 |   box-sizing: border-box;
~~~~
- 설명: `*`에 `box-sizing: border-box;`를 적용하는 줄이다. `box-sizing` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 28줄
~~~~css
  28 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 29줄
~~~~css
  29 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 30줄
~~~~css
  30 | html {
~~~~
- 설명: `html` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 31줄
~~~~css
  31 |   scroll-behavior: smooth;
~~~~
- 설명: `html`에 `scroll-behavior: smooth;`를 적용하는 줄이다. `scroll-behavior` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 32줄
~~~~css
  32 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 33줄
~~~~css
  33 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 34줄
~~~~css
  34 | body {
~~~~
- 설명: `body` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 35줄
~~~~css
  35 |   margin: 0;
~~~~
- 설명: `body`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 36줄
~~~~css
  36 |   background: var(--bg);
~~~~
- 설명: `body`에 `background: var(--bg);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 37줄
~~~~css
  37 |   color: var(--text);
~~~~
- 설명: `body`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 38줄
~~~~css
  38 |   font-family: var(--font-body);
~~~~
- 설명: `body`에 `font-family: var(--font-body);`를 적용하는 줄이다. `font-family` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 39줄
~~~~css
  39 |   overflow-x: hidden;
~~~~
- 설명: `body`에 `overflow-x: hidden;`를 적용하는 줄이다. 가로 넘침 처리 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 40줄
~~~~css
  40 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 41줄
~~~~css
  41 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 42줄
~~~~css
  42 | a {
~~~~
- 설명: `a` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 43줄
~~~~css
  43 |   color: inherit;
~~~~
- 설명: `a`에 `color: inherit;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 44줄
~~~~css
  44 |   text-decoration: none;
~~~~
- 설명: `a`에 `text-decoration: none;`를 적용하는 줄이다. `text-decoration` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 45줄
~~~~css
  45 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 46줄
~~~~css
  46 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 47줄
~~~~css
  47 | button,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 48줄
~~~~css
  48 | input,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 49줄
~~~~css
  49 | select,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 50줄
~~~~css
  50 | textarea {
~~~~
- 설명: `textarea` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 51줄
~~~~css
  51 |   font: inherit;
~~~~
- 설명: `textarea`에 `font: inherit;`를 적용하는 줄이다. `font` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 52줄
~~~~css
  52 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 53줄
~~~~css
  53 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 54줄
~~~~css
  54 | .container {
~~~~
- 설명: `.container` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 55줄
~~~~css
  55 |   width: min(1180px, calc(100% - 32px));
~~~~
- 설명: `.container`에 `width: min(1180px, calc(100% - 32px));`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 56줄
~~~~css
  56 |   margin: 0 auto;
~~~~
- 설명: `.container`에 `margin: 0 auto;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 57줄
~~~~css
  57 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 58줄
~~~~css
  58 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 59줄
~~~~css
  59 | .site-header {
~~~~
- 설명: `.site-header` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 60줄
~~~~css
  60 |   position: sticky;
~~~~
- 설명: `.site-header`에 `position: sticky;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 61줄
~~~~css
  61 |   top: 0;
~~~~
- 설명: `.site-header`에 `top: 0;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 62줄
~~~~css
  62 |   z-index: 40;
~~~~
- 설명: `.site-header`에 `z-index: 40;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 63줄
~~~~css
  63 |   background: rgba(255, 255, 255, 0.94);
~~~~
- 설명: `.site-header`에 `background: rgba(255, 255, 255, 0.94);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 64줄
~~~~css
  64 |   border-bottom: 1px solid var(--line);
~~~~
- 설명: `.site-header`에 `border-bottom: 1px solid var(--line);`를 적용하는 줄이다. `border-bottom` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 65줄
~~~~css
  65 |   backdrop-filter: blur(16px);
~~~~
- 설명: `.site-header`에 `backdrop-filter: blur(16px);`를 적용하는 줄이다. 뒤 배경에 흐림 같은 효과를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 66줄
~~~~css
  66 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 67줄
~~~~css
  67 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 68줄
~~~~css
  68 | .nav-row {
~~~~
- 설명: `.nav-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 69줄
~~~~css
  69 |   display: flex;
~~~~
- 설명: `.nav-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 70줄
~~~~css
  70 |   align-items: center;
~~~~
- 설명: `.nav-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 71줄
~~~~css
  71 |   justify-content: space-between;
~~~~
- 설명: `.nav-row`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 72줄
~~~~css
  72 |   gap: 24px;
~~~~
- 설명: `.nav-row`에 `gap: 24px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 73줄
~~~~css
  73 |   min-height: 72px;
~~~~
- 설명: `.nav-row`에 `min-height: 72px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 74줄
~~~~css
  74 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 75줄
~~~~css
  75 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 76줄
~~~~css
  76 | .brand-group,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 77줄
~~~~css
  77 | .menu,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 78줄
~~~~css
  78 | .sub-menu,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 79줄
~~~~css
  79 | .header-actions,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 80줄
~~~~css
  80 | .footer-links {
~~~~
- 설명: `.footer-links` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 81줄
~~~~css
  81 |   display: flex;
~~~~
- 설명: `.footer-links`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 82줄
~~~~css
  82 |   align-items: center;
~~~~
- 설명: `.footer-links`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 83줄
~~~~css
  83 |   min-width: 0;
~~~~
- 설명: `.footer-links`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 84줄
~~~~css
  84 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 85줄
~~~~css
  85 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 86줄
~~~~css
  86 | .brand-group {
~~~~
- 설명: `.brand-group` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 87줄
~~~~css
  87 |   gap: 34px;
~~~~
- 설명: `.brand-group`에 `gap: 34px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 88줄
~~~~css
  88 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 89줄
~~~~css
  89 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 90줄
~~~~css
  90 | .brand,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 91줄
~~~~css
  91 | .footer-brand {
~~~~
- 설명: `.footer-brand` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 92줄
~~~~css
  92 |   font-family: var(--font-display);
~~~~
- 설명: `.footer-brand`에 `font-family: var(--font-display);`를 적용하는 줄이다. `font-family` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 93줄
~~~~css
  93 |   font-size: 2rem;
~~~~
- 설명: `.footer-brand`에 `font-size: 2rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 94줄
~~~~css
  94 |   font-weight: 800;
~~~~
- 설명: `.footer-brand`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 95줄
~~~~css
  95 |   letter-spacing: -0.05em;
~~~~
- 설명: `.footer-brand`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 96줄
~~~~css
  96 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 97줄
~~~~css
  97 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 98줄
~~~~css
  98 | .menu {
~~~~
- 설명: `.menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 99줄
~~~~css
  99 |   flex-wrap: wrap;
~~~~
- 설명: `.menu`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 100줄
~~~~css
 100 |   gap: 20px;
~~~~
- 설명: `.menu`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 101줄
~~~~css
 101 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 102줄
~~~~css
 102 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 103줄
~~~~css
 103 | .menu a,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 104줄
~~~~css
 104 | .sub-menu a,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 105줄
~~~~css
 105 | .sub-menu-button {
~~~~
- 설명: `.sub-menu-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 106줄
~~~~css
 106 |   color: var(--muted);
~~~~
- 설명: `.sub-menu-button`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 107줄
~~~~css
 107 |   font-size: 0.97rem;
~~~~
- 설명: `.sub-menu-button`에 `font-size: 0.97rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 108줄
~~~~css
 108 |   font-weight: 700;
~~~~
- 설명: `.sub-menu-button`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 109줄
~~~~css
 109 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 110줄
~~~~css
 110 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 111줄
~~~~css
 111 | .menu a.is-current,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 112줄
~~~~css
 112 | .sub-menu a.is-current,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 113줄
~~~~css
 113 | .sub-menu-button.is-current,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 114줄
~~~~css
 114 | .sub-menu-button.is-active,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 115줄
~~~~css
 115 | .menu a:hover,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 116줄
~~~~css
 116 | .sub-menu a:hover,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 117줄
~~~~css
 117 | .sub-menu-button:hover {
~~~~
- 설명: `.sub-menu-button:hover` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 118줄
~~~~css
 118 |   color: var(--text);
~~~~
- 설명: `.sub-menu-button:hover`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 119줄
~~~~css
 119 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 120줄
~~~~css
 120 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 121줄
~~~~css
 121 | .sub-menu-button {
~~~~
- 설명: `.sub-menu-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 122줄
~~~~css
 122 |   padding: 0;
~~~~
- 설명: `.sub-menu-button`에 `padding: 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 123줄
~~~~css
 123 |   border: 0;
~~~~
- 설명: `.sub-menu-button`에 `border: 0;`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 124줄
~~~~css
 124 |   background: transparent;
~~~~
- 설명: `.sub-menu-button`에 `background: transparent;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 125줄
~~~~css
 125 |   cursor: pointer;
~~~~
- 설명: `.sub-menu-button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 126줄
~~~~css
 126 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 127줄
~~~~css
 127 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 128줄
~~~~css
 128 | .header-actions {
~~~~
- 설명: `.header-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 129줄
~~~~css
 129 |   gap: 12px;
~~~~
- 설명: `.header-actions`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 130줄
~~~~css
 130 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 131줄
~~~~css
 131 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 132줄
~~~~css
 132 | .header-link {
~~~~
- 설명: `.header-link` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 133줄
~~~~css
 133 |   display: inline-flex;
~~~~
- 설명: `.header-link`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 134줄
~~~~css
 134 |   align-items: center;
~~~~
- 설명: `.header-link`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 135줄
~~~~css
 135 |   justify-content: center;
~~~~
- 설명: `.header-link`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 136줄
~~~~css
 136 |   min-height: 40px;
~~~~
- 설명: `.header-link`에 `min-height: 40px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 137줄
~~~~css
 137 |   padding: 10px 16px;
~~~~
- 설명: `.header-link`에 `padding: 10px 16px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 138줄
~~~~css
 138 |   border-radius: 12px;
~~~~
- 설명: `.header-link`에 `border-radius: 12px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 139줄
~~~~css
 139 |   border: 1px solid var(--line-strong);
~~~~
- 설명: `.header-link`에 `border: 1px solid var(--line-strong);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 140줄
~~~~css
 140 |   background: var(--surface);
~~~~
- 설명: `.header-link`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 141줄
~~~~css
 141 |   font-size: 0.92rem;
~~~~
- 설명: `.header-link`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 142줄
~~~~css
 142 |   font-weight: 700;
~~~~
- 설명: `.header-link`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 143줄
~~~~css
 143 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 144줄
~~~~css
 144 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 145줄
~~~~css
 145 | .header-link.primary {
~~~~
- 설명: `.header-link.primary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 146줄
~~~~css
 146 |   border-color: var(--text);
~~~~
- 설명: `.header-link.primary`에 `border-color: var(--text);`를 적용하는 줄이다. `border-color` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 147줄
~~~~css
 147 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 148줄
~~~~css
 148 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 149줄
~~~~css
 149 | .sub-nav {
~~~~
- 설명: `.sub-nav` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 150줄
~~~~css
 150 |   border-top: 1px solid var(--line);
~~~~
- 설명: `.sub-nav`에 `border-top: 1px solid var(--line);`를 적용하는 줄이다. `border-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 151줄
~~~~css
 151 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 152줄
~~~~css
 152 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 153줄
~~~~css
 153 | .sub-menu {
~~~~
- 설명: `.sub-menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 154줄
~~~~css
 154 |   flex-wrap: wrap;
~~~~
- 설명: `.sub-menu`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 155줄
~~~~css
 155 |   gap: 18px;
~~~~
- 설명: `.sub-menu`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 156줄
~~~~css
 156 |   min-height: 50px;
~~~~
- 설명: `.sub-menu`에 `min-height: 50px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 157줄
~~~~css
 157 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 158줄
~~~~css
 158 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 159줄
~~~~css
 159 | .hero-section {
~~~~
- 설명: `.hero-section` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 160줄
~~~~css
 160 |   padding: 18px 0 12px;
~~~~
- 설명: `.hero-section`에 `padding: 18px 0 12px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 161줄
~~~~css
 161 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 162줄
~~~~css
 162 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 163줄
~~~~css
 163 | /* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */
~~~~
- 설명: CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 164줄
~~~~css
 164 | .hero-banner {
~~~~
- 설명: `.hero-banner` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 165줄
~~~~css
 165 |   display: grid;
~~~~
- 설명: `.hero-banner`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 166줄
~~~~css
 166 |   grid-template-columns: 1.05fr 0.95fr;
~~~~
- 설명: `.hero-banner`에 `grid-template-columns: 1.05fr 0.95fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 167줄
~~~~css
 167 |   gap: 34px;
~~~~
- 설명: `.hero-banner`에 `gap: 34px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 168줄
~~~~css
 168 |   align-items: center;
~~~~
- 설명: `.hero-banner`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 169줄
~~~~css
 169 |   padding: 56px;
~~~~
- 설명: `.hero-banner`에 `padding: 56px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 170줄
~~~~css
 170 |   border-radius: 40px;
~~~~
- 설명: `.hero-banner`에 `border-radius: 40px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 171줄
~~~~css
 171 |   background: var(--hero);
~~~~
- 설명: `.hero-banner`에 `background: var(--hero);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 172줄
~~~~css
 172 |   overflow: hidden;
~~~~
- 설명: `.hero-banner`에 `overflow: hidden;`를 적용하는 줄이다. 넘치는 내용 처리 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 173줄
~~~~css
 173 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 174줄
~~~~css
 174 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 175줄
~~~~css
 175 | .hero-copy {
~~~~
- 설명: `.hero-copy` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 176줄
~~~~css
 176 |   display: grid;
~~~~
- 설명: `.hero-copy`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 177줄
~~~~css
 177 |   gap: 20px;
~~~~
- 설명: `.hero-copy`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 178줄
~~~~css
 178 |   min-width: 0;
~~~~
- 설명: `.hero-copy`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 179줄
~~~~css
 179 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 180줄
~~~~css
 180 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 181줄
~~~~css
 181 | .hero-kicker,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 182줄
~~~~css
 182 | .eyebrow {
~~~~
- 설명: `.eyebrow` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 183줄
~~~~css
 183 |   margin: 0;
~~~~
- 설명: `.eyebrow`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 184줄
~~~~css
 184 |   color: rgba(23, 24, 26, 0.78);
~~~~
- 설명: `.eyebrow`에 `color: rgba(23, 24, 26, 0.78);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 185줄
~~~~css
 185 |   font-size: 0.84rem;
~~~~
- 설명: `.eyebrow`에 `font-size: 0.84rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 186줄
~~~~css
 186 |   font-weight: 800;
~~~~
- 설명: `.eyebrow`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 187줄
~~~~css
 187 |   letter-spacing: 0.04em;
~~~~
- 설명: `.eyebrow`에 `letter-spacing: 0.04em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 188줄
~~~~css
 188 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 189줄
~~~~css
 189 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 190줄
~~~~css
 190 | .hero-copy h1,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 191줄
~~~~css
 191 | .section-title h2,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 192줄
~~~~css
 192 | .map-copy h2,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 193줄
~~~~css
 193 | .help-box h3,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 194줄
~~~~css
 194 | .utility-note h3,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 195줄
~~~~css
 195 | .dialog-header h2 {
~~~~
- 설명: `.dialog-header h2` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 196줄
~~~~css
 196 |   margin: 0;
~~~~
- 설명: `.dialog-header h2`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 197줄
~~~~css
 197 |   font-family: var(--font-display);
~~~~
- 설명: `.dialog-header h2`에 `font-family: var(--font-display);`를 적용하는 줄이다. `font-family` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 198줄
~~~~css
 198 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 199줄
~~~~css
 199 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 200줄
~~~~css
 200 | .hero-copy h1 {
~~~~
- 설명: `.hero-copy h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 201줄
~~~~css
 201 |   max-width: 8ch;
~~~~
- 설명: `.hero-copy h1`에 `max-width: 8ch;`를 적용하는 줄이다. `max-width` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 202줄
~~~~css
 202 |   font-size: clamp(3.1rem, 5vw, 4.8rem);
~~~~
- 설명: `.hero-copy h1`에 `font-size: clamp(3.1rem, 5vw, 4.8rem);`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 203줄
~~~~css
 203 |   font-weight: 800;
~~~~
- 설명: `.hero-copy h1`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 204줄
~~~~css
 204 |   letter-spacing: -0.08em;
~~~~
- 설명: `.hero-copy h1`에 `letter-spacing: -0.08em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 205줄
~~~~css
 205 |   line-height: 0.96;
~~~~
- 설명: `.hero-copy h1`에 `line-height: 0.96;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 206줄
~~~~css
 206 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 207줄
~~~~css
 207 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 208줄
~~~~css
 208 | .hero-text,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 209줄
~~~~css
 209 | .section-title p:last-child,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 210줄
~~~~css
 210 | .map-copy p,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 211줄
~~~~css
 211 | .help-box li,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 212줄
~~~~css
 212 | .utility-note li,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 213줄
~~~~css
 213 | .dialog-description p,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 214줄
~~~~css
 214 | .footer-text,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 215줄
~~~~css
 215 | .shortcut-tile p,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 216줄
~~~~css
 216 | .meeting-card p {
~~~~
- 설명: `.meeting-card p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 217줄
~~~~css
 217 |   color: var(--muted);
~~~~
- 설명: `.meeting-card p`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 218줄
~~~~css
 218 |   line-height: 1.65;
~~~~
- 설명: `.meeting-card p`에 `line-height: 1.65;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 219줄
~~~~css
 219 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 220줄
~~~~css
 220 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 221줄
~~~~css
 221 | .hero-text {
~~~~
- 설명: `.hero-text` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 222줄
~~~~css
 222 |   max-width: 34rem;
~~~~
- 설명: `.hero-text`에 `max-width: 34rem;`를 적용하는 줄이다. `max-width` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 223줄
~~~~css
 223 |   margin: 0;
~~~~
- 설명: `.hero-text`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 224줄
~~~~css
 224 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 225줄
~~~~css
 225 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 226줄
~~~~css
 226 | .hero-link,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 227줄
~~~~css
 227 | .more-link {
~~~~
- 설명: `.more-link` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 228줄
~~~~css
 228 |   display: inline-flex;
~~~~
- 설명: `.more-link`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 229줄
~~~~css
 229 |   align-items: center;
~~~~
- 설명: `.more-link`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 230줄
~~~~css
 230 |   gap: 8px;
~~~~
- 설명: `.more-link`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 231줄
~~~~css
 231 |   font-weight: 700;
~~~~
- 설명: `.more-link`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 232줄
~~~~css
 232 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 233줄
~~~~css
 233 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 234줄
~~~~css
 234 | .hero-link::after,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 235줄
~~~~css
 235 | .more-link::after {
~~~~
- 설명: `.more-link::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 236줄
~~~~css
 236 |   content: "›";
~~~~
- 설명: `.more-link::after`에 `content: "›";`를 적용하는 줄이다. 가상 요소에 들어갈 내용을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 237줄
~~~~css
 237 |   font-size: 1.2rem;
~~~~
- 설명: `.more-link::after`에 `font-size: 1.2rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 238줄
~~~~css
 238 |   line-height: 1;
~~~~
- 설명: `.more-link::after`에 `line-height: 1;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 239줄
~~~~css
 239 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 240줄
~~~~css
 240 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 241줄
~~~~css
 241 | .hero-actions {
~~~~
- 설명: `.hero-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 242줄
~~~~css
 242 |   display: flex;
~~~~
- 설명: `.hero-actions`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 243줄
~~~~css
 243 |   flex-wrap: wrap;
~~~~
- 설명: `.hero-actions`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 244줄
~~~~css
 244 |   gap: 12px;
~~~~
- 설명: `.hero-actions`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 245줄
~~~~css
 245 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 246줄
~~~~css
 246 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 247줄
~~~~css
 247 | .hero-media {
~~~~
- 설명: `.hero-media` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 248줄
~~~~css
 248 |   position: relative;
~~~~
- 설명: `.hero-media`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 249줄
~~~~css
 249 |   min-height: 320px;
~~~~
- 설명: `.hero-media`에 `min-height: 320px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 250줄
~~~~css
 250 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 251줄
~~~~css
 251 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 252줄
~~~~css
 252 | .hero-orb {
~~~~
- 설명: `.hero-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 253줄
~~~~css
 253 |   position: absolute;
~~~~
- 설명: `.hero-orb`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 254줄
~~~~css
 254 |   right: -74px;
~~~~
- 설명: `.hero-orb`에 `right: -74px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 255줄
~~~~css
 255 |   top: -24px;
~~~~
- 설명: `.hero-orb`에 `top: -24px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 256줄
~~~~css
 256 |   width: 470px;
~~~~
- 설명: `.hero-orb`에 `width: 470px;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 257줄
~~~~css
 257 |   aspect-ratio: 1;
~~~~
- 설명: `.hero-orb`에 `aspect-ratio: 1;`를 적용하는 줄이다. 가로세로 비율을 고정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 258줄
~~~~css
 258 |   display: grid;
~~~~
- 설명: `.hero-orb`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 259줄
~~~~css
 259 |   place-items: center;
~~~~
- 설명: `.hero-orb`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 260줄
~~~~css
 260 |   border-radius: 50%;
~~~~
- 설명: `.hero-orb`에 `border-radius: 50%;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 261줄
~~~~css
 261 |   background:
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 262줄
~~~~css
 262 |     radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 263줄
~~~~css
 263 |     radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 264줄
~~~~css
 264 |     linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 265줄
~~~~css
 265 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
~~~~
- 설명: `.hero-orb`에 `box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 266줄
~~~~css
 266 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 267줄
~~~~css
 267 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 268줄
~~~~css
 268 | .hero-teaser-grid {
~~~~
- 설명: `.hero-teaser-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 269줄
~~~~css
 269 |   width: 74%;
~~~~
- 설명: `.hero-teaser-grid`에 `width: 74%;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 270줄
~~~~css
 270 |   display: grid;
~~~~
- 설명: `.hero-teaser-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 271줄
~~~~css
 271 |   grid-template-columns: repeat(2, minmax(0, 1fr));
~~~~
- 설명: `.hero-teaser-grid`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 272줄
~~~~css
 272 |   gap: 14px;
~~~~
- 설명: `.hero-teaser-grid`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 273줄
~~~~css
 273 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 274줄
~~~~css
 274 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 275줄
~~~~css
 275 | .hero-teaser-card {
~~~~
- 설명: `.hero-teaser-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 276줄
~~~~css
 276 |   display: grid;
~~~~
- 설명: `.hero-teaser-card`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 277줄
~~~~css
 277 |   gap: 6px;
~~~~
- 설명: `.hero-teaser-card`에 `gap: 6px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 278줄
~~~~css
 278 |   padding: 16px;
~~~~
- 설명: `.hero-teaser-card`에 `padding: 16px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 279줄
~~~~css
 279 |   border-radius: 22px;
~~~~
- 설명: `.hero-teaser-card`에 `border-radius: 22px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 280줄
~~~~css
 280 |   border: 1px solid rgba(23, 24, 26, 0.08);
~~~~
- 설명: `.hero-teaser-card`에 `border: 1px solid rgba(23, 24, 26, 0.08);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 281줄
~~~~css
 281 |   background: rgba(255, 255, 255, 0.82);
~~~~
- 설명: `.hero-teaser-card`에 `background: rgba(255, 255, 255, 0.82);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 282줄
~~~~css
 282 |   box-shadow: var(--shadow);
~~~~
- 설명: `.hero-teaser-card`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 283줄
~~~~css
 283 |   text-align: left;
~~~~
- 설명: `.hero-teaser-card`에 `text-align: left;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 284줄
~~~~css
 284 |   cursor: pointer;
~~~~
- 설명: `.hero-teaser-card`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 285줄
~~~~css
 285 |   transition:
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 286줄
~~~~css
 286 |     transform 0.18s ease,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 287줄
~~~~css
 287 |     background 0.18s ease,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 288줄
~~~~css
 288 |     box-shadow 0.18s ease;
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 289줄
~~~~css
 289 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 290줄
~~~~css
 290 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 291줄
~~~~css
 291 | .hero-teaser-card:hover,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 292줄
~~~~css
 292 | .hero-teaser-card.is-active {
~~~~
- 설명: `.hero-teaser-card.is-active` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 293줄
~~~~css
 293 |   transform: translateY(-2px);
~~~~
- 설명: `.hero-teaser-card.is-active`에 `transform: translateY(-2px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 294줄
~~~~css
 294 |   background: rgba(255, 255, 255, 0.98);
~~~~
- 설명: `.hero-teaser-card.is-active`에 `background: rgba(255, 255, 255, 0.98);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 295줄
~~~~css
 295 |   box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);
~~~~
- 설명: `.hero-teaser-card.is-active`에 `box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 296줄
~~~~css
 296 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 297줄
~~~~css
 297 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 298줄
~~~~css
 298 | .hero-teaser-card.wide {
~~~~
- 설명: `.hero-teaser-card.wide` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 299줄
~~~~css
 299 |   grid-column: 1 / -1;
~~~~
- 설명: `.hero-teaser-card.wide`에 `grid-column: 1 / -1;`를 적용하는 줄이다. 그리드에서 차지할 열 범위를 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 300줄
~~~~css
 300 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 301줄
~~~~css
 301 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 302줄
~~~~css
 302 | .hero-teaser-card span {
~~~~
- 설명: `.hero-teaser-card span` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 303줄
~~~~css
 303 |   color: var(--muted);
~~~~
- 설명: `.hero-teaser-card span`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 304줄
~~~~css
 304 |   font-size: 0.78rem;
~~~~
- 설명: `.hero-teaser-card span`에 `font-size: 0.78rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 305줄
~~~~css
 305 |   font-weight: 700;
~~~~
- 설명: `.hero-teaser-card span`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 306줄
~~~~css
 306 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 307줄
~~~~css
 307 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 308줄
~~~~css
 308 | .hero-teaser-card strong {
~~~~
- 설명: `.hero-teaser-card strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 309줄
~~~~css
 309 |   font-size: 1rem;
~~~~
- 설명: `.hero-teaser-card strong`에 `font-size: 1rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 310줄
~~~~css
 310 |   font-weight: 800;
~~~~
- 설명: `.hero-teaser-card strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 311줄
~~~~css
 311 |   line-height: 1.35;
~~~~
- 설명: `.hero-teaser-card strong`에 `line-height: 1.35;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 312줄
~~~~css
 312 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 313줄
~~~~css
 313 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 314줄
~~~~css
 314 | .hero-page-indicator {
~~~~
- 설명: `.hero-page-indicator` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 315줄
~~~~css
 315 |   position: absolute;
~~~~
- 설명: `.hero-page-indicator`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 316줄
~~~~css
 316 |   right: 12px;
~~~~
- 설명: `.hero-page-indicator`에 `right: 12px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 317줄
~~~~css
 317 |   bottom: 10px;
~~~~
- 설명: `.hero-page-indicator`에 `bottom: 10px;`를 적용하는 줄이다. 아래쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 318줄
~~~~css
 318 |   margin: 0;
~~~~
- 설명: `.hero-page-indicator`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 319줄
~~~~css
 319 |   padding: 6px 10px;
~~~~
- 설명: `.hero-page-indicator`에 `padding: 6px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 320줄
~~~~css
 320 |   border-radius: 999px;
~~~~
- 설명: `.hero-page-indicator`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 321줄
~~~~css
 321 |   background: rgba(23, 24, 26, 0.62);
~~~~
- 설명: `.hero-page-indicator`에 `background: rgba(23, 24, 26, 0.62);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 322줄
~~~~css
 322 |   color: white;
~~~~
- 설명: `.hero-page-indicator`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 323줄
~~~~css
 323 |   font-size: 0.78rem;
~~~~
- 설명: `.hero-page-indicator`에 `font-size: 0.78rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 324줄
~~~~css
 324 |   font-weight: 700;
~~~~
- 설명: `.hero-page-indicator`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 325줄
~~~~css
 325 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 326줄
~~~~css
 326 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 327줄
~~~~css
 327 | .hero-nav-button {
~~~~
- 설명: `.hero-nav-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 328줄
~~~~css
 328 |   position: absolute;
~~~~
- 설명: `.hero-nav-button`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 329줄
~~~~css
 329 |   top: 50%;
~~~~
- 설명: `.hero-nav-button`에 `top: 50%;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 330줄
~~~~css
 330 |   z-index: 2;
~~~~
- 설명: `.hero-nav-button`에 `z-index: 2;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 331줄
~~~~css
 331 |   width: 44px;
~~~~
- 설명: `.hero-nav-button`에 `width: 44px;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 332줄
~~~~css
 332 |   height: 44px;
~~~~
- 설명: `.hero-nav-button`에 `height: 44px;`를 적용하는 줄이다. 높이를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 333줄
~~~~css
 333 |   display: inline-grid;
~~~~
- 설명: `.hero-nav-button`에 `display: inline-grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 334줄
~~~~css
 334 |   place-items: center;
~~~~
- 설명: `.hero-nav-button`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 335줄
~~~~css
 335 |   border: 1px solid rgba(23, 24, 26, 0.12);
~~~~
- 설명: `.hero-nav-button`에 `border: 1px solid rgba(23, 24, 26, 0.12);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 336줄
~~~~css
 336 |   border-radius: 999px;
~~~~
- 설명: `.hero-nav-button`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 337줄
~~~~css
 337 |   background: rgba(255, 255, 255, 0.94);
~~~~
- 설명: `.hero-nav-button`에 `background: rgba(255, 255, 255, 0.94);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 338줄
~~~~css
 338 |   color: var(--text);
~~~~
- 설명: `.hero-nav-button`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 339줄
~~~~css
 339 |   cursor: pointer;
~~~~
- 설명: `.hero-nav-button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 340줄
~~~~css
 340 |   transform: translateY(-50%);
~~~~
- 설명: `.hero-nav-button`에 `transform: translateY(-50%);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 341줄
~~~~css
 341 |   box-shadow: var(--shadow);
~~~~
- 설명: `.hero-nav-button`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 342줄
~~~~css
 342 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 343줄
~~~~css
 343 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 344줄
~~~~css
 344 | .hero-nav-button:disabled {
~~~~
- 설명: `.hero-nav-button:disabled` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 345줄
~~~~css
 345 |   cursor: not-allowed;
~~~~
- 설명: `.hero-nav-button:disabled`에 `cursor: not-allowed;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 346줄
~~~~css
 346 |   opacity: 0.45;
~~~~
- 설명: `.hero-nav-button:disabled`에 `opacity: 0.45;`를 적용하는 줄이다. 투명도를 조절한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 347줄
~~~~css
 347 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 348줄
~~~~css
 348 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 349줄
~~~~css
 349 | .hero-nav-prev {
~~~~
- 설명: `.hero-nav-prev` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 350줄
~~~~css
 350 |   left: 0;
~~~~
- 설명: `.hero-nav-prev`에 `left: 0;`를 적용하는 줄이다. 왼쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 351줄
~~~~css
 351 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 352줄
~~~~css
 352 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 353줄
~~~~css
 353 | .hero-nav-next {
~~~~
- 설명: `.hero-nav-next` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 354줄
~~~~css
 354 |   right: 0;
~~~~
- 설명: `.hero-nav-next`에 `right: 0;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 355줄
~~~~css
 355 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 356줄
~~~~css
 356 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 357줄
~~~~css
 357 | .dashboard-section {
~~~~
- 설명: `.dashboard-section` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 358줄
~~~~css
 358 |   padding: 10px 0 18px;
~~~~
- 설명: `.dashboard-section`에 `padding: 10px 0 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 359줄
~~~~css
 359 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 360줄
~~~~css
 360 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 361줄
~~~~css
 361 | .status-strip {
~~~~
- 설명: `.status-strip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 362줄
~~~~css
 362 |   display: grid;
~~~~
- 설명: `.status-strip`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 363줄
~~~~css
 363 |   grid-template-columns: repeat(4, minmax(0, 1fr));
~~~~
- 설명: `.status-strip`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 364줄
~~~~css
 364 |   gap: 12px;
~~~~
- 설명: `.status-strip`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 365줄
~~~~css
 365 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 366줄
~~~~css
 366 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 367줄
~~~~css
 367 | .status-card,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 368줄
~~~~css
 368 | .shortcut-tile,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 369줄
~~~~css
 369 | .search-panel,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 370줄
~~~~css
 370 | .map-shell,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 371줄
~~~~css
 371 | .utility-note,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 372줄
~~~~css
 372 | .help-box,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 373줄
~~~~css
 373 | .create-panel,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 374줄
~~~~css
 374 | .detail-dialog,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 375줄
~~~~css
 375 | .dialog-description {
~~~~
- 설명: `.dialog-description` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 376줄
~~~~css
 376 |   border: 1px solid var(--line);
~~~~
- 설명: `.dialog-description`에 `border: 1px solid var(--line);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 377줄
~~~~css
 377 |   box-shadow: var(--shadow);
~~~~
- 설명: `.dialog-description`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 378줄
~~~~css
 378 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 379줄
~~~~css
 379 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 380줄
~~~~css
 380 | .status-card {
~~~~
- 설명: `.status-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 381줄
~~~~css
 381 |   padding: 20px 22px;
~~~~
- 설명: `.status-card`에 `padding: 20px 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 382줄
~~~~css
 382 |   border-radius: 18px;
~~~~
- 설명: `.status-card`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 383줄
~~~~css
 383 |   background: var(--surface);
~~~~
- 설명: `.status-card`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 384줄
~~~~css
 384 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 385줄
~~~~css
 385 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 386줄
~~~~css
 386 | .status-card p {
~~~~
- 설명: `.status-card p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 387줄
~~~~css
 387 |   margin: 0;
~~~~
- 설명: `.status-card p`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 388줄
~~~~css
 388 |   color: var(--muted);
~~~~
- 설명: `.status-card p`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 389줄
~~~~css
 389 |   font-size: 0.82rem;
~~~~
- 설명: `.status-card p`에 `font-size: 0.82rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 390줄
~~~~css
 390 |   font-weight: 700;
~~~~
- 설명: `.status-card p`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 391줄
~~~~css
 391 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 392줄
~~~~css
 392 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 393줄
~~~~css
 393 | .status-card strong {
~~~~
- 설명: `.status-card strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 394줄
~~~~css
 394 |   display: block;
~~~~
- 설명: `.status-card strong`에 `display: block;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 395줄
~~~~css
 395 |   margin-top: 10px;
~~~~
- 설명: `.status-card strong`에 `margin-top: 10px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 396줄
~~~~css
 396 |   font-size: 1.75rem;
~~~~
- 설명: `.status-card strong`에 `font-size: 1.75rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 397줄
~~~~css
 397 |   font-weight: 800;
~~~~
- 설명: `.status-card strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 398줄
~~~~css
 398 |   letter-spacing: -0.05em;
~~~~
- 설명: `.status-card strong`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 399줄
~~~~css
 399 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 400줄
~~~~css
 400 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 401줄
~~~~css
 401 | .shortcut-shell {
~~~~
- 설명: `.shortcut-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 402줄
~~~~css
 402 |   margin-top: 16px;
~~~~
- 설명: `.shortcut-shell`에 `margin-top: 16px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 403줄
~~~~css
 403 |   padding: 22px;
~~~~
- 설명: `.shortcut-shell`에 `padding: 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 404줄
~~~~css
 404 |   border-radius: 26px;
~~~~
- 설명: `.shortcut-shell`에 `border-radius: 26px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 405줄
~~~~css
 405 |   background: #ececee;
~~~~
- 설명: `.shortcut-shell`에 `background: #ececee;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 406줄
~~~~css
 406 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 407줄
~~~~css
 407 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 408줄
~~~~css
 408 | .shortcut-grid {
~~~~
- 설명: `.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 409줄
~~~~css
 409 |   display: grid;
~~~~
- 설명: `.shortcut-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 410줄
~~~~css
 410 |   grid-template-columns: repeat(8, minmax(0, 1fr));
~~~~
- 설명: `.shortcut-grid`에 `grid-template-columns: repeat(8, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 411줄
~~~~css
 411 |   gap: 14px;
~~~~
- 설명: `.shortcut-grid`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 412줄
~~~~css
 412 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 413줄
~~~~css
 413 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 414줄
~~~~css
 414 | .shortcut-tile {
~~~~
- 설명: `.shortcut-tile` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 415줄
~~~~css
 415 |   min-height: 128px;
~~~~
- 설명: `.shortcut-tile`에 `min-height: 128px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 416줄
~~~~css
 416 |   display: grid;
~~~~
- 설명: `.shortcut-tile`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 417줄
~~~~css
 417 |   align-content: center;
~~~~
- 설명: `.shortcut-tile`에 `align-content: center;`를 적용하는 줄이다. `align-content` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 418줄
~~~~css
 418 |   justify-items: center;
~~~~
- 설명: `.shortcut-tile`에 `justify-items: center;`를 적용하는 줄이다. `justify-items` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 419줄
~~~~css
 419 |   gap: 10px;
~~~~
- 설명: `.shortcut-tile`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 420줄
~~~~css
 420 |   padding: 14px 10px;
~~~~
- 설명: `.shortcut-tile`에 `padding: 14px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 421줄
~~~~css
 421 |   border-radius: 18px;
~~~~
- 설명: `.shortcut-tile`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 422줄
~~~~css
 422 |   background: rgba(255, 255, 255, 0.86);
~~~~
- 설명: `.shortcut-tile`에 `background: rgba(255, 255, 255, 0.86);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 423줄
~~~~css
 423 |   text-align: center;
~~~~
- 설명: `.shortcut-tile`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 424줄
~~~~css
 424 |   cursor: pointer;
~~~~
- 설명: `.shortcut-tile`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 425줄
~~~~css
 425 |   transition:
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 426줄
~~~~css
 426 |     transform 0.18s ease,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 427줄
~~~~css
 427 |     background 0.18s ease,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 428줄
~~~~css
 428 |     border-color 0.18s ease;
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 429줄
~~~~css
 429 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 430줄
~~~~css
 430 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 431줄
~~~~css
 431 | .shortcut-tile:hover,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 432줄
~~~~css
 432 | .shortcut-tile.is-active {
~~~~
- 설명: `.shortcut-tile.is-active` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 433줄
~~~~css
 433 |   transform: translateY(-2px);
~~~~
- 설명: `.shortcut-tile.is-active`에 `transform: translateY(-2px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 434줄
~~~~css
 434 |   border-color: rgba(23, 24, 26, 0.18);
~~~~
- 설명: `.shortcut-tile.is-active`에 `border-color: rgba(23, 24, 26, 0.18);`를 적용하는 줄이다. `border-color` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 435줄
~~~~css
 435 |   background: white;
~~~~
- 설명: `.shortcut-tile.is-active`에 `background: white;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 436줄
~~~~css
 436 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 437줄
~~~~css
 437 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 438줄
~~~~css
 438 | .shortcut-tile strong {
~~~~
- 설명: `.shortcut-tile strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 439줄
~~~~css
 439 |   font-size: 0.95rem;
~~~~
- 설명: `.shortcut-tile strong`에 `font-size: 0.95rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 440줄
~~~~css
 440 |   font-weight: 800;
~~~~
- 설명: `.shortcut-tile strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 441줄
~~~~css
 441 |   line-height: 1.35;
~~~~
- 설명: `.shortcut-tile strong`에 `line-height: 1.35;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 442줄
~~~~css
 442 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 443줄
~~~~css
 443 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 444줄
~~~~css
 444 | .shortcut-tile p {
~~~~
- 설명: `.shortcut-tile p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 445줄
~~~~css
 445 |   margin: 0;
~~~~
- 설명: `.shortcut-tile p`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 446줄
~~~~css
 446 |   font-size: 0.82rem;
~~~~
- 설명: `.shortcut-tile p`에 `font-size: 0.82rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 447줄
~~~~css
 447 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 448줄
~~~~css
 448 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 449줄
~~~~css
 449 | .shortcut-icon {
~~~~
- 설명: `.shortcut-icon` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 450줄
~~~~css
 450 |   width: 48px;
~~~~
- 설명: `.shortcut-icon`에 `width: 48px;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 451줄
~~~~css
 451 |   height: 48px;
~~~~
- 설명: `.shortcut-icon`에 `height: 48px;`를 적용하는 줄이다. 높이를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 452줄
~~~~css
 452 |   display: inline-grid;
~~~~
- 설명: `.shortcut-icon`에 `display: inline-grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 453줄
~~~~css
 453 |   place-items: center;
~~~~
- 설명: `.shortcut-icon`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 454줄
~~~~css
 454 |   border-radius: 16px;
~~~~
- 설명: `.shortcut-icon`에 `border-radius: 16px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 455줄
~~~~css
 455 |   font-size: 1rem;
~~~~
- 설명: `.shortcut-icon`에 `font-size: 1rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 456줄
~~~~css
 456 |   font-weight: 800;
~~~~
- 설명: `.shortcut-icon`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 457줄
~~~~css
 457 |   color: var(--text);
~~~~
- 설명: `.shortcut-icon`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 458줄
~~~~css
 458 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 459줄
~~~~css
 459 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 460줄
~~~~css
 460 | .tone-peach {
~~~~
- 설명: `.tone-peach` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 461줄
~~~~css
 461 |   background: #ffe1d9;
~~~~
- 설명: `.tone-peach`에 `background: #ffe1d9;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 462줄
~~~~css
 462 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 463줄
~~~~css
 463 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 464줄
~~~~css
 464 | .tone-yellow {
~~~~
- 설명: `.tone-yellow` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 465줄
~~~~css
 465 |   background: #fff0b8;
~~~~
- 설명: `.tone-yellow`에 `background: #fff0b8;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 466줄
~~~~css
 466 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 467줄
~~~~css
 467 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 468줄
~~~~css
 468 | .tone-blue {
~~~~
- 설명: `.tone-blue` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 469줄
~~~~css
 469 |   background: #dce7ff;
~~~~
- 설명: `.tone-blue`에 `background: #dce7ff;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 470줄
~~~~css
 470 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 471줄
~~~~css
 471 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 472줄
~~~~css
 472 | .tone-pink {
~~~~
- 설명: `.tone-pink` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 473줄
~~~~css
 473 |   background: #ffdbe8;
~~~~
- 설명: `.tone-pink`에 `background: #ffdbe8;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 474줄
~~~~css
 474 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 475줄
~~~~css
 475 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 476줄
~~~~css
 476 | .tone-green {
~~~~
- 설명: `.tone-green` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 477줄
~~~~css
 477 |   background: #d9f2dd;
~~~~
- 설명: `.tone-green`에 `background: #d9f2dd;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 478줄
~~~~css
 478 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 479줄
~~~~css
 479 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 480줄
~~~~css
 480 | .tone-orange {
~~~~
- 설명: `.tone-orange` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 481줄
~~~~css
 481 |   background: #ffe1bf;
~~~~
- 설명: `.tone-orange`에 `background: #ffe1bf;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 482줄
~~~~css
 482 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 483줄
~~~~css
 483 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 484줄
~~~~css
 484 | .tone-purple {
~~~~
- 설명: `.tone-purple` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 485줄
~~~~css
 485 |   background: #e7ddff;
~~~~
- 설명: `.tone-purple`에 `background: #e7ddff;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 486줄
~~~~css
 486 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 487줄
~~~~css
 487 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 488줄
~~~~css
 488 | .tone-dark {
~~~~
- 설명: `.tone-dark` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 489줄
~~~~css
 489 |   background: #dadbdd;
~~~~
- 설명: `.tone-dark`에 `background: #dadbdd;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 490줄
~~~~css
 490 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 491줄
~~~~css
 491 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 492줄
~~~~css
 492 | .section-block {
~~~~
- 설명: `.section-block` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 493줄
~~~~css
 493 |   padding: 34px 0;
~~~~
- 설명: `.section-block`에 `padding: 34px 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 494줄
~~~~css
 494 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 495줄
~~~~css
 495 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 496줄
~~~~css
 496 | .section-head {
~~~~
- 설명: `.section-head` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 497줄
~~~~css
 497 |   display: flex;
~~~~
- 설명: `.section-head`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 498줄
~~~~css
 498 |   align-items: flex-end;
~~~~
- 설명: `.section-head`에 `align-items: flex-end;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 499줄
~~~~css
 499 |   justify-content: space-between;
~~~~
- 설명: `.section-head`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 500줄
~~~~css
 500 |   gap: 20px;
~~~~
- 설명: `.section-head`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 501줄
~~~~css
 501 |   margin-bottom: 18px;
~~~~
- 설명: `.section-head`에 `margin-bottom: 18px;`를 적용하는 줄이다. `margin-bottom` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 502줄
~~~~css
 502 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 503줄
~~~~css
 503 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 504줄
~~~~css
 504 | .section-title {
~~~~
- 설명: `.section-title` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 505줄
~~~~css
 505 |   display: grid;
~~~~
- 설명: `.section-title`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 506줄
~~~~css
 506 |   gap: 6px;
~~~~
- 설명: `.section-title`에 `gap: 6px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 507줄
~~~~css
 507 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 508줄
~~~~css
 508 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 509줄
~~~~css
 509 | .section-title h2 {
~~~~
- 설명: `.section-title h2` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 510줄
~~~~css
 510 |   font-size: clamp(1.9rem, 4vw, 2.6rem);
~~~~
- 설명: `.section-title h2`에 `font-size: clamp(1.9rem, 4vw, 2.6rem);`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 511줄
~~~~css
 511 |   font-weight: 800;
~~~~
- 설명: `.section-title h2`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 512줄
~~~~css
 512 |   letter-spacing: -0.05em;
~~~~
- 설명: `.section-title h2`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 513줄
~~~~css
 513 |   line-height: 1.04;
~~~~
- 설명: `.section-title h2`에 `line-height: 1.04;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 514줄
~~~~css
 514 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 515줄
~~~~css
 515 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 516줄
~~~~css
 516 | .section-title p:last-child {
~~~~
- 설명: `.section-title p:last-child` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 517줄
~~~~css
 517 |   margin: 0;
~~~~
- 설명: `.section-title p:last-child`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 518줄
~~~~css
 518 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 519줄
~~~~css
 519 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 520줄
~~~~css
 520 | .search-panel,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 521줄
~~~~css
 521 | .map-shell,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 522줄
~~~~css
 522 | .utility-note,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 523줄
~~~~css
 523 | .help-box,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 524줄
~~~~css
 524 | .create-panel {
~~~~
- 설명: `.create-panel` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 525줄
~~~~css
 525 |   border-radius: 24px;
~~~~
- 설명: `.create-panel`에 `border-radius: 24px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 526줄
~~~~css
 526 |   background: var(--surface);
~~~~
- 설명: `.create-panel`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 527줄
~~~~css
 527 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 528줄
~~~~css
 528 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 529줄
~~~~css
 529 | /* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */
~~~~
- 설명: CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 530줄
~~~~css
 530 | .search-form,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 531줄
~~~~css
 531 | .create-form {
~~~~
- 설명: `.create-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 532줄
~~~~css
 532 |   display: grid;
~~~~
- 설명: `.create-form`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 533줄
~~~~css
 533 |   gap: 12px;
~~~~
- 설명: `.create-form`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 534줄
~~~~css
 534 |   padding: 20px;
~~~~
- 설명: `.create-form`에 `padding: 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 535줄
~~~~css
 535 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 536줄
~~~~css
 536 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 537줄
~~~~css
 537 | .search-form {
~~~~
- 설명: `.search-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 538줄
~~~~css
 538 |   grid-template-columns: repeat(5, minmax(0, 1fr)) auto;
~~~~
- 설명: `.search-form`에 `grid-template-columns: repeat(5, minmax(0, 1fr)) auto;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 539줄
~~~~css
 539 |   align-items: end;
~~~~
- 설명: `.search-form`에 `align-items: end;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 540줄
~~~~css
 540 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 541줄
~~~~css
 541 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 542줄
~~~~css
 542 | .create-shell {
~~~~
- 설명: `.create-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 543줄
~~~~css
 543 |   display: grid;
~~~~
- 설명: `.create-shell`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 544줄
~~~~css
 544 |   grid-template-columns: 0.9fr 1.1fr;
~~~~
- 설명: `.create-shell`에 `grid-template-columns: 0.9fr 1.1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 545줄
~~~~css
 545 |   gap: 20px;
~~~~
- 설명: `.create-shell`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 546줄
~~~~css
 546 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 547줄
~~~~css
 547 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 548줄
~~~~css
 548 | .create-copy {
~~~~
- 설명: `.create-copy` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 549줄
~~~~css
 549 |   display: grid;
~~~~
- 설명: `.create-copy`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 550줄
~~~~css
 550 |   gap: 18px;
~~~~
- 설명: `.create-copy`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 551줄
~~~~css
 551 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 552줄
~~~~css
 552 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 553줄
~~~~css
 553 | .create-panel {
~~~~
- 설명: `.create-panel` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 554줄
~~~~css
 554 |   grid-template-columns: repeat(2, minmax(0, 1fr));
~~~~
- 설명: `.create-panel`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 555줄
~~~~css
 555 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 556줄
~~~~css
 556 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 557줄
~~~~css
 557 | .search-form label,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 558줄
~~~~css
 558 | .create-form label {
~~~~
- 설명: `.create-form label` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 559줄
~~~~css
 559 |   display: grid;
~~~~
- 설명: `.create-form label`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 560줄
~~~~css
 560 |   gap: 8px;
~~~~
- 설명: `.create-form label`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 561줄
~~~~css
 561 |   font-size: 0.92rem;
~~~~
- 설명: `.create-form label`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 562줄
~~~~css
 562 |   font-weight: 700;
~~~~
- 설명: `.create-form label`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 563줄
~~~~css
 563 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 564줄
~~~~css
 564 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 565줄
~~~~css
 565 | input,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 566줄
~~~~css
 566 | select,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 567줄
~~~~css
 567 | textarea {
~~~~
- 설명: `textarea` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 568줄
~~~~css
 568 |   width: 100%;
~~~~
- 설명: `textarea`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 569줄
~~~~css
 569 |   border: 1px solid var(--line-strong);
~~~~
- 설명: `textarea`에 `border: 1px solid var(--line-strong);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 570줄
~~~~css
 570 |   border-radius: 14px;
~~~~
- 설명: `textarea`에 `border-radius: 14px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 571줄
~~~~css
 571 |   padding: 14px 14px;
~~~~
- 설명: `textarea`에 `padding: 14px 14px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 572줄
~~~~css
 572 |   background: var(--surface-muted);
~~~~
- 설명: `textarea`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 573줄
~~~~css
 573 |   color: var(--text);
~~~~
- 설명: `textarea`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 574줄
~~~~css
 574 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 575줄
~~~~css
 575 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 576줄
~~~~css
 576 | input::placeholder,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 577줄
~~~~css
 577 | textarea::placeholder {
~~~~
- 설명: `textarea::placeholder` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 578줄
~~~~css
 578 |   color: rgba(23, 24, 26, 0.4);
~~~~
- 설명: `textarea::placeholder`에 `color: rgba(23, 24, 26, 0.4);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 579줄
~~~~css
 579 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 580줄
~~~~css
 580 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 581줄
~~~~css
 581 | .full-span,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 582줄
~~~~css
 582 | .form-actions {
~~~~
- 설명: `.form-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 583줄
~~~~css
 583 |   grid-column: 1 / -1;
~~~~
- 설명: `.form-actions`에 `grid-column: 1 / -1;`를 적용하는 줄이다. 그리드에서 차지할 열 범위를 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 584줄
~~~~css
 584 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 585줄
~~~~css
 585 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 586줄
~~~~css
 586 | .button {
~~~~
- 설명: `.button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 587줄
~~~~css
 587 |   display: inline-flex;
~~~~
- 설명: `.button`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 588줄
~~~~css
 588 |   align-items: center;
~~~~
- 설명: `.button`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 589줄
~~~~css
 589 |   justify-content: center;
~~~~
- 설명: `.button`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 590줄
~~~~css
 590 |   min-height: 44px;
~~~~
- 설명: `.button`에 `min-height: 44px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 591줄
~~~~css
 591 |   padding: 10px 18px;
~~~~
- 설명: `.button`에 `padding: 10px 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 592줄
~~~~css
 592 |   border: 1px solid transparent;
~~~~
- 설명: `.button`에 `border: 1px solid transparent;`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 593줄
~~~~css
 593 |   border-radius: 14px;
~~~~
- 설명: `.button`에 `border-radius: 14px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 594줄
~~~~css
 594 |   cursor: pointer;
~~~~
- 설명: `.button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 595줄
~~~~css
 595 |   font-weight: 700;
~~~~
- 설명: `.button`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 596줄
~~~~css
 596 |   transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;
~~~~
- 설명: `.button`에 `transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;`를 적용하는 줄이다. 상태 변화가 부드럽게 보이도록 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 597줄
~~~~css
 597 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 598줄
~~~~css
 598 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 599줄
~~~~css
 599 | .button:hover {
~~~~
- 설명: `.button:hover` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 600줄
~~~~css
 600 |   transform: translateY(-1px);
~~~~
- 설명: `.button:hover`에 `transform: translateY(-1px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 601줄
~~~~css
 601 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 602줄
~~~~css
 602 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 603줄
~~~~css
 603 | .button:disabled {
~~~~
- 설명: `.button:disabled` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 604줄
~~~~css
 604 |   cursor: not-allowed;
~~~~
- 설명: `.button:disabled`에 `cursor: not-allowed;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 605줄
~~~~css
 605 |   opacity: 0.5;
~~~~
- 설명: `.button:disabled`에 `opacity: 0.5;`를 적용하는 줄이다. 투명도를 조절한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 606줄
~~~~css
 606 |   transform: none;
~~~~
- 설명: `.button:disabled`에 `transform: none;`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 607줄
~~~~css
 607 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 608줄
~~~~css
 608 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 609줄
~~~~css
 609 | .button.primary {
~~~~
- 설명: `.button.primary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 610줄
~~~~css
 610 |   background: var(--accent);
~~~~
- 설명: `.button.primary`에 `background: var(--accent);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 611줄
~~~~css
 611 |   color: white;
~~~~
- 설명: `.button.primary`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 612줄
~~~~css
 612 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 613줄
~~~~css
 613 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 614줄
~~~~css
 614 | .button.secondary {
~~~~
- 설명: `.button.secondary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 615줄
~~~~css
 615 |   border-color: var(--line-strong);
~~~~
- 설명: `.button.secondary`에 `border-color: var(--line-strong);`를 적용하는 줄이다. `border-color` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 616줄
~~~~css
 616 |   background: var(--surface);
~~~~
- 설명: `.button.secondary`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 617줄
~~~~css
 617 |   color: var(--text);
~~~~
- 설명: `.button.secondary`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 618줄
~~~~css
 618 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 619줄
~~~~css
 619 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 620줄
~~~~css
 620 | .button.ghost {
~~~~
- 설명: `.button.ghost` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 621줄
~~~~css
 621 |   border-color: var(--line-strong);
~~~~
- 설명: `.button.ghost`에 `border-color: var(--line-strong);`를 적용하는 줄이다. `border-color` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 622줄
~~~~css
 622 |   background: transparent;
~~~~
- 설명: `.button.ghost`에 `background: transparent;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 623줄
~~~~css
 623 |   color: var(--text);
~~~~
- 설명: `.button.ghost`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 624줄
~~~~css
 624 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 625줄
~~~~css
 625 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 626줄
~~~~css
 626 | .button.danger {
~~~~
- 설명: `.button.danger` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 627줄
~~~~css
 627 |   background: var(--danger);
~~~~
- 설명: `.button.danger`에 `background: var(--danger);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 628줄
~~~~css
 628 |   color: white;
~~~~
- 설명: `.button.danger`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 629줄
~~~~css
 629 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 630줄
~~~~css
 630 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 631줄
~~~~css
 631 | .form-actions {
~~~~
- 설명: `.form-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 632줄
~~~~css
 632 |   display: flex;
~~~~
- 설명: `.form-actions`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 633줄
~~~~css
 633 |   gap: 10px;
~~~~
- 설명: `.form-actions`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 634줄
~~~~css
 634 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 635줄
~~~~css
 635 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 636줄
~~~~css
 636 | .result-summary {
~~~~
- 설명: `.result-summary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 637줄
~~~~css
 637 |   margin: 14px 4px 0;
~~~~
- 설명: `.result-summary`에 `margin: 14px 4px 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 638줄
~~~~css
 638 |   color: var(--muted);
~~~~
- 설명: `.result-summary`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 639줄
~~~~css
 639 |   font-size: 0.92rem;
~~~~
- 설명: `.result-summary`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 640줄
~~~~css
 640 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 641줄
~~~~css
 641 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 642줄
~~~~css
 642 | /* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */
~~~~
- 설명: CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 643줄
~~~~css
 643 | .meeting-list {
~~~~
- 설명: `.meeting-list` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 644줄
~~~~css
 644 |   display: grid;
~~~~
- 설명: `.meeting-list`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 645줄
~~~~css
 645 |   grid-template-columns: repeat(4, minmax(0, 1fr));
~~~~
- 설명: `.meeting-list`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 646줄
~~~~css
 646 |   gap: 24px 20px;
~~~~
- 설명: `.meeting-list`에 `gap: 24px 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 647줄
~~~~css
 647 |   margin-top: 18px;
~~~~
- 설명: `.meeting-list`에 `margin-top: 18px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 648줄
~~~~css
 648 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 649줄
~~~~css
 649 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 650줄
~~~~css
 650 | .meeting-card {
~~~~
- 설명: `.meeting-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 651줄
~~~~css
 651 |   display: grid;
~~~~
- 설명: `.meeting-card`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 652줄
~~~~css
 652 |   gap: 12px;
~~~~
- 설명: `.meeting-card`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 653줄
~~~~css
 653 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 654줄
~~~~css
 654 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 655줄
~~~~css
 655 | .card-poster,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 656줄
~~~~css
 656 | .mine-list .card-poster,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 657줄
~~~~css
 657 | .manage-list .card-poster {
~~~~
- 설명: `.manage-list .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 658줄
~~~~css
 658 |   position: relative;
~~~~
- 설명: `.manage-list .card-poster`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 659줄
~~~~css
 659 |   min-height: 176px;
~~~~
- 설명: `.manage-list .card-poster`에 `min-height: 176px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 660줄
~~~~css
 660 |   padding: 14px;
~~~~
- 설명: `.manage-list .card-poster`에 `padding: 14px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 661줄
~~~~css
 661 |   border-radius: 18px;
~~~~
- 설명: `.manage-list .card-poster`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 662줄
~~~~css
 662 |   overflow: hidden;
~~~~
- 설명: `.manage-list .card-poster`에 `overflow: hidden;`를 적용하는 줄이다. 넘치는 내용 처리 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 663줄
~~~~css
 663 |   box-shadow: var(--shadow);
~~~~
- 설명: `.manage-list .card-poster`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 664줄
~~~~css
 664 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 665줄
~~~~css
 665 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 666줄
~~~~css
 666 | .meeting-list .meeting-card:nth-child(4n + 1) .card-poster {
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 1) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 667줄
~~~~css
 667 |   background: linear-gradient(145deg, #121315, #272a2d);
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 1) .card-poster`에 `background: linear-gradient(145deg, #121315, #272a2d);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 668줄
~~~~css
 668 |   color: white;
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 1) .card-poster`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 669줄
~~~~css
 669 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 670줄
~~~~css
 670 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 671줄
~~~~css
 671 | .meeting-list .meeting-card:nth-child(4n + 2) .card-poster {
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 2) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 672줄
~~~~css
 672 |   background: linear-gradient(145deg, #312019, #5e3a2d);
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 2) .card-poster`에 `background: linear-gradient(145deg, #312019, #5e3a2d);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 673줄
~~~~css
 673 |   color: white;
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 2) .card-poster`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 674줄
~~~~css
 674 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 675줄
~~~~css
 675 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 676줄
~~~~css
 676 | .meeting-list .meeting-card:nth-child(4n + 3) .card-poster {
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 3) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 677줄
~~~~css
 677 |   background: linear-gradient(145deg, #fff1dc, #ffd6d6);
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 3) .card-poster`에 `background: linear-gradient(145deg, #fff1dc, #ffd6d6);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 678줄
~~~~css
 678 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 679줄
~~~~css
 679 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 680줄
~~~~css
 680 | .meeting-list .meeting-card:nth-child(4n + 4) .card-poster {
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 4) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 681줄
~~~~css
 681 |   background: linear-gradient(145deg, #f8d6d8, #a76b74);
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 4) .card-poster`에 `background: linear-gradient(145deg, #f8d6d8, #a76b74);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 682줄
~~~~css
 682 |   color: white;
~~~~
- 설명: `.meeting-list .meeting-card:nth-child(4n + 4) .card-poster`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 683줄
~~~~css
 683 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 684줄
~~~~css
 684 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 685줄
~~~~css
 685 | .mine-list .meeting-card .card-poster {
~~~~
- 설명: `.mine-list .meeting-card .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 686줄
~~~~css
 686 |   background: linear-gradient(145deg, #dfe8ff, #b7cdfd);
~~~~
- 설명: `.mine-list .meeting-card .card-poster`에 `background: linear-gradient(145deg, #dfe8ff, #b7cdfd);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 687줄
~~~~css
 687 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 688줄
~~~~css
 688 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 689줄
~~~~css
 689 | .manage-list .meeting-card .card-poster {
~~~~
- 설명: `.manage-list .meeting-card .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 690줄
~~~~css
 690 |   background: linear-gradient(145deg, #ffe9da, #f9c7aa);
~~~~
- 설명: `.manage-list .meeting-card .card-poster`에 `background: linear-gradient(145deg, #ffe9da, #f9c7aa);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 691줄
~~~~css
 691 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 692줄
~~~~css
 692 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 693줄
~~~~css
 693 | .card-poster::before,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 694줄
~~~~css
 694 | .card-poster::after {
~~~~
- 설명: `.card-poster::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 695줄
~~~~css
 695 |   content: "";
~~~~
- 설명: `.card-poster::after`에 `content: "";`를 적용하는 줄이다. 가상 요소에 들어갈 내용을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 696줄
~~~~css
 696 |   position: absolute;
~~~~
- 설명: `.card-poster::after`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 697줄
~~~~css
 697 |   border-radius: 999px;
~~~~
- 설명: `.card-poster::after`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 698줄
~~~~css
 698 |   pointer-events: none;
~~~~
- 설명: `.card-poster::after`에 `pointer-events: none;`를 적용하는 줄이다. `pointer-events` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 699줄
~~~~css
 699 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 700줄
~~~~css
 700 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 701줄
~~~~css
 701 | .card-poster::before {
~~~~
- 설명: `.card-poster::before` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 702줄
~~~~css
 702 |   width: 170px;
~~~~
- 설명: `.card-poster::before`에 `width: 170px;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 703줄
~~~~css
 703 |   height: 170px;
~~~~
- 설명: `.card-poster::before`에 `height: 170px;`를 적용하는 줄이다. 높이를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 704줄
~~~~css
 704 |   right: -38px;
~~~~
- 설명: `.card-poster::before`에 `right: -38px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 705줄
~~~~css
 705 |   bottom: -54px;
~~~~
- 설명: `.card-poster::before`에 `bottom: -54px;`를 적용하는 줄이다. 아래쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 706줄
~~~~css
 706 |   background: rgba(255, 255, 255, 0.14);
~~~~
- 설명: `.card-poster::before`에 `background: rgba(255, 255, 255, 0.14);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 707줄
~~~~css
 707 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 708줄
~~~~css
 708 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 709줄
~~~~css
 709 | .card-poster::after {
~~~~
- 설명: `.card-poster::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 710줄
~~~~css
 710 |   width: 90px;
~~~~
- 설명: `.card-poster::after`에 `width: 90px;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 711줄
~~~~css
 711 |   height: 90px;
~~~~
- 설명: `.card-poster::after`에 `height: 90px;`를 적용하는 줄이다. 높이를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 712줄
~~~~css
 712 |   right: 18px;
~~~~
- 설명: `.card-poster::after`에 `right: 18px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 713줄
~~~~css
 713 |   top: 16px;
~~~~
- 설명: `.card-poster::after`에 `top: 16px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 714줄
~~~~css
 714 |   background: rgba(255, 255, 255, 0.1);
~~~~
- 설명: `.card-poster::after`에 `background: rgba(255, 255, 255, 0.1);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 715줄
~~~~css
 715 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 716줄
~~~~css
 716 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 717줄
~~~~css
 717 | .card-pills {
~~~~
- 설명: `.card-pills` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 718줄
~~~~css
 718 |   position: relative;
~~~~
- 설명: `.card-pills`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 719줄
~~~~css
 719 |   z-index: 1;
~~~~
- 설명: `.card-pills`에 `z-index: 1;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 720줄
~~~~css
 720 |   display: flex;
~~~~
- 설명: `.card-pills`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 721줄
~~~~css
 721 |   flex-wrap: wrap;
~~~~
- 설명: `.card-pills`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 722줄
~~~~css
 722 |   align-items: center;
~~~~
- 설명: `.card-pills`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 723줄
~~~~css
 723 |   gap: 8px;
~~~~
- 설명: `.card-pills`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 724줄
~~~~css
 724 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 725줄
~~~~css
 725 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 726줄
~~~~css
 726 | .card-pill {
~~~~
- 설명: `.card-pill` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 727줄
~~~~css
 727 |   display: inline-flex;
~~~~
- 설명: `.card-pill`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 728줄
~~~~css
 728 |   align-items: center;
~~~~
- 설명: `.card-pill`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 729줄
~~~~css
 729 |   justify-content: center;
~~~~
- 설명: `.card-pill`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 730줄
~~~~css
 730 |   min-height: 28px;
~~~~
- 설명: `.card-pill`에 `min-height: 28px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 731줄
~~~~css
 731 |   padding: 4px 10px;
~~~~
- 설명: `.card-pill`에 `padding: 4px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 732줄
~~~~css
 732 |   border-radius: 999px;
~~~~
- 설명: `.card-pill`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 733줄
~~~~css
 733 |   border: 1px solid rgba(255, 255, 255, 0.26);
~~~~
- 설명: `.card-pill`에 `border: 1px solid rgba(255, 255, 255, 0.26);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 734줄
~~~~css
 734 |   background: rgba(255, 255, 255, 0.92);
~~~~
- 설명: `.card-pill`에 `background: rgba(255, 255, 255, 0.92);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 735줄
~~~~css
 735 |   color: var(--text);
~~~~
- 설명: `.card-pill`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 736줄
~~~~css
 736 |   font-size: 0.74rem;
~~~~
- 설명: `.card-pill`에 `font-size: 0.74rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 737줄
~~~~css
 737 |   font-weight: 800;
~~~~
- 설명: `.card-pill`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 738줄
~~~~css
 738 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 739줄
~~~~css
 739 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 740줄
~~~~css
 740 | .card-pill.primary {
~~~~
- 설명: `.card-pill.primary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 741줄
~~~~css
 741 |   border-color: transparent;
~~~~
- 설명: `.card-pill.primary`에 `border-color: transparent;`를 적용하는 줄이다. `border-color` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 742줄
~~~~css
 742 |   background: #ff6542;
~~~~
- 설명: `.card-pill.primary`에 `background: #ff6542;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 743줄
~~~~css
 743 |   color: white;
~~~~
- 설명: `.card-pill.primary`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 744줄
~~~~css
 744 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 745줄
~~~~css
 745 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 746줄
~~~~css
 746 | .card-code {
~~~~
- 설명: `.card-code` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 747줄
~~~~css
 747 |   position: absolute;
~~~~
- 설명: `.card-code`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 748줄
~~~~css
 748 |   right: 14px;
~~~~
- 설명: `.card-code`에 `right: 14px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 749줄
~~~~css
 749 |   bottom: 14px;
~~~~
- 설명: `.card-code`에 `bottom: 14px;`를 적용하는 줄이다. 아래쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 750줄
~~~~css
 750 |   z-index: 1;
~~~~
- 설명: `.card-code`에 `z-index: 1;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 751줄
~~~~css
 751 |   font-size: 0.78rem;
~~~~
- 설명: `.card-code`에 `font-size: 0.78rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 752줄
~~~~css
 752 |   font-weight: 800;
~~~~
- 설명: `.card-code`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 753줄
~~~~css
 753 |   letter-spacing: 0.02em;
~~~~
- 설명: `.card-code`에 `letter-spacing: 0.02em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 754줄
~~~~css
 754 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 755줄
~~~~css
 755 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 756줄
~~~~css
 756 | .card-copy {
~~~~
- 설명: `.card-copy` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 757줄
~~~~css
 757 |   display: grid;
~~~~
- 설명: `.card-copy`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 758줄
~~~~css
 758 |   gap: 10px;
~~~~
- 설명: `.card-copy`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 759줄
~~~~css
 759 |   padding: 0 2px 2px;
~~~~
- 설명: `.card-copy`에 `padding: 0 2px 2px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 760줄
~~~~css
 760 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 761줄
~~~~css
 761 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 762줄
~~~~css
 762 | .card-location,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 763줄
~~~~css
 763 | .card-schedule {
~~~~
- 설명: `.card-schedule` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 764줄
~~~~css
 764 |   margin: 0;
~~~~
- 설명: `.card-schedule`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 765줄
~~~~css
 765 |   font-size: 0.85rem;
~~~~
- 설명: `.card-schedule`에 `font-size: 0.85rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 766줄
~~~~css
 766 |   color: var(--muted);
~~~~
- 설명: `.card-schedule`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 767줄
~~~~css
 767 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 768줄
~~~~css
 768 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 769줄
~~~~css
 769 | .meeting-card h3 {
~~~~
- 설명: `.meeting-card h3` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 770줄
~~~~css
 770 |   margin: 0;
~~~~
- 설명: `.meeting-card h3`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 771줄
~~~~css
 771 |   font-size: 1.45rem;
~~~~
- 설명: `.meeting-card h3`에 `font-size: 1.45rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 772줄
~~~~css
 772 |   font-weight: 800;
~~~~
- 설명: `.meeting-card h3`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 773줄
~~~~css
 773 |   letter-spacing: -0.05em;
~~~~
- 설명: `.meeting-card h3`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 774줄
~~~~css
 774 |   line-height: 1.2;
~~~~
- 설명: `.meeting-card h3`에 `line-height: 1.2;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 775줄
~~~~css
 775 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 776줄
~~~~css
 776 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 777줄
~~~~css
 777 | .description-preview {
~~~~
- 설명: `.description-preview` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 778줄
~~~~css
 778 |   min-height: 46px;
~~~~
- 설명: `.description-preview`에 `min-height: 46px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 779줄
~~~~css
 779 |   margin: 0;
~~~~
- 설명: `.description-preview`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 780줄
~~~~css
 780 |   font-size: 0.92rem;
~~~~
- 설명: `.description-preview`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 781줄
~~~~css
 781 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 782줄
~~~~css
 782 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 783줄
~~~~css
 783 | .meta-row,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 784줄
~~~~css
 784 | .dialog-meta {
~~~~
- 설명: `.dialog-meta` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 785줄
~~~~css
 785 |   display: flex;
~~~~
- 설명: `.dialog-meta`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 786줄
~~~~css
 786 |   flex-wrap: wrap;
~~~~
- 설명: `.dialog-meta`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 787줄
~~~~css
 787 |   gap: 8px;
~~~~
- 설명: `.dialog-meta`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 788줄
~~~~css
 788 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 789줄
~~~~css
 789 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 790줄
~~~~css
 790 | .meta-chip {
~~~~
- 설명: `.meta-chip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 791줄
~~~~css
 791 |   display: inline-flex;
~~~~
- 설명: `.meta-chip`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 792줄
~~~~css
 792 |   align-items: center;
~~~~
- 설명: `.meta-chip`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 793줄
~~~~css
 793 |   justify-content: center;
~~~~
- 설명: `.meta-chip`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 794줄
~~~~css
 794 |   min-height: 30px;
~~~~
- 설명: `.meta-chip`에 `min-height: 30px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 795줄
~~~~css
 795 |   padding: 5px 10px;
~~~~
- 설명: `.meta-chip`에 `padding: 5px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 796줄
~~~~css
 796 |   border-radius: 999px;
~~~~
- 설명: `.meta-chip`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 797줄
~~~~css
 797 |   background: var(--surface-muted);
~~~~
- 설명: `.meta-chip`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 798줄
~~~~css
 798 |   border: 1px solid var(--line);
~~~~
- 설명: `.meta-chip`에 `border: 1px solid var(--line);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 799줄
~~~~css
 799 |   font-size: 0.76rem;
~~~~
- 설명: `.meta-chip`에 `font-size: 0.76rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 800줄
~~~~css
 800 |   font-weight: 700;
~~~~
- 설명: `.meta-chip`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 801줄
~~~~css
 801 |   color: var(--text);
~~~~
- 설명: `.meta-chip`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 802줄
~~~~css
 802 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 803줄
~~~~css
 803 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 804줄
~~~~css
 804 | .card-footer {
~~~~
- 설명: `.card-footer` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 805줄
~~~~css
 805 |   display: grid;
~~~~
- 설명: `.card-footer`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 806줄
~~~~css
 806 |   gap: 12px;
~~~~
- 설명: `.card-footer`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 807줄
~~~~css
 807 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 808줄
~~~~css
 808 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 809줄
~~~~css
 809 | .card-actions,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 810줄
~~~~css
 810 | .dialog-owner-actions {
~~~~
- 설명: `.dialog-owner-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 811줄
~~~~css
 811 |   display: flex;
~~~~
- 설명: `.dialog-owner-actions`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 812줄
~~~~css
 812 |   flex-wrap: wrap;
~~~~
- 설명: `.dialog-owner-actions`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 813줄
~~~~css
 813 |   gap: 8px;
~~~~
- 설명: `.dialog-owner-actions`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 814줄
~~~~css
 814 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 815줄
~~~~css
 815 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 816줄
~~~~css
 816 | .card-actions .button,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 817줄
~~~~css
 817 | .dialog-owner-actions .button {
~~~~
- 설명: `.dialog-owner-actions .button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 818줄
~~~~css
 818 |   min-height: 38px;
~~~~
- 설명: `.dialog-owner-actions .button`에 `min-height: 38px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 819줄
~~~~css
 819 |   padding: 8px 12px;
~~~~
- 설명: `.dialog-owner-actions .button`에 `padding: 8px 12px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 820줄
~~~~css
 820 |   font-size: 0.86rem;
~~~~
- 설명: `.dialog-owner-actions .button`에 `font-size: 0.86rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 821줄
~~~~css
 821 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 822줄
~~~~css
 822 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 823줄
~~~~css
 823 | .utility-grid {
~~~~
- 설명: `.utility-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 824줄
~~~~css
 824 |   display: grid;
~~~~
- 설명: `.utility-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 825줄
~~~~css
 825 |   grid-template-columns: 1.2fr 0.8fr;
~~~~
- 설명: `.utility-grid`에 `grid-template-columns: 1.2fr 0.8fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 826줄
~~~~css
 826 |   gap: 20px;
~~~~
- 설명: `.utility-grid`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 827줄
~~~~css
 827 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 828줄
~~~~css
 828 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 829줄
~~~~css
 829 | .map-shell {
~~~~
- 설명: `.map-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 830줄
~~~~css
 830 |   display: grid;
~~~~
- 설명: `.map-shell`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 831줄
~~~~css
 831 |   grid-template-columns: 0.92fr 1.08fr;
~~~~
- 설명: `.map-shell`에 `grid-template-columns: 0.92fr 1.08fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 832줄
~~~~css
 832 |   gap: 18px;
~~~~
- 설명: `.map-shell`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 833줄
~~~~css
 833 |   padding: 24px;
~~~~
- 설명: `.map-shell`에 `padding: 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 834줄
~~~~css
 834 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 835줄
~~~~css
 835 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 836줄
~~~~css
 836 | .map-copy h2,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 837줄
~~~~css
 837 | .help-box h3,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 838줄
~~~~css
 838 | .utility-note h3,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 839줄
~~~~css
 839 | .dialog-description h3 {
~~~~
- 설명: `.dialog-description h3` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 840줄
~~~~css
 840 |   font-size: 1.65rem;
~~~~
- 설명: `.dialog-description h3`에 `font-size: 1.65rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 841줄
~~~~css
 841 |   font-weight: 800;
~~~~
- 설명: `.dialog-description h3`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 842줄
~~~~css
 842 |   letter-spacing: -0.04em;
~~~~
- 설명: `.dialog-description h3`에 `letter-spacing: -0.04em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 843줄
~~~~css
 843 |   line-height: 1.1;
~~~~
- 설명: `.dialog-description h3`에 `line-height: 1.1;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 844줄
~~~~css
 844 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 845줄
~~~~css
 845 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 846줄
~~~~css
 846 | .mini-feature-grid {
~~~~
- 설명: `.mini-feature-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 847줄
~~~~css
 847 |   display: grid;
~~~~
- 설명: `.mini-feature-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 848줄
~~~~css
 848 |   grid-template-columns: repeat(2, minmax(0, 1fr));
~~~~
- 설명: `.mini-feature-grid`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 849줄
~~~~css
 849 |   gap: 12px;
~~~~
- 설명: `.mini-feature-grid`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 850줄
~~~~css
 850 |   margin-top: 18px;
~~~~
- 설명: `.mini-feature-grid`에 `margin-top: 18px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 851줄
~~~~css
 851 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 852줄
~~~~css
 852 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 853줄
~~~~css
 853 | .mini-feature-grid article {
~~~~
- 설명: `.mini-feature-grid article` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 854줄
~~~~css
 854 |   padding: 18px;
~~~~
- 설명: `.mini-feature-grid article`에 `padding: 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 855줄
~~~~css
 855 |   border-radius: 18px;
~~~~
- 설명: `.mini-feature-grid article`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 856줄
~~~~css
 856 |   background: var(--surface-muted);
~~~~
- 설명: `.mini-feature-grid article`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 857줄
~~~~css
 857 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 858줄
~~~~css
 858 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 859줄
~~~~css
 859 | .mini-feature-grid strong {
~~~~
- 설명: `.mini-feature-grid strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 860줄
~~~~css
 860 |   display: block;
~~~~
- 설명: `.mini-feature-grid strong`에 `display: block;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 861줄
~~~~css
 861 |   margin-bottom: 8px;
~~~~
- 설명: `.mini-feature-grid strong`에 `margin-bottom: 8px;`를 적용하는 줄이다. `margin-bottom` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 862줄
~~~~css
 862 |   font-size: 1rem;
~~~~
- 설명: `.mini-feature-grid strong`에 `font-size: 1rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 863줄
~~~~css
 863 |   font-weight: 800;
~~~~
- 설명: `.mini-feature-grid strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 864줄
~~~~css
 864 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 865줄
~~~~css
 865 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 866줄
~~~~css
 866 | .mini-feature-grid p {
~~~~
- 설명: `.mini-feature-grid p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 867줄
~~~~css
 867 |   margin: 0;
~~~~
- 설명: `.mini-feature-grid p`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 868줄
~~~~css
 868 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 869줄
~~~~css
 869 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 870줄
~~~~css
 870 | .map-placeholder {
~~~~
- 설명: `.map-placeholder` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 871줄
~~~~css
 871 |   min-height: 280px;
~~~~
- 설명: `.map-placeholder`에 `min-height: 280px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 872줄
~~~~css
 872 |   display: grid;
~~~~
- 설명: `.map-placeholder`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 873줄
~~~~css
 873 |   place-items: center;
~~~~
- 설명: `.map-placeholder`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 874줄
~~~~css
 874 |   border-radius: 22px;
~~~~
- 설명: `.map-placeholder`에 `border-radius: 22px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 875줄
~~~~css
 875 |   background:
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 876줄
~~~~css
 876 |     radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 877줄
~~~~css
 877 |     linear-gradient(145deg, #f7efe0, #ead8b7);
~~~~
- 설명: 선택자나 속성 표현의 일부 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 878줄
~~~~css
 878 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
~~~~
- 설명: `.map-placeholder`에 `box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 879줄
~~~~css
 879 |   text-align: center;
~~~~
- 설명: `.map-placeholder`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 880줄
~~~~css
 880 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 881줄
~~~~css
 881 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 882줄
~~~~css
 882 | .utility-note,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 883줄
~~~~css
 883 | .help-box {
~~~~
- 설명: `.help-box` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 884줄
~~~~css
 884 |   padding: 24px;
~~~~
- 설명: `.help-box`에 `padding: 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 885줄
~~~~css
 885 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 886줄
~~~~css
 886 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 887줄
~~~~css
 887 | .utility-note ul,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 888줄
~~~~css
 888 | .help-box ul {
~~~~
- 설명: `.help-box ul` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 889줄
~~~~css
 889 |   margin: 0;
~~~~
- 설명: `.help-box ul`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 890줄
~~~~css
 890 |   padding-left: 18px;
~~~~
- 설명: `.help-box ul`에 `padding-left: 18px;`를 적용하는 줄이다. `padding-left` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 891줄
~~~~css
 891 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 892줄
~~~~css
 892 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 893줄
~~~~css
 893 | .empty-state {
~~~~
- 설명: `.empty-state` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 894줄
~~~~css
 894 |   grid-column: 1 / -1;
~~~~
- 설명: `.empty-state`에 `grid-column: 1 / -1;`를 적용하는 줄이다. 그리드에서 차지할 열 범위를 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 895줄
~~~~css
 895 |   padding: 28px 22px;
~~~~
- 설명: `.empty-state`에 `padding: 28px 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 896줄
~~~~css
 896 |   border-radius: 20px;
~~~~
- 설명: `.empty-state`에 `border-radius: 20px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 897줄
~~~~css
 897 |   border: 1px dashed var(--line-strong);
~~~~
- 설명: `.empty-state`에 `border: 1px dashed var(--line-strong);`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 898줄
~~~~css
 898 |   background: var(--surface);
~~~~
- 설명: `.empty-state`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 899줄
~~~~css
 899 |   color: var(--muted);
~~~~
- 설명: `.empty-state`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 900줄
~~~~css
 900 |   text-align: center;
~~~~
- 설명: `.empty-state`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 901줄
~~~~css
 901 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 902줄
~~~~css
 902 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 903줄
~~~~css
 903 | .detail-dialog {
~~~~
- 설명: `.detail-dialog` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 904줄
~~~~css
 904 |   width: min(720px, calc(100% - 24px));
~~~~
- 설명: `.detail-dialog`에 `width: min(720px, calc(100% - 24px));`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 905줄
~~~~css
 905 |   padding: 0;
~~~~
- 설명: `.detail-dialog`에 `padding: 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 906줄
~~~~css
 906 |   border: 0;
~~~~
- 설명: `.detail-dialog`에 `border: 0;`를 적용하는 줄이다. 테두리를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 907줄
~~~~css
 907 |   border-radius: 24px;
~~~~
- 설명: `.detail-dialog`에 `border-radius: 24px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 908줄
~~~~css
 908 |   background: var(--surface);
~~~~
- 설명: `.detail-dialog`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 909줄
~~~~css
 909 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 910줄
~~~~css
 910 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 911줄
~~~~css
 911 | .detail-dialog::backdrop {
~~~~
- 설명: `.detail-dialog::backdrop` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 912줄
~~~~css
 912 |   background: rgba(17, 17, 17, 0.34);
~~~~
- 설명: `.detail-dialog::backdrop`에 `background: rgba(17, 17, 17, 0.34);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 913줄
~~~~css
 913 |   backdrop-filter: blur(3px);
~~~~
- 설명: `.detail-dialog::backdrop`에 `backdrop-filter: blur(3px);`를 적용하는 줄이다. 뒤 배경에 흐림 같은 효과를 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 914줄
~~~~css
 914 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 915줄
~~~~css
 915 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 916줄
~~~~css
 916 | .dialog-shell {
~~~~
- 설명: `.dialog-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 917줄
~~~~css
 917 |   display: grid;
~~~~
- 설명: `.dialog-shell`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 918줄
~~~~css
 918 |   gap: 18px;
~~~~
- 설명: `.dialog-shell`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 919줄
~~~~css
 919 |   padding: 24px;
~~~~
- 설명: `.dialog-shell`에 `padding: 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 920줄
~~~~css
 920 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 921줄
~~~~css
 921 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 922줄
~~~~css
 922 | .dialog-header {
~~~~
- 설명: `.dialog-header` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 923줄
~~~~css
 923 |   display: flex;
~~~~
- 설명: `.dialog-header`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 924줄
~~~~css
 924 |   align-items: flex-start;
~~~~
- 설명: `.dialog-header`에 `align-items: flex-start;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 925줄
~~~~css
 925 |   justify-content: space-between;
~~~~
- 설명: `.dialog-header`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 926줄
~~~~css
 926 |   gap: 16px;
~~~~
- 설명: `.dialog-header`에 `gap: 16px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 927줄
~~~~css
 927 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 928줄
~~~~css
 928 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 929줄
~~~~css
 929 | .dialog-description {
~~~~
- 설명: `.dialog-description` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 930줄
~~~~css
 930 |   padding: 20px;
~~~~
- 설명: `.dialog-description`에 `padding: 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 931줄
~~~~css
 931 |   border-radius: 20px;
~~~~
- 설명: `.dialog-description`에 `border-radius: 20px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 932줄
~~~~css
 932 |   background: var(--surface-muted);
~~~~
- 설명: `.dialog-description`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 933줄
~~~~css
 933 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 934줄
~~~~css
 934 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 935줄
~~~~css
 935 | .is-hidden {
~~~~
- 설명: `.is-hidden` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 936줄
~~~~css
 936 |   display: none !important;
~~~~
- 설명: `.is-hidden`에 `display: none !important;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 937줄
~~~~css
 937 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 938줄
~~~~css
 938 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 939줄
~~~~css
 939 | .site-footer {
~~~~
- 설명: `.site-footer` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 940줄
~~~~css
 940 |   padding: 28px 0 54px;
~~~~
- 설명: `.site-footer`에 `padding: 28px 0 54px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 941줄
~~~~css
 941 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 942줄
~~~~css
 942 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 943줄
~~~~css
 943 | .footer-row {
~~~~
- 설명: `.footer-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 944줄
~~~~css
 944 |   display: flex;
~~~~
- 설명: `.footer-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 945줄
~~~~css
 945 |   align-items: center;
~~~~
- 설명: `.footer-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 946줄
~~~~css
 946 |   justify-content: space-between;
~~~~
- 설명: `.footer-row`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 947줄
~~~~css
 947 |   gap: 24px;
~~~~
- 설명: `.footer-row`에 `gap: 24px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 948줄
~~~~css
 948 |   padding: 24px 0 0;
~~~~
- 설명: `.footer-row`에 `padding: 24px 0 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 949줄
~~~~css
 949 |   border-top: 1px solid var(--line);
~~~~
- 설명: `.footer-row`에 `border-top: 1px solid var(--line);`를 적용하는 줄이다. `border-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 950줄
~~~~css
 950 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 951줄
~~~~css
 951 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 952줄
~~~~css
 952 | .footer-text {
~~~~
- 설명: `.footer-text` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 953줄
~~~~css
 953 |   max-width: 34rem;
~~~~
- 설명: `.footer-text`에 `max-width: 34rem;`를 적용하는 줄이다. `max-width` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 954줄
~~~~css
 954 |   margin: 8px 0 0;
~~~~
- 설명: `.footer-text`에 `margin: 8px 0 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 955줄
~~~~css
 955 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 956줄
~~~~css
 956 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 957줄
~~~~css
 957 | .footer-links {
~~~~
- 설명: `.footer-links` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 958줄
~~~~css
 958 |   flex-wrap: wrap;
~~~~
- 설명: `.footer-links`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 959줄
~~~~css
 959 |   justify-content: flex-end;
~~~~
- 설명: `.footer-links`에 `justify-content: flex-end;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 960줄
~~~~css
 960 |   gap: 16px;
~~~~
- 설명: `.footer-links`에 `gap: 16px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 961줄
~~~~css
 961 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 962줄
~~~~css
 962 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 963줄
~~~~css
 963 | .footer-links a {
~~~~
- 설명: `.footer-links a` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 964줄
~~~~css
 964 |   color: var(--muted);
~~~~
- 설명: `.footer-links a`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 965줄
~~~~css
 965 |   font-size: 0.92rem;
~~~~
- 설명: `.footer-links a`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 966줄
~~~~css
 966 |   font-weight: 700;
~~~~
- 설명: `.footer-links a`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 967줄
~~~~css
 967 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 968줄
~~~~css
 968 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 969줄
~~~~css
 969 | @media (max-width: 1120px) {
~~~~
- 설명: 반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 970줄
~~~~css
 970 |   .hero-banner,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 971줄
~~~~css
 971 |   .utility-grid,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 972줄
~~~~css
 972 |   .create-shell,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 973줄
~~~~css
 973 |   .map-shell {
~~~~
- 설명: `.map-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 974줄
~~~~css
 974 |     grid-template-columns: 1fr;
~~~~
- 설명: `.map-shell`에 `grid-template-columns: 1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 975줄
~~~~css
 975 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 976줄
~~~~css
 976 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 977줄
~~~~css
 977 |   .shortcut-grid {
~~~~
- 설명: `.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 978줄
~~~~css
 978 |     grid-template-columns: repeat(4, minmax(0, 1fr));
~~~~
- 설명: `.shortcut-grid`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 979줄
~~~~css
 979 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 980줄
~~~~css
 980 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 981줄
~~~~css
 981 |   .status-strip,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 982줄
~~~~css
 982 |   .meeting-list {
~~~~
- 설명: `.meeting-list` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 983줄
~~~~css
 983 |     grid-template-columns: repeat(2, minmax(0, 1fr));
~~~~
- 설명: `.meeting-list`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 984줄
~~~~css
 984 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 985줄
~~~~css
 985 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 986줄
~~~~css
 986 |   .search-form {
~~~~
- 설명: `.search-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 987줄
~~~~css
 987 |     grid-template-columns: repeat(3, minmax(0, 1fr));
~~~~
- 설명: `.search-form`에 `grid-template-columns: repeat(3, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 988줄
~~~~css
 988 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 989줄
~~~~css
 989 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 990줄
~~~~css
 990 |   .hero-orb {
~~~~
- 설명: `.hero-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 991줄
~~~~css
 991 |     position: static;
~~~~
- 설명: `.hero-orb`에 `position: static;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 992줄
~~~~css
 992 |     width: min(100%, 420px);
~~~~
- 설명: `.hero-orb`에 `width: min(100%, 420px);`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 993줄
~~~~css
 993 |     margin-inline: auto;
~~~~
- 설명: `.hero-orb`에 `margin-inline: auto;`를 적용하는 줄이다. `margin-inline` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 994줄
~~~~css
 994 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 995줄
~~~~css
 995 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 996줄
~~~~css
 996 |   .hero-media {
~~~~
- 설명: `.hero-media` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 997줄
~~~~css
 997 |     min-height: auto;
~~~~
- 설명: `.hero-media`에 `min-height: auto;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 998줄
~~~~css
 998 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 999줄
~~~~css
 999 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1000줄
~~~~css
1000 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1001줄
~~~~css
1001 | @media (max-width: 780px) {
~~~~
- 설명: 반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1002줄
~~~~css
1002 |   .nav-row,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1003줄
~~~~css
1003 |   .brand-group,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1004줄
~~~~css
1004 |   .footer-row,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1005줄
~~~~css
1005 |   .section-head,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1006줄
~~~~css
1006 |   .dialog-header,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1007줄
~~~~css
1007 |   .card-actions,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1008줄
~~~~css
1008 |   .dialog-owner-actions,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1009줄
~~~~css
1009 |   .form-actions,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1010줄
~~~~css
1010 |   .hero-actions {
~~~~
- 설명: `.hero-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1011줄
~~~~css
1011 |     flex-direction: column;
~~~~
- 설명: `.hero-actions`에 `flex-direction: column;`를 적용하는 줄이다. `flex-direction` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1012줄
~~~~css
1012 |     align-items: stretch;
~~~~
- 설명: `.hero-actions`에 `align-items: stretch;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1013줄
~~~~css
1013 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1014줄
~~~~css
1014 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1015줄
~~~~css
1015 |   .nav-row,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1016줄
~~~~css
1016 |   .sub-menu {
~~~~
- 설명: `.sub-menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1017줄
~~~~css
1017 |     padding: 14px 0;
~~~~
- 설명: `.sub-menu`에 `padding: 14px 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1018줄
~~~~css
1018 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1019줄
~~~~css
1019 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1020줄
~~~~css
1020 |   .brand-group {
~~~~
- 설명: `.brand-group` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1021줄
~~~~css
1021 |     gap: 14px;
~~~~
- 설명: `.brand-group`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1022줄
~~~~css
1022 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1023줄
~~~~css
1023 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1024줄
~~~~css
1024 |   .header-actions {
~~~~
- 설명: `.header-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1025줄
~~~~css
1025 |     width: 100%;
~~~~
- 설명: `.header-actions`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1026줄
~~~~css
1026 |     justify-content: flex-start;
~~~~
- 설명: `.header-actions`에 `justify-content: flex-start;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1027줄
~~~~css
1027 |     gap: 8px;
~~~~
- 설명: `.header-actions`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1028줄
~~~~css
1028 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1029줄
~~~~css
1029 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1030줄
~~~~css
1030 |   .hero-banner,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1031줄
~~~~css
1031 |   .shortcut-shell,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1032줄
~~~~css
1032 |   .search-form,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1033줄
~~~~css
1033 |   .map-shell,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1034줄
~~~~css
1034 |   .utility-note,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1035줄
~~~~css
1035 |   .help-box,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1036줄
~~~~css
1036 |   .create-form,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1037줄
~~~~css
1037 |   .dialog-shell {
~~~~
- 설명: `.dialog-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1038줄
~~~~css
1038 |     padding: 18px;
~~~~
- 설명: `.dialog-shell`에 `padding: 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1039줄
~~~~css
1039 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1040줄
~~~~css
1040 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1041줄
~~~~css
1041 |   .hero-copy h1 {
~~~~
- 설명: `.hero-copy h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1042줄
~~~~css
1042 |     max-width: none;
~~~~
- 설명: `.hero-copy h1`에 `max-width: none;`를 적용하는 줄이다. `max-width` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1043줄
~~~~css
1043 |     font-size: clamp(2.5rem, 11vw, 3.3rem);
~~~~
- 설명: `.hero-copy h1`에 `font-size: clamp(2.5rem, 11vw, 3.3rem);`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1044줄
~~~~css
1044 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1045줄
~~~~css
1045 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1046줄
~~~~css
1046 |   .hero-teaser-grid,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1047줄
~~~~css
1047 |   .meeting-list,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1048줄
~~~~css
1048 |   .mini-feature-grid,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1049줄
~~~~css
1049 |   .search-form,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1050줄
~~~~css
1050 |   .create-panel {
~~~~
- 설명: `.create-panel` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1051줄
~~~~css
1051 |     grid-template-columns: 1fr;
~~~~
- 설명: `.create-panel`에 `grid-template-columns: 1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1052줄
~~~~css
1052 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1053줄
~~~~css
1053 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1054줄
~~~~css
1054 |   .status-strip {
~~~~
- 설명: `.status-strip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1055줄
~~~~css
1055 |     grid-template-columns: repeat(2, minmax(0, 1fr));
~~~~
- 설명: `.status-strip`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1056줄
~~~~css
1056 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1057줄
~~~~css
1057 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1058줄
~~~~css
1058 |   .shortcut-grid {
~~~~
- 설명: `.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1059줄
~~~~css
1059 |     grid-template-columns: repeat(4, minmax(0, 1fr));
~~~~
- 설명: `.shortcut-grid`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1060줄
~~~~css
1060 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1061줄
~~~~css
1061 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1062줄
~~~~css
1062 |   .hero-orb {
~~~~
- 설명: `.hero-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1063줄
~~~~css
1063 |     width: 100%;
~~~~
- 설명: `.hero-orb`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1064줄
~~~~css
1064 |     border-radius: 32px;
~~~~
- 설명: `.hero-orb`에 `border-radius: 32px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1065줄
~~~~css
1065 |     aspect-ratio: auto;
~~~~
- 설명: `.hero-orb`에 `aspect-ratio: auto;`를 적용하는 줄이다. 가로세로 비율을 고정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1066줄
~~~~css
1066 |     min-height: 260px;
~~~~
- 설명: `.hero-orb`에 `min-height: 260px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1067줄
~~~~css
1067 |     padding: 18px;
~~~~
- 설명: `.hero-orb`에 `padding: 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1068줄
~~~~css
1068 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1069줄
~~~~css
1069 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1070줄
~~~~css
1070 |   .hero-page-indicator {
~~~~
- 설명: `.hero-page-indicator` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1071줄
~~~~css
1071 |     position: static;
~~~~
- 설명: `.hero-page-indicator`에 `position: static;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1072줄
~~~~css
1072 |     margin-top: 12px;
~~~~
- 설명: `.hero-page-indicator`에 `margin-top: 12px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1073줄
~~~~css
1073 |     justify-self: flex-end;
~~~~
- 설명: `.hero-page-indicator`에 `justify-self: flex-end;`를 적용하는 줄이다. `justify-self` 값을 지정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1074줄
~~~~css
1074 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1075줄
~~~~css
1075 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1076줄
~~~~css
1076 |   .hero-nav-button {
~~~~
- 설명: `.hero-nav-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1077줄
~~~~css
1077 |     top: 18px;
~~~~
- 설명: `.hero-nav-button`에 `top: 18px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1078줄
~~~~css
1078 |     transform: none;
~~~~
- 설명: `.hero-nav-button`에 `transform: none;`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1079줄
~~~~css
1079 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1080줄
~~~~css
1080 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1081줄
~~~~css
1081 |   .hero-nav-prev {
~~~~
- 설명: `.hero-nav-prev` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1082줄
~~~~css
1082 |     left: 18px;
~~~~
- 설명: `.hero-nav-prev`에 `left: 18px;`를 적용하는 줄이다. 왼쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1083줄
~~~~css
1083 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1084줄
~~~~css
1084 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1085줄
~~~~css
1085 |   .hero-nav-next {
~~~~
- 설명: `.hero-nav-next` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1086줄
~~~~css
1086 |     right: 18px;
~~~~
- 설명: `.hero-nav-next`에 `right: 18px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1087줄
~~~~css
1087 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1088줄
~~~~css
1088 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1089줄
~~~~css
1089 |   .button,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1090줄
~~~~css
1090 |   .card-actions .button,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1091줄
~~~~css
1091 |   .dialog-owner-actions .button {
~~~~
- 설명: `.dialog-owner-actions .button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1092줄
~~~~css
1092 |     width: 100%;
~~~~
- 설명: `.dialog-owner-actions .button`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1093줄
~~~~css
1093 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1094줄
~~~~css
1094 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1095줄
~~~~css
1095 |   .footer-links {
~~~~
- 설명: `.footer-links` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1096줄
~~~~css
1096 |     justify-content: flex-start;
~~~~
- 설명: `.footer-links`에 `justify-content: flex-start;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1097줄
~~~~css
1097 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1098줄
~~~~css
1098 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1099줄
~~~~css
1099 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1100줄
~~~~css
1100 | @media (max-width: 520px) {
~~~~
- 설명: 반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1101줄
~~~~css
1101 |   .container {
~~~~
- 설명: `.container` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1102줄
~~~~css
1102 |     width: min(1180px, calc(100% - 24px));
~~~~
- 설명: `.container`에 `width: min(1180px, calc(100% - 24px));`를 적용하는 줄이다. 너비를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1103줄
~~~~css
1103 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1104줄
~~~~css
1104 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1105줄
~~~~css
1105 |   .brand,
~~~~
- 설명: 여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1106줄
~~~~css
1106 |   .footer-brand {
~~~~
- 설명: `.footer-brand` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1107줄
~~~~css
1107 |     font-size: 1.7rem;
~~~~
- 설명: `.footer-brand`에 `font-size: 1.7rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1108줄
~~~~css
1108 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1109줄
~~~~css
1109 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1110줄
~~~~css
1110 |   .sub-menu {
~~~~
- 설명: `.sub-menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1111줄
~~~~css
1111 |     gap: 14px;
~~~~
- 설명: `.sub-menu`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1112줄
~~~~css
1112 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1113줄
~~~~css
1113 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1114줄
~~~~css
1114 |   .hero-banner {
~~~~
- 설명: `.hero-banner` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1115줄
~~~~css
1115 |     padding: 20px;
~~~~
- 설명: `.hero-banner`에 `padding: 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1116줄
~~~~css
1116 |     border-radius: 28px;
~~~~
- 설명: `.hero-banner`에 `border-radius: 28px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1117줄
~~~~css
1117 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1118줄
~~~~css
1118 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1119줄
~~~~css
1119 |   .hero-copy h1 {
~~~~
- 설명: `.hero-copy h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1120줄
~~~~css
1120 |     font-size: clamp(2.1rem, 10vw, 2.8rem);
~~~~
- 설명: `.hero-copy h1`에 `font-size: clamp(2.1rem, 10vw, 2.8rem);`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1121줄
~~~~css
1121 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1122줄
~~~~css
1122 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1123줄
~~~~css
1123 |   .shortcut-grid {
~~~~
- 설명: `.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1124줄
~~~~css
1124 |     grid-template-columns: repeat(2, minmax(0, 1fr));
~~~~
- 설명: `.shortcut-grid`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1125줄
~~~~css
1125 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1126줄
~~~~css
1126 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1127줄
~~~~css
1127 |   .shortcut-tile {
~~~~
- 설명: `.shortcut-tile` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1128줄
~~~~css
1128 |     min-height: 102px;
~~~~
- 설명: `.shortcut-tile`에 `min-height: 102px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1129줄
~~~~css
1129 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1130줄
~~~~css
1130 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1131줄
~~~~css
1131 |   .status-strip {
~~~~
- 설명: `.status-strip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1132줄
~~~~css
1132 |     grid-template-columns: 1fr;
~~~~
- 설명: `.status-strip`에 `grid-template-columns: 1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1133줄
~~~~css
1133 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1134줄
~~~~css
1134 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1135줄
~~~~css
1135 |   .meeting-card h3 {
~~~~
- 설명: `.meeting-card h3` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1136줄
~~~~css
1136 |     font-size: 1.28rem;
~~~~
- 설명: `.meeting-card h3`에 `font-size: 1.28rem;`를 적용하는 줄이다. 글자 크기를 정한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1137줄
~~~~css
1137 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1138줄
~~~~css
1138 | 
~~~~
- 설명: 스타일 블록 사이를 구분하는 빈 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1139줄
~~~~css
1139 |   .card-poster {
~~~~
- 설명: `.card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.
- 들여쓰기 설명: `@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1140줄
~~~~css
1140 |     min-height: 158px;
~~~~
- 설명: `.card-poster`에 `min-height: 158px;`를 적용하는 줄이다. 최소 높이를 보장한다.
- 들여쓰기 설명: 선택자 블록 안의 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1141줄
~~~~css
1141 |   }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.
### 1142줄
~~~~css
1142 | }
~~~~
- 설명: 현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.
- 들여쓰기 설명: 선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다.
- 왜 필요한가: 화면이 의도한 배치와 스타일로 보이게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 해당 요소의 배치나 모양이 바뀌거나 깨질 수 있다.

## 4. 블록 단위로 코드 보면서 설명
### 블록 1. 선택자 `:root`
- 범위: 2~25줄
- 블록 원문:
~~~~css
   2 | :root {
   3 |   --bg: #f5f5f7;
   4 |   --surface: #ffffff;
   5 |   --surface-soft: #f0f0f2;
   6 |   --surface-muted: #f8f8f9;
   7 |   --hero: #efe1af;
   8 |   --hero-deep: #d7c27f;
   9 |   --text: #17181a;
  10 |   --muted: #74767d;
  11 |   --line: rgba(23, 24, 26, 0.08);
  12 |   --line-strong: rgba(23, 24, 26, 0.12);
  13 |   --accent: #111111;
  14 |   --accent-soft: #ff613f;
  15 |   --accent-blue: #3e7dff;
  16 |   --danger: #cf3e3e;
  17 |   --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);
  18 |   --radius-xl: 34px;
  19 |   --radius-lg: 24px;
  20 |   --radius-md: 18px;
  21 |   --radius-sm: 14px;
  22 |   --font-display: "Noto Sans KR", sans-serif;
  23 |   --font-body: "Noto Sans KR", sans-serif;
  24 | }
  25 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 2. 선택자 `*`
- 범위: 26~29줄
- 블록 원문:
~~~~css
  26 | * {
  27 |   box-sizing: border-box;
  28 | }
  29 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 3. 선택자 `html`
- 범위: 30~33줄
- 블록 원문:
~~~~css
  30 | html {
  31 |   scroll-behavior: smooth;
  32 | }
  33 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 4. 선택자 `body`
- 범위: 34~41줄
- 블록 원문:
~~~~css
  34 | body {
  35 |   margin: 0;
  36 |   background: var(--bg);
  37 |   color: var(--text);
  38 |   font-family: var(--font-body);
  39 |   overflow-x: hidden;
  40 | }
  41 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 5. 선택자 `a`
- 범위: 42~49줄
- 블록 원문:
~~~~css
  42 | a {
  43 |   color: inherit;
  44 |   text-decoration: none;
  45 | }
  46 | 
  47 | button,
  48 | input,
  49 | select,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 6. 선택자 `button, input, select, textarea`
- 범위: 50~53줄
- 블록 원문:
~~~~css
  50 | textarea {
  51 |   font: inherit;
  52 | }
  53 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 7. 선택자 `.container`
- 범위: 54~58줄
- 블록 원문:
~~~~css
  54 | .container {
  55 |   width: min(1180px, calc(100% - 32px));
  56 |   margin: 0 auto;
  57 | }
  58 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 8. 선택자 `.site-header`
- 범위: 59~67줄
- 블록 원문:
~~~~css
  59 | .site-header {
  60 |   position: sticky;
  61 |   top: 0;
  62 |   z-index: 40;
  63 |   background: rgba(255, 255, 255, 0.94);
  64 |   border-bottom: 1px solid var(--line);
  65 |   backdrop-filter: blur(16px);
  66 | }
  67 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 9. 선택자 `.nav-row`
- 범위: 68~79줄
- 블록 원문:
~~~~css
  68 | .nav-row {
  69 |   display: flex;
  70 |   align-items: center;
  71 |   justify-content: space-between;
  72 |   gap: 24px;
  73 |   min-height: 72px;
  74 | }
  75 | 
  76 | .brand-group,
  77 | .menu,
  78 | .sub-menu,
  79 | .header-actions,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 10. 선택자 `.brand-group, .menu, .sub-menu, .header-actions, .footer-links`
- 범위: 80~85줄
- 블록 원문:
~~~~css
  80 | .footer-links {
  81 |   display: flex;
  82 |   align-items: center;
  83 |   min-width: 0;
  84 | }
  85 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 11. 선택자 `.brand-group`
- 범위: 86~90줄
- 블록 원문:
~~~~css
  86 | .brand-group {
  87 |   gap: 34px;
  88 | }
  89 | 
  90 | .brand,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 12. 선택자 `.brand, .footer-brand`
- 범위: 91~97줄
- 블록 원문:
~~~~css
  91 | .footer-brand {
  92 |   font-family: var(--font-display);
  93 |   font-size: 2rem;
  94 |   font-weight: 800;
  95 |   letter-spacing: -0.05em;
  96 | }
  97 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 13. 선택자 `.menu`
- 범위: 98~104줄
- 블록 원문:
~~~~css
  98 | .menu {
  99 |   flex-wrap: wrap;
 100 |   gap: 20px;
 101 | }
 102 | 
 103 | .menu a,
 104 | .sub-menu a,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 14. 선택자 `.menu a, .sub-menu a, .sub-menu-button`
- 범위: 105~116줄
- 블록 원문:
~~~~css
 105 | .sub-menu-button {
 106 |   color: var(--muted);
 107 |   font-size: 0.97rem;
 108 |   font-weight: 700;
 109 | }
 110 | 
 111 | .menu a.is-current,
 112 | .sub-menu a.is-current,
 113 | .sub-menu-button.is-current,
 114 | .sub-menu-button.is-active,
 115 | .menu a:hover,
 116 | .sub-menu a:hover,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 15. 선택자 `.menu a.is-current, .sub-menu a.is-current, .sub-menu-button.is-current, .sub-menu-button.is-active, .menu a:hover, .sub-menu a:hover, .sub-menu-button:hover`
- 범위: 117~120줄
- 블록 원문:
~~~~css
 117 | .sub-menu-button:hover {
 118 |   color: var(--text);
 119 | }
 120 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 16. 선택자 `.sub-menu-button`
- 범위: 121~127줄
- 블록 원문:
~~~~css
 121 | .sub-menu-button {
 122 |   padding: 0;
 123 |   border: 0;
 124 |   background: transparent;
 125 |   cursor: pointer;
 126 | }
 127 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 17. 선택자 `.header-actions`
- 범위: 128~131줄
- 블록 원문:
~~~~css
 128 | .header-actions {
 129 |   gap: 12px;
 130 | }
 131 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 18. 선택자 `.header-link`
- 범위: 132~144줄
- 블록 원문:
~~~~css
 132 | .header-link {
 133 |   display: inline-flex;
 134 |   align-items: center;
 135 |   justify-content: center;
 136 |   min-height: 40px;
 137 |   padding: 10px 16px;
 138 |   border-radius: 12px;
 139 |   border: 1px solid var(--line-strong);
 140 |   background: var(--surface);
 141 |   font-size: 0.92rem;
 142 |   font-weight: 700;
 143 | }
 144 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 19. 선택자 `.header-link.primary`
- 범위: 145~148줄
- 블록 원문:
~~~~css
 145 | .header-link.primary {
 146 |   border-color: var(--text);
 147 | }
 148 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 20. 선택자 `.sub-nav`
- 범위: 149~152줄
- 블록 원문:
~~~~css
 149 | .sub-nav {
 150 |   border-top: 1px solid var(--line);
 151 | }
 152 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 21. 선택자 `.sub-menu`
- 범위: 153~158줄
- 블록 원문:
~~~~css
 153 | .sub-menu {
 154 |   flex-wrap: wrap;
 155 |   gap: 18px;
 156 |   min-height: 50px;
 157 | }
 158 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 22. 선택자 `.hero-section`
- 범위: 159~163줄
- 블록 원문:
~~~~css
 159 | .hero-section {
 160 |   padding: 18px 0 12px;
 161 | }
 162 | 
 163 | /* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 23. 선택자 `.hero-banner`
- 범위: 164~174줄
- 블록 원문:
~~~~css
 164 | .hero-banner {
 165 |   display: grid;
 166 |   grid-template-columns: 1.05fr 0.95fr;
 167 |   gap: 34px;
 168 |   align-items: center;
 169 |   padding: 56px;
 170 |   border-radius: 40px;
 171 |   background: var(--hero);
 172 |   overflow: hidden;
 173 | }
 174 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 24. 선택자 `.hero-copy`
- 범위: 175~181줄
- 블록 원문:
~~~~css
 175 | .hero-copy {
 176 |   display: grid;
 177 |   gap: 20px;
 178 |   min-width: 0;
 179 | }
 180 | 
 181 | .hero-kicker,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 25. 선택자 `.hero-kicker, .eyebrow`
- 범위: 182~194줄
- 블록 원문:
~~~~css
 182 | .eyebrow {
 183 |   margin: 0;
 184 |   color: rgba(23, 24, 26, 0.78);
 185 |   font-size: 0.84rem;
 186 |   font-weight: 800;
 187 |   letter-spacing: 0.04em;
 188 | }
 189 | 
 190 | .hero-copy h1,
 191 | .section-title h2,
 192 | .map-copy h2,
 193 | .help-box h3,
 194 | .utility-note h3,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 26. 선택자 `.hero-copy h1, .section-title h2, .map-copy h2, .help-box h3, .utility-note h3, .dialog-header h2`
- 범위: 195~199줄
- 블록 원문:
~~~~css
 195 | .dialog-header h2 {
 196 |   margin: 0;
 197 |   font-family: var(--font-display);
 198 | }
 199 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 27. 선택자 `.hero-copy h1`
- 범위: 200~215줄
- 블록 원문:
~~~~css
 200 | .hero-copy h1 {
 201 |   max-width: 8ch;
 202 |   font-size: clamp(3.1rem, 5vw, 4.8rem);
 203 |   font-weight: 800;
 204 |   letter-spacing: -0.08em;
 205 |   line-height: 0.96;
 206 | }
 207 | 
 208 | .hero-text,
 209 | .section-title p:last-child,
 210 | .map-copy p,
 211 | .help-box li,
 212 | .utility-note li,
 213 | .dialog-description p,
 214 | .footer-text,
 215 | .shortcut-tile p,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 28. 선택자 `.hero-text, .section-title p:last-child, .map-copy p, .help-box li, .utility-note li, .dialog-description p, .footer-text, .shortcut-tile p, .meeting-card p`
- 범위: 216~220줄
- 블록 원문:
~~~~css
 216 | .meeting-card p {
 217 |   color: var(--muted);
 218 |   line-height: 1.65;
 219 | }
 220 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 29. 선택자 `.hero-text`
- 범위: 221~226줄
- 블록 원문:
~~~~css
 221 | .hero-text {
 222 |   max-width: 34rem;
 223 |   margin: 0;
 224 | }
 225 | 
 226 | .hero-link,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 30. 선택자 `.hero-link, .more-link`
- 범위: 227~234줄
- 블록 원문:
~~~~css
 227 | .more-link {
 228 |   display: inline-flex;
 229 |   align-items: center;
 230 |   gap: 8px;
 231 |   font-weight: 700;
 232 | }
 233 | 
 234 | .hero-link::after,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 31. 선택자 `.hero-link::after, .more-link::after`
- 범위: 235~240줄
- 블록 원문:
~~~~css
 235 | .more-link::after {
 236 |   content: "›";
 237 |   font-size: 1.2rem;
 238 |   line-height: 1;
 239 | }
 240 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 32. 선택자 `.hero-actions`
- 범위: 241~246줄
- 블록 원문:
~~~~css
 241 | .hero-actions {
 242 |   display: flex;
 243 |   flex-wrap: wrap;
 244 |   gap: 12px;
 245 | }
 246 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 33. 선택자 `.hero-media`
- 범위: 247~251줄
- 블록 원문:
~~~~css
 247 | .hero-media {
 248 |   position: relative;
 249 |   min-height: 320px;
 250 | }
 251 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 34. 선택자 `.hero-orb`
- 범위: 252~267줄
- 블록 원문:
~~~~css
 252 | .hero-orb {
 253 |   position: absolute;
 254 |   right: -74px;
 255 |   top: -24px;
 256 |   width: 470px;
 257 |   aspect-ratio: 1;
 258 |   display: grid;
 259 |   place-items: center;
 260 |   border-radius: 50%;
 261 |   background:
 262 |     radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),
 263 |     radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),
 264 |     linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));
 265 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
 266 | }
 267 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 35. 선택자 `radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%), radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%), .hero-teaser-grid`
- 범위: 268~274줄
- 블록 원문:
~~~~css
 268 | .hero-teaser-grid {
 269 |   width: 74%;
 270 |   display: grid;
 271 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 272 |   gap: 14px;
 273 | }
 274 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 36. 선택자 `.hero-teaser-card`
- 범위: 275~291줄
- 블록 원문:
~~~~css
 275 | .hero-teaser-card {
 276 |   display: grid;
 277 |   gap: 6px;
 278 |   padding: 16px;
 279 |   border-radius: 22px;
 280 |   border: 1px solid rgba(23, 24, 26, 0.08);
 281 |   background: rgba(255, 255, 255, 0.82);
 282 |   box-shadow: var(--shadow);
 283 |   text-align: left;
 284 |   cursor: pointer;
 285 |   transition:
 286 |     transform 0.18s ease,
 287 |     background 0.18s ease,
 288 |     box-shadow 0.18s ease;
 289 | }
 290 | 
 291 | .hero-teaser-card:hover,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 37. 선택자 `transform 0.18s ease, background 0.18s ease, .hero-teaser-card:hover, .hero-teaser-card.is-active`
- 범위: 292~297줄
- 블록 원문:
~~~~css
 292 | .hero-teaser-card.is-active {
 293 |   transform: translateY(-2px);
 294 |   background: rgba(255, 255, 255, 0.98);
 295 |   box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);
 296 | }
 297 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 38. 선택자 `.hero-teaser-card.wide`
- 범위: 298~301줄
- 블록 원문:
~~~~css
 298 | .hero-teaser-card.wide {
 299 |   grid-column: 1 / -1;
 300 | }
 301 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 39. 선택자 `.hero-teaser-card span`
- 범위: 302~307줄
- 블록 원문:
~~~~css
 302 | .hero-teaser-card span {
 303 |   color: var(--muted);
 304 |   font-size: 0.78rem;
 305 |   font-weight: 700;
 306 | }
 307 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 40. 선택자 `.hero-teaser-card strong`
- 범위: 308~313줄
- 블록 원문:
~~~~css
 308 | .hero-teaser-card strong {
 309 |   font-size: 1rem;
 310 |   font-weight: 800;
 311 |   line-height: 1.35;
 312 | }
 313 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 41. 선택자 `.hero-page-indicator`
- 범위: 314~326줄
- 블록 원문:
~~~~css
 314 | .hero-page-indicator {
 315 |   position: absolute;
 316 |   right: 12px;
 317 |   bottom: 10px;
 318 |   margin: 0;
 319 |   padding: 6px 10px;
 320 |   border-radius: 999px;
 321 |   background: rgba(23, 24, 26, 0.62);
 322 |   color: white;
 323 |   font-size: 0.78rem;
 324 |   font-weight: 700;
 325 | }
 326 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 42. 선택자 `.hero-nav-button`
- 범위: 327~343줄
- 블록 원문:
~~~~css
 327 | .hero-nav-button {
 328 |   position: absolute;
 329 |   top: 50%;
 330 |   z-index: 2;
 331 |   width: 44px;
 332 |   height: 44px;
 333 |   display: inline-grid;
 334 |   place-items: center;
 335 |   border: 1px solid rgba(23, 24, 26, 0.12);
 336 |   border-radius: 999px;
 337 |   background: rgba(255, 255, 255, 0.94);
 338 |   color: var(--text);
 339 |   cursor: pointer;
 340 |   transform: translateY(-50%);
 341 |   box-shadow: var(--shadow);
 342 | }
 343 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 43. 선택자 `.hero-nav-button:disabled`
- 범위: 344~348줄
- 블록 원문:
~~~~css
 344 | .hero-nav-button:disabled {
 345 |   cursor: not-allowed;
 346 |   opacity: 0.45;
 347 | }
 348 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 44. 선택자 `.hero-nav-prev`
- 범위: 349~352줄
- 블록 원문:
~~~~css
 349 | .hero-nav-prev {
 350 |   left: 0;
 351 | }
 352 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 45. 선택자 `.hero-nav-next`
- 범위: 353~356줄
- 블록 원문:
~~~~css
 353 | .hero-nav-next {
 354 |   right: 0;
 355 | }
 356 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 46. 선택자 `.dashboard-section`
- 범위: 357~360줄
- 블록 원문:
~~~~css
 357 | .dashboard-section {
 358 |   padding: 10px 0 18px;
 359 | }
 360 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 47. 선택자 `.status-strip`
- 범위: 361~374줄
- 블록 원문:
~~~~css
 361 | .status-strip {
 362 |   display: grid;
 363 |   grid-template-columns: repeat(4, minmax(0, 1fr));
 364 |   gap: 12px;
 365 | }
 366 | 
 367 | .status-card,
 368 | .shortcut-tile,
 369 | .search-panel,
 370 | .map-shell,
 371 | .utility-note,
 372 | .help-box,
 373 | .create-panel,
 374 | .detail-dialog,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 48. 선택자 `.status-card, .shortcut-tile, .search-panel, .map-shell, .utility-note, .help-box, .create-panel, .detail-dialog, .dialog-description`
- 범위: 375~379줄
- 블록 원문:
~~~~css
 375 | .dialog-description {
 376 |   border: 1px solid var(--line);
 377 |   box-shadow: var(--shadow);
 378 | }
 379 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 49. 선택자 `.status-card`
- 범위: 380~385줄
- 블록 원문:
~~~~css
 380 | .status-card {
 381 |   padding: 20px 22px;
 382 |   border-radius: 18px;
 383 |   background: var(--surface);
 384 | }
 385 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 50. 선택자 `.status-card p`
- 범위: 386~392줄
- 블록 원문:
~~~~css
 386 | .status-card p {
 387 |   margin: 0;
 388 |   color: var(--muted);
 389 |   font-size: 0.82rem;
 390 |   font-weight: 700;
 391 | }
 392 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 51. 선택자 `.status-card strong`
- 범위: 393~400줄
- 블록 원문:
~~~~css
 393 | .status-card strong {
 394 |   display: block;
 395 |   margin-top: 10px;
 396 |   font-size: 1.75rem;
 397 |   font-weight: 800;
 398 |   letter-spacing: -0.05em;
 399 | }
 400 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 52. 선택자 `.shortcut-shell`
- 범위: 401~407줄
- 블록 원문:
~~~~css
 401 | .shortcut-shell {
 402 |   margin-top: 16px;
 403 |   padding: 22px;
 404 |   border-radius: 26px;
 405 |   background: #ececee;
 406 | }
 407 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 53. 선택자 `.shortcut-grid`
- 범위: 408~413줄
- 블록 원문:
~~~~css
 408 | .shortcut-grid {
 409 |   display: grid;
 410 |   grid-template-columns: repeat(8, minmax(0, 1fr));
 411 |   gap: 14px;
 412 | }
 413 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 54. 선택자 `.shortcut-tile`
- 범위: 414~431줄
- 블록 원문:
~~~~css
 414 | .shortcut-tile {
 415 |   min-height: 128px;
 416 |   display: grid;
 417 |   align-content: center;
 418 |   justify-items: center;
 419 |   gap: 10px;
 420 |   padding: 14px 10px;
 421 |   border-radius: 18px;
 422 |   background: rgba(255, 255, 255, 0.86);
 423 |   text-align: center;
 424 |   cursor: pointer;
 425 |   transition:
 426 |     transform 0.18s ease,
 427 |     background 0.18s ease,
 428 |     border-color 0.18s ease;
 429 | }
 430 | 
 431 | .shortcut-tile:hover,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 55. 선택자 `transform 0.18s ease, background 0.18s ease, .shortcut-tile:hover, .shortcut-tile.is-active`
- 범위: 432~437줄
- 블록 원문:
~~~~css
 432 | .shortcut-tile.is-active {
 433 |   transform: translateY(-2px);
 434 |   border-color: rgba(23, 24, 26, 0.18);
 435 |   background: white;
 436 | }
 437 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 56. 선택자 `.shortcut-tile strong`
- 범위: 438~443줄
- 블록 원문:
~~~~css
 438 | .shortcut-tile strong {
 439 |   font-size: 0.95rem;
 440 |   font-weight: 800;
 441 |   line-height: 1.35;
 442 | }
 443 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 57. 선택자 `.shortcut-tile p`
- 범위: 444~448줄
- 블록 원문:
~~~~css
 444 | .shortcut-tile p {
 445 |   margin: 0;
 446 |   font-size: 0.82rem;
 447 | }
 448 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 58. 선택자 `.shortcut-icon`
- 범위: 449~459줄
- 블록 원문:
~~~~css
 449 | .shortcut-icon {
 450 |   width: 48px;
 451 |   height: 48px;
 452 |   display: inline-grid;
 453 |   place-items: center;
 454 |   border-radius: 16px;
 455 |   font-size: 1rem;
 456 |   font-weight: 800;
 457 |   color: var(--text);
 458 | }
 459 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 59. 선택자 `.tone-peach`
- 범위: 460~463줄
- 블록 원문:
~~~~css
 460 | .tone-peach {
 461 |   background: #ffe1d9;
 462 | }
 463 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 60. 선택자 `.tone-yellow`
- 범위: 464~467줄
- 블록 원문:
~~~~css
 464 | .tone-yellow {
 465 |   background: #fff0b8;
 466 | }
 467 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 61. 선택자 `.tone-blue`
- 범위: 468~471줄
- 블록 원문:
~~~~css
 468 | .tone-blue {
 469 |   background: #dce7ff;
 470 | }
 471 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 62. 선택자 `.tone-pink`
- 범위: 472~475줄
- 블록 원문:
~~~~css
 472 | .tone-pink {
 473 |   background: #ffdbe8;
 474 | }
 475 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 63. 선택자 `.tone-green`
- 범위: 476~479줄
- 블록 원문:
~~~~css
 476 | .tone-green {
 477 |   background: #d9f2dd;
 478 | }
 479 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 64. 선택자 `.tone-orange`
- 범위: 480~483줄
- 블록 원문:
~~~~css
 480 | .tone-orange {
 481 |   background: #ffe1bf;
 482 | }
 483 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 65. 선택자 `.tone-purple`
- 범위: 484~487줄
- 블록 원문:
~~~~css
 484 | .tone-purple {
 485 |   background: #e7ddff;
 486 | }
 487 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 66. 선택자 `.tone-dark`
- 범위: 488~491줄
- 블록 원문:
~~~~css
 488 | .tone-dark {
 489 |   background: #dadbdd;
 490 | }
 491 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 67. 선택자 `.section-block`
- 범위: 492~495줄
- 블록 원문:
~~~~css
 492 | .section-block {
 493 |   padding: 34px 0;
 494 | }
 495 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 68. 선택자 `.section-head`
- 범위: 496~503줄
- 블록 원문:
~~~~css
 496 | .section-head {
 497 |   display: flex;
 498 |   align-items: flex-end;
 499 |   justify-content: space-between;
 500 |   gap: 20px;
 501 |   margin-bottom: 18px;
 502 | }
 503 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 69. 선택자 `.section-title`
- 범위: 504~508줄
- 블록 원문:
~~~~css
 504 | .section-title {
 505 |   display: grid;
 506 |   gap: 6px;
 507 | }
 508 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 70. 선택자 `.section-title h2`
- 범위: 509~515줄
- 블록 원문:
~~~~css
 509 | .section-title h2 {
 510 |   font-size: clamp(1.9rem, 4vw, 2.6rem);
 511 |   font-weight: 800;
 512 |   letter-spacing: -0.05em;
 513 |   line-height: 1.04;
 514 | }
 515 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 71. 선택자 `.section-title p:last-child`
- 범위: 516~523줄
- 블록 원문:
~~~~css
 516 | .section-title p:last-child {
 517 |   margin: 0;
 518 | }
 519 | 
 520 | .search-panel,
 521 | .map-shell,
 522 | .utility-note,
 523 | .help-box,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 72. 선택자 `.search-panel, .map-shell, .utility-note, .help-box, .create-panel`
- 범위: 524~530줄
- 블록 원문:
~~~~css
 524 | .create-panel {
 525 |   border-radius: 24px;
 526 |   background: var(--surface);
 527 | }
 528 | 
 529 | /* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */
 530 | .search-form,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 73. 선택자 `.search-form, .create-form`
- 범위: 531~536줄
- 블록 원문:
~~~~css
 531 | .create-form {
 532 |   display: grid;
 533 |   gap: 12px;
 534 |   padding: 20px;
 535 | }
 536 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 74. 선택자 `.search-form`
- 범위: 537~541줄
- 블록 원문:
~~~~css
 537 | .search-form {
 538 |   grid-template-columns: repeat(5, minmax(0, 1fr)) auto;
 539 |   align-items: end;
 540 | }
 541 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 75. 선택자 `.create-shell`
- 범위: 542~547줄
- 블록 원문:
~~~~css
 542 | .create-shell {
 543 |   display: grid;
 544 |   grid-template-columns: 0.9fr 1.1fr;
 545 |   gap: 20px;
 546 | }
 547 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 76. 선택자 `.create-copy`
- 범위: 548~552줄
- 블록 원문:
~~~~css
 548 | .create-copy {
 549 |   display: grid;
 550 |   gap: 18px;
 551 | }
 552 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 77. 선택자 `.create-panel`
- 범위: 553~557줄
- 블록 원문:
~~~~css
 553 | .create-panel {
 554 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 555 | }
 556 | 
 557 | .search-form label,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 78. 선택자 `.search-form label, .create-form label`
- 범위: 558~566줄
- 블록 원문:
~~~~css
 558 | .create-form label {
 559 |   display: grid;
 560 |   gap: 8px;
 561 |   font-size: 0.92rem;
 562 |   font-weight: 700;
 563 | }
 564 | 
 565 | input,
 566 | select,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 79. 선택자 `input, select, textarea`
- 범위: 567~576줄
- 블록 원문:
~~~~css
 567 | textarea {
 568 |   width: 100%;
 569 |   border: 1px solid var(--line-strong);
 570 |   border-radius: 14px;
 571 |   padding: 14px 14px;
 572 |   background: var(--surface-muted);
 573 |   color: var(--text);
 574 | }
 575 | 
 576 | input::placeholder,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 80. 선택자 `input::placeholder, textarea::placeholder`
- 범위: 577~581줄
- 블록 원문:
~~~~css
 577 | textarea::placeholder {
 578 |   color: rgba(23, 24, 26, 0.4);
 579 | }
 580 | 
 581 | .full-span,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 81. 선택자 `.full-span, .form-actions`
- 범위: 582~585줄
- 블록 원문:
~~~~css
 582 | .form-actions {
 583 |   grid-column: 1 / -1;
 584 | }
 585 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 82. 선택자 `.button`
- 범위: 586~598줄
- 블록 원문:
~~~~css
 586 | .button {
 587 |   display: inline-flex;
 588 |   align-items: center;
 589 |   justify-content: center;
 590 |   min-height: 44px;
 591 |   padding: 10px 18px;
 592 |   border: 1px solid transparent;
 593 |   border-radius: 14px;
 594 |   cursor: pointer;
 595 |   font-weight: 700;
 596 |   transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;
 597 | }
 598 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 83. 선택자 `.button:hover`
- 범위: 599~602줄
- 블록 원문:
~~~~css
 599 | .button:hover {
 600 |   transform: translateY(-1px);
 601 | }
 602 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 84. 선택자 `.button:disabled`
- 범위: 603~608줄
- 블록 원문:
~~~~css
 603 | .button:disabled {
 604 |   cursor: not-allowed;
 605 |   opacity: 0.5;
 606 |   transform: none;
 607 | }
 608 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 85. 선택자 `.button.primary`
- 범위: 609~613줄
- 블록 원문:
~~~~css
 609 | .button.primary {
 610 |   background: var(--accent);
 611 |   color: white;
 612 | }
 613 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 86. 선택자 `.button.secondary`
- 범위: 614~619줄
- 블록 원문:
~~~~css
 614 | .button.secondary {
 615 |   border-color: var(--line-strong);
 616 |   background: var(--surface);
 617 |   color: var(--text);
 618 | }
 619 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 87. 선택자 `.button.ghost`
- 범위: 620~625줄
- 블록 원문:
~~~~css
 620 | .button.ghost {
 621 |   border-color: var(--line-strong);
 622 |   background: transparent;
 623 |   color: var(--text);
 624 | }
 625 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 88. 선택자 `.button.danger`
- 범위: 626~630줄
- 블록 원문:
~~~~css
 626 | .button.danger {
 627 |   background: var(--danger);
 628 |   color: white;
 629 | }
 630 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 89. 선택자 `.form-actions`
- 범위: 631~635줄
- 블록 원문:
~~~~css
 631 | .form-actions {
 632 |   display: flex;
 633 |   gap: 10px;
 634 | }
 635 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 90. 선택자 `.result-summary`
- 범위: 636~642줄
- 블록 원문:
~~~~css
 636 | .result-summary {
 637 |   margin: 14px 4px 0;
 638 |   color: var(--muted);
 639 |   font-size: 0.92rem;
 640 | }
 641 | 
 642 | /* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 91. 선택자 `.meeting-list`
- 범위: 643~649줄
- 블록 원문:
~~~~css
 643 | .meeting-list {
 644 |   display: grid;
 645 |   grid-template-columns: repeat(4, minmax(0, 1fr));
 646 |   gap: 24px 20px;
 647 |   margin-top: 18px;
 648 | }
 649 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 92. 선택자 `.meeting-card`
- 범위: 650~656줄
- 블록 원문:
~~~~css
 650 | .meeting-card {
 651 |   display: grid;
 652 |   gap: 12px;
 653 | }
 654 | 
 655 | .card-poster,
 656 | .mine-list .card-poster,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 93. 선택자 `.card-poster, .mine-list .card-poster, .manage-list .card-poster`
- 범위: 657~665줄
- 블록 원문:
~~~~css
 657 | .manage-list .card-poster {
 658 |   position: relative;
 659 |   min-height: 176px;
 660 |   padding: 14px;
 661 |   border-radius: 18px;
 662 |   overflow: hidden;
 663 |   box-shadow: var(--shadow);
 664 | }
 665 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 94. 선택자 `.meeting-list .meeting-card:nth-child(4n + 1) .card-poster`
- 범위: 666~670줄
- 블록 원문:
~~~~css
 666 | .meeting-list .meeting-card:nth-child(4n + 1) .card-poster {
 667 |   background: linear-gradient(145deg, #121315, #272a2d);
 668 |   color: white;
 669 | }
 670 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 95. 선택자 `.meeting-list .meeting-card:nth-child(4n + 2) .card-poster`
- 범위: 671~675줄
- 블록 원문:
~~~~css
 671 | .meeting-list .meeting-card:nth-child(4n + 2) .card-poster {
 672 |   background: linear-gradient(145deg, #312019, #5e3a2d);
 673 |   color: white;
 674 | }
 675 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 96. 선택자 `.meeting-list .meeting-card:nth-child(4n + 3) .card-poster`
- 범위: 676~679줄
- 블록 원문:
~~~~css
 676 | .meeting-list .meeting-card:nth-child(4n + 3) .card-poster {
 677 |   background: linear-gradient(145deg, #fff1dc, #ffd6d6);
 678 | }
 679 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 97. 선택자 `.meeting-list .meeting-card:nth-child(4n + 4) .card-poster`
- 범위: 680~684줄
- 블록 원문:
~~~~css
 680 | .meeting-list .meeting-card:nth-child(4n + 4) .card-poster {
 681 |   background: linear-gradient(145deg, #f8d6d8, #a76b74);
 682 |   color: white;
 683 | }
 684 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 98. 선택자 `.mine-list .meeting-card .card-poster`
- 범위: 685~688줄
- 블록 원문:
~~~~css
 685 | .mine-list .meeting-card .card-poster {
 686 |   background: linear-gradient(145deg, #dfe8ff, #b7cdfd);
 687 | }
 688 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 99. 선택자 `.manage-list .meeting-card .card-poster`
- 범위: 689~693줄
- 블록 원문:
~~~~css
 689 | .manage-list .meeting-card .card-poster {
 690 |   background: linear-gradient(145deg, #ffe9da, #f9c7aa);
 691 | }
 692 | 
 693 | .card-poster::before,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 100. 선택자 `.card-poster::before, .card-poster::after`
- 범위: 694~700줄
- 블록 원문:
~~~~css
 694 | .card-poster::after {
 695 |   content: "";
 696 |   position: absolute;
 697 |   border-radius: 999px;
 698 |   pointer-events: none;
 699 | }
 700 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 101. 선택자 `.card-poster::before`
- 범위: 701~708줄
- 블록 원문:
~~~~css
 701 | .card-poster::before {
 702 |   width: 170px;
 703 |   height: 170px;
 704 |   right: -38px;
 705 |   bottom: -54px;
 706 |   background: rgba(255, 255, 255, 0.14);
 707 | }
 708 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 102. 선택자 `.card-poster::after`
- 범위: 709~716줄
- 블록 원문:
~~~~css
 709 | .card-poster::after {
 710 |   width: 90px;
 711 |   height: 90px;
 712 |   right: 18px;
 713 |   top: 16px;
 714 |   background: rgba(255, 255, 255, 0.1);
 715 | }
 716 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 103. 선택자 `.card-pills`
- 범위: 717~725줄
- 블록 원문:
~~~~css
 717 | .card-pills {
 718 |   position: relative;
 719 |   z-index: 1;
 720 |   display: flex;
 721 |   flex-wrap: wrap;
 722 |   align-items: center;
 723 |   gap: 8px;
 724 | }
 725 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 104. 선택자 `.card-pill`
- 범위: 726~739줄
- 블록 원문:
~~~~css
 726 | .card-pill {
 727 |   display: inline-flex;
 728 |   align-items: center;
 729 |   justify-content: center;
 730 |   min-height: 28px;
 731 |   padding: 4px 10px;
 732 |   border-radius: 999px;
 733 |   border: 1px solid rgba(255, 255, 255, 0.26);
 734 |   background: rgba(255, 255, 255, 0.92);
 735 |   color: var(--text);
 736 |   font-size: 0.74rem;
 737 |   font-weight: 800;
 738 | }
 739 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 105. 선택자 `.card-pill.primary`
- 범위: 740~745줄
- 블록 원문:
~~~~css
 740 | .card-pill.primary {
 741 |   border-color: transparent;
 742 |   background: #ff6542;
 743 |   color: white;
 744 | }
 745 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 106. 선택자 `.card-code`
- 범위: 746~755줄
- 블록 원문:
~~~~css
 746 | .card-code {
 747 |   position: absolute;
 748 |   right: 14px;
 749 |   bottom: 14px;
 750 |   z-index: 1;
 751 |   font-size: 0.78rem;
 752 |   font-weight: 800;
 753 |   letter-spacing: 0.02em;
 754 | }
 755 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 107. 선택자 `.card-copy`
- 범위: 756~762줄
- 블록 원문:
~~~~css
 756 | .card-copy {
 757 |   display: grid;
 758 |   gap: 10px;
 759 |   padding: 0 2px 2px;
 760 | }
 761 | 
 762 | .card-location,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 108. 선택자 `.card-location, .card-schedule`
- 범위: 763~768줄
- 블록 원문:
~~~~css
 763 | .card-schedule {
 764 |   margin: 0;
 765 |   font-size: 0.85rem;
 766 |   color: var(--muted);
 767 | }
 768 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 109. 선택자 `.meeting-card h3`
- 범위: 769~776줄
- 블록 원문:
~~~~css
 769 | .meeting-card h3 {
 770 |   margin: 0;
 771 |   font-size: 1.45rem;
 772 |   font-weight: 800;
 773 |   letter-spacing: -0.05em;
 774 |   line-height: 1.2;
 775 | }
 776 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 110. 선택자 `.description-preview`
- 범위: 777~783줄
- 블록 원문:
~~~~css
 777 | .description-preview {
 778 |   min-height: 46px;
 779 |   margin: 0;
 780 |   font-size: 0.92rem;
 781 | }
 782 | 
 783 | .meta-row,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 111. 선택자 `.meta-row, .dialog-meta`
- 범위: 784~789줄
- 블록 원문:
~~~~css
 784 | .dialog-meta {
 785 |   display: flex;
 786 |   flex-wrap: wrap;
 787 |   gap: 8px;
 788 | }
 789 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 112. 선택자 `.meta-chip`
- 범위: 790~803줄
- 블록 원문:
~~~~css
 790 | .meta-chip {
 791 |   display: inline-flex;
 792 |   align-items: center;
 793 |   justify-content: center;
 794 |   min-height: 30px;
 795 |   padding: 5px 10px;
 796 |   border-radius: 999px;
 797 |   background: var(--surface-muted);
 798 |   border: 1px solid var(--line);
 799 |   font-size: 0.76rem;
 800 |   font-weight: 700;
 801 |   color: var(--text);
 802 | }
 803 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 113. 선택자 `.card-footer`
- 범위: 804~809줄
- 블록 원문:
~~~~css
 804 | .card-footer {
 805 |   display: grid;
 806 |   gap: 12px;
 807 | }
 808 | 
 809 | .card-actions,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 114. 선택자 `.card-actions, .dialog-owner-actions`
- 범위: 810~816줄
- 블록 원문:
~~~~css
 810 | .dialog-owner-actions {
 811 |   display: flex;
 812 |   flex-wrap: wrap;
 813 |   gap: 8px;
 814 | }
 815 | 
 816 | .card-actions .button,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 115. 선택자 `.card-actions .button, .dialog-owner-actions .button`
- 범위: 817~822줄
- 블록 원문:
~~~~css
 817 | .dialog-owner-actions .button {
 818 |   min-height: 38px;
 819 |   padding: 8px 12px;
 820 |   font-size: 0.86rem;
 821 | }
 822 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 116. 선택자 `.utility-grid`
- 범위: 823~828줄
- 블록 원문:
~~~~css
 823 | .utility-grid {
 824 |   display: grid;
 825 |   grid-template-columns: 1.2fr 0.8fr;
 826 |   gap: 20px;
 827 | }
 828 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 117. 선택자 `.map-shell`
- 범위: 829~838줄
- 블록 원문:
~~~~css
 829 | .map-shell {
 830 |   display: grid;
 831 |   grid-template-columns: 0.92fr 1.08fr;
 832 |   gap: 18px;
 833 |   padding: 24px;
 834 | }
 835 | 
 836 | .map-copy h2,
 837 | .help-box h3,
 838 | .utility-note h3,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 118. 선택자 `.map-copy h2, .help-box h3, .utility-note h3, .dialog-description h3`
- 범위: 839~845줄
- 블록 원문:
~~~~css
 839 | .dialog-description h3 {
 840 |   font-size: 1.65rem;
 841 |   font-weight: 800;
 842 |   letter-spacing: -0.04em;
 843 |   line-height: 1.1;
 844 | }
 845 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 119. 선택자 `.mini-feature-grid`
- 범위: 846~852줄
- 블록 원문:
~~~~css
 846 | .mini-feature-grid {
 847 |   display: grid;
 848 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 849 |   gap: 12px;
 850 |   margin-top: 18px;
 851 | }
 852 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 120. 선택자 `.mini-feature-grid article`
- 범위: 853~858줄
- 블록 원문:
~~~~css
 853 | .mini-feature-grid article {
 854 |   padding: 18px;
 855 |   border-radius: 18px;
 856 |   background: var(--surface-muted);
 857 | }
 858 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 121. 선택자 `.mini-feature-grid strong`
- 범위: 859~865줄
- 블록 원문:
~~~~css
 859 | .mini-feature-grid strong {
 860 |   display: block;
 861 |   margin-bottom: 8px;
 862 |   font-size: 1rem;
 863 |   font-weight: 800;
 864 | }
 865 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 122. 선택자 `.mini-feature-grid p`
- 범위: 866~869줄
- 블록 원문:
~~~~css
 866 | .mini-feature-grid p {
 867 |   margin: 0;
 868 | }
 869 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 123. 선택자 `.map-placeholder`
- 범위: 870~882줄
- 블록 원문:
~~~~css
 870 | .map-placeholder {
 871 |   min-height: 280px;
 872 |   display: grid;
 873 |   place-items: center;
 874 |   border-radius: 22px;
 875 |   background:
 876 |     radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),
 877 |     linear-gradient(145deg, #f7efe0, #ead8b7);
 878 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
 879 |   text-align: center;
 880 | }
 881 | 
 882 | .utility-note,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 124. 선택자 `radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%), .utility-note, .help-box`
- 범위: 883~887줄
- 블록 원문:
~~~~css
 883 | .help-box {
 884 |   padding: 24px;
 885 | }
 886 | 
 887 | .utility-note ul,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 125. 선택자 `.utility-note ul, .help-box ul`
- 범위: 888~892줄
- 블록 원문:
~~~~css
 888 | .help-box ul {
 889 |   margin: 0;
 890 |   padding-left: 18px;
 891 | }
 892 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 126. 선택자 `.empty-state`
- 범위: 893~902줄
- 블록 원문:
~~~~css
 893 | .empty-state {
 894 |   grid-column: 1 / -1;
 895 |   padding: 28px 22px;
 896 |   border-radius: 20px;
 897 |   border: 1px dashed var(--line-strong);
 898 |   background: var(--surface);
 899 |   color: var(--muted);
 900 |   text-align: center;
 901 | }
 902 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 127. 선택자 `.detail-dialog`
- 범위: 903~910줄
- 블록 원문:
~~~~css
 903 | .detail-dialog {
 904 |   width: min(720px, calc(100% - 24px));
 905 |   padding: 0;
 906 |   border: 0;
 907 |   border-radius: 24px;
 908 |   background: var(--surface);
 909 | }
 910 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 128. 선택자 `.detail-dialog::backdrop`
- 범위: 911~915줄
- 블록 원문:
~~~~css
 911 | .detail-dialog::backdrop {
 912 |   background: rgba(17, 17, 17, 0.34);
 913 |   backdrop-filter: blur(3px);
 914 | }
 915 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 129. 선택자 `.dialog-shell`
- 범위: 916~921줄
- 블록 원문:
~~~~css
 916 | .dialog-shell {
 917 |   display: grid;
 918 |   gap: 18px;
 919 |   padding: 24px;
 920 | }
 921 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 130. 선택자 `.dialog-header`
- 범위: 922~928줄
- 블록 원문:
~~~~css
 922 | .dialog-header {
 923 |   display: flex;
 924 |   align-items: flex-start;
 925 |   justify-content: space-between;
 926 |   gap: 16px;
 927 | }
 928 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 131. 선택자 `.dialog-description`
- 범위: 929~934줄
- 블록 원문:
~~~~css
 929 | .dialog-description {
 930 |   padding: 20px;
 931 |   border-radius: 20px;
 932 |   background: var(--surface-muted);
 933 | }
 934 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 132. 선택자 `.is-hidden`
- 범위: 935~938줄
- 블록 원문:
~~~~css
 935 | .is-hidden {
 936 |   display: none !important;
 937 | }
 938 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 133. 선택자 `.site-footer`
- 범위: 939~942줄
- 블록 원문:
~~~~css
 939 | .site-footer {
 940 |   padding: 28px 0 54px;
 941 | }
 942 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 134. 선택자 `.footer-row`
- 범위: 943~951줄
- 블록 원문:
~~~~css
 943 | .footer-row {
 944 |   display: flex;
 945 |   align-items: center;
 946 |   justify-content: space-between;
 947 |   gap: 24px;
 948 |   padding: 24px 0 0;
 949 |   border-top: 1px solid var(--line);
 950 | }
 951 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 135. 선택자 `.footer-text`
- 범위: 952~956줄
- 블록 원문:
~~~~css
 952 | .footer-text {
 953 |   max-width: 34rem;
 954 |   margin: 8px 0 0;
 955 | }
 956 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 136. 선택자 `.footer-links`
- 범위: 957~962줄
- 블록 원문:
~~~~css
 957 | .footer-links {
 958 |   flex-wrap: wrap;
 959 |   justify-content: flex-end;
 960 |   gap: 16px;
 961 | }
 962 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 137. 선택자 `.footer-links a`
- 범위: 963~972줄
- 블록 원문:
~~~~css
 963 | .footer-links a {
 964 |   color: var(--muted);
 965 |   font-size: 0.92rem;
 966 |   font-weight: 700;
 967 | }
 968 | 
 969 | @media (max-width: 1120px) {
 970 |   .hero-banner,
 971 |   .utility-grid,
 972 |   .create-shell,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 138. 선택자 `.hero-banner, .utility-grid, .create-shell, .map-shell`
- 범위: 973~976줄
- 블록 원문:
~~~~css
 973 |   .map-shell {
 974 |     grid-template-columns: 1fr;
 975 |   }
 976 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 139. 선택자 `.shortcut-grid`
- 범위: 977~981줄
- 블록 원문:
~~~~css
 977 |   .shortcut-grid {
 978 |     grid-template-columns: repeat(4, minmax(0, 1fr));
 979 |   }
 980 | 
 981 |   .status-strip,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 140. 선택자 `.status-strip, .meeting-list`
- 범위: 982~985줄
- 블록 원문:
~~~~css
 982 |   .meeting-list {
 983 |     grid-template-columns: repeat(2, minmax(0, 1fr));
 984 |   }
 985 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 141. 선택자 `.search-form`
- 범위: 986~989줄
- 블록 원문:
~~~~css
 986 |   .search-form {
 987 |     grid-template-columns: repeat(3, minmax(0, 1fr));
 988 |   }
 989 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 142. 선택자 `.hero-orb`
- 범위: 990~995줄
- 블록 원문:
~~~~css
 990 |   .hero-orb {
 991 |     position: static;
 992 |     width: min(100%, 420px);
 993 |     margin-inline: auto;
 994 |   }
 995 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 143. 선택자 `.hero-media`
- 범위: 996~1009줄
- 블록 원문:
~~~~css
 996 |   .hero-media {
 997 |     min-height: auto;
 998 |   }
 999 | }
1000 | 
1001 | @media (max-width: 780px) {
1002 |   .nav-row,
1003 |   .brand-group,
1004 |   .footer-row,
1005 |   .section-head,
1006 |   .dialog-header,
1007 |   .card-actions,
1008 |   .dialog-owner-actions,
1009 |   .form-actions,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 144. 선택자 `.nav-row, .brand-group, .footer-row, .section-head, .dialog-header, .card-actions, .dialog-owner-actions, .form-actions, .hero-actions`
- 범위: 1010~1015줄
- 블록 원문:
~~~~css
1010 |   .hero-actions {
1011 |     flex-direction: column;
1012 |     align-items: stretch;
1013 |   }
1014 | 
1015 |   .nav-row,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 145. 선택자 `.nav-row, .sub-menu`
- 범위: 1016~1019줄
- 블록 원문:
~~~~css
1016 |   .sub-menu {
1017 |     padding: 14px 0;
1018 |   }
1019 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 146. 선택자 `.brand-group`
- 범위: 1020~1023줄
- 블록 원문:
~~~~css
1020 |   .brand-group {
1021 |     gap: 14px;
1022 |   }
1023 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 147. 선택자 `.header-actions`
- 범위: 1024~1036줄
- 블록 원문:
~~~~css
1024 |   .header-actions {
1025 |     width: 100%;
1026 |     justify-content: flex-start;
1027 |     gap: 8px;
1028 |   }
1029 | 
1030 |   .hero-banner,
1031 |   .shortcut-shell,
1032 |   .search-form,
1033 |   .map-shell,
1034 |   .utility-note,
1035 |   .help-box,
1036 |   .create-form,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 148. 선택자 `.hero-banner, .shortcut-shell, .search-form, .map-shell, .utility-note, .help-box, .create-form, .dialog-shell`
- 범위: 1037~1040줄
- 블록 원문:
~~~~css
1037 |   .dialog-shell {
1038 |     padding: 18px;
1039 |   }
1040 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 149. 선택자 `.hero-copy h1`
- 범위: 1041~1049줄
- 블록 원문:
~~~~css
1041 |   .hero-copy h1 {
1042 |     max-width: none;
1043 |     font-size: clamp(2.5rem, 11vw, 3.3rem);
1044 |   }
1045 | 
1046 |   .hero-teaser-grid,
1047 |   .meeting-list,
1048 |   .mini-feature-grid,
1049 |   .search-form,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 150. 선택자 `.hero-teaser-grid, .meeting-list, .mini-feature-grid, .search-form, .create-panel`
- 범위: 1050~1053줄
- 블록 원문:
~~~~css
1050 |   .create-panel {
1051 |     grid-template-columns: 1fr;
1052 |   }
1053 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 151. 선택자 `.status-strip`
- 범위: 1054~1057줄
- 블록 원문:
~~~~css
1054 |   .status-strip {
1055 |     grid-template-columns: repeat(2, minmax(0, 1fr));
1056 |   }
1057 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 152. 선택자 `.shortcut-grid`
- 범위: 1058~1061줄
- 블록 원문:
~~~~css
1058 |   .shortcut-grid {
1059 |     grid-template-columns: repeat(4, minmax(0, 1fr));
1060 |   }
1061 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 153. 선택자 `.hero-orb`
- 범위: 1062~1069줄
- 블록 원문:
~~~~css
1062 |   .hero-orb {
1063 |     width: 100%;
1064 |     border-radius: 32px;
1065 |     aspect-ratio: auto;
1066 |     min-height: 260px;
1067 |     padding: 18px;
1068 |   }
1069 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 154. 선택자 `.hero-page-indicator`
- 범위: 1070~1075줄
- 블록 원문:
~~~~css
1070 |   .hero-page-indicator {
1071 |     position: static;
1072 |     margin-top: 12px;
1073 |     justify-self: flex-end;
1074 |   }
1075 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 155. 선택자 `.hero-nav-button`
- 범위: 1076~1080줄
- 블록 원문:
~~~~css
1076 |   .hero-nav-button {
1077 |     top: 18px;
1078 |     transform: none;
1079 |   }
1080 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 156. 선택자 `.hero-nav-prev`
- 범위: 1081~1084줄
- 블록 원문:
~~~~css
1081 |   .hero-nav-prev {
1082 |     left: 18px;
1083 |   }
1084 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 157. 선택자 `.hero-nav-next`
- 범위: 1085~1090줄
- 블록 원문:
~~~~css
1085 |   .hero-nav-next {
1086 |     right: 18px;
1087 |   }
1088 | 
1089 |   .button,
1090 |   .card-actions .button,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 158. 선택자 `.button, .card-actions .button, .dialog-owner-actions .button`
- 범위: 1091~1094줄
- 블록 원문:
~~~~css
1091 |   .dialog-owner-actions .button {
1092 |     width: 100%;
1093 |   }
1094 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 159. 선택자 `.footer-links`
- 범위: 1095~1100줄
- 블록 원문:
~~~~css
1095 |   .footer-links {
1096 |     justify-content: flex-start;
1097 |   }
1098 | }
1099 | 
1100 | @media (max-width: 520px) {
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 160. 선택자 `.container`
- 범위: 1101~1105줄
- 블록 원문:
~~~~css
1101 |   .container {
1102 |     width: min(1180px, calc(100% - 24px));
1103 |   }
1104 | 
1105 |   .brand,
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 161. 선택자 `.brand, .footer-brand`
- 범위: 1106~1109줄
- 블록 원문:
~~~~css
1106 |   .footer-brand {
1107 |     font-size: 1.7rem;
1108 |   }
1109 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 162. 선택자 `.sub-menu`
- 범위: 1110~1113줄
- 블록 원문:
~~~~css
1110 |   .sub-menu {
1111 |     gap: 14px;
1112 |   }
1113 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 163. 선택자 `.hero-banner`
- 범위: 1114~1118줄
- 블록 원문:
~~~~css
1114 |   .hero-banner {
1115 |     padding: 20px;
1116 |     border-radius: 28px;
1117 |   }
1118 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 164. 선택자 `.hero-copy h1`
- 범위: 1119~1122줄
- 블록 원문:
~~~~css
1119 |   .hero-copy h1 {
1120 |     font-size: clamp(2.1rem, 10vw, 2.8rem);
1121 |   }
1122 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 165. 선택자 `.shortcut-grid`
- 범위: 1123~1126줄
- 블록 원문:
~~~~css
1123 |   .shortcut-grid {
1124 |     grid-template-columns: repeat(2, minmax(0, 1fr));
1125 |   }
1126 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 166. 선택자 `.shortcut-tile`
- 범위: 1127~1130줄
- 블록 원문:
~~~~css
1127 |   .shortcut-tile {
1128 |     min-height: 102px;
1129 |   }
1130 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 167. 선택자 `.status-strip`
- 범위: 1131~1134줄
- 블록 원문:
~~~~css
1131 |   .status-strip {
1132 |     grid-template-columns: 1fr;
1133 |   }
1134 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 168. 선택자 `.meeting-card h3`
- 범위: 1135~1138줄
- 블록 원문:
~~~~css
1135 |   .meeting-card h3 {
1136 |     font-size: 1.28rem;
1137 |   }
1138 | 
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 블록 169. 선택자 `.card-poster`
- 범위: 1139~1142줄
- 블록 원문:
~~~~css
1139 |   .card-poster {
1140 |     min-height: 158px;
1141 |   }
1142 | }
~~~~
- 이 블록이 하는 일: 이 선택자에 해당하는 요소의 스타일 묶음이 시작된다.
- 왜 필요한가: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 없으면 어떤 문제: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 연결되는 대상: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.

## 5. 기능 단위로 코드 보면서 설명
### 기능 1. 공통 변수와 기본 리셋
- 범위: 2~159줄
- 기능 원문:
~~~~css
   2 | :root {
   3 |   --bg: #f5f5f7;
   4 |   --surface: #ffffff;
   5 |   --surface-soft: #f0f0f2;
   6 |   --surface-muted: #f8f8f9;
   7 |   --hero: #efe1af;
   8 |   --hero-deep: #d7c27f;
   9 |   --text: #17181a;
  10 |   --muted: #74767d;
  11 |   --line: rgba(23, 24, 26, 0.08);
  12 |   --line-strong: rgba(23, 24, 26, 0.12);
  13 |   --accent: #111111;
  14 |   --accent-soft: #ff613f;
  15 |   --accent-blue: #3e7dff;
  16 |   --danger: #cf3e3e;
  17 |   --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);
  18 |   --radius-xl: 34px;
  19 |   --radius-lg: 24px;
  20 |   --radius-md: 18px;
  21 |   --radius-sm: 14px;
  22 |   --font-display: "Noto Sans KR", sans-serif;
  23 |   --font-body: "Noto Sans KR", sans-serif;
  24 | }
  25 | 
  26 | * {
  27 |   box-sizing: border-box;
  28 | }
  29 | 
  30 | html {
  31 |   scroll-behavior: smooth;
  32 | }
  33 | 
  34 | body {
  35 |   margin: 0;
  36 |   background: var(--bg);
  37 |   color: var(--text);
  38 |   font-family: var(--font-body);
  39 |   overflow-x: hidden;
  40 | }
  41 | 
  42 | a {
  43 |   color: inherit;
  44 |   text-decoration: none;
  45 | }
  46 | 
  47 | button,
  48 | input,
  49 | select,
  50 | textarea {
  51 |   font: inherit;
  52 | }
  53 | 
  54 | .container {
  55 |   width: min(1180px, calc(100% - 32px));
  56 |   margin: 0 auto;
  57 | }
  58 | 
  59 | .site-header {
  60 |   position: sticky;
  61 |   top: 0;
  62 |   z-index: 40;
  63 |   background: rgba(255, 255, 255, 0.94);
  64 |   border-bottom: 1px solid var(--line);
  65 |   backdrop-filter: blur(16px);
  66 | }
  67 | 
  68 | .nav-row {
  69 |   display: flex;
  70 |   align-items: center;
  71 |   justify-content: space-between;
  72 |   gap: 24px;
  73 |   min-height: 72px;
  74 | }
  75 | 
  76 | .brand-group,
  77 | .menu,
  78 | .sub-menu,
  79 | .header-actions,
  80 | .footer-links {
  81 |   display: flex;
  82 |   align-items: center;
  83 |   min-width: 0;
  84 | }
  85 | 
  86 | .brand-group {
  87 |   gap: 34px;
  88 | }
  89 | 
  90 | .brand,
  91 | .footer-brand {
  92 |   font-family: var(--font-display);
  93 |   font-size: 2rem;
  94 |   font-weight: 800;
  95 |   letter-spacing: -0.05em;
  96 | }
  97 | 
  98 | .menu {
  99 |   flex-wrap: wrap;
 100 |   gap: 20px;
 101 | }
 102 | 
 103 | .menu a,
 104 | .sub-menu a,
 105 | .sub-menu-button {
 106 |   color: var(--muted);
 107 |   font-size: 0.97rem;
 108 |   font-weight: 700;
 109 | }
 110 | 
 111 | .menu a.is-current,
 112 | .sub-menu a.is-current,
 113 | .sub-menu-button.is-current,
 114 | .sub-menu-button.is-active,
 115 | .menu a:hover,
 116 | .sub-menu a:hover,
 117 | .sub-menu-button:hover {
 118 |   color: var(--text);
 119 | }
 120 | 
 121 | .sub-menu-button {
 122 |   padding: 0;
 123 |   border: 0;
 124 |   background: transparent;
 125 |   cursor: pointer;
 126 | }
 127 | 
 128 | .header-actions {
 129 |   gap: 12px;
 130 | }
 131 | 
 132 | .header-link {
 133 |   display: inline-flex;
 134 |   align-items: center;
 135 |   justify-content: center;
 136 |   min-height: 40px;
 137 |   padding: 10px 16px;
 138 |   border-radius: 12px;
 139 |   border: 1px solid var(--line-strong);
 140 |   background: var(--surface);
 141 |   font-size: 0.92rem;
 142 |   font-weight: 700;
 143 | }
 144 | 
 145 | .header-link.primary {
 146 |   border-color: var(--text);
 147 | }
 148 | 
 149 | .sub-nav {
 150 |   border-top: 1px solid var(--line);
 151 | }
 152 | 
 153 | .sub-menu {
 154 |   flex-wrap: wrap;
 155 |   gap: 18px;
 156 |   min-height: 50px;
 157 | }
 158 | 
 159 | .hero-section {
~~~~
- 이 기능이 하는 일: 색상, 반지름, 폰트, 기본 box-sizing과 body 기본값을 정리한다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 2. 헤더와 상단 메뉴
- 범위: 59~159줄
- 기능 원문:
~~~~css
  59 | .site-header {
  60 |   position: sticky;
  61 |   top: 0;
  62 |   z-index: 40;
  63 |   background: rgba(255, 255, 255, 0.94);
  64 |   border-bottom: 1px solid var(--line);
  65 |   backdrop-filter: blur(16px);
  66 | }
  67 | 
  68 | .nav-row {
  69 |   display: flex;
  70 |   align-items: center;
  71 |   justify-content: space-between;
  72 |   gap: 24px;
  73 |   min-height: 72px;
  74 | }
  75 | 
  76 | .brand-group,
  77 | .menu,
  78 | .sub-menu,
  79 | .header-actions,
  80 | .footer-links {
  81 |   display: flex;
  82 |   align-items: center;
  83 |   min-width: 0;
  84 | }
  85 | 
  86 | .brand-group {
  87 |   gap: 34px;
  88 | }
  89 | 
  90 | .brand,
  91 | .footer-brand {
  92 |   font-family: var(--font-display);
  93 |   font-size: 2rem;
  94 |   font-weight: 800;
  95 |   letter-spacing: -0.05em;
  96 | }
  97 | 
  98 | .menu {
  99 |   flex-wrap: wrap;
 100 |   gap: 20px;
 101 | }
 102 | 
 103 | .menu a,
 104 | .sub-menu a,
 105 | .sub-menu-button {
 106 |   color: var(--muted);
 107 |   font-size: 0.97rem;
 108 |   font-weight: 700;
 109 | }
 110 | 
 111 | .menu a.is-current,
 112 | .sub-menu a.is-current,
 113 | .sub-menu-button.is-current,
 114 | .sub-menu-button.is-active,
 115 | .menu a:hover,
 116 | .sub-menu a:hover,
 117 | .sub-menu-button:hover {
 118 |   color: var(--text);
 119 | }
 120 | 
 121 | .sub-menu-button {
 122 |   padding: 0;
 123 |   border: 0;
 124 |   background: transparent;
 125 |   cursor: pointer;
 126 | }
 127 | 
 128 | .header-actions {
 129 |   gap: 12px;
 130 | }
 131 | 
 132 | .header-link {
 133 |   display: inline-flex;
 134 |   align-items: center;
 135 |   justify-content: center;
 136 |   min-height: 40px;
 137 |   padding: 10px 16px;
 138 |   border-radius: 12px;
 139 |   border: 1px solid var(--line-strong);
 140 |   background: var(--surface);
 141 |   font-size: 0.92rem;
 142 |   font-weight: 700;
 143 | }
 144 | 
 145 | .header-link.primary {
 146 |   border-color: var(--text);
 147 | }
 148 | 
 149 | .sub-nav {
 150 |   border-top: 1px solid var(--line);
 151 | }
 152 | 
 153 | .sub-menu {
 154 |   flex-wrap: wrap;
 155 |   gap: 18px;
 156 |   min-height: 50px;
 157 | }
 158 | 
 159 | .hero-section {
~~~~
- 이 기능이 하는 일: 고정 헤더, 브랜드, 메뉴, 서브메뉴, 상단 링크 모양을 정의한다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 3. 추천 배너
- 범위: 159~357줄
- 기능 원문:
~~~~css
 159 | .hero-section {
 160 |   padding: 18px 0 12px;
 161 | }
 162 | 
 163 | /* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */
 164 | .hero-banner {
 165 |   display: grid;
 166 |   grid-template-columns: 1.05fr 0.95fr;
 167 |   gap: 34px;
 168 |   align-items: center;
 169 |   padding: 56px;
 170 |   border-radius: 40px;
 171 |   background: var(--hero);
 172 |   overflow: hidden;
 173 | }
 174 | 
 175 | .hero-copy {
 176 |   display: grid;
 177 |   gap: 20px;
 178 |   min-width: 0;
 179 | }
 180 | 
 181 | .hero-kicker,
 182 | .eyebrow {
 183 |   margin: 0;
 184 |   color: rgba(23, 24, 26, 0.78);
 185 |   font-size: 0.84rem;
 186 |   font-weight: 800;
 187 |   letter-spacing: 0.04em;
 188 | }
 189 | 
 190 | .hero-copy h1,
 191 | .section-title h2,
 192 | .map-copy h2,
 193 | .help-box h3,
 194 | .utility-note h3,
 195 | .dialog-header h2 {
 196 |   margin: 0;
 197 |   font-family: var(--font-display);
 198 | }
 199 | 
 200 | .hero-copy h1 {
 201 |   max-width: 8ch;
 202 |   font-size: clamp(3.1rem, 5vw, 4.8rem);
 203 |   font-weight: 800;
 204 |   letter-spacing: -0.08em;
 205 |   line-height: 0.96;
 206 | }
 207 | 
 208 | .hero-text,
 209 | .section-title p:last-child,
 210 | .map-copy p,
 211 | .help-box li,
 212 | .utility-note li,
 213 | .dialog-description p,
 214 | .footer-text,
 215 | .shortcut-tile p,
 216 | .meeting-card p {
 217 |   color: var(--muted);
 218 |   line-height: 1.65;
 219 | }
 220 | 
 221 | .hero-text {
 222 |   max-width: 34rem;
 223 |   margin: 0;
 224 | }
 225 | 
 226 | .hero-link,
 227 | .more-link {
 228 |   display: inline-flex;
 229 |   align-items: center;
 230 |   gap: 8px;
 231 |   font-weight: 700;
 232 | }
 233 | 
 234 | .hero-link::after,
 235 | .more-link::after {
 236 |   content: "›";
 237 |   font-size: 1.2rem;
 238 |   line-height: 1;
 239 | }
 240 | 
 241 | .hero-actions {
 242 |   display: flex;
 243 |   flex-wrap: wrap;
 244 |   gap: 12px;
 245 | }
 246 | 
 247 | .hero-media {
 248 |   position: relative;
 249 |   min-height: 320px;
 250 | }
 251 | 
 252 | .hero-orb {
 253 |   position: absolute;
 254 |   right: -74px;
 255 |   top: -24px;
 256 |   width: 470px;
 257 |   aspect-ratio: 1;
 258 |   display: grid;
 259 |   place-items: center;
 260 |   border-radius: 50%;
 261 |   background:
 262 |     radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),
 263 |     radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),
 264 |     linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));
 265 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
 266 | }
 267 | 
 268 | .hero-teaser-grid {
 269 |   width: 74%;
 270 |   display: grid;
 271 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 272 |   gap: 14px;
 273 | }
 274 | 
 275 | .hero-teaser-card {
 276 |   display: grid;
 277 |   gap: 6px;
 278 |   padding: 16px;
 279 |   border-radius: 22px;
 280 |   border: 1px solid rgba(23, 24, 26, 0.08);
 281 |   background: rgba(255, 255, 255, 0.82);
 282 |   box-shadow: var(--shadow);
 283 |   text-align: left;
 284 |   cursor: pointer;
 285 |   transition:
 286 |     transform 0.18s ease,
 287 |     background 0.18s ease,
 288 |     box-shadow 0.18s ease;
 289 | }
 290 | 
 291 | .hero-teaser-card:hover,
 292 | .hero-teaser-card.is-active {
 293 |   transform: translateY(-2px);
 294 |   background: rgba(255, 255, 255, 0.98);
 295 |   box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);
 296 | }
 297 | 
 298 | .hero-teaser-card.wide {
 299 |   grid-column: 1 / -1;
 300 | }
 301 | 
 302 | .hero-teaser-card span {
 303 |   color: var(--muted);
 304 |   font-size: 0.78rem;
 305 |   font-weight: 700;
 306 | }
 307 | 
 308 | .hero-teaser-card strong {
 309 |   font-size: 1rem;
 310 |   font-weight: 800;
 311 |   line-height: 1.35;
 312 | }
 313 | 
 314 | .hero-page-indicator {
 315 |   position: absolute;
 316 |   right: 12px;
 317 |   bottom: 10px;
 318 |   margin: 0;
 319 |   padding: 6px 10px;
 320 |   border-radius: 999px;
 321 |   background: rgba(23, 24, 26, 0.62);
 322 |   color: white;
 323 |   font-size: 0.78rem;
 324 |   font-weight: 700;
 325 | }
 326 | 
 327 | .hero-nav-button {
 328 |   position: absolute;
 329 |   top: 50%;
 330 |   z-index: 2;
 331 |   width: 44px;
 332 |   height: 44px;
 333 |   display: inline-grid;
 334 |   place-items: center;
 335 |   border: 1px solid rgba(23, 24, 26, 0.12);
 336 |   border-radius: 999px;
 337 |   background: rgba(255, 255, 255, 0.94);
 338 |   color: var(--text);
 339 |   cursor: pointer;
 340 |   transform: translateY(-50%);
 341 |   box-shadow: var(--shadow);
 342 | }
 343 | 
 344 | .hero-nav-button:disabled {
 345 |   cursor: not-allowed;
 346 |   opacity: 0.45;
 347 | }
 348 | 
 349 | .hero-nav-prev {
 350 |   left: 0;
 351 | }
 352 | 
 353 | .hero-nav-next {
 354 |   right: 0;
 355 | }
 356 | 
 357 | .dashboard-section {
~~~~
- 이 기능이 하는 일: 메인 추천 배너, 미리보기 카드, 좌우 이동 버튼을 꾸민다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 4. 상태 카드와 빠른 타일
- 범위: 357~492줄
- 기능 원문:
~~~~css
 357 | .dashboard-section {
 358 |   padding: 10px 0 18px;
 359 | }
 360 | 
 361 | .status-strip {
 362 |   display: grid;
 363 |   grid-template-columns: repeat(4, minmax(0, 1fr));
 364 |   gap: 12px;
 365 | }
 366 | 
 367 | .status-card,
 368 | .shortcut-tile,
 369 | .search-panel,
 370 | .map-shell,
 371 | .utility-note,
 372 | .help-box,
 373 | .create-panel,
 374 | .detail-dialog,
 375 | .dialog-description {
 376 |   border: 1px solid var(--line);
 377 |   box-shadow: var(--shadow);
 378 | }
 379 | 
 380 | .status-card {
 381 |   padding: 20px 22px;
 382 |   border-radius: 18px;
 383 |   background: var(--surface);
 384 | }
 385 | 
 386 | .status-card p {
 387 |   margin: 0;
 388 |   color: var(--muted);
 389 |   font-size: 0.82rem;
 390 |   font-weight: 700;
 391 | }
 392 | 
 393 | .status-card strong {
 394 |   display: block;
 395 |   margin-top: 10px;
 396 |   font-size: 1.75rem;
 397 |   font-weight: 800;
 398 |   letter-spacing: -0.05em;
 399 | }
 400 | 
 401 | .shortcut-shell {
 402 |   margin-top: 16px;
 403 |   padding: 22px;
 404 |   border-radius: 26px;
 405 |   background: #ececee;
 406 | }
 407 | 
 408 | .shortcut-grid {
 409 |   display: grid;
 410 |   grid-template-columns: repeat(8, minmax(0, 1fr));
 411 |   gap: 14px;
 412 | }
 413 | 
 414 | .shortcut-tile {
 415 |   min-height: 128px;
 416 |   display: grid;
 417 |   align-content: center;
 418 |   justify-items: center;
 419 |   gap: 10px;
 420 |   padding: 14px 10px;
 421 |   border-radius: 18px;
 422 |   background: rgba(255, 255, 255, 0.86);
 423 |   text-align: center;
 424 |   cursor: pointer;
 425 |   transition:
 426 |     transform 0.18s ease,
 427 |     background 0.18s ease,
 428 |     border-color 0.18s ease;
 429 | }
 430 | 
 431 | .shortcut-tile:hover,
 432 | .shortcut-tile.is-active {
 433 |   transform: translateY(-2px);
 434 |   border-color: rgba(23, 24, 26, 0.18);
 435 |   background: white;
 436 | }
 437 | 
 438 | .shortcut-tile strong {
 439 |   font-size: 0.95rem;
 440 |   font-weight: 800;
 441 |   line-height: 1.35;
 442 | }
 443 | 
 444 | .shortcut-tile p {
 445 |   margin: 0;
 446 |   font-size: 0.82rem;
 447 | }
 448 | 
 449 | .shortcut-icon {
 450 |   width: 48px;
 451 |   height: 48px;
 452 |   display: inline-grid;
 453 |   place-items: center;
 454 |   border-radius: 16px;
 455 |   font-size: 1rem;
 456 |   font-weight: 800;
 457 |   color: var(--text);
 458 | }
 459 | 
 460 | .tone-peach {
 461 |   background: #ffe1d9;
 462 | }
 463 | 
 464 | .tone-yellow {
 465 |   background: #fff0b8;
 466 | }
 467 | 
 468 | .tone-blue {
 469 |   background: #dce7ff;
 470 | }
 471 | 
 472 | .tone-pink {
 473 |   background: #ffdbe8;
 474 | }
 475 | 
 476 | .tone-green {
 477 |   background: #d9f2dd;
 478 | }
 479 | 
 480 | .tone-orange {
 481 |   background: #ffe1bf;
 482 | }
 483 | 
 484 | .tone-purple {
 485 |   background: #e7ddff;
 486 | }
 487 | 
 488 | .tone-dark {
 489 |   background: #dadbdd;
 490 | }
 491 | 
 492 | .section-block {
~~~~
- 이 기능이 하는 일: 숫자 요약 카드와 빠른 기능 타일 영역을 설계한다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 5. 공통 섹션과 폼
- 범위: 492~643줄
- 기능 원문:
~~~~css
 492 | .section-block {
 493 |   padding: 34px 0;
 494 | }
 495 | 
 496 | .section-head {
 497 |   display: flex;
 498 |   align-items: flex-end;
 499 |   justify-content: space-between;
 500 |   gap: 20px;
 501 |   margin-bottom: 18px;
 502 | }
 503 | 
 504 | .section-title {
 505 |   display: grid;
 506 |   gap: 6px;
 507 | }
 508 | 
 509 | .section-title h2 {
 510 |   font-size: clamp(1.9rem, 4vw, 2.6rem);
 511 |   font-weight: 800;
 512 |   letter-spacing: -0.05em;
 513 |   line-height: 1.04;
 514 | }
 515 | 
 516 | .section-title p:last-child {
 517 |   margin: 0;
 518 | }
 519 | 
 520 | .search-panel,
 521 | .map-shell,
 522 | .utility-note,
 523 | .help-box,
 524 | .create-panel {
 525 |   border-radius: 24px;
 526 |   background: var(--surface);
 527 | }
 528 | 
 529 | /* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */
 530 | .search-form,
 531 | .create-form {
 532 |   display: grid;
 533 |   gap: 12px;
 534 |   padding: 20px;
 535 | }
 536 | 
 537 | .search-form {
 538 |   grid-template-columns: repeat(5, minmax(0, 1fr)) auto;
 539 |   align-items: end;
 540 | }
 541 | 
 542 | .create-shell {
 543 |   display: grid;
 544 |   grid-template-columns: 0.9fr 1.1fr;
 545 |   gap: 20px;
 546 | }
 547 | 
 548 | .create-copy {
 549 |   display: grid;
 550 |   gap: 18px;
 551 | }
 552 | 
 553 | .create-panel {
 554 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 555 | }
 556 | 
 557 | .search-form label,
 558 | .create-form label {
 559 |   display: grid;
 560 |   gap: 8px;
 561 |   font-size: 0.92rem;
 562 |   font-weight: 700;
 563 | }
 564 | 
 565 | input,
 566 | select,
 567 | textarea {
 568 |   width: 100%;
 569 |   border: 1px solid var(--line-strong);
 570 |   border-radius: 14px;
 571 |   padding: 14px 14px;
 572 |   background: var(--surface-muted);
 573 |   color: var(--text);
 574 | }
 575 | 
 576 | input::placeholder,
 577 | textarea::placeholder {
 578 |   color: rgba(23, 24, 26, 0.4);
 579 | }
 580 | 
 581 | .full-span,
 582 | .form-actions {
 583 |   grid-column: 1 / -1;
 584 | }
 585 | 
 586 | .button {
 587 |   display: inline-flex;
 588 |   align-items: center;
 589 |   justify-content: center;
 590 |   min-height: 44px;
 591 |   padding: 10px 18px;
 592 |   border: 1px solid transparent;
 593 |   border-radius: 14px;
 594 |   cursor: pointer;
 595 |   font-weight: 700;
 596 |   transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;
 597 | }
 598 | 
 599 | .button:hover {
 600 |   transform: translateY(-1px);
 601 | }
 602 | 
 603 | .button:disabled {
 604 |   cursor: not-allowed;
 605 |   opacity: 0.5;
 606 |   transform: none;
 607 | }
 608 | 
 609 | .button.primary {
 610 |   background: var(--accent);
 611 |   color: white;
 612 | }
 613 | 
 614 | .button.secondary {
 615 |   border-color: var(--line-strong);
 616 |   background: var(--surface);
 617 |   color: var(--text);
 618 | }
 619 | 
 620 | .button.ghost {
 621 |   border-color: var(--line-strong);
 622 |   background: transparent;
 623 |   color: var(--text);
 624 | }
 625 | 
 626 | .button.danger {
 627 |   background: var(--danger);
 628 |   color: white;
 629 | }
 630 | 
 631 | .form-actions {
 632 |   display: flex;
 633 |   gap: 10px;
 634 | }
 635 | 
 636 | .result-summary {
 637 |   margin: 14px 4px 0;
 638 |   color: var(--muted);
 639 |   font-size: 0.92rem;
 640 | }
 641 | 
 642 | /* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */
 643 | .meeting-list {
~~~~
- 이 기능이 하는 일: 제목, 폼, 버튼, 생성 섹션 공통 규칙을 모아 둔다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 6. 모임 카드와 메타 정보
- 범위: 643~823줄
- 기능 원문:
~~~~css
 643 | .meeting-list {
 644 |   display: grid;
 645 |   grid-template-columns: repeat(4, minmax(0, 1fr));
 646 |   gap: 24px 20px;
 647 |   margin-top: 18px;
 648 | }
 649 | 
 650 | .meeting-card {
 651 |   display: grid;
 652 |   gap: 12px;
 653 | }
 654 | 
 655 | .card-poster,
 656 | .mine-list .card-poster,
 657 | .manage-list .card-poster {
 658 |   position: relative;
 659 |   min-height: 176px;
 660 |   padding: 14px;
 661 |   border-radius: 18px;
 662 |   overflow: hidden;
 663 |   box-shadow: var(--shadow);
 664 | }
 665 | 
 666 | .meeting-list .meeting-card:nth-child(4n + 1) .card-poster {
 667 |   background: linear-gradient(145deg, #121315, #272a2d);
 668 |   color: white;
 669 | }
 670 | 
 671 | .meeting-list .meeting-card:nth-child(4n + 2) .card-poster {
 672 |   background: linear-gradient(145deg, #312019, #5e3a2d);
 673 |   color: white;
 674 | }
 675 | 
 676 | .meeting-list .meeting-card:nth-child(4n + 3) .card-poster {
 677 |   background: linear-gradient(145deg, #fff1dc, #ffd6d6);
 678 | }
 679 | 
 680 | .meeting-list .meeting-card:nth-child(4n + 4) .card-poster {
 681 |   background: linear-gradient(145deg, #f8d6d8, #a76b74);
 682 |   color: white;
 683 | }
 684 | 
 685 | .mine-list .meeting-card .card-poster {
 686 |   background: linear-gradient(145deg, #dfe8ff, #b7cdfd);
 687 | }
 688 | 
 689 | .manage-list .meeting-card .card-poster {
 690 |   background: linear-gradient(145deg, #ffe9da, #f9c7aa);
 691 | }
 692 | 
 693 | .card-poster::before,
 694 | .card-poster::after {
 695 |   content: "";
 696 |   position: absolute;
 697 |   border-radius: 999px;
 698 |   pointer-events: none;
 699 | }
 700 | 
 701 | .card-poster::before {
 702 |   width: 170px;
 703 |   height: 170px;
 704 |   right: -38px;
 705 |   bottom: -54px;
 706 |   background: rgba(255, 255, 255, 0.14);
 707 | }
 708 | 
 709 | .card-poster::after {
 710 |   width: 90px;
 711 |   height: 90px;
 712 |   right: 18px;
 713 |   top: 16px;
 714 |   background: rgba(255, 255, 255, 0.1);
 715 | }
 716 | 
 717 | .card-pills {
 718 |   position: relative;
 719 |   z-index: 1;
 720 |   display: flex;
 721 |   flex-wrap: wrap;
 722 |   align-items: center;
 723 |   gap: 8px;
 724 | }
 725 | 
 726 | .card-pill {
 727 |   display: inline-flex;
 728 |   align-items: center;
 729 |   justify-content: center;
 730 |   min-height: 28px;
 731 |   padding: 4px 10px;
 732 |   border-radius: 999px;
 733 |   border: 1px solid rgba(255, 255, 255, 0.26);
 734 |   background: rgba(255, 255, 255, 0.92);
 735 |   color: var(--text);
 736 |   font-size: 0.74rem;
 737 |   font-weight: 800;
 738 | }
 739 | 
 740 | .card-pill.primary {
 741 |   border-color: transparent;
 742 |   background: #ff6542;
 743 |   color: white;
 744 | }
 745 | 
 746 | .card-code {
 747 |   position: absolute;
 748 |   right: 14px;
 749 |   bottom: 14px;
 750 |   z-index: 1;
 751 |   font-size: 0.78rem;
 752 |   font-weight: 800;
 753 |   letter-spacing: 0.02em;
 754 | }
 755 | 
 756 | .card-copy {
 757 |   display: grid;
 758 |   gap: 10px;
 759 |   padding: 0 2px 2px;
 760 | }
 761 | 
 762 | .card-location,
 763 | .card-schedule {
 764 |   margin: 0;
 765 |   font-size: 0.85rem;
 766 |   color: var(--muted);
 767 | }
 768 | 
 769 | .meeting-card h3 {
 770 |   margin: 0;
 771 |   font-size: 1.45rem;
 772 |   font-weight: 800;
 773 |   letter-spacing: -0.05em;
 774 |   line-height: 1.2;
 775 | }
 776 | 
 777 | .description-preview {
 778 |   min-height: 46px;
 779 |   margin: 0;
 780 |   font-size: 0.92rem;
 781 | }
 782 | 
 783 | .meta-row,
 784 | .dialog-meta {
 785 |   display: flex;
 786 |   flex-wrap: wrap;
 787 |   gap: 8px;
 788 | }
 789 | 
 790 | .meta-chip {
 791 |   display: inline-flex;
 792 |   align-items: center;
 793 |   justify-content: center;
 794 |   min-height: 30px;
 795 |   padding: 5px 10px;
 796 |   border-radius: 999px;
 797 |   background: var(--surface-muted);
 798 |   border: 1px solid var(--line);
 799 |   font-size: 0.76rem;
 800 |   font-weight: 700;
 801 |   color: var(--text);
 802 | }
 803 | 
 804 | .card-footer {
 805 |   display: grid;
 806 |   gap: 12px;
 807 | }
 808 | 
 809 | .card-actions,
 810 | .dialog-owner-actions {
 811 |   display: flex;
 812 |   flex-wrap: wrap;
 813 |   gap: 8px;
 814 | }
 815 | 
 816 | .card-actions .button,
 817 | .dialog-owner-actions .button {
 818 |   min-height: 38px;
 819 |   padding: 8px 12px;
 820 |   font-size: 0.86rem;
 821 | }
 822 | 
 823 | .utility-grid {
~~~~
- 이 기능이 하는 일: 동적으로 그려지는 카드 목록과 카드 내부 정보 배치를 정의한다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 7. 지도/안내/팝업/푸터
- 범위: 823~969줄
- 기능 원문:
~~~~css
 823 | .utility-grid {
 824 |   display: grid;
 825 |   grid-template-columns: 1.2fr 0.8fr;
 826 |   gap: 20px;
 827 | }
 828 | 
 829 | .map-shell {
 830 |   display: grid;
 831 |   grid-template-columns: 0.92fr 1.08fr;
 832 |   gap: 18px;
 833 |   padding: 24px;
 834 | }
 835 | 
 836 | .map-copy h2,
 837 | .help-box h3,
 838 | .utility-note h3,
 839 | .dialog-description h3 {
 840 |   font-size: 1.65rem;
 841 |   font-weight: 800;
 842 |   letter-spacing: -0.04em;
 843 |   line-height: 1.1;
 844 | }
 845 | 
 846 | .mini-feature-grid {
 847 |   display: grid;
 848 |   grid-template-columns: repeat(2, minmax(0, 1fr));
 849 |   gap: 12px;
 850 |   margin-top: 18px;
 851 | }
 852 | 
 853 | .mini-feature-grid article {
 854 |   padding: 18px;
 855 |   border-radius: 18px;
 856 |   background: var(--surface-muted);
 857 | }
 858 | 
 859 | .mini-feature-grid strong {
 860 |   display: block;
 861 |   margin-bottom: 8px;
 862 |   font-size: 1rem;
 863 |   font-weight: 800;
 864 | }
 865 | 
 866 | .mini-feature-grid p {
 867 |   margin: 0;
 868 | }
 869 | 
 870 | .map-placeholder {
 871 |   min-height: 280px;
 872 |   display: grid;
 873 |   place-items: center;
 874 |   border-radius: 22px;
 875 |   background:
 876 |     radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),
 877 |     linear-gradient(145deg, #f7efe0, #ead8b7);
 878 |   box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);
 879 |   text-align: center;
 880 | }
 881 | 
 882 | .utility-note,
 883 | .help-box {
 884 |   padding: 24px;
 885 | }
 886 | 
 887 | .utility-note ul,
 888 | .help-box ul {
 889 |   margin: 0;
 890 |   padding-left: 18px;
 891 | }
 892 | 
 893 | .empty-state {
 894 |   grid-column: 1 / -1;
 895 |   padding: 28px 22px;
 896 |   border-radius: 20px;
 897 |   border: 1px dashed var(--line-strong);
 898 |   background: var(--surface);
 899 |   color: var(--muted);
 900 |   text-align: center;
 901 | }
 902 | 
 903 | .detail-dialog {
 904 |   width: min(720px, calc(100% - 24px));
 905 |   padding: 0;
 906 |   border: 0;
 907 |   border-radius: 24px;
 908 |   background: var(--surface);
 909 | }
 910 | 
 911 | .detail-dialog::backdrop {
 912 |   background: rgba(17, 17, 17, 0.34);
 913 |   backdrop-filter: blur(3px);
 914 | }
 915 | 
 916 | .dialog-shell {
 917 |   display: grid;
 918 |   gap: 18px;
 919 |   padding: 24px;
 920 | }
 921 | 
 922 | .dialog-header {
 923 |   display: flex;
 924 |   align-items: flex-start;
 925 |   justify-content: space-between;
 926 |   gap: 16px;
 927 | }
 928 | 
 929 | .dialog-description {
 930 |   padding: 20px;
 931 |   border-radius: 20px;
 932 |   background: var(--surface-muted);
 933 | }
 934 | 
 935 | .is-hidden {
 936 |   display: none !important;
 937 | }
 938 | 
 939 | .site-footer {
 940 |   padding: 28px 0 54px;
 941 | }
 942 | 
 943 | .footer-row {
 944 |   display: flex;
 945 |   align-items: center;
 946 |   justify-content: space-between;
 947 |   gap: 24px;
 948 |   padding: 24px 0 0;
 949 |   border-top: 1px solid var(--line);
 950 | }
 951 | 
 952 | .footer-text {
 953 |   max-width: 34rem;
 954 |   margin: 8px 0 0;
 955 | }
 956 | 
 957 | .footer-links {
 958 |   flex-wrap: wrap;
 959 |   justify-content: flex-end;
 960 |   gap: 16px;
 961 | }
 962 | 
 963 | .footer-links a {
 964 |   color: var(--muted);
 965 |   font-size: 0.92rem;
 966 |   font-weight: 700;
 967 | }
 968 | 
 969 | @media (max-width: 1120px) {
~~~~
- 이 기능이 하는 일: 지도 자리, 안내 박스, 상세 팝업, 푸터를 꾸민다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.
### 기능 8. 반응형 규칙
- 범위: 969~1142줄
- 기능 원문:
~~~~css
 969 | @media (max-width: 1120px) {
 970 |   .hero-banner,
 971 |   .utility-grid,
 972 |   .create-shell,
 973 |   .map-shell {
 974 |     grid-template-columns: 1fr;
 975 |   }
 976 | 
 977 |   .shortcut-grid {
 978 |     grid-template-columns: repeat(4, minmax(0, 1fr));
 979 |   }
 980 | 
 981 |   .status-strip,
 982 |   .meeting-list {
 983 |     grid-template-columns: repeat(2, minmax(0, 1fr));
 984 |   }
 985 | 
 986 |   .search-form {
 987 |     grid-template-columns: repeat(3, minmax(0, 1fr));
 988 |   }
 989 | 
 990 |   .hero-orb {
 991 |     position: static;
 992 |     width: min(100%, 420px);
 993 |     margin-inline: auto;
 994 |   }
 995 | 
 996 |   .hero-media {
 997 |     min-height: auto;
 998 |   }
 999 | }
1000 | 
1001 | @media (max-width: 780px) {
1002 |   .nav-row,
1003 |   .brand-group,
1004 |   .footer-row,
1005 |   .section-head,
1006 |   .dialog-header,
1007 |   .card-actions,
1008 |   .dialog-owner-actions,
1009 |   .form-actions,
1010 |   .hero-actions {
1011 |     flex-direction: column;
1012 |     align-items: stretch;
1013 |   }
1014 | 
1015 |   .nav-row,
1016 |   .sub-menu {
1017 |     padding: 14px 0;
1018 |   }
1019 | 
1020 |   .brand-group {
1021 |     gap: 14px;
1022 |   }
1023 | 
1024 |   .header-actions {
1025 |     width: 100%;
1026 |     justify-content: flex-start;
1027 |     gap: 8px;
1028 |   }
1029 | 
1030 |   .hero-banner,
1031 |   .shortcut-shell,
1032 |   .search-form,
1033 |   .map-shell,
1034 |   .utility-note,
1035 |   .help-box,
1036 |   .create-form,
1037 |   .dialog-shell {
1038 |     padding: 18px;
1039 |   }
1040 | 
1041 |   .hero-copy h1 {
1042 |     max-width: none;
1043 |     font-size: clamp(2.5rem, 11vw, 3.3rem);
1044 |   }
1045 | 
1046 |   .hero-teaser-grid,
1047 |   .meeting-list,
1048 |   .mini-feature-grid,
1049 |   .search-form,
1050 |   .create-panel {
1051 |     grid-template-columns: 1fr;
1052 |   }
1053 | 
1054 |   .status-strip {
1055 |     grid-template-columns: repeat(2, minmax(0, 1fr));
1056 |   }
1057 | 
1058 |   .shortcut-grid {
1059 |     grid-template-columns: repeat(4, minmax(0, 1fr));
1060 |   }
1061 | 
1062 |   .hero-orb {
1063 |     width: 100%;
1064 |     border-radius: 32px;
1065 |     aspect-ratio: auto;
1066 |     min-height: 260px;
1067 |     padding: 18px;
1068 |   }
1069 | 
1070 |   .hero-page-indicator {
1071 |     position: static;
1072 |     margin-top: 12px;
1073 |     justify-self: flex-end;
1074 |   }
1075 | 
1076 |   .hero-nav-button {
1077 |     top: 18px;
1078 |     transform: none;
1079 |   }
1080 | 
1081 |   .hero-nav-prev {
1082 |     left: 18px;
1083 |   }
1084 | 
1085 |   .hero-nav-next {
1086 |     right: 18px;
1087 |   }
1088 | 
1089 |   .button,
1090 |   .card-actions .button,
1091 |   .dialog-owner-actions .button {
1092 |     width: 100%;
1093 |   }
1094 | 
1095 |   .footer-links {
1096 |     justify-content: flex-start;
1097 |   }
1098 | }
1099 | 
1100 | @media (max-width: 520px) {
1101 |   .container {
1102 |     width: min(1180px, calc(100% - 24px));
1103 |   }
1104 | 
1105 |   .brand,
1106 |   .footer-brand {
1107 |     font-size: 1.7rem;
1108 |   }
1109 | 
1110 |   .sub-menu {
1111 |     gap: 14px;
1112 |   }
1113 | 
1114 |   .hero-banner {
1115 |     padding: 20px;
1116 |     border-radius: 28px;
1117 |   }
1118 | 
1119 |   .hero-copy h1 {
1120 |     font-size: clamp(2.1rem, 10vw, 2.8rem);
1121 |   }
1122 | 
1123 |   .shortcut-grid {
1124 |     grid-template-columns: repeat(2, minmax(0, 1fr));
1125 |   }
1126 | 
1127 |   .shortcut-tile {
1128 |     min-height: 102px;
1129 |   }
1130 | 
1131 |   .status-strip {
1132 |     grid-template-columns: 1fr;
1133 |   }
1134 | 
1135 |   .meeting-card h3 {
1136 |     font-size: 1.28rem;
1137 |   }
1138 | 
1139 |   .card-poster {
1140 |     min-height: 158px;
1141 |   }
1142 | }
~~~~
- 이 기능이 하는 일: 태블릿과 모바일에서 열 수, 패딩, 버튼 배치를 바꾼다.
- 사용자에게 어떻게 보이는가: 같은 HTML 구조가 어떤 분위기와 배치로 보일지를 결정한다.
- 실행 흐름에서의 역할: HTML이 로드된 직후 브라우저가 스타일 규칙을 계산해 화면 모양에 반영한다.
- 연결되는 파일/요소: `index.html`의 class/id와 `script.js`가 생성하는 카드 마크업에 적용된다.

## 6. 이 파일은 어떤 것과 연결되는가
- HTML ↔ CSS 연결: `index.html`에서 직접 연결된다.
- CSS가 적용되는 HTML 요소: `header.site-header`, `section.hero-section`, `.meeting-card`, `.button`, `.detail-dialog`, `.site-footer` 등이 대표적이다.
- HTML ↔ JS 연결 보조: `script.js`가 동적으로 넣는 카드 HTML도 이 파일의 `.meeting-card`, `.meta-chip`, `.empty-state` 규칙을 그대로 사용한다.
- asset 참조 여부: 현재 이 CSS 안에는 `url(...)`로 불러오는 이미지 자산이 없다.
- 상대경로 사용: CSS 파일 자체는 메인 HTML과 같은 폴더에 있어 단순 파일명 경로로 연결된다.
