import {FallbackProps} from "react-error-boundary";

function FallBackError(props: FallbackProps) {
    const onResetBoundary = () => {
        props.resetErrorBoundary();
    }


    return (
        <>
            Error
            <div>{props.error.error}</div>
            <button onClick={onResetBoundary}></button>
        </>
    )
}

export default FallBackError;