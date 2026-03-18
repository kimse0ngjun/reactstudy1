import { useState } from "react";
import { UserProfile } from "./types/user";
import NamePresenter from "./components/NamePresenter";

const App = () => {
  const [nameInput, setNameInput] = useState<string>("");
  const [user, setUser] = useState<UserProfile>({
    name: "",
    isRegistered: false,
  });

  const handleRegister = () => {
    if (nameInput.trim() !== "") {
      setUser({
        name: nameInput,
        isRegistered: true,
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>사용자 등록</h1>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="이름 입력"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>

      {user.isRegistered ? (
        <NamePresenter displayName={user.name} />
      ) : (
        <p>이름을 입력하고 확인을 눌러주세요.</p>
      )}
    </div>
  );
};

export default App;
