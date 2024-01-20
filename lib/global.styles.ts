import styled from 'styled-components';

export const LayoutMainWrapper = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    background: #ffff;
    overflow: hidden;
    min-height: 620px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & .layout-bg {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
    }

    & .main-layout {
        border-radius: 60px;
        padding: 30px;
        width: 100%;
        height: 600px;
        object-fit: cover;
        background: #ffff;
        overflow: scroll;
        margin: 20px 0;
    }

    & .main-layout::-webkit-scrollbar {
        width: 0.5em;
    }

    & .main-layout::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
`;

const MainImage = styled.img`
  height: 97%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 50px;
`;

const MainContent = styled.div`
  border-radius: 60px;
  padding: 30px;
  width: 100%;
  height: 600px;
  object-fit: cover;
  background: #fff;
  overflow: scroll;
  margin: 20px 0;
`;

const SecondaryContent = styled(MainContent)`
  background: #00575F;
`;

const ScrollbarStyle = styled.main`
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

// Usage
// const YourComponent = () => (
//   <MainWrapper>
//     <MainImage src="your-image-source.jpg" alt="Your Image" />
//     <MainContent className="main--wrapper--main">
//       {/* Your content goes here */}
//     </MainContent>
//     <SecondaryContent className="main--wrapper--secondary">
//       {/* Your secondary content goes here */}
//     </SecondaryContent>
//     <ScrollbarStyle>
//       <main>
//         {/* Your main content with custom scrollbar goes here */}
//       </main>
//     </ScrollbarStyle>
//   </MainWrapper>
// );
