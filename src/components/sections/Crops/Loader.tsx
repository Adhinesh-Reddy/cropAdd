import React from "react"
// import {Modal} from "react-bootstrap"
// import ClipLoader from "react-spinners/ClipLoader";
// import GridLoader from "react-spinners/GridLoader"
import SyncLoader from "react-spinners/SyncLoader"

type LoaderProps = {
    show? : boolean;
}

const Loader = ({
    show = true
} : LoaderProps) => {
    // return (
    //     <Modal show={show} centered>
    //         <ClipLoader color={"blue"} loading={show} size={150} />
    //     </Modal>
    // )

    return (
        <SyncLoader color={"green"} loading={show} size={25}/>
    )
}

export default React.memo(Loader)