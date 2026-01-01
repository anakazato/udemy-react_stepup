import { BrowserRouter } from "react-router-dom";

import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";

import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./App.css";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name:"じゃけえ",
  image:"https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email:"12345@aaa.com",
  phone:"090-1234-5678",
  company:{
    name:"テスト株式会社",
  },
  website:"https://google.com",
}

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
