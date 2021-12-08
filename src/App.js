import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul style={{listStyle: 'none'}}>
                        <li><Link to='/'>Home</Link></li>
                        <li Link to='/news'>Home</li>
                    </ul>

                    {/* <Switch>
                        <Route path='/' exact render={()=><div>Ini adalah halaman Home</div>} />
                        <Route path='/news' exact render={()=><div>Ini adalah halaman News</div>} />

                    </Switch> */}
                </div>
            </Router>
        )
    }
}
// import './css/bootstrap.min.css';
// import './App.css';
// import Home from './view/Home/Home';
// import About from './view/About/About';
// import Help from './view/Help/Help';
// import Profile from './view/Profile/Profile';


// class App extends Component {

//     constructor(){
//     super();

//     this.state = {
//         saldo : [],
//         deskripsi : null, 
//         nominal : null,
//         tipe : null,
//         total : 0,
//     }
// }

// setValueState(event){
//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }

// tambah(){
//     var data_tmp = this.state.saldo;
//     var text = this.state.tipe.toLowerCase();
//     var nominal = parseInt(this.state.nominal);

//     if(text=="pendapatan") {
//         this.state.total +=nominal;
//     }
//     else if(text=="pengeluaran") {
//         this.state.total -=nominal;
//     }
//     data_tmp.push({deskripsi : this.state.deskripsi, nominal :
//     this.state.nominal, tipe : this.state.tipe, total : this.state.total});
//     this.setState({
//         saldo : data_tmp
//     })
// }


// render(){
//     return(
//         <div className="container">
//             <div className="form-container">
//                 <div className="form-group">
//                     <label>Deskripsi : </label>
//                     <input type="text" name="deskripsi" value={this.state.deskripsi} onChange={this.setValueState.bind(this)} className="form-control"></input>
//                 </div>
//                 <div className="form-group">
//                     <label>Nominal : </label>
//                     <input type="number" min="0" name="nominal" value={this.state.nominal} onChange={this.setValueState.bind(this)} className="form-control"></input>
//                 </div>
//                 <div className="form-group">
//                     <label>Tipe : </label>
//                     <input type="text" name="tipe" value={this.state.tipe} onChange={this.setValueState.bind(this)} className="form-control"></input>
//                 </div>
//                 <button onClick={this.tambah.bind(this)} type="button" className="btn btn-primary">
//                     Tambah
//                 </button>
//             </div>
//             <br />
//             {/*cetak data mahasiswa ke tabel*/}
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Deskripsi</th>
//                         <th className="text-end">Nominal</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.saldo.map((saldo,index)=>(
//                      <tr key={index}>
//                          <td>{saldo.deskripsi}</td>
//                          <td className="text-end">{saldo.nominal}</td>
//                      </tr> 
//                   ))}  
//                     <tr className="fw-bold">
//                         <td>Total</td>
//                         <td className="text-end">Rp {this.state.total}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// //ROUTER
// render(){
//     return(
//         <Router>
//             <div>
//                 <Link to="/home">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/help">Help</Link>
//                 <Link to="/Profile/Jungkook">Jungkook</Link>
//                 <Link to="/Profile/Jimin">Jimin</Link>
//                 <Link to="/Profile/Taehyung">Taehyung</Link>

//                 <Route path="/" exact component={Home}></Route>
//                 <Route path="/home" exact component={Home}></Route>
//                 <Route path="/about" exact component={About}></Route>
//                 <Route path="/help" exact component={Help}></Route>
//                 <Route path="/profile:nama" exact component={Profile}></Route>

//             </div>
//         </Router>
//     )
// }

//FUNCTION
// constructor(){
//     super();

//     this.state = {
//         mahasiswa : [],
//         nama : null, 
//         nim : null,
//         nilai : null
//     }
// }

// setValueState(event){
//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }

// addData(){
//     var data_tmp = this.state.mahasiswa;
//     data_tmp.push({nim : this.state.nim, nama :
//     this.state.nama, nilai : this.state.nilai});
//     this.setState({
//         mahasiswa : data_tmp
//     })
// }

