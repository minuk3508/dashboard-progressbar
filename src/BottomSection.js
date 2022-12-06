import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GoPlus } from "react-icons/go";

const JAKEIMAGE_URL = "https://ifh.cc/g/Zhyqb4.jpg";

const jakeArray = [
  { id: 120948, photoURL: JAKEIMAGE_URL, name: "Jake" },
  { id: 1255, photoURL: JAKEIMAGE_URL, name: "Cake" },
  { id: 17788, photoURL: JAKEIMAGE_URL, name: "Jurke" },
  { id: 1238, photoURL: JAKEIMAGE_URL, name: "Juke" },
];
const jakeArray2 = [{ id: 12, photoURL: JAKEIMAGE_URL, name: "Jake" }];

export default function BottomSection() {
  const [isMiniModal, setIsMiniModal] = useState(false);
  const [itemArray, setItemArray] = useState(jakeArray);
  const [participantArray, setParticipantArray] = useState(jakeArray2);

  const modalOpen = () => {
    setIsMiniModal((prev) => !prev);
  };
  const addUser = (index) => {
    const target = itemArray[index];
    const leftArray = itemArray.slice(0, index);
    const rightArray = itemArray.slice(index + 1);
    setItemArray([...leftArray, ...rightArray]);
    const dupleItems = participantArray;
    dupleItems.push(target);
    setParticipantArray(dupleItems);
  };
  const deleteUser = (index) => {
    if (index !== 0) {
      const target = participantArray[index];
      const leftArray = participantArray.slice(0, index);
      const rightArray = participantArray.slice(index + 1);
      setParticipantArray([...leftArray, ...rightArray]);
      const dupleItems = itemArray;
      dupleItems.push(target);
      setItemArray(dupleItems);
    }
  };

  return (
    <Container>
      <ParticipantsBox>
        <Participants>
          {participantArray.map((i, index) => (
            <ImagePhoto
              key={i.id}
              title={i.name}
              onClick={() => {
                deleteUser(index);
              }}
              url={i.photoURL}
              left={`${index * 15}%`}
            />
          ))}
        </Participants>
        <ParticipantAdd onClick={modalOpen}>
          {isMiniModal ? (
            <>
              <GoPlus />
              <AddUserModal>
                {itemArray.map((i, index) => (
                  <UserListItem
                    key={i.id}
                    onClick={() => {
                      addUser(index);
                    }}
                  >
                    <UserPhoto url={i.photoURL} />
                    <UserName>{i.name}</UserName>
                  </UserListItem>
                ))}
              </AddUserModal>
            </>
          ) : (
            <GoPlus />
          )}
        </ParticipantAdd>
      </ParticipantsBox>
      <DeadLineBox>3 days left</DeadLineBox>
    </Container>
  );
}

const position = keyframes`
0%{
transform: translateX(100%);
}

100% {
transform:  translateX(0%);

}
`;
const ImagePhoto = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  width: 35px;
  height: 35px;
  border: 2px solid white;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${position} 0.5s;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    transform: translateY(-20%);
  }
`;

const height = keyframes`
0%{
    height: 0px;
}
100%{
    height: 150px;
}
`;
const UserListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding-left: 5%;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: rgba(245, 208, 86, 0.3);
  }
`;
const UserPhoto = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;
const UserName = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 13px;
  color: #27104e;
`;
const AddUserModal = styled.div`
  position: absolute;
  overflow: hidden;
  top: 110%;
  left: 50%;
  width: 100px;
  height: 150px;
  padding: 10%;
  border-radius: 10px;
  background-color: white;
  animation: ${height} 0.3s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 27%;
  padding: 0% 8%;
`;
const ParticipantsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 60%;
`;
const Participants = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const ParticipantAdd = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 28px;
  color: white;
  border-radius: 50%;
  background-color: rgb(245, 208, 86);
  :hover {
    cursor: pointer;
    background-color: rgb(245, 208, 86, 0.7);
  }
`;
const DeadLineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 50%;
  font-size: 15px;
  font-weight: 700;
  color: rgb(245, 208, 86);
  border-radius: 20px;
  background-color: rgba(245, 208, 86, 0.3);
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: rgba(245, 208, 86, 0.2);
  }
`;
