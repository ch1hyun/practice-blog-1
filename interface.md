# Interface

---

### signIn (로그인)

- request
  - ```text
    {
      *code: String,
      *message: String
    }
    ```
- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success.",
        token: "jwt...",
        expiredDate: 123456789
      }
      ```
  - 실패
    - 필수 정보 미입력
    - 로그인 실패
      HTTP Status - 401 (Unauthorized)
      ```text
      {
        code: "SF",
        message: "Sign In Failed."
      }
      ```
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```

---

### signUp (회원가입)

- request
  - 
    ```text
    {
        *email: String,
        *password: String,
        *nickname: String,
        *telNumber: String,
        *address: String,
        addressDetail: String
    }
    ```
- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success."
      }
      ```
  - 실패
    - 이메일 포멧 불일치 / 비밀번호 8자 미만 / 전화번호 포멧 불일치
    - 이메일 중복
      HTTP Status - 400 (Bad Request)
      ```text
      {
        code: "EE",
        message: "Existed Email."
      } 
      ```
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```

---

### weeklyTop3List (주간 상위 3 게시물 리스트)

- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success",
        top3List: boardListItem[]
      }
      ```
  - 실패
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```
  - 타입
    - BoardListItem
      ```text
      {
        boardNumber: int,
        title: String,
        content: String,
        boardTitleImage: String,
        favoriteCount: int,
        commentCount: int,
        viewCount: int,
        writeDatetime: String,
        writerNickname: String,
        writerProfileImage: String
      }
      ```

---

### currentList (최신 게시물 리스트)

- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success",
        currentList: boardListItem[]
      }
      ```
  - 실패
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```
  - 타입
    - BoardListItem
      ```text
      {
        boardNumber: int,
        title: String,
        content: String,
        boardTitleImage: String,
        favoriteCount: int,
        commentCount: int,
        viewCount: int,
        writeDatetime: String,
        writerNickname: String,
        writerProfileImage: String
      }
      ```

---

### popularWordList(인기 검색어 리스트)

- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success",
        popularWordList: String[]
      }
      ```
  - 실패
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```

---

### searchList (검색 게시물 리스트)

- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success",
        searchList: boardListItem[]
      }
      ```
  - 실패
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```
  - 타입
    - BoardListItem
      ```text
      {
        boardNumber: int,
        title: String,
        content: String,
        boardTitleImage: String,
        favoriteCount: int,
        commentCount: int,
        viewCount: int,
        writeDatetime: String,
        writerNickname: String,
        writerProfileImage: String
      }
      ```

---

### relativeWordList (관련 검색어 리스트)

- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success",
        relativeWordList: String[]
      }
      ```
  - 실패
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```

---

### boardDetail (게시물 상세)

---

### favoriteList (좋아요 리스트)

---

### putFavorite (좋아요 기능)

---

### commentList (댓글 리스트)

---

### postComment (댓글 쓰기)

---

### boardDelete (게시물 삭제)

---

### boardWrite (게시물 쓰기)

---

### boardUpdate (게시물 수정)

---

### getUser (유저 정보)

---

### userBoardList (특정 유저 게시물 리스트)

- response
  - 성공
    - HTTP Status - 200 (OK)
      ```text
      {
        code: "SU",
        message: "Success",
        userBoardList: boardListItem[]
      }
      ```
  - 실패
    - 데이터베이스 에러
      HTTP Status - 500 (Internal Server Error)
      ```text
      {
        code: "DE",
        message: "Database Error."
      }
      ```
  - 타입
    - BoardListItem
      ```text
      {
        boardNumber: int,
        title: String,
        content: String,
        boardTitleImage: String,
        favoriteCount: int,
        commentCount: int,
        viewCount: int,
        writeDatetime: String,
        writerNickname: String,
        writerProfileImage: String
      }
      ```

---

### fileUpload (파일 업로드)

---
