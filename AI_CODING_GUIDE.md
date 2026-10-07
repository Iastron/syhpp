# AI_CODING_GUIDE.md

## 목적

이 문서는 `Iastron/syhpp` 저장소의 현재 버거킹 로그인 UI 코드를 기준으로, 이후 다른 브랜드의 로그인 UI를 제작할 때 **기존 HTML/CSS 작성 방식과 구조를 최대한 유지하도록 AI가 따라야 할 코딩 기준**을 정의한다.

> 중요: 이 문서는 새로운 코딩 스타일을 만들기 위한 문서가 아니다.  
> 현재 작성되어 있는 버거킹 코드를 분석하여, 이후 AI가 사용자의 기존 코딩 습관과 구조를 임의로 바꾸지 않도록 하기 위한 기준이다.

---

## 1. 기준 파일

현재 기준이 되는 파일은 다음과 같다.

```text
syhpp/
├─ burgerking/
│  ├─ login.html
│  └─ img/
│     ├─ back_icon.svg
│     ├─ eye_icon.svg
│     ├─ Checkbox_Active.svg
│     ├─ Checkbox_disabled.svg
│     ├─ Kakao_logo_icon.svg
│     ├─ Naver_logo_icon.svg
│     ├─ Apple_logo_icon.svg
│     └─ Samsung_logo_icon.svg
│
├─ css/
│  └─ default.css
│
└─ font/
   └─ css/
      ├─ pretendardvariable.css
      ├─ bkbulmatpro.css
      └─ sdgothicneo.css
```

### 현재 구조의 특징

- `default.css`는 공통 Reset과 기본 환경을 담당한다.
- 브랜드별 화면 스타일은 현재 `burgerking/login.html` 내부의 `<style>`에 작성되어 있다.
- 이미지 파일은 브랜드 폴더 내부의 `img/`에 둔다.
- 폰트는 공통 `font/` 폴더에서 불러온다.
- 현재 버거킹 폴더에는 `login.html`이 있으며, 별도의 `login.css`나 `login.js` 파일은 확인되지 않았다.
- 따라서 AI는 사용자가 요청하지 않는 한 CSS/JS 파일을 임의로 분리하지 않는다.

---

# 2. HTML 구조 기준

## 기본 구조

현재 버거킹 로그인 화면은 다음 구조를 사용한다.

```html
<div id="wrap">
    <header>
        <h1>로그인</h1>
        <button class="prev_btn">
            <span class="sr-only">이전버튼</span>
        </button>
    </header>

    <main>
        <h2 class="title">
            <span>안녕하세요:)</span>
            <span>버거킹입니다.</span>
        </h2>

        <form action="">
            <fieldset>
                <legend class="sr-only">로그인화면</legend>

                ...
            </fieldset>
        </form>

        <div class="login_link">
            ...
        </div>

        <div class="sns_login">
            ...
        </div>
    </main>
</div>
```

새로운 브랜드 화면에서도 가능한 경우 이 구조를 기본으로 유지한다.

## 시맨틱 HTML 원칙

HTML은 화면의 모양보다 콘텐츠의 의미와 역할을 기준으로 작성한다.

### 사용 기준

| 요소 | 사용 목적 |
|---|---|
| `header` | 화면 상단 영역 |
| `main` | 해당 페이지의 주요 콘텐츠 |
| `h1` | 페이지 제목 |
| `h2` | 주요 콘텐츠 제목 |
| `form` | 사용자 입력을 받는 영역 |
| `fieldset` | 로그인 입력 요소를 하나의 그룹으로 묶음 |
| `legend` | 해당 입력 그룹의 의미 설명 |
| `label` | 입력 요소의 이름 또는 설명 |
| `input` | 아이디, 비밀번호, 체크박스 등 사용자 입력 |
| `button` | 로그인, 이전, 비밀번호 보기 등 동작 |
| `a` | 다른 페이지로 이동하는 링크 |
| `div` | 별도의 의미가 없는 레이아웃 그룹 |

### AI가 지켜야 할 것

