import { useResize } from "../../utils/hooks/useResize";
import "./Main.scss";

import Layout from "../../components/Layout/Layout";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlockWithBlackBackground from "../../components/BlockWithBlackBackground/BlockWithBlackBackground";
import { main, about } from "../../content/pagesContent/mainPageContent.json";
import { title, description, seo } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import generateRandomKey from "../../utils/keyGenerator";
// import photoLink from "../../assets/coworkPictures/DSC00025.jpg";
import videoFile from "../../assets/videos/main.mp4";
import pechat from "../../assets/pechat.png";

function Main() {
  const screenSize = useResize();
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <Layout
      title={title.main}
      description={description.main}
      seoName={seo.name}
      seoContent={seo.content}
    >
      <BackgroundVideo
        size={screenSize.trakResolutionValue}
        videoLink={videoFile}
        videoTitle={titles.mainTitle}
      />
      <BlockWithBlackBackground
        title={about.aboutTitle}
        blocks={about.aboutBlocks}
        description={about.aboutDescription}
        linkTo={about.aboutLink}
      />
      {main.map((item, index) => (
        <BlockWithPhotoAndDesc
          key={getRandomKey()}
          photoLink={pechat}
          size={screenSize.trakResolutionValue}
          caption={item.newsCaption}
          newsTitle={item.newsTitle}
          newsText={item.newsText}
          position={index % 2 === 0}
        />
      ))}
    </Layout>
  );
}

export default Main;
