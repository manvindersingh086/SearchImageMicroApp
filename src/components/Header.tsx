import classes from "../components/Header.module.css";

const header = (props : any) => {
    return (
        <>
            <h1 className={classes.htag}>{props.header}</h1>
        </>
    )
}

export default header;