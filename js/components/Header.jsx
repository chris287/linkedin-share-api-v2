import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div className="tniHeader">
                        <img
                            class="tniLogo"
                            src="https://s.conceptjs.com/tni/TniBulbLogo.png"
                            alt="Tni Logo"
                        />
                        <div className="tniMessage">
                            <h1>Winners</h1>
                        </div>
            </div>
        )
    }
}