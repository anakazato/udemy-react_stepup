import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
        id:val,
        name:`じゃけえ-${(val + 1)}`,
        image:"https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        email:"12345@aaa.com",
        phone:"090-1234-5678",
        company:{
          name:"テスト株式会社",
        },
        website:"https://google.com",
    }
}));
  
export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:24px;
`;

const SUserArea = styled.div`
    padding-top : 40px;
    width: 100%;

    // 以下レスポンシブデザイン
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    grid-gap:20px;
`;
