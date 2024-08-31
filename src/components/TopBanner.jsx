import { BannerSection, StyledTopBanner } from "./styles/TopBanner.styled";

export const TopBanner = () => {
  return (
    <>
      <StyledTopBanner>
        <BannerSection showOnMobile>
          <a href="mailto:ajjoglek@asu.edu"> ajjoglek@asu.edu</a>
        </BannerSection>
        <BannerSection>⚡ Available for Hire</BannerSection>
      </StyledTopBanner>
    </>
  );
};
