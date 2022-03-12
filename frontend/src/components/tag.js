// import Link from "next/link"
// const Tag = ({ tags }) => {

//     return (
//         // <div className="conrainer">
//         //     <p className="is-size-4 has-text-weight-bold mb-2 mt-2">Tags</p>
//         //     <div className="columns is-mobile">
//         //         {
//         //             tags.map((tag, index) => {
//         //                 return (
//         //                     <div key={index} className="column is-3-desktop">
//         //                         <div className="buttons">
//         //                             <Link href={'/tag/' + tag.id}>
//         //                                 <button className="button is-focused is-rounded is-primary">{tag.name}</button>
//         //                             </Link>
//         //                         </div>
//         //                     </div>
//         //                 )
//         //             })
//         //         }
//         //     </div>
//         // </div>
//         <div className="conatianer mt-3">
//             <h3>Tags</h3>
//             <div className="row">
//                 {
//                     tags.map((tag, index) => {
//                         return (
//                             <div className="col-7 col-lg-3 col-md-4" key={index}>
//                                 <div>
//                                     <Link href={'/tag/' + tag.id}>
//                                         <button className="btn" type="button" style={{ backgroundColor: '#F1948A', color: '#fff', border: 1 }}>{tag.name}</button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// export default Tag