- 단순히 스타일을 적용하기 위해 `div`로 모든 요소를 감싸지 않는다.
- 클릭해서 동작하는 요소는 가능한 경우 `button`을 사용한다.
- 다른 페이지로 이동하는 요소는 `a`를 사용한다.
- 사용자가 입력하는 값은 `input`을 사용한다.
- 제목 역할의 콘텐츠는 적절한 heading 요소를 사용한다.
- 기존의 시맨틱 구조를 유지하면서 브랜드 콘텐츠만 교체한다.

---

# 3. 현재 클래스 네이밍 기준

현재 버거킹 코드의 클래스명은 **역할 중심**으로 작성되어 있다.

예:

```text
.prev_btn
.title
.input_box
.rela
.pw_btn
.login_option
.login_btn
.login_link
.sns_login
.sns_list
.check
.sr-only
```

### 네이밍 원칙

클래스 이름은 디자인 모양보다 **콘텐츠 또는 기능의 역할**을 나타내도록 한다.

좋은 예:

```css
.login_btn
.login_option
.input_box
.sns_login
```

피해야 할 예:

```css
.red_button
.big_box
.left_text
.round_box
```

새 브랜드에서도 기존 역할 기반 네이밍을 우선적으로 유지한다.

---

# 4. CSS 구조 기준

## 공통 CSS

`css/default.css`는 프로젝트 전체에 적용되는 Reset 역할을 한다.

주요 내용:

- `box-sizing: border-box`
- 전체 margin/padding 초기화
- body 기본 설정
- heading/p의 줄바꿈 설정
- list 초기화
- link 기본 스타일 초기화
- 이미지 기본 설정
- form 요소 기본 스타일 초기화
- `appearance` 초기화
- focus-visible 처리
- `.sr-only`
- `prefers-reduced-motion`
- `hidden` 처리

새 화면을 만들 때 이미 `default.css`에서 처리하는 내용을 다시 작성하지 않는다.

예를 들어:

```css
* {
    margin: 0;
    padding: 0;
}
```

와 같은 Reset을 브랜드별 CSS에서 다시 작성하지 않는다.

---

# 5. CSS 변수 사용

현재 버거킹 코드는 `:root`에서 주요 디자인 값을 변수로 관리한다.

```css
:root {
    --font: "Sandoll GothicNeoRound", sans-serif;
    --font-pre: "Pretendard Variable", sans-serif;
    --font-BKR: "BKR", sans-serif;

    --primary: #512314;
    --focus: #D62302;
    --baseBorder: #D9CFC6;
    --inputBg: #FFFCF9;
    --errorColor: #C54734;
    --placeholder: #EBE6E2;
    --text: #766053;
    --bg: #F4EBDC;
    --button: #E9DDCD;
}
```

## 다른 브랜드를 만들 때

브랜드가 변경되면 우선 `:root`의 브랜드 관련 값을 검토한다.

예:

```css
:root {
    --primary: 브랜드 메인 컬러;
    --focus: 포커스 컬러;
    --baseBorder: 입력창 테두리;
    --inputBg: 입력창 배경;
    --placeholder: placeholder 컬러;
    --text: 보조 텍스트 컬러;
    --bg: 페이지 배경;
    --button: 버튼 컬러;
}
```

단, 실제 브랜드의 컬러를 근거 없이 추측하지 않는다.

디자인 시안이나 사용자가 제공한 색상값이 있으면 그것을 우선한다.

---

# 6. 단위 사용 기준

현재 버거킹 코드는 다음과 같은 방식을 사용한다.

```css
html {
    font-size: 62.5%;
}
```

그리고 주요 크기에 `rem`을 사용한다.

예:

```css
body {
    font-size: 1.6rem;
}

h1 {
    font-size: 2.0rem;
}
```

새 화면을 만들 때 특별한 이유가 없다면 기존의 `rem` 사용 방식을 유지한다.

단, 사용자가 특정 디자인 시안의 정확한 픽셀 값을 요구하는 경우에는 해당 시안의 값을 기준으로 판단한다.

---

# 7. 화면 영역 구조

현재 버거킹 화면은 `#wrap`을 중심으로 구성한다.

