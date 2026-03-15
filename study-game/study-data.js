window.STUDY_GAME_DATA = {
  "title": "Teamwork Study Game",
  "files": [
    {
      "id": "index.html",
      "path": "index.html",
      "title": "index.html",
      "kind": "html",
      "role": "메인 페이지의 전체 구조를 정의하는 HTML 파일이다. 헤더, 추천 배너, 검색 폼, 내 모임, 관리 영역, 생성 폼, 상세 팝업까지 한 페이지에 모아 둔다.",
      "whenUsed": "사용자가 사이트 첫 화면에 들어왔을 때 가장 먼저 읽히는 파일이다.",
      "indentGuide": "HTML은 부모 태그 안으로 들어갈수록 보통 두 칸씩 더 들여쓴다. 같은 깊이에 있는 태그끼리는 들여쓰기 폭이 같고, 닫는 태그는 대응하는 여는 태그와 같은 깊이로 맞춘다.",
      "connections": [
        "HTML ↔ CSS 연결: 13줄의 `<link rel=\"stylesheet\" href=\"styles.css\" />`가 메인 스타일을 불러온다.",
        "HTML ↔ JS 연결: 14줄의 `<script src=\"script.js\" defer></script>`가 메인 동작을 불러온다.",
        "JS가 선택하는 요소: `#statusCards`, `#meetingList`, `#searchForm`, `#detailDialog`, `#heroTitle`, `[data-quick-filter]`, `[data-quick-action]` 등이 이 파일 안에 있다.",
        "CSS가 적용되는 요소: `.site-header`, `.hero-banner`, `.shortcut-tile`, `.meeting-list`, `.button`, `.detail-dialog` 같은 class가 `styles.css`의 주요 대상이다.",
        "asset 참조 여부: 현재 메인 HTML은 `assets/` 이미지를 직접 불러오지 않는다.",
        "상대경로 사용: `styles.css`, `script.js`, `login.html` 모두 현재 폴더 기준 상대경로를 사용한다."
      ],
      "badges": [
        "구조",
        "태그",
        "페이지 뼈대"
      ],
      "docPath": "../docs/per-file-deep-explanations/01-index-html.md",
      "sourcePath": "../index.html",
      "lines": [
        {
          "lineNumber": 1,
          "code": "<!DOCTYPE html>",
          "explanation": "HTML5 문서 선언이다. 브라우저가 표준 모드로 해석하도록 돕는다.",
          "indentation": "문서의 바깥쪽 구조 수준이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 2,
          "code": "<html lang=\"ko\">",
          "explanation": "문서 전체를 감싸는 루트 태그다.",
          "indentation": "문서의 바깥쪽 구조 수준이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 3,
          "code": "  <head>",
          "explanation": "브라우저가 먼저 읽는 설정과 리소스 연결 구간이다.",
          "indentation": "부모 태그 안쪽 요소라 2칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 4,
          "code": "    <meta charset=\"UTF-8\" />",
          "explanation": "문서 문자 인코딩을 UTF-8로 지정한다. 한글이 깨지지 않게 해 준다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 5,
          "code": "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
          "explanation": "모바일 화면 폭에 맞춰 페이지가 반응형으로 보이도록 설정한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 6,
          "code": "    <title>모임 주선 웹사이트 뼈대</title>",
          "explanation": "브라우저 탭 제목을 정한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 7,
          "code": "    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />",
          "explanation": "외부 CSS나 폰트 리소스를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 8,
          "code": "    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />",
          "explanation": "외부 CSS나 폰트 리소스를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 9,
          "code": "    <link",
          "explanation": "외부 CSS나 폰트 리소스를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 10,
          "code": "      href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Noto+Sans+KR:wght@400;500;700;800&family=Noto+Serif+KR:wght@500;600;700&display=swap\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 11,
          "code": "      rel=\"stylesheet\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 12,
          "code": "    />",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 13,
          "code": "    <link rel=\"stylesheet\" href=\"styles.css\" />",
          "explanation": "외부 CSS 파일을 연결하는 줄이다. 이 줄이 있어야 스타일이 적용된다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 14,
          "code": "    <script src=\"script.js\" defer></script>",
          "explanation": "외부 JavaScript 파일을 연결하는 줄이다. `defer` 덕분에 HTML을 먼저 읽은 뒤 실행한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 15,
          "code": "  </head>",
          "explanation": "`head` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 2칸이다."
        },
        {
          "lineNumber": 16,
          "code": "  <body>",
          "explanation": "화면에 실제로 보이는 내용을 담는다.",
          "indentation": "부모 태그 안쪽 요소라 2칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 17,
          "code": "    <!-- 탐색형 플랫폼처럼 상단에서 바로 섹션을 고를 수 있는 이중 내비게이션 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 18,
          "code": "    <header class=\"site-header\">",
          "explanation": "상단 소개나 내비게이션 영역을 의미한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 19,
          "code": "      <div class=\"container nav-row\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 20,
          "code": "        <div class=\"brand-group\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 21,
          "code": "          <a class=\"brand\" href=\"#top\">MOIM</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 22,
          "code": "          <nav class=\"menu\">",
          "explanation": "메뉴 링크 묶음임을 의미한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 23,
          "code": "            <a class=\"is-current\" href=\"#search\">모임</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 24,
          "code": "            <a href=\"#mine\">내 모임</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 25,
          "code": "            <a href=\"#manage\">개설 관리</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 26,
          "code": "            <a href=\"#create\">열기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 27,
          "code": "          </nav>",
          "explanation": "`nav` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 28,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 30,
          "code": "        <div class=\"header-actions\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 31,
          "code": "          <a class=\"header-link primary\" href=\"#create\">+ 열기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 32,
          "code": "          <a class=\"header-link\" href=\"login.html\">로그인</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 33,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 34,
          "code": "      </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 36,
          "code": "      <div class=\"sub-nav\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 37,
          "code": "        <div class=\"container sub-menu\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 38,
          "code": "          <button class=\"sub-menu-button is-current\" type=\"button\" data-quick-filter=\"recommend\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 39,
          "code": "            추천",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 40,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 41,
          "code": "          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"today\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 42,
          "code": "            당일",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 43,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 44,
          "code": "          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"small\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 45,
          "code": "            소규모",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 46,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 47,
          "code": "          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"campus\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 48,
          "code": "            캠퍼스",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 49,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 50,
          "code": "          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"sports\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 51,
          "code": "            운동",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 52,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 53,
          "code": "          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"study\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 54,
          "code": "            공부",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 55,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 56,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 57,
          "code": "      </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 58,
          "code": "    </header>",
          "explanation": "`header` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 4칸이다."
        },
        {
          "lineNumber": 60,
          "code": "    <main id=\"top\">",
          "explanation": "문서의 핵심 본문 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 61,
          "code": "      <!-- 긴 설명보다 대표 추천 배너를 먼저 보여 주는 메인 상단 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 62,
          "code": "      <section class=\"hero-section\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 63,
          "code": "        <div class=\"container hero-banner\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 64,
          "code": "          <div class=\"hero-copy\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 65,
          "code": "            <p class=\"hero-kicker\" id=\"heroKicker\">이번 주 추천 모임</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 66,
          "code": "            <h1 id=\"heroTitle\">지금 바로 들어가기 좋은 모임을 한 번에</h1>",
          "explanation": "페이지에서 가장 중요한 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 67,
          "code": "            <p class=\"hero-text\" id=\"heroDescription\">",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 68,
          "code": "              추천 배너, 빠른 기능 타일, 촘촘한 카드형 목록 중심으로 다시",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 69,
          "code": "              정리했습니다. 사용자는 설명을 길게 읽지 않고도 바로 둘러보고",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 70,
          "code": "              참여할 수 있습니다.",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 71,
          "code": "            </p>",
          "explanation": "`p` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 72,
          "code": "            <div class=\"hero-actions\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 73,
          "code": "              <button class=\"button primary\" type=\"button\" id=\"heroDetailButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 74,
          "code": "                자세히 보기",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 75,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 76,
          "code": "              <button class=\"button secondary\" type=\"button\" id=\"heroJoinButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 77,
          "code": "                바로 참여",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 78,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 79,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 80,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 82,
          "code": "          <aside class=\"hero-media\" aria-label=\"추천 모임 미리보기\">",
          "explanation": "보조 정보 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 83,
          "code": "            <button class=\"hero-nav-button hero-nav-prev\" id=\"heroPrevButton\" type=\"button\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 84,
          "code": "              ‹",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 85,
          "code": "            </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 86,
          "code": "            <div class=\"hero-orb\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 87,
          "code": "              <div class=\"hero-teaser-grid\" id=\"featuredTeaserList\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 88,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 89,
          "code": "            <button class=\"hero-nav-button hero-nav-next\" id=\"heroNextButton\" type=\"button\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 90,
          "code": "              ›",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 91,
          "code": "            </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 92,
          "code": "            <p class=\"hero-page-indicator\" id=\"heroPageIndicator\">추천 1 / 6</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 93,
          "code": "          </aside>",
          "explanation": "`aside` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 94,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 95,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 97,
          "code": "      <!-- 작은 아이콘 타일과 숫자 카드로 핵심 기능을 짧게 보여 주는 영역 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 98,
          "code": "      <section class=\"dashboard-section\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 99,
          "code": "        <div class=\"container\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 100,
          "code": "          <div class=\"status-strip\" id=\"statusCards\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 102,
          "code": "          <div class=\"shortcut-shell\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 103,
          "code": "            <div class=\"shortcut-grid\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 104,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"recommend\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 105,
          "code": "                <span class=\"shortcut-icon tone-peach\">추</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 106,
          "code": "                <strong>추천 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 107,
          "code": "                <p>바로 보기</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 108,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 109,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"small\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 110,
          "code": "                <span class=\"shortcut-icon tone-yellow\">소</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 111,
          "code": "                <strong>소규모 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 112,
          "code": "                <p>가볍게 참여</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 113,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 114,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"today\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 115,
          "code": "                <span class=\"shortcut-icon tone-blue\">당</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 116,
          "code": "                <strong>당일 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 117,
          "code": "                <p>오늘 바로</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 118,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 119,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"weekend\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 120,
          "code": "                <span class=\"shortcut-icon tone-pink\">주</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 121,
          "code": "                <strong>주말 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 122,
          "code": "                <p>이번 주말</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 123,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 124,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"campus\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 125,
          "code": "                <span class=\"shortcut-icon tone-green\">캠</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 126,
          "code": "                <strong>캠퍼스 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 127,
          "code": "                <p>학교 근처</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 128,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 129,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"social\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 130,
          "code": "                <span class=\"shortcut-icon tone-orange\">취</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 131,
          "code": "                <strong>취향 찾기</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 132,
          "code": "                <p>관심사별</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 133,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 134,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"mine\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 135,
          "code": "                <span class=\"shortcut-icon tone-purple\">내</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 136,
          "code": "                <strong>내 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 137,
          "code": "                <p>참여 현황</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 138,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 139,
          "code": "              <button class=\"shortcut-tile\" type=\"button\" data-quick-action=\"create\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 140,
          "code": "                <span class=\"shortcut-icon tone-dark\">열</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 141,
          "code": "                <strong>모임 열기</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 142,
          "code": "                <p>직접 개설</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 143,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 144,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 145,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 146,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 147,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 149,
          "code": "      <!-- 추천 모임을 촘촘한 타일 카드로 보여 주는 메인 탐색 섹션 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 150,
          "code": "      <section class=\"search-section section-block\" id=\"search\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 151,
          "code": "        <div class=\"container\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 152,
          "code": "          <div class=\"section-head\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 153,
          "code": "            <div class=\"section-title\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 154,
          "code": "              <p class=\"eyebrow\">추천 모임</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 155,
          "code": "              <h2>지금 둘러보기 좋은 모임 타일</h2>",
          "explanation": "섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 156,
          "code": "              <p>검색은 유지하고, 정보는 더 작고 빠르게 읽히는 카드로 정리했습니다.</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 157,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 158,
          "code": "            <a class=\"more-link\" href=\"#create\">모임 열기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 159,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 161,
          "code": "          <form class=\"search-form search-panel\" id=\"searchForm\">",
          "explanation": "입력 요소를 하나의 제출 단위로 묶는다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 162,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 163,
          "code": "              키워드",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 164,
          "code": "              <input",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 165,
          "code": "                type=\"text\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 166,
          "code": "                id=\"keyword\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 167,
          "code": "                placeholder=\"예: 축구, 스터디, 맛집\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 168,
          "code": "              />",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 169,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 171,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 172,
          "code": "              카테고리",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 173,
          "code": "              <select id=\"category\">",
          "explanation": "폼 입력 요소 줄이다. 여러 값 중 하나를 고르는 드롭다운이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 174,
          "code": "                <option value=\"all\">전체</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 175,
          "code": "                <option value=\"운동\">운동</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 176,
          "code": "                <option value=\"공부\">공부</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 177,
          "code": "                <option value=\"친목\">친목</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 178,
          "code": "                <option value=\"게임\">게임</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 179,
          "code": "              </select>",
          "explanation": "`select` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 180,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 182,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 183,
          "code": "              지역",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 184,
          "code": "              <select id=\"location\">",
          "explanation": "폼 입력 요소 줄이다. 여러 값 중 하나를 고르는 드롭다운이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 185,
          "code": "                <option value=\"all\">전체</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 186,
          "code": "                <option value=\"시내권\">시내권</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 187,
          "code": "                <option value=\"생활권\">생활권</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 188,
          "code": "                <option value=\"캠퍼스\">캠퍼스</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 189,
          "code": "              </select>",
          "explanation": "`select` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 190,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 192,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 193,
          "code": "              상태",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 194,
          "code": "              <select id=\"statusFilter\">",
          "explanation": "폼 입력 요소 줄이다. 여러 값 중 하나를 고르는 드롭다운이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 195,
          "code": "                <option value=\"all\">전체</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 196,
          "code": "                <option value=\"open\">모집중</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 197,
          "code": "                <option value=\"mine\">참여중</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 198,
          "code": "                <option value=\"closed\">마감</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 199,
          "code": "              </select>",
          "explanation": "`select` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 200,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 202,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 203,
          "code": "              정렬",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 204,
          "code": "              <select id=\"sortOrder\">",
          "explanation": "폼 입력 요소 줄이다. 여러 값 중 하나를 고르는 드롭다운이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 205,
          "code": "                <option value=\"soon\">가까운 날짜 순</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 206,
          "code": "                <option value=\"late\">늦은 날짜 순</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 207,
          "code": "                <option value=\"seats\">남은 자리 많은 순</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 208,
          "code": "                <option value=\"popular\">참여 인원 많은 순</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 209,
          "code": "              </select>",
          "explanation": "`select` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 210,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 212,
          "code": "            <div class=\"form-actions\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 213,
          "code": "              <button type=\"submit\" class=\"button primary\">검색</button>",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 214,
          "code": "              <button type=\"button\" class=\"button secondary\" id=\"resetButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 215,
          "code": "                초기화",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 216,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 217,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 218,
          "code": "          </form>",
          "explanation": "`form` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 220,
          "code": "          <p class=\"result-summary\" id=\"searchResultText\"></p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 221,
          "code": "          <div class=\"meeting-list\" id=\"meetingList\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 222,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 223,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 225,
          "code": "      <!-- 참여 중인 모임도 같은 타일 형식으로 이어서 보여 준다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 226,
          "code": "      <section class=\"section-block collection-section\" id=\"mine\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 227,
          "code": "        <div class=\"container\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 228,
          "code": "          <div class=\"section-head\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 229,
          "code": "            <div class=\"section-title\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 230,
          "code": "              <p class=\"eyebrow\">내 모임</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 231,
          "code": "              <h2>내가 참여 중인 모임</h2>",
          "explanation": "섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 232,
          "code": "              <p>전체 목록과 별개로, 현재 들어가 있는 모임만 따로 확인합니다.</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 233,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 234,
          "code": "            <a class=\"more-link\" href=\"#search\">전체 보기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 235,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 236,
          "code": "          <div class=\"meeting-list mine-list\" id=\"myMeetingList\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 237,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 238,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 240,
          "code": "      <!-- 개설한 모임은 관리 버튼이 붙은 전용 타일 영역으로 분리한다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 241,
          "code": "      <section class=\"section-block collection-section\" id=\"manage\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 242,
          "code": "        <div class=\"container\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 243,
          "code": "          <div class=\"section-head\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 244,
          "code": "            <div class=\"section-title\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 245,
          "code": "              <p class=\"eyebrow\">개설 관리</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 246,
          "code": "              <h2>내가 연 모임 관리</h2>",
          "explanation": "섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 247,
          "code": "              <p>수정과 삭제는 내가 직접 개설한 모임에서만 가능하게 유지합니다.</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 248,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 249,
          "code": "            <a class=\"more-link\" href=\"#create\">새로 열기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 250,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 251,
          "code": "          <div class=\"meeting-list manage-list\" id=\"managedMeetingList\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 252,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 253,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 255,
          "code": "      <!-- 아직 미구현인 지도 기능도 같은 플랫폼 톤으로 압축해 둔다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 256,
          "code": "      <section class=\"section-block utility-section\" id=\"map\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 257,
          "code": "        <div class=\"container utility-grid\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 258,
          "code": "          <div class=\"utility-panel map-shell\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 259,
          "code": "            <div class=\"map-copy\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 260,
          "code": "              <p class=\"eyebrow\">곧 붙을 기능</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 261,
          "code": "              <h2>주변 모임 지도 자리</h2>",
          "explanation": "섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 262,
          "code": "              <p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 263,
          "code": "                지도 API는 아직 붙이지 않았지만, 주변 모임과 입장 권한이 들어갈",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 264,
          "code": "                자리를 미리 남겨 두었습니다.",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 265,
          "code": "              </p>",
          "explanation": "`p` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 267,
          "code": "              <div class=\"mini-feature-grid\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 268,
          "code": "                <article>",
          "explanation": "독립된 카드나 정보 단위를 의미한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 269,
          "code": "                  <strong>주변 모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 270,
          "code": "                  <p>근처 모임을 한 번에 모아보기</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 271,
          "code": "                </article>",
          "explanation": "`article` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 16칸이다."
        },
        {
          "lineNumber": 272,
          "code": "                <article>",
          "explanation": "독립된 카드나 정보 단위를 의미한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 273,
          "code": "                  <strong>입장 권한</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 274,
          "code": "                  <p>모임장 기준 권한 확장 예정</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 275,
          "code": "                </article>",
          "explanation": "`article` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 16칸이다."
        },
        {
          "lineNumber": 276,
          "code": "              </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 277,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 279,
          "code": "            <div class=\"map-placeholder\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 280,
          "code": "              <div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 281,
          "code": "                <strong>MAP PLACEHOLDER</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 282,
          "code": "                <p>카카오맵 또는 네이버맵 연결 예정</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 283,
          "code": "              </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 284,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 285,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 287,
          "code": "          <aside class=\"utility-note\">",
          "explanation": "보조 정보 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 288,
          "code": "            <p class=\"eyebrow\">진행 상태</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 289,
          "code": "            <h3>웹은 먼저, API는 다음 단계</h3>",
          "explanation": "하위 섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 290,
          "code": "            <ul>",
          "explanation": "순서 없는 목록이다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 291,
          "code": "              <li>4월까지는 뼈대와 화면 흐름을 안정화합니다.</li>",
          "explanation": "목록 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 292,
          "code": "              <li>5월 이후 지도, 결제, 채팅, 로그인 인증이 들어갈 수 있습니다.</li>",
          "explanation": "목록 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 293,
          "code": "              <li>DB 팀원과 붙을 수 있도록 화면용 데이터 형식을 먼저 정리해 둡니다.</li>",
          "explanation": "목록 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 294,
          "code": "            </ul>",
          "explanation": "`ul` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 295,
          "code": "          </aside>",
          "explanation": "`aside` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 296,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 297,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 299,
          "code": "      <!-- 입력 폼은 그대로 유지하되 카드형 관리 화면 톤에 맞춰 압축한다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 300,
          "code": "      <section class=\"section-block create-section\" id=\"create\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 301,
          "code": "        <div class=\"container create-shell\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 302,
          "code": "          <div class=\"create-copy\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 303,
          "code": "            <div class=\"section-title\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 304,
          "code": "              <p class=\"eyebrow\">모임 열기</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 305,
          "code": "              <h2 id=\"formTitle\">새 모임 개설하기</h2>",
          "explanation": "섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 306,
          "code": "              <p id=\"formModeText\">",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 307,
          "code": "                지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 308,
          "code": "                바로 추가됩니다.",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 309,
          "code": "              </p>",
          "explanation": "`p` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 310,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 312,
          "code": "            <div class=\"help-box\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 313,
          "code": "              <h3>현재 폼에서 되는 것</h3>",
          "explanation": "하위 섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 314,
          "code": "              <ul>",
          "explanation": "순서 없는 목록이다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 315,
          "code": "                <li>새 모임 추가</li>",
          "explanation": "목록 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 316,
          "code": "                <li>기존 모임 수정 모드 전환</li>",
          "explanation": "목록 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 317,
          "code": "                <li>브라우저 저장으로 새로고침 후 유지</li>",
          "explanation": "목록 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 318,
          "code": "              </ul>",
          "explanation": "`ul` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 319,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 320,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 322,
          "code": "          <form class=\"create-form create-panel\" id=\"createForm\">",
          "explanation": "입력 요소를 하나의 제출 단위로 묶는다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 323,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 324,
          "code": "              모임 이름",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 325,
          "code": "              <input type=\"text\" id=\"newTitle\" placeholder=\"예: 주말 농구 모임\" required />",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 326,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 328,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 329,
          "code": "              카테고리",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 330,
          "code": "              <select id=\"newCategory\" required>",
          "explanation": "폼 입력 요소 줄이다. 여러 값 중 하나를 고르는 드롭다운이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 331,
          "code": "                <option value=\"운동\">운동</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 332,
          "code": "                <option value=\"공부\">공부</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 333,
          "code": "                <option value=\"친목\">친목</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 334,
          "code": "                <option value=\"게임\">게임</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 335,
          "code": "              </select>",
          "explanation": "`select` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 336,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 338,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 339,
          "code": "              지역",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 340,
          "code": "              <select id=\"newLocation\" required>",
          "explanation": "폼 입력 요소 줄이다. 여러 값 중 하나를 고르는 드롭다운이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 341,
          "code": "                <option value=\"시내권\">시내권</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 342,
          "code": "                <option value=\"생활권\">생활권</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 343,
          "code": "                <option value=\"캠퍼스\">캠퍼스</option>",
          "explanation": "select 안에서 선택 가능한 항목 하나다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 344,
          "code": "              </select>",
          "explanation": "`select` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 345,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 347,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 348,
          "code": "              날짜",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 349,
          "code": "              <input type=\"date\" id=\"newDate\" required />",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 350,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 352,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 353,
          "code": "              주최자 이름",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 354,
          "code": "              <input type=\"text\" id=\"newOrganizer\" placeholder=\"예: 운영자 A\" required />",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 355,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 357,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 358,
          "code": "              모집 인원",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 359,
          "code": "              <input type=\"number\" id=\"newCapacity\" min=\"2\" max=\"99\" value=\"10\" required />",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 360,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 362,
          "code": "            <label>",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 363,
          "code": "              참가비",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 364,
          "code": "              <input type=\"text\" id=\"newFee\" placeholder=\"예: 무료, 5,000원\" required />",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 365,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 367,
          "code": "            <label class=\"full-span\">",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 368,
          "code": "              모임 설명",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 369,
          "code": "              <textarea",
          "explanation": "폼 입력 요소 줄이다. 여러 줄 텍스트 입력칸이다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 370,
          "code": "                id=\"newDescription\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 371,
          "code": "                rows=\"5\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 372,
          "code": "                placeholder=\"이 모임에서 무엇을 하는지 적어주세요.\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 373,
          "code": "                required",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 374,
          "code": "              ></textarea>",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 375,
          "code": "            </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 377,
          "code": "            <div class=\"form-actions\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 378,
          "code": "              <button type=\"submit\" class=\"button primary\" id=\"submitButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 379,
          "code": "                모임 추가",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 380,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 381,
          "code": "              <button",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 382,
          "code": "                type=\"button\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 383,
          "code": "                class=\"button secondary is-hidden\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 384,
          "code": "                id=\"cancelEditButton\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 385,
          "code": "              >",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 14칸 들여썼다."
        },
        {
          "lineNumber": 386,
          "code": "                수정 취소",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 16칸 들여썼다."
        },
        {
          "lineNumber": 387,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 388,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 389,
          "code": "          </form>",
          "explanation": "`form` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 390,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 391,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 392,
          "code": "    </main>",
          "explanation": "`main` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 4칸이다."
        },
        {
          "lineNumber": 394,
          "code": "    <!-- 카드에는 짧은 정보만 남기고, 자세한 내용은 팝업에서 풀어 보여 준다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 395,
          "code": "    <dialog class=\"detail-dialog\" id=\"detailDialog\">",
          "explanation": "모달 팝업에 쓰는 HTML 요소다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 396,
          "code": "      <div class=\"dialog-shell\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 397,
          "code": "        <div class=\"dialog-header\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 398,
          "code": "          <div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 399,
          "code": "            <p class=\"eyebrow\">모임 상세 정보</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 400,
          "code": "            <h2 id=\"dialogTitle\"></h2>",
          "explanation": "섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 401,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 402,
          "code": "          <button type=\"button\" class=\"button secondary\" id=\"closeDialogButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 403,
          "code": "            닫기",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 404,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 405,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 407,
          "code": "        <div class=\"dialog-meta\" id=\"dialogMeta\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 409,
          "code": "        <section class=\"dialog-description\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 410,
          "code": "          <h3>모임 소개</h3>",
          "explanation": "하위 섹션 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 411,
          "code": "          <p id=\"dialogDescription\"></p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 412,
          "code": "        </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 414,
          "code": "        <div class=\"dialog-owner-actions is-hidden\" id=\"dialogOwnerActions\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 415,
          "code": "          <button type=\"button\" class=\"button secondary\" id=\"dialogEditButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 416,
          "code": "            수정",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 417,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 418,
          "code": "          <button type=\"button\" class=\"button danger\" id=\"dialogDeleteButton\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 419,
          "code": "            삭제",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 420,
          "code": "          </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 421,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 422,
          "code": "      </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 423,
          "code": "    </dialog>",
          "explanation": "`dialog` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 4칸이다."
        },
        {
          "lineNumber": 425,
          "code": "    <footer class=\"site-footer\">",
          "explanation": "하단 요약 정보와 링크를 담는다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 426,
          "code": "      <div class=\"container footer-row\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 427,
          "code": "        <div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 428,
          "code": "          <p class=\"footer-brand\">MOIM</p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 429,
          "code": "          <p class=\"footer-text\">",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 430,
          "code": "            추천 배너, 빠른 기능 타일, 촘촘한 카드형 목록을 중심으로 다시 정리한",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 431,
          "code": "            웹 프로토타입입니다.",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 432,
          "code": "          </p>",
          "explanation": "`p` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 433,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 435,
          "code": "        <div class=\"footer-links\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 436,
          "code": "          <a href=\"#search\">추천 모임</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 437,
          "code": "          <a href=\"#mine\">내 모임</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 438,
          "code": "          <a href=\"#create\">모임 열기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 439,
          "code": "          <a href=\"login.html\">로그인</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 440,
          "code": "        </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 441,
          "code": "      </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 442,
          "code": "    </footer>",
          "explanation": "`footer` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 4칸이다."
        },
        {
          "lineNumber": 443,
          "code": "  </body>",
          "explanation": "`body` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 2칸이다."
        },
        {
          "lineNumber": 444,
          "code": "</html>",
          "explanation": "`html` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "문서의 바깥쪽 구조 수준이라 들여쓰지 않았다."
        }
      ],
      "blocks": [
        {
          "label": "구조 블록 `<header class=\"site-header\">`",
          "start": 18,
          "end": 59,
          "snippet": "    <header class=\"site-header\">\n      <div class=\"container nav-row\">\n        <div class=\"brand-group\">\n          <a class=\"brand\" href=\"#top\">MOIM</a>\n          <nav class=\"menu\">\n            <a class=\"is-current\" href=\"#search\">모임</a>\n            <a href=\"#mine\">내 모임</a>\n            <a href=\"#manage\">개설 관리</a>\n            <a href=\"#create\">열기</a>\n          </nav>\n        </div>\n\n        <div class=\"header-actions\">\n          <a class=\"header-link primary\" href=\"#create\">+ 열기</a>\n          <a class=\"header-link\" href=\"login.html\">로그인</a>\n        </div>\n      </div>\n\n      <div class=\"sub-nav\">\n        <div class=\"container sub-menu\">\n          <button class=\"sub-menu-button is-current\" type=\"button\" data-quick-filter=\"recommend\">\n            추천\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"today\">\n            당일\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"small\">\n            소규모\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"campus\">\n            캠퍼스\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"sports\">\n            운동\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"study\">\n            공부\n          </button>\n        </div>\n      </div>\n    </header>\n",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<main id=\"top\">`",
          "start": 60,
          "end": 61,
          "snippet": "    <main id=\"top\">\n      <!-- 긴 설명보다 대표 추천 배너를 먼저 보여 주는 메인 상단 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"hero-section\">`",
          "start": 62,
          "end": 97,
          "snippet": "      <section class=\"hero-section\">\n        <div class=\"container hero-banner\">\n          <div class=\"hero-copy\">\n            <p class=\"hero-kicker\" id=\"heroKicker\">이번 주 추천 모임</p>\n            <h1 id=\"heroTitle\">지금 바로 들어가기 좋은 모임을 한 번에</h1>\n            <p class=\"hero-text\" id=\"heroDescription\">\n              추천 배너, 빠른 기능 타일, 촘촘한 카드형 목록 중심으로 다시\n              정리했습니다. 사용자는 설명을 길게 읽지 않고도 바로 둘러보고\n              참여할 수 있습니다.\n            </p>\n            <div class=\"hero-actions\">\n              <button class=\"button primary\" type=\"button\" id=\"heroDetailButton\">\n                자세히 보기\n              </button>\n              <button class=\"button secondary\" type=\"button\" id=\"heroJoinButton\">\n                바로 참여\n              </button>\n            </div>\n          </div>\n\n          <aside class=\"hero-media\" aria-label=\"추천 모임 미리보기\">\n            <button class=\"hero-nav-button hero-nav-prev\" id=\"heroPrevButton\" type=\"button\">\n              ‹\n            </button>\n            <div class=\"hero-orb\">\n              <div class=\"hero-teaser-grid\" id=\"featuredTeaserList\"></div>\n            </div>\n            <button class=\"hero-nav-button hero-nav-next\" id=\"heroNextButton\" type=\"button\">\n              ›\n            </button>\n            <p class=\"hero-page-indicator\" id=\"heroPageIndicator\">추천 1 / 6</p>\n          </aside>\n        </div>\n      </section>\n\n      <!-- 작은 아이콘 타일과 숫자 카드로 핵심 기능을 짧게 보여 주는 영역 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"dashboard-section\">`",
          "start": 98,
          "end": 149,
          "snippet": "      <section class=\"dashboard-section\">\n        <div class=\"container\">\n          <div class=\"status-strip\" id=\"statusCards\"></div>\n\n          <div class=\"shortcut-shell\">\n            <div class=\"shortcut-grid\">\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"recommend\">\n                <span class=\"shortcut-icon tone-peach\">추</span>\n                <strong>추천 모임</strong>\n                <p>바로 보기</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"small\">\n                <span class=\"shortcut-icon tone-yellow\">소</span>\n                <strong>소규모 모임</strong>\n                <p>가볍게 참여</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"today\">\n                <span class=\"shortcut-icon tone-blue\">당</span>\n                <strong>당일 모임</strong>\n                <p>오늘 바로</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"weekend\">\n                <span class=\"shortcut-icon tone-pink\">주</span>\n                <strong>주말 모임</strong>\n                <p>이번 주말</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"campus\">\n                <span class=\"shortcut-icon tone-green\">캠</span>\n                <strong>캠퍼스 모임</strong>\n                <p>학교 근처</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"social\">\n                <span class=\"shortcut-icon tone-orange\">취</span>\n                <strong>취향 찾기</strong>\n                <p>관심사별</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"mine\">\n                <span class=\"shortcut-icon tone-purple\">내</span>\n                <strong>내 모임</strong>\n                <p>참여 현황</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-action=\"create\">\n                <span class=\"shortcut-icon tone-dark\">열</span>\n                <strong>모임 열기</strong>\n                <p>직접 개설</p>\n              </button>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- 추천 모임을 촘촘한 타일 카드로 보여 주는 메인 탐색 섹션 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"search-section section-block\" id=\"search\">`",
          "start": 150,
          "end": 225,
          "snippet": "      <section class=\"search-section section-block\" id=\"search\">\n        <div class=\"container\">\n          <div class=\"section-head\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">추천 모임</p>\n              <h2>지금 둘러보기 좋은 모임 타일</h2>\n              <p>검색은 유지하고, 정보는 더 작고 빠르게 읽히는 카드로 정리했습니다.</p>\n            </div>\n            <a class=\"more-link\" href=\"#create\">모임 열기</a>\n          </div>\n\n          <form class=\"search-form search-panel\" id=\"searchForm\">\n            <label>\n              키워드\n              <input\n                type=\"text\"\n                id=\"keyword\"\n                placeholder=\"예: 축구, 스터디, 맛집\"\n              />\n            </label>\n\n            <label>\n              카테고리\n              <select id=\"category\">\n                <option value=\"all\">전체</option>\n                <option value=\"운동\">운동</option>\n                <option value=\"공부\">공부</option>\n                <option value=\"친목\">친목</option>\n                <option value=\"게임\">게임</option>\n              </select>\n            </label>\n\n            <label>\n              지역\n              <select id=\"location\">\n                <option value=\"all\">전체</option>\n                <option value=\"시내권\">시내권</option>\n                <option value=\"생활권\">생활권</option>\n                <option value=\"캠퍼스\">캠퍼스</option>\n              </select>\n            </label>\n\n            <label>\n              상태\n              <select id=\"statusFilter\">\n                <option value=\"all\">전체</option>\n                <option value=\"open\">모집중</option>\n                <option value=\"mine\">참여중</option>\n                <option value=\"closed\">마감</option>\n              </select>\n            </label>\n\n            <label>\n              정렬\n              <select id=\"sortOrder\">\n                <option value=\"soon\">가까운 날짜 순</option>\n                <option value=\"late\">늦은 날짜 순</option>\n                <option value=\"seats\">남은 자리 많은 순</option>\n                <option value=\"popular\">참여 인원 많은 순</option>\n              </select>\n            </label>\n\n            <div class=\"form-actions\">\n              <button type=\"submit\" class=\"button primary\">검색</button>\n              <button type=\"button\" class=\"button secondary\" id=\"resetButton\">\n                초기화\n              </button>\n            </div>\n          </form>\n\n          <p class=\"result-summary\" id=\"searchResultText\"></p>\n          <div class=\"meeting-list\" id=\"meetingList\"></div>\n        </div>\n      </section>\n\n      <!-- 참여 중인 모임도 같은 타일 형식으로 이어서 보여 준다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"section-block collection-section\" id=\"mine\">`",
          "start": 226,
          "end": 240,
          "snippet": "      <section class=\"section-block collection-section\" id=\"mine\">\n        <div class=\"container\">\n          <div class=\"section-head\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">내 모임</p>\n              <h2>내가 참여 중인 모임</h2>\n              <p>전체 목록과 별개로, 현재 들어가 있는 모임만 따로 확인합니다.</p>\n            </div>\n            <a class=\"more-link\" href=\"#search\">전체 보기</a>\n          </div>\n          <div class=\"meeting-list mine-list\" id=\"myMeetingList\"></div>\n        </div>\n      </section>\n\n      <!-- 개설한 모임은 관리 버튼이 붙은 전용 타일 영역으로 분리한다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"section-block collection-section\" id=\"manage\">`",
          "start": 241,
          "end": 255,
          "snippet": "      <section class=\"section-block collection-section\" id=\"manage\">\n        <div class=\"container\">\n          <div class=\"section-head\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">개설 관리</p>\n              <h2>내가 연 모임 관리</h2>\n              <p>수정과 삭제는 내가 직접 개설한 모임에서만 가능하게 유지합니다.</p>\n            </div>\n            <a class=\"more-link\" href=\"#create\">새로 열기</a>\n          </div>\n          <div class=\"meeting-list manage-list\" id=\"managedMeetingList\"></div>\n        </div>\n      </section>\n\n      <!-- 아직 미구현인 지도 기능도 같은 플랫폼 톤으로 압축해 둔다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"section-block utility-section\" id=\"map\">`",
          "start": 256,
          "end": 299,
          "snippet": "      <section class=\"section-block utility-section\" id=\"map\">\n        <div class=\"container utility-grid\">\n          <div class=\"utility-panel map-shell\">\n            <div class=\"map-copy\">\n              <p class=\"eyebrow\">곧 붙을 기능</p>\n              <h2>주변 모임 지도 자리</h2>\n              <p>\n                지도 API는 아직 붙이지 않았지만, 주변 모임과 입장 권한이 들어갈\n                자리를 미리 남겨 두었습니다.\n              </p>\n\n              <div class=\"mini-feature-grid\">\n                <article>\n                  <strong>주변 모임</strong>\n                  <p>근처 모임을 한 번에 모아보기</p>\n                </article>\n                <article>\n                  <strong>입장 권한</strong>\n                  <p>모임장 기준 권한 확장 예정</p>\n                </article>\n              </div>\n            </div>\n\n            <div class=\"map-placeholder\">\n              <div>\n                <strong>MAP PLACEHOLDER</strong>\n                <p>카카오맵 또는 네이버맵 연결 예정</p>\n              </div>\n            </div>\n          </div>\n\n          <aside class=\"utility-note\">\n            <p class=\"eyebrow\">진행 상태</p>\n            <h3>웹은 먼저, API는 다음 단계</h3>\n            <ul>\n              <li>4월까지는 뼈대와 화면 흐름을 안정화합니다.</li>\n              <li>5월 이후 지도, 결제, 채팅, 로그인 인증이 들어갈 수 있습니다.</li>\n              <li>DB 팀원과 붙을 수 있도록 화면용 데이터 형식을 먼저 정리해 둡니다.</li>\n            </ul>\n          </aside>\n        </div>\n      </section>\n\n      <!-- 입력 폼은 그대로 유지하되 카드형 관리 화면 톤에 맞춰 압축한다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"section-block create-section\" id=\"create\">`",
          "start": 300,
          "end": 394,
          "snippet": "      <section class=\"section-block create-section\" id=\"create\">\n        <div class=\"container create-shell\">\n          <div class=\"create-copy\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">모임 열기</p>\n              <h2 id=\"formTitle\">새 모임 개설하기</h2>\n              <p id=\"formModeText\">\n                지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에\n                바로 추가됩니다.\n              </p>\n            </div>\n\n            <div class=\"help-box\">\n              <h3>현재 폼에서 되는 것</h3>\n              <ul>\n                <li>새 모임 추가</li>\n                <li>기존 모임 수정 모드 전환</li>\n                <li>브라우저 저장으로 새로고침 후 유지</li>\n              </ul>\n            </div>\n          </div>\n\n          <form class=\"create-form create-panel\" id=\"createForm\">\n            <label>\n              모임 이름\n              <input type=\"text\" id=\"newTitle\" placeholder=\"예: 주말 농구 모임\" required />\n            </label>\n\n            <label>\n              카테고리\n              <select id=\"newCategory\" required>\n                <option value=\"운동\">운동</option>\n                <option value=\"공부\">공부</option>\n                <option value=\"친목\">친목</option>\n                <option value=\"게임\">게임</option>\n              </select>\n            </label>\n\n            <label>\n              지역\n              <select id=\"newLocation\" required>\n                <option value=\"시내권\">시내권</option>\n                <option value=\"생활권\">생활권</option>\n                <option value=\"캠퍼스\">캠퍼스</option>\n              </select>\n            </label>\n\n            <label>\n              날짜\n              <input type=\"date\" id=\"newDate\" required />\n            </label>\n\n            <label>\n              주최자 이름\n              <input type=\"text\" id=\"newOrganizer\" placeholder=\"예: 운영자 A\" required />\n            </label>\n\n            <label>\n              모집 인원\n              <input type=\"number\" id=\"newCapacity\" min=\"2\" max=\"99\" value=\"10\" required />\n            </label>\n\n            <label>\n              참가비\n              <input type=\"text\" id=\"newFee\" placeholder=\"예: 무료, 5,000원\" required />\n            </label>\n\n            <label class=\"full-span\">\n              모임 설명\n              <textarea\n                id=\"newDescription\"\n                rows=\"5\"\n                placeholder=\"이 모임에서 무엇을 하는지 적어주세요.\"\n                required\n              ></textarea>\n            </label>\n\n            <div class=\"form-actions\">\n              <button type=\"submit\" class=\"button primary\" id=\"submitButton\">\n                모임 추가\n              </button>\n              <button\n                type=\"button\"\n                class=\"button secondary is-hidden\"\n                id=\"cancelEditButton\"\n              >\n                수정 취소\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>\n    </main>\n\n    <!-- 카드에는 짧은 정보만 남기고, 자세한 내용은 팝업에서 풀어 보여 준다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<dialog class=\"detail-dialog\" id=\"detailDialog\">`",
          "start": 395,
          "end": 408,
          "snippet": "    <dialog class=\"detail-dialog\" id=\"detailDialog\">\n      <div class=\"dialog-shell\">\n        <div class=\"dialog-header\">\n          <div>\n            <p class=\"eyebrow\">모임 상세 정보</p>\n            <h2 id=\"dialogTitle\"></h2>\n          </div>\n          <button type=\"button\" class=\"button secondary\" id=\"closeDialogButton\">\n            닫기\n          </button>\n        </div>\n\n        <div class=\"dialog-meta\" id=\"dialogMeta\"></div>\n",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"dialog-description\">`",
          "start": 409,
          "end": 424,
          "snippet": "        <section class=\"dialog-description\">\n          <h3>모임 소개</h3>\n          <p id=\"dialogDescription\"></p>\n        </section>\n\n        <div class=\"dialog-owner-actions is-hidden\" id=\"dialogOwnerActions\">\n          <button type=\"button\" class=\"button secondary\" id=\"dialogEditButton\">\n            수정\n          </button>\n          <button type=\"button\" class=\"button danger\" id=\"dialogDeleteButton\">\n            삭제\n          </button>\n        </div>\n      </div>\n    </dialog>\n",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<footer class=\"site-footer\">`",
          "start": 425,
          "end": 444,
          "snippet": "    <footer class=\"site-footer\">\n      <div class=\"container footer-row\">\n        <div>\n          <p class=\"footer-brand\">MOIM</p>\n          <p class=\"footer-text\">\n            추천 배너, 빠른 기능 타일, 촘촘한 카드형 목록을 중심으로 다시 정리한\n            웹 프로토타입입니다.\n          </p>\n        </div>\n\n        <div class=\"footer-links\">\n          <a href=\"#search\">추천 모임</a>\n          <a href=\"#mine\">내 모임</a>\n          <a href=\"#create\">모임 열기</a>\n          <a href=\"login.html\">로그인</a>\n        </div>\n      </div>\n    </footer>\n  </body>\n</html>",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        }
      ],
      "features": [
        {
          "label": "문서 head와 리소스 로드",
          "start": 3,
          "end": 15,
          "snippet": "  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>모임 주선 웹사이트 뼈대</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Noto+Sans+KR:wght@400;500;700;800&family=Noto+Serif+KR:wght@500;600;700&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"styles.css\" />\n    <script src=\"script.js\" defer></script>\n  </head>",
          "description": "문서 메타 정보, 웹폰트, 메인 CSS, 메인 JS를 연결하는 준비 구간이다."
        },
        {
          "label": "상단 헤더와 이중 내비게이션",
          "start": 18,
          "end": 58,
          "snippet": "    <header class=\"site-header\">\n      <div class=\"container nav-row\">\n        <div class=\"brand-group\">\n          <a class=\"brand\" href=\"#top\">MOIM</a>\n          <nav class=\"menu\">\n            <a class=\"is-current\" href=\"#search\">모임</a>\n            <a href=\"#mine\">내 모임</a>\n            <a href=\"#manage\">개설 관리</a>\n            <a href=\"#create\">열기</a>\n          </nav>\n        </div>\n\n        <div class=\"header-actions\">\n          <a class=\"header-link primary\" href=\"#create\">+ 열기</a>\n          <a class=\"header-link\" href=\"login.html\">로그인</a>\n        </div>\n      </div>\n\n      <div class=\"sub-nav\">\n        <div class=\"container sub-menu\">\n          <button class=\"sub-menu-button is-current\" type=\"button\" data-quick-filter=\"recommend\">\n            추천\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"today\">\n            당일\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"small\">\n            소규모\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"campus\">\n            캠퍼스\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"sports\">\n            운동\n          </button>\n          <button class=\"sub-menu-button\" type=\"button\" data-quick-filter=\"study\">\n            공부\n          </button>\n        </div>\n      </div>\n    </header>",
          "description": "브랜드, 상단 메뉴, 로그인 링크, 빠른 서브메뉴를 보여 주는 영역이다."
        },
        {
          "label": "추천 배너",
          "start": 62,
          "end": 95,
          "snippet": "      <section class=\"hero-section\">\n        <div class=\"container hero-banner\">\n          <div class=\"hero-copy\">\n            <p class=\"hero-kicker\" id=\"heroKicker\">이번 주 추천 모임</p>\n            <h1 id=\"heroTitle\">지금 바로 들어가기 좋은 모임을 한 번에</h1>\n            <p class=\"hero-text\" id=\"heroDescription\">\n              추천 배너, 빠른 기능 타일, 촘촘한 카드형 목록 중심으로 다시\n              정리했습니다. 사용자는 설명을 길게 읽지 않고도 바로 둘러보고\n              참여할 수 있습니다.\n            </p>\n            <div class=\"hero-actions\">\n              <button class=\"button primary\" type=\"button\" id=\"heroDetailButton\">\n                자세히 보기\n              </button>\n              <button class=\"button secondary\" type=\"button\" id=\"heroJoinButton\">\n                바로 참여\n              </button>\n            </div>\n          </div>\n\n          <aside class=\"hero-media\" aria-label=\"추천 모임 미리보기\">\n            <button class=\"hero-nav-button hero-nav-prev\" id=\"heroPrevButton\" type=\"button\">\n              ‹\n            </button>\n            <div class=\"hero-orb\">\n              <div class=\"hero-teaser-grid\" id=\"featuredTeaserList\"></div>\n            </div>\n            <button class=\"hero-nav-button hero-nav-next\" id=\"heroNextButton\" type=\"button\">\n              ›\n            </button>\n            <p class=\"hero-page-indicator\" id=\"heroPageIndicator\">추천 1 / 6</p>\n          </aside>\n        </div>\n      </section>",
          "description": "현재 추천 모임을 큰 배너와 미리보기 카드로 보여 주는 첫 화면이다."
        },
        {
          "label": "상태 카드와 빠른 타일",
          "start": 98,
          "end": 147,
          "snippet": "      <section class=\"dashboard-section\">\n        <div class=\"container\">\n          <div class=\"status-strip\" id=\"statusCards\"></div>\n\n          <div class=\"shortcut-shell\">\n            <div class=\"shortcut-grid\">\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"recommend\">\n                <span class=\"shortcut-icon tone-peach\">추</span>\n                <strong>추천 모임</strong>\n                <p>바로 보기</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"small\">\n                <span class=\"shortcut-icon tone-yellow\">소</span>\n                <strong>소규모 모임</strong>\n                <p>가볍게 참여</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"today\">\n                <span class=\"shortcut-icon tone-blue\">당</span>\n                <strong>당일 모임</strong>\n                <p>오늘 바로</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"weekend\">\n                <span class=\"shortcut-icon tone-pink\">주</span>\n                <strong>주말 모임</strong>\n                <p>이번 주말</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"campus\">\n                <span class=\"shortcut-icon tone-green\">캠</span>\n                <strong>캠퍼스 모임</strong>\n                <p>학교 근처</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"social\">\n                <span class=\"shortcut-icon tone-orange\">취</span>\n                <strong>취향 찾기</strong>\n                <p>관심사별</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-filter=\"mine\">\n                <span class=\"shortcut-icon tone-purple\">내</span>\n                <strong>내 모임</strong>\n                <p>참여 현황</p>\n              </button>\n              <button class=\"shortcut-tile\" type=\"button\" data-quick-action=\"create\">\n                <span class=\"shortcut-icon tone-dark\">열</span>\n                <strong>모임 열기</strong>\n                <p>직접 개설</p>\n              </button>\n            </div>\n          </div>\n        </div>\n      </section>",
          "description": "숫자 요약 카드와 빠른 필터 버튼 타일을 제공한다."
        },
        {
          "label": "검색과 추천 모임 목록",
          "start": 150,
          "end": 223,
          "snippet": "      <section class=\"search-section section-block\" id=\"search\">\n        <div class=\"container\">\n          <div class=\"section-head\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">추천 모임</p>\n              <h2>지금 둘러보기 좋은 모임 타일</h2>\n              <p>검색은 유지하고, 정보는 더 작고 빠르게 읽히는 카드로 정리했습니다.</p>\n            </div>\n            <a class=\"more-link\" href=\"#create\">모임 열기</a>\n          </div>\n\n          <form class=\"search-form search-panel\" id=\"searchForm\">\n            <label>\n              키워드\n              <input\n                type=\"text\"\n                id=\"keyword\"\n                placeholder=\"예: 축구, 스터디, 맛집\"\n              />\n            </label>\n\n            <label>\n              카테고리\n              <select id=\"category\">\n                <option value=\"all\">전체</option>\n                <option value=\"운동\">운동</option>\n                <option value=\"공부\">공부</option>\n                <option value=\"친목\">친목</option>\n                <option value=\"게임\">게임</option>\n              </select>\n            </label>\n\n            <label>\n              지역\n              <select id=\"location\">\n                <option value=\"all\">전체</option>\n                <option value=\"시내권\">시내권</option>\n                <option value=\"생활권\">생활권</option>\n                <option value=\"캠퍼스\">캠퍼스</option>\n              </select>\n            </label>\n\n            <label>\n              상태\n              <select id=\"statusFilter\">\n                <option value=\"all\">전체</option>\n                <option value=\"open\">모집중</option>\n                <option value=\"mine\">참여중</option>\n                <option value=\"closed\">마감</option>\n              </select>\n            </label>\n\n            <label>\n              정렬\n              <select id=\"sortOrder\">\n                <option value=\"soon\">가까운 날짜 순</option>\n                <option value=\"late\">늦은 날짜 순</option>\n                <option value=\"seats\">남은 자리 많은 순</option>\n                <option value=\"popular\">참여 인원 많은 순</option>\n              </select>\n            </label>\n\n            <div class=\"form-actions\">\n              <button type=\"submit\" class=\"button primary\">검색</button>\n              <button type=\"button\" class=\"button secondary\" id=\"resetButton\">\n                초기화\n              </button>\n            </div>\n          </form>\n\n          <p class=\"result-summary\" id=\"searchResultText\"></p>\n          <div class=\"meeting-list\" id=\"meetingList\"></div>\n        </div>\n      </section>",
          "description": "검색 폼과 전체 카드 목록을 담는 핵심 탐색 영역이다."
        },
        {
          "label": "내 모임 목록",
          "start": 226,
          "end": 238,
          "snippet": "      <section class=\"section-block collection-section\" id=\"mine\">\n        <div class=\"container\">\n          <div class=\"section-head\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">내 모임</p>\n              <h2>내가 참여 중인 모임</h2>\n              <p>전체 목록과 별개로, 현재 들어가 있는 모임만 따로 확인합니다.</p>\n            </div>\n            <a class=\"more-link\" href=\"#search\">전체 보기</a>\n          </div>\n          <div class=\"meeting-list mine-list\" id=\"myMeetingList\"></div>\n        </div>\n      </section>",
          "description": "현재 참여 중인 모임만 따로 보여 준다."
        },
        {
          "label": "개설 관리 목록",
          "start": 241,
          "end": 253,
          "snippet": "      <section class=\"section-block collection-section\" id=\"manage\">\n        <div class=\"container\">\n          <div class=\"section-head\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">개설 관리</p>\n              <h2>내가 연 모임 관리</h2>\n              <p>수정과 삭제는 내가 직접 개설한 모임에서만 가능하게 유지합니다.</p>\n            </div>\n            <a class=\"more-link\" href=\"#create\">새로 열기</a>\n          </div>\n          <div class=\"meeting-list manage-list\" id=\"managedMeetingList\"></div>\n        </div>\n      </section>",
          "description": "내가 직접 만든 모임을 수정/삭제할 수 있게 분리한 영역이다."
        },
        {
          "label": "지도 자리와 진행 상태 안내",
          "start": 256,
          "end": 297,
          "snippet": "      <section class=\"section-block utility-section\" id=\"map\">\n        <div class=\"container utility-grid\">\n          <div class=\"utility-panel map-shell\">\n            <div class=\"map-copy\">\n              <p class=\"eyebrow\">곧 붙을 기능</p>\n              <h2>주변 모임 지도 자리</h2>\n              <p>\n                지도 API는 아직 붙이지 않았지만, 주변 모임과 입장 권한이 들어갈\n                자리를 미리 남겨 두었습니다.\n              </p>\n\n              <div class=\"mini-feature-grid\">\n                <article>\n                  <strong>주변 모임</strong>\n                  <p>근처 모임을 한 번에 모아보기</p>\n                </article>\n                <article>\n                  <strong>입장 권한</strong>\n                  <p>모임장 기준 권한 확장 예정</p>\n                </article>\n              </div>\n            </div>\n\n            <div class=\"map-placeholder\">\n              <div>\n                <strong>MAP PLACEHOLDER</strong>\n                <p>카카오맵 또는 네이버맵 연결 예정</p>\n              </div>\n            </div>\n          </div>\n\n          <aside class=\"utility-note\">\n            <p class=\"eyebrow\">진행 상태</p>\n            <h3>웹은 먼저, API는 다음 단계</h3>\n            <ul>\n              <li>4월까지는 뼈대와 화면 흐름을 안정화합니다.</li>\n              <li>5월 이후 지도, 결제, 채팅, 로그인 인증이 들어갈 수 있습니다.</li>\n              <li>DB 팀원과 붙을 수 있도록 화면용 데이터 형식을 먼저 정리해 둡니다.</li>\n            </ul>\n          </aside>\n        </div>\n      </section>",
          "description": "미구현 지도 기능 자리와 진행 상황 안내를 보여 준다."
        },
        {
          "label": "모임 생성/수정 폼",
          "start": 300,
          "end": 391,
          "snippet": "      <section class=\"section-block create-section\" id=\"create\">\n        <div class=\"container create-shell\">\n          <div class=\"create-copy\">\n            <div class=\"section-title\">\n              <p class=\"eyebrow\">모임 열기</p>\n              <h2 id=\"formTitle\">새 모임 개설하기</h2>\n              <p id=\"formModeText\">\n                지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에\n                바로 추가됩니다.\n              </p>\n            </div>\n\n            <div class=\"help-box\">\n              <h3>현재 폼에서 되는 것</h3>\n              <ul>\n                <li>새 모임 추가</li>\n                <li>기존 모임 수정 모드 전환</li>\n                <li>브라우저 저장으로 새로고침 후 유지</li>\n              </ul>\n            </div>\n          </div>\n\n          <form class=\"create-form create-panel\" id=\"createForm\">\n            <label>\n              모임 이름\n              <input type=\"text\" id=\"newTitle\" placeholder=\"예: 주말 농구 모임\" required />\n            </label>\n\n            <label>\n              카테고리\n              <select id=\"newCategory\" required>\n                <option value=\"운동\">운동</option>\n                <option value=\"공부\">공부</option>\n                <option value=\"친목\">친목</option>\n                <option value=\"게임\">게임</option>\n              </select>\n            </label>\n\n            <label>\n              지역\n              <select id=\"newLocation\" required>\n                <option value=\"시내권\">시내권</option>\n                <option value=\"생활권\">생활권</option>\n                <option value=\"캠퍼스\">캠퍼스</option>\n              </select>\n            </label>\n\n            <label>\n              날짜\n              <input type=\"date\" id=\"newDate\" required />\n            </label>\n\n            <label>\n              주최자 이름\n              <input type=\"text\" id=\"newOrganizer\" placeholder=\"예: 운영자 A\" required />\n            </label>\n\n            <label>\n              모집 인원\n              <input type=\"number\" id=\"newCapacity\" min=\"2\" max=\"99\" value=\"10\" required />\n            </label>\n\n            <label>\n              참가비\n              <input type=\"text\" id=\"newFee\" placeholder=\"예: 무료, 5,000원\" required />\n            </label>\n\n            <label class=\"full-span\">\n              모임 설명\n              <textarea\n                id=\"newDescription\"\n                rows=\"5\"\n                placeholder=\"이 모임에서 무엇을 하는지 적어주세요.\"\n                required\n              ></textarea>\n            </label>\n\n            <div class=\"form-actions\">\n              <button type=\"submit\" class=\"button primary\" id=\"submitButton\">\n                모임 추가\n              </button>\n              <button\n                type=\"button\"\n                class=\"button secondary is-hidden\"\n                id=\"cancelEditButton\"\n              >\n                수정 취소\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>",
          "description": "새 모임 추가와 기존 모임 수정에 공용으로 쓰는 폼이다."
        },
        {
          "label": "상세 팝업 dialog",
          "start": 395,
          "end": 423,
          "snippet": "    <dialog class=\"detail-dialog\" id=\"detailDialog\">\n      <div class=\"dialog-shell\">\n        <div class=\"dialog-header\">\n          <div>\n            <p class=\"eyebrow\">모임 상세 정보</p>\n            <h2 id=\"dialogTitle\"></h2>\n          </div>\n          <button type=\"button\" class=\"button secondary\" id=\"closeDialogButton\">\n            닫기\n          </button>\n        </div>\n\n        <div class=\"dialog-meta\" id=\"dialogMeta\"></div>\n\n        <section class=\"dialog-description\">\n          <h3>모임 소개</h3>\n          <p id=\"dialogDescription\"></p>\n        </section>\n\n        <div class=\"dialog-owner-actions is-hidden\" id=\"dialogOwnerActions\">\n          <button type=\"button\" class=\"button secondary\" id=\"dialogEditButton\">\n            수정\n          </button>\n          <button type=\"button\" class=\"button danger\" id=\"dialogDeleteButton\">\n            삭제\n          </button>\n        </div>\n      </div>\n    </dialog>",
          "description": "카드 상세 정보를 팝업으로 보여 준다."
        },
        {
          "label": "푸터",
          "start": 425,
          "end": 442,
          "snippet": "    <footer class=\"site-footer\">\n      <div class=\"container footer-row\">\n        <div>\n          <p class=\"footer-brand\">MOIM</p>\n          <p class=\"footer-text\">\n            추천 배너, 빠른 기능 타일, 촘촘한 카드형 목록을 중심으로 다시 정리한\n            웹 프로토타입입니다.\n          </p>\n        </div>\n\n        <div class=\"footer-links\">\n          <a href=\"#search\">추천 모임</a>\n          <a href=\"#mine\">내 모임</a>\n          <a href=\"#create\">모임 열기</a>\n          <a href=\"login.html\">로그인</a>\n        </div>\n      </div>\n    </footer>",
          "description": "하단 브랜드 설명과 빠른 링크를 제공한다."
        }
      ]
    },
    {
      "id": "styles.css",
      "path": "styles.css",
      "title": "styles.css",
      "kind": "css",
      "role": "메인 페이지 전용 스타일 파일이다. 색상 변수, 헤더, 추천 배너, 카드, 폼, 팝업, 반응형 규칙까지 모두 이 파일에 모여 있다.",
      "whenUsed": "`index.html`이 브라우저에서 열릴 때 자동으로 함께 로드된다.",
      "indentGuide": "CSS는 선택자 줄이 바깥에 있고, 그 안의 속성 줄을 한 단계 들여쓴다. `@media` 안쪽에 또 선택자가 오면 한 번 더 안으로 들어간다.",
      "connections": [
        "HTML ↔ CSS 연결: `index.html`에서 직접 연결된다.",
        "CSS가 적용되는 HTML 요소: `header.site-header`, `section.hero-section`, `.meeting-card`, `.button`, `.detail-dialog`, `.site-footer` 등이 대표적이다.",
        "HTML ↔ JS 연결 보조: `script.js`가 동적으로 넣는 카드 HTML도 이 파일의 `.meeting-card`, `.meta-chip`, `.empty-state` 규칙을 그대로 사용한다.",
        "asset 참조 여부: 현재 이 CSS 안에는 `url(...)`로 불러오는 이미지 자산이 없다.",
        "상대경로 사용: CSS 파일 자체는 메인 HTML과 같은 폴더에 있어 단순 파일명 경로로 연결된다."
      ],
      "badges": [
        "디자인",
        "레이아웃",
        "반응형"
      ],
      "docPath": "../docs/per-file-deep-explanations/02-styles-css.md",
      "sourcePath": "../styles.css",
      "lines": [
        {
          "lineNumber": 1,
          "code": "/* 밝은 플랫폼형 톤으로 다시 쓰기 쉽게 색과 간격을 변수로 정리한다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 2,
          "code": ":root {",
          "explanation": "`:root` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 3,
          "code": "  --bg: #f5f5f7;",
          "explanation": "`:root`에 `--bg: #f5f5f7;`를 적용하는 줄이다. `--bg` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 4,
          "code": "  --surface: #ffffff;",
          "explanation": "`:root`에 `--surface: #ffffff;`를 적용하는 줄이다. `--surface` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 5,
          "code": "  --surface-soft: #f0f0f2;",
          "explanation": "`:root`에 `--surface-soft: #f0f0f2;`를 적용하는 줄이다. `--surface-soft` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 6,
          "code": "  --surface-muted: #f8f8f9;",
          "explanation": "`:root`에 `--surface-muted: #f8f8f9;`를 적용하는 줄이다. `--surface-muted` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 7,
          "code": "  --hero: #efe1af;",
          "explanation": "`:root`에 `--hero: #efe1af;`를 적용하는 줄이다. `--hero` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 8,
          "code": "  --hero-deep: #d7c27f;",
          "explanation": "`:root`에 `--hero-deep: #d7c27f;`를 적용하는 줄이다. `--hero-deep` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 9,
          "code": "  --text: #17181a;",
          "explanation": "`:root`에 `--text: #17181a;`를 적용하는 줄이다. `--text` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 10,
          "code": "  --muted: #74767d;",
          "explanation": "`:root`에 `--muted: #74767d;`를 적용하는 줄이다. `--muted` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 11,
          "code": "  --line: rgba(23, 24, 26, 0.08);",
          "explanation": "`:root`에 `--line: rgba(23, 24, 26, 0.08);`를 적용하는 줄이다. `--line` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 12,
          "code": "  --line-strong: rgba(23, 24, 26, 0.12);",
          "explanation": "`:root`에 `--line-strong: rgba(23, 24, 26, 0.12);`를 적용하는 줄이다. `--line-strong` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 13,
          "code": "  --accent: #111111;",
          "explanation": "`:root`에 `--accent: #111111;`를 적용하는 줄이다. `--accent` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 14,
          "code": "  --accent-soft: #ff613f;",
          "explanation": "`:root`에 `--accent-soft: #ff613f;`를 적용하는 줄이다. `--accent-soft` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 15,
          "code": "  --accent-blue: #3e7dff;",
          "explanation": "`:root`에 `--accent-blue: #3e7dff;`를 적용하는 줄이다. `--accent-blue` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 16,
          "code": "  --danger: #cf3e3e;",
          "explanation": "`:root`에 `--danger: #cf3e3e;`를 적용하는 줄이다. `--danger` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 17,
          "code": "  --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);",
          "explanation": "`:root`에 `--shadow: 0 14px 34px rgba(28, 30, 35, 0.06);`를 적용하는 줄이다. `--shadow` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 18,
          "code": "  --radius-xl: 34px;",
          "explanation": "`:root`에 `--radius-xl: 34px;`를 적용하는 줄이다. `--radius-xl` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 19,
          "code": "  --radius-lg: 24px;",
          "explanation": "`:root`에 `--radius-lg: 24px;`를 적용하는 줄이다. `--radius-lg` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 20,
          "code": "  --radius-md: 18px;",
          "explanation": "`:root`에 `--radius-md: 18px;`를 적용하는 줄이다. `--radius-md` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 21,
          "code": "  --radius-sm: 14px;",
          "explanation": "`:root`에 `--radius-sm: 14px;`를 적용하는 줄이다. `--radius-sm` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 22,
          "code": "  --font-display: \"Noto Sans KR\", sans-serif;",
          "explanation": "`:root`에 `--font-display: \"Noto Sans KR\", sans-serif;`를 적용하는 줄이다. `--font-display` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 23,
          "code": "  --font-body: \"Noto Sans KR\", sans-serif;",
          "explanation": "`:root`에 `--font-body: \"Noto Sans KR\", sans-serif;`를 적용하는 줄이다. `--font-body` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 24,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 26,
          "code": "* {",
          "explanation": "`*` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 27,
          "code": "  box-sizing: border-box;",
          "explanation": "`*`에 `box-sizing: border-box;`를 적용하는 줄이다. `box-sizing` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 28,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 30,
          "code": "html {",
          "explanation": "`html` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 31,
          "code": "  scroll-behavior: smooth;",
          "explanation": "`html`에 `scroll-behavior: smooth;`를 적용하는 줄이다. `scroll-behavior` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 32,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 34,
          "code": "body {",
          "explanation": "`body` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 35,
          "code": "  margin: 0;",
          "explanation": "`body`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 36,
          "code": "  background: var(--bg);",
          "explanation": "`body`에 `background: var(--bg);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 37,
          "code": "  color: var(--text);",
          "explanation": "`body`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 38,
          "code": "  font-family: var(--font-body);",
          "explanation": "`body`에 `font-family: var(--font-body);`를 적용하는 줄이다. `font-family` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 39,
          "code": "  overflow-x: hidden;",
          "explanation": "`body`에 `overflow-x: hidden;`를 적용하는 줄이다. 가로 넘침 처리 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 40,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 42,
          "code": "a {",
          "explanation": "`a` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 43,
          "code": "  color: inherit;",
          "explanation": "`a`에 `color: inherit;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 44,
          "code": "  text-decoration: none;",
          "explanation": "`a`에 `text-decoration: none;`를 적용하는 줄이다. `text-decoration` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 45,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 47,
          "code": "button,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 48,
          "code": "input,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 49,
          "code": "select,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 50,
          "code": "textarea {",
          "explanation": "`textarea` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 51,
          "code": "  font: inherit;",
          "explanation": "`textarea`에 `font: inherit;`를 적용하는 줄이다. `font` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 52,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 54,
          "code": ".container {",
          "explanation": "`.container` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 55,
          "code": "  width: min(1180px, calc(100% - 32px));",
          "explanation": "`.container`에 `width: min(1180px, calc(100% - 32px));`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 56,
          "code": "  margin: 0 auto;",
          "explanation": "`.container`에 `margin: 0 auto;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 57,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 59,
          "code": ".site-header {",
          "explanation": "`.site-header` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 60,
          "code": "  position: sticky;",
          "explanation": "`.site-header`에 `position: sticky;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 61,
          "code": "  top: 0;",
          "explanation": "`.site-header`에 `top: 0;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 62,
          "code": "  z-index: 40;",
          "explanation": "`.site-header`에 `z-index: 40;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 63,
          "code": "  background: rgba(255, 255, 255, 0.94);",
          "explanation": "`.site-header`에 `background: rgba(255, 255, 255, 0.94);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 64,
          "code": "  border-bottom: 1px solid var(--line);",
          "explanation": "`.site-header`에 `border-bottom: 1px solid var(--line);`를 적용하는 줄이다. `border-bottom` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 65,
          "code": "  backdrop-filter: blur(16px);",
          "explanation": "`.site-header`에 `backdrop-filter: blur(16px);`를 적용하는 줄이다. 뒤 배경에 흐림 같은 효과를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 66,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 68,
          "code": ".nav-row {",
          "explanation": "`.nav-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 69,
          "code": "  display: flex;",
          "explanation": "`.nav-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 70,
          "code": "  align-items: center;",
          "explanation": "`.nav-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 71,
          "code": "  justify-content: space-between;",
          "explanation": "`.nav-row`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 72,
          "code": "  gap: 24px;",
          "explanation": "`.nav-row`에 `gap: 24px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 73,
          "code": "  min-height: 72px;",
          "explanation": "`.nav-row`에 `min-height: 72px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 74,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 76,
          "code": ".brand-group,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 77,
          "code": ".menu,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 78,
          "code": ".sub-menu,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 79,
          "code": ".header-actions,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 80,
          "code": ".footer-links {",
          "explanation": "`.footer-links` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 81,
          "code": "  display: flex;",
          "explanation": "`.footer-links`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 82,
          "code": "  align-items: center;",
          "explanation": "`.footer-links`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 83,
          "code": "  min-width: 0;",
          "explanation": "`.footer-links`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 84,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 86,
          "code": ".brand-group {",
          "explanation": "`.brand-group` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 87,
          "code": "  gap: 34px;",
          "explanation": "`.brand-group`에 `gap: 34px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 88,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 90,
          "code": ".brand,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 91,
          "code": ".footer-brand {",
          "explanation": "`.footer-brand` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 92,
          "code": "  font-family: var(--font-display);",
          "explanation": "`.footer-brand`에 `font-family: var(--font-display);`를 적용하는 줄이다. `font-family` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 93,
          "code": "  font-size: 2rem;",
          "explanation": "`.footer-brand`에 `font-size: 2rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 94,
          "code": "  font-weight: 800;",
          "explanation": "`.footer-brand`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 95,
          "code": "  letter-spacing: -0.05em;",
          "explanation": "`.footer-brand`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 96,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 98,
          "code": ".menu {",
          "explanation": "`.menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 99,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.menu`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 100,
          "code": "  gap: 20px;",
          "explanation": "`.menu`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 101,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 103,
          "code": ".menu a,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 104,
          "code": ".sub-menu a,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 105,
          "code": ".sub-menu-button {",
          "explanation": "`.sub-menu-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 106,
          "code": "  color: var(--muted);",
          "explanation": "`.sub-menu-button`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 107,
          "code": "  font-size: 0.97rem;",
          "explanation": "`.sub-menu-button`에 `font-size: 0.97rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 108,
          "code": "  font-weight: 700;",
          "explanation": "`.sub-menu-button`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 109,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 111,
          "code": ".menu a.is-current,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 112,
          "code": ".sub-menu a.is-current,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 113,
          "code": ".sub-menu-button.is-current,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 114,
          "code": ".sub-menu-button.is-active,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 115,
          "code": ".menu a:hover,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 116,
          "code": ".sub-menu a:hover,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 117,
          "code": ".sub-menu-button:hover {",
          "explanation": "`.sub-menu-button:hover` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 118,
          "code": "  color: var(--text);",
          "explanation": "`.sub-menu-button:hover`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 119,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 121,
          "code": ".sub-menu-button {",
          "explanation": "`.sub-menu-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 122,
          "code": "  padding: 0;",
          "explanation": "`.sub-menu-button`에 `padding: 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 123,
          "code": "  border: 0;",
          "explanation": "`.sub-menu-button`에 `border: 0;`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 124,
          "code": "  background: transparent;",
          "explanation": "`.sub-menu-button`에 `background: transparent;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 125,
          "code": "  cursor: pointer;",
          "explanation": "`.sub-menu-button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 126,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 128,
          "code": ".header-actions {",
          "explanation": "`.header-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 129,
          "code": "  gap: 12px;",
          "explanation": "`.header-actions`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 130,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 132,
          "code": ".header-link {",
          "explanation": "`.header-link` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 133,
          "code": "  display: inline-flex;",
          "explanation": "`.header-link`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 134,
          "code": "  align-items: center;",
          "explanation": "`.header-link`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 135,
          "code": "  justify-content: center;",
          "explanation": "`.header-link`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 136,
          "code": "  min-height: 40px;",
          "explanation": "`.header-link`에 `min-height: 40px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 137,
          "code": "  padding: 10px 16px;",
          "explanation": "`.header-link`에 `padding: 10px 16px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 138,
          "code": "  border-radius: 12px;",
          "explanation": "`.header-link`에 `border-radius: 12px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 139,
          "code": "  border: 1px solid var(--line-strong);",
          "explanation": "`.header-link`에 `border: 1px solid var(--line-strong);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 140,
          "code": "  background: var(--surface);",
          "explanation": "`.header-link`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 141,
          "code": "  font-size: 0.92rem;",
          "explanation": "`.header-link`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 142,
          "code": "  font-weight: 700;",
          "explanation": "`.header-link`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 143,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 145,
          "code": ".header-link.primary {",
          "explanation": "`.header-link.primary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 146,
          "code": "  border-color: var(--text);",
          "explanation": "`.header-link.primary`에 `border-color: var(--text);`를 적용하는 줄이다. `border-color` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 147,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 149,
          "code": ".sub-nav {",
          "explanation": "`.sub-nav` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 150,
          "code": "  border-top: 1px solid var(--line);",
          "explanation": "`.sub-nav`에 `border-top: 1px solid var(--line);`를 적용하는 줄이다. `border-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 151,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 153,
          "code": ".sub-menu {",
          "explanation": "`.sub-menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 154,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.sub-menu`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 155,
          "code": "  gap: 18px;",
          "explanation": "`.sub-menu`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 156,
          "code": "  min-height: 50px;",
          "explanation": "`.sub-menu`에 `min-height: 50px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 157,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 159,
          "code": ".hero-section {",
          "explanation": "`.hero-section` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 160,
          "code": "  padding: 18px 0 12px;",
          "explanation": "`.hero-section`에 `padding: 18px 0 12px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 161,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 163,
          "code": "/* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 164,
          "code": ".hero-banner {",
          "explanation": "`.hero-banner` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 165,
          "code": "  display: grid;",
          "explanation": "`.hero-banner`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 166,
          "code": "  grid-template-columns: 1.05fr 0.95fr;",
          "explanation": "`.hero-banner`에 `grid-template-columns: 1.05fr 0.95fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 167,
          "code": "  gap: 34px;",
          "explanation": "`.hero-banner`에 `gap: 34px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 168,
          "code": "  align-items: center;",
          "explanation": "`.hero-banner`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 169,
          "code": "  padding: 56px;",
          "explanation": "`.hero-banner`에 `padding: 56px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 170,
          "code": "  border-radius: 40px;",
          "explanation": "`.hero-banner`에 `border-radius: 40px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 171,
          "code": "  background: var(--hero);",
          "explanation": "`.hero-banner`에 `background: var(--hero);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 172,
          "code": "  overflow: hidden;",
          "explanation": "`.hero-banner`에 `overflow: hidden;`를 적용하는 줄이다. 넘치는 내용 처리 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 173,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 175,
          "code": ".hero-copy {",
          "explanation": "`.hero-copy` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 176,
          "code": "  display: grid;",
          "explanation": "`.hero-copy`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 177,
          "code": "  gap: 20px;",
          "explanation": "`.hero-copy`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 178,
          "code": "  min-width: 0;",
          "explanation": "`.hero-copy`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 179,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 181,
          "code": ".hero-kicker,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 182,
          "code": ".eyebrow {",
          "explanation": "`.eyebrow` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 183,
          "code": "  margin: 0;",
          "explanation": "`.eyebrow`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 184,
          "code": "  color: rgba(23, 24, 26, 0.78);",
          "explanation": "`.eyebrow`에 `color: rgba(23, 24, 26, 0.78);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 185,
          "code": "  font-size: 0.84rem;",
          "explanation": "`.eyebrow`에 `font-size: 0.84rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 186,
          "code": "  font-weight: 800;",
          "explanation": "`.eyebrow`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 187,
          "code": "  letter-spacing: 0.04em;",
          "explanation": "`.eyebrow`에 `letter-spacing: 0.04em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 188,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 190,
          "code": ".hero-copy h1,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 191,
          "code": ".section-title h2,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 192,
          "code": ".map-copy h2,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 193,
          "code": ".help-box h3,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 194,
          "code": ".utility-note h3,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 195,
          "code": ".dialog-header h2 {",
          "explanation": "`.dialog-header h2` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 196,
          "code": "  margin: 0;",
          "explanation": "`.dialog-header h2`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 197,
          "code": "  font-family: var(--font-display);",
          "explanation": "`.dialog-header h2`에 `font-family: var(--font-display);`를 적용하는 줄이다. `font-family` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 198,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 200,
          "code": ".hero-copy h1 {",
          "explanation": "`.hero-copy h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 201,
          "code": "  max-width: 8ch;",
          "explanation": "`.hero-copy h1`에 `max-width: 8ch;`를 적용하는 줄이다. `max-width` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 202,
          "code": "  font-size: clamp(3.1rem, 5vw, 4.8rem);",
          "explanation": "`.hero-copy h1`에 `font-size: clamp(3.1rem, 5vw, 4.8rem);`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 203,
          "code": "  font-weight: 800;",
          "explanation": "`.hero-copy h1`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 204,
          "code": "  letter-spacing: -0.08em;",
          "explanation": "`.hero-copy h1`에 `letter-spacing: -0.08em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 205,
          "code": "  line-height: 0.96;",
          "explanation": "`.hero-copy h1`에 `line-height: 0.96;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 206,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 208,
          "code": ".hero-text,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 209,
          "code": ".section-title p:last-child,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 210,
          "code": ".map-copy p,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 211,
          "code": ".help-box li,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 212,
          "code": ".utility-note li,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 213,
          "code": ".dialog-description p,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 214,
          "code": ".footer-text,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 215,
          "code": ".shortcut-tile p,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 216,
          "code": ".meeting-card p {",
          "explanation": "`.meeting-card p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 217,
          "code": "  color: var(--muted);",
          "explanation": "`.meeting-card p`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 218,
          "code": "  line-height: 1.65;",
          "explanation": "`.meeting-card p`에 `line-height: 1.65;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 219,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 221,
          "code": ".hero-text {",
          "explanation": "`.hero-text` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 222,
          "code": "  max-width: 34rem;",
          "explanation": "`.hero-text`에 `max-width: 34rem;`를 적용하는 줄이다. `max-width` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 223,
          "code": "  margin: 0;",
          "explanation": "`.hero-text`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 224,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 226,
          "code": ".hero-link,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 227,
          "code": ".more-link {",
          "explanation": "`.more-link` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 228,
          "code": "  display: inline-flex;",
          "explanation": "`.more-link`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 229,
          "code": "  align-items: center;",
          "explanation": "`.more-link`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 230,
          "code": "  gap: 8px;",
          "explanation": "`.more-link`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 231,
          "code": "  font-weight: 700;",
          "explanation": "`.more-link`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 232,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 234,
          "code": ".hero-link::after,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 235,
          "code": ".more-link::after {",
          "explanation": "`.more-link::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 236,
          "code": "  content: \"›\";",
          "explanation": "`.more-link::after`에 `content: \"›\";`를 적용하는 줄이다. 가상 요소에 들어갈 내용을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 237,
          "code": "  font-size: 1.2rem;",
          "explanation": "`.more-link::after`에 `font-size: 1.2rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 238,
          "code": "  line-height: 1;",
          "explanation": "`.more-link::after`에 `line-height: 1;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 239,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 241,
          "code": ".hero-actions {",
          "explanation": "`.hero-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 242,
          "code": "  display: flex;",
          "explanation": "`.hero-actions`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 243,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.hero-actions`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 244,
          "code": "  gap: 12px;",
          "explanation": "`.hero-actions`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 245,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 247,
          "code": ".hero-media {",
          "explanation": "`.hero-media` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 248,
          "code": "  position: relative;",
          "explanation": "`.hero-media`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 249,
          "code": "  min-height: 320px;",
          "explanation": "`.hero-media`에 `min-height: 320px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 250,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 252,
          "code": ".hero-orb {",
          "explanation": "`.hero-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 253,
          "code": "  position: absolute;",
          "explanation": "`.hero-orb`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 254,
          "code": "  right: -74px;",
          "explanation": "`.hero-orb`에 `right: -74px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 255,
          "code": "  top: -24px;",
          "explanation": "`.hero-orb`에 `top: -24px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 256,
          "code": "  width: 470px;",
          "explanation": "`.hero-orb`에 `width: 470px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 257,
          "code": "  aspect-ratio: 1;",
          "explanation": "`.hero-orb`에 `aspect-ratio: 1;`를 적용하는 줄이다. 가로세로 비율을 고정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 258,
          "code": "  display: grid;",
          "explanation": "`.hero-orb`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 259,
          "code": "  place-items: center;",
          "explanation": "`.hero-orb`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 260,
          "code": "  border-radius: 50%;",
          "explanation": "`.hero-orb`에 `border-radius: 50%;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 261,
          "code": "  background:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 262,
          "code": "    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 263,
          "code": "    radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 264,
          "code": "    linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 265,
          "code": "  box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);",
          "explanation": "`.hero-orb`에 `box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 266,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 268,
          "code": ".hero-teaser-grid {",
          "explanation": "`.hero-teaser-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 269,
          "code": "  width: 74%;",
          "explanation": "`.hero-teaser-grid`에 `width: 74%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 270,
          "code": "  display: grid;",
          "explanation": "`.hero-teaser-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 271,
          "code": "  grid-template-columns: repeat(2, minmax(0, 1fr));",
          "explanation": "`.hero-teaser-grid`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 272,
          "code": "  gap: 14px;",
          "explanation": "`.hero-teaser-grid`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 273,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 275,
          "code": ".hero-teaser-card {",
          "explanation": "`.hero-teaser-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 276,
          "code": "  display: grid;",
          "explanation": "`.hero-teaser-card`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 277,
          "code": "  gap: 6px;",
          "explanation": "`.hero-teaser-card`에 `gap: 6px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 278,
          "code": "  padding: 16px;",
          "explanation": "`.hero-teaser-card`에 `padding: 16px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 279,
          "code": "  border-radius: 22px;",
          "explanation": "`.hero-teaser-card`에 `border-radius: 22px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 280,
          "code": "  border: 1px solid rgba(23, 24, 26, 0.08);",
          "explanation": "`.hero-teaser-card`에 `border: 1px solid rgba(23, 24, 26, 0.08);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 281,
          "code": "  background: rgba(255, 255, 255, 0.82);",
          "explanation": "`.hero-teaser-card`에 `background: rgba(255, 255, 255, 0.82);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 282,
          "code": "  box-shadow: var(--shadow);",
          "explanation": "`.hero-teaser-card`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 283,
          "code": "  text-align: left;",
          "explanation": "`.hero-teaser-card`에 `text-align: left;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 284,
          "code": "  cursor: pointer;",
          "explanation": "`.hero-teaser-card`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 285,
          "code": "  transition:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 286,
          "code": "    transform 0.18s ease,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 287,
          "code": "    background 0.18s ease,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 288,
          "code": "    box-shadow 0.18s ease;",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 289,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 291,
          "code": ".hero-teaser-card:hover,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 292,
          "code": ".hero-teaser-card.is-active {",
          "explanation": "`.hero-teaser-card.is-active` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 293,
          "code": "  transform: translateY(-2px);",
          "explanation": "`.hero-teaser-card.is-active`에 `transform: translateY(-2px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 294,
          "code": "  background: rgba(255, 255, 255, 0.98);",
          "explanation": "`.hero-teaser-card.is-active`에 `background: rgba(255, 255, 255, 0.98);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 295,
          "code": "  box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);",
          "explanation": "`.hero-teaser-card.is-active`에 `box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 296,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 298,
          "code": ".hero-teaser-card.wide {",
          "explanation": "`.hero-teaser-card.wide` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 299,
          "code": "  grid-column: 1 / -1;",
          "explanation": "`.hero-teaser-card.wide`에 `grid-column: 1 / -1;`를 적용하는 줄이다. 그리드에서 차지할 열 범위를 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 300,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 302,
          "code": ".hero-teaser-card span {",
          "explanation": "`.hero-teaser-card span` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 303,
          "code": "  color: var(--muted);",
          "explanation": "`.hero-teaser-card span`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 304,
          "code": "  font-size: 0.78rem;",
          "explanation": "`.hero-teaser-card span`에 `font-size: 0.78rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 305,
          "code": "  font-weight: 700;",
          "explanation": "`.hero-teaser-card span`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 306,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 308,
          "code": ".hero-teaser-card strong {",
          "explanation": "`.hero-teaser-card strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 309,
          "code": "  font-size: 1rem;",
          "explanation": "`.hero-teaser-card strong`에 `font-size: 1rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 310,
          "code": "  font-weight: 800;",
          "explanation": "`.hero-teaser-card strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 311,
          "code": "  line-height: 1.35;",
          "explanation": "`.hero-teaser-card strong`에 `line-height: 1.35;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 312,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 314,
          "code": ".hero-page-indicator {",
          "explanation": "`.hero-page-indicator` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 315,
          "code": "  position: absolute;",
          "explanation": "`.hero-page-indicator`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 316,
          "code": "  right: 12px;",
          "explanation": "`.hero-page-indicator`에 `right: 12px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 317,
          "code": "  bottom: 10px;",
          "explanation": "`.hero-page-indicator`에 `bottom: 10px;`를 적용하는 줄이다. 아래쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 318,
          "code": "  margin: 0;",
          "explanation": "`.hero-page-indicator`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 319,
          "code": "  padding: 6px 10px;",
          "explanation": "`.hero-page-indicator`에 `padding: 6px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 320,
          "code": "  border-radius: 999px;",
          "explanation": "`.hero-page-indicator`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 321,
          "code": "  background: rgba(23, 24, 26, 0.62);",
          "explanation": "`.hero-page-indicator`에 `background: rgba(23, 24, 26, 0.62);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 322,
          "code": "  color: white;",
          "explanation": "`.hero-page-indicator`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 323,
          "code": "  font-size: 0.78rem;",
          "explanation": "`.hero-page-indicator`에 `font-size: 0.78rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 324,
          "code": "  font-weight: 700;",
          "explanation": "`.hero-page-indicator`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 325,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 327,
          "code": ".hero-nav-button {",
          "explanation": "`.hero-nav-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 328,
          "code": "  position: absolute;",
          "explanation": "`.hero-nav-button`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 329,
          "code": "  top: 50%;",
          "explanation": "`.hero-nav-button`에 `top: 50%;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 330,
          "code": "  z-index: 2;",
          "explanation": "`.hero-nav-button`에 `z-index: 2;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 331,
          "code": "  width: 44px;",
          "explanation": "`.hero-nav-button`에 `width: 44px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 332,
          "code": "  height: 44px;",
          "explanation": "`.hero-nav-button`에 `height: 44px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 333,
          "code": "  display: inline-grid;",
          "explanation": "`.hero-nav-button`에 `display: inline-grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 334,
          "code": "  place-items: center;",
          "explanation": "`.hero-nav-button`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 335,
          "code": "  border: 1px solid rgba(23, 24, 26, 0.12);",
          "explanation": "`.hero-nav-button`에 `border: 1px solid rgba(23, 24, 26, 0.12);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 336,
          "code": "  border-radius: 999px;",
          "explanation": "`.hero-nav-button`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 337,
          "code": "  background: rgba(255, 255, 255, 0.94);",
          "explanation": "`.hero-nav-button`에 `background: rgba(255, 255, 255, 0.94);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 338,
          "code": "  color: var(--text);",
          "explanation": "`.hero-nav-button`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 339,
          "code": "  cursor: pointer;",
          "explanation": "`.hero-nav-button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 340,
          "code": "  transform: translateY(-50%);",
          "explanation": "`.hero-nav-button`에 `transform: translateY(-50%);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 341,
          "code": "  box-shadow: var(--shadow);",
          "explanation": "`.hero-nav-button`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 342,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 344,
          "code": ".hero-nav-button:disabled {",
          "explanation": "`.hero-nav-button:disabled` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 345,
          "code": "  cursor: not-allowed;",
          "explanation": "`.hero-nav-button:disabled`에 `cursor: not-allowed;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 346,
          "code": "  opacity: 0.45;",
          "explanation": "`.hero-nav-button:disabled`에 `opacity: 0.45;`를 적용하는 줄이다. 투명도를 조절한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 347,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 349,
          "code": ".hero-nav-prev {",
          "explanation": "`.hero-nav-prev` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 350,
          "code": "  left: 0;",
          "explanation": "`.hero-nav-prev`에 `left: 0;`를 적용하는 줄이다. 왼쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 351,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 353,
          "code": ".hero-nav-next {",
          "explanation": "`.hero-nav-next` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 354,
          "code": "  right: 0;",
          "explanation": "`.hero-nav-next`에 `right: 0;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 355,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 357,
          "code": ".dashboard-section {",
          "explanation": "`.dashboard-section` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 358,
          "code": "  padding: 10px 0 18px;",
          "explanation": "`.dashboard-section`에 `padding: 10px 0 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 359,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 361,
          "code": ".status-strip {",
          "explanation": "`.status-strip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 362,
          "code": "  display: grid;",
          "explanation": "`.status-strip`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 363,
          "code": "  grid-template-columns: repeat(4, minmax(0, 1fr));",
          "explanation": "`.status-strip`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 364,
          "code": "  gap: 12px;",
          "explanation": "`.status-strip`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 365,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 367,
          "code": ".status-card,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 368,
          "code": ".shortcut-tile,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 369,
          "code": ".search-panel,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 370,
          "code": ".map-shell,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 371,
          "code": ".utility-note,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 372,
          "code": ".help-box,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 373,
          "code": ".create-panel,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 374,
          "code": ".detail-dialog,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 375,
          "code": ".dialog-description {",
          "explanation": "`.dialog-description` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 376,
          "code": "  border: 1px solid var(--line);",
          "explanation": "`.dialog-description`에 `border: 1px solid var(--line);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 377,
          "code": "  box-shadow: var(--shadow);",
          "explanation": "`.dialog-description`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 378,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 380,
          "code": ".status-card {",
          "explanation": "`.status-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 381,
          "code": "  padding: 20px 22px;",
          "explanation": "`.status-card`에 `padding: 20px 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 382,
          "code": "  border-radius: 18px;",
          "explanation": "`.status-card`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 383,
          "code": "  background: var(--surface);",
          "explanation": "`.status-card`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 384,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 386,
          "code": ".status-card p {",
          "explanation": "`.status-card p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 387,
          "code": "  margin: 0;",
          "explanation": "`.status-card p`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 388,
          "code": "  color: var(--muted);",
          "explanation": "`.status-card p`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 389,
          "code": "  font-size: 0.82rem;",
          "explanation": "`.status-card p`에 `font-size: 0.82rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 390,
          "code": "  font-weight: 700;",
          "explanation": "`.status-card p`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 391,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 393,
          "code": ".status-card strong {",
          "explanation": "`.status-card strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 394,
          "code": "  display: block;",
          "explanation": "`.status-card strong`에 `display: block;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 395,
          "code": "  margin-top: 10px;",
          "explanation": "`.status-card strong`에 `margin-top: 10px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 396,
          "code": "  font-size: 1.75rem;",
          "explanation": "`.status-card strong`에 `font-size: 1.75rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 397,
          "code": "  font-weight: 800;",
          "explanation": "`.status-card strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 398,
          "code": "  letter-spacing: -0.05em;",
          "explanation": "`.status-card strong`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 399,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 401,
          "code": ".shortcut-shell {",
          "explanation": "`.shortcut-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 402,
          "code": "  margin-top: 16px;",
          "explanation": "`.shortcut-shell`에 `margin-top: 16px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 403,
          "code": "  padding: 22px;",
          "explanation": "`.shortcut-shell`에 `padding: 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 404,
          "code": "  border-radius: 26px;",
          "explanation": "`.shortcut-shell`에 `border-radius: 26px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 405,
          "code": "  background: #ececee;",
          "explanation": "`.shortcut-shell`에 `background: #ececee;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 406,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 408,
          "code": ".shortcut-grid {",
          "explanation": "`.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 409,
          "code": "  display: grid;",
          "explanation": "`.shortcut-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 410,
          "code": "  grid-template-columns: repeat(8, minmax(0, 1fr));",
          "explanation": "`.shortcut-grid`에 `grid-template-columns: repeat(8, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 411,
          "code": "  gap: 14px;",
          "explanation": "`.shortcut-grid`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 412,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 414,
          "code": ".shortcut-tile {",
          "explanation": "`.shortcut-tile` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 415,
          "code": "  min-height: 128px;",
          "explanation": "`.shortcut-tile`에 `min-height: 128px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 416,
          "code": "  display: grid;",
          "explanation": "`.shortcut-tile`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 417,
          "code": "  align-content: center;",
          "explanation": "`.shortcut-tile`에 `align-content: center;`를 적용하는 줄이다. `align-content` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 418,
          "code": "  justify-items: center;",
          "explanation": "`.shortcut-tile`에 `justify-items: center;`를 적용하는 줄이다. `justify-items` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 419,
          "code": "  gap: 10px;",
          "explanation": "`.shortcut-tile`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 420,
          "code": "  padding: 14px 10px;",
          "explanation": "`.shortcut-tile`에 `padding: 14px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 421,
          "code": "  border-radius: 18px;",
          "explanation": "`.shortcut-tile`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 422,
          "code": "  background: rgba(255, 255, 255, 0.86);",
          "explanation": "`.shortcut-tile`에 `background: rgba(255, 255, 255, 0.86);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 423,
          "code": "  text-align: center;",
          "explanation": "`.shortcut-tile`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 424,
          "code": "  cursor: pointer;",
          "explanation": "`.shortcut-tile`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 425,
          "code": "  transition:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 426,
          "code": "    transform 0.18s ease,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 427,
          "code": "    background 0.18s ease,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 428,
          "code": "    border-color 0.18s ease;",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 429,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 431,
          "code": ".shortcut-tile:hover,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 432,
          "code": ".shortcut-tile.is-active {",
          "explanation": "`.shortcut-tile.is-active` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 433,
          "code": "  transform: translateY(-2px);",
          "explanation": "`.shortcut-tile.is-active`에 `transform: translateY(-2px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 434,
          "code": "  border-color: rgba(23, 24, 26, 0.18);",
          "explanation": "`.shortcut-tile.is-active`에 `border-color: rgba(23, 24, 26, 0.18);`를 적용하는 줄이다. `border-color` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 435,
          "code": "  background: white;",
          "explanation": "`.shortcut-tile.is-active`에 `background: white;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 436,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 438,
          "code": ".shortcut-tile strong {",
          "explanation": "`.shortcut-tile strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 439,
          "code": "  font-size: 0.95rem;",
          "explanation": "`.shortcut-tile strong`에 `font-size: 0.95rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 440,
          "code": "  font-weight: 800;",
          "explanation": "`.shortcut-tile strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 441,
          "code": "  line-height: 1.35;",
          "explanation": "`.shortcut-tile strong`에 `line-height: 1.35;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 442,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 444,
          "code": ".shortcut-tile p {",
          "explanation": "`.shortcut-tile p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 445,
          "code": "  margin: 0;",
          "explanation": "`.shortcut-tile p`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 446,
          "code": "  font-size: 0.82rem;",
          "explanation": "`.shortcut-tile p`에 `font-size: 0.82rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 447,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 449,
          "code": ".shortcut-icon {",
          "explanation": "`.shortcut-icon` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 450,
          "code": "  width: 48px;",
          "explanation": "`.shortcut-icon`에 `width: 48px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 451,
          "code": "  height: 48px;",
          "explanation": "`.shortcut-icon`에 `height: 48px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 452,
          "code": "  display: inline-grid;",
          "explanation": "`.shortcut-icon`에 `display: inline-grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 453,
          "code": "  place-items: center;",
          "explanation": "`.shortcut-icon`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 454,
          "code": "  border-radius: 16px;",
          "explanation": "`.shortcut-icon`에 `border-radius: 16px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 455,
          "code": "  font-size: 1rem;",
          "explanation": "`.shortcut-icon`에 `font-size: 1rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 456,
          "code": "  font-weight: 800;",
          "explanation": "`.shortcut-icon`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 457,
          "code": "  color: var(--text);",
          "explanation": "`.shortcut-icon`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 458,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 460,
          "code": ".tone-peach {",
          "explanation": "`.tone-peach` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 461,
          "code": "  background: #ffe1d9;",
          "explanation": "`.tone-peach`에 `background: #ffe1d9;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 462,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 464,
          "code": ".tone-yellow {",
          "explanation": "`.tone-yellow` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 465,
          "code": "  background: #fff0b8;",
          "explanation": "`.tone-yellow`에 `background: #fff0b8;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 466,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 468,
          "code": ".tone-blue {",
          "explanation": "`.tone-blue` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 469,
          "code": "  background: #dce7ff;",
          "explanation": "`.tone-blue`에 `background: #dce7ff;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 470,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 472,
          "code": ".tone-pink {",
          "explanation": "`.tone-pink` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 473,
          "code": "  background: #ffdbe8;",
          "explanation": "`.tone-pink`에 `background: #ffdbe8;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 474,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 476,
          "code": ".tone-green {",
          "explanation": "`.tone-green` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 477,
          "code": "  background: #d9f2dd;",
          "explanation": "`.tone-green`에 `background: #d9f2dd;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 478,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 480,
          "code": ".tone-orange {",
          "explanation": "`.tone-orange` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 481,
          "code": "  background: #ffe1bf;",
          "explanation": "`.tone-orange`에 `background: #ffe1bf;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 482,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 484,
          "code": ".tone-purple {",
          "explanation": "`.tone-purple` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 485,
          "code": "  background: #e7ddff;",
          "explanation": "`.tone-purple`에 `background: #e7ddff;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 486,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 488,
          "code": ".tone-dark {",
          "explanation": "`.tone-dark` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 489,
          "code": "  background: #dadbdd;",
          "explanation": "`.tone-dark`에 `background: #dadbdd;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 490,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 492,
          "code": ".section-block {",
          "explanation": "`.section-block` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 493,
          "code": "  padding: 34px 0;",
          "explanation": "`.section-block`에 `padding: 34px 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 494,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 496,
          "code": ".section-head {",
          "explanation": "`.section-head` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 497,
          "code": "  display: flex;",
          "explanation": "`.section-head`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 498,
          "code": "  align-items: flex-end;",
          "explanation": "`.section-head`에 `align-items: flex-end;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 499,
          "code": "  justify-content: space-between;",
          "explanation": "`.section-head`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 500,
          "code": "  gap: 20px;",
          "explanation": "`.section-head`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 501,
          "code": "  margin-bottom: 18px;",
          "explanation": "`.section-head`에 `margin-bottom: 18px;`를 적용하는 줄이다. `margin-bottom` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 502,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 504,
          "code": ".section-title {",
          "explanation": "`.section-title` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 505,
          "code": "  display: grid;",
          "explanation": "`.section-title`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 506,
          "code": "  gap: 6px;",
          "explanation": "`.section-title`에 `gap: 6px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 507,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 509,
          "code": ".section-title h2 {",
          "explanation": "`.section-title h2` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 510,
          "code": "  font-size: clamp(1.9rem, 4vw, 2.6rem);",
          "explanation": "`.section-title h2`에 `font-size: clamp(1.9rem, 4vw, 2.6rem);`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 511,
          "code": "  font-weight: 800;",
          "explanation": "`.section-title h2`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 512,
          "code": "  letter-spacing: -0.05em;",
          "explanation": "`.section-title h2`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 513,
          "code": "  line-height: 1.04;",
          "explanation": "`.section-title h2`에 `line-height: 1.04;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 514,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 516,
          "code": ".section-title p:last-child {",
          "explanation": "`.section-title p:last-child` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 517,
          "code": "  margin: 0;",
          "explanation": "`.section-title p:last-child`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 518,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 520,
          "code": ".search-panel,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 521,
          "code": ".map-shell,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 522,
          "code": ".utility-note,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 523,
          "code": ".help-box,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 524,
          "code": ".create-panel {",
          "explanation": "`.create-panel` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 525,
          "code": "  border-radius: 24px;",
          "explanation": "`.create-panel`에 `border-radius: 24px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 526,
          "code": "  background: var(--surface);",
          "explanation": "`.create-panel`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 527,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 529,
          "code": "/* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 530,
          "code": ".search-form,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 531,
          "code": ".create-form {",
          "explanation": "`.create-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 532,
          "code": "  display: grid;",
          "explanation": "`.create-form`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 533,
          "code": "  gap: 12px;",
          "explanation": "`.create-form`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 534,
          "code": "  padding: 20px;",
          "explanation": "`.create-form`에 `padding: 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 535,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 537,
          "code": ".search-form {",
          "explanation": "`.search-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 538,
          "code": "  grid-template-columns: repeat(5, minmax(0, 1fr)) auto;",
          "explanation": "`.search-form`에 `grid-template-columns: repeat(5, minmax(0, 1fr)) auto;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 539,
          "code": "  align-items: end;",
          "explanation": "`.search-form`에 `align-items: end;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 540,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 542,
          "code": ".create-shell {",
          "explanation": "`.create-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 543,
          "code": "  display: grid;",
          "explanation": "`.create-shell`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 544,
          "code": "  grid-template-columns: 0.9fr 1.1fr;",
          "explanation": "`.create-shell`에 `grid-template-columns: 0.9fr 1.1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 545,
          "code": "  gap: 20px;",
          "explanation": "`.create-shell`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 546,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 548,
          "code": ".create-copy {",
          "explanation": "`.create-copy` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 549,
          "code": "  display: grid;",
          "explanation": "`.create-copy`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 550,
          "code": "  gap: 18px;",
          "explanation": "`.create-copy`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 551,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 553,
          "code": ".create-panel {",
          "explanation": "`.create-panel` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 554,
          "code": "  grid-template-columns: repeat(2, minmax(0, 1fr));",
          "explanation": "`.create-panel`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 555,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 557,
          "code": ".search-form label,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 558,
          "code": ".create-form label {",
          "explanation": "`.create-form label` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 559,
          "code": "  display: grid;",
          "explanation": "`.create-form label`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 560,
          "code": "  gap: 8px;",
          "explanation": "`.create-form label`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 561,
          "code": "  font-size: 0.92rem;",
          "explanation": "`.create-form label`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 562,
          "code": "  font-weight: 700;",
          "explanation": "`.create-form label`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 563,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 565,
          "code": "input,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 566,
          "code": "select,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 567,
          "code": "textarea {",
          "explanation": "`textarea` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 568,
          "code": "  width: 100%;",
          "explanation": "`textarea`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 569,
          "code": "  border: 1px solid var(--line-strong);",
          "explanation": "`textarea`에 `border: 1px solid var(--line-strong);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 570,
          "code": "  border-radius: 14px;",
          "explanation": "`textarea`에 `border-radius: 14px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 571,
          "code": "  padding: 14px 14px;",
          "explanation": "`textarea`에 `padding: 14px 14px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 572,
          "code": "  background: var(--surface-muted);",
          "explanation": "`textarea`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 573,
          "code": "  color: var(--text);",
          "explanation": "`textarea`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 574,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 576,
          "code": "input::placeholder,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 577,
          "code": "textarea::placeholder {",
          "explanation": "`textarea::placeholder` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 578,
          "code": "  color: rgba(23, 24, 26, 0.4);",
          "explanation": "`textarea::placeholder`에 `color: rgba(23, 24, 26, 0.4);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 579,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 581,
          "code": ".full-span,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 582,
          "code": ".form-actions {",
          "explanation": "`.form-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 583,
          "code": "  grid-column: 1 / -1;",
          "explanation": "`.form-actions`에 `grid-column: 1 / -1;`를 적용하는 줄이다. 그리드에서 차지할 열 범위를 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 584,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 586,
          "code": ".button {",
          "explanation": "`.button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 587,
          "code": "  display: inline-flex;",
          "explanation": "`.button`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 588,
          "code": "  align-items: center;",
          "explanation": "`.button`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 589,
          "code": "  justify-content: center;",
          "explanation": "`.button`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 590,
          "code": "  min-height: 44px;",
          "explanation": "`.button`에 `min-height: 44px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 591,
          "code": "  padding: 10px 18px;",
          "explanation": "`.button`에 `padding: 10px 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 592,
          "code": "  border: 1px solid transparent;",
          "explanation": "`.button`에 `border: 1px solid transparent;`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 593,
          "code": "  border-radius: 14px;",
          "explanation": "`.button`에 `border-radius: 14px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 594,
          "code": "  cursor: pointer;",
          "explanation": "`.button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 595,
          "code": "  font-weight: 700;",
          "explanation": "`.button`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 596,
          "code": "  transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;",
          "explanation": "`.button`에 `transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;`를 적용하는 줄이다. 상태 변화가 부드럽게 보이도록 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 597,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 599,
          "code": ".button:hover {",
          "explanation": "`.button:hover` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 600,
          "code": "  transform: translateY(-1px);",
          "explanation": "`.button:hover`에 `transform: translateY(-1px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 601,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 603,
          "code": ".button:disabled {",
          "explanation": "`.button:disabled` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 604,
          "code": "  cursor: not-allowed;",
          "explanation": "`.button:disabled`에 `cursor: not-allowed;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 605,
          "code": "  opacity: 0.5;",
          "explanation": "`.button:disabled`에 `opacity: 0.5;`를 적용하는 줄이다. 투명도를 조절한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 606,
          "code": "  transform: none;",
          "explanation": "`.button:disabled`에 `transform: none;`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 607,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 609,
          "code": ".button.primary {",
          "explanation": "`.button.primary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 610,
          "code": "  background: var(--accent);",
          "explanation": "`.button.primary`에 `background: var(--accent);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 611,
          "code": "  color: white;",
          "explanation": "`.button.primary`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 612,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 614,
          "code": ".button.secondary {",
          "explanation": "`.button.secondary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 615,
          "code": "  border-color: var(--line-strong);",
          "explanation": "`.button.secondary`에 `border-color: var(--line-strong);`를 적용하는 줄이다. `border-color` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 616,
          "code": "  background: var(--surface);",
          "explanation": "`.button.secondary`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 617,
          "code": "  color: var(--text);",
          "explanation": "`.button.secondary`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 618,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 620,
          "code": ".button.ghost {",
          "explanation": "`.button.ghost` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 621,
          "code": "  border-color: var(--line-strong);",
          "explanation": "`.button.ghost`에 `border-color: var(--line-strong);`를 적용하는 줄이다. `border-color` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 622,
          "code": "  background: transparent;",
          "explanation": "`.button.ghost`에 `background: transparent;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 623,
          "code": "  color: var(--text);",
          "explanation": "`.button.ghost`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 624,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 626,
          "code": ".button.danger {",
          "explanation": "`.button.danger` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 627,
          "code": "  background: var(--danger);",
          "explanation": "`.button.danger`에 `background: var(--danger);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 628,
          "code": "  color: white;",
          "explanation": "`.button.danger`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 629,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 631,
          "code": ".form-actions {",
          "explanation": "`.form-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 632,
          "code": "  display: flex;",
          "explanation": "`.form-actions`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 633,
          "code": "  gap: 10px;",
          "explanation": "`.form-actions`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 634,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 636,
          "code": ".result-summary {",
          "explanation": "`.result-summary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 637,
          "code": "  margin: 14px 4px 0;",
          "explanation": "`.result-summary`에 `margin: 14px 4px 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 638,
          "code": "  color: var(--muted);",
          "explanation": "`.result-summary`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 639,
          "code": "  font-size: 0.92rem;",
          "explanation": "`.result-summary`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 640,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 642,
          "code": "/* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 643,
          "code": ".meeting-list {",
          "explanation": "`.meeting-list` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 644,
          "code": "  display: grid;",
          "explanation": "`.meeting-list`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 645,
          "code": "  grid-template-columns: repeat(4, minmax(0, 1fr));",
          "explanation": "`.meeting-list`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 646,
          "code": "  gap: 24px 20px;",
          "explanation": "`.meeting-list`에 `gap: 24px 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 647,
          "code": "  margin-top: 18px;",
          "explanation": "`.meeting-list`에 `margin-top: 18px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 648,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 650,
          "code": ".meeting-card {",
          "explanation": "`.meeting-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 651,
          "code": "  display: grid;",
          "explanation": "`.meeting-card`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 652,
          "code": "  gap: 12px;",
          "explanation": "`.meeting-card`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 653,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 655,
          "code": ".card-poster,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 656,
          "code": ".mine-list .card-poster,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 657,
          "code": ".manage-list .card-poster {",
          "explanation": "`.manage-list .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 658,
          "code": "  position: relative;",
          "explanation": "`.manage-list .card-poster`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 659,
          "code": "  min-height: 176px;",
          "explanation": "`.manage-list .card-poster`에 `min-height: 176px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 660,
          "code": "  padding: 14px;",
          "explanation": "`.manage-list .card-poster`에 `padding: 14px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 661,
          "code": "  border-radius: 18px;",
          "explanation": "`.manage-list .card-poster`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 662,
          "code": "  overflow: hidden;",
          "explanation": "`.manage-list .card-poster`에 `overflow: hidden;`를 적용하는 줄이다. 넘치는 내용 처리 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 663,
          "code": "  box-shadow: var(--shadow);",
          "explanation": "`.manage-list .card-poster`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 664,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 666,
          "code": ".meeting-list .meeting-card:nth-child(4n + 1) .card-poster {",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 1) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 667,
          "code": "  background: linear-gradient(145deg, #121315, #272a2d);",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 1) .card-poster`에 `background: linear-gradient(145deg, #121315, #272a2d);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 668,
          "code": "  color: white;",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 1) .card-poster`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 669,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 671,
          "code": ".meeting-list .meeting-card:nth-child(4n + 2) .card-poster {",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 2) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 672,
          "code": "  background: linear-gradient(145deg, #312019, #5e3a2d);",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 2) .card-poster`에 `background: linear-gradient(145deg, #312019, #5e3a2d);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 673,
          "code": "  color: white;",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 2) .card-poster`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 674,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 676,
          "code": ".meeting-list .meeting-card:nth-child(4n + 3) .card-poster {",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 3) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 677,
          "code": "  background: linear-gradient(145deg, #fff1dc, #ffd6d6);",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 3) .card-poster`에 `background: linear-gradient(145deg, #fff1dc, #ffd6d6);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 678,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 680,
          "code": ".meeting-list .meeting-card:nth-child(4n + 4) .card-poster {",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 4) .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 681,
          "code": "  background: linear-gradient(145deg, #f8d6d8, #a76b74);",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 4) .card-poster`에 `background: linear-gradient(145deg, #f8d6d8, #a76b74);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 682,
          "code": "  color: white;",
          "explanation": "`.meeting-list .meeting-card:nth-child(4n + 4) .card-poster`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 683,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 685,
          "code": ".mine-list .meeting-card .card-poster {",
          "explanation": "`.mine-list .meeting-card .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 686,
          "code": "  background: linear-gradient(145deg, #dfe8ff, #b7cdfd);",
          "explanation": "`.mine-list .meeting-card .card-poster`에 `background: linear-gradient(145deg, #dfe8ff, #b7cdfd);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 687,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 689,
          "code": ".manage-list .meeting-card .card-poster {",
          "explanation": "`.manage-list .meeting-card .card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 690,
          "code": "  background: linear-gradient(145deg, #ffe9da, #f9c7aa);",
          "explanation": "`.manage-list .meeting-card .card-poster`에 `background: linear-gradient(145deg, #ffe9da, #f9c7aa);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 691,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 693,
          "code": ".card-poster::before,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 694,
          "code": ".card-poster::after {",
          "explanation": "`.card-poster::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 695,
          "code": "  content: \"\";",
          "explanation": "`.card-poster::after`에 `content: \"\";`를 적용하는 줄이다. 가상 요소에 들어갈 내용을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 696,
          "code": "  position: absolute;",
          "explanation": "`.card-poster::after`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 697,
          "code": "  border-radius: 999px;",
          "explanation": "`.card-poster::after`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 698,
          "code": "  pointer-events: none;",
          "explanation": "`.card-poster::after`에 `pointer-events: none;`를 적용하는 줄이다. `pointer-events` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 699,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 701,
          "code": ".card-poster::before {",
          "explanation": "`.card-poster::before` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 702,
          "code": "  width: 170px;",
          "explanation": "`.card-poster::before`에 `width: 170px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 703,
          "code": "  height: 170px;",
          "explanation": "`.card-poster::before`에 `height: 170px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 704,
          "code": "  right: -38px;",
          "explanation": "`.card-poster::before`에 `right: -38px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 705,
          "code": "  bottom: -54px;",
          "explanation": "`.card-poster::before`에 `bottom: -54px;`를 적용하는 줄이다. 아래쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 706,
          "code": "  background: rgba(255, 255, 255, 0.14);",
          "explanation": "`.card-poster::before`에 `background: rgba(255, 255, 255, 0.14);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 707,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 709,
          "code": ".card-poster::after {",
          "explanation": "`.card-poster::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 710,
          "code": "  width: 90px;",
          "explanation": "`.card-poster::after`에 `width: 90px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 711,
          "code": "  height: 90px;",
          "explanation": "`.card-poster::after`에 `height: 90px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 712,
          "code": "  right: 18px;",
          "explanation": "`.card-poster::after`에 `right: 18px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 713,
          "code": "  top: 16px;",
          "explanation": "`.card-poster::after`에 `top: 16px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 714,
          "code": "  background: rgba(255, 255, 255, 0.1);",
          "explanation": "`.card-poster::after`에 `background: rgba(255, 255, 255, 0.1);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 715,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 717,
          "code": ".card-pills {",
          "explanation": "`.card-pills` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 718,
          "code": "  position: relative;",
          "explanation": "`.card-pills`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 719,
          "code": "  z-index: 1;",
          "explanation": "`.card-pills`에 `z-index: 1;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 720,
          "code": "  display: flex;",
          "explanation": "`.card-pills`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 721,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.card-pills`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 722,
          "code": "  align-items: center;",
          "explanation": "`.card-pills`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 723,
          "code": "  gap: 8px;",
          "explanation": "`.card-pills`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 724,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 726,
          "code": ".card-pill {",
          "explanation": "`.card-pill` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 727,
          "code": "  display: inline-flex;",
          "explanation": "`.card-pill`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 728,
          "code": "  align-items: center;",
          "explanation": "`.card-pill`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 729,
          "code": "  justify-content: center;",
          "explanation": "`.card-pill`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 730,
          "code": "  min-height: 28px;",
          "explanation": "`.card-pill`에 `min-height: 28px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 731,
          "code": "  padding: 4px 10px;",
          "explanation": "`.card-pill`에 `padding: 4px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 732,
          "code": "  border-radius: 999px;",
          "explanation": "`.card-pill`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 733,
          "code": "  border: 1px solid rgba(255, 255, 255, 0.26);",
          "explanation": "`.card-pill`에 `border: 1px solid rgba(255, 255, 255, 0.26);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 734,
          "code": "  background: rgba(255, 255, 255, 0.92);",
          "explanation": "`.card-pill`에 `background: rgba(255, 255, 255, 0.92);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 735,
          "code": "  color: var(--text);",
          "explanation": "`.card-pill`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 736,
          "code": "  font-size: 0.74rem;",
          "explanation": "`.card-pill`에 `font-size: 0.74rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 737,
          "code": "  font-weight: 800;",
          "explanation": "`.card-pill`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 738,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 740,
          "code": ".card-pill.primary {",
          "explanation": "`.card-pill.primary` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 741,
          "code": "  border-color: transparent;",
          "explanation": "`.card-pill.primary`에 `border-color: transparent;`를 적용하는 줄이다. `border-color` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 742,
          "code": "  background: #ff6542;",
          "explanation": "`.card-pill.primary`에 `background: #ff6542;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 743,
          "code": "  color: white;",
          "explanation": "`.card-pill.primary`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 744,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 746,
          "code": ".card-code {",
          "explanation": "`.card-code` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 747,
          "code": "  position: absolute;",
          "explanation": "`.card-code`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 748,
          "code": "  right: 14px;",
          "explanation": "`.card-code`에 `right: 14px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 749,
          "code": "  bottom: 14px;",
          "explanation": "`.card-code`에 `bottom: 14px;`를 적용하는 줄이다. 아래쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 750,
          "code": "  z-index: 1;",
          "explanation": "`.card-code`에 `z-index: 1;`를 적용하는 줄이다. 겹칠 때 앞뒤 순서를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 751,
          "code": "  font-size: 0.78rem;",
          "explanation": "`.card-code`에 `font-size: 0.78rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 752,
          "code": "  font-weight: 800;",
          "explanation": "`.card-code`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 753,
          "code": "  letter-spacing: 0.02em;",
          "explanation": "`.card-code`에 `letter-spacing: 0.02em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 754,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 756,
          "code": ".card-copy {",
          "explanation": "`.card-copy` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 757,
          "code": "  display: grid;",
          "explanation": "`.card-copy`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 758,
          "code": "  gap: 10px;",
          "explanation": "`.card-copy`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 759,
          "code": "  padding: 0 2px 2px;",
          "explanation": "`.card-copy`에 `padding: 0 2px 2px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 760,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 762,
          "code": ".card-location,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 763,
          "code": ".card-schedule {",
          "explanation": "`.card-schedule` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 764,
          "code": "  margin: 0;",
          "explanation": "`.card-schedule`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 765,
          "code": "  font-size: 0.85rem;",
          "explanation": "`.card-schedule`에 `font-size: 0.85rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 766,
          "code": "  color: var(--muted);",
          "explanation": "`.card-schedule`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 767,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 769,
          "code": ".meeting-card h3 {",
          "explanation": "`.meeting-card h3` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 770,
          "code": "  margin: 0;",
          "explanation": "`.meeting-card h3`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 771,
          "code": "  font-size: 1.45rem;",
          "explanation": "`.meeting-card h3`에 `font-size: 1.45rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 772,
          "code": "  font-weight: 800;",
          "explanation": "`.meeting-card h3`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 773,
          "code": "  letter-spacing: -0.05em;",
          "explanation": "`.meeting-card h3`에 `letter-spacing: -0.05em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 774,
          "code": "  line-height: 1.2;",
          "explanation": "`.meeting-card h3`에 `line-height: 1.2;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 775,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 777,
          "code": ".description-preview {",
          "explanation": "`.description-preview` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 778,
          "code": "  min-height: 46px;",
          "explanation": "`.description-preview`에 `min-height: 46px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 779,
          "code": "  margin: 0;",
          "explanation": "`.description-preview`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 780,
          "code": "  font-size: 0.92rem;",
          "explanation": "`.description-preview`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 781,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 783,
          "code": ".meta-row,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 784,
          "code": ".dialog-meta {",
          "explanation": "`.dialog-meta` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 785,
          "code": "  display: flex;",
          "explanation": "`.dialog-meta`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 786,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.dialog-meta`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 787,
          "code": "  gap: 8px;",
          "explanation": "`.dialog-meta`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 788,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 790,
          "code": ".meta-chip {",
          "explanation": "`.meta-chip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 791,
          "code": "  display: inline-flex;",
          "explanation": "`.meta-chip`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 792,
          "code": "  align-items: center;",
          "explanation": "`.meta-chip`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 793,
          "code": "  justify-content: center;",
          "explanation": "`.meta-chip`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 794,
          "code": "  min-height: 30px;",
          "explanation": "`.meta-chip`에 `min-height: 30px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 795,
          "code": "  padding: 5px 10px;",
          "explanation": "`.meta-chip`에 `padding: 5px 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 796,
          "code": "  border-radius: 999px;",
          "explanation": "`.meta-chip`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 797,
          "code": "  background: var(--surface-muted);",
          "explanation": "`.meta-chip`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 798,
          "code": "  border: 1px solid var(--line);",
          "explanation": "`.meta-chip`에 `border: 1px solid var(--line);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 799,
          "code": "  font-size: 0.76rem;",
          "explanation": "`.meta-chip`에 `font-size: 0.76rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 800,
          "code": "  font-weight: 700;",
          "explanation": "`.meta-chip`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 801,
          "code": "  color: var(--text);",
          "explanation": "`.meta-chip`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 802,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 804,
          "code": ".card-footer {",
          "explanation": "`.card-footer` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 805,
          "code": "  display: grid;",
          "explanation": "`.card-footer`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 806,
          "code": "  gap: 12px;",
          "explanation": "`.card-footer`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 807,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 809,
          "code": ".card-actions,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 810,
          "code": ".dialog-owner-actions {",
          "explanation": "`.dialog-owner-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 811,
          "code": "  display: flex;",
          "explanation": "`.dialog-owner-actions`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 812,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.dialog-owner-actions`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 813,
          "code": "  gap: 8px;",
          "explanation": "`.dialog-owner-actions`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 814,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 816,
          "code": ".card-actions .button,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 817,
          "code": ".dialog-owner-actions .button {",
          "explanation": "`.dialog-owner-actions .button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 818,
          "code": "  min-height: 38px;",
          "explanation": "`.dialog-owner-actions .button`에 `min-height: 38px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 819,
          "code": "  padding: 8px 12px;",
          "explanation": "`.dialog-owner-actions .button`에 `padding: 8px 12px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 820,
          "code": "  font-size: 0.86rem;",
          "explanation": "`.dialog-owner-actions .button`에 `font-size: 0.86rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 821,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 823,
          "code": ".utility-grid {",
          "explanation": "`.utility-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 824,
          "code": "  display: grid;",
          "explanation": "`.utility-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 825,
          "code": "  grid-template-columns: 1.2fr 0.8fr;",
          "explanation": "`.utility-grid`에 `grid-template-columns: 1.2fr 0.8fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 826,
          "code": "  gap: 20px;",
          "explanation": "`.utility-grid`에 `gap: 20px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 827,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 829,
          "code": ".map-shell {",
          "explanation": "`.map-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 830,
          "code": "  display: grid;",
          "explanation": "`.map-shell`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 831,
          "code": "  grid-template-columns: 0.92fr 1.08fr;",
          "explanation": "`.map-shell`에 `grid-template-columns: 0.92fr 1.08fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 832,
          "code": "  gap: 18px;",
          "explanation": "`.map-shell`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 833,
          "code": "  padding: 24px;",
          "explanation": "`.map-shell`에 `padding: 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 834,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 836,
          "code": ".map-copy h2,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 837,
          "code": ".help-box h3,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 838,
          "code": ".utility-note h3,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 839,
          "code": ".dialog-description h3 {",
          "explanation": "`.dialog-description h3` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 840,
          "code": "  font-size: 1.65rem;",
          "explanation": "`.dialog-description h3`에 `font-size: 1.65rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 841,
          "code": "  font-weight: 800;",
          "explanation": "`.dialog-description h3`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 842,
          "code": "  letter-spacing: -0.04em;",
          "explanation": "`.dialog-description h3`에 `letter-spacing: -0.04em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 843,
          "code": "  line-height: 1.1;",
          "explanation": "`.dialog-description h3`에 `line-height: 1.1;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 844,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 846,
          "code": ".mini-feature-grid {",
          "explanation": "`.mini-feature-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 847,
          "code": "  display: grid;",
          "explanation": "`.mini-feature-grid`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 848,
          "code": "  grid-template-columns: repeat(2, minmax(0, 1fr));",
          "explanation": "`.mini-feature-grid`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 849,
          "code": "  gap: 12px;",
          "explanation": "`.mini-feature-grid`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 850,
          "code": "  margin-top: 18px;",
          "explanation": "`.mini-feature-grid`에 `margin-top: 18px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 851,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 853,
          "code": ".mini-feature-grid article {",
          "explanation": "`.mini-feature-grid article` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 854,
          "code": "  padding: 18px;",
          "explanation": "`.mini-feature-grid article`에 `padding: 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 855,
          "code": "  border-radius: 18px;",
          "explanation": "`.mini-feature-grid article`에 `border-radius: 18px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 856,
          "code": "  background: var(--surface-muted);",
          "explanation": "`.mini-feature-grid article`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 857,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 859,
          "code": ".mini-feature-grid strong {",
          "explanation": "`.mini-feature-grid strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 860,
          "code": "  display: block;",
          "explanation": "`.mini-feature-grid strong`에 `display: block;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 861,
          "code": "  margin-bottom: 8px;",
          "explanation": "`.mini-feature-grid strong`에 `margin-bottom: 8px;`를 적용하는 줄이다. `margin-bottom` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 862,
          "code": "  font-size: 1rem;",
          "explanation": "`.mini-feature-grid strong`에 `font-size: 1rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 863,
          "code": "  font-weight: 800;",
          "explanation": "`.mini-feature-grid strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 864,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 866,
          "code": ".mini-feature-grid p {",
          "explanation": "`.mini-feature-grid p` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 867,
          "code": "  margin: 0;",
          "explanation": "`.mini-feature-grid p`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 868,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 870,
          "code": ".map-placeholder {",
          "explanation": "`.map-placeholder` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 871,
          "code": "  min-height: 280px;",
          "explanation": "`.map-placeholder`에 `min-height: 280px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 872,
          "code": "  display: grid;",
          "explanation": "`.map-placeholder`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 873,
          "code": "  place-items: center;",
          "explanation": "`.map-placeholder`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 874,
          "code": "  border-radius: 22px;",
          "explanation": "`.map-placeholder`에 `border-radius: 22px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 875,
          "code": "  background:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 876,
          "code": "    radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 877,
          "code": "    linear-gradient(145deg, #f7efe0, #ead8b7);",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 878,
          "code": "  box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);",
          "explanation": "`.map-placeholder`에 `box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 879,
          "code": "  text-align: center;",
          "explanation": "`.map-placeholder`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 880,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 882,
          "code": ".utility-note,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 883,
          "code": ".help-box {",
          "explanation": "`.help-box` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 884,
          "code": "  padding: 24px;",
          "explanation": "`.help-box`에 `padding: 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 885,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 887,
          "code": ".utility-note ul,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 888,
          "code": ".help-box ul {",
          "explanation": "`.help-box ul` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 889,
          "code": "  margin: 0;",
          "explanation": "`.help-box ul`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 890,
          "code": "  padding-left: 18px;",
          "explanation": "`.help-box ul`에 `padding-left: 18px;`를 적용하는 줄이다. `padding-left` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 891,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 893,
          "code": ".empty-state {",
          "explanation": "`.empty-state` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 894,
          "code": "  grid-column: 1 / -1;",
          "explanation": "`.empty-state`에 `grid-column: 1 / -1;`를 적용하는 줄이다. 그리드에서 차지할 열 범위를 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 895,
          "code": "  padding: 28px 22px;",
          "explanation": "`.empty-state`에 `padding: 28px 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 896,
          "code": "  border-radius: 20px;",
          "explanation": "`.empty-state`에 `border-radius: 20px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 897,
          "code": "  border: 1px dashed var(--line-strong);",
          "explanation": "`.empty-state`에 `border: 1px dashed var(--line-strong);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 898,
          "code": "  background: var(--surface);",
          "explanation": "`.empty-state`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 899,
          "code": "  color: var(--muted);",
          "explanation": "`.empty-state`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 900,
          "code": "  text-align: center;",
          "explanation": "`.empty-state`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 901,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 903,
          "code": ".detail-dialog {",
          "explanation": "`.detail-dialog` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 904,
          "code": "  width: min(720px, calc(100% - 24px));",
          "explanation": "`.detail-dialog`에 `width: min(720px, calc(100% - 24px));`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 905,
          "code": "  padding: 0;",
          "explanation": "`.detail-dialog`에 `padding: 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 906,
          "code": "  border: 0;",
          "explanation": "`.detail-dialog`에 `border: 0;`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 907,
          "code": "  border-radius: 24px;",
          "explanation": "`.detail-dialog`에 `border-radius: 24px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 908,
          "code": "  background: var(--surface);",
          "explanation": "`.detail-dialog`에 `background: var(--surface);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 909,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 911,
          "code": ".detail-dialog::backdrop {",
          "explanation": "`.detail-dialog::backdrop` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 912,
          "code": "  background: rgba(17, 17, 17, 0.34);",
          "explanation": "`.detail-dialog::backdrop`에 `background: rgba(17, 17, 17, 0.34);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 913,
          "code": "  backdrop-filter: blur(3px);",
          "explanation": "`.detail-dialog::backdrop`에 `backdrop-filter: blur(3px);`를 적용하는 줄이다. 뒤 배경에 흐림 같은 효과를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 914,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 916,
          "code": ".dialog-shell {",
          "explanation": "`.dialog-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 917,
          "code": "  display: grid;",
          "explanation": "`.dialog-shell`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 918,
          "code": "  gap: 18px;",
          "explanation": "`.dialog-shell`에 `gap: 18px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 919,
          "code": "  padding: 24px;",
          "explanation": "`.dialog-shell`에 `padding: 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 920,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 922,
          "code": ".dialog-header {",
          "explanation": "`.dialog-header` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 923,
          "code": "  display: flex;",
          "explanation": "`.dialog-header`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 924,
          "code": "  align-items: flex-start;",
          "explanation": "`.dialog-header`에 `align-items: flex-start;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 925,
          "code": "  justify-content: space-between;",
          "explanation": "`.dialog-header`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 926,
          "code": "  gap: 16px;",
          "explanation": "`.dialog-header`에 `gap: 16px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 927,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 929,
          "code": ".dialog-description {",
          "explanation": "`.dialog-description` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 930,
          "code": "  padding: 20px;",
          "explanation": "`.dialog-description`에 `padding: 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 931,
          "code": "  border-radius: 20px;",
          "explanation": "`.dialog-description`에 `border-radius: 20px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 932,
          "code": "  background: var(--surface-muted);",
          "explanation": "`.dialog-description`에 `background: var(--surface-muted);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 933,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 935,
          "code": ".is-hidden {",
          "explanation": "`.is-hidden` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 936,
          "code": "  display: none !important;",
          "explanation": "`.is-hidden`에 `display: none !important;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 937,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 939,
          "code": ".site-footer {",
          "explanation": "`.site-footer` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 940,
          "code": "  padding: 28px 0 54px;",
          "explanation": "`.site-footer`에 `padding: 28px 0 54px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 941,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 943,
          "code": ".footer-row {",
          "explanation": "`.footer-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 944,
          "code": "  display: flex;",
          "explanation": "`.footer-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 945,
          "code": "  align-items: center;",
          "explanation": "`.footer-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 946,
          "code": "  justify-content: space-between;",
          "explanation": "`.footer-row`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 947,
          "code": "  gap: 24px;",
          "explanation": "`.footer-row`에 `gap: 24px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 948,
          "code": "  padding: 24px 0 0;",
          "explanation": "`.footer-row`에 `padding: 24px 0 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 949,
          "code": "  border-top: 1px solid var(--line);",
          "explanation": "`.footer-row`에 `border-top: 1px solid var(--line);`를 적용하는 줄이다. `border-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 950,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 952,
          "code": ".footer-text {",
          "explanation": "`.footer-text` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 953,
          "code": "  max-width: 34rem;",
          "explanation": "`.footer-text`에 `max-width: 34rem;`를 적용하는 줄이다. `max-width` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 954,
          "code": "  margin: 8px 0 0;",
          "explanation": "`.footer-text`에 `margin: 8px 0 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 955,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 957,
          "code": ".footer-links {",
          "explanation": "`.footer-links` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 958,
          "code": "  flex-wrap: wrap;",
          "explanation": "`.footer-links`에 `flex-wrap: wrap;`를 적용하는 줄이다. 줄바꿈 허용 여부를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 959,
          "code": "  justify-content: flex-end;",
          "explanation": "`.footer-links`에 `justify-content: flex-end;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 960,
          "code": "  gap: 16px;",
          "explanation": "`.footer-links`에 `gap: 16px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 961,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 963,
          "code": ".footer-links a {",
          "explanation": "`.footer-links a` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 964,
          "code": "  color: var(--muted);",
          "explanation": "`.footer-links a`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 965,
          "code": "  font-size: 0.92rem;",
          "explanation": "`.footer-links a`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 966,
          "code": "  font-weight: 700;",
          "explanation": "`.footer-links a`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 967,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 969,
          "code": "@media (max-width: 1120px) {",
          "explanation": "반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 970,
          "code": "  .hero-banner,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 971,
          "code": "  .utility-grid,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 972,
          "code": "  .create-shell,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 973,
          "code": "  .map-shell {",
          "explanation": "`.map-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 974,
          "code": "    grid-template-columns: 1fr;",
          "explanation": "`.map-shell`에 `grid-template-columns: 1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 975,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 977,
          "code": "  .shortcut-grid {",
          "explanation": "`.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 978,
          "code": "    grid-template-columns: repeat(4, minmax(0, 1fr));",
          "explanation": "`.shortcut-grid`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 979,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 981,
          "code": "  .status-strip,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 982,
          "code": "  .meeting-list {",
          "explanation": "`.meeting-list` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 983,
          "code": "    grid-template-columns: repeat(2, minmax(0, 1fr));",
          "explanation": "`.meeting-list`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 984,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 986,
          "code": "  .search-form {",
          "explanation": "`.search-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 987,
          "code": "    grid-template-columns: repeat(3, minmax(0, 1fr));",
          "explanation": "`.search-form`에 `grid-template-columns: repeat(3, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 988,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 990,
          "code": "  .hero-orb {",
          "explanation": "`.hero-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 991,
          "code": "    position: static;",
          "explanation": "`.hero-orb`에 `position: static;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 992,
          "code": "    width: min(100%, 420px);",
          "explanation": "`.hero-orb`에 `width: min(100%, 420px);`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 993,
          "code": "    margin-inline: auto;",
          "explanation": "`.hero-orb`에 `margin-inline: auto;`를 적용하는 줄이다. `margin-inline` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 994,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 996,
          "code": "  .hero-media {",
          "explanation": "`.hero-media` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 997,
          "code": "    min-height: auto;",
          "explanation": "`.hero-media`에 `min-height: auto;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 998,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 999,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 1001,
          "code": "@media (max-width: 780px) {",
          "explanation": "반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 1002,
          "code": "  .nav-row,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1003,
          "code": "  .brand-group,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1004,
          "code": "  .footer-row,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1005,
          "code": "  .section-head,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1006,
          "code": "  .dialog-header,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1007,
          "code": "  .card-actions,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1008,
          "code": "  .dialog-owner-actions,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1009,
          "code": "  .form-actions,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1010,
          "code": "  .hero-actions {",
          "explanation": "`.hero-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1011,
          "code": "    flex-direction: column;",
          "explanation": "`.hero-actions`에 `flex-direction: column;`를 적용하는 줄이다. `flex-direction` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1012,
          "code": "    align-items: stretch;",
          "explanation": "`.hero-actions`에 `align-items: stretch;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1013,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1015,
          "code": "  .nav-row,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1016,
          "code": "  .sub-menu {",
          "explanation": "`.sub-menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1017,
          "code": "    padding: 14px 0;",
          "explanation": "`.sub-menu`에 `padding: 14px 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1018,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1020,
          "code": "  .brand-group {",
          "explanation": "`.brand-group` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1021,
          "code": "    gap: 14px;",
          "explanation": "`.brand-group`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1022,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1024,
          "code": "  .header-actions {",
          "explanation": "`.header-actions` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1025,
          "code": "    width: 100%;",
          "explanation": "`.header-actions`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1026,
          "code": "    justify-content: flex-start;",
          "explanation": "`.header-actions`에 `justify-content: flex-start;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1027,
          "code": "    gap: 8px;",
          "explanation": "`.header-actions`에 `gap: 8px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1028,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1030,
          "code": "  .hero-banner,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1031,
          "code": "  .shortcut-shell,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1032,
          "code": "  .search-form,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1033,
          "code": "  .map-shell,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1034,
          "code": "  .utility-note,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1035,
          "code": "  .help-box,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1036,
          "code": "  .create-form,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1037,
          "code": "  .dialog-shell {",
          "explanation": "`.dialog-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1038,
          "code": "    padding: 18px;",
          "explanation": "`.dialog-shell`에 `padding: 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1039,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1041,
          "code": "  .hero-copy h1 {",
          "explanation": "`.hero-copy h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1042,
          "code": "    max-width: none;",
          "explanation": "`.hero-copy h1`에 `max-width: none;`를 적용하는 줄이다. `max-width` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1043,
          "code": "    font-size: clamp(2.5rem, 11vw, 3.3rem);",
          "explanation": "`.hero-copy h1`에 `font-size: clamp(2.5rem, 11vw, 3.3rem);`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1044,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1046,
          "code": "  .hero-teaser-grid,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1047,
          "code": "  .meeting-list,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1048,
          "code": "  .mini-feature-grid,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1049,
          "code": "  .search-form,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1050,
          "code": "  .create-panel {",
          "explanation": "`.create-panel` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1051,
          "code": "    grid-template-columns: 1fr;",
          "explanation": "`.create-panel`에 `grid-template-columns: 1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1052,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1054,
          "code": "  .status-strip {",
          "explanation": "`.status-strip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1055,
          "code": "    grid-template-columns: repeat(2, minmax(0, 1fr));",
          "explanation": "`.status-strip`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1056,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1058,
          "code": "  .shortcut-grid {",
          "explanation": "`.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1059,
          "code": "    grid-template-columns: repeat(4, minmax(0, 1fr));",
          "explanation": "`.shortcut-grid`에 `grid-template-columns: repeat(4, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1060,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1062,
          "code": "  .hero-orb {",
          "explanation": "`.hero-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1063,
          "code": "    width: 100%;",
          "explanation": "`.hero-orb`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1064,
          "code": "    border-radius: 32px;",
          "explanation": "`.hero-orb`에 `border-radius: 32px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1065,
          "code": "    aspect-ratio: auto;",
          "explanation": "`.hero-orb`에 `aspect-ratio: auto;`를 적용하는 줄이다. 가로세로 비율을 고정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1066,
          "code": "    min-height: 260px;",
          "explanation": "`.hero-orb`에 `min-height: 260px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1067,
          "code": "    padding: 18px;",
          "explanation": "`.hero-orb`에 `padding: 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1068,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1070,
          "code": "  .hero-page-indicator {",
          "explanation": "`.hero-page-indicator` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1071,
          "code": "    position: static;",
          "explanation": "`.hero-page-indicator`에 `position: static;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1072,
          "code": "    margin-top: 12px;",
          "explanation": "`.hero-page-indicator`에 `margin-top: 12px;`를 적용하는 줄이다. `margin-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1073,
          "code": "    justify-self: flex-end;",
          "explanation": "`.hero-page-indicator`에 `justify-self: flex-end;`를 적용하는 줄이다. `justify-self` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1074,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1076,
          "code": "  .hero-nav-button {",
          "explanation": "`.hero-nav-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1077,
          "code": "    top: 18px;",
          "explanation": "`.hero-nav-button`에 `top: 18px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1078,
          "code": "    transform: none;",
          "explanation": "`.hero-nav-button`에 `transform: none;`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1079,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1081,
          "code": "  .hero-nav-prev {",
          "explanation": "`.hero-nav-prev` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1082,
          "code": "    left: 18px;",
          "explanation": "`.hero-nav-prev`에 `left: 18px;`를 적용하는 줄이다. 왼쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1083,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1085,
          "code": "  .hero-nav-next {",
          "explanation": "`.hero-nav-next` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1086,
          "code": "    right: 18px;",
          "explanation": "`.hero-nav-next`에 `right: 18px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1087,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1089,
          "code": "  .button,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1090,
          "code": "  .card-actions .button,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1091,
          "code": "  .dialog-owner-actions .button {",
          "explanation": "`.dialog-owner-actions .button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1092,
          "code": "    width: 100%;",
          "explanation": "`.dialog-owner-actions .button`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1093,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1095,
          "code": "  .footer-links {",
          "explanation": "`.footer-links` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1096,
          "code": "    justify-content: flex-start;",
          "explanation": "`.footer-links`에 `justify-content: flex-start;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1097,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1098,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 1100,
          "code": "@media (max-width: 520px) {",
          "explanation": "반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 1101,
          "code": "  .container {",
          "explanation": "`.container` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1102,
          "code": "    width: min(1180px, calc(100% - 24px));",
          "explanation": "`.container`에 `width: min(1180px, calc(100% - 24px));`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1103,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1105,
          "code": "  .brand,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1106,
          "code": "  .footer-brand {",
          "explanation": "`.footer-brand` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1107,
          "code": "    font-size: 1.7rem;",
          "explanation": "`.footer-brand`에 `font-size: 1.7rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1108,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1110,
          "code": "  .sub-menu {",
          "explanation": "`.sub-menu` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1111,
          "code": "    gap: 14px;",
          "explanation": "`.sub-menu`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1112,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1114,
          "code": "  .hero-banner {",
          "explanation": "`.hero-banner` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1115,
          "code": "    padding: 20px;",
          "explanation": "`.hero-banner`에 `padding: 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1116,
          "code": "    border-radius: 28px;",
          "explanation": "`.hero-banner`에 `border-radius: 28px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1117,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1119,
          "code": "  .hero-copy h1 {",
          "explanation": "`.hero-copy h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1120,
          "code": "    font-size: clamp(2.1rem, 10vw, 2.8rem);",
          "explanation": "`.hero-copy h1`에 `font-size: clamp(2.1rem, 10vw, 2.8rem);`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1121,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1123,
          "code": "  .shortcut-grid {",
          "explanation": "`.shortcut-grid` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1124,
          "code": "    grid-template-columns: repeat(2, minmax(0, 1fr));",
          "explanation": "`.shortcut-grid`에 `grid-template-columns: repeat(2, minmax(0, 1fr));`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1125,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1127,
          "code": "  .shortcut-tile {",
          "explanation": "`.shortcut-tile` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1128,
          "code": "    min-height: 102px;",
          "explanation": "`.shortcut-tile`에 `min-height: 102px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1129,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1131,
          "code": "  .status-strip {",
          "explanation": "`.status-strip` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1132,
          "code": "    grid-template-columns: 1fr;",
          "explanation": "`.status-strip`에 `grid-template-columns: 1fr;`를 적용하는 줄이다. 그리드 열 수와 비율을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1133,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1135,
          "code": "  .meeting-card h3 {",
          "explanation": "`.meeting-card h3` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1136,
          "code": "    font-size: 1.28rem;",
          "explanation": "`.meeting-card h3`에 `font-size: 1.28rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1137,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1139,
          "code": "  .card-poster {",
          "explanation": "`.card-poster` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 1140,
          "code": "    min-height: 158px;",
          "explanation": "`.card-poster`에 `min-height: 158px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 1141,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 1142,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        }
      ],
      "blocks": [
        {
          "label": "선택자 `:root`",
          "start": 2,
          "end": 25,
          "snippet": ":root {\n  --bg: #f5f5f7;\n  --surface: #ffffff;\n  --surface-soft: #f0f0f2;\n  --surface-muted: #f8f8f9;\n  --hero: #efe1af;\n  --hero-deep: #d7c27f;\n  --text: #17181a;\n  --muted: #74767d;\n  --line: rgba(23, 24, 26, 0.08);\n  --line-strong: rgba(23, 24, 26, 0.12);\n  --accent: #111111;\n  --accent-soft: #ff613f;\n  --accent-blue: #3e7dff;\n  --danger: #cf3e3e;\n  --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);\n  --radius-xl: 34px;\n  --radius-lg: 24px;\n  --radius-md: 18px;\n  --radius-sm: 14px;\n  --font-display: \"Noto Sans KR\", sans-serif;\n  --font-body: \"Noto Sans KR\", sans-serif;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `*`",
          "start": 26,
          "end": 29,
          "snippet": "* {\n  box-sizing: border-box;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `html`",
          "start": 30,
          "end": 33,
          "snippet": "html {\n  scroll-behavior: smooth;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `body`",
          "start": 34,
          "end": 41,
          "snippet": "body {\n  margin: 0;\n  background: var(--bg);\n  color: var(--text);\n  font-family: var(--font-body);\n  overflow-x: hidden;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `a`",
          "start": 42,
          "end": 49,
          "snippet": "a {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton,\ninput,\nselect,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `button, input, select, textarea`",
          "start": 50,
          "end": 53,
          "snippet": "textarea {\n  font: inherit;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.container`",
          "start": 54,
          "end": 58,
          "snippet": ".container {\n  width: min(1180px, calc(100% - 32px));\n  margin: 0 auto;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.site-header`",
          "start": 59,
          "end": 67,
          "snippet": ".site-header {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: rgba(255, 255, 255, 0.94);\n  border-bottom: 1px solid var(--line);\n  backdrop-filter: blur(16px);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.nav-row`",
          "start": 68,
          "end": 79,
          "snippet": ".nav-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  min-height: 72px;\n}\n\n.brand-group,\n.menu,\n.sub-menu,\n.header-actions,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-group, .menu, .sub-menu, .header-actions, .footer-links`",
          "start": 80,
          "end": 85,
          "snippet": ".footer-links {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-group`",
          "start": 86,
          "end": 90,
          "snippet": ".brand-group {\n  gap: 34px;\n}\n\n.brand,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand, .footer-brand`",
          "start": 91,
          "end": 97,
          "snippet": ".footer-brand {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.menu`",
          "start": 98,
          "end": 104,
          "snippet": ".menu {\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.menu a,\n.sub-menu a,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.menu a, .sub-menu a, .sub-menu-button`",
          "start": 105,
          "end": 116,
          "snippet": ".sub-menu-button {\n  color: var(--muted);\n  font-size: 0.97rem;\n  font-weight: 700;\n}\n\n.menu a.is-current,\n.sub-menu a.is-current,\n.sub-menu-button.is-current,\n.sub-menu-button.is-active,\n.menu a:hover,\n.sub-menu a:hover,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.menu a.is-current, .sub-menu a.is-current, .sub-menu-button.is-current, .sub-menu-button.is-active, .menu a:hover, .sub-menu a:hover, .sub-menu-button:hover`",
          "start": 117,
          "end": 120,
          "snippet": ".sub-menu-button:hover {\n  color: var(--text);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.sub-menu-button`",
          "start": 121,
          "end": 127,
          "snippet": ".sub-menu-button {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.header-actions`",
          "start": 128,
          "end": 131,
          "snippet": ".header-actions {\n  gap: 12px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.header-link`",
          "start": 132,
          "end": 144,
          "snippet": ".header-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 1px solid var(--line-strong);\n  background: var(--surface);\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.header-link.primary`",
          "start": 145,
          "end": 148,
          "snippet": ".header-link.primary {\n  border-color: var(--text);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.sub-nav`",
          "start": 149,
          "end": 152,
          "snippet": ".sub-nav {\n  border-top: 1px solid var(--line);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.sub-menu`",
          "start": 153,
          "end": 158,
          "snippet": ".sub-menu {\n  flex-wrap: wrap;\n  gap: 18px;\n  min-height: 50px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-section`",
          "start": 159,
          "end": 163,
          "snippet": ".hero-section {\n  padding: 18px 0 12px;\n}\n\n/* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-banner`",
          "start": 164,
          "end": 174,
          "snippet": ".hero-banner {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 34px;\n  align-items: center;\n  padding: 56px;\n  border-radius: 40px;\n  background: var(--hero);\n  overflow: hidden;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-copy`",
          "start": 175,
          "end": 181,
          "snippet": ".hero-copy {\n  display: grid;\n  gap: 20px;\n  min-width: 0;\n}\n\n.hero-kicker,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-kicker, .eyebrow`",
          "start": 182,
          "end": 194,
          "snippet": ".eyebrow {\n  margin: 0;\n  color: rgba(23, 24, 26, 0.78);\n  font-size: 0.84rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n\n.hero-copy h1,\n.section-title h2,\n.map-copy h2,\n.help-box h3,\n.utility-note h3,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-copy h1, .section-title h2, .map-copy h2, .help-box h3, .utility-note h3, .dialog-header h2`",
          "start": 195,
          "end": 199,
          "snippet": ".dialog-header h2 {\n  margin: 0;\n  font-family: var(--font-display);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-copy h1`",
          "start": 200,
          "end": 215,
          "snippet": ".hero-copy h1 {\n  max-width: 8ch;\n  font-size: clamp(3.1rem, 5vw, 4.8rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n  line-height: 0.96;\n}\n\n.hero-text,\n.section-title p:last-child,\n.map-copy p,\n.help-box li,\n.utility-note li,\n.dialog-description p,\n.footer-text,\n.shortcut-tile p,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-text, .section-title p:last-child, .map-copy p, .help-box li, .utility-note li, .dialog-description p, .footer-text, .shortcut-tile p, .meeting-card p`",
          "start": 216,
          "end": 220,
          "snippet": ".meeting-card p {\n  color: var(--muted);\n  line-height: 1.65;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-text`",
          "start": 221,
          "end": 226,
          "snippet": ".hero-text {\n  max-width: 34rem;\n  margin: 0;\n}\n\n.hero-link,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-link, .more-link`",
          "start": 227,
          "end": 234,
          "snippet": ".more-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n}\n\n.hero-link::after,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-link::after, .more-link::after`",
          "start": 235,
          "end": 240,
          "snippet": ".more-link::after {\n  content: \"›\";\n  font-size: 1.2rem;\n  line-height: 1;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-actions`",
          "start": 241,
          "end": 246,
          "snippet": ".hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-media`",
          "start": 247,
          "end": 251,
          "snippet": ".hero-media {\n  position: relative;\n  min-height: 320px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-orb`",
          "start": 252,
          "end": 267,
          "snippet": ".hero-orb {\n  position: absolute;\n  right: -74px;\n  top: -24px;\n  width: 470px;\n  aspect-ratio: 1;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),\n    radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),\n    linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));\n  box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%), radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%), .hero-teaser-grid`",
          "start": 268,
          "end": 274,
          "snippet": ".hero-teaser-grid {\n  width: 74%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-teaser-card`",
          "start": 275,
          "end": 291,
          "snippet": ".hero-teaser-card {\n  display: grid;\n  gap: 6px;\n  padding: 16px;\n  border-radius: 22px;\n  border: 1px solid rgba(23, 24, 26, 0.08);\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: var(--shadow);\n  text-align: left;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    box-shadow 0.18s ease;\n}\n\n.hero-teaser-card:hover,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `transform 0.18s ease, background 0.18s ease, .hero-teaser-card:hover, .hero-teaser-card.is-active`",
          "start": 292,
          "end": 297,
          "snippet": ".hero-teaser-card.is-active {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-teaser-card.wide`",
          "start": 298,
          "end": 301,
          "snippet": ".hero-teaser-card.wide {\n  grid-column: 1 / -1;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-teaser-card span`",
          "start": 302,
          "end": 307,
          "snippet": ".hero-teaser-card span {\n  color: var(--muted);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-teaser-card strong`",
          "start": 308,
          "end": 313,
          "snippet": ".hero-teaser-card strong {\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1.35;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-page-indicator`",
          "start": 314,
          "end": 326,
          "snippet": ".hero-page-indicator {\n  position: absolute;\n  right: 12px;\n  bottom: 10px;\n  margin: 0;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(23, 24, 26, 0.62);\n  color: white;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-button`",
          "start": 327,
          "end": 343,
          "snippet": ".hero-nav-button {\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  width: 44px;\n  height: 44px;\n  display: inline-grid;\n  place-items: center;\n  border: 1px solid rgba(23, 24, 26, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.94);\n  color: var(--text);\n  cursor: pointer;\n  transform: translateY(-50%);\n  box-shadow: var(--shadow);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-button:disabled`",
          "start": 344,
          "end": 348,
          "snippet": ".hero-nav-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-prev`",
          "start": 349,
          "end": 352,
          "snippet": ".hero-nav-prev {\n  left: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-next`",
          "start": 353,
          "end": 356,
          "snippet": ".hero-nav-next {\n  right: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.dashboard-section`",
          "start": 357,
          "end": 360,
          "snippet": ".dashboard-section {\n  padding: 10px 0 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-strip`",
          "start": 361,
          "end": 374,
          "snippet": ".status-strip {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.status-card,\n.shortcut-tile,\n.search-panel,\n.map-shell,\n.utility-note,\n.help-box,\n.create-panel,\n.detail-dialog,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-card, .shortcut-tile, .search-panel, .map-shell, .utility-note, .help-box, .create-panel, .detail-dialog, .dialog-description`",
          "start": 375,
          "end": 379,
          "snippet": ".dialog-description {\n  border: 1px solid var(--line);\n  box-shadow: var(--shadow);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-card`",
          "start": 380,
          "end": 385,
          "snippet": ".status-card {\n  padding: 20px 22px;\n  border-radius: 18px;\n  background: var(--surface);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-card p`",
          "start": 386,
          "end": 392,
          "snippet": ".status-card p {\n  margin: 0;\n  color: var(--muted);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-card strong`",
          "start": 393,
          "end": 400,
          "snippet": ".status-card strong {\n  display: block;\n  margin-top: 10px;\n  font-size: 1.75rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-shell`",
          "start": 401,
          "end": 407,
          "snippet": ".shortcut-shell {\n  margin-top: 16px;\n  padding: 22px;\n  border-radius: 26px;\n  background: #ececee;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-grid`",
          "start": 408,
          "end": 413,
          "snippet": ".shortcut-grid {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n  gap: 14px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-tile`",
          "start": 414,
          "end": 431,
          "snippet": ".shortcut-tile {\n  min-height: 128px;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 10px;\n  padding: 14px 10px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  text-align: center;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    border-color 0.18s ease;\n}\n\n.shortcut-tile:hover,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `transform 0.18s ease, background 0.18s ease, .shortcut-tile:hover, .shortcut-tile.is-active`",
          "start": 432,
          "end": 437,
          "snippet": ".shortcut-tile.is-active {\n  transform: translateY(-2px);\n  border-color: rgba(23, 24, 26, 0.18);\n  background: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-tile strong`",
          "start": 438,
          "end": 443,
          "snippet": ".shortcut-tile strong {\n  font-size: 0.95rem;\n  font-weight: 800;\n  line-height: 1.35;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-tile p`",
          "start": 444,
          "end": 448,
          "snippet": ".shortcut-tile p {\n  margin: 0;\n  font-size: 0.82rem;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-icon`",
          "start": 449,
          "end": 459,
          "snippet": ".shortcut-icon {\n  width: 48px;\n  height: 48px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 16px;\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-peach`",
          "start": 460,
          "end": 463,
          "snippet": ".tone-peach {\n  background: #ffe1d9;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-yellow`",
          "start": 464,
          "end": 467,
          "snippet": ".tone-yellow {\n  background: #fff0b8;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-blue`",
          "start": 468,
          "end": 471,
          "snippet": ".tone-blue {\n  background: #dce7ff;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-pink`",
          "start": 472,
          "end": 475,
          "snippet": ".tone-pink {\n  background: #ffdbe8;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-green`",
          "start": 476,
          "end": 479,
          "snippet": ".tone-green {\n  background: #d9f2dd;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-orange`",
          "start": 480,
          "end": 483,
          "snippet": ".tone-orange {\n  background: #ffe1bf;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-purple`",
          "start": 484,
          "end": 487,
          "snippet": ".tone-purple {\n  background: #e7ddff;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.tone-dark`",
          "start": 488,
          "end": 491,
          "snippet": ".tone-dark {\n  background: #dadbdd;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.section-block`",
          "start": 492,
          "end": 495,
          "snippet": ".section-block {\n  padding: 34px 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.section-head`",
          "start": 496,
          "end": 503,
          "snippet": ".section-head {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.section-title`",
          "start": 504,
          "end": 508,
          "snippet": ".section-title {\n  display: grid;\n  gap: 6px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.section-title h2`",
          "start": 509,
          "end": 515,
          "snippet": ".section-title h2 {\n  font-size: clamp(1.9rem, 4vw, 2.6rem);\n  font-weight: 800;\n  letter-spacing: -0.05em;\n  line-height: 1.04;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.section-title p:last-child`",
          "start": 516,
          "end": 523,
          "snippet": ".section-title p:last-child {\n  margin: 0;\n}\n\n.search-panel,\n.map-shell,\n.utility-note,\n.help-box,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.search-panel, .map-shell, .utility-note, .help-box, .create-panel`",
          "start": 524,
          "end": 530,
          "snippet": ".create-panel {\n  border-radius: 24px;\n  background: var(--surface);\n}\n\n/* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */\n.search-form,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.search-form, .create-form`",
          "start": 531,
          "end": 536,
          "snippet": ".create-form {\n  display: grid;\n  gap: 12px;\n  padding: 20px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.search-form`",
          "start": 537,
          "end": 541,
          "snippet": ".search-form {\n  grid-template-columns: repeat(5, minmax(0, 1fr)) auto;\n  align-items: end;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.create-shell`",
          "start": 542,
          "end": 547,
          "snippet": ".create-shell {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 20px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.create-copy`",
          "start": 548,
          "end": 552,
          "snippet": ".create-copy {\n  display: grid;\n  gap: 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.create-panel`",
          "start": 553,
          "end": 557,
          "snippet": ".create-panel {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.search-form label,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.search-form label, .create-form label`",
          "start": 558,
          "end": 566,
          "snippet": ".create-form label {\n  display: grid;\n  gap: 8px;\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\ninput,\nselect,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `input, select, textarea`",
          "start": 567,
          "end": 576,
          "snippet": "textarea {\n  width: 100%;\n  border: 1px solid var(--line-strong);\n  border-radius: 14px;\n  padding: 14px 14px;\n  background: var(--surface-muted);\n  color: var(--text);\n}\n\ninput::placeholder,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `input::placeholder, textarea::placeholder`",
          "start": 577,
          "end": 581,
          "snippet": "textarea::placeholder {\n  color: rgba(23, 24, 26, 0.4);\n}\n\n.full-span,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.full-span, .form-actions`",
          "start": 582,
          "end": 585,
          "snippet": ".form-actions {\n  grid-column: 1 / -1;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button`",
          "start": 586,
          "end": 598,
          "snippet": ".button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 18px;\n  border: 1px solid transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  font-weight: 700;\n  transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button:hover`",
          "start": 599,
          "end": 602,
          "snippet": ".button:hover {\n  transform: translateY(-1px);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button:disabled`",
          "start": 603,
          "end": 608,
          "snippet": ".button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  transform: none;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button.primary`",
          "start": 609,
          "end": 613,
          "snippet": ".button.primary {\n  background: var(--accent);\n  color: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button.secondary`",
          "start": 614,
          "end": 619,
          "snippet": ".button.secondary {\n  border-color: var(--line-strong);\n  background: var(--surface);\n  color: var(--text);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button.ghost`",
          "start": 620,
          "end": 625,
          "snippet": ".button.ghost {\n  border-color: var(--line-strong);\n  background: transparent;\n  color: var(--text);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button.danger`",
          "start": 626,
          "end": 630,
          "snippet": ".button.danger {\n  background: var(--danger);\n  color: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.form-actions`",
          "start": 631,
          "end": 635,
          "snippet": ".form-actions {\n  display: flex;\n  gap: 10px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.result-summary`",
          "start": 636,
          "end": 642,
          "snippet": ".result-summary {\n  margin: 14px 4px 0;\n  color: var(--muted);\n  font-size: 0.92rem;\n}\n\n/* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-list`",
          "start": 643,
          "end": 649,
          "snippet": ".meeting-list {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 24px 20px;\n  margin-top: 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-card`",
          "start": 650,
          "end": 656,
          "snippet": ".meeting-card {\n  display: grid;\n  gap: 12px;\n}\n\n.card-poster,\n.mine-list .card-poster,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-poster, .mine-list .card-poster, .manage-list .card-poster`",
          "start": 657,
          "end": 665,
          "snippet": ".manage-list .card-poster {\n  position: relative;\n  min-height: 176px;\n  padding: 14px;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-list .meeting-card:nth-child(4n + 1) .card-poster`",
          "start": 666,
          "end": 670,
          "snippet": ".meeting-list .meeting-card:nth-child(4n + 1) .card-poster {\n  background: linear-gradient(145deg, #121315, #272a2d);\n  color: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-list .meeting-card:nth-child(4n + 2) .card-poster`",
          "start": 671,
          "end": 675,
          "snippet": ".meeting-list .meeting-card:nth-child(4n + 2) .card-poster {\n  background: linear-gradient(145deg, #312019, #5e3a2d);\n  color: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-list .meeting-card:nth-child(4n + 3) .card-poster`",
          "start": 676,
          "end": 679,
          "snippet": ".meeting-list .meeting-card:nth-child(4n + 3) .card-poster {\n  background: linear-gradient(145deg, #fff1dc, #ffd6d6);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-list .meeting-card:nth-child(4n + 4) .card-poster`",
          "start": 680,
          "end": 684,
          "snippet": ".meeting-list .meeting-card:nth-child(4n + 4) .card-poster {\n  background: linear-gradient(145deg, #f8d6d8, #a76b74);\n  color: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.mine-list .meeting-card .card-poster`",
          "start": 685,
          "end": 688,
          "snippet": ".mine-list .meeting-card .card-poster {\n  background: linear-gradient(145deg, #dfe8ff, #b7cdfd);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.manage-list .meeting-card .card-poster`",
          "start": 689,
          "end": 693,
          "snippet": ".manage-list .meeting-card .card-poster {\n  background: linear-gradient(145deg, #ffe9da, #f9c7aa);\n}\n\n.card-poster::before,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-poster::before, .card-poster::after`",
          "start": 694,
          "end": 700,
          "snippet": ".card-poster::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 999px;\n  pointer-events: none;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-poster::before`",
          "start": 701,
          "end": 708,
          "snippet": ".card-poster::before {\n  width: 170px;\n  height: 170px;\n  right: -38px;\n  bottom: -54px;\n  background: rgba(255, 255, 255, 0.14);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-poster::after`",
          "start": 709,
          "end": 716,
          "snippet": ".card-poster::after {\n  width: 90px;\n  height: 90px;\n  right: 18px;\n  top: 16px;\n  background: rgba(255, 255, 255, 0.1);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-pills`",
          "start": 717,
          "end": 725,
          "snippet": ".card-pills {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-pill`",
          "start": 726,
          "end": 739,
          "snippet": ".card-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--text);\n  font-size: 0.74rem;\n  font-weight: 800;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-pill.primary`",
          "start": 740,
          "end": 745,
          "snippet": ".card-pill.primary {\n  border-color: transparent;\n  background: #ff6542;\n  color: white;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-code`",
          "start": 746,
          "end": 755,
          "snippet": ".card-code {\n  position: absolute;\n  right: 14px;\n  bottom: 14px;\n  z-index: 1;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-copy`",
          "start": 756,
          "end": 762,
          "snippet": ".card-copy {\n  display: grid;\n  gap: 10px;\n  padding: 0 2px 2px;\n}\n\n.card-location,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-location, .card-schedule`",
          "start": 763,
          "end": 768,
          "snippet": ".card-schedule {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--muted);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-card h3`",
          "start": 769,
          "end": 776,
          "snippet": ".meeting-card h3 {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n  line-height: 1.2;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.description-preview`",
          "start": 777,
          "end": 783,
          "snippet": ".description-preview {\n  min-height: 46px;\n  margin: 0;\n  font-size: 0.92rem;\n}\n\n.meta-row,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meta-row, .dialog-meta`",
          "start": 784,
          "end": 789,
          "snippet": ".dialog-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meta-chip`",
          "start": 790,
          "end": 803,
          "snippet": ".meta-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 30px;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--surface-muted);\n  border: 1px solid var(--line);\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--text);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-footer`",
          "start": 804,
          "end": 809,
          "snippet": ".card-footer {\n  display: grid;\n  gap: 12px;\n}\n\n.card-actions,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-actions, .dialog-owner-actions`",
          "start": 810,
          "end": 816,
          "snippet": ".dialog-owner-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.card-actions .button,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-actions .button, .dialog-owner-actions .button`",
          "start": 817,
          "end": 822,
          "snippet": ".dialog-owner-actions .button {\n  min-height: 38px;\n  padding: 8px 12px;\n  font-size: 0.86rem;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.utility-grid`",
          "start": 823,
          "end": 828,
          "snippet": ".utility-grid {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 20px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.map-shell`",
          "start": 829,
          "end": 838,
          "snippet": ".map-shell {\n  display: grid;\n  grid-template-columns: 0.92fr 1.08fr;\n  gap: 18px;\n  padding: 24px;\n}\n\n.map-copy h2,\n.help-box h3,\n.utility-note h3,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.map-copy h2, .help-box h3, .utility-note h3, .dialog-description h3`",
          "start": 839,
          "end": 845,
          "snippet": ".dialog-description h3 {\n  font-size: 1.65rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  line-height: 1.1;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.mini-feature-grid`",
          "start": 846,
          "end": 852,
          "snippet": ".mini-feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.mini-feature-grid article`",
          "start": 853,
          "end": 858,
          "snippet": ".mini-feature-grid article {\n  padding: 18px;\n  border-radius: 18px;\n  background: var(--surface-muted);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.mini-feature-grid strong`",
          "start": 859,
          "end": 865,
          "snippet": ".mini-feature-grid strong {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 1rem;\n  font-weight: 800;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.mini-feature-grid p`",
          "start": 866,
          "end": 869,
          "snippet": ".mini-feature-grid p {\n  margin: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.map-placeholder`",
          "start": 870,
          "end": 882,
          "snippet": ".map-placeholder {\n  min-height: 280px;\n  display: grid;\n  place-items: center;\n  border-radius: 22px;\n  background:\n    radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),\n    linear-gradient(145deg, #f7efe0, #ead8b7);\n  box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);\n  text-align: center;\n}\n\n.utility-note,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%), .utility-note, .help-box`",
          "start": 883,
          "end": 887,
          "snippet": ".help-box {\n  padding: 24px;\n}\n\n.utility-note ul,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.utility-note ul, .help-box ul`",
          "start": 888,
          "end": 892,
          "snippet": ".help-box ul {\n  margin: 0;\n  padding-left: 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.empty-state`",
          "start": 893,
          "end": 902,
          "snippet": ".empty-state {\n  grid-column: 1 / -1;\n  padding: 28px 22px;\n  border-radius: 20px;\n  border: 1px dashed var(--line-strong);\n  background: var(--surface);\n  color: var(--muted);\n  text-align: center;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.detail-dialog`",
          "start": 903,
          "end": 910,
          "snippet": ".detail-dialog {\n  width: min(720px, calc(100% - 24px));\n  padding: 0;\n  border: 0;\n  border-radius: 24px;\n  background: var(--surface);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.detail-dialog::backdrop`",
          "start": 911,
          "end": 915,
          "snippet": ".detail-dialog::backdrop {\n  background: rgba(17, 17, 17, 0.34);\n  backdrop-filter: blur(3px);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.dialog-shell`",
          "start": 916,
          "end": 921,
          "snippet": ".dialog-shell {\n  display: grid;\n  gap: 18px;\n  padding: 24px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.dialog-header`",
          "start": 922,
          "end": 928,
          "snippet": ".dialog-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.dialog-description`",
          "start": 929,
          "end": 934,
          "snippet": ".dialog-description {\n  padding: 20px;\n  border-radius: 20px;\n  background: var(--surface-muted);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.is-hidden`",
          "start": 935,
          "end": 938,
          "snippet": ".is-hidden {\n  display: none !important;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.site-footer`",
          "start": 939,
          "end": 942,
          "snippet": ".site-footer {\n  padding: 28px 0 54px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.footer-row`",
          "start": 943,
          "end": 951,
          "snippet": ".footer-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 24px 0 0;\n  border-top: 1px solid var(--line);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.footer-text`",
          "start": 952,
          "end": 956,
          "snippet": ".footer-text {\n  max-width: 34rem;\n  margin: 8px 0 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.footer-links`",
          "start": 957,
          "end": 962,
          "snippet": ".footer-links {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 16px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.footer-links a`",
          "start": 963,
          "end": 972,
          "snippet": ".footer-links a {\n  color: var(--muted);\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n@media (max-width: 1120px) {\n  .hero-banner,\n  .utility-grid,\n  .create-shell,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-banner, .utility-grid, .create-shell, .map-shell`",
          "start": 973,
          "end": 976,
          "snippet": "  .map-shell {\n    grid-template-columns: 1fr;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-grid`",
          "start": 977,
          "end": 981,
          "snippet": "  .shortcut-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .status-strip,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-strip, .meeting-list`",
          "start": 982,
          "end": 985,
          "snippet": "  .meeting-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.search-form`",
          "start": 986,
          "end": 989,
          "snippet": "  .search-form {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-orb`",
          "start": 990,
          "end": 995,
          "snippet": "  .hero-orb {\n    position: static;\n    width: min(100%, 420px);\n    margin-inline: auto;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-media`",
          "start": 996,
          "end": 1009,
          "snippet": "  .hero-media {\n    min-height: auto;\n  }\n}\n\n@media (max-width: 780px) {\n  .nav-row,\n  .brand-group,\n  .footer-row,\n  .section-head,\n  .dialog-header,\n  .card-actions,\n  .dialog-owner-actions,\n  .form-actions,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.nav-row, .brand-group, .footer-row, .section-head, .dialog-header, .card-actions, .dialog-owner-actions, .form-actions, .hero-actions`",
          "start": 1010,
          "end": 1015,
          "snippet": "  .hero-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .nav-row,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.nav-row, .sub-menu`",
          "start": 1016,
          "end": 1019,
          "snippet": "  .sub-menu {\n    padding: 14px 0;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-group`",
          "start": 1020,
          "end": 1023,
          "snippet": "  .brand-group {\n    gap: 14px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.header-actions`",
          "start": 1024,
          "end": 1036,
          "snippet": "  .header-actions {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 8px;\n  }\n\n  .hero-banner,\n  .shortcut-shell,\n  .search-form,\n  .map-shell,\n  .utility-note,\n  .help-box,\n  .create-form,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-banner, .shortcut-shell, .search-form, .map-shell, .utility-note, .help-box, .create-form, .dialog-shell`",
          "start": 1037,
          "end": 1040,
          "snippet": "  .dialog-shell {\n    padding: 18px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-copy h1`",
          "start": 1041,
          "end": 1049,
          "snippet": "  .hero-copy h1 {\n    max-width: none;\n    font-size: clamp(2.5rem, 11vw, 3.3rem);\n  }\n\n  .hero-teaser-grid,\n  .meeting-list,\n  .mini-feature-grid,\n  .search-form,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-teaser-grid, .meeting-list, .mini-feature-grid, .search-form, .create-panel`",
          "start": 1050,
          "end": 1053,
          "snippet": "  .create-panel {\n    grid-template-columns: 1fr;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-strip`",
          "start": 1054,
          "end": 1057,
          "snippet": "  .status-strip {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-grid`",
          "start": 1058,
          "end": 1061,
          "snippet": "  .shortcut-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-orb`",
          "start": 1062,
          "end": 1069,
          "snippet": "  .hero-orb {\n    width: 100%;\n    border-radius: 32px;\n    aspect-ratio: auto;\n    min-height: 260px;\n    padding: 18px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-page-indicator`",
          "start": 1070,
          "end": 1075,
          "snippet": "  .hero-page-indicator {\n    position: static;\n    margin-top: 12px;\n    justify-self: flex-end;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-button`",
          "start": 1076,
          "end": 1080,
          "snippet": "  .hero-nav-button {\n    top: 18px;\n    transform: none;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-prev`",
          "start": 1081,
          "end": 1084,
          "snippet": "  .hero-nav-prev {\n    left: 18px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-nav-next`",
          "start": 1085,
          "end": 1090,
          "snippet": "  .hero-nav-next {\n    right: 18px;\n  }\n\n  .button,\n  .card-actions .button,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.button, .card-actions .button, .dialog-owner-actions .button`",
          "start": 1091,
          "end": 1094,
          "snippet": "  .dialog-owner-actions .button {\n    width: 100%;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.footer-links`",
          "start": 1095,
          "end": 1100,
          "snippet": "  .footer-links {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 520px) {",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.container`",
          "start": 1101,
          "end": 1105,
          "snippet": "  .container {\n    width: min(1180px, calc(100% - 24px));\n  }\n\n  .brand,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand, .footer-brand`",
          "start": 1106,
          "end": 1109,
          "snippet": "  .footer-brand {\n    font-size: 1.7rem;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.sub-menu`",
          "start": 1110,
          "end": 1113,
          "snippet": "  .sub-menu {\n    gap: 14px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-banner`",
          "start": 1114,
          "end": 1118,
          "snippet": "  .hero-banner {\n    padding: 20px;\n    border-radius: 28px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.hero-copy h1`",
          "start": 1119,
          "end": 1122,
          "snippet": "  .hero-copy h1 {\n    font-size: clamp(2.1rem, 10vw, 2.8rem);\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-grid`",
          "start": 1123,
          "end": 1126,
          "snippet": "  .shortcut-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.shortcut-tile`",
          "start": 1127,
          "end": 1130,
          "snippet": "  .shortcut-tile {\n    min-height: 102px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.status-strip`",
          "start": 1131,
          "end": 1134,
          "snippet": "  .status-strip {\n    grid-template-columns: 1fr;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.meeting-card h3`",
          "start": 1135,
          "end": 1138,
          "snippet": "  .meeting-card h3 {\n    font-size: 1.28rem;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-poster`",
          "start": 1139,
          "end": 1142,
          "snippet": "  .card-poster {\n    min-height: 158px;\n  }\n}",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        }
      ],
      "features": [
        {
          "label": "공통 변수와 기본 리셋",
          "start": 2,
          "end": 159,
          "snippet": ":root {\n  --bg: #f5f5f7;\n  --surface: #ffffff;\n  --surface-soft: #f0f0f2;\n  --surface-muted: #f8f8f9;\n  --hero: #efe1af;\n  --hero-deep: #d7c27f;\n  --text: #17181a;\n  --muted: #74767d;\n  --line: rgba(23, 24, 26, 0.08);\n  --line-strong: rgba(23, 24, 26, 0.12);\n  --accent: #111111;\n  --accent-soft: #ff613f;\n  --accent-blue: #3e7dff;\n  --danger: #cf3e3e;\n  --shadow: 0 14px 34px rgba(28, 30, 35, 0.06);\n  --radius-xl: 34px;\n  --radius-lg: 24px;\n  --radius-md: 18px;\n  --radius-sm: 14px;\n  --font-display: \"Noto Sans KR\", sans-serif;\n  --font-body: \"Noto Sans KR\", sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  background: var(--bg);\n  color: var(--text);\n  font-family: var(--font-body);\n  overflow-x: hidden;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\n\n.container {\n  width: min(1180px, calc(100% - 32px));\n  margin: 0 auto;\n}\n\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: rgba(255, 255, 255, 0.94);\n  border-bottom: 1px solid var(--line);\n  backdrop-filter: blur(16px);\n}\n\n.nav-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  min-height: 72px;\n}\n\n.brand-group,\n.menu,\n.sub-menu,\n.header-actions,\n.footer-links {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n\n.brand-group {\n  gap: 34px;\n}\n\n.brand,\n.footer-brand {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n\n.menu {\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.menu a,\n.sub-menu a,\n.sub-menu-button {\n  color: var(--muted);\n  font-size: 0.97rem;\n  font-weight: 700;\n}\n\n.menu a.is-current,\n.sub-menu a.is-current,\n.sub-menu-button.is-current,\n.sub-menu-button.is-active,\n.menu a:hover,\n.sub-menu a:hover,\n.sub-menu-button:hover {\n  color: var(--text);\n}\n\n.sub-menu-button {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.header-actions {\n  gap: 12px;\n}\n\n.header-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 1px solid var(--line-strong);\n  background: var(--surface);\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n.header-link.primary {\n  border-color: var(--text);\n}\n\n.sub-nav {\n  border-top: 1px solid var(--line);\n}\n\n.sub-menu {\n  flex-wrap: wrap;\n  gap: 18px;\n  min-height: 50px;\n}\n\n.hero-section {",
          "description": "색상, 반지름, 폰트, 기본 box-sizing과 body 기본값을 정리한다."
        },
        {
          "label": "헤더와 상단 메뉴",
          "start": 59,
          "end": 159,
          "snippet": ".site-header {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: rgba(255, 255, 255, 0.94);\n  border-bottom: 1px solid var(--line);\n  backdrop-filter: blur(16px);\n}\n\n.nav-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  min-height: 72px;\n}\n\n.brand-group,\n.menu,\n.sub-menu,\n.header-actions,\n.footer-links {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n\n.brand-group {\n  gap: 34px;\n}\n\n.brand,\n.footer-brand {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n\n.menu {\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.menu a,\n.sub-menu a,\n.sub-menu-button {\n  color: var(--muted);\n  font-size: 0.97rem;\n  font-weight: 700;\n}\n\n.menu a.is-current,\n.sub-menu a.is-current,\n.sub-menu-button.is-current,\n.sub-menu-button.is-active,\n.menu a:hover,\n.sub-menu a:hover,\n.sub-menu-button:hover {\n  color: var(--text);\n}\n\n.sub-menu-button {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.header-actions {\n  gap: 12px;\n}\n\n.header-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 1px solid var(--line-strong);\n  background: var(--surface);\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n.header-link.primary {\n  border-color: var(--text);\n}\n\n.sub-nav {\n  border-top: 1px solid var(--line);\n}\n\n.sub-menu {\n  flex-wrap: wrap;\n  gap: 18px;\n  min-height: 50px;\n}\n\n.hero-section {",
          "description": "고정 헤더, 브랜드, 메뉴, 서브메뉴, 상단 링크 모양을 정의한다."
        },
        {
          "label": "추천 배너",
          "start": 159,
          "end": 357,
          "snippet": ".hero-section {\n  padding: 18px 0 12px;\n}\n\n/* 첫 화면은 설명형 소개 대신 큰 추천 배너 하나에 시선을 모은다. */\n.hero-banner {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 34px;\n  align-items: center;\n  padding: 56px;\n  border-radius: 40px;\n  background: var(--hero);\n  overflow: hidden;\n}\n\n.hero-copy {\n  display: grid;\n  gap: 20px;\n  min-width: 0;\n}\n\n.hero-kicker,\n.eyebrow {\n  margin: 0;\n  color: rgba(23, 24, 26, 0.78);\n  font-size: 0.84rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n\n.hero-copy h1,\n.section-title h2,\n.map-copy h2,\n.help-box h3,\n.utility-note h3,\n.dialog-header h2 {\n  margin: 0;\n  font-family: var(--font-display);\n}\n\n.hero-copy h1 {\n  max-width: 8ch;\n  font-size: clamp(3.1rem, 5vw, 4.8rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n  line-height: 0.96;\n}\n\n.hero-text,\n.section-title p:last-child,\n.map-copy p,\n.help-box li,\n.utility-note li,\n.dialog-description p,\n.footer-text,\n.shortcut-tile p,\n.meeting-card p {\n  color: var(--muted);\n  line-height: 1.65;\n}\n\n.hero-text {\n  max-width: 34rem;\n  margin: 0;\n}\n\n.hero-link,\n.more-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n}\n\n.hero-link::after,\n.more-link::after {\n  content: \"›\";\n  font-size: 1.2rem;\n  line-height: 1;\n}\n\n.hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.hero-media {\n  position: relative;\n  min-height: 320px;\n}\n\n.hero-orb {\n  position: absolute;\n  right: -74px;\n  top: -24px;\n  width: 470px;\n  aspect-ratio: 1;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.94), transparent 18%),\n    radial-gradient(circle at 62% 62%, rgba(255, 255, 255, 0.48), transparent 24%),\n    linear-gradient(145deg, rgba(255, 255, 255, 0.32), rgba(214, 188, 108, 0.78));\n  box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);\n}\n\n.hero-teaser-grid {\n  width: 74%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.hero-teaser-card {\n  display: grid;\n  gap: 6px;\n  padding: 16px;\n  border-radius: 22px;\n  border: 1px solid rgba(23, 24, 26, 0.08);\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: var(--shadow);\n  text-align: left;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    box-shadow 0.18s ease;\n}\n\n.hero-teaser-card:hover,\n.hero-teaser-card.is-active {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 16px 36px rgba(28, 30, 35, 0.12);\n}\n\n.hero-teaser-card.wide {\n  grid-column: 1 / -1;\n}\n\n.hero-teaser-card span {\n  color: var(--muted);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.hero-teaser-card strong {\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1.35;\n}\n\n.hero-page-indicator {\n  position: absolute;\n  right: 12px;\n  bottom: 10px;\n  margin: 0;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(23, 24, 26, 0.62);\n  color: white;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.hero-nav-button {\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  width: 44px;\n  height: 44px;\n  display: inline-grid;\n  place-items: center;\n  border: 1px solid rgba(23, 24, 26, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.94);\n  color: var(--text);\n  cursor: pointer;\n  transform: translateY(-50%);\n  box-shadow: var(--shadow);\n}\n\n.hero-nav-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n\n.hero-nav-prev {\n  left: 0;\n}\n\n.hero-nav-next {\n  right: 0;\n}\n\n.dashboard-section {",
          "description": "메인 추천 배너, 미리보기 카드, 좌우 이동 버튼을 꾸민다."
        },
        {
          "label": "상태 카드와 빠른 타일",
          "start": 357,
          "end": 492,
          "snippet": ".dashboard-section {\n  padding: 10px 0 18px;\n}\n\n.status-strip {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.status-card,\n.shortcut-tile,\n.search-panel,\n.map-shell,\n.utility-note,\n.help-box,\n.create-panel,\n.detail-dialog,\n.dialog-description {\n  border: 1px solid var(--line);\n  box-shadow: var(--shadow);\n}\n\n.status-card {\n  padding: 20px 22px;\n  border-radius: 18px;\n  background: var(--surface);\n}\n\n.status-card p {\n  margin: 0;\n  color: var(--muted);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.status-card strong {\n  display: block;\n  margin-top: 10px;\n  font-size: 1.75rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n}\n\n.shortcut-shell {\n  margin-top: 16px;\n  padding: 22px;\n  border-radius: 26px;\n  background: #ececee;\n}\n\n.shortcut-grid {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.shortcut-tile {\n  min-height: 128px;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 10px;\n  padding: 14px 10px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.86);\n  text-align: center;\n  cursor: pointer;\n  transition:\n    transform 0.18s ease,\n    background 0.18s ease,\n    border-color 0.18s ease;\n}\n\n.shortcut-tile:hover,\n.shortcut-tile.is-active {\n  transform: translateY(-2px);\n  border-color: rgba(23, 24, 26, 0.18);\n  background: white;\n}\n\n.shortcut-tile strong {\n  font-size: 0.95rem;\n  font-weight: 800;\n  line-height: 1.35;\n}\n\n.shortcut-tile p {\n  margin: 0;\n  font-size: 0.82rem;\n}\n\n.shortcut-icon {\n  width: 48px;\n  height: 48px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 16px;\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text);\n}\n\n.tone-peach {\n  background: #ffe1d9;\n}\n\n.tone-yellow {\n  background: #fff0b8;\n}\n\n.tone-blue {\n  background: #dce7ff;\n}\n\n.tone-pink {\n  background: #ffdbe8;\n}\n\n.tone-green {\n  background: #d9f2dd;\n}\n\n.tone-orange {\n  background: #ffe1bf;\n}\n\n.tone-purple {\n  background: #e7ddff;\n}\n\n.tone-dark {\n  background: #dadbdd;\n}\n\n.section-block {",
          "description": "숫자 요약 카드와 빠른 기능 타일 영역을 설계한다."
        },
        {
          "label": "공통 섹션과 폼",
          "start": 492,
          "end": 643,
          "snippet": ".section-block {\n  padding: 34px 0;\n}\n\n.section-head {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 18px;\n}\n\n.section-title {\n  display: grid;\n  gap: 6px;\n}\n\n.section-title h2 {\n  font-size: clamp(1.9rem, 4vw, 2.6rem);\n  font-weight: 800;\n  letter-spacing: -0.05em;\n  line-height: 1.04;\n}\n\n.section-title p:last-child {\n  margin: 0;\n}\n\n.search-panel,\n.map-shell,\n.utility-note,\n.help-box,\n.create-panel {\n  border-radius: 24px;\n  background: var(--surface);\n}\n\n/* 검색 폼은 플랫폼 검색바처럼 짧고 빠르게 읽히는 배치로 유지한다. */\n.search-form,\n.create-form {\n  display: grid;\n  gap: 12px;\n  padding: 20px;\n}\n\n.search-form {\n  grid-template-columns: repeat(5, minmax(0, 1fr)) auto;\n  align-items: end;\n}\n\n.create-shell {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 20px;\n}\n\n.create-copy {\n  display: grid;\n  gap: 18px;\n}\n\n.create-panel {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.search-form label,\n.create-form label {\n  display: grid;\n  gap: 8px;\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n  border: 1px solid var(--line-strong);\n  border-radius: 14px;\n  padding: 14px 14px;\n  background: var(--surface-muted);\n  color: var(--text);\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: rgba(23, 24, 26, 0.4);\n}\n\n.full-span,\n.form-actions {\n  grid-column: 1 / -1;\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 18px;\n  border: 1px solid transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  font-weight: 700;\n  transition: transform 0.18s ease, background 0.18s ease, opacity 0.18s ease;\n}\n\n.button:hover {\n  transform: translateY(-1px);\n}\n\n.button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  transform: none;\n}\n\n.button.primary {\n  background: var(--accent);\n  color: white;\n}\n\n.button.secondary {\n  border-color: var(--line-strong);\n  background: var(--surface);\n  color: var(--text);\n}\n\n.button.ghost {\n  border-color: var(--line-strong);\n  background: transparent;\n  color: var(--text);\n}\n\n.button.danger {\n  background: var(--danger);\n  color: white;\n}\n\n.form-actions {\n  display: flex;\n  gap: 10px;\n}\n\n.result-summary {\n  margin: 14px 4px 0;\n  color: var(--muted);\n  font-size: 0.92rem;\n}\n\n/* 카드 크기를 줄이고 정보 밀도를 높여 탐색형 타일 목록처럼 보이게 만든다. */\n.meeting-list {",
          "description": "제목, 폼, 버튼, 생성 섹션 공통 규칙을 모아 둔다."
        },
        {
          "label": "모임 카드와 메타 정보",
          "start": 643,
          "end": 823,
          "snippet": ".meeting-list {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 24px 20px;\n  margin-top: 18px;\n}\n\n.meeting-card {\n  display: grid;\n  gap: 12px;\n}\n\n.card-poster,\n.mine-list .card-poster,\n.manage-list .card-poster {\n  position: relative;\n  min-height: 176px;\n  padding: 14px;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n}\n\n.meeting-list .meeting-card:nth-child(4n + 1) .card-poster {\n  background: linear-gradient(145deg, #121315, #272a2d);\n  color: white;\n}\n\n.meeting-list .meeting-card:nth-child(4n + 2) .card-poster {\n  background: linear-gradient(145deg, #312019, #5e3a2d);\n  color: white;\n}\n\n.meeting-list .meeting-card:nth-child(4n + 3) .card-poster {\n  background: linear-gradient(145deg, #fff1dc, #ffd6d6);\n}\n\n.meeting-list .meeting-card:nth-child(4n + 4) .card-poster {\n  background: linear-gradient(145deg, #f8d6d8, #a76b74);\n  color: white;\n}\n\n.mine-list .meeting-card .card-poster {\n  background: linear-gradient(145deg, #dfe8ff, #b7cdfd);\n}\n\n.manage-list .meeting-card .card-poster {\n  background: linear-gradient(145deg, #ffe9da, #f9c7aa);\n}\n\n.card-poster::before,\n.card-poster::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 999px;\n  pointer-events: none;\n}\n\n.card-poster::before {\n  width: 170px;\n  height: 170px;\n  right: -38px;\n  bottom: -54px;\n  background: rgba(255, 255, 255, 0.14);\n}\n\n.card-poster::after {\n  width: 90px;\n  height: 90px;\n  right: 18px;\n  top: 16px;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.card-pills {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n\n.card-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid rgba(255, 255, 255, 0.26);\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--text);\n  font-size: 0.74rem;\n  font-weight: 800;\n}\n\n.card-pill.primary {\n  border-color: transparent;\n  background: #ff6542;\n  color: white;\n}\n\n.card-code {\n  position: absolute;\n  right: 14px;\n  bottom: 14px;\n  z-index: 1;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n\n.card-copy {\n  display: grid;\n  gap: 10px;\n  padding: 0 2px 2px;\n}\n\n.card-location,\n.card-schedule {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--muted);\n}\n\n.meeting-card h3 {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  letter-spacing: -0.05em;\n  line-height: 1.2;\n}\n\n.description-preview {\n  min-height: 46px;\n  margin: 0;\n  font-size: 0.92rem;\n}\n\n.meta-row,\n.dialog-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 30px;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--surface-muted);\n  border: 1px solid var(--line);\n  font-size: 0.76rem;\n  font-weight: 700;\n  color: var(--text);\n}\n\n.card-footer {\n  display: grid;\n  gap: 12px;\n}\n\n.card-actions,\n.dialog-owner-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.card-actions .button,\n.dialog-owner-actions .button {\n  min-height: 38px;\n  padding: 8px 12px;\n  font-size: 0.86rem;\n}\n\n.utility-grid {",
          "description": "동적으로 그려지는 카드 목록과 카드 내부 정보 배치를 정의한다."
        },
        {
          "label": "지도/안내/팝업/푸터",
          "start": 823,
          "end": 969,
          "snippet": ".utility-grid {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 20px;\n}\n\n.map-shell {\n  display: grid;\n  grid-template-columns: 0.92fr 1.08fr;\n  gap: 18px;\n  padding: 24px;\n}\n\n.map-copy h2,\n.help-box h3,\n.utility-note h3,\n.dialog-description h3 {\n  font-size: 1.65rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  line-height: 1.1;\n}\n\n.mini-feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 18px;\n}\n\n.mini-feature-grid article {\n  padding: 18px;\n  border-radius: 18px;\n  background: var(--surface-muted);\n}\n\n.mini-feature-grid strong {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 1rem;\n  font-weight: 800;\n}\n\n.mini-feature-grid p {\n  margin: 0;\n}\n\n.map-placeholder {\n  min-height: 280px;\n  display: grid;\n  place-items: center;\n  border-radius: 22px;\n  background:\n    radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.88), transparent 24%),\n    linear-gradient(145deg, #f7efe0, #ead8b7);\n  box-shadow: inset 0 0 0 1px rgba(23, 24, 26, 0.06);\n  text-align: center;\n}\n\n.utility-note,\n.help-box {\n  padding: 24px;\n}\n\n.utility-note ul,\n.help-box ul {\n  margin: 0;\n  padding-left: 18px;\n}\n\n.empty-state {\n  grid-column: 1 / -1;\n  padding: 28px 22px;\n  border-radius: 20px;\n  border: 1px dashed var(--line-strong);\n  background: var(--surface);\n  color: var(--muted);\n  text-align: center;\n}\n\n.detail-dialog {\n  width: min(720px, calc(100% - 24px));\n  padding: 0;\n  border: 0;\n  border-radius: 24px;\n  background: var(--surface);\n}\n\n.detail-dialog::backdrop {\n  background: rgba(17, 17, 17, 0.34);\n  backdrop-filter: blur(3px);\n}\n\n.dialog-shell {\n  display: grid;\n  gap: 18px;\n  padding: 24px;\n}\n\n.dialog-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.dialog-description {\n  padding: 20px;\n  border-radius: 20px;\n  background: var(--surface-muted);\n}\n\n.is-hidden {\n  display: none !important;\n}\n\n.site-footer {\n  padding: 28px 0 54px;\n}\n\n.footer-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 24px 0 0;\n  border-top: 1px solid var(--line);\n}\n\n.footer-text {\n  max-width: 34rem;\n  margin: 8px 0 0;\n}\n\n.footer-links {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 16px;\n}\n\n.footer-links a {\n  color: var(--muted);\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n@media (max-width: 1120px) {",
          "description": "지도 자리, 안내 박스, 상세 팝업, 푸터를 꾸민다."
        },
        {
          "label": "반응형 규칙",
          "start": 969,
          "end": 1142,
          "snippet": "@media (max-width: 1120px) {\n  .hero-banner,\n  .utility-grid,\n  .create-shell,\n  .map-shell {\n    grid-template-columns: 1fr;\n  }\n\n  .shortcut-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .status-strip,\n  .meeting-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .search-form {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .hero-orb {\n    position: static;\n    width: min(100%, 420px);\n    margin-inline: auto;\n  }\n\n  .hero-media {\n    min-height: auto;\n  }\n}\n\n@media (max-width: 780px) {\n  .nav-row,\n  .brand-group,\n  .footer-row,\n  .section-head,\n  .dialog-header,\n  .card-actions,\n  .dialog-owner-actions,\n  .form-actions,\n  .hero-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .nav-row,\n  .sub-menu {\n    padding: 14px 0;\n  }\n\n  .brand-group {\n    gap: 14px;\n  }\n\n  .header-actions {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 8px;\n  }\n\n  .hero-banner,\n  .shortcut-shell,\n  .search-form,\n  .map-shell,\n  .utility-note,\n  .help-box,\n  .create-form,\n  .dialog-shell {\n    padding: 18px;\n  }\n\n  .hero-copy h1 {\n    max-width: none;\n    font-size: clamp(2.5rem, 11vw, 3.3rem);\n  }\n\n  .hero-teaser-grid,\n  .meeting-list,\n  .mini-feature-grid,\n  .search-form,\n  .create-panel {\n    grid-template-columns: 1fr;\n  }\n\n  .status-strip {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .shortcut-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .hero-orb {\n    width: 100%;\n    border-radius: 32px;\n    aspect-ratio: auto;\n    min-height: 260px;\n    padding: 18px;\n  }\n\n  .hero-page-indicator {\n    position: static;\n    margin-top: 12px;\n    justify-self: flex-end;\n  }\n\n  .hero-nav-button {\n    top: 18px;\n    transform: none;\n  }\n\n  .hero-nav-prev {\n    left: 18px;\n  }\n\n  .hero-nav-next {\n    right: 18px;\n  }\n\n  .button,\n  .card-actions .button,\n  .dialog-owner-actions .button {\n    width: 100%;\n  }\n\n  .footer-links {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 520px) {\n  .container {\n    width: min(1180px, calc(100% - 24px));\n  }\n\n  .brand,\n  .footer-brand {\n    font-size: 1.7rem;\n  }\n\n  .sub-menu {\n    gap: 14px;\n  }\n\n  .hero-banner {\n    padding: 20px;\n    border-radius: 28px;\n  }\n\n  .hero-copy h1 {\n    font-size: clamp(2.1rem, 10vw, 2.8rem);\n  }\n\n  .shortcut-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .shortcut-tile {\n    min-height: 102px;\n  }\n\n  .status-strip {\n    grid-template-columns: 1fr;\n  }\n\n  .meeting-card h3 {\n    font-size: 1.28rem;\n  }\n\n  .card-poster {\n    min-height: 158px;\n  }\n}",
          "description": "태블릿과 모바일에서 열 수, 패딩, 버튼 배치를 바꾼다."
        }
      ]
    },
    {
      "id": "script.js",
      "path": "script.js",
      "title": "script.js",
      "kind": "js",
      "role": "메인 페이지의 동작을 담당하는 JavaScript 파일이다. 샘플 데이터, localStorage 저장, 검색/정렬, 추천 배너, 참여, 추가, 수정, 삭제, 상세 팝업 로직이 들어 있다.",
      "whenUsed": "`index.html`이 파싱된 뒤 `defer`로 실행되어 DOM 요소와 이벤트를 연결한다.",
      "indentGuide": "JavaScript는 함수, 조건문, 반복문, 객체, 배열 안으로 들어갈수록 들여쓰기가 깊어진다. 즉 들여쓰기는 '지금 이 줄이 어느 블록 안에 속하는가'를 보여 주는 표시다.",
      "connections": [
        "JS가 선택하는 HTML 요소:",
        "`#statusCards` → index.html 100줄",
        "`#meetingList` → index.html 221줄",
        "`#searchForm` → index.html 161줄",
        "`#createForm` → index.html 322줄",
        "`#detailDialog` → index.html 395줄",
        "`#heroTitle` → index.html 66줄",
        "`[data-quick-filter]` → index.html 38~54줄, 104~134줄",
        "`[data-quick-action]` → index.html 139줄",
        "HTML ↔ CSS 연결: 이 파일은 카드 HTML 문자열 안에 `meeting-card`, `button`, `meta-chip`, `empty-state` 같은 class를 넣어 `styles.css`와 간접 연결된다.",
        "asset 참조 여부: 이미지 자산을 직접 읽지 않는다.",
        "상대경로 사용: 브라우저 저장은 상대경로가 아니라 `localStorage` 키(`moim-meetings-v2`)를 사용한다."
      ],
      "badges": [
        "동작",
        "이벤트",
        "데이터"
      ],
      "docPath": "../docs/per-file-deep-explanations/03-script-js.md",
      "sourcePath": "../script.js",
      "lines": [
        {
          "lineNumber": 1,
          "code": "const STORAGE_KEY = \"moim-meetings-v2\";",
          "explanation": "브라우저 localStorage에 저장할 키 이름을 고정하는 상수다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 2,
          "code": "const CURRENT_USER = \"운영자 A\";",
          "explanation": "현재 사용자를 가정한 이름을 저장하는 상수다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 3,
          "code": "const legacyOrganizerMap = {",
          "explanation": "예전 주최자 이름을 현재 표기로 바꾸기 위한 매핑 객체다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 4,
          "code": "  장운수: \"운영자 A\",",
          "explanation": "`장운수` 속성에 값을 넣는 줄이다. 현재 값은 `\"운영자 A\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 5,
          "code": "  송유찬: \"운영자 B\",",
          "explanation": "`송유찬` 속성에 값을 넣는 줄이다. 현재 값은 `\"운영자 B\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 6,
          "code": "  조소빈: \"운영자 C\",",
          "explanation": "`조소빈` 속성에 값을 넣는 줄이다. 현재 값은 `\"운영자 C\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 7,
          "code": "  최요섭: \"운영자 D\",",
          "explanation": "`최요섭` 속성에 값을 넣는 줄이다. 현재 값은 `\"운영자 D\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 8,
          "code": "  곽진우: \"운영자 E\",",
          "explanation": "`곽진우` 속성에 값을 넣는 줄이다. 현재 값은 `\"운영자 E\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 9,
          "code": "};",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 10,
          "code": "const legacyLocationMap = {",
          "explanation": "예전 지역 이름을 현재 지역 표기로 바꾸기 위한 매핑 객체다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 11,
          "code": "  천안: \"시내권\",",
          "explanation": "`천안` 속성에 값을 넣는 줄이다. 현재 값은 `\"시내권\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 12,
          "code": "  아산: \"생활권\",",
          "explanation": "`아산` 속성에 값을 넣는 줄이다. 현재 값은 `\"생활권\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 13,
          "code": "};",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 15,
          "code": "// 아직 DB가 없어서, 첫 화면을 바로 보여 주기 위한 샘플 데이터를 코드에 넣어 둔다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 16,
          "code": "const defaultMeetings = [",
          "explanation": "처음 화면에 바로 보여 줄 샘플 모임 배열이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 17,
          "code": "  {",
          "explanation": "새 객체 블록을 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 18,
          "code": "    id: 1,",
          "explanation": "모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `1`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 19,
          "code": "    title: \"주말 풋살 같이 하기\",",
          "explanation": "모임 제목을 저장하는 속성이다. 현재 값은 `\"주말 풋살 같이 하기\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 20,
          "code": "    category: \"운동\",",
          "explanation": "모임 분류를 저장하는 속성이다. 현재 값은 `\"운동\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 21,
          "code": "    location: \"시내권\",",
          "explanation": "모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `\"시내권\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 22,
          "code": "    date: \"2026-03-20\",",
          "explanation": "모임 날짜를 저장하는 속성이다. 현재 값은 `\"2026-03-20\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 23,
          "code": "    capacity: 10,",
          "explanation": "최대 모집 인원을 저장하는 속성이다. 현재 값은 `10`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 24,
          "code": "    joined: 7,",
          "explanation": "현재 참여 인원을 저장하는 속성이다. 현재 값은 `7`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 25,
          "code": "    fee: \"5,000원\",",
          "explanation": "참가비 문구를 저장하는 속성이다. 현재 값은 `\"5,000원\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 26,
          "code": "    organizer: \"운영자 A\",",
          "explanation": "주최자 이름을 저장하는 속성이다. 현재 값은 `\"운영자 A\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 27,
          "code": "    description:",
          "explanation": "모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 28,
          "code": "      \"주말 저녁에 가볍게 풋살하는 모임입니다. 초보도 참여 가능하고 운동장 대여비를 함께 나누는 방식입니다.\",",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 29,
          "code": "    mine: true,",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 30,
          "code": "    createdByMe: true,",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 31,
          "code": "  },",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 32,
          "code": "  {",
          "explanation": "새 객체 블록을 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 33,
          "code": "    id: 2,",
          "explanation": "모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `2`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 34,
          "code": "    title: \"자료구조 스터디\",",
          "explanation": "모임 제목을 저장하는 속성이다. 현재 값은 `\"자료구조 스터디\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 35,
          "code": "    category: \"공부\",",
          "explanation": "모임 분류를 저장하는 속성이다. 현재 값은 `\"공부\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 36,
          "code": "    location: \"캠퍼스\",",
          "explanation": "모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `\"캠퍼스\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 37,
          "code": "    date: \"2026-03-18\",",
          "explanation": "모임 날짜를 저장하는 속성이다. 현재 값은 `\"2026-03-18\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 38,
          "code": "    capacity: 6,",
          "explanation": "최대 모집 인원을 저장하는 속성이다. 현재 값은 `6`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 39,
          "code": "    joined: 4,",
          "explanation": "현재 참여 인원을 저장하는 속성이다. 현재 값은 `4`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 40,
          "code": "    fee: \"무료\",",
          "explanation": "참가비 문구를 저장하는 속성이다. 현재 값은 `\"무료\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 41,
          "code": "    organizer: \"운영자 B\",",
          "explanation": "주최자 이름을 저장하는 속성이다. 현재 값은 `\"운영자 B\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 42,
          "code": "    description:",
          "explanation": "모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 43,
          "code": "      \"자료구조 수업 내용을 같이 정리하고 문제를 풀어보는 스터디입니다. 발표 순서도 돌아가면서 진행합니다.\",",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 44,
          "code": "    mine: true,",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 45,
          "code": "    createdByMe: false,",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 46,
          "code": "  },",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 47,
          "code": "  {",
          "explanation": "새 객체 블록을 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 48,
          "code": "    id: 3,",
          "explanation": "모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `3`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 49,
          "code": "    title: \"보드게임 번개 모임\",",
          "explanation": "모임 제목을 저장하는 속성이다. 현재 값은 `\"보드게임 번개 모임\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 50,
          "code": "    category: \"게임\",",
          "explanation": "모임 분류를 저장하는 속성이다. 현재 값은 `\"게임\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 51,
          "code": "    location: \"생활권\",",
          "explanation": "모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `\"생활권\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 52,
          "code": "    date: \"2026-03-22\",",
          "explanation": "모임 날짜를 저장하는 속성이다. 현재 값은 `\"2026-03-22\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 53,
          "code": "    capacity: 8,",
          "explanation": "최대 모집 인원을 저장하는 속성이다. 현재 값은 `8`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 54,
          "code": "    joined: 5,",
          "explanation": "현재 참여 인원을 저장하는 속성이다. 현재 값은 `5`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 55,
          "code": "    fee: \"3,000원\",",
          "explanation": "참가비 문구를 저장하는 속성이다. 현재 값은 `\"3,000원\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 56,
          "code": "    organizer: \"운영자 C\",",
          "explanation": "주최자 이름을 저장하는 속성이다. 현재 값은 `\"운영자 C\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 57,
          "code": "    description:",
          "explanation": "모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 58,
          "code": "      \"카페에서 간단한 보드게임을 즐기는 번개 모임입니다. 처음 오는 사람도 바로 적응할 수 있게 쉬운 게임부터 시작합니다.\",",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 59,
          "code": "    mine: false,",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 60,
          "code": "    createdByMe: false,",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 61,
          "code": "  },",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 62,
          "code": "  {",
          "explanation": "새 객체 블록을 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 63,
          "code": "    id: 4,",
          "explanation": "모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `4`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 64,
          "code": "    title: \"카페 탐방 친목 모임\",",
          "explanation": "모임 제목을 저장하는 속성이다. 현재 값은 `\"카페 탐방 친목 모임\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 65,
          "code": "    category: \"친목\",",
          "explanation": "모임 분류를 저장하는 속성이다. 현재 값은 `\"친목\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 66,
          "code": "    location: \"시내권\",",
          "explanation": "모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `\"시내권\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 67,
          "code": "    date: \"2026-03-25\",",
          "explanation": "모임 날짜를 저장하는 속성이다. 현재 값은 `\"2026-03-25\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 68,
          "code": "    capacity: 12,",
          "explanation": "최대 모집 인원을 저장하는 속성이다. 현재 값은 `12`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 69,
          "code": "    joined: 9,",
          "explanation": "현재 참여 인원을 저장하는 속성이다. 현재 값은 `9`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 70,
          "code": "    fee: \"각자 결제\",",
          "explanation": "참가비 문구를 저장하는 속성이다. 현재 값은 `\"각자 결제\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 71,
          "code": "    organizer: \"운영자 D\",",
          "explanation": "주최자 이름을 저장하는 속성이다. 현재 값은 `\"운영자 D\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 72,
          "code": "    description:",
          "explanation": "모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 73,
          "code": "      \"시내권 카페를 함께 방문하며 이야기 나누는 친목 모임입니다. 분위기 좋은 공간을 같이 찾는 것이 목표입니다.\",",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 74,
          "code": "    mine: false,",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 75,
          "code": "    createdByMe: false,",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 76,
          "code": "  },",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 77,
          "code": "];",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 79,
          "code": "let meetings = loadMeetings();",
          "explanation": "현재 화면이 기준으로 삼는 모임 배열 상태다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 80,
          "code": "let editingMeetingId = null;",
          "explanation": "수정 중인 모임 id를 기억하는 상태값이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 81,
          "code": "let dialogMeetingId = null;",
          "explanation": "상세 팝업에 열려 있는 모임 id를 기억하는 상태값이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 82,
          "code": "let activeQuickFilter = \"recommend\";",
          "explanation": "현재 선택된 빠른 필터 이름을 저장하는 상태값이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 83,
          "code": "let featuredMeetingIndex = 0;",
          "explanation": "추천 배너에서 현재 보이는 모임 순서를 저장한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 85,
          "code": "const statusCards = document.querySelector(\"#statusCards\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 86,
          "code": "const meetingList = document.querySelector(\"#meetingList\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 87,
          "code": "const myMeetingList = document.querySelector(\"#myMeetingList\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 88,
          "code": "const managedMeetingList = document.querySelector(\"#managedMeetingList\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 89,
          "code": "const searchForm = document.querySelector(\"#searchForm\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 90,
          "code": "const createForm = document.querySelector(\"#createForm\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 91,
          "code": "const resetButton = document.querySelector(\"#resetButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 92,
          "code": "const searchResultText = document.querySelector(\"#searchResultText\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 93,
          "code": "const statusFilter = document.querySelector(\"#statusFilter\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 94,
          "code": "const sortOrder = document.querySelector(\"#sortOrder\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 95,
          "code": "const formTitle = document.querySelector(\"#formTitle\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 96,
          "code": "const formModeText = document.querySelector(\"#formModeText\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 97,
          "code": "const submitButton = document.querySelector(\"#submitButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 98,
          "code": "const cancelEditButton = document.querySelector(\"#cancelEditButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 99,
          "code": "const detailDialog = document.querySelector(\"#detailDialog\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 100,
          "code": "const closeDialogButton = document.querySelector(\"#closeDialogButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 101,
          "code": "const dialogTitle = document.querySelector(\"#dialogTitle\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 102,
          "code": "const dialogMeta = document.querySelector(\"#dialogMeta\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 103,
          "code": "const dialogDescription = document.querySelector(\"#dialogDescription\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 104,
          "code": "const dialogOwnerActions = document.querySelector(\"#dialogOwnerActions\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 105,
          "code": "const dialogEditButton = document.querySelector(\"#dialogEditButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 106,
          "code": "const dialogDeleteButton = document.querySelector(\"#dialogDeleteButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 107,
          "code": "const keywordInput = document.querySelector(\"#keyword\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 108,
          "code": "const categorySelect = document.querySelector(\"#category\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 109,
          "code": "const locationSelect = document.querySelector(\"#location\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 110,
          "code": "const heroKicker = document.querySelector(\"#heroKicker\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 111,
          "code": "const heroTitle = document.querySelector(\"#heroTitle\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 112,
          "code": "const heroDescription = document.querySelector(\"#heroDescription\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 113,
          "code": "const heroDetailButton = document.querySelector(\"#heroDetailButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 114,
          "code": "const heroJoinButton = document.querySelector(\"#heroJoinButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 115,
          "code": "const heroPrevButton = document.querySelector(\"#heroPrevButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 116,
          "code": "const heroNextButton = document.querySelector(\"#heroNextButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 117,
          "code": "const heroPageIndicator = document.querySelector(\"#heroPageIndicator\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 118,
          "code": "const featuredTeaserList = document.querySelector(\"#featuredTeaserList\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 119,
          "code": "const quickFilterButtons = document.querySelectorAll(\"[data-quick-filter]\");",
          "explanation": "DOM 요소 여러 개를 한 번에 선택해 목록으로 저장하는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 120,
          "code": "const quickActionButtons = document.querySelectorAll(\"[data-quick-action]\");",
          "explanation": "DOM 요소 여러 개를 한 번에 선택해 목록으로 저장하는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 122,
          "code": "function getDefaultMeetings() {",
          "explanation": "`getDefaultMeetings()` 함수를 선언하는 줄이다. 기본 샘플 데이터를 복사해서 새 배열로 돌려준다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 123,
          "code": "  return defaultMeetings.map((item) => ({ ...item }));",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 124,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 126,
          "code": "function normalizeMeeting(item) {",
          "explanation": "`normalizeMeeting()` 함수를 선언하는 줄이다. 저장된 모임 데이터를 현재 형식에 맞게 보정한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 127,
          "code": "  const organizer = normalizeOrganizerName(item.organizer);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 128,
          "code": "  const location = normalizeLocationName(item.location);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 130,
          "code": "  return {",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 131,
          "code": "    id: item.id ?? Date.now(),",
          "explanation": "모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `item.id ?? Date.now()`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 132,
          "code": "    title: item.title ?? \"제목 없음\",",
          "explanation": "모임 제목을 저장하는 속성이다. 현재 값은 `item.title ?? \"제목 없음\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 133,
          "code": "    category: item.category ?? \"친목\",",
          "explanation": "모임 분류를 저장하는 속성이다. 현재 값은 `item.category ?? \"친목\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 134,
          "code": "    location: location ?? \"캠퍼스\",",
          "explanation": "모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `location ?? \"캠퍼스\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 135,
          "code": "    date: item.date ?? new Date().toISOString().slice(0, 10),",
          "explanation": "모임 날짜를 저장하는 속성이다. 현재 값은 `item.date ?? new Date().toISOString().slice(0, 10)`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 136,
          "code": "    capacity: Number(item.capacity) || 10,",
          "explanation": "최대 모집 인원을 저장하는 속성이다. 현재 값은 `Number(item.capacity) || 10`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 137,
          "code": "    joined: Number(item.joined) || 0,",
          "explanation": "현재 참여 인원을 저장하는 속성이다. 현재 값은 `Number(item.joined) || 0`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 138,
          "code": "    fee: item.fee || \"미정\",",
          "explanation": "참가비 문구를 저장하는 속성이다. 현재 값은 `item.fee || \"미정\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 139,
          "code": "    organizer,",
          "explanation": "`normalizeMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 140,
          "code": "    description: item.description || \"설명이 아직 없습니다.\",",
          "explanation": "모임 상세 설명을 담기 위한 속성이다. 현재 값은 `item.description || \"설명이 아직 없습니다.\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 141,
          "code": "    mine: Boolean(item.mine),",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `Boolean(item.mine)`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 142,
          "code": "    createdByMe: Boolean(",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `Boolean(`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 143,
          "code": "      item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))",
          "explanation": "`normalizeMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 144,
          "code": "    ),",
          "explanation": "`normalizeMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 145,
          "code": "  };",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 146,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 148,
          "code": "function normalizeOrganizerName(value) {",
          "explanation": "`normalizeOrganizerName()` 함수를 선언하는 줄이다. 예전 주최자 이름을 현재 표기 기준으로 정리한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 149,
          "code": "  if (!value) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 150,
          "code": "    return \"미정\";",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 151,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 153,
          "code": "  return legacyOrganizerMap[value] || value;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 154,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 156,
          "code": "function normalizeLocationName(value) {",
          "explanation": "`normalizeLocationName()` 함수를 선언하는 줄이다. 예전 지역 이름을 현재 지역 이름으로 바꾼다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 157,
          "code": "  if (!value) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 158,
          "code": "    return \"캠퍼스\";",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 159,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 161,
          "code": "  return legacyLocationMap[value] || value;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 162,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 164,
          "code": "// 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 165,
          "code": "function loadMeetings() {",
          "explanation": "`loadMeetings()` 함수를 선언하는 줄이다. 브라우저 저장소를 먼저 읽고, 없으면 기본 데이터를 반환한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 166,
          "code": "  try {",
          "explanation": "`loadMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 167,
          "code": "    const stored = localStorage.getItem(STORAGE_KEY);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 169,
          "code": "    if (!stored) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 170,
          "code": "      return getDefaultMeetings();",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 171,
          "code": "    }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 4칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 173,
          "code": "    const parsed = JSON.parse(stored);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 175,
          "code": "    if (!Array.isArray(parsed)) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 176,
          "code": "      return getDefaultMeetings();",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 177,
          "code": "    }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 4칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 179,
          "code": "    return parsed.map(normalizeMeeting);",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 180,
          "code": "  } catch (error) {",
          "explanation": "`loadMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 181,
          "code": "    return getDefaultMeetings();",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 182,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 183,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 185,
          "code": "function saveMeetings() {",
          "explanation": "`saveMeetings()` 함수를 선언하는 줄이다. 현재 모임 배열을 localStorage에 저장한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 186,
          "code": "  try {",
          "explanation": "`saveMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 187,
          "code": "    localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));",
          "explanation": "현재 데이터를 브라우저 저장소에 저장하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 188,
          "code": "  } catch (error) {",
          "explanation": "`saveMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 189,
          "code": "    console.error(\"브라우저 저장에 실패했습니다.\", error);",
          "explanation": "`saveMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 190,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 191,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 193,
          "code": "// 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 194,
          "code": "function renderStatus() {",
          "explanation": "`renderStatus()` 함수를 선언하는 줄이다. 상단 숫자 카드를 다시 계산해 출력한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 195,
          "code": "  const totalMeetings = meetings.length;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 196,
          "code": "  const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 197,
          "code": "  const mine = meetings.filter((item) => item.mine).length;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 198,
          "code": "  const openSeats = meetings.reduce(",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 199,
          "code": "    (sum, item) => sum + (item.capacity - item.joined),",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 200,
          "code": "    0",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 201,
          "code": "  );",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 203,
          "code": "  const items = [",
          "explanation": "배열 데이터를 시작하는 선언 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 204,
          "code": "    { label: \"전체 모임\", value: `${totalMeetings}개` },",
          "explanation": "`{ label` 속성에 값을 넣는 줄이다. 현재 값은 `\"전체 모임\", value: `${totalMeetings}개` }`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 205,
          "code": "    { label: \"참여 인원\", value: `${totalMembers}명` },",
          "explanation": "`{ label` 속성에 값을 넣는 줄이다. 현재 값은 `\"참여 인원\", value: `${totalMembers}명` }`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 206,
          "code": "    { label: \"내 모임\", value: `${mine}개` },",
          "explanation": "`{ label` 속성에 값을 넣는 줄이다. 현재 값은 `\"내 모임\", value: `${mine}개` }`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 207,
          "code": "    { label: \"남은 자리\", value: `${openSeats}석` },",
          "explanation": "`{ label` 속성에 값을 넣는 줄이다. 현재 값은 `\"남은 자리\", value: `${openSeats}석` }`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 208,
          "code": "  ];",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 210,
          "code": "  statusCards.innerHTML = items",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 211,
          "code": "    .map(",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 212,
          "code": "      (item) => `",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 213,
          "code": "        <article class=\"status-card\">",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 214,
          "code": "          <p>${item.label}</p>",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 215,
          "code": "          <strong>${item.value}</strong>",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 216,
          "code": "        </article>",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 217,
          "code": "      `",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 218,
          "code": "    )",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 219,
          "code": "    .join(\"\");",
          "explanation": "`renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 220,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 222,
          "code": "// 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 223,
          "code": "function createMeetingCard(item, mode = \"default\") {",
          "explanation": "`createMeetingCard()` 함수를 선언하는 줄이다. 모임 하나를 카드 HTML 문자열로 만든다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 224,
          "code": "  const isClosed = item.joined >= item.capacity;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 225,
          "code": "  const actionLabel = item.mine ? \"참여 완료\" : isClosed ? \"모집 마감\" : \"참여하기\";",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 226,
          "code": "  const archiveCode = `ARCHIVE ${String(item.id).padStart(2, \"0\")}`;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 227,
          "code": "  const primaryLabel =",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 228,
          "code": "    mode === \"manage\" ? \"운영중\" : item.mine ? \"참여중\" : isClosed ? \"마감\" : \"추천\";",
          "explanation": "`mode === \"manage\" ? \"운영중\"` 속성에 값을 넣는 줄이다. 현재 값은 `item.mine ? \"참여중\" : isClosed ? \"마감\" : \"추천\";`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 229,
          "code": "  const actionButtons =",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 230,
          "code": "    mode === \"manage\"",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 231,
          "code": "      ? `",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 232,
          "code": "          <button class=\"button ghost\" type=\"button\" onclick=\"openDetail(${item.id})\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 233,
          "code": "            상세",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 234,
          "code": "          </button>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 235,
          "code": "          <button class=\"button secondary\" type=\"button\" onclick=\"startEditMeeting(${item.id})\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 236,
          "code": "            수정",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 237,
          "code": "          </button>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 238,
          "code": "          <button class=\"button danger\" type=\"button\" onclick=\"deleteMeeting(${item.id})\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 239,
          "code": "            삭제",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 240,
          "code": "          </button>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 241,
          "code": "        `",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 242,
          "code": "      : `",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 243,
          "code": "          <button class=\"button ghost\" type=\"button\" onclick=\"openDetail(${item.id})\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 244,
          "code": "            상세",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 245,
          "code": "          </button>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 246,
          "code": "          <button",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 247,
          "code": "            class=\"button secondary\"",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 248,
          "code": "            type=\"button\"",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 249,
          "code": "            onclick=\"joinMeeting(${item.id})\"",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 250,
          "code": "            ${item.mine || isClosed ? \"disabled\" : \"\"}",
          "explanation": "`${item.mine || isClosed ? \"disabled\"` 속성에 값을 넣는 줄이다. 현재 값은 `\"\"}`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 251,
          "code": "          >",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 252,
          "code": "            ${actionLabel}",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 253,
          "code": "          </button>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 254,
          "code": "        `;",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 256,
          "code": "  return `",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 257,
          "code": "    <article class=\"meeting-card\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 258,
          "code": "      <div class=\"card-poster\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 259,
          "code": "        <div class=\"card-pills\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 260,
          "code": "          <span class=\"card-pill primary\">${primaryLabel}</span>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 261,
          "code": "          ${item.createdByMe ? '<span class=\"card-pill\">개설</span>' : \"\"}",
          "explanation": "`${item.createdByMe ? '<span class=\"card-pill\">개설</span>'` 속성에 값을 넣는 줄이다. 현재 값은 `\"\"}`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 10칸 들여썼다."
        },
        {
          "lineNumber": 262,
          "code": "        </div>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 263,
          "code": "        <span class=\"card-code\">${archiveCode}</span>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 264,
          "code": "      </div>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 265,
          "code": "      <div class=\"card-copy\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 266,
          "code": "        <p class=\"card-location\">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 267,
          "code": "        <h3>${escapeHtml(item.title)}</h3>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 268,
          "code": "        <p class=\"description-preview\">${escapeHtml(truncateText(item.description, 42))}</p>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 269,
          "code": "        <div class=\"meta-row\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 270,
          "code": "          <span class=\"meta-chip\">주최 ${escapeHtml(item.organizer)}</span>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 271,
          "code": "          <span class=\"meta-chip\">참여 ${item.joined}/${item.capacity}</span>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 272,
          "code": "          <span class=\"meta-chip\">${escapeHtml(item.fee)}</span>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 273,
          "code": "        </div>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 274,
          "code": "        <div class=\"card-footer\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 275,
          "code": "          <p class=\"card-schedule\">${formatDate(item.date)} · ${getSeatMessage(item)}</p>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 276,
          "code": "          <div class=\"card-actions\">",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 277,
          "code": "            ${actionButtons}",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 278,
          "code": "          </div>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 279,
          "code": "        </div>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 280,
          "code": "      </div>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 281,
          "code": "    </article>",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 282,
          "code": "  `;",
          "explanation": "`createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 283,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 285,
          "code": "function renderMeetings(list) {",
          "explanation": "`renderMeetings()` 함수를 선언하는 줄이다. 검색 결과 목록을 화면에 그린다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 286,
          "code": "  searchResultText.textContent = buildResultMessage(list.length);",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 288,
          "code": "  if (list.length === 0) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 289,
          "code": "    meetingList.innerHTML =",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 290,
          "code": "      '<div class=\"empty-state\">조건에 맞는 모임이 없습니다.</div>';",
          "explanation": "`renderMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 291,
          "code": "    return;",
          "explanation": "`renderMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 292,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 294,
          "code": "  meetingList.innerHTML = list.map(createMeetingCard).join(\"\");",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 295,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 297,
          "code": "function renderMyMeetings() {",
          "explanation": "`renderMyMeetings()` 함수를 선언하는 줄이다. 내가 참여 중인 모임만 따로 그린다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 298,
          "code": "  const myList = meetings.filter((item) => item.mine);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 300,
          "code": "  if (myList.length === 0) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 301,
          "code": "    myMeetingList.innerHTML =",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 302,
          "code": "      '<div class=\"empty-state\">아직 참여한 모임이 없습니다.</div>';",
          "explanation": "`renderMyMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 303,
          "code": "    return;",
          "explanation": "`renderMyMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 304,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 306,
          "code": "  myMeetingList.innerHTML = myList.map(createMeetingCard).join(\"\");",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 307,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 309,
          "code": "function renderManagedMeetings() {",
          "explanation": "`renderManagedMeetings()` 함수를 선언하는 줄이다. 내가 만든 모임만 관리용 버튼과 함께 그린다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 310,
          "code": "  const managedList = meetings.filter((item) => item.createdByMe);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 312,
          "code": "  if (managedList.length === 0) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 313,
          "code": "    managedMeetingList.innerHTML =",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 314,
          "code": "      '<div class=\"empty-state\">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';",
          "explanation": "`renderManagedMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 315,
          "code": "    return;",
          "explanation": "`renderManagedMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 316,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 318,
          "code": "  managedMeetingList.innerHTML = managedList",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 319,
          "code": "    .map((item) => createMeetingCard(item, \"manage\"))",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 320,
          "code": "    .join(\"\");",
          "explanation": "`renderManagedMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 321,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 323,
          "code": "function getQuickFilterLabel(filterName) {",
          "explanation": "`getQuickFilterLabel()` 함수를 선언하는 줄이다. 빠른 필터 이름을 화면 문구로 바꾼다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 324,
          "code": "  const labels = {",
          "explanation": "객체 또는 데이터 묶음을 시작하는 선언 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 325,
          "code": "    recommend: \"추천\",",
          "explanation": "`recommend` 속성에 값을 넣는 줄이다. 현재 값은 `\"추천\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 326,
          "code": "    today: \"당일\",",
          "explanation": "`today` 속성에 값을 넣는 줄이다. 현재 값은 `\"당일\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 327,
          "code": "    small: \"소규모\",",
          "explanation": "`small` 속성에 값을 넣는 줄이다. 현재 값은 `\"소규모\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 328,
          "code": "    weekend: \"주말\",",
          "explanation": "`weekend` 속성에 값을 넣는 줄이다. 현재 값은 `\"주말\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 329,
          "code": "    campus: \"캠퍼스\",",
          "explanation": "`campus` 속성에 값을 넣는 줄이다. 현재 값은 `\"캠퍼스\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 330,
          "code": "    sports: \"운동\",",
          "explanation": "`sports` 속성에 값을 넣는 줄이다. 현재 값은 `\"운동\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 331,
          "code": "    study: \"공부\",",
          "explanation": "`study` 속성에 값을 넣는 줄이다. 현재 값은 `\"공부\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 332,
          "code": "    social: \"취향\",",
          "explanation": "`social` 속성에 값을 넣는 줄이다. 현재 값은 `\"취향\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 333,
          "code": "    mine: \"내 모임\",",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `\"내 모임\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 334,
          "code": "  };",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 336,
          "code": "  return labels[filterName] || \"추천\";",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 337,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 339,
          "code": "function getNearestMeetingDate(list) {",
          "explanation": "`getNearestMeetingDate()` 함수를 선언하는 줄이다. 가장 빠른 모임 날짜를 구한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 340,
          "code": "  const uniqueDates = [...new Set(list.map((item) => item.date))];",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 342,
          "code": "  if (uniqueDates.length === 0) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 343,
          "code": "    return null;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 344,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 346,
          "code": "  return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 347,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 349,
          "code": "function matchesWeekend(item) {",
          "explanation": "`matchesWeekend()` 함수를 선언하는 줄이다. 해당 모임이 주말 날짜인지 검사한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 350,
          "code": "  const day = new Date(item.date).getDay();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 351,
          "code": "  return day === 0 || day === 6;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 352,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 354,
          "code": "function applyQuickFilterRule(list) {",
          "explanation": "`applyQuickFilterRule()` 함수를 선언하는 줄이다. 빠른 필터 규칙을 실제 목록 필터로 적용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 355,
          "code": "  if (activeQuickFilter === \"today\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 356,
          "code": "    const nearestDate = getNearestMeetingDate(list);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 357,
          "code": "    return nearestDate ? list.filter((item) => item.date === nearestDate) : list;",
          "explanation": "`return nearestDate ? list.filter((item) => item.date === nearestDate)` 속성에 값을 넣는 줄이다. 현재 값은 `list;`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 358,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 360,
          "code": "  if (activeQuickFilter === \"small\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 361,
          "code": "    return list.filter((item) => item.capacity <= 8);",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 362,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 364,
          "code": "  if (activeQuickFilter === \"weekend\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 365,
          "code": "    return list.filter(matchesWeekend);",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 366,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 368,
          "code": "  if (activeQuickFilter === \"social\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 369,
          "code": "    return list.filter(",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 370,
          "code": "      (item) => item.category === \"친목\" || item.category === \"게임\"",
          "explanation": "`applyQuickFilterRule()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 371,
          "code": "    );",
          "explanation": "`applyQuickFilterRule()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 372,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 374,
          "code": "  return list;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 375,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 377,
          "code": "function syncQuickFilterUi() {",
          "explanation": "`syncQuickFilterUi()` 함수를 선언하는 줄이다. 선택된 빠른 필터 버튼의 활성 상태를 맞춘다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 378,
          "code": "  quickFilterButtons.forEach((button) => {",
          "explanation": "`syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 379,
          "code": "    const isActive = button.dataset.quickFilter === activeQuickFilter;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 380,
          "code": "    button.classList.toggle(\"is-active\", isActive);",
          "explanation": "`syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 381,
          "code": "    button.classList.toggle(\"is-current\", isActive);",
          "explanation": "`syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 382,
          "code": "    button.setAttribute(\"aria-pressed\", String(isActive));",
          "explanation": "`syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 383,
          "code": "  });",
          "explanation": "`syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 384,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 386,
          "code": "function buildResultMessage(count) {",
          "explanation": "`buildResultMessage()` 함수를 선언하는 줄이다. 검색 결과 상단의 안내 문구를 만든다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 387,
          "code": "  const prefix =",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 388,
          "code": "    activeQuickFilter === \"recommend\"",
          "explanation": "`buildResultMessage()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 389,
          "code": "      ? \"현재 조건에 맞는\"",
          "explanation": "`buildResultMessage()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 390,
          "code": "      : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;",
          "explanation": "`buildResultMessage()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 392,
          "code": "  return `${prefix} 모임은 ${count}개입니다.`;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 393,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 395,
          "code": "function getFeaturedMeetings() {",
          "explanation": "`getFeaturedMeetings()` 함수를 선언하는 줄이다. 추천 배너에 쓸 상위 모임 목록을 계산한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 396,
          "code": "  const openMeetings = meetings.filter((item) => item.joined < item.capacity);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 397,
          "code": "  const baseList = openMeetings.length > 0 ? openMeetings : meetings;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 399,
          "code": "  return sortMeetings(baseList, \"popular\").slice(0, 6);",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 400,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 402,
          "code": "function getCurrentFeaturedMeeting() {",
          "explanation": "`getCurrentFeaturedMeeting()` 함수를 선언하는 줄이다. 현재 추천 배너의 주인공 모임을 반환한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 403,
          "code": "  const featured = getFeaturedMeetings();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 405,
          "code": "  if (featured.length === 0) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 406,
          "code": "    return null;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 407,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 409,
          "code": "  if (featuredMeetingIndex >= featured.length) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 410,
          "code": "    featuredMeetingIndex = 0;",
          "explanation": "`getCurrentFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 411,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 413,
          "code": "  return featured[featuredMeetingIndex];",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 414,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 416,
          "code": "function renderFeaturedSection() {",
          "explanation": "`renderFeaturedSection()` 함수를 선언하는 줄이다. 추천 배너의 제목, 설명, 버튼, 미리보기 카드를 갱신한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 417,
          "code": "  const featured = getFeaturedMeetings();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 419,
          "code": "  if (featured.length === 0) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 420,
          "code": "    heroKicker.textContent = \"추천 모임 준비 중\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 421,
          "code": "    heroTitle.textContent = \"새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 422,
          "code": "    heroDescription.textContent =",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 423,
          "code": "      \"아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.\";",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 424,
          "code": "    heroPageIndicator.textContent = \"추천 0 / 0\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 425,
          "code": "    heroDetailButton.disabled = true;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 426,
          "code": "    heroJoinButton.disabled = true;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 427,
          "code": "    heroJoinButton.textContent = \"바로 참여\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 428,
          "code": "    heroPrevButton.disabled = true;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 429,
          "code": "    heroNextButton.disabled = true;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 430,
          "code": "    featuredTeaserList.innerHTML = \"\";",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 431,
          "code": "    return;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 432,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 434,
          "code": "  const current = getCurrentFeaturedMeeting();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 435,
          "code": "  const teaserItems = Array.from(",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 436,
          "code": "    { length: Math.min(featured.length, 3) },",
          "explanation": "`{ length` 속성에 값을 넣는 줄이다. 현재 값은 `Math.min(featured.length, 3) }`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 437,
          "code": "    (_, index) => featured[(featuredMeetingIndex + index) % featured.length]",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 438,
          "code": "  );",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 439,
          "code": "  const isClosed = current.joined >= current.capacity;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 441,
          "code": "  heroKicker.textContent = `${current.location} · ${current.category} 추천`;",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 442,
          "code": "  heroTitle.textContent = current.title;",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 443,
          "code": "  heroDescription.textContent = `${current.description} ${formatDate(",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 444,
          "code": "    current.date",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 445,
          "code": "  )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 446,
          "code": "  heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 447,
          "code": "    featured.length",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 448,
          "code": "  }`;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 449,
          "code": "  heroDetailButton.disabled = false;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 450,
          "code": "  heroJoinButton.disabled = current.mine || isClosed;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 451,
          "code": "  heroJoinButton.textContent = current.mine",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 452,
          "code": "    ? \"참여 완료\"",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 453,
          "code": "    : isClosed",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 454,
          "code": "    ? \"모집 마감\"",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 455,
          "code": "    : \"바로 참여\";",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 456,
          "code": "  heroPrevButton.disabled = featured.length <= 1;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 457,
          "code": "  heroNextButton.disabled = featured.length <= 1;",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 459,
          "code": "  featuredTeaserList.innerHTML = teaserItems",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 460,
          "code": "    .map(",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 461,
          "code": "      (item, index) => `",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 462,
          "code": "        <button",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 463,
          "code": "          class=\"hero-teaser-card ${index === 0 ? \"wide\" : \"\"} ${",
          "explanation": "`class=\"hero-teaser-card ${index === 0 ? \"wide\"` 속성에 값을 넣는 줄이다. 현재 값은 `\"\"} ${`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 10칸 들여썼다."
        },
        {
          "lineNumber": 464,
          "code": "            item.id === current.id ? \"is-active\" : \"\"",
          "explanation": "`item.id === current.id ? \"is-active\"` 속성에 값을 넣는 줄이다. 현재 값은 `\"\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 465,
          "code": "          }\"",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 466,
          "code": "          type=\"button\"",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 467,
          "code": "          data-featured-id=\"${item.id}\"",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 468,
          "code": "        >",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 469,
          "code": "          <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 470,
          "code": "          <strong>${escapeHtml(item.title)}</strong>",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 471,
          "code": "        </button>",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 472,
          "code": "      `",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 473,
          "code": "    )",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 474,
          "code": "    .join(\"\");",
          "explanation": "`renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 475,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 477,
          "code": "// 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 478,
          "code": "function getFilteredMeetings() {",
          "explanation": "`getFilteredMeetings()` 함수를 선언하는 줄이다. 검색 폼 값과 빠른 필터를 함께 적용해 결과 목록을 만든다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 479,
          "code": "  const keyword = keywordInput.value.trim().toLowerCase();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 480,
          "code": "  const category = categorySelect.value;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 481,
          "code": "  const location = locationSelect.value;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 482,
          "code": "  const status = statusFilter.value;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 483,
          "code": "  const sort = sortOrder.value;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 485,
          "code": "  const filtered = meetings.filter((item) => {",
          "explanation": "객체 또는 데이터 묶음을 시작하는 선언 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 486,
          "code": "    const matchesKeyword = item.title.toLowerCase().includes(keyword);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 487,
          "code": "    const matchesCategory = category === \"all\" || item.category === category;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 488,
          "code": "    const matchesLocation = location === \"all\" || item.location === location;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 489,
          "code": "    const matchesStatus =",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 490,
          "code": "      status === \"all\" ||",
          "explanation": "`getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 491,
          "code": "      (status === \"open\" && item.joined < item.capacity) ||",
          "explanation": "`getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 492,
          "code": "      (status === \"mine\" && item.mine) ||",
          "explanation": "`getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 493,
          "code": "      (status === \"closed\" && item.joined >= item.capacity);",
          "explanation": "`getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 495,
          "code": "    return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 496,
          "code": "  });",
          "explanation": "`getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 498,
          "code": "  return sortMeetings(applyQuickFilterRule(filtered), sort);",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 499,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 501,
          "code": "function applyFiltersAndRender() {",
          "explanation": "`applyFiltersAndRender()` 함수를 선언하는 줄이다. 현재 조건으로 다시 검색하고 목록을 그린다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 502,
          "code": "  renderMeetings(getFilteredMeetings());",
          "explanation": "`applyFiltersAndRender()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 503,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 505,
          "code": "function resetFilters() {",
          "explanation": "`resetFilters()` 함수를 선언하는 줄이다. 검색 폼과 빠른 필터 상태를 처음 값으로 되돌린다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 506,
          "code": "  searchForm.reset();",
          "explanation": "`resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 507,
          "code": "  activeQuickFilter = \"recommend\";",
          "explanation": "`resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 508,
          "code": "  applyQuickPreset(activeQuickFilter);",
          "explanation": "`resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 509,
          "code": "  applyFiltersAndRender();",
          "explanation": "`resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 510,
          "code": "  syncQuickFilterUi();",
          "explanation": "`resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 511,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 513,
          "code": "function applyQuickPreset(filterName) {",
          "explanation": "`applyQuickPreset()` 함수를 선언하는 줄이다. 빠른 필터에 맞게 검색 폼 값을 미리 채운다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 514,
          "code": "  keywordInput.value = \"\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 515,
          "code": "  categorySelect.value = \"all\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 516,
          "code": "  locationSelect.value = \"all\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 517,
          "code": "  statusFilter.value = \"all\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 518,
          "code": "  sortOrder.value = filterName === \"recommend\" ? \"popular\" : \"soon\";",
          "explanation": "`sortOrder.value = filterName === \"recommend\" ? \"popular\"` 속성에 값을 넣는 줄이다. 현재 값은 `\"soon\";`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 520,
          "code": "  if (filterName === \"campus\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 521,
          "code": "    locationSelect.value = \"캠퍼스\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 522,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 524,
          "code": "  if (filterName === \"sports\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 525,
          "code": "    categorySelect.value = \"운동\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 526,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 528,
          "code": "  if (filterName === \"study\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 529,
          "code": "    categorySelect.value = \"공부\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 530,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 532,
          "code": "  if (filterName === \"mine\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 533,
          "code": "    statusFilter.value = \"mine\";",
          "explanation": "`applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 534,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 535,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 537,
          "code": "function applyQuickFilter(filterName) {",
          "explanation": "`applyQuickFilter()` 함수를 선언하는 줄이다. 빠른 필터를 선택하고 검색 영역으로 스크롤한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 538,
          "code": "  activeQuickFilter = filterName;",
          "explanation": "`applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 539,
          "code": "  applyQuickPreset(filterName);",
          "explanation": "`applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 540,
          "code": "  applyFiltersAndRender();",
          "explanation": "`applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 541,
          "code": "  syncQuickFilterUi();",
          "explanation": "`applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 542,
          "code": "  document.querySelector(\"#search\").scrollIntoView({ behavior: \"smooth\" });",
          "explanation": "`document.querySelector(\"#search\").scrollIntoView({ behavior` 속성에 값을 넣는 줄이다. 현재 값은 `\"smooth\" });`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 543,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 545,
          "code": "function handleQuickAction(actionName) {",
          "explanation": "`handleQuickAction()` 함수를 선언하는 줄이다. 빠른 타일의 특수 동작을 처리한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 546,
          "code": "  if (actionName === \"create\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 547,
          "code": "    document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });",
          "explanation": "`document.querySelector(\"#create\").scrollIntoView({ behavior` 속성에 값을 넣는 줄이다. 현재 값은 `\"smooth\" });`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 548,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 549,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 551,
          "code": "function moveFeaturedMeeting(step) {",
          "explanation": "`moveFeaturedMeeting()` 함수를 선언하는 줄이다. 추천 배너를 이전/다음 항목으로 이동한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 552,
          "code": "  const featured = getFeaturedMeetings();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 554,
          "code": "  if (featured.length <= 1) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 555,
          "code": "    return;",
          "explanation": "`moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 556,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 558,
          "code": "  featuredMeetingIndex =",
          "explanation": "`moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 559,
          "code": "    (featuredMeetingIndex + step + featured.length) % featured.length;",
          "explanation": "`moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 560,
          "code": "  renderFeaturedSection();",
          "explanation": "`moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 561,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 563,
          "code": "function selectFeaturedMeeting(id) {",
          "explanation": "`selectFeaturedMeeting()` 함수를 선언하는 줄이다. 미리보기 카드 클릭으로 추천 배너 항목을 바꾼다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 564,
          "code": "  const featured = getFeaturedMeetings();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 565,
          "code": "  const nextIndex = featured.findIndex((item) => item.id === id);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 567,
          "code": "  if (nextIndex === -1) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 568,
          "code": "    return;",
          "explanation": "`selectFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 569,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 571,
          "code": "  featuredMeetingIndex = nextIndex;",
          "explanation": "`selectFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 572,
          "code": "  renderFeaturedSection();",
          "explanation": "`selectFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 573,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 575,
          "code": "function getFormValues() {",
          "explanation": "`getFormValues()` 함수를 선언하는 줄이다. 모임 생성/수정 폼의 현재 입력값을 읽는다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 576,
          "code": "  return {",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 577,
          "code": "    title: document.querySelector(\"#newTitle\").value.trim(),",
          "explanation": "모임 제목을 저장하는 속성이다. 현재 값은 `document.querySelector(\"#newTitle\").value.trim()`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 578,
          "code": "    category: document.querySelector(\"#newCategory\").value,",
          "explanation": "모임 분류를 저장하는 속성이다. 현재 값은 `document.querySelector(\"#newCategory\").value`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 579,
          "code": "    location: document.querySelector(\"#newLocation\").value,",
          "explanation": "모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `document.querySelector(\"#newLocation\").value`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 580,
          "code": "    date: document.querySelector(\"#newDate\").value,",
          "explanation": "모임 날짜를 저장하는 속성이다. 현재 값은 `document.querySelector(\"#newDate\").value`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 581,
          "code": "    organizer: document.querySelector(\"#newOrganizer\").value.trim(),",
          "explanation": "주최자 이름을 저장하는 속성이다. 현재 값은 `document.querySelector(\"#newOrganizer\").value.trim()`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 582,
          "code": "    capacity: Number(document.querySelector(\"#newCapacity\").value),",
          "explanation": "최대 모집 인원을 저장하는 속성이다. 현재 값은 `Number(document.querySelector(\"#newCapacity\").value)`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 583,
          "code": "    fee: document.querySelector(\"#newFee\").value.trim(),",
          "explanation": "참가비 문구를 저장하는 속성이다. 현재 값은 `document.querySelector(\"#newFee\").value.trim()`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 584,
          "code": "    description: document.querySelector(\"#newDescription\").value.trim(),",
          "explanation": "모임 상세 설명을 담기 위한 속성이다. 현재 값은 `document.querySelector(\"#newDescription\").value.trim()`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 585,
          "code": "  };",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 586,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 588,
          "code": "// 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 589,
          "code": "function resetFormState() {",
          "explanation": "`resetFormState()` 함수를 선언하는 줄이다. 폼을 추가 모드 초기 상태로 되돌린다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 590,
          "code": "  editingMeetingId = null;",
          "explanation": "`resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 591,
          "code": "  createForm.reset();",
          "explanation": "`resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 592,
          "code": "  formTitle.textContent = \"폼으로 새 모임 추가하기\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 593,
          "code": "  formModeText.textContent =",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 594,
          "code": "    \"지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.\";",
          "explanation": "`resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 595,
          "code": "  submitButton.textContent = \"모임 추가\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 596,
          "code": "  cancelEditButton.classList.add(\"is-hidden\");",
          "explanation": "`resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 597,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 599,
          "code": "// 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 \"수정 모드\"처럼 보이게 만든다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 600,
          "code": "function startEditMeeting(id) {",
          "explanation": "`startEditMeeting()` 함수를 선언하는 줄이다. 선택한 모임 값을 폼에 넣고 수정 모드로 전환한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 601,
          "code": "  const selected = meetings.find((item) => item.id === id && item.createdByMe);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 603,
          "code": "  if (!selected) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 604,
          "code": "    return;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 605,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 607,
          "code": "  editingMeetingId = id;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 608,
          "code": "  document.querySelector(\"#newTitle\").value = selected.title;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 609,
          "code": "  document.querySelector(\"#newCategory\").value = selected.category;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 610,
          "code": "  document.querySelector(\"#newLocation\").value = selected.location;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 611,
          "code": "  document.querySelector(\"#newDate\").value = selected.date;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 612,
          "code": "  document.querySelector(\"#newOrganizer\").value = selected.organizer;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 613,
          "code": "  document.querySelector(\"#newCapacity\").value = selected.capacity;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 614,
          "code": "  document.querySelector(\"#newFee\").value = selected.fee;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 615,
          "code": "  document.querySelector(\"#newDescription\").value = selected.description;",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 617,
          "code": "  formTitle.textContent = \"기존 모임 수정하기\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 618,
          "code": "  formModeText.textContent =",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 619,
          "code": "    \"지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.\";",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 620,
          "code": "  submitButton.textContent = \"수정 내용 저장\";",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 621,
          "code": "  cancelEditButton.classList.remove(\"is-hidden\");",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 622,
          "code": "  closeDetail();",
          "explanation": "`startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 623,
          "code": "  document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });",
          "explanation": "`document.querySelector(\"#create\").scrollIntoView({ behavior` 속성에 값을 넣는 줄이다. 현재 값은 `\"smooth\" });`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 624,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 626,
          "code": "// editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 627,
          "code": "function handleFormSubmit(event) {",
          "explanation": "`handleFormSubmit()` 함수를 선언하는 줄이다. 폼 제출 시 추가 또는 수정을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 628,
          "code": "  event.preventDefault();",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 630,
          "code": "  const formValues = getFormValues();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 632,
          "code": "  if (editingMeetingId !== null) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 633,
          "code": "    meetings = meetings.map((item) =>",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 634,
          "code": "      item.id === editingMeetingId",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 635,
          "code": "        ? normalizeMeeting({",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다."
        },
        {
          "lineNumber": 636,
          "code": "            ...item,",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 637,
          "code": "            ...formValues,",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다."
        },
        {
          "lineNumber": 638,
          "code": "            createdByMe: true,",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 12칸 들여썼다."
        },
        {
          "lineNumber": 639,
          "code": "          })",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다."
        },
        {
          "lineNumber": 640,
          "code": "        : item",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 8칸 들여썼다."
        },
        {
          "lineNumber": 641,
          "code": "    );",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 642,
          "code": "  } else {",
          "explanation": "앞 조건이 거짓일 때 실행할 다른 분기를 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 643,
          "code": "    const newMeeting = normalizeMeeting({",
          "explanation": "객체 또는 데이터 묶음을 시작하는 선언 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 644,
          "code": "      id: Date.now(),",
          "explanation": "모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `Date.now()`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 645,
          "code": "      ...formValues,",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 646,
          "code": "      joined: 1,",
          "explanation": "현재 참여 인원을 저장하는 속성이다. 현재 값은 `1`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 647,
          "code": "      mine: true,",
          "explanation": "현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 648,
          "code": "      createdByMe: true,",
          "explanation": "현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 649,
          "code": "    });",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 651,
          "code": "    meetings.unshift(newMeeting);",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 652,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 654,
          "code": "  saveMeetings();",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 655,
          "code": "  resetFormState();",
          "explanation": "`handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 656,
          "code": "  renderAll();",
          "explanation": "화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 657,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 659,
          "code": "function getSeatMessage(item) {",
          "explanation": "`getSeatMessage()` 함수를 선언하는 줄이다. 남은 자리 문구를 계산한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 660,
          "code": "  const remaining = item.capacity - item.joined;",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 661,
          "code": "  return remaining > 0 ? `남은 자리 ${remaining}석` : \"모집 마감\";",
          "explanation": "`return remaining > 0 ? `남은 자리 ${remaining}석`` 속성에 값을 넣는 줄이다. 현재 값은 `\"모집 마감\";`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 662,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 664,
          "code": "function formatDate(value) {",
          "explanation": "`formatDate()` 함수를 선언하는 줄이다. 날짜 문자열을 한국어 날짜 표시로 바꾼다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 665,
          "code": "  const date = new Date(value);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 666,
          "code": "  return date.toLocaleDateString(\"ko-KR\");",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 667,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 669,
          "code": "function sortMeetings(list, sort) {",
          "explanation": "`sortMeetings()` 함수를 선언하는 줄이다. 필터링된 목록을 선택된 기준으로 정렬한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 670,
          "code": "  const sorted = [...list];",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 672,
          "code": "  if (sort === \"late\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 673,
          "code": "    return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 674,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 676,
          "code": "  if (sort === \"seats\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 677,
          "code": "    return sorted.sort(",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 678,
          "code": "      (a, b) => b.capacity - b.joined - (a.capacity - a.joined)",
          "explanation": "`sortMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다."
        },
        {
          "lineNumber": 679,
          "code": "    );",
          "explanation": "`sortMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 680,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 682,
          "code": "  if (sort === \"popular\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 683,
          "code": "    return sorted.sort((a, b) => b.joined - a.joined);",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 684,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 686,
          "code": "  return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 687,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 689,
          "code": "function truncateText(text, maxLength) {",
          "explanation": "`truncateText()` 함수를 선언하는 줄이다. 긴 설명을 카드용 짧은 문장으로 자른다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 690,
          "code": "  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;",
          "explanation": "`return text.length > maxLength ? `${text.slice(0, maxLength)}...`` 속성에 값을 넣는 줄이다. 현재 값은 `text;`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 691,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 693,
          "code": "function escapeHtml(value) {",
          "explanation": "`escapeHtml()` 함수를 선언하는 줄이다. HTML 문자열 주입 시 특수문자를 이스케이프한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 694,
          "code": "  return value",
          "explanation": "함수 실행 결과로 값을 돌려주는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 695,
          "code": "    .replaceAll(\"&\", \"&amp;\")",
          "explanation": "`escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 696,
          "code": "    .replaceAll(\"<\", \"&lt;\")",
          "explanation": "`escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 697,
          "code": "    .replaceAll(\">\", \"&gt;\")",
          "explanation": "`escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 698,
          "code": "    .replaceAll('\"', \"&quot;\")",
          "explanation": "`escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 699,
          "code": "    .replaceAll(\"'\", \"&#39;\");",
          "explanation": "`escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 700,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 702,
          "code": "// 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 703,
          "code": "function joinMeeting(id) {",
          "explanation": "`joinMeeting()` 함수를 선언하는 줄이다. 참여 가능한 모임에 사용자 참여를 반영한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 704,
          "code": "  const selected = meetings.find((item) => item.id === id);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 706,
          "code": "  if (!selected) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 707,
          "code": "    return;",
          "explanation": "`joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 708,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 710,
          "code": "  if (selected.joined >= selected.capacity) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 711,
          "code": "    alert(\"이미 모집이 끝난 모임입니다.\");",
          "explanation": "브라우저 기본 확인창이나 안내창을 띄우는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 712,
          "code": "    return;",
          "explanation": "`joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 713,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 715,
          "code": "  if (selected.mine) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 716,
          "code": "    alert(\"이미 참여한 모임입니다.\");",
          "explanation": "브라우저 기본 확인창이나 안내창을 띄우는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 717,
          "code": "    return;",
          "explanation": "`joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 718,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 720,
          "code": "  selected.joined += 1;",
          "explanation": "`joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 721,
          "code": "  selected.mine = true;",
          "explanation": "`joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 722,
          "code": "  saveMeetings();",
          "explanation": "`joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 723,
          "code": "  renderAll();",
          "explanation": "화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 724,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 726,
          "code": "// 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 727,
          "code": "function deleteMeeting(id) {",
          "explanation": "`deleteMeeting()` 함수를 선언하는 줄이다. 확인창 후 모임을 삭제한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 728,
          "code": "  const selected = meetings.find((item) => item.id === id && item.createdByMe);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 730,
          "code": "  if (!selected) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 731,
          "code": "    return;",
          "explanation": "`deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 732,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 734,
          "code": "  const isConfirmed = window.confirm(",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 735,
          "code": "    `\"${selected.title}\" 모임을 정말 삭제하시겠습니까?`",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 736,
          "code": "  );",
          "explanation": "`deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 738,
          "code": "  if (!isConfirmed) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 739,
          "code": "    return;",
          "explanation": "`deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 740,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 742,
          "code": "  meetings = meetings.filter((item) => item.id !== id);",
          "explanation": "조건에 맞는 데이터만 남기는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 744,
          "code": "  if (editingMeetingId === id) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 745,
          "code": "    resetFormState();",
          "explanation": "`deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 746,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 748,
          "code": "  if (dialogMeetingId === id) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 749,
          "code": "    closeDetail();",
          "explanation": "`deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 750,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 752,
          "code": "  saveMeetings();",
          "explanation": "`deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 753,
          "code": "  renderAll();",
          "explanation": "화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 754,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 756,
          "code": "// 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 757,
          "code": "function openDetail(id) {",
          "explanation": "`openDetail()` 함수를 선언하는 줄이다. 상세 팝업에 모임 데이터를 채워 넣고 연다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 758,
          "code": "  const selected = meetings.find((item) => item.id === id);",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 760,
          "code": "  if (!selected) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 761,
          "code": "    return;",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 762,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 764,
          "code": "  dialogTitle.textContent = selected.title;",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 765,
          "code": "  dialogMeta.innerHTML = [",
          "explanation": "HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 766,
          "code": "    `카테고리 ${escapeHtml(selected.category)}`,",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 767,
          "code": "    `지역 ${escapeHtml(selected.location)}`,",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 768,
          "code": "    `주최자 ${escapeHtml(selected.organizer)}`,",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 769,
          "code": "    `날짜 ${formatDate(selected.date)}`,",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 770,
          "code": "    `참가비 ${escapeHtml(selected.fee)}`,",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 771,
          "code": "    `참여 ${selected.joined}/${selected.capacity}`,",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 772,
          "code": "  ]",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 773,
          "code": "    .map((text) => `<span class=\"meta-chip\">${text}</span>`)",
          "explanation": "배열 각 항목을 다른 형태로 바꾸는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 774,
          "code": "    .join(\"\");",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 775,
          "code": "  dialogDescription.textContent = selected.description;",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 776,
          "code": "  dialogMeetingId = id;",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 778,
          "code": "  if (selected.createdByMe) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 779,
          "code": "    dialogOwnerActions.classList.remove(\"is-hidden\");",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 780,
          "code": "  } else {",
          "explanation": "앞 조건이 거짓일 때 실행할 다른 분기를 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 781,
          "code": "    dialogOwnerActions.classList.add(\"is-hidden\");",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 782,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 784,
          "code": "  if (detailDialog.open) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 785,
          "code": "    return;",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 786,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 788,
          "code": "  if (typeof detailDialog.showModal === \"function\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 789,
          "code": "    detailDialog.showModal();",
          "explanation": "`dialog` 팝업을 모달 형태로 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 790,
          "code": "    return;",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 791,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 793,
          "code": "  detailDialog.setAttribute(\"open\", \"open\");",
          "explanation": "`openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 794,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 796,
          "code": "function closeDetail() {",
          "explanation": "`closeDetail()` 함수를 선언하는 줄이다. 상세 팝업을 닫고 상태값을 비운다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 797,
          "code": "  if (detailDialog.open && typeof detailDialog.close === \"function\") {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 798,
          "code": "    detailDialog.close();",
          "explanation": "`closeDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 799,
          "code": "  } else if (detailDialog.hasAttribute(\"open\")) {",
          "explanation": "앞 조건이 거짓일 때 실행할 다른 분기를 여는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 800,
          "code": "    detailDialog.removeAttribute(\"open\");",
          "explanation": "`closeDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 801,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 803,
          "code": "  dialogMeetingId = null;",
          "explanation": "`closeDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 804,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 806,
          "code": "// 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 807,
          "code": "function renderAll() {",
          "explanation": "`renderAll()` 함수를 선언하는 줄이다. 화면의 주요 영역을 한 번에 다시 렌더링한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 808,
          "code": "  renderStatus();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 809,
          "code": "  renderFeaturedSection();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 810,
          "code": "  applyFiltersAndRender();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 811,
          "code": "  renderMyMeetings();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 812,
          "code": "  renderManagedMeetings();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 813,
          "code": "  syncQuickFilterUi();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 814,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 816,
          "code": "// 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 817,
          "code": "searchForm.addEventListener(\"submit\", (event) => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 818,
          "code": "  event.preventDefault();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 819,
          "code": "  applyFiltersAndRender();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 820,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 822,
          "code": "resetButton.addEventListener(\"click\", resetFilters);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 823,
          "code": "statusFilter.addEventListener(\"change\", applyFiltersAndRender);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 824,
          "code": "sortOrder.addEventListener(\"change\", applyFiltersAndRender);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 825,
          "code": "createForm.addEventListener(\"submit\", handleFormSubmit);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 826,
          "code": "cancelEditButton.addEventListener(\"click\", resetFormState);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 827,
          "code": "closeDialogButton.addEventListener(\"click\", closeDetail);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 828,
          "code": "dialogEditButton.addEventListener(\"click\", () => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 829,
          "code": "  if (dialogMeetingId !== null) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 830,
          "code": "    startEditMeeting(dialogMeetingId);",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 831,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 832,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 833,
          "code": "dialogDeleteButton.addEventListener(\"click\", () => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 834,
          "code": "  if (dialogMeetingId !== null) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 835,
          "code": "    deleteMeeting(dialogMeetingId);",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 836,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 837,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 838,
          "code": "heroDetailButton.addEventListener(\"click\", () => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 839,
          "code": "  const featured = getCurrentFeaturedMeeting();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 841,
          "code": "  if (featured) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 842,
          "code": "    openDetail(featured.id);",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 843,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 844,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 845,
          "code": "heroJoinButton.addEventListener(\"click\", () => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 846,
          "code": "  const featured = getCurrentFeaturedMeeting();",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 848,
          "code": "  if (featured) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 849,
          "code": "    joinMeeting(featured.id);",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 850,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 851,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 852,
          "code": "heroPrevButton.addEventListener(\"click\", () => moveFeaturedMeeting(-1));",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 853,
          "code": "heroNextButton.addEventListener(\"click\", () => moveFeaturedMeeting(1));",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 854,
          "code": "featuredTeaserList.addEventListener(\"click\", (event) => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 855,
          "code": "  const card = event.target.closest(\"[data-featured-id]\");",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 857,
          "code": "  if (!card) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 858,
          "code": "    return;",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 859,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 861,
          "code": "  selectFeaturedMeeting(Number(card.dataset.featuredId));",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 862,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 863,
          "code": "quickFilterButtons.forEach((button) => {",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 864,
          "code": "  button.addEventListener(\"click\", () =>",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 865,
          "code": "    applyQuickFilter(button.dataset.quickFilter)",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 866,
          "code": "  );",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 867,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 868,
          "code": "quickActionButtons.forEach((button) => {",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 869,
          "code": "  button.addEventListener(\"click\", () =>",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 870,
          "code": "    handleQuickAction(button.dataset.quickAction)",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 871,
          "code": "  );",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 872,
          "code": "});",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 874,
          "code": "saveMeetings();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 875,
          "code": "resetFormState();",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 876,
          "code": "applyQuickPreset(activeQuickFilter);",
          "explanation": "`renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 877,
          "code": "renderAll();",
          "explanation": "화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        }
      ],
      "blocks": [
        {
          "label": "함수 `getDefaultMeetings()`",
          "start": 122,
          "end": 125,
          "snippet": "function getDefaultMeetings() {\n  return defaultMeetings.map((item) => ({ ...item }));\n}\n",
          "description": "기본 샘플 데이터를 복사해서 새 배열로 돌려준다."
        },
        {
          "label": "함수 `normalizeMeeting()`",
          "start": 126,
          "end": 147,
          "snippet": "function normalizeMeeting(item) {\n  const organizer = normalizeOrganizerName(item.organizer);\n  const location = normalizeLocationName(item.location);\n\n  return {\n    id: item.id ?? Date.now(),\n    title: item.title ?? \"제목 없음\",\n    category: item.category ?? \"친목\",\n    location: location ?? \"캠퍼스\",\n    date: item.date ?? new Date().toISOString().slice(0, 10),\n    capacity: Number(item.capacity) || 10,\n    joined: Number(item.joined) || 0,\n    fee: item.fee || \"미정\",\n    organizer,\n    description: item.description || \"설명이 아직 없습니다.\",\n    mine: Boolean(item.mine),\n    createdByMe: Boolean(\n      item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))\n    ),\n  };\n}\n",
          "description": "저장된 모임 데이터를 현재 형식에 맞게 보정한다."
        },
        {
          "label": "함수 `normalizeOrganizerName()`",
          "start": 148,
          "end": 155,
          "snippet": "function normalizeOrganizerName(value) {\n  if (!value) {\n    return \"미정\";\n  }\n\n  return legacyOrganizerMap[value] || value;\n}\n",
          "description": "예전 주최자 이름을 현재 표기 기준으로 정리한다."
        },
        {
          "label": "함수 `normalizeLocationName()`",
          "start": 156,
          "end": 164,
          "snippet": "function normalizeLocationName(value) {\n  if (!value) {\n    return \"캠퍼스\";\n  }\n\n  return legacyLocationMap[value] || value;\n}\n\n// 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.",
          "description": "예전 지역 이름을 현재 지역 이름으로 바꾼다."
        },
        {
          "label": "함수 `loadMeetings()`",
          "start": 165,
          "end": 184,
          "snippet": "function loadMeetings() {\n  try {\n    const stored = localStorage.getItem(STORAGE_KEY);\n\n    if (!stored) {\n      return getDefaultMeetings();\n    }\n\n    const parsed = JSON.parse(stored);\n\n    if (!Array.isArray(parsed)) {\n      return getDefaultMeetings();\n    }\n\n    return parsed.map(normalizeMeeting);\n  } catch (error) {\n    return getDefaultMeetings();\n  }\n}\n",
          "description": "브라우저 저장소를 먼저 읽고, 없으면 기본 데이터를 반환한다."
        },
        {
          "label": "함수 `saveMeetings()`",
          "start": 185,
          "end": 193,
          "snippet": "function saveMeetings() {\n  try {\n    localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));\n  } catch (error) {\n    console.error(\"브라우저 저장에 실패했습니다.\", error);\n  }\n}\n\n// 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.",
          "description": "현재 모임 배열을 localStorage에 저장한다."
        },
        {
          "label": "함수 `renderStatus()`",
          "start": 194,
          "end": 222,
          "snippet": "function renderStatus() {\n  const totalMeetings = meetings.length;\n  const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);\n  const mine = meetings.filter((item) => item.mine).length;\n  const openSeats = meetings.reduce(\n    (sum, item) => sum + (item.capacity - item.joined),\n    0\n  );\n\n  const items = [\n    { label: \"전체 모임\", value: `${totalMeetings}개` },\n    { label: \"참여 인원\", value: `${totalMembers}명` },\n    { label: \"내 모임\", value: `${mine}개` },\n    { label: \"남은 자리\", value: `${openSeats}석` },\n  ];\n\n  statusCards.innerHTML = items\n    .map(\n      (item) => `\n        <article class=\"status-card\">\n          <p>${item.label}</p>\n          <strong>${item.value}</strong>\n        </article>\n      `\n    )\n    .join(\"\");\n}\n\n// 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.",
          "description": "상단 숫자 카드를 다시 계산해 출력한다."
        },
        {
          "label": "함수 `createMeetingCard()`",
          "start": 223,
          "end": 284,
          "snippet": "function createMeetingCard(item, mode = \"default\") {\n  const isClosed = item.joined >= item.capacity;\n  const actionLabel = item.mine ? \"참여 완료\" : isClosed ? \"모집 마감\" : \"참여하기\";\n  const archiveCode = `ARCHIVE ${String(item.id).padStart(2, \"0\")}`;\n  const primaryLabel =\n    mode === \"manage\" ? \"운영중\" : item.mine ? \"참여중\" : isClosed ? \"마감\" : \"추천\";\n  const actionButtons =\n    mode === \"manage\"\n      ? `\n          <button class=\"button ghost\" type=\"button\" onclick=\"openDetail(${item.id})\">\n            상세\n          </button>\n          <button class=\"button secondary\" type=\"button\" onclick=\"startEditMeeting(${item.id})\">\n            수정\n          </button>\n          <button class=\"button danger\" type=\"button\" onclick=\"deleteMeeting(${item.id})\">\n            삭제\n          </button>\n        `\n      : `\n          <button class=\"button ghost\" type=\"button\" onclick=\"openDetail(${item.id})\">\n            상세\n          </button>\n          <button\n            class=\"button secondary\"\n            type=\"button\"\n            onclick=\"joinMeeting(${item.id})\"\n            ${item.mine || isClosed ? \"disabled\" : \"\"}\n          >\n            ${actionLabel}\n          </button>\n        `;\n\n  return `\n    <article class=\"meeting-card\">\n      <div class=\"card-poster\">\n        <div class=\"card-pills\">\n          <span class=\"card-pill primary\">${primaryLabel}</span>\n          ${item.createdByMe ? '<span class=\"card-pill\">개설</span>' : \"\"}\n        </div>\n        <span class=\"card-code\">${archiveCode}</span>\n      </div>\n      <div class=\"card-copy\">\n        <p class=\"card-location\">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>\n        <h3>${escapeHtml(item.title)}</h3>\n        <p class=\"description-preview\">${escapeHtml(truncateText(item.description, 42))}</p>\n        <div class=\"meta-row\">\n          <span class=\"meta-chip\">주최 ${escapeHtml(item.organizer)}</span>\n          <span class=\"meta-chip\">참여 ${item.joined}/${item.capacity}</span>\n          <span class=\"meta-chip\">${escapeHtml(item.fee)}</span>\n        </div>\n        <div class=\"card-footer\">\n          <p class=\"card-schedule\">${formatDate(item.date)} · ${getSeatMessage(item)}</p>\n          <div class=\"card-actions\">\n            ${actionButtons}\n          </div>\n        </div>\n      </div>\n    </article>\n  `;\n}\n",
          "description": "모임 하나를 카드 HTML 문자열로 만든다."
        },
        {
          "label": "함수 `renderMeetings()`",
          "start": 285,
          "end": 296,
          "snippet": "function renderMeetings(list) {\n  searchResultText.textContent = buildResultMessage(list.length);\n\n  if (list.length === 0) {\n    meetingList.innerHTML =\n      '<div class=\"empty-state\">조건에 맞는 모임이 없습니다.</div>';\n    return;\n  }\n\n  meetingList.innerHTML = list.map(createMeetingCard).join(\"\");\n}\n",
          "description": "검색 결과 목록을 화면에 그린다."
        },
        {
          "label": "함수 `renderMyMeetings()`",
          "start": 297,
          "end": 308,
          "snippet": "function renderMyMeetings() {\n  const myList = meetings.filter((item) => item.mine);\n\n  if (myList.length === 0) {\n    myMeetingList.innerHTML =\n      '<div class=\"empty-state\">아직 참여한 모임이 없습니다.</div>';\n    return;\n  }\n\n  myMeetingList.innerHTML = myList.map(createMeetingCard).join(\"\");\n}\n",
          "description": "내가 참여 중인 모임만 따로 그린다."
        },
        {
          "label": "함수 `renderManagedMeetings()`",
          "start": 309,
          "end": 322,
          "snippet": "function renderManagedMeetings() {\n  const managedList = meetings.filter((item) => item.createdByMe);\n\n  if (managedList.length === 0) {\n    managedMeetingList.innerHTML =\n      '<div class=\"empty-state\">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';\n    return;\n  }\n\n  managedMeetingList.innerHTML = managedList\n    .map((item) => createMeetingCard(item, \"manage\"))\n    .join(\"\");\n}\n",
          "description": "내가 만든 모임만 관리용 버튼과 함께 그린다."
        },
        {
          "label": "함수 `getQuickFilterLabel()`",
          "start": 323,
          "end": 338,
          "snippet": "function getQuickFilterLabel(filterName) {\n  const labels = {\n    recommend: \"추천\",\n    today: \"당일\",\n    small: \"소규모\",\n    weekend: \"주말\",\n    campus: \"캠퍼스\",\n    sports: \"운동\",\n    study: \"공부\",\n    social: \"취향\",\n    mine: \"내 모임\",\n  };\n\n  return labels[filterName] || \"추천\";\n}\n",
          "description": "빠른 필터 이름을 화면 문구로 바꾼다."
        },
        {
          "label": "함수 `getNearestMeetingDate()`",
          "start": 339,
          "end": 348,
          "snippet": "function getNearestMeetingDate(list) {\n  const uniqueDates = [...new Set(list.map((item) => item.date))];\n\n  if (uniqueDates.length === 0) {\n    return null;\n  }\n\n  return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];\n}\n",
          "description": "가장 빠른 모임 날짜를 구한다."
        },
        {
          "label": "함수 `matchesWeekend()`",
          "start": 349,
          "end": 353,
          "snippet": "function matchesWeekend(item) {\n  const day = new Date(item.date).getDay();\n  return day === 0 || day === 6;\n}\n",
          "description": "해당 모임이 주말 날짜인지 검사한다."
        },
        {
          "label": "함수 `applyQuickFilterRule()`",
          "start": 354,
          "end": 376,
          "snippet": "function applyQuickFilterRule(list) {\n  if (activeQuickFilter === \"today\") {\n    const nearestDate = getNearestMeetingDate(list);\n    return nearestDate ? list.filter((item) => item.date === nearestDate) : list;\n  }\n\n  if (activeQuickFilter === \"small\") {\n    return list.filter((item) => item.capacity <= 8);\n  }\n\n  if (activeQuickFilter === \"weekend\") {\n    return list.filter(matchesWeekend);\n  }\n\n  if (activeQuickFilter === \"social\") {\n    return list.filter(\n      (item) => item.category === \"친목\" || item.category === \"게임\"\n    );\n  }\n\n  return list;\n}\n",
          "description": "빠른 필터 규칙을 실제 목록 필터로 적용한다."
        },
        {
          "label": "함수 `syncQuickFilterUi()`",
          "start": 377,
          "end": 385,
          "snippet": "function syncQuickFilterUi() {\n  quickFilterButtons.forEach((button) => {\n    const isActive = button.dataset.quickFilter === activeQuickFilter;\n    button.classList.toggle(\"is-active\", isActive);\n    button.classList.toggle(\"is-current\", isActive);\n    button.setAttribute(\"aria-pressed\", String(isActive));\n  });\n}\n",
          "description": "선택된 빠른 필터 버튼의 활성 상태를 맞춘다."
        },
        {
          "label": "함수 `buildResultMessage()`",
          "start": 386,
          "end": 394,
          "snippet": "function buildResultMessage(count) {\n  const prefix =\n    activeQuickFilter === \"recommend\"\n      ? \"현재 조건에 맞는\"\n      : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;\n\n  return `${prefix} 모임은 ${count}개입니다.`;\n}\n",
          "description": "검색 결과 상단의 안내 문구를 만든다."
        },
        {
          "label": "함수 `getFeaturedMeetings()`",
          "start": 395,
          "end": 401,
          "snippet": "function getFeaturedMeetings() {\n  const openMeetings = meetings.filter((item) => item.joined < item.capacity);\n  const baseList = openMeetings.length > 0 ? openMeetings : meetings;\n\n  return sortMeetings(baseList, \"popular\").slice(0, 6);\n}\n",
          "description": "추천 배너에 쓸 상위 모임 목록을 계산한다."
        },
        {
          "label": "함수 `getCurrentFeaturedMeeting()`",
          "start": 402,
          "end": 415,
          "snippet": "function getCurrentFeaturedMeeting() {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length === 0) {\n    return null;\n  }\n\n  if (featuredMeetingIndex >= featured.length) {\n    featuredMeetingIndex = 0;\n  }\n\n  return featured[featuredMeetingIndex];\n}\n",
          "description": "현재 추천 배너의 주인공 모임을 반환한다."
        },
        {
          "label": "함수 `renderFeaturedSection()`",
          "start": 416,
          "end": 477,
          "snippet": "function renderFeaturedSection() {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length === 0) {\n    heroKicker.textContent = \"추천 모임 준비 중\";\n    heroTitle.textContent = \"새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.\";\n    heroDescription.textContent =\n      \"아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.\";\n    heroPageIndicator.textContent = \"추천 0 / 0\";\n    heroDetailButton.disabled = true;\n    heroJoinButton.disabled = true;\n    heroJoinButton.textContent = \"바로 참여\";\n    heroPrevButton.disabled = true;\n    heroNextButton.disabled = true;\n    featuredTeaserList.innerHTML = \"\";\n    return;\n  }\n\n  const current = getCurrentFeaturedMeeting();\n  const teaserItems = Array.from(\n    { length: Math.min(featured.length, 3) },\n    (_, index) => featured[(featuredMeetingIndex + index) % featured.length]\n  );\n  const isClosed = current.joined >= current.capacity;\n\n  heroKicker.textContent = `${current.location} · ${current.category} 추천`;\n  heroTitle.textContent = current.title;\n  heroDescription.textContent = `${current.description} ${formatDate(\n    current.date\n  )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;\n  heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${\n    featured.length\n  }`;\n  heroDetailButton.disabled = false;\n  heroJoinButton.disabled = current.mine || isClosed;\n  heroJoinButton.textContent = current.mine\n    ? \"참여 완료\"\n    : isClosed\n    ? \"모집 마감\"\n    : \"바로 참여\";\n  heroPrevButton.disabled = featured.length <= 1;\n  heroNextButton.disabled = featured.length <= 1;\n\n  featuredTeaserList.innerHTML = teaserItems\n    .map(\n      (item, index) => `\n        <button\n          class=\"hero-teaser-card ${index === 0 ? \"wide\" : \"\"} ${\n            item.id === current.id ? \"is-active\" : \"\"\n          }\"\n          type=\"button\"\n          data-featured-id=\"${item.id}\"\n        >\n          <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>\n          <strong>${escapeHtml(item.title)}</strong>\n        </button>\n      `\n    )\n    .join(\"\");\n}\n\n// 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.",
          "description": "추천 배너의 제목, 설명, 버튼, 미리보기 카드를 갱신한다."
        },
        {
          "label": "함수 `getFilteredMeetings()`",
          "start": 478,
          "end": 500,
          "snippet": "function getFilteredMeetings() {\n  const keyword = keywordInput.value.trim().toLowerCase();\n  const category = categorySelect.value;\n  const location = locationSelect.value;\n  const status = statusFilter.value;\n  const sort = sortOrder.value;\n\n  const filtered = meetings.filter((item) => {\n    const matchesKeyword = item.title.toLowerCase().includes(keyword);\n    const matchesCategory = category === \"all\" || item.category === category;\n    const matchesLocation = location === \"all\" || item.location === location;\n    const matchesStatus =\n      status === \"all\" ||\n      (status === \"open\" && item.joined < item.capacity) ||\n      (status === \"mine\" && item.mine) ||\n      (status === \"closed\" && item.joined >= item.capacity);\n\n    return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;\n  });\n\n  return sortMeetings(applyQuickFilterRule(filtered), sort);\n}\n",
          "description": "검색 폼 값과 빠른 필터를 함께 적용해 결과 목록을 만든다."
        },
        {
          "label": "함수 `applyFiltersAndRender()`",
          "start": 501,
          "end": 504,
          "snippet": "function applyFiltersAndRender() {\n  renderMeetings(getFilteredMeetings());\n}\n",
          "description": "현재 조건으로 다시 검색하고 목록을 그린다."
        },
        {
          "label": "함수 `resetFilters()`",
          "start": 505,
          "end": 512,
          "snippet": "function resetFilters() {\n  searchForm.reset();\n  activeQuickFilter = \"recommend\";\n  applyQuickPreset(activeQuickFilter);\n  applyFiltersAndRender();\n  syncQuickFilterUi();\n}\n",
          "description": "검색 폼과 빠른 필터 상태를 처음 값으로 되돌린다."
        },
        {
          "label": "함수 `applyQuickPreset()`",
          "start": 513,
          "end": 536,
          "snippet": "function applyQuickPreset(filterName) {\n  keywordInput.value = \"\";\n  categorySelect.value = \"all\";\n  locationSelect.value = \"all\";\n  statusFilter.value = \"all\";\n  sortOrder.value = filterName === \"recommend\" ? \"popular\" : \"soon\";\n\n  if (filterName === \"campus\") {\n    locationSelect.value = \"캠퍼스\";\n  }\n\n  if (filterName === \"sports\") {\n    categorySelect.value = \"운동\";\n  }\n\n  if (filterName === \"study\") {\n    categorySelect.value = \"공부\";\n  }\n\n  if (filterName === \"mine\") {\n    statusFilter.value = \"mine\";\n  }\n}\n",
          "description": "빠른 필터에 맞게 검색 폼 값을 미리 채운다."
        },
        {
          "label": "함수 `applyQuickFilter()`",
          "start": 537,
          "end": 544,
          "snippet": "function applyQuickFilter(filterName) {\n  activeQuickFilter = filterName;\n  applyQuickPreset(filterName);\n  applyFiltersAndRender();\n  syncQuickFilterUi();\n  document.querySelector(\"#search\").scrollIntoView({ behavior: \"smooth\" });\n}\n",
          "description": "빠른 필터를 선택하고 검색 영역으로 스크롤한다."
        },
        {
          "label": "함수 `handleQuickAction()`",
          "start": 545,
          "end": 550,
          "snippet": "function handleQuickAction(actionName) {\n  if (actionName === \"create\") {\n    document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n",
          "description": "빠른 타일의 특수 동작을 처리한다."
        },
        {
          "label": "함수 `moveFeaturedMeeting()`",
          "start": 551,
          "end": 562,
          "snippet": "function moveFeaturedMeeting(step) {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length <= 1) {\n    return;\n  }\n\n  featuredMeetingIndex =\n    (featuredMeetingIndex + step + featured.length) % featured.length;\n  renderFeaturedSection();\n}\n",
          "description": "추천 배너를 이전/다음 항목으로 이동한다."
        },
        {
          "label": "함수 `selectFeaturedMeeting()`",
          "start": 563,
          "end": 574,
          "snippet": "function selectFeaturedMeeting(id) {\n  const featured = getFeaturedMeetings();\n  const nextIndex = featured.findIndex((item) => item.id === id);\n\n  if (nextIndex === -1) {\n    return;\n  }\n\n  featuredMeetingIndex = nextIndex;\n  renderFeaturedSection();\n}\n",
          "description": "미리보기 카드 클릭으로 추천 배너 항목을 바꾼다."
        },
        {
          "label": "함수 `getFormValues()`",
          "start": 575,
          "end": 588,
          "snippet": "function getFormValues() {\n  return {\n    title: document.querySelector(\"#newTitle\").value.trim(),\n    category: document.querySelector(\"#newCategory\").value,\n    location: document.querySelector(\"#newLocation\").value,\n    date: document.querySelector(\"#newDate\").value,\n    organizer: document.querySelector(\"#newOrganizer\").value.trim(),\n    capacity: Number(document.querySelector(\"#newCapacity\").value),\n    fee: document.querySelector(\"#newFee\").value.trim(),\n    description: document.querySelector(\"#newDescription\").value.trim(),\n  };\n}\n\n// 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.",
          "description": "모임 생성/수정 폼의 현재 입력값을 읽는다."
        },
        {
          "label": "함수 `resetFormState()`",
          "start": 589,
          "end": 599,
          "snippet": "function resetFormState() {\n  editingMeetingId = null;\n  createForm.reset();\n  formTitle.textContent = \"폼으로 새 모임 추가하기\";\n  formModeText.textContent =\n    \"지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.\";\n  submitButton.textContent = \"모임 추가\";\n  cancelEditButton.classList.add(\"is-hidden\");\n}\n\n// 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 \"수정 모드\"처럼 보이게 만든다.",
          "description": "폼을 추가 모드 초기 상태로 되돌린다."
        },
        {
          "label": "함수 `startEditMeeting()`",
          "start": 600,
          "end": 626,
          "snippet": "function startEditMeeting(id) {\n  const selected = meetings.find((item) => item.id === id && item.createdByMe);\n\n  if (!selected) {\n    return;\n  }\n\n  editingMeetingId = id;\n  document.querySelector(\"#newTitle\").value = selected.title;\n  document.querySelector(\"#newCategory\").value = selected.category;\n  document.querySelector(\"#newLocation\").value = selected.location;\n  document.querySelector(\"#newDate\").value = selected.date;\n  document.querySelector(\"#newOrganizer\").value = selected.organizer;\n  document.querySelector(\"#newCapacity\").value = selected.capacity;\n  document.querySelector(\"#newFee\").value = selected.fee;\n  document.querySelector(\"#newDescription\").value = selected.description;\n\n  formTitle.textContent = \"기존 모임 수정하기\";\n  formModeText.textContent =\n    \"지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.\";\n  submitButton.textContent = \"수정 내용 저장\";\n  cancelEditButton.classList.remove(\"is-hidden\");\n  closeDetail();\n  document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });\n}\n\n// editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.",
          "description": "선택한 모임 값을 폼에 넣고 수정 모드로 전환한다."
        },
        {
          "label": "함수 `handleFormSubmit()`",
          "start": 627,
          "end": 658,
          "snippet": "function handleFormSubmit(event) {\n  event.preventDefault();\n\n  const formValues = getFormValues();\n\n  if (editingMeetingId !== null) {\n    meetings = meetings.map((item) =>\n      item.id === editingMeetingId\n        ? normalizeMeeting({\n            ...item,\n            ...formValues,\n            createdByMe: true,\n          })\n        : item\n    );\n  } else {\n    const newMeeting = normalizeMeeting({\n      id: Date.now(),\n      ...formValues,\n      joined: 1,\n      mine: true,\n      createdByMe: true,\n    });\n\n    meetings.unshift(newMeeting);\n  }\n\n  saveMeetings();\n  resetFormState();\n  renderAll();\n}\n",
          "description": "폼 제출 시 추가 또는 수정을 수행한다."
        },
        {
          "label": "함수 `getSeatMessage()`",
          "start": 659,
          "end": 663,
          "snippet": "function getSeatMessage(item) {\n  const remaining = item.capacity - item.joined;\n  return remaining > 0 ? `남은 자리 ${remaining}석` : \"모집 마감\";\n}\n",
          "description": "남은 자리 문구를 계산한다."
        },
        {
          "label": "함수 `formatDate()`",
          "start": 664,
          "end": 668,
          "snippet": "function formatDate(value) {\n  const date = new Date(value);\n  return date.toLocaleDateString(\"ko-KR\");\n}\n",
          "description": "날짜 문자열을 한국어 날짜 표시로 바꾼다."
        },
        {
          "label": "함수 `sortMeetings()`",
          "start": 669,
          "end": 688,
          "snippet": "function sortMeetings(list, sort) {\n  const sorted = [...list];\n\n  if (sort === \"late\") {\n    return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));\n  }\n\n  if (sort === \"seats\") {\n    return sorted.sort(\n      (a, b) => b.capacity - b.joined - (a.capacity - a.joined)\n    );\n  }\n\n  if (sort === \"popular\") {\n    return sorted.sort((a, b) => b.joined - a.joined);\n  }\n\n  return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));\n}\n",
          "description": "필터링된 목록을 선택된 기준으로 정렬한다."
        },
        {
          "label": "함수 `truncateText()`",
          "start": 689,
          "end": 692,
          "snippet": "function truncateText(text, maxLength) {\n  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;\n}\n",
          "description": "긴 설명을 카드용 짧은 문장으로 자른다."
        },
        {
          "label": "함수 `escapeHtml()`",
          "start": 693,
          "end": 702,
          "snippet": "function escapeHtml(value) {\n  return value\n    .replaceAll(\"&\", \"&amp;\")\n    .replaceAll(\"<\", \"&lt;\")\n    .replaceAll(\">\", \"&gt;\")\n    .replaceAll('\"', \"&quot;\")\n    .replaceAll(\"'\", \"&#39;\");\n}\n\n// 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.",
          "description": "HTML 문자열 주입 시 특수문자를 이스케이프한다."
        },
        {
          "label": "함수 `joinMeeting()`",
          "start": 703,
          "end": 726,
          "snippet": "function joinMeeting(id) {\n  const selected = meetings.find((item) => item.id === id);\n\n  if (!selected) {\n    return;\n  }\n\n  if (selected.joined >= selected.capacity) {\n    alert(\"이미 모집이 끝난 모임입니다.\");\n    return;\n  }\n\n  if (selected.mine) {\n    alert(\"이미 참여한 모임입니다.\");\n    return;\n  }\n\n  selected.joined += 1;\n  selected.mine = true;\n  saveMeetings();\n  renderAll();\n}\n\n// 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.",
          "description": "참여 가능한 모임에 사용자 참여를 반영한다."
        },
        {
          "label": "함수 `deleteMeeting()`",
          "start": 727,
          "end": 756,
          "snippet": "function deleteMeeting(id) {\n  const selected = meetings.find((item) => item.id === id && item.createdByMe);\n\n  if (!selected) {\n    return;\n  }\n\n  const isConfirmed = window.confirm(\n    `\"${selected.title}\" 모임을 정말 삭제하시겠습니까?`\n  );\n\n  if (!isConfirmed) {\n    return;\n  }\n\n  meetings = meetings.filter((item) => item.id !== id);\n\n  if (editingMeetingId === id) {\n    resetFormState();\n  }\n\n  if (dialogMeetingId === id) {\n    closeDetail();\n  }\n\n  saveMeetings();\n  renderAll();\n}\n\n// 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.",
          "description": "확인창 후 모임을 삭제한다."
        },
        {
          "label": "함수 `openDetail()`",
          "start": 757,
          "end": 795,
          "snippet": "function openDetail(id) {\n  const selected = meetings.find((item) => item.id === id);\n\n  if (!selected) {\n    return;\n  }\n\n  dialogTitle.textContent = selected.title;\n  dialogMeta.innerHTML = [\n    `카테고리 ${escapeHtml(selected.category)}`,\n    `지역 ${escapeHtml(selected.location)}`,\n    `주최자 ${escapeHtml(selected.organizer)}`,\n    `날짜 ${formatDate(selected.date)}`,\n    `참가비 ${escapeHtml(selected.fee)}`,\n    `참여 ${selected.joined}/${selected.capacity}`,\n  ]\n    .map((text) => `<span class=\"meta-chip\">${text}</span>`)\n    .join(\"\");\n  dialogDescription.textContent = selected.description;\n  dialogMeetingId = id;\n\n  if (selected.createdByMe) {\n    dialogOwnerActions.classList.remove(\"is-hidden\");\n  } else {\n    dialogOwnerActions.classList.add(\"is-hidden\");\n  }\n\n  if (detailDialog.open) {\n    return;\n  }\n\n  if (typeof detailDialog.showModal === \"function\") {\n    detailDialog.showModal();\n    return;\n  }\n\n  detailDialog.setAttribute(\"open\", \"open\");\n}\n",
          "description": "상세 팝업에 모임 데이터를 채워 넣고 연다."
        },
        {
          "label": "함수 `closeDetail()`",
          "start": 796,
          "end": 806,
          "snippet": "function closeDetail() {\n  if (detailDialog.open && typeof detailDialog.close === \"function\") {\n    detailDialog.close();\n  } else if (detailDialog.hasAttribute(\"open\")) {\n    detailDialog.removeAttribute(\"open\");\n  }\n\n  dialogMeetingId = null;\n}\n\n// 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.",
          "description": "상세 팝업을 닫고 상태값을 비운다."
        },
        {
          "label": "함수 `renderAll()`",
          "start": 807,
          "end": 877,
          "snippet": "function renderAll() {\n  renderStatus();\n  renderFeaturedSection();\n  applyFiltersAndRender();\n  renderMyMeetings();\n  renderManagedMeetings();\n  syncQuickFilterUi();\n}\n\n// 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.\nsearchForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  applyFiltersAndRender();\n});\n\nresetButton.addEventListener(\"click\", resetFilters);\nstatusFilter.addEventListener(\"change\", applyFiltersAndRender);\nsortOrder.addEventListener(\"change\", applyFiltersAndRender);\ncreateForm.addEventListener(\"submit\", handleFormSubmit);\ncancelEditButton.addEventListener(\"click\", resetFormState);\ncloseDialogButton.addEventListener(\"click\", closeDetail);\ndialogEditButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    startEditMeeting(dialogMeetingId);\n  }\n});\ndialogDeleteButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    deleteMeeting(dialogMeetingId);\n  }\n});\nheroDetailButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    openDetail(featured.id);\n  }\n});\nheroJoinButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    joinMeeting(featured.id);\n  }\n});\nheroPrevButton.addEventListener(\"click\", () => moveFeaturedMeeting(-1));\nheroNextButton.addEventListener(\"click\", () => moveFeaturedMeeting(1));\nfeaturedTeaserList.addEventListener(\"click\", (event) => {\n  const card = event.target.closest(\"[data-featured-id]\");\n\n  if (!card) {\n    return;\n  }\n\n  selectFeaturedMeeting(Number(card.dataset.featuredId));\n});\nquickFilterButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    applyQuickFilter(button.dataset.quickFilter)\n  );\n});\nquickActionButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    handleQuickAction(button.dataset.quickAction)\n  );\n});\n\nsaveMeetings();\nresetFormState();\napplyQuickPreset(activeQuickFilter);\nrenderAll();",
          "description": "화면의 주요 영역을 한 번에 다시 렌더링한다."
        },
        {
          "label": "이벤트 리스너 등록과 초기 실행",
          "start": 817,
          "end": 877,
          "snippet": "searchForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  applyFiltersAndRender();\n});\n\nresetButton.addEventListener(\"click\", resetFilters);\nstatusFilter.addEventListener(\"change\", applyFiltersAndRender);\nsortOrder.addEventListener(\"change\", applyFiltersAndRender);\ncreateForm.addEventListener(\"submit\", handleFormSubmit);\ncancelEditButton.addEventListener(\"click\", resetFormState);\ncloseDialogButton.addEventListener(\"click\", closeDetail);\ndialogEditButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    startEditMeeting(dialogMeetingId);\n  }\n});\ndialogDeleteButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    deleteMeeting(dialogMeetingId);\n  }\n});\nheroDetailButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    openDetail(featured.id);\n  }\n});\nheroJoinButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    joinMeeting(featured.id);\n  }\n});\nheroPrevButton.addEventListener(\"click\", () => moveFeaturedMeeting(-1));\nheroNextButton.addEventListener(\"click\", () => moveFeaturedMeeting(1));\nfeaturedTeaserList.addEventListener(\"click\", (event) => {\n  const card = event.target.closest(\"[data-featured-id]\");\n\n  if (!card) {\n    return;\n  }\n\n  selectFeaturedMeeting(Number(card.dataset.featuredId));\n});\nquickFilterButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    applyQuickFilter(button.dataset.quickFilter)\n  );\n});\nquickActionButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    handleQuickAction(button.dataset.quickAction)\n  );\n});\n\nsaveMeetings();\nresetFormState();\napplyQuickPreset(activeQuickFilter);\nrenderAll();",
          "description": "폼 제출, 버튼 클릭, 추천 배너 이동 같은 사용자 행동을 함수와 연결하고 첫 렌더링을 시작한다."
        }
      ],
      "features": [
        {
          "label": "상수, 샘플 데이터, 상태값, DOM 참조",
          "start": 1,
          "end": 122,
          "snippet": "const STORAGE_KEY = \"moim-meetings-v2\";\nconst CURRENT_USER = \"운영자 A\";\nconst legacyOrganizerMap = {\n  장운수: \"운영자 A\",\n  송유찬: \"운영자 B\",\n  조소빈: \"운영자 C\",\n  최요섭: \"운영자 D\",\n  곽진우: \"운영자 E\",\n};\nconst legacyLocationMap = {\n  천안: \"시내권\",\n  아산: \"생활권\",\n};\n\n// 아직 DB가 없어서, 첫 화면을 바로 보여 주기 위한 샘플 데이터를 코드에 넣어 둔다.\nconst defaultMeetings = [\n  {\n    id: 1,\n    title: \"주말 풋살 같이 하기\",\n    category: \"운동\",\n    location: \"시내권\",\n    date: \"2026-03-20\",\n    capacity: 10,\n    joined: 7,\n    fee: \"5,000원\",\n    organizer: \"운영자 A\",\n    description:\n      \"주말 저녁에 가볍게 풋살하는 모임입니다. 초보도 참여 가능하고 운동장 대여비를 함께 나누는 방식입니다.\",\n    mine: true,\n    createdByMe: true,\n  },\n  {\n    id: 2,\n    title: \"자료구조 스터디\",\n    category: \"공부\",\n    location: \"캠퍼스\",\n    date: \"2026-03-18\",\n    capacity: 6,\n    joined: 4,\n    fee: \"무료\",\n    organizer: \"운영자 B\",\n    description:\n      \"자료구조 수업 내용을 같이 정리하고 문제를 풀어보는 스터디입니다. 발표 순서도 돌아가면서 진행합니다.\",\n    mine: true,\n    createdByMe: false,\n  },\n  {\n    id: 3,\n    title: \"보드게임 번개 모임\",\n    category: \"게임\",\n    location: \"생활권\",\n    date: \"2026-03-22\",\n    capacity: 8,\n    joined: 5,\n    fee: \"3,000원\",\n    organizer: \"운영자 C\",\n    description:\n      \"카페에서 간단한 보드게임을 즐기는 번개 모임입니다. 처음 오는 사람도 바로 적응할 수 있게 쉬운 게임부터 시작합니다.\",\n    mine: false,\n    createdByMe: false,\n  },\n  {\n    id: 4,\n    title: \"카페 탐방 친목 모임\",\n    category: \"친목\",\n    location: \"시내권\",\n    date: \"2026-03-25\",\n    capacity: 12,\n    joined: 9,\n    fee: \"각자 결제\",\n    organizer: \"운영자 D\",\n    description:\n      \"시내권 카페를 함께 방문하며 이야기 나누는 친목 모임입니다. 분위기 좋은 공간을 같이 찾는 것이 목표입니다.\",\n    mine: false,\n    createdByMe: false,\n  },\n];\n\nlet meetings = loadMeetings();\nlet editingMeetingId = null;\nlet dialogMeetingId = null;\nlet activeQuickFilter = \"recommend\";\nlet featuredMeetingIndex = 0;\n\nconst statusCards = document.querySelector(\"#statusCards\");\nconst meetingList = document.querySelector(\"#meetingList\");\nconst myMeetingList = document.querySelector(\"#myMeetingList\");\nconst managedMeetingList = document.querySelector(\"#managedMeetingList\");\nconst searchForm = document.querySelector(\"#searchForm\");\nconst createForm = document.querySelector(\"#createForm\");\nconst resetButton = document.querySelector(\"#resetButton\");\nconst searchResultText = document.querySelector(\"#searchResultText\");\nconst statusFilter = document.querySelector(\"#statusFilter\");\nconst sortOrder = document.querySelector(\"#sortOrder\");\nconst formTitle = document.querySelector(\"#formTitle\");\nconst formModeText = document.querySelector(\"#formModeText\");\nconst submitButton = document.querySelector(\"#submitButton\");\nconst cancelEditButton = document.querySelector(\"#cancelEditButton\");\nconst detailDialog = document.querySelector(\"#detailDialog\");\nconst closeDialogButton = document.querySelector(\"#closeDialogButton\");\nconst dialogTitle = document.querySelector(\"#dialogTitle\");\nconst dialogMeta = document.querySelector(\"#dialogMeta\");\nconst dialogDescription = document.querySelector(\"#dialogDescription\");\nconst dialogOwnerActions = document.querySelector(\"#dialogOwnerActions\");\nconst dialogEditButton = document.querySelector(\"#dialogEditButton\");\nconst dialogDeleteButton = document.querySelector(\"#dialogDeleteButton\");\nconst keywordInput = document.querySelector(\"#keyword\");\nconst categorySelect = document.querySelector(\"#category\");\nconst locationSelect = document.querySelector(\"#location\");\nconst heroKicker = document.querySelector(\"#heroKicker\");\nconst heroTitle = document.querySelector(\"#heroTitle\");\nconst heroDescription = document.querySelector(\"#heroDescription\");\nconst heroDetailButton = document.querySelector(\"#heroDetailButton\");\nconst heroJoinButton = document.querySelector(\"#heroJoinButton\");\nconst heroPrevButton = document.querySelector(\"#heroPrevButton\");\nconst heroNextButton = document.querySelector(\"#heroNextButton\");\nconst heroPageIndicator = document.querySelector(\"#heroPageIndicator\");\nconst featuredTeaserList = document.querySelector(\"#featuredTeaserList\");\nconst quickFilterButtons = document.querySelectorAll(\"[data-quick-filter]\");\nconst quickActionButtons = document.querySelectorAll(\"[data-quick-action]\");\n\nfunction getDefaultMeetings() {",
          "description": "프로젝트가 사용할 기본 데이터와 화면 요소 참조를 준비하는 구간이다."
        },
        {
          "label": "데이터 정규화와 브라우저 저장",
          "start": 122,
          "end": 194,
          "snippet": "function getDefaultMeetings() {\n  return defaultMeetings.map((item) => ({ ...item }));\n}\n\nfunction normalizeMeeting(item) {\n  const organizer = normalizeOrganizerName(item.organizer);\n  const location = normalizeLocationName(item.location);\n\n  return {\n    id: item.id ?? Date.now(),\n    title: item.title ?? \"제목 없음\",\n    category: item.category ?? \"친목\",\n    location: location ?? \"캠퍼스\",\n    date: item.date ?? new Date().toISOString().slice(0, 10),\n    capacity: Number(item.capacity) || 10,\n    joined: Number(item.joined) || 0,\n    fee: item.fee || \"미정\",\n    organizer,\n    description: item.description || \"설명이 아직 없습니다.\",\n    mine: Boolean(item.mine),\n    createdByMe: Boolean(\n      item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))\n    ),\n  };\n}\n\nfunction normalizeOrganizerName(value) {\n  if (!value) {\n    return \"미정\";\n  }\n\n  return legacyOrganizerMap[value] || value;\n}\n\nfunction normalizeLocationName(value) {\n  if (!value) {\n    return \"캠퍼스\";\n  }\n\n  return legacyLocationMap[value] || value;\n}\n\n// 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.\nfunction loadMeetings() {\n  try {\n    const stored = localStorage.getItem(STORAGE_KEY);\n\n    if (!stored) {\n      return getDefaultMeetings();\n    }\n\n    const parsed = JSON.parse(stored);\n\n    if (!Array.isArray(parsed)) {\n      return getDefaultMeetings();\n    }\n\n    return parsed.map(normalizeMeeting);\n  } catch (error) {\n    return getDefaultMeetings();\n  }\n}\n\nfunction saveMeetings() {\n  try {\n    localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));\n  } catch (error) {\n    console.error(\"브라우저 저장에 실패했습니다.\", error);\n  }\n}\n\n// 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.\nfunction renderStatus() {",
          "description": "초기 데이터 복사, 예전 이름 보정, localStorage 불러오기/저장을 처리한다."
        },
        {
          "label": "상태 카드와 카드 렌더링",
          "start": 194,
          "end": 877,
          "snippet": "function renderStatus() {\n  const totalMeetings = meetings.length;\n  const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);\n  const mine = meetings.filter((item) => item.mine).length;\n  const openSeats = meetings.reduce(\n    (sum, item) => sum + (item.capacity - item.joined),\n    0\n  );\n\n  const items = [\n    { label: \"전체 모임\", value: `${totalMeetings}개` },\n    { label: \"참여 인원\", value: `${totalMembers}명` },\n    { label: \"내 모임\", value: `${mine}개` },\n    { label: \"남은 자리\", value: `${openSeats}석` },\n  ];\n\n  statusCards.innerHTML = items\n    .map(\n      (item) => `\n        <article class=\"status-card\">\n          <p>${item.label}</p>\n          <strong>${item.value}</strong>\n        </article>\n      `\n    )\n    .join(\"\");\n}\n\n// 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.\nfunction createMeetingCard(item, mode = \"default\") {\n  const isClosed = item.joined >= item.capacity;\n  const actionLabel = item.mine ? \"참여 완료\" : isClosed ? \"모집 마감\" : \"참여하기\";\n  const archiveCode = `ARCHIVE ${String(item.id).padStart(2, \"0\")}`;\n  const primaryLabel =\n    mode === \"manage\" ? \"운영중\" : item.mine ? \"참여중\" : isClosed ? \"마감\" : \"추천\";\n  const actionButtons =\n    mode === \"manage\"\n      ? `\n          <button class=\"button ghost\" type=\"button\" onclick=\"openDetail(${item.id})\">\n            상세\n          </button>\n          <button class=\"button secondary\" type=\"button\" onclick=\"startEditMeeting(${item.id})\">\n            수정\n          </button>\n          <button class=\"button danger\" type=\"button\" onclick=\"deleteMeeting(${item.id})\">\n            삭제\n          </button>\n        `\n      : `\n          <button class=\"button ghost\" type=\"button\" onclick=\"openDetail(${item.id})\">\n            상세\n          </button>\n          <button\n            class=\"button secondary\"\n            type=\"button\"\n            onclick=\"joinMeeting(${item.id})\"\n            ${item.mine || isClosed ? \"disabled\" : \"\"}\n          >\n            ${actionLabel}\n          </button>\n        `;\n\n  return `\n    <article class=\"meeting-card\">\n      <div class=\"card-poster\">\n        <div class=\"card-pills\">\n          <span class=\"card-pill primary\">${primaryLabel}</span>\n          ${item.createdByMe ? '<span class=\"card-pill\">개설</span>' : \"\"}\n        </div>\n        <span class=\"card-code\">${archiveCode}</span>\n      </div>\n      <div class=\"card-copy\">\n        <p class=\"card-location\">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>\n        <h3>${escapeHtml(item.title)}</h3>\n        <p class=\"description-preview\">${escapeHtml(truncateText(item.description, 42))}</p>\n        <div class=\"meta-row\">\n          <span class=\"meta-chip\">주최 ${escapeHtml(item.organizer)}</span>\n          <span class=\"meta-chip\">참여 ${item.joined}/${item.capacity}</span>\n          <span class=\"meta-chip\">${escapeHtml(item.fee)}</span>\n        </div>\n        <div class=\"card-footer\">\n          <p class=\"card-schedule\">${formatDate(item.date)} · ${getSeatMessage(item)}</p>\n          <div class=\"card-actions\">\n            ${actionButtons}\n          </div>\n        </div>\n      </div>\n    </article>\n  `;\n}\n\nfunction renderMeetings(list) {\n  searchResultText.textContent = buildResultMessage(list.length);\n\n  if (list.length === 0) {\n    meetingList.innerHTML =\n      '<div class=\"empty-state\">조건에 맞는 모임이 없습니다.</div>';\n    return;\n  }\n\n  meetingList.innerHTML = list.map(createMeetingCard).join(\"\");\n}\n\nfunction renderMyMeetings() {\n  const myList = meetings.filter((item) => item.mine);\n\n  if (myList.length === 0) {\n    myMeetingList.innerHTML =\n      '<div class=\"empty-state\">아직 참여한 모임이 없습니다.</div>';\n    return;\n  }\n\n  myMeetingList.innerHTML = myList.map(createMeetingCard).join(\"\");\n}\n\nfunction renderManagedMeetings() {\n  const managedList = meetings.filter((item) => item.createdByMe);\n\n  if (managedList.length === 0) {\n    managedMeetingList.innerHTML =\n      '<div class=\"empty-state\">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';\n    return;\n  }\n\n  managedMeetingList.innerHTML = managedList\n    .map((item) => createMeetingCard(item, \"manage\"))\n    .join(\"\");\n}\n\nfunction getQuickFilterLabel(filterName) {\n  const labels = {\n    recommend: \"추천\",\n    today: \"당일\",\n    small: \"소규모\",\n    weekend: \"주말\",\n    campus: \"캠퍼스\",\n    sports: \"운동\",\n    study: \"공부\",\n    social: \"취향\",\n    mine: \"내 모임\",\n  };\n\n  return labels[filterName] || \"추천\";\n}\n\nfunction getNearestMeetingDate(list) {\n  const uniqueDates = [...new Set(list.map((item) => item.date))];\n\n  if (uniqueDates.length === 0) {\n    return null;\n  }\n\n  return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];\n}\n\nfunction matchesWeekend(item) {\n  const day = new Date(item.date).getDay();\n  return day === 0 || day === 6;\n}\n\nfunction applyQuickFilterRule(list) {\n  if (activeQuickFilter === \"today\") {\n    const nearestDate = getNearestMeetingDate(list);\n    return nearestDate ? list.filter((item) => item.date === nearestDate) : list;\n  }\n\n  if (activeQuickFilter === \"small\") {\n    return list.filter((item) => item.capacity <= 8);\n  }\n\n  if (activeQuickFilter === \"weekend\") {\n    return list.filter(matchesWeekend);\n  }\n\n  if (activeQuickFilter === \"social\") {\n    return list.filter(\n      (item) => item.category === \"친목\" || item.category === \"게임\"\n    );\n  }\n\n  return list;\n}\n\nfunction syncQuickFilterUi() {\n  quickFilterButtons.forEach((button) => {\n    const isActive = button.dataset.quickFilter === activeQuickFilter;\n    button.classList.toggle(\"is-active\", isActive);\n    button.classList.toggle(\"is-current\", isActive);\n    button.setAttribute(\"aria-pressed\", String(isActive));\n  });\n}\n\nfunction buildResultMessage(count) {\n  const prefix =\n    activeQuickFilter === \"recommend\"\n      ? \"현재 조건에 맞는\"\n      : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;\n\n  return `${prefix} 모임은 ${count}개입니다.`;\n}\n\nfunction getFeaturedMeetings() {\n  const openMeetings = meetings.filter((item) => item.joined < item.capacity);\n  const baseList = openMeetings.length > 0 ? openMeetings : meetings;\n\n  return sortMeetings(baseList, \"popular\").slice(0, 6);\n}\n\nfunction getCurrentFeaturedMeeting() {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length === 0) {\n    return null;\n  }\n\n  if (featuredMeetingIndex >= featured.length) {\n    featuredMeetingIndex = 0;\n  }\n\n  return featured[featuredMeetingIndex];\n}\n\nfunction renderFeaturedSection() {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length === 0) {\n    heroKicker.textContent = \"추천 모임 준비 중\";\n    heroTitle.textContent = \"새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.\";\n    heroDescription.textContent =\n      \"아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.\";\n    heroPageIndicator.textContent = \"추천 0 / 0\";\n    heroDetailButton.disabled = true;\n    heroJoinButton.disabled = true;\n    heroJoinButton.textContent = \"바로 참여\";\n    heroPrevButton.disabled = true;\n    heroNextButton.disabled = true;\n    featuredTeaserList.innerHTML = \"\";\n    return;\n  }\n\n  const current = getCurrentFeaturedMeeting();\n  const teaserItems = Array.from(\n    { length: Math.min(featured.length, 3) },\n    (_, index) => featured[(featuredMeetingIndex + index) % featured.length]\n  );\n  const isClosed = current.joined >= current.capacity;\n\n  heroKicker.textContent = `${current.location} · ${current.category} 추천`;\n  heroTitle.textContent = current.title;\n  heroDescription.textContent = `${current.description} ${formatDate(\n    current.date\n  )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;\n  heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${\n    featured.length\n  }`;\n  heroDetailButton.disabled = false;\n  heroJoinButton.disabled = current.mine || isClosed;\n  heroJoinButton.textContent = current.mine\n    ? \"참여 완료\"\n    : isClosed\n    ? \"모집 마감\"\n    : \"바로 참여\";\n  heroPrevButton.disabled = featured.length <= 1;\n  heroNextButton.disabled = featured.length <= 1;\n\n  featuredTeaserList.innerHTML = teaserItems\n    .map(\n      (item, index) => `\n        <button\n          class=\"hero-teaser-card ${index === 0 ? \"wide\" : \"\"} ${\n            item.id === current.id ? \"is-active\" : \"\"\n          }\"\n          type=\"button\"\n          data-featured-id=\"${item.id}\"\n        >\n          <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>\n          <strong>${escapeHtml(item.title)}</strong>\n        </button>\n      `\n    )\n    .join(\"\");\n}\n\n// 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.\nfunction getFilteredMeetings() {\n  const keyword = keywordInput.value.trim().toLowerCase();\n  const category = categorySelect.value;\n  const location = locationSelect.value;\n  const status = statusFilter.value;\n  const sort = sortOrder.value;\n\n  const filtered = meetings.filter((item) => {\n    const matchesKeyword = item.title.toLowerCase().includes(keyword);\n    const matchesCategory = category === \"all\" || item.category === category;\n    const matchesLocation = location === \"all\" || item.location === location;\n    const matchesStatus =\n      status === \"all\" ||\n      (status === \"open\" && item.joined < item.capacity) ||\n      (status === \"mine\" && item.mine) ||\n      (status === \"closed\" && item.joined >= item.capacity);\n\n    return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;\n  });\n\n  return sortMeetings(applyQuickFilterRule(filtered), sort);\n}\n\nfunction applyFiltersAndRender() {\n  renderMeetings(getFilteredMeetings());\n}\n\nfunction resetFilters() {\n  searchForm.reset();\n  activeQuickFilter = \"recommend\";\n  applyQuickPreset(activeQuickFilter);\n  applyFiltersAndRender();\n  syncQuickFilterUi();\n}\n\nfunction applyQuickPreset(filterName) {\n  keywordInput.value = \"\";\n  categorySelect.value = \"all\";\n  locationSelect.value = \"all\";\n  statusFilter.value = \"all\";\n  sortOrder.value = filterName === \"recommend\" ? \"popular\" : \"soon\";\n\n  if (filterName === \"campus\") {\n    locationSelect.value = \"캠퍼스\";\n  }\n\n  if (filterName === \"sports\") {\n    categorySelect.value = \"운동\";\n  }\n\n  if (filterName === \"study\") {\n    categorySelect.value = \"공부\";\n  }\n\n  if (filterName === \"mine\") {\n    statusFilter.value = \"mine\";\n  }\n}\n\nfunction applyQuickFilter(filterName) {\n  activeQuickFilter = filterName;\n  applyQuickPreset(filterName);\n  applyFiltersAndRender();\n  syncQuickFilterUi();\n  document.querySelector(\"#search\").scrollIntoView({ behavior: \"smooth\" });\n}\n\nfunction handleQuickAction(actionName) {\n  if (actionName === \"create\") {\n    document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n\nfunction moveFeaturedMeeting(step) {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length <= 1) {\n    return;\n  }\n\n  featuredMeetingIndex =\n    (featuredMeetingIndex + step + featured.length) % featured.length;\n  renderFeaturedSection();\n}\n\nfunction selectFeaturedMeeting(id) {\n  const featured = getFeaturedMeetings();\n  const nextIndex = featured.findIndex((item) => item.id === id);\n\n  if (nextIndex === -1) {\n    return;\n  }\n\n  featuredMeetingIndex = nextIndex;\n  renderFeaturedSection();\n}\n\nfunction getFormValues() {\n  return {\n    title: document.querySelector(\"#newTitle\").value.trim(),\n    category: document.querySelector(\"#newCategory\").value,\n    location: document.querySelector(\"#newLocation\").value,\n    date: document.querySelector(\"#newDate\").value,\n    organizer: document.querySelector(\"#newOrganizer\").value.trim(),\n    capacity: Number(document.querySelector(\"#newCapacity\").value),\n    fee: document.querySelector(\"#newFee\").value.trim(),\n    description: document.querySelector(\"#newDescription\").value.trim(),\n  };\n}\n\n// 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.\nfunction resetFormState() {\n  editingMeetingId = null;\n  createForm.reset();\n  formTitle.textContent = \"폼으로 새 모임 추가하기\";\n  formModeText.textContent =\n    \"지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.\";\n  submitButton.textContent = \"모임 추가\";\n  cancelEditButton.classList.add(\"is-hidden\");\n}\n\n// 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 \"수정 모드\"처럼 보이게 만든다.\nfunction startEditMeeting(id) {\n  const selected = meetings.find((item) => item.id === id && item.createdByMe);\n\n  if (!selected) {\n    return;\n  }\n\n  editingMeetingId = id;\n  document.querySelector(\"#newTitle\").value = selected.title;\n  document.querySelector(\"#newCategory\").value = selected.category;\n  document.querySelector(\"#newLocation\").value = selected.location;\n  document.querySelector(\"#newDate\").value = selected.date;\n  document.querySelector(\"#newOrganizer\").value = selected.organizer;\n  document.querySelector(\"#newCapacity\").value = selected.capacity;\n  document.querySelector(\"#newFee\").value = selected.fee;\n  document.querySelector(\"#newDescription\").value = selected.description;\n\n  formTitle.textContent = \"기존 모임 수정하기\";\n  formModeText.textContent =\n    \"지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.\";\n  submitButton.textContent = \"수정 내용 저장\";\n  cancelEditButton.classList.remove(\"is-hidden\");\n  closeDetail();\n  document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });\n}\n\n// editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.\nfunction handleFormSubmit(event) {\n  event.preventDefault();\n\n  const formValues = getFormValues();\n\n  if (editingMeetingId !== null) {\n    meetings = meetings.map((item) =>\n      item.id === editingMeetingId\n        ? normalizeMeeting({\n            ...item,\n            ...formValues,\n            createdByMe: true,\n          })\n        : item\n    );\n  } else {\n    const newMeeting = normalizeMeeting({\n      id: Date.now(),\n      ...formValues,\n      joined: 1,\n      mine: true,\n      createdByMe: true,\n    });\n\n    meetings.unshift(newMeeting);\n  }\n\n  saveMeetings();\n  resetFormState();\n  renderAll();\n}\n\nfunction getSeatMessage(item) {\n  const remaining = item.capacity - item.joined;\n  return remaining > 0 ? `남은 자리 ${remaining}석` : \"모집 마감\";\n}\n\nfunction formatDate(value) {\n  const date = new Date(value);\n  return date.toLocaleDateString(\"ko-KR\");\n}\n\nfunction sortMeetings(list, sort) {\n  const sorted = [...list];\n\n  if (sort === \"late\") {\n    return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));\n  }\n\n  if (sort === \"seats\") {\n    return sorted.sort(\n      (a, b) => b.capacity - b.joined - (a.capacity - a.joined)\n    );\n  }\n\n  if (sort === \"popular\") {\n    return sorted.sort((a, b) => b.joined - a.joined);\n  }\n\n  return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));\n}\n\nfunction truncateText(text, maxLength) {\n  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;\n}\n\nfunction escapeHtml(value) {\n  return value\n    .replaceAll(\"&\", \"&amp;\")\n    .replaceAll(\"<\", \"&lt;\")\n    .replaceAll(\">\", \"&gt;\")\n    .replaceAll('\"', \"&quot;\")\n    .replaceAll(\"'\", \"&#39;\");\n}\n\n// 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.\nfunction joinMeeting(id) {\n  const selected = meetings.find((item) => item.id === id);\n\n  if (!selected) {\n    return;\n  }\n\n  if (selected.joined >= selected.capacity) {\n    alert(\"이미 모집이 끝난 모임입니다.\");\n    return;\n  }\n\n  if (selected.mine) {\n    alert(\"이미 참여한 모임입니다.\");\n    return;\n  }\n\n  selected.joined += 1;\n  selected.mine = true;\n  saveMeetings();\n  renderAll();\n}\n\n// 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.\nfunction deleteMeeting(id) {\n  const selected = meetings.find((item) => item.id === id && item.createdByMe);\n\n  if (!selected) {\n    return;\n  }\n\n  const isConfirmed = window.confirm(\n    `\"${selected.title}\" 모임을 정말 삭제하시겠습니까?`\n  );\n\n  if (!isConfirmed) {\n    return;\n  }\n\n  meetings = meetings.filter((item) => item.id !== id);\n\n  if (editingMeetingId === id) {\n    resetFormState();\n  }\n\n  if (dialogMeetingId === id) {\n    closeDetail();\n  }\n\n  saveMeetings();\n  renderAll();\n}\n\n// 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.\nfunction openDetail(id) {\n  const selected = meetings.find((item) => item.id === id);\n\n  if (!selected) {\n    return;\n  }\n\n  dialogTitle.textContent = selected.title;\n  dialogMeta.innerHTML = [\n    `카테고리 ${escapeHtml(selected.category)}`,\n    `지역 ${escapeHtml(selected.location)}`,\n    `주최자 ${escapeHtml(selected.organizer)}`,\n    `날짜 ${formatDate(selected.date)}`,\n    `참가비 ${escapeHtml(selected.fee)}`,\n    `참여 ${selected.joined}/${selected.capacity}`,\n  ]\n    .map((text) => `<span class=\"meta-chip\">${text}</span>`)\n    .join(\"\");\n  dialogDescription.textContent = selected.description;\n  dialogMeetingId = id;\n\n  if (selected.createdByMe) {\n    dialogOwnerActions.classList.remove(\"is-hidden\");\n  } else {\n    dialogOwnerActions.classList.add(\"is-hidden\");\n  }\n\n  if (detailDialog.open) {\n    return;\n  }\n\n  if (typeof detailDialog.showModal === \"function\") {\n    detailDialog.showModal();\n    return;\n  }\n\n  detailDialog.setAttribute(\"open\", \"open\");\n}\n\nfunction closeDetail() {\n  if (detailDialog.open && typeof detailDialog.close === \"function\") {\n    detailDialog.close();\n  } else if (detailDialog.hasAttribute(\"open\")) {\n    detailDialog.removeAttribute(\"open\");\n  }\n\n  dialogMeetingId = null;\n}\n\n// 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.\nfunction renderAll() {\n  renderStatus();\n  renderFeaturedSection();\n  applyFiltersAndRender();\n  renderMyMeetings();\n  renderManagedMeetings();\n  syncQuickFilterUi();\n}\n\n// 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.\nsearchForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  applyFiltersAndRender();\n});\n\nresetButton.addEventListener(\"click\", resetFilters);\nstatusFilter.addEventListener(\"change\", applyFiltersAndRender);\nsortOrder.addEventListener(\"change\", applyFiltersAndRender);\ncreateForm.addEventListener(\"submit\", handleFormSubmit);\ncancelEditButton.addEventListener(\"click\", resetFormState);\ncloseDialogButton.addEventListener(\"click\", closeDetail);\ndialogEditButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    startEditMeeting(dialogMeetingId);\n  }\n});\ndialogDeleteButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    deleteMeeting(dialogMeetingId);\n  }\n});\nheroDetailButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    openDetail(featured.id);\n  }\n});\nheroJoinButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    joinMeeting(featured.id);\n  }\n});\nheroPrevButton.addEventListener(\"click\", () => moveFeaturedMeeting(-1));\nheroNextButton.addEventListener(\"click\", () => moveFeaturedMeeting(1));\nfeaturedTeaserList.addEventListener(\"click\", (event) => {\n  const card = event.target.closest(\"[data-featured-id]\");\n\n  if (!card) {\n    return;\n  }\n\n  selectFeaturedMeeting(Number(card.dataset.featuredId));\n});\nquickFilterButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    applyQuickFilter(button.dataset.quickFilter)\n  );\n});\nquickActionButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    handleQuickAction(button.dataset.quickAction)\n  );\n});\n\nsaveMeetings();\nresetFormState();\napplyQuickPreset(activeQuickFilter);\nrenderAll();",
          "description": "숫자 카드, 모임 카드, 내 모임, 개설 관리 목록을 그린다."
        },
        {
          "label": "검색과 빠른 이동",
          "start": 478,
          "end": 589,
          "snippet": "function getFilteredMeetings() {\n  const keyword = keywordInput.value.trim().toLowerCase();\n  const category = categorySelect.value;\n  const location = locationSelect.value;\n  const status = statusFilter.value;\n  const sort = sortOrder.value;\n\n  const filtered = meetings.filter((item) => {\n    const matchesKeyword = item.title.toLowerCase().includes(keyword);\n    const matchesCategory = category === \"all\" || item.category === category;\n    const matchesLocation = location === \"all\" || item.location === location;\n    const matchesStatus =\n      status === \"all\" ||\n      (status === \"open\" && item.joined < item.capacity) ||\n      (status === \"mine\" && item.mine) ||\n      (status === \"closed\" && item.joined >= item.capacity);\n\n    return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;\n  });\n\n  return sortMeetings(applyQuickFilterRule(filtered), sort);\n}\n\nfunction applyFiltersAndRender() {\n  renderMeetings(getFilteredMeetings());\n}\n\nfunction resetFilters() {\n  searchForm.reset();\n  activeQuickFilter = \"recommend\";\n  applyQuickPreset(activeQuickFilter);\n  applyFiltersAndRender();\n  syncQuickFilterUi();\n}\n\nfunction applyQuickPreset(filterName) {\n  keywordInput.value = \"\";\n  categorySelect.value = \"all\";\n  locationSelect.value = \"all\";\n  statusFilter.value = \"all\";\n  sortOrder.value = filterName === \"recommend\" ? \"popular\" : \"soon\";\n\n  if (filterName === \"campus\") {\n    locationSelect.value = \"캠퍼스\";\n  }\n\n  if (filterName === \"sports\") {\n    categorySelect.value = \"운동\";\n  }\n\n  if (filterName === \"study\") {\n    categorySelect.value = \"공부\";\n  }\n\n  if (filterName === \"mine\") {\n    statusFilter.value = \"mine\";\n  }\n}\n\nfunction applyQuickFilter(filterName) {\n  activeQuickFilter = filterName;\n  applyQuickPreset(filterName);\n  applyFiltersAndRender();\n  syncQuickFilterUi();\n  document.querySelector(\"#search\").scrollIntoView({ behavior: \"smooth\" });\n}\n\nfunction handleQuickAction(actionName) {\n  if (actionName === \"create\") {\n    document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n\nfunction moveFeaturedMeeting(step) {\n  const featured = getFeaturedMeetings();\n\n  if (featured.length <= 1) {\n    return;\n  }\n\n  featuredMeetingIndex =\n    (featuredMeetingIndex + step + featured.length) % featured.length;\n  renderFeaturedSection();\n}\n\nfunction selectFeaturedMeeting(id) {\n  const featured = getFeaturedMeetings();\n  const nextIndex = featured.findIndex((item) => item.id === id);\n\n  if (nextIndex === -1) {\n    return;\n  }\n\n  featuredMeetingIndex = nextIndex;\n  renderFeaturedSection();\n}\n\nfunction getFormValues() {\n  return {\n    title: document.querySelector(\"#newTitle\").value.trim(),\n    category: document.querySelector(\"#newCategory\").value,\n    location: document.querySelector(\"#newLocation\").value,\n    date: document.querySelector(\"#newDate\").value,\n    organizer: document.querySelector(\"#newOrganizer\").value.trim(),\n    capacity: Number(document.querySelector(\"#newCapacity\").value),\n    fee: document.querySelector(\"#newFee\").value.trim(),\n    description: document.querySelector(\"#newDescription\").value.trim(),\n  };\n}\n\n// 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.\nfunction resetFormState() {",
          "description": "검색 조건 읽기, 초기화, 빠른 필터 적용, 추천 배너 이동을 처리한다."
        },
        {
          "label": "폼 값 읽기와 추가/수정",
          "start": 575,
          "end": 877,
          "snippet": "function getFormValues() {\n  return {\n    title: document.querySelector(\"#newTitle\").value.trim(),\n    category: document.querySelector(\"#newCategory\").value,\n    location: document.querySelector(\"#newLocation\").value,\n    date: document.querySelector(\"#newDate\").value,\n    organizer: document.querySelector(\"#newOrganizer\").value.trim(),\n    capacity: Number(document.querySelector(\"#newCapacity\").value),\n    fee: document.querySelector(\"#newFee\").value.trim(),\n    description: document.querySelector(\"#newDescription\").value.trim(),\n  };\n}\n\n// 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.\nfunction resetFormState() {\n  editingMeetingId = null;\n  createForm.reset();\n  formTitle.textContent = \"폼으로 새 모임 추가하기\";\n  formModeText.textContent =\n    \"지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.\";\n  submitButton.textContent = \"모임 추가\";\n  cancelEditButton.classList.add(\"is-hidden\");\n}\n\n// 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 \"수정 모드\"처럼 보이게 만든다.\nfunction startEditMeeting(id) {\n  const selected = meetings.find((item) => item.id === id && item.createdByMe);\n\n  if (!selected) {\n    return;\n  }\n\n  editingMeetingId = id;\n  document.querySelector(\"#newTitle\").value = selected.title;\n  document.querySelector(\"#newCategory\").value = selected.category;\n  document.querySelector(\"#newLocation\").value = selected.location;\n  document.querySelector(\"#newDate\").value = selected.date;\n  document.querySelector(\"#newOrganizer\").value = selected.organizer;\n  document.querySelector(\"#newCapacity\").value = selected.capacity;\n  document.querySelector(\"#newFee\").value = selected.fee;\n  document.querySelector(\"#newDescription\").value = selected.description;\n\n  formTitle.textContent = \"기존 모임 수정하기\";\n  formModeText.textContent =\n    \"지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.\";\n  submitButton.textContent = \"수정 내용 저장\";\n  cancelEditButton.classList.remove(\"is-hidden\");\n  closeDetail();\n  document.querySelector(\"#create\").scrollIntoView({ behavior: \"smooth\" });\n}\n\n// editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.\nfunction handleFormSubmit(event) {\n  event.preventDefault();\n\n  const formValues = getFormValues();\n\n  if (editingMeetingId !== null) {\n    meetings = meetings.map((item) =>\n      item.id === editingMeetingId\n        ? normalizeMeeting({\n            ...item,\n            ...formValues,\n            createdByMe: true,\n          })\n        : item\n    );\n  } else {\n    const newMeeting = normalizeMeeting({\n      id: Date.now(),\n      ...formValues,\n      joined: 1,\n      mine: true,\n      createdByMe: true,\n    });\n\n    meetings.unshift(newMeeting);\n  }\n\n  saveMeetings();\n  resetFormState();\n  renderAll();\n}\n\nfunction getSeatMessage(item) {\n  const remaining = item.capacity - item.joined;\n  return remaining > 0 ? `남은 자리 ${remaining}석` : \"모집 마감\";\n}\n\nfunction formatDate(value) {\n  const date = new Date(value);\n  return date.toLocaleDateString(\"ko-KR\");\n}\n\nfunction sortMeetings(list, sort) {\n  const sorted = [...list];\n\n  if (sort === \"late\") {\n    return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));\n  }\n\n  if (sort === \"seats\") {\n    return sorted.sort(\n      (a, b) => b.capacity - b.joined - (a.capacity - a.joined)\n    );\n  }\n\n  if (sort === \"popular\") {\n    return sorted.sort((a, b) => b.joined - a.joined);\n  }\n\n  return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));\n}\n\nfunction truncateText(text, maxLength) {\n  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;\n}\n\nfunction escapeHtml(value) {\n  return value\n    .replaceAll(\"&\", \"&amp;\")\n    .replaceAll(\"<\", \"&lt;\")\n    .replaceAll(\">\", \"&gt;\")\n    .replaceAll('\"', \"&quot;\")\n    .replaceAll(\"'\", \"&#39;\");\n}\n\n// 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.\nfunction joinMeeting(id) {\n  const selected = meetings.find((item) => item.id === id);\n\n  if (!selected) {\n    return;\n  }\n\n  if (selected.joined >= selected.capacity) {\n    alert(\"이미 모집이 끝난 모임입니다.\");\n    return;\n  }\n\n  if (selected.mine) {\n    alert(\"이미 참여한 모임입니다.\");\n    return;\n  }\n\n  selected.joined += 1;\n  selected.mine = true;\n  saveMeetings();\n  renderAll();\n}\n\n// 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.\nfunction deleteMeeting(id) {\n  const selected = meetings.find((item) => item.id === id && item.createdByMe);\n\n  if (!selected) {\n    return;\n  }\n\n  const isConfirmed = window.confirm(\n    `\"${selected.title}\" 모임을 정말 삭제하시겠습니까?`\n  );\n\n  if (!isConfirmed) {\n    return;\n  }\n\n  meetings = meetings.filter((item) => item.id !== id);\n\n  if (editingMeetingId === id) {\n    resetFormState();\n  }\n\n  if (dialogMeetingId === id) {\n    closeDetail();\n  }\n\n  saveMeetings();\n  renderAll();\n}\n\n// 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.\nfunction openDetail(id) {\n  const selected = meetings.find((item) => item.id === id);\n\n  if (!selected) {\n    return;\n  }\n\n  dialogTitle.textContent = selected.title;\n  dialogMeta.innerHTML = [\n    `카테고리 ${escapeHtml(selected.category)}`,\n    `지역 ${escapeHtml(selected.location)}`,\n    `주최자 ${escapeHtml(selected.organizer)}`,\n    `날짜 ${formatDate(selected.date)}`,\n    `참가비 ${escapeHtml(selected.fee)}`,\n    `참여 ${selected.joined}/${selected.capacity}`,\n  ]\n    .map((text) => `<span class=\"meta-chip\">${text}</span>`)\n    .join(\"\");\n  dialogDescription.textContent = selected.description;\n  dialogMeetingId = id;\n\n  if (selected.createdByMe) {\n    dialogOwnerActions.classList.remove(\"is-hidden\");\n  } else {\n    dialogOwnerActions.classList.add(\"is-hidden\");\n  }\n\n  if (detailDialog.open) {\n    return;\n  }\n\n  if (typeof detailDialog.showModal === \"function\") {\n    detailDialog.showModal();\n    return;\n  }\n\n  detailDialog.setAttribute(\"open\", \"open\");\n}\n\nfunction closeDetail() {\n  if (detailDialog.open && typeof detailDialog.close === \"function\") {\n    detailDialog.close();\n  } else if (detailDialog.hasAttribute(\"open\")) {\n    detailDialog.removeAttribute(\"open\");\n  }\n\n  dialogMeetingId = null;\n}\n\n// 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.\nfunction renderAll() {\n  renderStatus();\n  renderFeaturedSection();\n  applyFiltersAndRender();\n  renderMyMeetings();\n  renderManagedMeetings();\n  syncQuickFilterUi();\n}\n\n// 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.\nsearchForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  applyFiltersAndRender();\n});\n\nresetButton.addEventListener(\"click\", resetFilters);\nstatusFilter.addEventListener(\"change\", applyFiltersAndRender);\nsortOrder.addEventListener(\"change\", applyFiltersAndRender);\ncreateForm.addEventListener(\"submit\", handleFormSubmit);\ncancelEditButton.addEventListener(\"click\", resetFormState);\ncloseDialogButton.addEventListener(\"click\", closeDetail);\ndialogEditButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    startEditMeeting(dialogMeetingId);\n  }\n});\ndialogDeleteButton.addEventListener(\"click\", () => {\n  if (dialogMeetingId !== null) {\n    deleteMeeting(dialogMeetingId);\n  }\n});\nheroDetailButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    openDetail(featured.id);\n  }\n});\nheroJoinButton.addEventListener(\"click\", () => {\n  const featured = getCurrentFeaturedMeeting();\n\n  if (featured) {\n    joinMeeting(featured.id);\n  }\n});\nheroPrevButton.addEventListener(\"click\", () => moveFeaturedMeeting(-1));\nheroNextButton.addEventListener(\"click\", () => moveFeaturedMeeting(1));\nfeaturedTeaserList.addEventListener(\"click\", (event) => {\n  const card = event.target.closest(\"[data-featured-id]\");\n\n  if (!card) {\n    return;\n  }\n\n  selectFeaturedMeeting(Number(card.dataset.featuredId));\n});\nquickFilterButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    applyQuickFilter(button.dataset.quickFilter)\n  );\n});\nquickActionButtons.forEach((button) => {\n  button.addEventListener(\"click\", () =>\n    handleQuickAction(button.dataset.quickAction)\n  );\n});\n\nsaveMeetings();\nresetFormState();\napplyQuickPreset(activeQuickFilter);\nrenderAll();",
          "description": "모임 생성 폼을 읽고 추가 모드와 수정 모드를 전환한다."
        }
      ]
    },
    {
      "id": "login.html",
      "path": "login.html",
      "title": "login.html",
      "kind": "html",
      "role": "로그인 데모 화면의 구조를 만드는 HTML 파일이다. 입력 폼, 비밀번호 보기 버튼, 로그인 상태 유지 토글, 구글 로그인 버튼을 담고 있다.",
      "whenUsed": "사용자가 메인 화면에서 로그인 링크를 눌렀을 때 로드된다.",
      "indentGuide": "HTML은 부모 태그 안으로 들어갈수록 보통 두 칸씩 더 들여쓴다. 같은 깊이에 있는 태그끼리는 들여쓰기 폭이 같고, 닫는 태그는 대응하는 여는 태그와 같은 깊이로 맞춘다.",
      "connections": [
        "HTML ↔ CSS 연결: 13줄에서 `login.css`를 로드한다.",
        "HTML ↔ JS 연결: 14줄에서 `login.js`를 로드한다.",
        "JS가 선택하는 요소: `#loginForm`, `#loginMessage`, `#passwordInput`, `#togglePasswordButton`, `#googleButton`이 모두 이 파일에 있다.",
        "CSS가 적용되는 요소: `.login-page`, `.login-card`, `.field-group`, `.remember-toggle`, `.google-button`, `.signup-row`가 대표적이다.",
        "asset 참조 여부: 현재 로그인 HTML은 `assets/login-hero.png`를 직접 사용하지 않는다.",
        "상대경로 사용: `index.html`로 돌아가는 링크와 CSS/JS 연결 모두 상대경로다."
      ],
      "badges": [
        "구조",
        "태그",
        "페이지 뼈대"
      ],
      "docPath": "../docs/per-file-deep-explanations/04-login-html.md",
      "sourcePath": "../login.html",
      "lines": [
        {
          "lineNumber": 1,
          "code": "<!DOCTYPE html>",
          "explanation": "HTML5 문서 선언이다. 브라우저가 표준 모드로 해석하도록 돕는다.",
          "indentation": "문서의 바깥쪽 구조 수준이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 2,
          "code": "<html lang=\"ko\">",
          "explanation": "문서 전체를 감싸는 루트 태그다.",
          "indentation": "문서의 바깥쪽 구조 수준이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 3,
          "code": "  <head>",
          "explanation": "브라우저가 먼저 읽는 설정과 리소스 연결 구간이다.",
          "indentation": "부모 태그 안쪽 요소라 2칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 4,
          "code": "    <meta charset=\"UTF-8\" />",
          "explanation": "문서 문자 인코딩을 UTF-8로 지정한다. 한글이 깨지지 않게 해 준다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 5,
          "code": "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
          "explanation": "모바일 화면 폭에 맞춰 페이지가 반응형으로 보이도록 설정한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 6,
          "code": "    <title>MOIM 로그인</title>",
          "explanation": "브라우저 탭 제목을 정한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 7,
          "code": "    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />",
          "explanation": "외부 CSS나 폰트 리소스를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 8,
          "code": "    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />",
          "explanation": "외부 CSS나 폰트 리소스를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 9,
          "code": "    <link",
          "explanation": "외부 CSS나 폰트 리소스를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 10,
          "code": "      href=\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 11,
          "code": "      rel=\"stylesheet\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 12,
          "code": "    />",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 13,
          "code": "    <link rel=\"stylesheet\" href=\"login.css\" />",
          "explanation": "외부 CSS 파일을 연결하는 줄이다. 이 줄이 있어야 스타일이 적용된다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 14,
          "code": "    <script src=\"login.js\" defer></script>",
          "explanation": "외부 JavaScript 파일을 연결하는 줄이다. `defer` 덕분에 HTML을 먼저 읽은 뒤 실행한다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 15,
          "code": "  </head>",
          "explanation": "`head` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 2칸이다."
        },
        {
          "lineNumber": 16,
          "code": "  <body>",
          "explanation": "화면에 실제로 보이는 내용을 담는다.",
          "indentation": "부모 태그 안쪽 요소라 2칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 17,
          "code": "    <main class=\"login-page\">",
          "explanation": "문서의 핵심 본문 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 4칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 18,
          "code": "      <!-- 메인과 역할이 다른 화면이라 로그인은 별도 페이지로 분리해 둔다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 19,
          "code": "      <section class=\"login-stage\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 6칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 20,
          "code": "        <!-- 실제 인증 전 단계라서, 지금은 입력 흐름과 화면 구조를 먼저 확인하는 데모 영역이다 -->",
          "explanation": "HTML 주석이다. 아래에 오는 구조의 의도나 설계 이유를 코드 안에 메모해 둔다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 21,
          "code": "        <section class=\"form-stage\" aria-labelledby=\"loginTitle\">",
          "explanation": "주제가 묶인 독립적인 화면 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 8칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 22,
          "code": "          <div class=\"panel-shell\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 10칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 23,
          "code": "            <div class=\"login-card\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 12칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 24,
          "code": "              <a class=\"back-link\" href=\"index.html\">프로젝트 홈으로</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 26,
          "code": "              <div class=\"brand-row\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 27,
          "code": "                <span class=\"brand-orb\"></span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 28,
          "code": "                <strong>모임</strong>",
          "explanation": "강조 텍스트다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 29,
          "code": "              </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 31,
          "code": "              <header class=\"card-header\">",
          "explanation": "상단 소개나 내비게이션 영역을 의미한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 32,
          "code": "                <h1 id=\"loginTitle\">다시 만나 반가워요</h1>",
          "explanation": "페이지에서 가장 중요한 제목이다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 33,
          "code": "              </header>",
          "explanation": "`header` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 35,
          "code": "              <form class=\"login-form\" id=\"loginForm\">",
          "explanation": "입력 요소를 하나의 제출 단위로 묶는다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 36,
          "code": "                <label class=\"field-group\">",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 37,
          "code": "                  <span>로그인 정보</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 38,
          "code": "                  <input",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 39,
          "code": "                    type=\"text\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 20칸 들여썼다."
        },
        {
          "lineNumber": 40,
          "code": "                    name=\"identifier\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 20칸 들여썼다."
        },
        {
          "lineNumber": 41,
          "code": "                    placeholder=\"이메일 또는 전화번호\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 20칸 들여썼다."
        },
        {
          "lineNumber": 42,
          "code": "                    required",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 20칸 들여썼다."
        },
        {
          "lineNumber": 43,
          "code": "                  />",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 18칸 들여썼다."
        },
        {
          "lineNumber": 44,
          "code": "                </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 16칸이다."
        },
        {
          "lineNumber": 46,
          "code": "                <label class=\"field-group\">",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 47,
          "code": "                  <span>비밀번호</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 48,
          "code": "                  <span class=\"password-shell\">",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 49,
          "code": "                    <input",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 20칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 50,
          "code": "                      id=\"passwordInput\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 51,
          "code": "                      type=\"password\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 52,
          "code": "                      name=\"password\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 53,
          "code": "                      placeholder=\"비밀번호를 입력하세요\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 54,
          "code": "                      required",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 55,
          "code": "                    />",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 20칸 들여썼다."
        },
        {
          "lineNumber": 56,
          "code": "                    <button",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 20칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 57,
          "code": "                      class=\"icon-button\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 58,
          "code": "                      id=\"togglePasswordButton\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 59,
          "code": "                      type=\"button\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 60,
          "code": "                      aria-label=\"비밀번호 보기\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 22칸 들여썼다."
        },
        {
          "lineNumber": 61,
          "code": "                    >",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 20칸 들여썼다."
        },
        {
          "lineNumber": 62,
          "code": "                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">",
          "explanation": "벡터 아이콘을 그리는 영역이다.",
          "indentation": "부모 태그 안쪽 요소라 22칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 63,
          "code": "                        <path",
          "explanation": "SVG 아이콘의 실제 모양 경로다.",
          "indentation": "부모 태그 안쪽 요소라 24칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 64,
          "code": "                          d=\"M12 5C6.5 5 2.1 8.5 1 12c1.1 3.5 5.5 7 11 7s9.9-3.5 11-7c-1.1-3.5-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z\"",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 26칸 들여썼다."
        },
        {
          "lineNumber": 65,
          "code": "                        />",
          "explanation": "화면에 실제로 보이는 텍스트 또는 속성의 일부 줄이다.",
          "indentation": "태그 안의 텍스트나 속성 이어쓰기 줄이라 24칸 들여썼다."
        },
        {
          "lineNumber": 66,
          "code": "                        <circle cx=\"12\" cy=\"12\" r=\"2.1\" />",
          "explanation": "SVG 안의 원형 도형이다.",
          "indentation": "부모 태그 안쪽 요소라 24칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 67,
          "code": "                      </svg>",
          "explanation": "`svg` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 22칸이다."
        },
        {
          "lineNumber": 68,
          "code": "                    </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 20칸이다."
        },
        {
          "lineNumber": 69,
          "code": "                  </span>",
          "explanation": "`span` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 18칸이다."
        },
        {
          "lineNumber": 70,
          "code": "                </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 16칸이다."
        },
        {
          "lineNumber": 72,
          "code": "                <div class=\"support-row\">",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 73,
          "code": "                  <label class=\"remember-toggle\">",
          "explanation": "입력칸 설명과 클릭 영역을 함께 제공한다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 74,
          "code": "                    <input id=\"rememberInput\" type=\"checkbox\" name=\"remember\" />",
          "explanation": "폼 입력 요소 줄이다. 한 줄 입력을 받는 폼 요소다. 사용자의 값을 받아 검색이나 생성 기능에 전달한다.",
          "indentation": "부모 태그 안쪽 요소라 20칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 75,
          "code": "                    <span class=\"toggle-ui\"></span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 20칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 76,
          "code": "                    <span>로그인 상태 유지</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 20칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 77,
          "code": "                  </label>",
          "explanation": "`label` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 18칸이다."
        },
        {
          "lineNumber": 79,
          "code": "                  <a href=\"#\" class=\"support-link\">비밀번호를 잊으셨나요?</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 18칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 80,
          "code": "                </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 16칸이다."
        },
        {
          "lineNumber": 82,
          "code": "                <button class=\"primary-submit\" type=\"submit\">로그인</button>",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 83,
          "code": "              </form>",
          "explanation": "`form` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 85,
          "code": "              <p class=\"login-message\" id=\"loginMessage\" aria-live=\"polite\"></p>",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 87,
          "code": "              <div class=\"divider\" aria-hidden=\"true\"></div>",
          "explanation": "레이아웃을 묶기 위한 일반 컨테이너다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 89,
          "code": "              <button class=\"google-button\" id=\"googleButton\" type=\"button\">",
          "explanation": "버튼 요소를 여는 줄이다. 클릭 동작을 받는 버튼 요소다. 이후 JavaScript가 클릭 이벤트를 연결한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 90,
          "code": "                <span class=\"google-mark\">G</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 91,
          "code": "                <span>또는 구글로 로그인</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 92,
          "code": "              </button>",
          "explanation": "`button` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 94,
          "code": "              <p class=\"signup-row\">",
          "explanation": "일반 문단이나 설명 문구를 표시한다.",
          "indentation": "부모 태그 안쪽 요소라 14칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 95,
          "code": "                <span>아직 계정이 없으신가요?</span>",
          "explanation": "인라인 텍스트나 작은 UI 조각을 감싼다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 96,
          "code": "                <a href=\"#\">회원가입하기</a>",
          "explanation": "링크 요소를 여는 줄이다. 다른 위치나 페이지로 이동하는 링크다. `href` 값에 따라 같은 페이지 내부 이동 또는 다른 페이지 이동이 일어난다.",
          "indentation": "부모 태그 안쪽 요소라 16칸 들여썼다. 안쪽으로 들어갈수록 더 내부 구조라는 뜻이다."
        },
        {
          "lineNumber": 97,
          "code": "              </p>",
          "explanation": "`p` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 14칸이다."
        },
        {
          "lineNumber": 98,
          "code": "            </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 12칸이다."
        },
        {
          "lineNumber": 99,
          "code": "          </div>",
          "explanation": "`div` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 10칸이다."
        },
        {
          "lineNumber": 100,
          "code": "        </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 8칸이다."
        },
        {
          "lineNumber": 101,
          "code": "      </section>",
          "explanation": "`section` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 6칸이다."
        },
        {
          "lineNumber": 102,
          "code": "    </main>",
          "explanation": "`main` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 4칸이다."
        },
        {
          "lineNumber": 103,
          "code": "  </body>",
          "explanation": "`body` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "닫는 태그라 대응하는 여는 태그와 같은 깊이로 맞춘 줄이다. 현재는 앞쪽 공백 2칸이다."
        },
        {
          "lineNumber": 104,
          "code": "</html>",
          "explanation": "`html` 블록을 닫는 줄이다. 위에서 연 구조 단위를 여기서 마무리한다.",
          "indentation": "문서의 바깥쪽 구조 수준이라 들여쓰지 않았다."
        }
      ],
      "blocks": [
        {
          "label": "구조 블록 `<main class=\"login-page\">`",
          "start": 17,
          "end": 18,
          "snippet": "    <main class=\"login-page\">\n      <!-- 메인과 역할이 다른 화면이라 로그인은 별도 페이지로 분리해 둔다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"login-stage\">`",
          "start": 19,
          "end": 20,
          "snippet": "      <section class=\"login-stage\">\n        <!-- 실제 인증 전 단계라서, 지금은 입력 흐름과 화면 구조를 먼저 확인하는 데모 영역이다 -->",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<section class=\"form-stage\" aria-labelledby=\"loginTitle\">`",
          "start": 21,
          "end": 30,
          "snippet": "        <section class=\"form-stage\" aria-labelledby=\"loginTitle\">\n          <div class=\"panel-shell\">\n            <div class=\"login-card\">\n              <a class=\"back-link\" href=\"index.html\">프로젝트 홈으로</a>\n\n              <div class=\"brand-row\">\n                <span class=\"brand-orb\"></span>\n                <strong>모임</strong>\n              </div>\n",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        },
        {
          "label": "구조 블록 `<header class=\"card-header\">`",
          "start": 31,
          "end": 104,
          "snippet": "              <header class=\"card-header\">\n                <h1 id=\"loginTitle\">다시 만나 반가워요</h1>\n              </header>\n\n              <form class=\"login-form\" id=\"loginForm\">\n                <label class=\"field-group\">\n                  <span>로그인 정보</span>\n                  <input\n                    type=\"text\"\n                    name=\"identifier\"\n                    placeholder=\"이메일 또는 전화번호\"\n                    required\n                  />\n                </label>\n\n                <label class=\"field-group\">\n                  <span>비밀번호</span>\n                  <span class=\"password-shell\">\n                    <input\n                      id=\"passwordInput\"\n                      type=\"password\"\n                      name=\"password\"\n                      placeholder=\"비밀번호를 입력하세요\"\n                      required\n                    />\n                    <button\n                      class=\"icon-button\"\n                      id=\"togglePasswordButton\"\n                      type=\"button\"\n                      aria-label=\"비밀번호 보기\"\n                    >\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                        <path\n                          d=\"M12 5C6.5 5 2.1 8.5 1 12c1.1 3.5 5.5 7 11 7s9.9-3.5 11-7c-1.1-3.5-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z\"\n                        />\n                        <circle cx=\"12\" cy=\"12\" r=\"2.1\" />\n                      </svg>\n                    </button>\n                  </span>\n                </label>\n\n                <div class=\"support-row\">\n                  <label class=\"remember-toggle\">\n                    <input id=\"rememberInput\" type=\"checkbox\" name=\"remember\" />\n                    <span class=\"toggle-ui\"></span>\n                    <span>로그인 상태 유지</span>\n                  </label>\n\n                  <a href=\"#\" class=\"support-link\">비밀번호를 잊으셨나요?</a>\n                </div>\n\n                <button class=\"primary-submit\" type=\"submit\">로그인</button>\n              </form>\n\n              <p class=\"login-message\" id=\"loginMessage\" aria-live=\"polite\"></p>\n\n              <div class=\"divider\" aria-hidden=\"true\"></div>\n\n              <button class=\"google-button\" id=\"googleButton\" type=\"button\">\n                <span class=\"google-mark\">G</span>\n                <span>또는 구글로 로그인</span>\n              </button>\n\n              <p class=\"signup-row\">\n                <span>아직 계정이 없으신가요?</span>\n                <a href=\"#\">회원가입하기</a>\n              </p>\n            </div>\n          </div>\n        </section>\n      </section>\n    </main>\n  </body>\n</html>",
          "description": "화면 구조를 이루는 주요 HTML 블록의 시작점이다."
        }
      ],
      "features": [
        {
          "label": "문서 head와 로그인 리소스 로드",
          "start": 3,
          "end": 15,
          "snippet": "  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>MOIM 로그인</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <link rel=\"stylesheet\" href=\"login.css\" />\n    <script src=\"login.js\" defer></script>\n  </head>",
          "description": "로그인 전용 웹폰트, CSS, JS를 연결한다."
        },
        {
          "label": "로그인 페이지 메인 구조",
          "start": 17,
          "end": 102,
          "snippet": "    <main class=\"login-page\">\n      <!-- 메인과 역할이 다른 화면이라 로그인은 별도 페이지로 분리해 둔다 -->\n      <section class=\"login-stage\">\n        <!-- 실제 인증 전 단계라서, 지금은 입력 흐름과 화면 구조를 먼저 확인하는 데모 영역이다 -->\n        <section class=\"form-stage\" aria-labelledby=\"loginTitle\">\n          <div class=\"panel-shell\">\n            <div class=\"login-card\">\n              <a class=\"back-link\" href=\"index.html\">프로젝트 홈으로</a>\n\n              <div class=\"brand-row\">\n                <span class=\"brand-orb\"></span>\n                <strong>모임</strong>\n              </div>\n\n              <header class=\"card-header\">\n                <h1 id=\"loginTitle\">다시 만나 반가워요</h1>\n              </header>\n\n              <form class=\"login-form\" id=\"loginForm\">\n                <label class=\"field-group\">\n                  <span>로그인 정보</span>\n                  <input\n                    type=\"text\"\n                    name=\"identifier\"\n                    placeholder=\"이메일 또는 전화번호\"\n                    required\n                  />\n                </label>\n\n                <label class=\"field-group\">\n                  <span>비밀번호</span>\n                  <span class=\"password-shell\">\n                    <input\n                      id=\"passwordInput\"\n                      type=\"password\"\n                      name=\"password\"\n                      placeholder=\"비밀번호를 입력하세요\"\n                      required\n                    />\n                    <button\n                      class=\"icon-button\"\n                      id=\"togglePasswordButton\"\n                      type=\"button\"\n                      aria-label=\"비밀번호 보기\"\n                    >\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                        <path\n                          d=\"M12 5C6.5 5 2.1 8.5 1 12c1.1 3.5 5.5 7 11 7s9.9-3.5 11-7c-1.1-3.5-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z\"\n                        />\n                        <circle cx=\"12\" cy=\"12\" r=\"2.1\" />\n                      </svg>\n                    </button>\n                  </span>\n                </label>\n\n                <div class=\"support-row\">\n                  <label class=\"remember-toggle\">\n                    <input id=\"rememberInput\" type=\"checkbox\" name=\"remember\" />\n                    <span class=\"toggle-ui\"></span>\n                    <span>로그인 상태 유지</span>\n                  </label>\n\n                  <a href=\"#\" class=\"support-link\">비밀번호를 잊으셨나요?</a>\n                </div>\n\n                <button class=\"primary-submit\" type=\"submit\">로그인</button>\n              </form>\n\n              <p class=\"login-message\" id=\"loginMessage\" aria-live=\"polite\"></p>\n\n              <div class=\"divider\" aria-hidden=\"true\"></div>\n\n              <button class=\"google-button\" id=\"googleButton\" type=\"button\">\n                <span class=\"google-mark\">G</span>\n                <span>또는 구글로 로그인</span>\n              </button>\n\n              <p class=\"signup-row\">\n                <span>아직 계정이 없으신가요?</span>\n                <a href=\"#\">회원가입하기</a>\n              </p>\n            </div>\n          </div>\n        </section>\n      </section>\n    </main>",
          "description": "로그인 화면 전체를 감싸는 메인 영역이다."
        },
        {
          "label": "로그인 카드",
          "start": 23,
          "end": 98,
          "snippet": "            <div class=\"login-card\">\n              <a class=\"back-link\" href=\"index.html\">프로젝트 홈으로</a>\n\n              <div class=\"brand-row\">\n                <span class=\"brand-orb\"></span>\n                <strong>모임</strong>\n              </div>\n\n              <header class=\"card-header\">\n                <h1 id=\"loginTitle\">다시 만나 반가워요</h1>\n              </header>\n\n              <form class=\"login-form\" id=\"loginForm\">\n                <label class=\"field-group\">\n                  <span>로그인 정보</span>\n                  <input\n                    type=\"text\"\n                    name=\"identifier\"\n                    placeholder=\"이메일 또는 전화번호\"\n                    required\n                  />\n                </label>\n\n                <label class=\"field-group\">\n                  <span>비밀번호</span>\n                  <span class=\"password-shell\">\n                    <input\n                      id=\"passwordInput\"\n                      type=\"password\"\n                      name=\"password\"\n                      placeholder=\"비밀번호를 입력하세요\"\n                      required\n                    />\n                    <button\n                      class=\"icon-button\"\n                      id=\"togglePasswordButton\"\n                      type=\"button\"\n                      aria-label=\"비밀번호 보기\"\n                    >\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                        <path\n                          d=\"M12 5C6.5 5 2.1 8.5 1 12c1.1 3.5 5.5 7 11 7s9.9-3.5 11-7c-1.1-3.5-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z\"\n                        />\n                        <circle cx=\"12\" cy=\"12\" r=\"2.1\" />\n                      </svg>\n                    </button>\n                  </span>\n                </label>\n\n                <div class=\"support-row\">\n                  <label class=\"remember-toggle\">\n                    <input id=\"rememberInput\" type=\"checkbox\" name=\"remember\" />\n                    <span class=\"toggle-ui\"></span>\n                    <span>로그인 상태 유지</span>\n                  </label>\n\n                  <a href=\"#\" class=\"support-link\">비밀번호를 잊으셨나요?</a>\n                </div>\n\n                <button class=\"primary-submit\" type=\"submit\">로그인</button>\n              </form>\n\n              <p class=\"login-message\" id=\"loginMessage\" aria-live=\"polite\"></p>\n\n              <div class=\"divider\" aria-hidden=\"true\"></div>\n\n              <button class=\"google-button\" id=\"googleButton\" type=\"button\">\n                <span class=\"google-mark\">G</span>\n                <span>또는 구글로 로그인</span>\n              </button>\n\n              <p class=\"signup-row\">\n                <span>아직 계정이 없으신가요?</span>\n                <a href=\"#\">회원가입하기</a>\n              </p>\n            </div>",
          "description": "브랜드, 제목, 로그인 폼, 메시지, 구글 버튼, 회원가입 링크를 담는다."
        },
        {
          "label": "로그인 폼",
          "start": 35,
          "end": 83,
          "snippet": "              <form class=\"login-form\" id=\"loginForm\">\n                <label class=\"field-group\">\n                  <span>로그인 정보</span>\n                  <input\n                    type=\"text\"\n                    name=\"identifier\"\n                    placeholder=\"이메일 또는 전화번호\"\n                    required\n                  />\n                </label>\n\n                <label class=\"field-group\">\n                  <span>비밀번호</span>\n                  <span class=\"password-shell\">\n                    <input\n                      id=\"passwordInput\"\n                      type=\"password\"\n                      name=\"password\"\n                      placeholder=\"비밀번호를 입력하세요\"\n                      required\n                    />\n                    <button\n                      class=\"icon-button\"\n                      id=\"togglePasswordButton\"\n                      type=\"button\"\n                      aria-label=\"비밀번호 보기\"\n                    >\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                        <path\n                          d=\"M12 5C6.5 5 2.1 8.5 1 12c1.1 3.5 5.5 7 11 7s9.9-3.5 11-7c-1.1-3.5-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z\"\n                        />\n                        <circle cx=\"12\" cy=\"12\" r=\"2.1\" />\n                      </svg>\n                    </button>\n                  </span>\n                </label>\n\n                <div class=\"support-row\">\n                  <label class=\"remember-toggle\">\n                    <input id=\"rememberInput\" type=\"checkbox\" name=\"remember\" />\n                    <span class=\"toggle-ui\"></span>\n                    <span>로그인 상태 유지</span>\n                  </label>\n\n                  <a href=\"#\" class=\"support-link\">비밀번호를 잊으셨나요?</a>\n                </div>\n\n                <button class=\"primary-submit\" type=\"submit\">로그인</button>\n              </form>",
          "description": "아이디/비밀번호 입력과 상태 유지 체크, 제출 버튼을 제공한다."
        },
        {
          "label": "하단 보조 영역",
          "start": 85,
          "end": 97,
          "snippet": "              <p class=\"login-message\" id=\"loginMessage\" aria-live=\"polite\"></p>\n\n              <div class=\"divider\" aria-hidden=\"true\"></div>\n\n              <button class=\"google-button\" id=\"googleButton\" type=\"button\">\n                <span class=\"google-mark\">G</span>\n                <span>또는 구글로 로그인</span>\n              </button>\n\n              <p class=\"signup-row\">\n                <span>아직 계정이 없으신가요?</span>\n                <a href=\"#\">회원가입하기</a>\n              </p>",
          "description": "제출 결과 메시지, 구글 로그인 버튼, 회원가입 안내를 보여 준다."
        }
      ]
    },
    {
      "id": "login.css",
      "path": "login.css",
      "title": "login.css",
      "kind": "css",
      "role": "로그인 페이지의 전용 스타일 파일이다. 카드 중심 레이아웃, 입력창, 토글, 버튼, 반응형 규칙을 정의한다.",
      "whenUsed": "`login.html`이 로드될 때 함께 적용된다.",
      "indentGuide": "CSS는 선택자 줄이 바깥에 있고, 그 안의 속성 줄을 한 단계 들여쓴다. `@media` 안쪽에 또 선택자가 오면 한 번 더 안으로 들어간다.",
      "connections": [
        "HTML ↔ CSS 연결: `login.html`이 직접 연결한다.",
        "CSS가 적용되는 HTML 요소: `.login-stage`, `.login-card`, `.password-shell`, `.icon-button`, `.remember-toggle`, `.primary-submit` 등이다.",
        "HTML ↔ JS 연결 보조: `login.js`가 바꾸는 `#passwordInput`과 버튼은 이 CSS 덕분에 상태 변화가 자연스럽게 보인다.",
        "asset 참조 여부: 현재 CSS에는 배경 이미지 파일을 부르지 않는다.",
        "상대경로 사용: 파일이 `login.html`과 같은 위치에 있어 단순 파일명으로 연결된다."
      ],
      "badges": [
        "디자인",
        "레이아웃",
        "반응형"
      ],
      "docPath": "../docs/per-file-deep-explanations/05-login-css.md",
      "sourcePath": "../login.css",
      "lines": [
        {
          "lineNumber": 1,
          "code": "/* 로그인 화면도 색과 그림자 값을 변수로 분리해 나중에 톤을 쉽게 맞출 수 있게 한다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 2,
          "code": ":root {",
          "explanation": "`:root` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 3,
          "code": "  --bg: #eef1f5;",
          "explanation": "`:root`에 `--bg: #eef1f5;`를 적용하는 줄이다. `--bg` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 4,
          "code": "  --panel: #f6f7fb;",
          "explanation": "`:root`에 `--panel: #f6f7fb;`를 적용하는 줄이다. `--panel` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 5,
          "code": "  --panel-border: rgba(117, 127, 154, 0.12);",
          "explanation": "`:root`에 `--panel-border: rgba(117, 127, 154, 0.12);`를 적용하는 줄이다. `--panel-border` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 6,
          "code": "  --text: #202126;",
          "explanation": "`:root`에 `--text: #202126;`를 적용하는 줄이다. `--text` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 7,
          "code": "  --muted: #6e7179;",
          "explanation": "`:root`에 `--muted: #6e7179;`를 적용하는 줄이다. `--muted` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 8,
          "code": "  --blue: #1477f7;",
          "explanation": "`:root`에 `--blue: #1477f7;`를 적용하는 줄이다. `--blue` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 9,
          "code": "  --dark: #1f1f23;",
          "explanation": "`:root`에 `--dark: #1f1f23;`를 적용하는 줄이다. `--dark` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 10,
          "code": "  --shadow: 0 32px 80px rgba(33, 39, 53, 0.16);",
          "explanation": "`:root`에 `--shadow: 0 32px 80px rgba(33, 39, 53, 0.16);`를 적용하는 줄이다. `--shadow` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 11,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 13,
          "code": "* {",
          "explanation": "`*` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 14,
          "code": "  box-sizing: border-box;",
          "explanation": "`*`에 `box-sizing: border-box;`를 적용하는 줄이다. `box-sizing` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 15,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 17,
          "code": "body {",
          "explanation": "`body` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 18,
          "code": "  margin: 0;",
          "explanation": "`body`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 19,
          "code": "  min-height: 100vh;",
          "explanation": "`body`에 `min-height: 100vh;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 20,
          "code": "  font-family: \"Plus Jakarta Sans\", sans-serif;",
          "explanation": "`body`에 `font-family: \"Plus Jakarta Sans\", sans-serif;`를 적용하는 줄이다. `font-family` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 21,
          "code": "  background:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 22,
          "code": "    radial-gradient(circle at top right, rgba(20, 119, 247, 0.08), transparent 28%),",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 23,
          "code": "    linear-gradient(180deg, #edf0f4 0%, #e9edf3 100%);",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 24,
          "code": "  color: var(--text);",
          "explanation": "`body`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 25,
          "code": "  overflow-x: hidden;",
          "explanation": "`body`에 `overflow-x: hidden;`를 적용하는 줄이다. 가로 넘침 처리 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 26,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 28,
          "code": "button,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 29,
          "code": "input {",
          "explanation": "`input` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 30,
          "code": "  font: inherit;",
          "explanation": "`input`에 `font: inherit;`를 적용하는 줄이다. `font` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 31,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 33,
          "code": "a {",
          "explanation": "`a` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 34,
          "code": "  color: inherit;",
          "explanation": "`a`에 `color: inherit;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 35,
          "code": "  text-decoration: none;",
          "explanation": "`a`에 `text-decoration: none;`를 적용하는 줄이다. `text-decoration` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 36,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 38,
          "code": ".login-page {",
          "explanation": "`.login-page` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 39,
          "code": "  min-height: 100vh;",
          "explanation": "`.login-page`에 `min-height: 100vh;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 40,
          "code": "  padding: 28px;",
          "explanation": "`.login-page`에 `padding: 28px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 41,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 43,
          "code": "/* 장식 이미지를 덜어내고 로그인 카드 하나에 시선을 모으는 단일 스테이지 구조다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 44,
          "code": ".login-stage {",
          "explanation": "`.login-stage` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 45,
          "code": "  min-height: calc(100vh - 56px);",
          "explanation": "`.login-stage`에 `min-height: calc(100vh - 56px);`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 46,
          "code": "  display: grid;",
          "explanation": "`.login-stage`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 47,
          "code": "  place-items: center;",
          "explanation": "`.login-stage`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 48,
          "code": "  border-radius: 42px;",
          "explanation": "`.login-stage`에 `border-radius: 42px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 49,
          "code": "  padding: 36px 24px;",
          "explanation": "`.login-stage`에 `padding: 36px 24px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 50,
          "code": "  background:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 51,
          "code": "    radial-gradient(circle at top right, rgba(20, 119, 247, 0.1), transparent 28%),",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 52,
          "code": "    linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(245, 246, 250, 0.92));",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 53,
          "code": "  box-shadow: var(--shadow);",
          "explanation": "`.login-stage`에 `box-shadow: var(--shadow);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 54,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 56,
          "code": ".login-stage > * {",
          "explanation": "`.login-stage > *` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 57,
          "code": "  min-width: 0;",
          "explanation": "`.login-stage > *`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 58,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 60,
          "code": ".form-stage {",
          "explanation": "`.form-stage` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 61,
          "code": "  display: grid;",
          "explanation": "`.form-stage`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 62,
          "code": "  place-items: center;",
          "explanation": "`.form-stage`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 63,
          "code": "  width: 100%;",
          "explanation": "`.form-stage`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 64,
          "code": "  padding: 0;",
          "explanation": "`.form-stage`에 `padding: 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 65,
          "code": "  min-width: 0;",
          "explanation": "`.form-stage`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 66,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 68,
          "code": ".panel-shell {",
          "explanation": "`.panel-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 69,
          "code": "  width: min(560px, 100%);",
          "explanation": "`.panel-shell`에 `width: min(560px, 100%);`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 70,
          "code": "  min-width: 0;",
          "explanation": "`.panel-shell`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 71,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 73,
          "code": ".login-card {",
          "explanation": "`.login-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 74,
          "code": "  border-radius: 34px;",
          "explanation": "`.login-card`에 `border-radius: 34px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 75,
          "code": "  padding: 34px 34px 30px;",
          "explanation": "`.login-card`에 `padding: 34px 34px 30px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 76,
          "code": "  background: rgba(249, 250, 252, 0.96);",
          "explanation": "`.login-card`에 `background: rgba(249, 250, 252, 0.96);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 77,
          "code": "  border: 1px solid var(--panel-border);",
          "explanation": "`.login-card`에 `border: 1px solid var(--panel-border);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 78,
          "code": "  box-shadow: 0 24px 60px rgba(24, 32, 52, 0.1);",
          "explanation": "`.login-card`에 `box-shadow: 0 24px 60px rgba(24, 32, 52, 0.1);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 79,
          "code": "  min-width: 0;",
          "explanation": "`.login-card`에 `min-width: 0;`를 적용하는 줄이다. 최소 너비를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 80,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 82,
          "code": ".back-link {",
          "explanation": "`.back-link` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 83,
          "code": "  display: inline-flex;",
          "explanation": "`.back-link`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 84,
          "code": "  margin-bottom: 18px;",
          "explanation": "`.back-link`에 `margin-bottom: 18px;`를 적용하는 줄이다. `margin-bottom` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 85,
          "code": "  color: var(--muted);",
          "explanation": "`.back-link`에 `color: var(--muted);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 86,
          "code": "  font-size: 0.92rem;",
          "explanation": "`.back-link`에 `font-size: 0.92rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 87,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 89,
          "code": ".brand-row {",
          "explanation": "`.brand-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 90,
          "code": "  display: flex;",
          "explanation": "`.brand-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 91,
          "code": "  align-items: center;",
          "explanation": "`.brand-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 92,
          "code": "  gap: 14px;",
          "explanation": "`.brand-row`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 93,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 95,
          "code": ".brand-row strong {",
          "explanation": "`.brand-row strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 96,
          "code": "  font-size: 2rem;",
          "explanation": "`.brand-row strong`에 `font-size: 2rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 97,
          "code": "  font-weight: 800;",
          "explanation": "`.brand-row strong`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 98,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 100,
          "code": ".brand-orb {",
          "explanation": "`.brand-orb` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 101,
          "code": "  width: 42px;",
          "explanation": "`.brand-orb`에 `width: 42px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 102,
          "code": "  height: 42px;",
          "explanation": "`.brand-orb`에 `height: 42px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 103,
          "code": "  border-radius: 50%;",
          "explanation": "`.brand-orb`에 `border-radius: 50%;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 104,
          "code": "  background:",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 105,
          "code": "    radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.85), transparent 24%),",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 106,
          "code": "    conic-gradient(",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 107,
          "code": "      from 10deg,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 108,
          "code": "      #ffd84d,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 109,
          "code": "      #ffb253,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 110,
          "code": "      #f6807c,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 111,
          "code": "      #d28cff,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 112,
          "code": "      #87a7ff,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 113,
          "code": "      #7bd6ff,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 114,
          "code": "      #ffd84d",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 6칸 들여썼다."
        },
        {
          "lineNumber": 115,
          "code": "    );",
          "explanation": "선택자나 속성 표현의 일부 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 116,
          "code": "  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.18);",
          "explanation": "`.brand-orb`에 `box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.18);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 117,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 119,
          "code": ".card-header {",
          "explanation": "`.card-header` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 120,
          "code": "  padding: 32px 0 18px;",
          "explanation": "`.card-header`에 `padding: 32px 0 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 121,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 123,
          "code": ".card-header h1 {",
          "explanation": "`.card-header h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 124,
          "code": "  margin: 0;",
          "explanation": "`.card-header h1`에 `margin: 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 125,
          "code": "  font-size: clamp(2.2rem, 4vw, 3rem);",
          "explanation": "`.card-header h1`에 `font-size: clamp(2.2rem, 4vw, 3rem);`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 126,
          "code": "  line-height: 1.05;",
          "explanation": "`.card-header h1`에 `line-height: 1.05;`를 적용하는 줄이다. 줄 높이를 조정해 읽기 쉽게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 127,
          "code": "  letter-spacing: -0.04em;",
          "explanation": "`.card-header h1`에 `letter-spacing: -0.04em;`를 적용하는 줄이다. 글자 사이 간격을 조정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 128,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 130,
          "code": ".login-form {",
          "explanation": "`.login-form` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 131,
          "code": "  display: grid;",
          "explanation": "`.login-form`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 132,
          "code": "  gap: 22px;",
          "explanation": "`.login-form`에 `gap: 22px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 133,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 135,
          "code": ".field-group {",
          "explanation": "`.field-group` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 136,
          "code": "  display: grid;",
          "explanation": "`.field-group`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 137,
          "code": "  gap: 10px;",
          "explanation": "`.field-group`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 138,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 140,
          "code": ".field-group > span:first-child {",
          "explanation": "`.field-group > span:first-child` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 141,
          "code": "  font-size: 0.98rem;",
          "explanation": "`.field-group > span:first-child`에 `font-size: 0.98rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 142,
          "code": "  color: #30313a;",
          "explanation": "`.field-group > span:first-child`에 `color: #30313a;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 143,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 145,
          "code": ".field-group input {",
          "explanation": "`.field-group input` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 146,
          "code": "  width: 100%;",
          "explanation": "`.field-group input`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 147,
          "code": "  border: 1px solid rgba(117, 127, 154, 0.12);",
          "explanation": "`.field-group input`에 `border: 1px solid rgba(117, 127, 154, 0.12);`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 148,
          "code": "  border-radius: 14px;",
          "explanation": "`.field-group input`에 `border-radius: 14px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 149,
          "code": "  padding: 19px 18px;",
          "explanation": "`.field-group input`에 `padding: 19px 18px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 150,
          "code": "  background: rgba(255, 255, 255, 0.68);",
          "explanation": "`.field-group input`에 `background: rgba(255, 255, 255, 0.68);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 151,
          "code": "  color: var(--text);",
          "explanation": "`.field-group input`에 `color: var(--text);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 152,
          "code": "  outline: none;",
          "explanation": "`.field-group input`에 `outline: none;`를 적용하는 줄이다. `outline` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 153,
          "code": "  transition: border-color 0.18s ease, box-shadow 0.18s ease;",
          "explanation": "`.field-group input`에 `transition: border-color 0.18s ease, box-shadow 0.18s ease;`를 적용하는 줄이다. 상태 변화가 부드럽게 보이도록 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 154,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 156,
          "code": ".field-group input::placeholder {",
          "explanation": "`.field-group input::placeholder` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 157,
          "code": "  color: #8d8f96;",
          "explanation": "`.field-group input::placeholder`에 `color: #8d8f96;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 158,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 160,
          "code": ".field-group input:focus {",
          "explanation": "`.field-group input:focus` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 161,
          "code": "  border-color: rgba(20, 119, 247, 0.4);",
          "explanation": "`.field-group input:focus`에 `border-color: rgba(20, 119, 247, 0.4);`를 적용하는 줄이다. `border-color` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 162,
          "code": "  box-shadow: 0 0 0 4px rgba(20, 119, 247, 0.1);",
          "explanation": "`.field-group input:focus`에 `box-shadow: 0 0 0 4px rgba(20, 119, 247, 0.1);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 163,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 165,
          "code": ".password-shell {",
          "explanation": "`.password-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 166,
          "code": "  position: relative;",
          "explanation": "`.password-shell`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 167,
          "code": "  display: block;",
          "explanation": "`.password-shell`에 `display: block;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 168,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 170,
          "code": ".password-shell input {",
          "explanation": "`.password-shell input` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 171,
          "code": "  padding-right: 56px;",
          "explanation": "`.password-shell input`에 `padding-right: 56px;`를 적용하는 줄이다. `padding-right` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 172,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 174,
          "code": ".icon-button {",
          "explanation": "`.icon-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 175,
          "code": "  position: absolute;",
          "explanation": "`.icon-button`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 176,
          "code": "  top: 50%;",
          "explanation": "`.icon-button`에 `top: 50%;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 177,
          "code": "  right: 16px;",
          "explanation": "`.icon-button`에 `right: 16px;`를 적용하는 줄이다. 오른쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 178,
          "code": "  width: 28px;",
          "explanation": "`.icon-button`에 `width: 28px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 179,
          "code": "  height: 28px;",
          "explanation": "`.icon-button`에 `height: 28px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 180,
          "code": "  display: grid;",
          "explanation": "`.icon-button`에 `display: grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 181,
          "code": "  place-items: center;",
          "explanation": "`.icon-button`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 182,
          "code": "  border: 0;",
          "explanation": "`.icon-button`에 `border: 0;`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 183,
          "code": "  padding: 0;",
          "explanation": "`.icon-button`에 `padding: 0;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 184,
          "code": "  background: transparent;",
          "explanation": "`.icon-button`에 `background: transparent;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 185,
          "code": "  transform: translateY(-50%);",
          "explanation": "`.icon-button`에 `transform: translateY(-50%);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 186,
          "code": "  cursor: pointer;",
          "explanation": "`.icon-button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 187,
          "code": "  color: #55585f;",
          "explanation": "`.icon-button`에 `color: #55585f;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 188,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 190,
          "code": ".icon-button svg {",
          "explanation": "`.icon-button svg` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 191,
          "code": "  width: 22px;",
          "explanation": "`.icon-button svg`에 `width: 22px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 192,
          "code": "  height: 22px;",
          "explanation": "`.icon-button svg`에 `height: 22px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 193,
          "code": "  fill: currentColor;",
          "explanation": "`.icon-button svg`에 `fill: currentColor;`를 적용하는 줄이다. `fill` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 194,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 196,
          "code": ".support-row {",
          "explanation": "`.support-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 197,
          "code": "  display: flex;",
          "explanation": "`.support-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 198,
          "code": "  align-items: center;",
          "explanation": "`.support-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 199,
          "code": "  justify-content: space-between;",
          "explanation": "`.support-row`에 `justify-content: space-between;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 200,
          "code": "  gap: 16px;",
          "explanation": "`.support-row`에 `gap: 16px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 201,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 203,
          "code": ".remember-toggle {",
          "explanation": "`.remember-toggle` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 204,
          "code": "  display: inline-flex;",
          "explanation": "`.remember-toggle`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 205,
          "code": "  align-items: center;",
          "explanation": "`.remember-toggle`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 206,
          "code": "  gap: 12px;",
          "explanation": "`.remember-toggle`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 207,
          "code": "  cursor: pointer;",
          "explanation": "`.remember-toggle`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 208,
          "code": "  color: #343740;",
          "explanation": "`.remember-toggle`에 `color: #343740;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 209,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 211,
          "code": ".remember-toggle input {",
          "explanation": "`.remember-toggle input` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 212,
          "code": "  position: absolute;",
          "explanation": "`.remember-toggle input`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 213,
          "code": "  opacity: 0;",
          "explanation": "`.remember-toggle input`에 `opacity: 0;`를 적용하는 줄이다. 투명도를 조절한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 214,
          "code": "  pointer-events: none;",
          "explanation": "`.remember-toggle input`에 `pointer-events: none;`를 적용하는 줄이다. `pointer-events` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 215,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 217,
          "code": ".toggle-ui {",
          "explanation": "`.toggle-ui` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 218,
          "code": "  position: relative;",
          "explanation": "`.toggle-ui`에 `position: relative;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 219,
          "code": "  width: 52px;",
          "explanation": "`.toggle-ui`에 `width: 52px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 220,
          "code": "  height: 30px;",
          "explanation": "`.toggle-ui`에 `height: 30px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 221,
          "code": "  border-radius: 999px;",
          "explanation": "`.toggle-ui`에 `border-radius: 999px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 222,
          "code": "  background: #e7e8ee;",
          "explanation": "`.toggle-ui`에 `background: #e7e8ee;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 223,
          "code": "  box-shadow: inset 0 0 0 1px rgba(68, 74, 87, 0.08);",
          "explanation": "`.toggle-ui`에 `box-shadow: inset 0 0 0 1px rgba(68, 74, 87, 0.08);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 224,
          "code": "  transition: background 0.18s ease;",
          "explanation": "`.toggle-ui`에 `transition: background 0.18s ease;`를 적용하는 줄이다. 상태 변화가 부드럽게 보이도록 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 225,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 227,
          "code": ".toggle-ui::after {",
          "explanation": "`.toggle-ui::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 228,
          "code": "  content: \"\";",
          "explanation": "`.toggle-ui::after`에 `content: \"\";`를 적용하는 줄이다. 가상 요소에 들어갈 내용을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 229,
          "code": "  position: absolute;",
          "explanation": "`.toggle-ui::after`에 `position: absolute;`를 적용하는 줄이다. 배치 기준을 바꿔 겹치기나 고정을 가능하게 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 230,
          "code": "  top: 4px;",
          "explanation": "`.toggle-ui::after`에 `top: 4px;`를 적용하는 줄이다. 위쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 231,
          "code": "  left: 4px;",
          "explanation": "`.toggle-ui::after`에 `left: 4px;`를 적용하는 줄이다. 왼쪽 기준 위치를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 232,
          "code": "  width: 22px;",
          "explanation": "`.toggle-ui::after`에 `width: 22px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 233,
          "code": "  height: 22px;",
          "explanation": "`.toggle-ui::after`에 `height: 22px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 234,
          "code": "  border-radius: 50%;",
          "explanation": "`.toggle-ui::after`에 `border-radius: 50%;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 235,
          "code": "  background: white;",
          "explanation": "`.toggle-ui::after`에 `background: white;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 236,
          "code": "  box-shadow: 0 4px 10px rgba(31, 31, 35, 0.14);",
          "explanation": "`.toggle-ui::after`에 `box-shadow: 0 4px 10px rgba(31, 31, 35, 0.14);`를 적용하는 줄이다. 그림자를 줘 입체감을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 237,
          "code": "  transition: transform 0.18s ease;",
          "explanation": "`.toggle-ui::after`에 `transition: transform 0.18s ease;`를 적용하는 줄이다. 상태 변화가 부드럽게 보이도록 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 238,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 240,
          "code": ".remember-toggle input:checked + .toggle-ui {",
          "explanation": "`.remember-toggle input:checked + .toggle-ui` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 241,
          "code": "  background: rgba(20, 119, 247, 0.24);",
          "explanation": "`.remember-toggle input:checked + .toggle-ui`에 `background: rgba(20, 119, 247, 0.24);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 242,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 244,
          "code": ".remember-toggle input:checked + .toggle-ui::after {",
          "explanation": "`.remember-toggle input:checked + .toggle-ui::after` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 245,
          "code": "  transform: translateX(22px);",
          "explanation": "`.remember-toggle input:checked + .toggle-ui::after`에 `transform: translateX(22px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 246,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 248,
          "code": ".support-link {",
          "explanation": "`.support-link` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 249,
          "code": "  color: var(--blue);",
          "explanation": "`.support-link`에 `color: var(--blue);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 250,
          "code": "  font-weight: 500;",
          "explanation": "`.support-link`에 `font-weight: 500;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 251,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 253,
          "code": ".primary-submit,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 254,
          "code": ".google-button {",
          "explanation": "`.google-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 255,
          "code": "  border: 0;",
          "explanation": "`.google-button`에 `border: 0;`를 적용하는 줄이다. 테두리를 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 256,
          "code": "  border-radius: 12px;",
          "explanation": "`.google-button`에 `border-radius: 12px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 257,
          "code": "  cursor: pointer;",
          "explanation": "`.google-button`에 `cursor: pointer;`를 적용하는 줄이다. 마우스 포인터 모양을 바꿔 클릭 가능 여부를 보여 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 258,
          "code": "  transition: transform 0.18s ease, opacity 0.18s ease;",
          "explanation": "`.google-button`에 `transition: transform 0.18s ease, opacity 0.18s ease;`를 적용하는 줄이다. 상태 변화가 부드럽게 보이도록 한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 259,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 261,
          "code": ".primary-submit:hover,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 262,
          "code": ".google-button:hover {",
          "explanation": "`.google-button:hover` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 263,
          "code": "  transform: translateY(-1px);",
          "explanation": "`.google-button:hover`에 `transform: translateY(-1px);`를 적용하는 줄이다. 이동, 회전, 확대/축소 같은 시각 변형을 준다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 264,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 266,
          "code": ".primary-submit {",
          "explanation": "`.primary-submit` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 267,
          "code": "  padding: 18px 20px;",
          "explanation": "`.primary-submit`에 `padding: 18px 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 268,
          "code": "  background: var(--blue);",
          "explanation": "`.primary-submit`에 `background: var(--blue);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 269,
          "code": "  color: white;",
          "explanation": "`.primary-submit`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 270,
          "code": "  font-size: 1.45rem;",
          "explanation": "`.primary-submit`에 `font-size: 1.45rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 271,
          "code": "  font-weight: 700;",
          "explanation": "`.primary-submit`에 `font-weight: 700;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 272,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 274,
          "code": ".login-message {",
          "explanation": "`.login-message` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 275,
          "code": "  min-height: 24px;",
          "explanation": "`.login-message`에 `min-height: 24px;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 276,
          "code": "  margin: 18px 0 0;",
          "explanation": "`.login-message`에 `margin: 18px 0 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 277,
          "code": "  color: var(--blue);",
          "explanation": "`.login-message`에 `color: var(--blue);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 278,
          "code": "  font-size: 0.95rem;",
          "explanation": "`.login-message`에 `font-size: 0.95rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 279,
          "code": "  font-weight: 500;",
          "explanation": "`.login-message`에 `font-weight: 500;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 280,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 282,
          "code": ".divider {",
          "explanation": "`.divider` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 283,
          "code": "  height: 1px;",
          "explanation": "`.divider`에 `height: 1px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 284,
          "code": "  margin: 14px 0 28px;",
          "explanation": "`.divider`에 `margin: 14px 0 28px;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 285,
          "code": "  background: linear-gradient(90deg, transparent, rgba(116, 122, 135, 0.18), transparent);",
          "explanation": "`.divider`에 `background: linear-gradient(90deg, transparent, rgba(116, 122, 135, 0.18), transparent);`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 286,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 288,
          "code": ".google-button {",
          "explanation": "`.google-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 289,
          "code": "  width: 100%;",
          "explanation": "`.google-button`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 290,
          "code": "  display: inline-flex;",
          "explanation": "`.google-button`에 `display: inline-flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 291,
          "code": "  align-items: center;",
          "explanation": "`.google-button`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 292,
          "code": "  justify-content: center;",
          "explanation": "`.google-button`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 293,
          "code": "  gap: 14px;",
          "explanation": "`.google-button`에 `gap: 14px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 294,
          "code": "  padding: 18px 20px;",
          "explanation": "`.google-button`에 `padding: 18px 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 295,
          "code": "  background: #232325;",
          "explanation": "`.google-button`에 `background: #232325;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 296,
          "code": "  color: white;",
          "explanation": "`.google-button`에 `color: white;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 297,
          "code": "  font-size: 1.15rem;",
          "explanation": "`.google-button`에 `font-size: 1.15rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 298,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 300,
          "code": ".google-mark {",
          "explanation": "`.google-mark` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 301,
          "code": "  display: inline-grid;",
          "explanation": "`.google-mark`에 `display: inline-grid;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 302,
          "code": "  place-items: center;",
          "explanation": "`.google-mark`에 `place-items: center;`를 적용하는 줄이다. 가로/세로 정렬을 한 번에 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 303,
          "code": "  width: 28px;",
          "explanation": "`.google-mark`에 `width: 28px;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 304,
          "code": "  height: 28px;",
          "explanation": "`.google-mark`에 `height: 28px;`를 적용하는 줄이다. 높이를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 305,
          "code": "  border-radius: 50%;",
          "explanation": "`.google-mark`에 `border-radius: 50%;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 306,
          "code": "  background: white;",
          "explanation": "`.google-mark`에 `background: white;`를 적용하는 줄이다. 배경색 또는 그라데이션을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 307,
          "code": "  color: #ea4335;",
          "explanation": "`.google-mark`에 `color: #ea4335;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 308,
          "code": "  font-weight: 800;",
          "explanation": "`.google-mark`에 `font-weight: 800;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 309,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 311,
          "code": ".signup-row {",
          "explanation": "`.signup-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 312,
          "code": "  display: flex;",
          "explanation": "`.signup-row`에 `display: flex;`를 적용하는 줄이다. 배치 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 313,
          "code": "  justify-content: center;",
          "explanation": "`.signup-row`에 `justify-content: center;`를 적용하는 줄이다. 주축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 314,
          "code": "  gap: 10px;",
          "explanation": "`.signup-row`에 `gap: 10px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 315,
          "code": "  margin: 28px 0 0;",
          "explanation": "`.signup-row`에 `margin: 28px 0 0;`를 적용하는 줄이다. 요소 바깥 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 316,
          "code": "  color: #40424a;",
          "explanation": "`.signup-row`에 `color: #40424a;`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 317,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 319,
          "code": ".signup-row a {",
          "explanation": "`.signup-row a` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 320,
          "code": "  color: var(--blue);",
          "explanation": "`.signup-row a`에 `color: var(--blue);`를 적용하는 줄이다. 글자색을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 321,
          "code": "  font-weight: 600;",
          "explanation": "`.signup-row a`에 `font-weight: 600;`를 적용하는 줄이다. 글자 두께를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 322,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 324,
          "code": "/* 작은 화면에서는 회전과 2단 구성을 줄여서 입력 자체가 더 편하게 느껴지도록 바꾼다. */",
          "explanation": "CSS 주석이다. 아래 규칙이 왜 필요한지 설명한다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 325,
          "code": "@media (max-width: 1120px) {",
          "explanation": "반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 326,
          "code": "  .login-stage {",
          "explanation": "`.login-stage` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 327,
          "code": "    padding: 28px 20px;",
          "explanation": "`.login-stage`에 `padding: 28px 20px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 328,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 329,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 331,
          "code": "@media (max-width: 720px) {",
          "explanation": "반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 332,
          "code": "  .login-page {",
          "explanation": "`.login-page` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 333,
          "code": "    padding: 14px;",
          "explanation": "`.login-page`에 `padding: 14px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 334,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 336,
          "code": "  .login-stage {",
          "explanation": "`.login-stage` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 337,
          "code": "    min-height: auto;",
          "explanation": "`.login-stage`에 `min-height: auto;`를 적용하는 줄이다. 최소 높이를 보장한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 338,
          "code": "    border-radius: 26px;",
          "explanation": "`.login-stage`에 `border-radius: 26px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 339,
          "code": "    padding: 20px 16px;",
          "explanation": "`.login-stage`에 `padding: 20px 16px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 340,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 342,
          "code": "  .panel-shell {",
          "explanation": "`.panel-shell` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 343,
          "code": "    width: 100%;",
          "explanation": "`.panel-shell`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 344,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 346,
          "code": "  .login-card {",
          "explanation": "`.login-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 347,
          "code": "    padding: 24px 20px 22px;",
          "explanation": "`.login-card`에 `padding: 24px 20px 22px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 348,
          "code": "    border-radius: 24px;",
          "explanation": "`.login-card`에 `border-radius: 24px;`를 적용하는 줄이다. 모서리를 둥글게 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 349,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 351,
          "code": "  .brand-row strong {",
          "explanation": "`.brand-row strong` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 352,
          "code": "    font-size: 1.55rem;",
          "explanation": "`.brand-row strong`에 `font-size: 1.55rem;`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 353,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 355,
          "code": "  .card-header {",
          "explanation": "`.card-header` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 356,
          "code": "    padding-top: 24px;",
          "explanation": "`.card-header`에 `padding-top: 24px;`를 적용하는 줄이다. `padding-top` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 357,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 359,
          "code": "  .card-header h1 {",
          "explanation": "`.card-header h1` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 360,
          "code": "    font-size: clamp(1.9rem, 9vw, 2.35rem);",
          "explanation": "`.card-header h1`에 `font-size: clamp(1.9rem, 9vw, 2.35rem);`를 적용하는 줄이다. 글자 크기를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 361,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 363,
          "code": "  .field-group input,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 364,
          "code": "  .primary-submit,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 365,
          "code": "  .google-button {",
          "explanation": "`.google-button` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 366,
          "code": "    width: 100%;",
          "explanation": "`.google-button`에 `width: 100%;`를 적용하는 줄이다. 너비를 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 367,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 369,
          "code": "  .support-row,",
          "explanation": "여러 선택자를 한 블록으로 묶기 위한 선택자 목록 줄이다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 370,
          "code": "  .signup-row {",
          "explanation": "`.signup-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 371,
          "code": "    flex-direction: column;",
          "explanation": "`.signup-row`에 `flex-direction: column;`를 적용하는 줄이다. `flex-direction` 값을 지정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 372,
          "code": "    align-items: flex-start;",
          "explanation": "`.signup-row`에 `align-items: flex-start;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 373,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 375,
          "code": "  .signup-row {",
          "explanation": "`.signup-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 376,
          "code": "    align-items: center;",
          "explanation": "`.signup-row`에 `align-items: center;`를 적용하는 줄이다. 교차축 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 377,
          "code": "    text-align: center;",
          "explanation": "`.signup-row`에 `text-align: center;`를 적용하는 줄이다. 텍스트 정렬 방식을 정한다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 378,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 379,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 381,
          "code": "@media (max-width: 480px) {",
          "explanation": "반응형 시작 줄이다. 화면 너비 조건에 따라 아래 스타일이 적용된다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        },
        {
          "lineNumber": 382,
          "code": "  .login-page {",
          "explanation": "`.login-page` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 383,
          "code": "    padding: 10px;",
          "explanation": "`.login-page`에 `padding: 10px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 384,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 386,
          "code": "  .login-stage {",
          "explanation": "`.login-stage` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 387,
          "code": "    padding: 14px 12px;",
          "explanation": "`.login-stage`에 `padding: 14px 12px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 388,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 390,
          "code": "  .login-card {",
          "explanation": "`.login-card` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 391,
          "code": "    padding: 20px 16px;",
          "explanation": "`.login-card`에 `padding: 20px 16px;`를 적용하는 줄이다. 요소 안쪽 여백을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 392,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 394,
          "code": "  .support-row {",
          "explanation": "`.support-row` 선택자 블록을 시작한다. 이 아래 속성들이 이 대상에 적용된다.",
          "indentation": "`@media` 같은 상위 규칙 안쪽이거나 선택자 보조 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 395,
          "code": "    gap: 12px;",
          "explanation": "`.support-row`에 `gap: 12px;`를 적용하는 줄이다. 내부 요소 사이 간격을 만든다.",
          "indentation": "선택자 블록 안의 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 396,
          "code": "  }",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "현재 스타일 블록을 닫으면서 바깥 수준으로 돌아온 줄이다. 공백 2칸으로 정렬돼 있다."
        },
        {
          "lineNumber": 397,
          "code": "}",
          "explanation": "현재 선택자 또는 미디어 쿼리 블록을 닫는 줄이다.",
          "indentation": "선택자나 바깥쪽 규칙 줄이라 들여쓰지 않았다."
        }
      ],
      "blocks": [
        {
          "label": "선택자 `:root`",
          "start": 2,
          "end": 12,
          "snippet": ":root {\n  --bg: #eef1f5;\n  --panel: #f6f7fb;\n  --panel-border: rgba(117, 127, 154, 0.12);\n  --text: #202126;\n  --muted: #6e7179;\n  --blue: #1477f7;\n  --dark: #1f1f23;\n  --shadow: 0 32px 80px rgba(33, 39, 53, 0.16);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `*`",
          "start": 13,
          "end": 16,
          "snippet": "* {\n  box-sizing: border-box;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `body`",
          "start": 17,
          "end": 28,
          "snippet": "body {\n  margin: 0;\n  min-height: 100vh;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background:\n    radial-gradient(circle at top right, rgba(20, 119, 247, 0.08), transparent 28%),\n    linear-gradient(180deg, #edf0f4 0%, #e9edf3 100%);\n  color: var(--text);\n  overflow-x: hidden;\n}\n\nbutton,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `radial-gradient(circle at top right, rgba(20, 119, 247, 0.08), transparent 28%), button, input`",
          "start": 29,
          "end": 32,
          "snippet": "input {\n  font: inherit;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `a`",
          "start": 33,
          "end": 37,
          "snippet": "a {\n  color: inherit;\n  text-decoration: none;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-page`",
          "start": 38,
          "end": 43,
          "snippet": ".login-page {\n  min-height: 100vh;\n  padding: 28px;\n}\n\n/* 장식 이미지를 덜어내고 로그인 카드 하나에 시선을 모으는 단일 스테이지 구조다. */",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-stage`",
          "start": 44,
          "end": 55,
          "snippet": ".login-stage {\n  min-height: calc(100vh - 56px);\n  display: grid;\n  place-items: center;\n  border-radius: 42px;\n  padding: 36px 24px;\n  background:\n    radial-gradient(circle at top right, rgba(20, 119, 247, 0.1), transparent 28%),\n    linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(245, 246, 250, 0.92));\n  box-shadow: var(--shadow);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `radial-gradient(circle at top right, rgba(20, 119, 247, 0.1), transparent 28%), .login-stage > *`",
          "start": 56,
          "end": 59,
          "snippet": ".login-stage > * {\n  min-width: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.form-stage`",
          "start": 60,
          "end": 67,
          "snippet": ".form-stage {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  padding: 0;\n  min-width: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.panel-shell`",
          "start": 68,
          "end": 72,
          "snippet": ".panel-shell {\n  width: min(560px, 100%);\n  min-width: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-card`",
          "start": 73,
          "end": 81,
          "snippet": ".login-card {\n  border-radius: 34px;\n  padding: 34px 34px 30px;\n  background: rgba(249, 250, 252, 0.96);\n  border: 1px solid var(--panel-border);\n  box-shadow: 0 24px 60px rgba(24, 32, 52, 0.1);\n  min-width: 0;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.back-link`",
          "start": 82,
          "end": 88,
          "snippet": ".back-link {\n  display: inline-flex;\n  margin-bottom: 18px;\n  color: var(--muted);\n  font-size: 0.92rem;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-row`",
          "start": 89,
          "end": 94,
          "snippet": ".brand-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-row strong`",
          "start": 95,
          "end": 99,
          "snippet": ".brand-row strong {\n  font-size: 2rem;\n  font-weight: 800;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-orb`",
          "start": 100,
          "end": 118,
          "snippet": ".brand-orb {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.85), transparent 24%),\n    conic-gradient(\n      from 10deg,\n      #ffd84d,\n      #ffb253,\n      #f6807c,\n      #d28cff,\n      #87a7ff,\n      #7bd6ff,\n      #ffd84d\n    );\n  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.18);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.85), transparent 24%), from 10deg, #ffd84d, #ffb253, #f6807c, #d28cff, #87a7ff, #7bd6ff, .card-header`",
          "start": 119,
          "end": 122,
          "snippet": ".card-header {\n  padding: 32px 0 18px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-header h1`",
          "start": 123,
          "end": 129,
          "snippet": ".card-header h1 {\n  margin: 0;\n  font-size: clamp(2.2rem, 4vw, 3rem);\n  line-height: 1.05;\n  letter-spacing: -0.04em;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-form`",
          "start": 130,
          "end": 134,
          "snippet": ".login-form {\n  display: grid;\n  gap: 22px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.field-group`",
          "start": 135,
          "end": 139,
          "snippet": ".field-group {\n  display: grid;\n  gap: 10px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.field-group > span:first-child`",
          "start": 140,
          "end": 144,
          "snippet": ".field-group > span:first-child {\n  font-size: 0.98rem;\n  color: #30313a;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.field-group input`",
          "start": 145,
          "end": 155,
          "snippet": ".field-group input {\n  width: 100%;\n  border: 1px solid rgba(117, 127, 154, 0.12);\n  border-radius: 14px;\n  padding: 19px 18px;\n  background: rgba(255, 255, 255, 0.68);\n  color: var(--text);\n  outline: none;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.field-group input::placeholder`",
          "start": 156,
          "end": 159,
          "snippet": ".field-group input::placeholder {\n  color: #8d8f96;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.field-group input:focus`",
          "start": 160,
          "end": 164,
          "snippet": ".field-group input:focus {\n  border-color: rgba(20, 119, 247, 0.4);\n  box-shadow: 0 0 0 4px rgba(20, 119, 247, 0.1);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.password-shell`",
          "start": 165,
          "end": 169,
          "snippet": ".password-shell {\n  position: relative;\n  display: block;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.password-shell input`",
          "start": 170,
          "end": 173,
          "snippet": ".password-shell input {\n  padding-right: 56px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.icon-button`",
          "start": 174,
          "end": 189,
          "snippet": ".icon-button {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  width: 28px;\n  height: 28px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #55585f;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.icon-button svg`",
          "start": 190,
          "end": 195,
          "snippet": ".icon-button svg {\n  width: 22px;\n  height: 22px;\n  fill: currentColor;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.support-row`",
          "start": 196,
          "end": 202,
          "snippet": ".support-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.remember-toggle`",
          "start": 203,
          "end": 210,
          "snippet": ".remember-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  color: #343740;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.remember-toggle input`",
          "start": 211,
          "end": 216,
          "snippet": ".remember-toggle input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.toggle-ui`",
          "start": 217,
          "end": 226,
          "snippet": ".toggle-ui {\n  position: relative;\n  width: 52px;\n  height: 30px;\n  border-radius: 999px;\n  background: #e7e8ee;\n  box-shadow: inset 0 0 0 1px rgba(68, 74, 87, 0.08);\n  transition: background 0.18s ease;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.toggle-ui::after`",
          "start": 227,
          "end": 239,
          "snippet": ".toggle-ui::after {\n  content: \"\";\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: 0 4px 10px rgba(31, 31, 35, 0.14);\n  transition: transform 0.18s ease;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.remember-toggle input:checked + .toggle-ui`",
          "start": 240,
          "end": 243,
          "snippet": ".remember-toggle input:checked + .toggle-ui {\n  background: rgba(20, 119, 247, 0.24);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.remember-toggle input:checked + .toggle-ui::after`",
          "start": 244,
          "end": 247,
          "snippet": ".remember-toggle input:checked + .toggle-ui::after {\n  transform: translateX(22px);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.support-link`",
          "start": 248,
          "end": 253,
          "snippet": ".support-link {\n  color: var(--blue);\n  font-weight: 500;\n}\n\n.primary-submit,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.primary-submit, .google-button`",
          "start": 254,
          "end": 261,
          "snippet": ".google-button {\n  border: 0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: transform 0.18s ease, opacity 0.18s ease;\n}\n\n.primary-submit:hover,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.primary-submit:hover, .google-button:hover`",
          "start": 262,
          "end": 265,
          "snippet": ".google-button:hover {\n  transform: translateY(-1px);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.primary-submit`",
          "start": 266,
          "end": 273,
          "snippet": ".primary-submit {\n  padding: 18px 20px;\n  background: var(--blue);\n  color: white;\n  font-size: 1.45rem;\n  font-weight: 700;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-message`",
          "start": 274,
          "end": 281,
          "snippet": ".login-message {\n  min-height: 24px;\n  margin: 18px 0 0;\n  color: var(--blue);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.divider`",
          "start": 282,
          "end": 287,
          "snippet": ".divider {\n  height: 1px;\n  margin: 14px 0 28px;\n  background: linear-gradient(90deg, transparent, rgba(116, 122, 135, 0.18), transparent);\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.google-button`",
          "start": 288,
          "end": 299,
          "snippet": ".google-button {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 18px 20px;\n  background: #232325;\n  color: white;\n  font-size: 1.15rem;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.google-mark`",
          "start": 300,
          "end": 310,
          "snippet": ".google-mark {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: white;\n  color: #ea4335;\n  font-weight: 800;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.signup-row`",
          "start": 311,
          "end": 318,
          "snippet": ".signup-row {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin: 28px 0 0;\n  color: #40424a;\n}\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.signup-row a`",
          "start": 319,
          "end": 325,
          "snippet": ".signup-row a {\n  color: var(--blue);\n  font-weight: 600;\n}\n\n/* 작은 화면에서는 회전과 2단 구성을 줄여서 입력 자체가 더 편하게 느껴지도록 바꾼다. */\n@media (max-width: 1120px) {",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-stage`",
          "start": 326,
          "end": 331,
          "snippet": "  .login-stage {\n    padding: 28px 20px;\n  }\n}\n\n@media (max-width: 720px) {",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-page`",
          "start": 332,
          "end": 335,
          "snippet": "  .login-page {\n    padding: 14px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-stage`",
          "start": 336,
          "end": 341,
          "snippet": "  .login-stage {\n    min-height: auto;\n    border-radius: 26px;\n    padding: 20px 16px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.panel-shell`",
          "start": 342,
          "end": 345,
          "snippet": "  .panel-shell {\n    width: 100%;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-card`",
          "start": 346,
          "end": 350,
          "snippet": "  .login-card {\n    padding: 24px 20px 22px;\n    border-radius: 24px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.brand-row strong`",
          "start": 351,
          "end": 354,
          "snippet": "  .brand-row strong {\n    font-size: 1.55rem;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-header`",
          "start": 355,
          "end": 358,
          "snippet": "  .card-header {\n    padding-top: 24px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.card-header h1`",
          "start": 359,
          "end": 364,
          "snippet": "  .card-header h1 {\n    font-size: clamp(1.9rem, 9vw, 2.35rem);\n  }\n\n  .field-group input,\n  .primary-submit,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.field-group input, .primary-submit, .google-button`",
          "start": 365,
          "end": 369,
          "snippet": "  .google-button {\n    width: 100%;\n  }\n\n  .support-row,",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.support-row, .signup-row`",
          "start": 370,
          "end": 374,
          "snippet": "  .signup-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.signup-row`",
          "start": 375,
          "end": 381,
          "snippet": "  .signup-row {\n    align-items: center;\n    text-align: center;\n  }\n}\n\n@media (max-width: 480px) {",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-page`",
          "start": 382,
          "end": 385,
          "snippet": "  .login-page {\n    padding: 10px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-stage`",
          "start": 386,
          "end": 389,
          "snippet": "  .login-stage {\n    padding: 14px 12px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.login-card`",
          "start": 390,
          "end": 393,
          "snippet": "  .login-card {\n    padding: 20px 16px;\n  }\n",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        },
        {
          "label": "선택자 `.support-row`",
          "start": 394,
          "end": 397,
          "snippet": "  .support-row {\n    gap: 12px;\n  }\n}",
          "description": "이 선택자에 해당하는 요소의 스타일 묶음이 시작된다."
        }
      ],
      "features": [
        {
          "label": "공통 변수와 기본 리셋",
          "start": 2,
          "end": 38,
          "snippet": ":root {\n  --bg: #eef1f5;\n  --panel: #f6f7fb;\n  --panel-border: rgba(117, 127, 154, 0.12);\n  --text: #202126;\n  --muted: #6e7179;\n  --blue: #1477f7;\n  --dark: #1f1f23;\n  --shadow: 0 32px 80px rgba(33, 39, 53, 0.16);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background:\n    radial-gradient(circle at top right, rgba(20, 119, 247, 0.08), transparent 28%),\n    linear-gradient(180deg, #edf0f4 0%, #e9edf3 100%);\n  color: var(--text);\n  overflow-x: hidden;\n}\n\nbutton,\ninput {\n  font: inherit;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.login-page {",
          "description": "로그인 페이지 색상 변수와 기본 body/input/a 스타일을 정리한다."
        },
        {
          "label": "로그인 레이아웃과 카드",
          "start": 38,
          "end": 119,
          "snippet": ".login-page {\n  min-height: 100vh;\n  padding: 28px;\n}\n\n/* 장식 이미지를 덜어내고 로그인 카드 하나에 시선을 모으는 단일 스테이지 구조다. */\n.login-stage {\n  min-height: calc(100vh - 56px);\n  display: grid;\n  place-items: center;\n  border-radius: 42px;\n  padding: 36px 24px;\n  background:\n    radial-gradient(circle at top right, rgba(20, 119, 247, 0.1), transparent 28%),\n    linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(245, 246, 250, 0.92));\n  box-shadow: var(--shadow);\n}\n\n.login-stage > * {\n  min-width: 0;\n}\n\n.form-stage {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  padding: 0;\n  min-width: 0;\n}\n\n.panel-shell {\n  width: min(560px, 100%);\n  min-width: 0;\n}\n\n.login-card {\n  border-radius: 34px;\n  padding: 34px 34px 30px;\n  background: rgba(249, 250, 252, 0.96);\n  border: 1px solid var(--panel-border);\n  box-shadow: 0 24px 60px rgba(24, 32, 52, 0.1);\n  min-width: 0;\n}\n\n.back-link {\n  display: inline-flex;\n  margin-bottom: 18px;\n  color: var(--muted);\n  font-size: 0.92rem;\n}\n\n.brand-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.brand-row strong {\n  font-size: 2rem;\n  font-weight: 800;\n}\n\n.brand-orb {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.85), transparent 24%),\n    conic-gradient(\n      from 10deg,\n      #ffd84d,\n      #ffb253,\n      #f6807c,\n      #d28cff,\n      #87a7ff,\n      #7bd6ff,\n      #ffd84d\n    );\n  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.18);\n}\n\n.card-header {",
          "description": "페이지 여백, 중앙 정렬 무대, 로그인 카드, 브랜드 표시를 꾸민다."
        },
        {
          "label": "폼 입력과 토글",
          "start": 119,
          "end": 248,
          "snippet": ".card-header {\n  padding: 32px 0 18px;\n}\n\n.card-header h1 {\n  margin: 0;\n  font-size: clamp(2.2rem, 4vw, 3rem);\n  line-height: 1.05;\n  letter-spacing: -0.04em;\n}\n\n.login-form {\n  display: grid;\n  gap: 22px;\n}\n\n.field-group {\n  display: grid;\n  gap: 10px;\n}\n\n.field-group > span:first-child {\n  font-size: 0.98rem;\n  color: #30313a;\n}\n\n.field-group input {\n  width: 100%;\n  border: 1px solid rgba(117, 127, 154, 0.12);\n  border-radius: 14px;\n  padding: 19px 18px;\n  background: rgba(255, 255, 255, 0.68);\n  color: var(--text);\n  outline: none;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n\n.field-group input::placeholder {\n  color: #8d8f96;\n}\n\n.field-group input:focus {\n  border-color: rgba(20, 119, 247, 0.4);\n  box-shadow: 0 0 0 4px rgba(20, 119, 247, 0.1);\n}\n\n.password-shell {\n  position: relative;\n  display: block;\n}\n\n.password-shell input {\n  padding-right: 56px;\n}\n\n.icon-button {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  width: 28px;\n  height: 28px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #55585f;\n}\n\n.icon-button svg {\n  width: 22px;\n  height: 22px;\n  fill: currentColor;\n}\n\n.support-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.remember-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  color: #343740;\n}\n\n.remember-toggle input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.toggle-ui {\n  position: relative;\n  width: 52px;\n  height: 30px;\n  border-radius: 999px;\n  background: #e7e8ee;\n  box-shadow: inset 0 0 0 1px rgba(68, 74, 87, 0.08);\n  transition: background 0.18s ease;\n}\n\n.toggle-ui::after {\n  content: \"\";\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: 0 4px 10px rgba(31, 31, 35, 0.14);\n  transition: transform 0.18s ease;\n}\n\n.remember-toggle input:checked + .toggle-ui {\n  background: rgba(20, 119, 247, 0.24);\n}\n\n.remember-toggle input:checked + .toggle-ui::after {\n  transform: translateX(22px);\n}\n\n.support-link {",
          "description": "입력창, 포커스, 비밀번호 토글, 로그인 상태 유지 스위치를 정의한다."
        },
        {
          "label": "버튼과 메시지",
          "start": 248,
          "end": 325,
          "snippet": ".support-link {\n  color: var(--blue);\n  font-weight: 500;\n}\n\n.primary-submit,\n.google-button {\n  border: 0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: transform 0.18s ease, opacity 0.18s ease;\n}\n\n.primary-submit:hover,\n.google-button:hover {\n  transform: translateY(-1px);\n}\n\n.primary-submit {\n  padding: 18px 20px;\n  background: var(--blue);\n  color: white;\n  font-size: 1.45rem;\n  font-weight: 700;\n}\n\n.login-message {\n  min-height: 24px;\n  margin: 18px 0 0;\n  color: var(--blue);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n\n.divider {\n  height: 1px;\n  margin: 14px 0 28px;\n  background: linear-gradient(90deg, transparent, rgba(116, 122, 135, 0.18), transparent);\n}\n\n.google-button {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 18px 20px;\n  background: #232325;\n  color: white;\n  font-size: 1.15rem;\n}\n\n.google-mark {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: white;\n  color: #ea4335;\n  font-weight: 800;\n}\n\n.signup-row {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin: 28px 0 0;\n  color: #40424a;\n}\n\n.signup-row a {\n  color: var(--blue);\n  font-weight: 600;\n}\n\n/* 작은 화면에서는 회전과 2단 구성을 줄여서 입력 자체가 더 편하게 느껴지도록 바꾼다. */\n@media (max-width: 1120px) {",
          "description": "로그인 버튼, 메시지, 구분선, 구글 버튼, 회원가입 링크를 꾸민다."
        },
        {
          "label": "반응형 규칙",
          "start": 325,
          "end": 397,
          "snippet": "@media (max-width: 1120px) {\n  .login-stage {\n    padding: 28px 20px;\n  }\n}\n\n@media (max-width: 720px) {\n  .login-page {\n    padding: 14px;\n  }\n\n  .login-stage {\n    min-height: auto;\n    border-radius: 26px;\n    padding: 20px 16px;\n  }\n\n  .panel-shell {\n    width: 100%;\n  }\n\n  .login-card {\n    padding: 24px 20px 22px;\n    border-radius: 24px;\n  }\n\n  .brand-row strong {\n    font-size: 1.55rem;\n  }\n\n  .card-header {\n    padding-top: 24px;\n  }\n\n  .card-header h1 {\n    font-size: clamp(1.9rem, 9vw, 2.35rem);\n  }\n\n  .field-group input,\n  .primary-submit,\n  .google-button {\n    width: 100%;\n  }\n\n  .support-row,\n  .signup-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .signup-row {\n    align-items: center;\n    text-align: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .login-page {\n    padding: 10px;\n  }\n\n  .login-stage {\n    padding: 14px 12px;\n  }\n\n  .login-card {\n    padding: 20px 16px;\n  }\n\n  .support-row {\n    gap: 12px;\n  }\n}",
          "description": "모바일에서 카드 여백과 입력 배치를 더 단순하게 바꾼다."
        }
      ]
    },
    {
      "id": "login.js",
      "path": "login.js",
      "title": "login.js",
      "kind": "js",
      "role": "로그인 데모 페이지의 간단한 JavaScript 파일이다. 실제 인증 대신 안내 메시지를 보여 주고, 비밀번호 보기/숨기기만 처리한다.",
      "whenUsed": "`login.html`이 열린 뒤 `defer`로 실행된다.",
      "indentGuide": "JavaScript는 함수, 조건문, 반복문, 객체, 배열 안으로 들어갈수록 들여쓰기가 깊어진다. 즉 들여쓰기는 '지금 이 줄이 어느 블록 안에 속하는가'를 보여 주는 표시다.",
      "connections": [
        "JS가 선택하는 HTML 요소: `#loginForm`, `#loginMessage`, `#passwordInput`, `#togglePasswordButton`, `#googleButton`.",
        "HTML ↔ CSS 연결 보조: 이 파일은 시각 스타일을 바꾸지 않고, `login.css`로 꾸며진 요소에 메시지와 클릭 반응만 준다.",
        "asset 참조 여부: 이미지 자산을 사용하지 않는다.",
        "상대경로 사용: 페이지 이동을 직접 처리하지는 않지만 `login.html` 안에서 상대경로로 연결되어 실행된다."
      ],
      "badges": [
        "동작",
        "이벤트",
        "데이터"
      ],
      "docPath": "../docs/per-file-deep-explanations/06-login-js.md",
      "sourcePath": "../login.js",
      "lines": [
        {
          "lineNumber": 1,
          "code": "const loginForm = document.querySelector(\"#loginForm\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 2,
          "code": "const loginMessage = document.querySelector(\"#loginMessage\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 3,
          "code": "const passwordInput = document.querySelector(\"#passwordInput\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 4,
          "code": "const togglePasswordButton = document.querySelector(\"#togglePasswordButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 5,
          "code": "const googleButton = document.querySelector(\"#googleButton\");",
          "explanation": "DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 7,
          "code": "// 실제 인증 대신, 현재 단계가 UI 데모라는 점을 같은 위치에 안내한다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 8,
          "code": "function showLoginMessage(message) {",
          "explanation": "`showLoginMessage()` 함수를 선언하는 줄이다. 로그인 페이지 안내 메시지를 지정한 문구로 바꾼다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 9,
          "code": "  loginMessage.textContent = message;",
          "explanation": "텍스트만 안전하게 바꿔 넣는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 10,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 12,
          "code": "// 비밀번호 칸의 type만 바꿔 가장 기본적인 보기/숨기기 흐름을 만든다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 13,
          "code": "function togglePasswordVisibility() {",
          "explanation": "`togglePasswordVisibility()` 함수를 선언하는 줄이다. 비밀번호 입력칸의 표시 상태를 토글한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 14,
          "code": "  const isPassword = passwordInput.type === \"password\";",
          "explanation": "상수 또는 상태 변수를 선언하는 줄이다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 15,
          "code": "  passwordInput.type = isPassword ? \"text\" : \"password\";",
          "explanation": "`passwordInput.type = isPassword ? \"text\"` 속성에 값을 넣는 줄이다. 현재 값은 `\"password\";`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다."
        },
        {
          "lineNumber": 16,
          "code": "  togglePasswordButton.setAttribute(",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 17,
          "code": "    \"aria-label\",",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 18,
          "code": "    isPassword ? \"비밀번호 숨기기\" : \"비밀번호 보기\"",
          "explanation": "`isPassword ? \"비밀번호 숨기기\"` 속성에 값을 넣는 줄이다. 현재 값은 `\"비밀번호 보기\"`로 설정된다.",
          "indentation": "객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다."
        },
        {
          "lineNumber": 19,
          "code": "  );",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 20,
          "code": "}",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 22,
          "code": "// 지금 단계는 API 제외 범위라서 제출 시 실제 로그인 대신 안내 문구만 보여 준다.",
          "explanation": "JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 23,
          "code": "loginForm.addEventListener(\"submit\", (event) => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 24,
          "code": "  event.preventDefault();",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 26,
          "code": "  if (!loginForm.reportValidity()) {",
          "explanation": "조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 27,
          "code": "    return;",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 28,
          "code": "  }",
          "explanation": "현재 객체, 배열, 또는 블록을 닫는 줄이다.",
          "indentation": "현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다."
        },
        {
          "lineNumber": 30,
          "code": "  showLoginMessage(",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 31,
          "code": "    \"지금은 로그인 UI만 구현된 상태입니다. 실제 인증 기능은 아직 연결하지 않았습니다.\"",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 32,
          "code": "  );",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 33,
          "code": "});",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 35,
          "code": "togglePasswordButton.addEventListener(\"click\", togglePasswordVisibility);",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 37,
          "code": "googleButton.addEventListener(\"click\", () => {",
          "explanation": "특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        },
        {
          "lineNumber": 38,
          "code": "  showLoginMessage(",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 39,
          "code": "    \"구글 로그인 버튼도 현재는 디자인 데모 단계입니다. 실제 OAuth 연결은 나중에 붙이면 됩니다.\"",
          "explanation": "문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다."
        },
        {
          "lineNumber": 40,
          "code": "  );",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다."
        },
        {
          "lineNumber": 41,
          "code": "});",
          "explanation": "`togglePasswordVisibility()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.",
          "indentation": "최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다."
        }
      ],
      "blocks": [
        {
          "label": "함수 `showLoginMessage()`",
          "start": 8,
          "end": 12,
          "snippet": "function showLoginMessage(message) {\n  loginMessage.textContent = message;\n}\n\n// 비밀번호 칸의 type만 바꿔 가장 기본적인 보기/숨기기 흐름을 만든다.",
          "description": "로그인 페이지 안내 메시지를 지정한 문구로 바꾼다."
        },
        {
          "label": "함수 `togglePasswordVisibility()`",
          "start": 13,
          "end": 41,
          "snippet": "function togglePasswordVisibility() {\n  const isPassword = passwordInput.type === \"password\";\n  passwordInput.type = isPassword ? \"text\" : \"password\";\n  togglePasswordButton.setAttribute(\n    \"aria-label\",\n    isPassword ? \"비밀번호 숨기기\" : \"비밀번호 보기\"\n  );\n}\n\n// 지금 단계는 API 제외 범위라서 제출 시 실제 로그인 대신 안내 문구만 보여 준다.\nloginForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  if (!loginForm.reportValidity()) {\n    return;\n  }\n\n  showLoginMessage(\n    \"지금은 로그인 UI만 구현된 상태입니다. 실제 인증 기능은 아직 연결하지 않았습니다.\"\n  );\n});\n\ntogglePasswordButton.addEventListener(\"click\", togglePasswordVisibility);\n\ngoogleButton.addEventListener(\"click\", () => {\n  showLoginMessage(\n    \"구글 로그인 버튼도 현재는 디자인 데모 단계입니다. 실제 OAuth 연결은 나중에 붙이면 됩니다.\"\n  );\n});",
          "description": "비밀번호 입력칸의 표시 상태를 토글한다."
        }
      ],
      "features": [
        {
          "label": "DOM 참조 준비",
          "start": 1,
          "end": 8,
          "snippet": "const loginForm = document.querySelector(\"#loginForm\");\nconst loginMessage = document.querySelector(\"#loginMessage\");\nconst passwordInput = document.querySelector(\"#passwordInput\");\nconst togglePasswordButton = document.querySelector(\"#togglePasswordButton\");\nconst googleButton = document.querySelector(\"#googleButton\");\n\n// 실제 인증 대신, 현재 단계가 UI 데모라는 점을 같은 위치에 안내한다.\nfunction showLoginMessage(message) {",
          "description": "로그인 페이지 요소를 변수로 잡아 둔다."
        },
        {
          "label": "안내 메시지 함수",
          "start": 8,
          "end": 13,
          "snippet": "function showLoginMessage(message) {\n  loginMessage.textContent = message;\n}\n\n// 비밀번호 칸의 type만 바꿔 가장 기본적인 보기/숨기기 흐름을 만든다.\nfunction togglePasswordVisibility() {",
          "description": "같은 위치에 메시지를 다시 쓰기 위한 작은 도우미 함수다."
        },
        {
          "label": "비밀번호 보기/숨기기",
          "start": 13,
          "end": 23,
          "snippet": "function togglePasswordVisibility() {\n  const isPassword = passwordInput.type === \"password\";\n  passwordInput.type = isPassword ? \"text\" : \"password\";\n  togglePasswordButton.setAttribute(\n    \"aria-label\",\n    isPassword ? \"비밀번호 숨기기\" : \"비밀번호 보기\"\n  );\n}\n\n// 지금 단계는 API 제외 범위라서 제출 시 실제 로그인 대신 안내 문구만 보여 준다.\nloginForm.addEventListener(\"submit\", (event) => {",
          "description": "입력 type을 바꿔 아이콘 버튼 반응을 구현한다."
        },
        {
          "label": "폼 제출과 구글 버튼 반응",
          "start": 23,
          "end": 41,
          "snippet": "loginForm.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  if (!loginForm.reportValidity()) {\n    return;\n  }\n\n  showLoginMessage(\n    \"지금은 로그인 UI만 구현된 상태입니다. 실제 인증 기능은 아직 연결하지 않았습니다.\"\n  );\n});\n\ntogglePasswordButton.addEventListener(\"click\", togglePasswordVisibility);\n\ngoogleButton.addEventListener(\"click\", () => {\n  showLoginMessage(\n    \"구글 로그인 버튼도 현재는 디자인 데모 단계입니다. 실제 OAuth 연결은 나중에 붙이면 됩니다.\"\n  );\n});",
          "description": "실제 인증 대신 데모 메시지를 보여 주는 이벤트 구간이다."
        }
      ]
    },
    {
      "id": "README.md",
      "path": "README.md",
      "title": "README.md",
      "kind": "md",
      "role": "저장소 첫 화면에서 프로젝트를 소개하는 문서다. 기능, 파일 구성, 실행 방법, 배포 주소를 짧게 요약한다.",
      "whenUsed": "GitHub 저장소를 열었을 때 가장 먼저 읽히는 안내 문서다.",
      "indentGuide": "Markdown은 제목은 바깥에 두고, 목록이나 코드 블록처럼 종속된 내용은 필요할 때만 안쪽으로 들여쓴다.",
      "connections": [
        "이 파일은 실행 코드가 아니라 설명 문서라서 HTML/CSS/JS를 직접 로드하지 않는다.",
        "대신 실제 소스 파일을 설명하거나 발표용 답변으로 재가공하는 연결 역할을 한다.",
        "상대경로 사용: 저장소 내부 문서 위치 기준으로 관리되며, GitHub에서 그대로 읽히는 정적 Markdown 파일이다."
      ],
      "badges": [
        "문서",
        "발표",
        "설명"
      ],
      "docPath": "../docs/per-file-deep-explanations/07-readme-md.md",
      "sourcePath": "../README.md",
      "lines": [
        {
          "lineNumber": 1,
          "code": "# Capstone MOIM Archive",
          "explanation": "마크다운 제목 줄이다. 레벨 1 제목으로 새 주제를 연다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 3,
          "code": "캡스톤디자인 팀 프로젝트용 모임 웹사이트입니다.",
          "explanation": "설명 문장 한 줄이다. 해당 섹션의 내용을 자연어로 풀어 쓴다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 5,
          "code": "이 프로젝트는 `HTML`, `CSS`, `JavaScript`만 사용해서 만들었습니다.",
          "explanation": "설명 문장 한 줄이다. 해당 섹션의 내용을 자연어로 풀어 쓴다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 6,
          "code": "복잡한 서버 기능 없이, 화면 구조와 기본 동작을 먼저 구현한 웹 프로토타입입니다.",
          "explanation": "설명 문장 한 줄이다. 해당 섹션의 내용을 자연어로 풀어 쓴다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 8,
          "code": "## 할 수 있는 것",
          "explanation": "마크다운 제목 줄이다. 레벨 2 제목으로 새 주제를 연다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 10,
          "code": "- 모임 목록 보기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 11,
          "code": "- 키워드, 카테고리, 지역, 상태로 모임 검색하기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 12,
          "code": "- 모임 상세 정보 열어보기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 13,
          "code": "- 모임 참여 상태 확인하기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 14,
          "code": "- 새 모임 만들기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 15,
          "code": "- 내가 만든 모임 수정/삭제하기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 16,
          "code": "- 브라우저 저장으로 새로고침 후에도 데이터 유지하기",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 18,
          "code": "## 파일 설명",
          "explanation": "마크다운 제목 줄이다. 레벨 2 제목으로 새 주제를 연다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 20,
          "code": "- `index.html`: 메인 페이지",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 21,
          "code": "- `styles.css`: 메인 페이지 스타일",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 22,
          "code": "- `script.js`: 모임 목록, 검색, 추가, 수정, 삭제 동작",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 23,
          "code": "- `login.html`: 로그인 UI 화면",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 24,
          "code": "- `login.css`: 로그인 화면 스타일",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 25,
          "code": "- `login.js`: 로그인 화면 간단 동작",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 26,
          "code": "- `docs/web-implementation-guide.md`: 구현 과정을 쉽게 정리한 문서",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 28,
          "code": "## 실행 방법",
          "explanation": "마크다운 제목 줄이다. 레벨 2 제목으로 새 주제를 연다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 30,
          "code": "1. 이 저장소를 내려받습니다.",
          "explanation": "순서가 있는 목록 항목 줄이다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 31,
          "code": "2. `index.html`을 브라우저에서 엽니다.",
          "explanation": "순서가 있는 목록 항목 줄이다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 32,
          "code": "3. 바로 화면과 기능을 확인할 수 있습니다.",
          "explanation": "순서가 있는 목록 항목 줄이다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 34,
          "code": "## 배포 주소",
          "explanation": "마크다운 제목 줄이다. 레벨 2 제목으로 새 주제를 연다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 36,
          "code": "GitHub Pages 연결 후 아래 주소에서 볼 수 있습니다.",
          "explanation": "설명 문장 한 줄이다. 해당 섹션의 내용을 자연어로 풀어 쓴다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 38,
          "code": "- `https://cys123431-ship-it.github.io/capstone-moim-archive-20260312/`",
          "explanation": "목록 항목 한 줄이다. 핵심 포인트를 짧게 나열한다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        },
        {
          "lineNumber": 40,
          "code": "현재 배포는 `main` 브랜치의 루트 폴더를 그대로 올리는 방식으로 연결되어 있습니다.",
          "explanation": "설명 문장 한 줄이다. 해당 섹션의 내용을 자연어로 풀어 쓴다.",
          "indentation": "제목이나 일반 문단처럼 바깥 수준 내용이다."
        }
      ],
      "blocks": [
        {
          "label": "제목 레벨 1: Capstone MOIM Archive",
          "start": 1,
          "end": 7,
          "snippet": "# Capstone MOIM Archive\n\n캡스톤디자인 팀 프로젝트용 모임 웹사이트입니다.\n\n이 프로젝트는 `HTML`, `CSS`, `JavaScript`만 사용해서 만들었습니다.\n복잡한 서버 기능 없이, 화면 구조와 기본 동작을 먼저 구현한 웹 프로토타입입니다.\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 할 수 있는 것",
          "start": 8,
          "end": 17,
          "snippet": "## 할 수 있는 것\n\n- 모임 목록 보기\n- 키워드, 카테고리, 지역, 상태로 모임 검색하기\n- 모임 상세 정보 열어보기\n- 모임 참여 상태 확인하기\n- 새 모임 만들기\n- 내가 만든 모임 수정/삭제하기\n- 브라우저 저장으로 새로고침 후에도 데이터 유지하기\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 파일 설명",
          "start": 18,
          "end": 27,
          "snippet": "## 파일 설명\n\n- `index.html`: 메인 페이지\n- `styles.css`: 메인 페이지 스타일\n- `script.js`: 모임 목록, 검색, 추가, 수정, 삭제 동작\n- `login.html`: 로그인 UI 화면\n- `login.css`: 로그인 화면 스타일\n- `login.js`: 로그인 화면 간단 동작\n- `docs/web-implementation-guide.md`: 구현 과정을 쉽게 정리한 문서\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 실행 방법",
          "start": 28,
          "end": 33,
          "snippet": "## 실행 방법\n\n1. 이 저장소를 내려받습니다.\n2. `index.html`을 브라우저에서 엽니다.\n3. 바로 화면과 기능을 확인할 수 있습니다.\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 배포 주소",
          "start": 34,
          "end": 40,
          "snippet": "## 배포 주소\n\nGitHub Pages 연결 후 아래 주소에서 볼 수 있습니다.\n\n- `https://cys123431-ship-it.github.io/capstone-moim-archive-20260312/`\n\n현재 배포는 `main` 브랜치의 루트 폴더를 그대로 올리는 방식으로 연결되어 있습니다.",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        }
      ],
      "features": [
        {
          "label": "제목 레벨 1: Capstone MOIM Archive",
          "start": 1,
          "end": 7,
          "snippet": "# Capstone MOIM Archive\n\n캡스톤디자인 팀 프로젝트용 모임 웹사이트입니다.\n\n이 프로젝트는 `HTML`, `CSS`, `JavaScript`만 사용해서 만들었습니다.\n복잡한 서버 기능 없이, 화면 구조와 기본 동작을 먼저 구현한 웹 프로토타입입니다.\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 할 수 있는 것",
          "start": 8,
          "end": 17,
          "snippet": "## 할 수 있는 것\n\n- 모임 목록 보기\n- 키워드, 카테고리, 지역, 상태로 모임 검색하기\n- 모임 상세 정보 열어보기\n- 모임 참여 상태 확인하기\n- 새 모임 만들기\n- 내가 만든 모임 수정/삭제하기\n- 브라우저 저장으로 새로고침 후에도 데이터 유지하기\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 파일 설명",
          "start": 18,
          "end": 27,
          "snippet": "## 파일 설명\n\n- `index.html`: 메인 페이지\n- `styles.css`: 메인 페이지 스타일\n- `script.js`: 모임 목록, 검색, 추가, 수정, 삭제 동작\n- `login.html`: 로그인 UI 화면\n- `login.css`: 로그인 화면 스타일\n- `login.js`: 로그인 화면 간단 동작\n- `docs/web-implementation-guide.md`: 구현 과정을 쉽게 정리한 문서\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 실행 방법",
          "start": 28,
          "end": 33,
          "snippet": "## 실행 방법\n\n1. 이 저장소를 내려받습니다.\n2. `index.html`을 브라우저에서 엽니다.\n3. 바로 화면과 기능을 확인할 수 있습니다.\n",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        },
        {
          "label": "제목 레벨 2: 배포 주소",
          "start": 34,
          "end": 40,
          "snippet": "## 배포 주소\n\nGitHub Pages 연결 후 아래 주소에서 볼 수 있습니다.\n\n- `https://cys123431-ship-it.github.io/capstone-moim-archive-20260312/`\n\n현재 배포는 `main` 브랜치의 루트 폴더를 그대로 올리는 방식으로 연결되어 있습니다.",
          "description": "문서의 새 주제 또는 하위 주제를 여는 제목 줄이다."
        }
      ]
    },
    {
      "id": ".nojekyll",
      "path": ".nojekyll",
      "title": ".nojekyll",
      "kind": "empty",
      "role": "GitHub Pages가 저장소 파일을 Jekyll 처리 없이 그대로 배포하도록 알려 주는 빈 파일이다.",
      "whenUsed": "GitHub Pages 배포 시 정적 파일을 그대로 서빙하고 싶을 때 의미가 생긴다.",
      "indentGuide": "빈 파일이라 들여쓰기 구조는 없다.",
      "connections": [
        "HTML/CSS/JS 연결: 직접 연결은 없다.",
        "배포 연결: GitHub Pages가 Jekyll을 거치지 않고 정적 파일을 그대로 배포하게 만드는 메타 파일이다.",
        "상대경로 사용: 경로가 아니라 파일 존재 자체가 의미를 가진다."
      ],
      "badges": [
        "배포",
        "설정",
        "메타"
      ],
      "docPath": "../docs/per-file-deep-explanations/11-dot-nojekyll.md",
      "sourcePath": "../.nojekyll",
      "lines": [],
      "blocks": [],
      "features": []
    }
  ]
};
