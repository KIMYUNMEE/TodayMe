# TodayMe : 오늘의 나 

React기반의 Js, html, css를 이용한 개인 프로젝트입니다.

## 제작하게 된 이유

프로그래밍을 공부하면서 제일 먼저 기초적인 부분부터 이해하고 혼자 구현할 수 있어야 한다고 생각했습니다.  


기초를 잘 다듬어야 응용함에 있어 막히지 않을거라 판단되어 혼자 어떤 웹사이트를 만들까 하다가 제가 많이 이용하는 서비스중 하나인 할일목록 사이트를 구현해보면 좋겠다는 생각이 들었습니다.


그렇게 저는 Todo(CRUD)를 기반인 '오늘의 나'라는 사이트를 제작하게 되었습니다.

## 화면 구성


### 첫 로그인 했을 시 
![로그인화면](https://user-images.githubusercontent.com/75771515/172297227-0946acf8-20ca-437c-9d67-8063fcfcdfdf.png)



### 닉네임 입력 후 
![로그인화면02](https://user-images.githubusercontent.com/75771515/172297477-da87fd7a-cc11-4cc0-a20b-a3598ba8761d.png)



### 메인화면
![메인화면](https://user-images.githubusercontent.com/75771515/172296970-1317bc2e-e132-419f-926f-7ac5447fa4e7.png)



### 닉네임 입력 후 메인화면

![메인화면02](https://user-images.githubusercontent.com/75771515/172297789-300d6697-d1f2-4387-92a2-79f898603c19.png)



### 할일적기 아이콘을 누르면

![할일작성하기 아이콘](https://user-images.githubusercontent.com/75771515/172298436-56927791-2690-4402-aee7-ca76ca9d1827.png)



### 할일쓰기창이 보여짐
![할일적기창](https://user-images.githubusercontent.com/75771515/172298507-a99f3664-08a1-403c-8b2c-dc2ec8ed8ab5.PNG)

### 내가 해야할 일과 시간 얼마나 중요한지를 작성하고 등록을 누르면

![할일쓰기창02](https://user-images.githubusercontent.com/75771515/172300379-f89e3467-733f-4479-a6b7-3e6fcd936832.png)

### 메인화면에 자동으로 등록됨
![할일쓰기창03](https://user-images.githubusercontent.com/75771515/172299297-13ea82bc-4ac3-4318-8d06-d0662a9e8f4a.png)

### 완료아이콘을 누르면
![할일쓰기창04](https://user-images.githubusercontent.com/75771515/172299961-03069141-a0e9-4c70-8d25-47133a4a7df6.png)

### 메인이미지변경, % 상승 , 알림 변화(완료할때마다)
![할일쓰기창05](https://user-images.githubusercontent.com/75771515/172300093-8cd2de6f-99dc-4be5-8764-7655f3ef1757.png)

### %가 오를 때 마다 이미지 변경 (~100%)



![50%](https://user-images.githubusercontent.com/75771515/172301511-35851a7a-caee-48ed-bd8f-eb46ae65f35e.png)

![75](https://user-images.githubusercontent.com/75771515/172301514-c157319d-fc4d-4da9-95b2-6617758b0ba8.png)
![100](https://user-images.githubusercontent.com/75771515/172301521-999e1b94-8a28-4cf4-8537-9ba79673a221.png)


### 알림버튼을 누르면 내가 완료한 목록들과 완료한 시간이 표시됨 

![할일쓰기창05](https://user-images.githubusercontent.com/75771515/172301742-8a9ce1ec-0c41-4b86-810f-d366628e3974.png)
![알림창](https://user-images.githubusercontent.com/75771515/172302395-0eaa2458-a437-4930-96fa-7d011d5b7fab.png)

### 할일을 다 작성했을 시 작성완료를 누르면 

![작성완료](https://user-images.githubusercontent.com/75771515/172303286-699da174-1de3-4b3e-90db-8b37764c8799.png)
### 초기화하기 버튼으로 바뀌고 할일쓰기아이콘 사라짐
![작성완료02](https://user-images.githubusercontent.com/75771515/172303292-676d0895-944a-4693-8d2b-73969168f551.png)

### 초기화 버튼을 누르면 로딩창이 보이고 메인이미지, %, 할일쓰기 목록이 초기화
![초기화](https://user-images.githubusercontent.com/75771515/172303690-37473190-c551-4fe8-9f0b-f1010f1239e6.png)

![초기화 후 메인화면](https://user-images.githubusercontent.com/75771515/172304131-36980384-c674-4e6d-ac9a-d631a1591b8b.png)


### 기록하기를 누르면 

![기록하기](https://user-images.githubusercontent.com/75771515/172306698-c83bbe67-c8d4-41d3-ba3b-57d1065ebe17.png)

### 기록하기 서브페이지가 보여짐
![기록하기02](https://user-images.githubusercontent.com/75771515/172307477-a5cc063b-9f34-45c5-b684-2fabdcfc2262.png)



### 미리&이전에 기록하고 싶은 일정이 있을 때 입력하고 작성하기를 누르면
![기록하기03](https://user-images.githubusercontent.com/75771515/172306898-6987864f-76ab-4381-819c-710cec9a06f1.png)

### 예약하고 싶은 일정에 뜸
![기록하기04](https://user-images.githubusercontent.com/75771515/172306944-498a2d2a-bab1-4530-8cd7-02bd33c35587.png)


### 초기화 버튼을 누르면 locaclStorage에 저장되어 있던 내용들이 없어지고 이전 history로 이동됨

![기록하기05](https://user-images.githubusercontent.com/75771515/172307056-f5ed1aa6-03fd-4513-89f8-e5c9734f28e7.png)

### 다시 기록하기으로 넘어가면 초기화 된걸 확인 할 수 있음
![기록하기02](https://user-images.githubusercontent.com/75771515/172307488-90b54587-38ba-4433-a1b0-f0d645b4a920.png)

### 메뉴 버튼을 누르면
![마이페이지](https://user-images.githubusercontent.com/75771515/172311331-ebc5bc49-ecf9-44fb-9215-897ede12159c.png)

### 서브페이지인 마이페이지로 이동
![마이페이지02](https://user-images.githubusercontent.com/75771515/172311342-ab1c50fc-90e6-4aab-8127-126650704d07.png)


### 감정변경하기페이지에서 나의 하루에 해당하는 감정을 누르고 바꾸기를 누르면 마이페이지의 감정이 변화됨
![마이페이지03](https://user-images.githubusercontent.com/75771515/172311362-66e2ae9e-3829-467d-8fe7-034d50dd9e08.png)




### 나의 하루의 할일을 100% 연속 완료 했을 시 마다 나의 나무가 자람

### 닉네임 변경하기를 누르면 나의 닉네임을 바꿀 수 있고 실시간으로 적용이 됨





## 필수기능
### 1. 나만의 닉네임 등록으로 로그인하기

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 1-2. 나만의 닉네임 변경하기

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `2. 하루하루 감정 변경하기`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `3. '나의 하루'에 해야할 일 적기`



**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### `3. '나의 하루'에 해야할 일 적기`

### `3-1. '나의 하루' 공유하기`
### `3. '나의 하루'에 동륵한 일 초기화하기`
### `3. '나의 하루'에 등록한 해야할 일을 완료했을 시 알림으로 보여지기`
### `4. 미리 등록하고싶은 예약일정을 나의 달력에 기록하기`

## 추가기능


### 오늘하루 해야할 일을 완료했을시 체크할때마다 '나의 하루 ' %가 올라가기

### '나의 하루'가 100% 만족하는 횟수가 잦아질 수록 나만의 나무 무럭무럭 자라기


