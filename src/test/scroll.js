import React, { Component } from 'react'

export default class Scroll extends Component {
    render() {
        return (
            <div className='container'>
             <div className='row'>
                <div className='col-md-3 position-fixed '  style={{height:"100px",border:"1px solid #000", overflow:"scroll" }}>
                    <table style={{ }}>
                        <tr>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                        </tr>
                        <tr>
                            <td>Hello</td>
                        </tr>
                    </table>
                </div>

             </div>
                
            </div>
        )
    }
}
