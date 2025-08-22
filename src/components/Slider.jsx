import {register} from 'swiper/element/bundle';
import './Slider.css'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

import PalcoNoite from '../assets/Palco-Noite.png';
import PracaAlimentacao from '../assets/Praca-Alimentacao.png';
import VisaoGeral from '../assets/Visao-Geral.png';

const data = [
    {id: '1', image: VisaoGeral},
    {id: '2', image: PalcoNoite},
    {id: '3', image: PracaAlimentacao}
]

function Slider(){
    return (
        <div>
            <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            loop={true}
            navigation
            autoplay={{delay: "3000"}}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img id="Swiper"
                        src={item.image}
                    />
                
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
        
    )
}

export default Slider