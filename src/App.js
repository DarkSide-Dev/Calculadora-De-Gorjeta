import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Site = styled.body`

  width: 100%;

  height:100%;

  padding:0;

  margin:0;

`;

const Titulo = styled.h1``;

const Subtitulo = styled.h4``;

const Input = styled.input`

  border-radius:2px;

  border: 1px solid black;

  width:300px;

  height:40px;

  font-size:25px;

`;

const Text = styled.h5``;

const Page = () => {

  const [bill, setBill] = useState(0);

  const [tip, setTip] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(()=>{

    setTotal(bill + bill/100*tip);

  },[bill,tip]);

  return(

    <Site>

      <Titulo>Calculadora de gorjeta</Titulo>

      <Subtitulo>Quanto deu a conta?</Subtitulo>

      <Input type="number" onChange={e=>setBill(e.target.valueAsNumber)} value={bill} min="0" />

      <Subtitulo>Qual a porcentagem da gorjeta?</Subtitulo>

      <Input type="number" value={tip} onChange={e=>setTip(e.target.valueAsNumber)} min="0" />

      <hr/>

      { bill != 0 && tip != 0 && bill.toString() != "NaN" && tip.toString() != "NaN" &&

        <>

          <Text>Subtotal: R${bill}</Text>

          <Text>Gorjeta({tip}%): R${(bill/100*tip).toFixed(2)}</Text>

          <hr/>

          <Text style={{fontWeight:'bold', fontSize:27}}>Total: R${total.toFixed(2)}</Text>

        </>

      }

    </Site>

  );

}

export default Page;