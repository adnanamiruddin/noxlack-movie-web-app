import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { routesGen } from "../../routes/routes";
import uiConfigs from "../../configs/ui.configs";
import tmdbConfigs from "../../api/configs/tmdb.configs";

const CastSlide = ({ castList }) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: { xs: "50%", md: "25%", lg: "20.5%" },
          color: "primary.contrastText",
        },
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {castList.map((cast, i) => (
          <SwiperSlide key={i}>
            <Link to={routesGen.person(cast.id)}>
              <Box
                sx={{
                  paddingTop: "120%",
                  color: "text.primary",
                  ...uiConfigs.style.backgroundImage(
                    tmdbConfigs.posterPath(cast.profile_path)
                  ),
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "max-content",
                    padding: "10px",
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                  }}
                >
                  <Typography sx={{...uiConfigs.style.typoLines(1, "left")}}>{cast.name}</Typography>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CastSlide;
