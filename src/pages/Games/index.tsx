import React from "react";
import {
 BottomBar,
 GameDescription,
 GameName,
 GamesContainer,
 GamesItem,
 GamesItemBackground,
 GamesItemContent,
 GamesItemFlotingImage,
 GamesItemImage,
 LearnButton,
 PageContainer,
 Title,
} from "./style";
import Game1BG from "../../assets/games/gameBG.png";
import Game1Preview from "../../assets/games/GamePrevew.png";
import Game2BG from "../../assets/games/game2BG.png";
import Game2Preview from "../../assets/games/GamePreview2.png";
import Game3BG from "../../assets/games/game3BG.png";
import Game3Preview from "../../assets/games/GamePreview3.png";
import Arrow from "../../assets/games/Arrow.svg";

type Props = {};

function GamesPage({}: Props) {
 return (
  <PageContainer>
   <Title>Our Games</Title>
   <GamesContainer>
    <GamesItem>
     <GamesItemImage>
      <GamesItemBackground>
       <img src={Game1BG} />
      </GamesItemBackground>
      <GamesItemFlotingImage src={Game1Preview} />
     </GamesItemImage>
     <GamesItemContent>
      <GameName>Genesis</GameName>
      <GameDescription>
       Your Kryptomons need comfort, training and your combat strategy to triumph in the thrilling
       battles of this RPG game.
      </GameDescription>
      <BottomBar>
       <LearnButton href="#" commonColor="#6f5beb">
        Learn more
       </LearnButton>
       <img src={Arrow} />
      </BottomBar>
     </GamesItemContent>
    </GamesItem>

    <GamesItem>
     <GamesItemImage>
      <GamesItemBackground>
       <img src={Game2BG} />
      </GamesItemBackground>
      <GamesItemFlotingImage src={Game2Preview} />
     </GamesItemImage>
     <GamesItemContent>
      <GameName>Pink Moon</GameName>
      <GameDescription>
       During every full moon, mysterious objects can be found around you. Go out, and start hunting
       in this real-life AR treasure Hunt.
      </GameDescription>
      <BottomBar>
       <LearnButton href="#" commonColor="#f3ba2f">
        Learn more
       </LearnButton>
       <img src={Arrow} />
      </BottomBar>
     </GamesItemContent>
    </GamesItem>

    <GamesItem>
     <GamesItemImage>
      <GamesItemBackground>
       <img src={Game3BG} />
      </GamesItemBackground>
      <GamesItemFlotingImage src={Game3Preview} />
     </GamesItemImage>
     <GamesItemContent>
      <GameName>World of Kogaea</GameName>
      <GameDescription>
       Discover the massive world of Kogaea in this mobile MMORPG. Craft, Battle and find a way to
       survive this Universe with your Kryptomon team.
      </GameDescription>
      <BottomBar>
       <LearnButton href="#" commonColor="#33d669">
        Learn more
       </LearnButton>
       <img src={Arrow} />
      </BottomBar>
     </GamesItemContent>
    </GamesItem>
   </GamesContainer>
  </PageContainer>
 );
}

export default GamesPage;
