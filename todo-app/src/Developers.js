import React, { Component } from 'react';

// Stateless components can be functions,
// they do not need to be classes if
// they are not handling state

// class Developer extends Component{
const Developers = ({ developers }) => {
    // render() {
        console.log(developers);

        // const { developers } = props;

        // let devList;
        let devList = developers.map(developer => {

            if (developer.age < 30) {
                return (
                    <div className="ninja" key={developer.id}>
                        <div>Name: {developer.name}</div>
                        <div>Age: {developer.age}</div>
                        <div>Tech: {developer.tech}</div>
                        <br/>
                    </div>
                )
            } else {
                return null;
            }
        });

            // let devList = developers.map(developer => {
            //     return ninja.age < 30 ? (
            //         <div className="ninja" key={developer.id}>
            //              <div>Name: {developer.name}</div>
            //              <div>Age: {developer.age}</div>
            //              <div>Tech: {developer.tech}</div>
            //              <br/>
            //         </div>
            //     ) : null;
            // })


        return(
            <div>
                {/*{*/}
                    {/*devList = developers.map(developer => {*/}
                        {/*return developer.age < 30 ? (*/}
                        {/*<div className="ninja" key={developer.id}>*/}
                        {/*<div>Name: {developer.name}</div>*/}
                        {/*<div>Age: {developer.age}</div>*/}
                        {/*<div>Tech: {developer.tech}</div>*/}
                        {/*<br/>*/}
                        {/*</div>*/}
                        {/*) : null;*/}
                    {/*})*/}
                {/*}*/}
                { devList }
            </div>
        )
    // }
};

export default Developers;