import React, {useRef} from 'react'
import {useReactToPrint} from 'react-to-print'
import logo from '../../assets/logo.PNG'
import PieChart from '../PieChart/PieChart'
import LineChart from '../LineChart/LineChart'

import './index.css'



class Header extends React.Component {
  render() {
    return (
    <>   
       <img src={logo}/>
         <h1>{this.props.h1}</h1>
         <p>{this.props.paragrafo}</p>
    </>
    )
  }
}


class Index extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <header className="header">
            <Header
               h1="Relatório de Desagração de Carga"
               paragrafo="Abaixo você pode ver os detalhes de desagregação de carga para sua 
                          unidade em Julho de 2019."  
            />
          </header>
          <main>
            <div className="container-component"> 
              <PieChart/>
              <LineChart/>
            </div>
          </main>
        </div>
      </>
    )
  }
}

const Relatorio = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div> 
      <Index ref={componentRef} />
      <button onClick={handlePrint} className="btn">Exportar Relatório</button>
    </div>
  );
};

export default Relatorio

