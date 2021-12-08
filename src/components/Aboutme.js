import React from 'react';

export const Aboutme = () => {
    let aboutStyle={
        display: "flex",
        flexDirection: "column",
        flexBasis: "50%",
        height: "100%",
        padding: "10px",
        // border: "2px solid green",
        backgroundColor: "#161716",
        overflow: "auto"
    }
    return (
        <div style={aboutStyle}>
            <section>
                <h1 style={{fontWeight: "bold"}}>about me</h1>
                <desc className="text-success">19 years / Web Developer / Freelance</desc>
                 <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolorum dolorem exercitationem, porro pariatur aut sed sunt impedit sit eos eum autem minima. Veniam minus accusantium dignissimos facilis laborum, quisquam enim, dolore deserunt sed voluptates maxime? Quo vero omnis itaque, praesentium accusamus totam, minus deserunt quod nulla maiores culpa unde!</p>
            </section>
            <hr/>
            <section>
                <h3 style={{fontWeight: "bold"}}>my services</h3>
                <div className="container">
                    <div className="row">
                      <div className="col-sm">
                       <h5 style={{fontWeight: "bold"}}>development</h5>
                       <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis sapiente maxime?</p>
                      </div>
                      <div className="col-sm">
                      <h5 style={{fontWeight: "bold"}}>SEO optimization</h5>
                       <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora voluptas molestias.</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                      <h5 style={{fontWeight: "bold"}}>data base</h5>
                       <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora voluptas molestias.</p>
                      </div>
                      <div className="col-sm">
                      <h5 style={{fontWeight: "bold"}}>data security</h5>
                       <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora voluptas molestias.</p>
                      </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section>
                <h4 style={{fontWeight: "bold"}}>my pricing</h4>
                <desc className="text-success">19 years / Web Developer / Freelance</desc>
                 <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolorum dolorem exercitationem, porro pariatur aut sed sunt impedit sit eos eum autem minima. Veniam minus accusantium dignissimos facilis laborum, quisquam enim, dolore deserunt sed voluptates maxime? Quo vero omnis itaque, praesentium accusamus totam, minus deserunt quod nulla maiores culpa unde!</p>
            </section>
            
        </div>
    )
}

// import React from 'react';
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <>
//       <MDBRow>
//         <MDBCol md='3' className='col-example'>
//           md="3"
//         </MDBCol>
//         <MDBCol md='6' className='col-example'>
//           md="6"
//         </MDBCol>
//         <MDBCol md='3' className='col-example'>
//           md="3"
//         </MDBCol>
//       </MDBRow>
//     </>
//   );
// }