// deleteData(index){
//     var data_tmp=this.state.mahasiswa;
//     data_tmp.splice(index,1);
//     this.setState({
//         mahasiswa : data_tmp
//     })
// }

// render(){
//     return(
//         <div className="container">
//             <div className="form-container">
//                 <div className="form-group">
//                     <label>Nim:</label>
//                     <input type="text" name="nim" value={this.state.nim} onChange={this.setValueState.bind(this)} className="form-control"></input>
//                 </div>
//                 <div className="form-group">
//                     <label>Nama:</label>
//                     <input type="text" name="nama" value={this.state.nama} onChange={this.setValueState.bind(this)} className="form-control"></input>
//                 </div>
//                 <div className="form-group">
//                     <label>Nilai:</label>
//                     <input type="number" min="0" name="nilai" value={this.state.nilai} onChange={this.setValueState.bind(this)} className="form-control"></input>
//                 </div>
//                 <button onClick={this.addData.bind(this)} type="button" className="btn btn-primary">
//                     Submit
//                 </button>
//             </div>
//             <br />
//             {/*cetak data mahasiswa ke tabel*/}
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>Nim</th>
//                         <th>Nama</th>
//                         <th>Nilai</th>
//                         <th>#</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.mahasiswa.map((mhs,index)=>(
//                      <tr key={index}>
//                          <td>{index+1}</td>
//                          <td>{mhs.nim}</td>
//                          <td>{mhs.nama}</td>
//                          <td>{mhs.nilai}</td>
//                          <td>
//                              <button onClick={this.deleteData.bind(this,index)} className="btn btn-dange btn-sm">
//                                 Delete
//                              </button>
//                          </td>
//                      </tr> 
//                   ))}  
//                 </tbody>
//             </table>
//         </div>
//     )
// }
//MULTIDIMENSIONAL ARRAY
// render(){
//     var data = [
//         {nama : "Jungkook", nilai : 100},
//         {nama : "Jimin", nilai : 95},
//         {nama : "Taehyung", nilai : 98}
//     ]
//     var no=1;
//     return(
//         <table className="table">
//             <thead>
//             <tr>
//                 <th>No.</th>
//                 <th>Nama</th>
//                 <th>Nilai</th>

//             </tr>
//             </thead>
//             <tbody>
//                {data.map((item,index)=>(
//                    <tr key={index}>
//                        <td>{index+1}</td>
//                        <td>{item.nama}</td>
//                        <td>{item.nilai}</td>
//                    </tr>    
//                ))}
//             </tbody>
//         </table>
//     )
// }

//ASSOCIATIVE/OBJECT ARRAY
// render(){
//     var mahasiswa = {
//         nama : "Jungkook",
//         nim : "192111270",
//         email : "jungcookie@students.mikroskil.ac.id"
//     }
//     return(
//         <table>
//             <tr>
//               <td>Nim</td>
//               <td>:</td>  
//               <td>{mahasiswa.nim}</td>
//             </tr>
//             <tr>
//               <td>Nama</td>
//               <td>:</td>  
//               <td>{mahasiswa.nama}</td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>:</td>  
//               <td>{mahasiswa.email}</td>
//             </tr>
//         </table>
//     )
// }

// ARRAY
// render(){
//     var angka = [1,2,3]
//     var nama = ["Shinta","Jacqlyn","Faustine"]
//     var campuran = ["Shinta",1,"Jacqlyn",2,"Faustine",3]

//     return (
//         <div>
//             Isi array angka : 
//             <ul>
//                 {angka.map((item,index)=>(
//                     <li>Indeks ke - {index} : {item}</li>
//                 ))}
//             </ul>

//             Isi array nama :
//             <ul>
//                 {nama.map((item,index)=>(
//                     <li>Indeks ke- {index} : {item}</li>
//                 ))}
//             </ul>

//             Isi array campuran :
//             <ul>
//                 {campuran.map((item,index)=>(
//                     <li>Indeks ke - {index} : {item}</li>                    
//                 ))}

//             </ul>
//         </div>
//     );
// }


export default App;