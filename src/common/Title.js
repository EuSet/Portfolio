import t from "./Title.module.css"

export const Title = (props) => {
    return  <div className={t.title}><h2>{props.title}</h2></div>
}
