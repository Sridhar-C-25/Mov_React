import { Swiper } from "swiper/react";
const MySwiper = (props) =>
{
   return (
      <Swiper
         slidesPerView={5}
         spaceBetween={30}
         slidesPerGroup={4}
         navigation={true}
         loopFillGroupWithBlank={true}
         breakpoints={{
            "240": {
               "slidesPerView": 2.2,
               "spaceBetween": 20,
               "slidesPerGroup": 1
            },
            "768": {
               "slidesPerView": 4,
               "spaceBetween": 40,
               "slidesPerGroup": 3

            },
            "1024": {
               "slidesPerView": 5,
               "spaceBetween": 50
            }
         }}
         className="mySwiper">
         <slot>{props.children}</slot>
      </Swiper>
   )
}

export default MySwiper
