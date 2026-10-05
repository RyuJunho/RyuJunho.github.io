# 졸업논문 프로젝트 페이지

GitHub Pages 용 정적 페이지 (빌드 과정 없음). 현재 내용: 제목(국문·영문), 키워드, 요약(배경·기존 한계·제안·결과).

```
index.html
static/css/style.css
static/images/   (이후 방법·결과 섹션에 쓸 그림, 지금은 페이지에서 쓰지 않음)
.nojekyll
```

## 배포

1. GitHub 에 저장소를 만든다 (예: `<저장소 이름>`, 사용자 사이트로 쓰려면 `<계정>.github.io`).
2. 이 폴더를 `main` 브랜치에 올린다.
3. Settings → Pages → Source: "Deploy from a branch", Branch `main`, 폴더 `/ (root)`.
4. 1~2분 뒤 `https://<계정>.github.io/<저장소>/` 에 나타난다.
