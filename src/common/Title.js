import t from "./Title.module.css"

export const Title = (props) => {
    return  <div data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000" className={t.title}><h2>{props.title}</h2></div>
}