```css
#wrap {
    width: 100%;
    max-width: 1024px;
    min-width: 360px;
    min-height: 100dvh;
    margin: 0 auto;
    background-color: var(--bg);
}
```

새 브랜드에서도 전체 페이지를 관리하는 최상위 래퍼가 필요하다면 기존의 `#wrap` 구조를 우선 유지한다.

AI가 임의로 다음과 같이 변경하지 않는다.

```html
<div class="container">
```

또는

```html
<div id="app">
```

사용자가 구조 변경을 요청한 경우에만 변경한다.

---

# 8. Header 기준

현재 header는 다음과 같이 작성되어 있다.

```css
header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
}
```

페이지 제목은 중앙 정렬하고, 이전 버튼은 absolute로 배치한다.

```css
.prev_btn {
    position: absolute;
    left: 0;
    width: 48px;
    height: 48px;
}
```

따라서 다른 브랜드에서도 상단에 동일한 형태의 이전 버튼이 있다면 이 구조를 우선 사용한다.

---

# 9. 로그인 입력 영역

현재 입력 영역은 다음과 같은 구조를 사용한다.

```html
<label for="email" class="email">
    이메일 로그인
</label>

<div class="input_box">
    <input type="email" id="email" name="email">
</div>

<div class="input_box rela">
    <input type="password" name="password">
    <button type="button" class="pw_btn">
        <span class="sr-only">비밀번호 보기</span>
    </button>
</div>
```

### 유지해야 할 특징

- `label`과 `input`의 관계를 유지한다.
- 이메일은 `type="email"`을 사용한다.
- 비밀번호는 `type="password"`를 사용한다.
- 비밀번호 보기 버튼은 `button type="button"`으로 작성한다.
- 비밀번호 아이콘을 absolute로 배치하기 위해 `.rela`를 사용한다.
- 입력창은 `.input_box`를 기준으로 관리한다.

AI는 단순히 디자인을 맞추기 위해 input을 `div`나 `span`으로 바꾸지 않는다.

---

# 10. 체크박스 기준

현재 체크박스는 실제 `input`을 유지하고 화면에서는 `span::before`를 이용해 디자인한다.

```html
<label>
    <input type="checkbox" class="check sr-only">
    <span>자동 로그인</span>
</label>
```

CSS:

```css
.login_option .check + span::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(img/checkBox_disabled.svg) no-repeat center / contain;
}

.login_option .check:checked + span:before {
    background-image: url(img/checkBox_active.svg);
}
```

### 중요한 원칙

실제 체크 상태는 `<input type="checkbox">`가 담당한다.

이미지는 시각적인 표현을 담당한다.

따라서 새 브랜드에서도 가능하면:

```text
input = 실제 상태
span::before = 시각적 체크박스
```

방식을 유지한다.

---

# 11. 버튼 기준

현재 로그인 버튼:

```html
<button type="submit" class="login_btn">
    로그인
</button>
```

CSS에서 버튼의 폰트와 색상 등을 직접 지정한다.

새 브랜드에서도 실제 폼 제출 동작을 하는 로그인 버튼은 `button type="submit"`을 우선 사용한다.

단순한 화면 이동이 목적이면 `a`를 검토한다.

---

# 12. 링크 영역

현재 아이디 찾기, 비밀번호 재설정, 회원가입은 `a` 요소를 사용한다.

```html
<div class="login_link">
    <a href="#">아이디 찾기</a>
    <a href="#">비밀번호 재설정</a>
    <a href="#">회원가입</a>
</div>
```

각 링크 사이의 구분선은 HTML에 별도의 `span`을 추가하지 않고 CSS pseudo-element를 사용한다.

```css
.login_link a::after {
    content: "";
    display: inline-block;
}
```

따라서 단순한 장식 요소 때문에 HTML을 불필요하게 복잡하게 만들지 않는다.

---

# 13. SNS 로그인 영역

현재 SNS 로그인은 다음 구조다.

```html
<div class="sns_login">
    <p>SNS으로 간편하게 로그인</p>

    <div class="sns_list">
        <a href="#">
            <span class="sr-only">카카오로그인</span>
        </a>
        ...
    </div>
</div>
```

