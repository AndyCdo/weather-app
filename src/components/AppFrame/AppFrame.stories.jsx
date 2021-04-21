import React from "react"
import AppFrame from "./AppFrame"
import { BrowserRouter as Router } from "react-router-dom"

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (

    <Router>
        <AppFrame>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur eos hic in dolorum eius nobis sed? Maiores consectetur praesentium nesciunt dolor consequatur illum, quas repellendus aspernatur iure asperiores similique.
        </AppFrame>
    </Router>

)
