import { kidsWishlist } from "./wish-list";
import styled from "styled-components";
import "./App.css";
import star from "./assets/star.png";
import santa from "./assets/icon.png";

const MainContainer = styled.div`
  background-image: url(/src/assets/bg.png);
  background-color: #9d0202;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: whitesmoke;
  font-family: "Titan One", sans-serif;
  font-size: 4.5rem;
  text-shadow: 4px 4px 8px black;
  padding: 30px;
`;

const Content = styled.p`
  color: white;
  padding: 30px;
  font-family: "Concert One", sans-serif;
  font-size: 2.4rem;
`;
const WishItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const KidCard = styled.div`
  background-color: ${({ naughty }) => (naughty ? "#0d8836" : "#f5bf0e")};
  padding: 30px;
  margin: 60px;
  border-radius: 30px;
  box-shadow: 5px 10px 10px white;
  width: 500px;
  height: 800px;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.06);
    background: linear-gradient(45deg, #ff0000, #00ff00, #ffd416);
  }
`;

const KidName = styled.h2`
  color: black;
  font-family: "Agbalumo", system-ui;
  font-size: 2.3rem;
  letter-spacing: 9px;
`;

const KidId = styled.h4`
  color: whitesmoke;
  font-size: 1.2rem;
  text-align: left;
`;
const KidAge = styled.h3`
  font-size: 1.6rem;
  color: #ca3e17;
  padding: 15px;
`;

const Kidslist = styled.ul`
  list-style: square;
  padding: 3px;
`;

const ListItem = styled.li`
  color: #343333;
  font-family: "Fraunces", serif;
  font-size: 1.3rem;
  margin: 30px;
  width: 300px;
  height: 40px;
  text-align: left;
  text-decoration: underline;
`;

const NaughtyText = styled.span`
  font-size: 1.5rem;
  color: #e6e3e0;
  font-weight: bold;
  text-align: left;
  text-shadow: 4px 8px 8px black;
`;

function CardDetail({ id, name, age, wishlist, naughty }) {
  return (
    <KidCard className={naughty ? "slem" : "snill"} naughty={naughty}>
      <KidId>Nr: {id}</KidId>
      <KidName>Navn: {name}</KidName>
      <KidAge> {age} år </KidAge>
      <Kidslist>
        {wishlist.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </Kidslist>
      {naughty && <NaughtyText> 👧 Hey, Naughty Kid 👦 </NaughtyText>}
      <div id="Image-hop">
        {naughty ? (
          <img src={santa} class="santa" />
        ) : (
          <img src={star} class="star" />
        )}
        ;
      </div>
    </KidCard>
  );
}

export default function App() {
  return (
    <MainContainer>
      <Title>
        🎁 Ønskeliste Til Jul og Merry Christmas Til Alle Flinke Barn 🎅
      </Title>
      <Content>
        ✨ Wishing all the kids a joyful holiday season filled with love,
        laughter, and special moments! 🎄 May Christmas bring you peace and
        happiness, and the New Year be full of fun, success, and new adventures.
        🌟 Here's to a bright and exciting year ahead! 🎉
      </Content>
      <WishItemContainer>
        {kidsWishlist.map((kid) => (
          <CardDetail
            id={kid.id}
            name={kid.name}
            age={kid.age}
            wishlist={kid.wishlist}
            naughty={kid.naughty}
          />
        ))}
      </WishItemContainer>
    </MainContainer>
  );
}