SNS 아이콘은 `<a>` 요소의 background-image로 표시한다.

```css
.sns_list > a:first-child {
    background-image: url(img/kakao_logo_icon.svg);
}
```

새 브랜드에서도 SNS 로그인 아이콘이 존재한다면 현재 구조를 우선 유지한다.

단, 실제 제공하는 로그인 방식이 달라지면 아이콘의 개수와 콘텐츠는 해당 브랜드의 실제 UI에 맞춰 변경한다.

---

# 14. 이미지 경로 기준

현재 브랜드 이미지는 브랜드 폴더 안의 `img` 폴더에 둔다.

예:

```text
burgerking/img/back_icon.svg
burgerking/img/eye_icon.svg
```

그리고 `login.html`의 CSS에서:

```css
background: url(img/back_icon.svg);
```

처럼 상대 경로를 사용한다.

새 브랜드를 추가할 경우:

```text
brand-name/
├─ login.html
└─ img/
```

형태를 우선 고려한다.

AI는 이미지가 없는데 임의의 이미지 파일명을 만들어서 연결하지 않는다.

필요한 이미지가 없으면 먼저 사용자에게 확인한다.

---

# 15. 폰트 기준

현재 프로젝트에는 다음 폰트 CSS가 있다.

```text
font/css/pretendardvariable.css
font/css/bkbulmatpro.css
font/css/sdgothicneo.css
```

버거킹 전용 폰트는:

```css
@font-face {
    font-family: 'BKR';
    ...
}
```

로 등록되어 있다.

Sandoll GothicNeoRound도 프로젝트의 폰트 CSS에서 여러 굵기로 등록되어 있다.

### 다른 브랜드 제작 시

브랜드의 실제 폰트를 사용할 경우:

1. 프로젝트에 폰트가 존재하는지 확인한다.
2. 이미 존재한다면 기존 폰트 파일과 연결 구조를 활용한다.
3. 존재하지 않는다면 사용자에게 폰트 파일 또는 사용 가능한 폰트를 확인한다.
4. 근거 없이 브랜드 전용 폰트를 추측하지 않는다.

---

# 16. CSS 작성 순서

현재 코드는 대략 다음 순서로 작성되어 있다.

```text
1. :root
2. html
3. body
4. a / 기본 요소
5. #wrap
6. header
7. 제목
8. input
9. 로그인 옵션
10. 로그인 버튼
11. 링크
12. SNS 영역
```

새 화면에서도 가능한 경우 큰 영역 → 내부 요소 순서로 작성한다.

예:

```text
전체
↓
header
↓
main
↓
title
↓
form
↓
input
↓
button
↓
link
↓
SNS
```

---

# 17. CSS 작성 시 금지할 것

AI는 다음 행동을 사용자가 요청하지 않는 한 하지 않는다.

### 1. 전체 구조를 새로운 방식으로 재작성

예:

```text
현재:
#wrap > header > main

AI가 임의로:
.app > .container > .page
```

### 2. CSS 파일을 임의로 분리

현재 구조가 `<style>`이라면 사용자의 요청 없이:

```text
login.css
```

를 새로 만들지 않는다.

### 3. 새로운 라이브러리 도입

현재 로그인 UI는 순수 HTML/CSS 기반이다.

따라서 다음과 같은 라이브러리를 임의로 추가하지 않는다.

```text
Bootstrap
Tailwind
React
Vue
jQuery
```

### 4. 불필요한 JavaScript 추가

현재 저장소에서 버거킹 `login.html`에 별도의 JS 파일은 확인되지 않았다.

단순한 스타일 구현을 위해 JavaScript를 추가하지 않는다.

실제 동작이 필요한 경우에만 JavaScript를 사용한다.

### 5. 클래스명 전체 변경

현재 클래스명을 새로운 네이밍 방식으로 일괄 변경하지 않는다.

---

# 18. 새로운 브랜드 로그인 UI 제작 절차

새 브랜드의 로그인 화면을 만들 때 AI는 다음 순서로 작업한다.

