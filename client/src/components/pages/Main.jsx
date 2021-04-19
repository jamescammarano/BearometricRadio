import React from 'react'
import Info from "../components/Info"
import "../../assets/css/style.css"

const Main = () => {
    return (
        <div class="wrapper">
            <div class="inner">
                <div >Weather</div>
                <div>Forecast</div>
            </div>
            <div id="wizard" role="application" class="wizard clearfix">
                <div class="content clearfix">
                    <Info />
                </div>
            </div>
		</div>
    )
}

export default Main
