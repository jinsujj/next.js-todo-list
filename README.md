This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Todo List 프로젝트

#### index.tsx (수정점)

```
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      console.log(store);
      try {
        const { data } = await getTodosAPI();
        console.log(data);
        store.dispatch(todoActions.setTodo(data));
        return { props: { todos: data } };
      } catch (e) {
        console.log(e);
        return { props: { todos: [] } };
      }
    }
);
export default app;

```

#### 날짜 형식 출력(date-fns)
```
yarn add date-fns
```
formatDistance 는 두 날짜 간의 차이를 리턴하여 주고 addSuffix 를 붙여주면 'a day agdo' 형식으로 표현해준다.
```
{formDistance(new Date(repo.updateed_at), new Date(). {
  addSuffix: true,
})}
```


#### 아이콘 다운로드 받기
1) react-icons (https://react-icons.netlify.com)
```
yarn add react-icons
import { GoMail } from "react-icons/go";
```

2) iconmonstr (https://iconmonstr.com)


<br/>

#### svg 컴포넌트 사용하기
- svg를 리액트 안에 컴포넌트로 사용하기 위한 바벨 플러그인 설치
```
yarn add babel-plugin-inline-react-svg -D
```

- 바벨 설정 <br/>
.babelrc
```
{
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "styled-components",
            {
                "ssr": true
            }
        ],
        "inline-react-svg"
    ]
}
```
- .svg 파일을 모듈을 찾을 수 없다는 오류 처리 <br/>
types/image.d.ts
```
declare module "*.svg";
```