## STEP 1. 기존 구조 확인

먼저 현재 버거킹 코드의 구조를 기준으로 한다.

```text
#wrap
├─ header
└─ main
   ├─ title
   ├─ form
   ├─ login_link
   └─ sns_login
```

## STEP 2. 브랜드 차이 확인

버거킹과 새로운 브랜드의 차이를 확인한다.

예:

```text
색상
폰트
로고
입력 항목
버튼
SNS 로그인
문구
배경
```

## STEP 3. HTML 변경

구조는 최대한 유지하고 콘텐츠만 브랜드에 맞게 변경한다.

## STEP 4. CSS 변경

먼저 `:root`의 브랜드 색상과 폰트를 검토한다.

그 다음 필요한 영역의 스타일만 변경한다.

## STEP 5. 이미지 교체

브랜드별 이미지 파일을 해당 브랜드의 `img/` 폴더에 넣는다.

## STEP 6. 인터랙션 확인

필요한 경우에만 JavaScript를 추가한다.

## STEP 7. 기존 코드와 비교

최종적으로 다음을 확인한다.

- HTML 구조가 불필요하게 바뀌지 않았는가?
- 기존 클래스 네이밍과 충돌하지 않는가?
- `default.css`와 중복되는 CSS가 생기지 않았는가?
- 이미지 경로가 맞는가?
- 폰트 경로가 맞는가?
- 모바일 화면에서 문제가 없는가?
- 사용자가 제공한 디자인 시안과 일치하는가?

---

# 19. AI가 코드를 수정할 때의 우선순위

사용자가 기존 코드를 제공한 경우 다음 순서를 반드시 따른다.

```text
기존 코드 확인
↓
문제 위치 확인
↓
문제 원인 설명
↓
최소 수정
↓
필요할 때만 전체 코드 제공
```

기존 코드가 정상적으로 작동한다면 단순히 더 깔끔하다는 이유로 구조를 바꾸지 않는다.

---

# 20. 오류 발생 시 확인 순서

화면이 정상적으로 나오지 않는 경우 코드만 의심하지 않는다.

다음 순서로 확인한다.

```text
1. HTML 구조
2. CSS 선택자
3. CSS 속성
4. 이미지 경로
5. 폰트 경로
6. 파일 저장 여부
7. Live Server 상태
8. 브라우저 캐시
```

특히 이미지가 보이지 않는 경우 먼저:

```css
url(img/파일명.svg)
```

의 실제 파일 위치와 파일명을 확인한다.

---

# 21. 반응형 기준

현재 버거킹 코드는:

```css
#wrap {
    width: 100%;
    max-width: 1024px;
    min-width: 360px;
}
```

처럼 화면 크기에 대응하도록 작성되어 있다.

새 화면에서도 특정 기기 하나에만 맞춰 고정된 레이아웃을 만들지 않는다.

특히 다음을 확인한다.

- 360px 근처의 작은 화면
- 일반적인 모바일 화면
- 넓은 화면
- 긴 텍스트
- 입력창 내부 텍스트
- 버튼 및 링크의 터치 영역

---

# 22. 접근성 기준

현재 프로젝트에서 `.sr-only`를 사용한다.

```html
<span class="sr-only">비밀번호 보기</span>
```

화면에 시각적으로 보이지 않아도 버튼의 의미를 전달할 수 있도록 사용하는 방식이다.

새 UI에서도 아이콘만 있는 버튼이나 링크에는 필요한 경우 접근성 텍스트를 제공한다.

예:

```html
<button type="button">
    <span class="sr-only">이전 페이지</span>
</button>
```

단, 이미 `default.css`에 `.sr-only`가 있으므로 새로운 숨김 CSS를 중복 작성하지 않는다.

---

# 23. 코드 스타일 유지 원칙

AI는 사용자의 현재 코드 스타일을 존중한다.

### 유지할 것

- 들여쓰기 방식
- 클래스 네이밍 방식
- CSS 변수 사용
- `rem` 사용
- 주석 스타일
- HTML 시맨틱 구조
- `sr-only` 사용
- 상대 이미지 경로
- `default.css`와 개별 화면 스타일의 역할 구분

### 임의로 바꾸지 않을 것

- BEM 등 새로운 네이밍 규칙
- CSS Modules
- SCSS
- Tailwind
- React/Vue
- CSS-in-JS
- 새로운 빌드 도구
- 새로운 라이브러리

---

# 24. 디자인 시안을 코드로 옮길 때

Figma 등 디자인 시안을 제공받은 경우 다음 순서로 판단한다.

```text
디자인 화면 확인
↓
콘텐츠 의미 파악
↓
HTML 구조 결정
↓
기존 버거킹 구조와 비교
↓
CSS로 시각적 구현
↓
반응형 확인
```

Figma의 `x`, `y`, `top`, `left` 값을 그대로 HTML 구조로 옮기지 않는다.

예를 들어 화면에서 버튼이 특정 위치에 있다고 해서 모든 요소에 `position: absolute`를 사용하는 방식은 피한다.

레이아웃은 가능한 경우:

```text
flex
grid
margin
padding
gap
width
height
```

등 기존에 사용하던 CSS 방식으로 구성한다.

---

# 25. 사실 확인 원칙

브랜드 정보를 코드에 넣을 때 다음 원칙을 지킨다.

- 실제 브랜드명과 회사명을 구분한다.
- 실제 로그인 방식인지 확인한다.
- 실제 브랜드 컬러인지 확인한다.
- 실제 폰트인지 확인한다.
- 실제 로고 파일인지 확인한다.
- 확인되지 않은 정보는 사실처럼 작성하지 않는다.

사용자가 Figma 또는 공식 자료를 제공했다면 해당 자료를 우선한다.

---

# 26. 새 브랜드 작업 시 AI의 기본 답변 방식

사용자가 새 브랜드 로그인 UI를 요청하면 AI는 바로 완성 코드부터 작성하지 않는다.

먼저 다음을 확인한다.

```text
1. 어떤 브랜드인가?
2. 기존 버거킹 UI에서 유지할 구조는 무엇인가?
3. 어떤 부분을 브랜드에 맞게 변경해야 하는가?
4. 디자인 시안이 있는가?
5. 필요한 이미지/폰트 파일이 있는가?
6. 기존 저장소의 파일 구조와 충돌하는 부분은 없는가?
```

정보가 부족하거나 서로 충돌하는 경우 추측하지 않고 사용자에게 확인한다.

---

# 27. 현재 버거킹 코드의 핵심 모델

앞으로 새로운 브랜드 로그인 UI를 만들 때 다음 구조를 기본 모델로 사용한다.

```text
PAGE
│
├─ #wrap
│
├─ HEADER
│  ├─ page title
│  └─ previous button
│
└─ MAIN
   │
   ├─ TITLE
   │  ├─ greeting
   │  └─ brand message
   │
   ├─ FORM
   │  └─ FIELDSET
   │     ├─ login label
   │     ├─ email input
   │     ├─ password input
   │     ├─ password visibility button
   │     ├─ login options
   │     └─ login submit button
   │
   ├─ LOGIN LINKS
   │  ├─ find ID
   │  ├─ reset password
   │  └─ sign up
   │
   └─ SNS LOGIN
      ├─ divider/title
      └─ SNS links
```

이 구조를 **새 브랜드 로그인 UI 제작의 기본 템플릿**으로 사용한다.

---

# 28. 최종 원칙

가장 중요한 원칙은 다음과 같다.

> **새로운 코드를 잘 만드는 것보다 사용자가 이미 작성한 코드의 구조와 작성 방식을 유지하면서 필요한 부분만 변경하는 것을 우선한다.**

AI는 코드를 대신 새로 설계하는 것이 아니라:

```text
기존 코드 분석
→ 기존 구조 유지
→ 브랜드 차이 적용
→ 필요한 부분만 수정
→ 오류 및 개선점 설명
```

의 방식으로 작업한다.

사용자가 직접 판단하거나 수정할 수 있는 부분은 먼저 이유와 수정 위치를 설명하고, 필요한 경우에만 전체 코드를 제공한다.
